import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { sanityClientServer } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { articleBySlugQuery, articleSlugsQuery, relatedArticlesByCategoryQuery } from "@/sanity/lib/queries";
import type { SanityArticle, ArticleCard, FaqItem } from "@/sanity/lib/types";
import { formatDate, calcReadTime } from "@/sanity/lib/readTime";
import { ASSETS, SITE_URL } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/articles/ReadingProgressBar";
import TableOfContents from "@/components/articles/TableOfContents";

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const slugs = await sanityClientServer.fetch<{ slug: string }[]>(articleSlugsQuery);
    return (slugs || []).map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await sanityClientServer.fetch<SanityArticle>(articleBySlugQuery, { slug });
    if (!article) return { title: "Article Not Found" };

    const title = article.metaTitle || article.title;
    const description = article.metaDescription || article.excerpt || "";
    const imageUrl = article.ogImage
      ? urlFor(article.ogImage).width(1200).height(630).url()
      : article.mainImage
      ? urlFor(article.mainImage).width(1200).height(630).url()
      : undefined;

    return {
      title,  // root layout template appends " | HuskyTail Digital" — do not add it here
      description,
      keywords: article.focusKeyword ? [article.focusKeyword] : undefined,
      robots: article.noIndex ? "noindex, nofollow" : "index, follow",
      alternates: {
        canonical: article.canonicalUrl || `${SITE_URL}/articles/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/articles/${slug}`,
        type: "article",
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
        authors: article.author?.name ? [article.author.name] : undefined,
        images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: title }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: imageUrl ? [imageUrl] : undefined,
      },
    };
  } catch {
    return { title: "Article | HuskyTail Digital" };
  }
}

// ─── Portable Text Components ─────────────────────────────────────────────────

const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlFor(value).width(900).url();
      return (
        <figure className="my-8">
          <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image src={src} alt={value.alt || ""} fill className="object-cover" />
          </div>
          {value.caption && (
            <figcaption className="text-center text-xs text-white/40 mt-2 italic">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
    statBlock: ({ value }) => (
      <div className="my-6 p-6 rounded-xl text-center" style={{ background: "rgba(0,209,255,0.08)", border: "1px solid rgba(0,209,255,0.2)" }}>
        <div className="text-4xl font-black" style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}>{value.stat}</div>
        <div className="text-white font-semibold mt-1">{value.label}</div>
        {value.source && <div className="text-white/40 text-xs mt-1">Source: {value.source}</div>}
      </div>
    ),
    summaryBox: ({ value }) => (
      <div className="my-6 p-6 rounded-xl" style={{ background: "rgba(200,168,75,0.08)", border: "1px solid rgba(200,168,75,0.25)" }}>
        {value.headline && <div className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: "#c8a84b" }}>{value.headline}</div>}
        <p className="text-white/80 text-sm leading-relaxed">{value.content}</p>
      </div>
    ),
    promoCard: ({ value }) => (
      <div className="my-8 p-7 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #0A2540 0%, #0D1B2E 100%)", border: "1px solid rgba(0,209,255,0.3)" }}>
        <h4 className="text-xl font-black text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{value.headline}</h4>
        {value.body && <p className="text-white/60 text-sm mb-5">{value.body}</p>}
        {value.ctaLabel && value.ctaUrl && (
          <Link href={value.ctaUrl} className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)", color: "#0A2540" }}>
            {value.ctaLabel}
          </Link>
        )}
      </div>
    ),
    sectionDivider: ({ value }) => (
      <div className="my-10 flex items-center gap-4">
        <div className="flex-1 h-px bg-white/10" />
        {value.heading && <span className="text-xs font-bold uppercase tracking-widest text-white/30">{value.heading}</span>}
        <div className="flex-1 h-px bg-white/10" />
      </div>
    ),
    videoEmbed: ({ value }) => {
      if (!value?.url) return null;
      const isYoutube = value.url.includes("youtube.com") || value.url.includes("youtu.be");
      const isVimeo = value.url.includes("vimeo.com");
      let embedUrl = value.url;
      if (isYoutube) {
        const id = value.url.split("v=")[1]?.split("&")[0] || value.url.split("/").pop();
        embedUrl = `https://www.youtube.com/embed/${id}`;
      } else if (isVimeo) {
        const id = value.url.split("/").pop();
        embedUrl = `https://player.vimeo.com/video/${id}`;
      }
      return (
        <figure className="my-8">
          <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <iframe src={embedUrl} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          {value.caption && <figcaption className="text-center text-xs text-white/40 mt-2 italic">{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-black text-white mt-10 mb-4 leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-white mt-8 mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-white/90 mt-6 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-white/75 leading-relaxed mb-5 text-base">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 pl-5 border-l-4 italic text-white/60" style={{ borderColor: "#00D1FF" }}>{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic text-white/80">{children}</em>,
    link: ({ children, value }) => (
      <a href={value?.href} target={value?.href?.startsWith("http") ? "_blank" : undefined} rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined} className="underline underline-offset-2 transition-colors" style={{ color: "#00D1FF" }}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-5 text-white/75 pl-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-5 text-white/75 pl-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item._key} className="group rounded-xl overflow-hidden" style={{ background: "#0D1B2E", border: "1px solid rgba(255,255,255,0.1)" }}>
          <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-semibold text-sm list-none" style={{ fontFamily: "Montserrat, sans-serif" }}>
            {item.question}
            <span className="ml-4 shrink-0 text-[#00D1FF] group-open:rotate-180 transition-transform">▾</span>
          </summary>
          <div className="px-5 pb-5 text-white/65 text-sm leading-relaxed border-t border-white/10 pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

// ─── Related Articles ─────────────────────────────────────────────────────────

function RelatedArticles({ articles }: { articles: ArticleCard[] }) {
  if (!articles.length) return null;
  return (
    <section className="mt-16 pt-10 border-t border-white/10">
      <h3 className="text-xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articles.map((a) => {
          const imgUrl = a.mainImage ? urlFor(a.mainImage).width(400).height(220).fit("crop").url() : null;
          return (
            <Link key={a._id} href={`/articles/${a.slug.current}`} className="group flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#0D1B2E] hover:border-[#00D1FF]/40 transition-all hover:-translate-y-0.5">
              <div className="relative h-36 bg-[#0A2540]">
                {imgUrl && <Image src={imgUrl} alt={a.mainImage?.alt || a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />}
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-white leading-snug group-hover:text-[#00D1FF] transition-colors line-clamp-2">{a.title}</p>
                <p className="text-xs text-white/40 mt-2">{formatDate(a.publishedAt)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article: SanityArticle | null = null;
  let relatedArticles: ArticleCard[] = [];

  try {
    article = await sanityClientServer.fetch<SanityArticle>(articleBySlugQuery, { slug });
  } catch (err) {
    console.error("Failed to fetch article:", err);
  }

  if (!article) notFound();

  const readTime = calcReadTime(article.body, article.readTime);
  const primaryCategory = article.categories?.[0];

  // Fetch related articles
  try {
    if (article.relatedPosts && article.relatedPosts.length > 0) {
      relatedArticles = article.relatedPosts;
    } else if (primaryCategory) {
      relatedArticles = await sanityClientServer.fetch<ArticleCard[]>(relatedArticlesByCategoryQuery, {
        categorySlug: primaryCategory.slug.current,
        currentSlug: slug,
      });
    }
  } catch {}

  const authorImageUrl = article.author?.headshot
    ? urlFor(article.author.headshot).width(80).height(80).fit("crop").url()
    : null;

  const mainImageUrl = article.mainImage
    ? urlFor(article.mainImage).width(1200).height(600).fit("crop").url()
    : null;

  // JSON-LD Article schema
  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription || article.excerpt,
    "url": `${SITE_URL}/articles/${slug}`,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt || article.publishedAt,
    "author": {
      "@type": "Person",
      "name": article.author?.name || "Stephen Gardner",
      "url": `${SITE_URL}/about`,
      "jobTitle": article.author?.title || "Founder & AiSEO Consultant",
    },
    "publisher": {
      "@type": "Organization",
      "name": "HuskyTail Digital Marketing",
      "url": SITE_URL,
    },
    "image": mainImageUrl || undefined,
    "keywords": article.focusKeyword || undefined,
  };

  if (mainImageUrl) {
    articleSchema["image"] = { "@type": "ImageObject", "url": mainImageUrl };
  }

  // FAQ schema if items exist
  const faqSchema = article.faqItems && article.faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ReadingProgressBar />
      <Navigation />
      <main className="min-h-screen" style={{ background: "#0A0F1E" }}>

        {/* ── Hero ── */}
        <section className="relative pt-20 pb-0" style={{ background: "linear-gradient(180deg, #0A2540 0%, #0A0F1E 100%)" }}>
          {mainImageUrl && (
            <div className="relative w-full h-64 md:h-96 overflow-hidden">
              <Image src={mainImageUrl} alt={article.mainImage?.alt || article.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/40 to-transparent" />
            </div>
          )}

          <div className={`max-w-4xl mx-auto px-4 ${mainImageUrl ? "-mt-20 relative z-10" : "pt-8"} pb-8`}>
             {/* Breadcrumb — Home / Articles / Category (no duplicate) */}
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/articles" className="hover:text-white/70 transition-colors">Articles</Link>
              {primaryCategory && (
                <>
                  <span>/</span>
                  <span className="text-white/60">{primaryCategory.title}</span>
                </>
              )}
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-5" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              {article.author && (
                <div className="flex items-center gap-2">
                  {authorImageUrl ? (
                    <Image src={authorImageUrl} alt={article.author.name} width={28} height={28} className="rounded-full object-cover" />
                  ) : (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#00D1FF", color: "#0A2540" }}>
                      {article.author.name[0]}
                    </div>
                  )}
                  <span className="text-white/70 font-medium">{article.author.name}</span>
                </div>
              )}
              {article.publishedAt && <span>{formatDate(article.publishedAt)}</span>}
              {article.updatedAt && article.updatedAt !== article.publishedAt && (
                <span>Updated {formatDate(article.updatedAt)}</span>
              )}
              <span>{readTime} min read</span>
            </div>
          </div>
        </section>

          {/* ── Body + Sidebar ── */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article Body */}
            <article className="flex-1 min-w-0">
              {/* Featured image — shown here if no hero image, or always as article image */}
              {!mainImageUrl && (
                <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0A2540 0%, #0D1B2E 100%)", border: "1px solid rgba(0,209,255,0.15)" }}>
                  <Image src={ASSETS.everestRock} alt="HuskyTail Digital Marketing" width={120} height={120} className="opacity-25" />
                </div>
              )}
              {article.excerpt && (
                <p className="text-lg text-white/60 leading-relaxed mb-8 pb-8 border-b border-white/10 italic">
                  {article.excerpt}
                </p>
              )}
              {/* Inline Table of Contents */}
              {article.body && <TableOfContents body={article.body} variant="inline" />}
              {article.body && (
                <div className="prose-custom">
                  <PortableText value={article.body} components={ptComponents} />
                </div>
              )}

              {/* FAQ Section */}
              {article.faqItems && article.faqItems.length > 0 && (
                <section className="mt-12 pt-10 border-t border-white/10">
                  <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Frequently Asked Questions
                  </h2>
                  <FaqAccordion items={article.faqItems} />
                </section>
              )}

              {/* Author Bio */}
              {article.author && (
                <div className="mt-12 p-6 rounded-2xl flex gap-5 items-start" style={{ background: "#0D1B2E", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {authorImageUrl ? (
                    <Image src={authorImageUrl} alt={article.author.name} width={64} height={64} className="rounded-full object-cover shrink-0" />
                  ) : (
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black shrink-0" style={{ background: "#00D1FF", color: "#0A2540" }}>
                      {article.author.name[0]}
                    </div>
                  )}
                  <div>
                    <div className="text-white font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>{article.author.name}</div>
                    {article.author.title && <div className="text-[#00D1FF] text-xs mb-2">{article.author.title}</div>}
                    {article.author.bio && <p className="text-white/60 text-sm leading-relaxed">{article.author.bio}</p>}
                    {article.author.credentials && article.author.credentials.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {article.author.credentials.map((c, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(0,209,255,0.1)", color: "#00D1FF", border: "1px solid rgba(0,209,255,0.2)" }}>{c}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <RelatedArticles articles={relatedArticles} />
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-6">
              {/* Sidebar Table of Contents */}
              {article.body && <TableOfContents body={article.body} variant="sidebar" />}
              {/* CTA Card */}
              <div className="rounded-2xl p-6 text-center sticky top-24" style={{ background: "linear-gradient(135deg, #0A2540 0%, #0D1B2E 100%)", border: "1px solid rgba(200,168,75,0.3)" }}>
                <Image src={ASSETS.everestSitting} alt="Everest the HuskyTail mascot" width={56} height={56} className="mx-auto mb-3" />
                <h3 className="text-lg font-black text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Ready to Rank?
                </h3>
                <p className="text-white/55 text-xs leading-relaxed mb-5">
                  Get a free SEO audit and find out exactly why you're not showing up — and what it'll take to fix it.
                </p>
                <Link
                  href="/paw-sultation"
                  className="block w-full py-3 rounded-full text-sm font-bold text-center transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)", color: "#0A2540" }}
                >
                  🐾 Get My Free Audit
                </Link>
                <p className="text-white/30 text-xs mt-3">No spam. No pitch deck. Just clarity.</p>
              </div>

              {/* Category links */}
              {article.categories && article.categories.length > 0 && (
                <div className="rounded-xl p-5" style={{ background: "#0D1B2E", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.categories.map((cat) => (
                      <Link key={cat._id} href={`/articles?category=${cat.slug.current}`} className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-80" style={{ background: "rgba(0,209,255,0.1)", color: "#00D1FF", border: "1px solid rgba(0,209,255,0.2)" }}>
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related cities/industries tags */}
              {(article.relatedCities && article.relatedCities.length > 0) && (
                <div className="rounded-xl p-5" style={{ background: "#0D1B2E", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Related Cities</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.relatedCities.map((city) => (
                      <Link key={city} href={`/${city.toLowerCase().replace(/\s+/g, "-")}-seo`} className="text-xs px-3 py-1.5 rounded-full text-white/60 hover:text-white transition-colors" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </aside>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="max-w-3xl mx-auto px-4 pb-20">
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #0A2540 0%, #0D1B2E 100%)", border: "1px solid rgba(0,209,255,0.25)" }}>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Let's Put This Into Practice
            </h3>
            <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
              Reading about SEO is one thing. Actually ranking is another. Book a free 30-minute call with Stephen and let's figure out your next move.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/paw-sultation" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)", color: "#0A2540" }}>
                🐾 Get My Free SEO Audit
              </Link>
              <Link href="/articles" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold border-2 transition-all hover:bg-white/10" style={{ borderColor: "#00D1FF", color: "#00D1FF" }}>
                ← Back to Articles
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
