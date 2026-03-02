"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allArticlesQuery, allCategoriesQuery } from "@/sanity/lib/queries";
import type { ArticleCard, SanityCategory } from "@/sanity/lib/types";
import { formatDate } from "@/sanity/lib/readTime";
import { ASSETS } from "@/lib/constants";

// ─── Article Card Component ───────────────────────────────────────────────────

function ArticleCardItem({ article }: { article: ArticleCard }) {
  const imageUrl = article.mainImage
    ? urlFor(article.mainImage).width(600).height(340).fit("crop").url()
    : null;
  const category = article.categories?.[0];

  return (
    <Link
      href={`/articles/${article.slug.current}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0D1B2E] hover:border-[#00D1FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,209,255,0.12)]"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-[#0A2540]">
        {imageUrl ? (
          <Image src={imageUrl} alt={article.mainImage?.alt || article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src={ASSETS.everestSitting} alt="HuskyTail Digital" width={80} height={80} className="opacity-30" />
          </div>
        )}
        {category && (
          <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(0,209,255,0.15)", color: "#00D1FF", border: "1px solid rgba(0,209,255,0.3)" }}>
            {category.title}
          </span>
        )}
        {article.featured && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(200,168,75,0.2)", color: "#c8a84b", border: "1px solid rgba(200,168,75,0.4)" }}>
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#00D1FF] transition-colors line-clamp-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-sm text-white/60 leading-relaxed line-clamp-3">{article.excerpt}</p>
        )}
        <div className="mt-auto flex items-center justify-between text-xs text-white/40 pt-3 border-t border-white/10">
          <span>{formatDate(article.publishedAt)}</span>
          {article.readTime && <span>{article.readTime} min read</span>}
        </div>
      </div>
    </Link>
  );
}

// ─── Featured Article Block ───────────────────────────────────────────────────

function FeaturedArticle({ article }: { article: ArticleCard }) {
  const imageUrl = article.mainImage
    ? urlFor(article.mainImage).width(1200).height(600).fit("crop").url()
    : null;
  const category = article.categories?.[0];

  return (
    <Link
      href={`/articles/${article.slug.current}`}
      className="group relative flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-[#c8a84b]/30 bg-[#0D1B2E] hover:border-[#c8a84b]/60 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(200,168,75,0.15)]"
    >
      {/* Image */}
      <div className="relative md:w-1/2 h-56 md:h-auto overflow-hidden bg-[#0A2540]">
        {imageUrl ? (
          <Image src={imageUrl} alt={article.mainImage?.alt || article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src={ASSETS.everestRock} alt="HuskyTail Digital" width={200} height={200} className="opacity-20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1B2E]/60 hidden md:block" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-7 md:p-10 md:w-1/2 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "rgba(200,168,75,0.15)", color: "#c8a84b", border: "1px solid rgba(200,168,75,0.4)" }}>
            ⭐ Featured Article
          </span>
          {category && (
            <span className="text-xs font-semibold" style={{ color: "#00D1FF" }}>{category.title}</span>
          )}
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight group-hover:text-[#c8a84b] transition-colors" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {article.title}
        </h2>
        {article.excerpt && (
          <p className="text-sm text-white/70 leading-relaxed line-clamp-3">{article.excerpt}</p>
        )}
        <div className="flex items-center gap-4 text-xs text-white/40 mt-2">
          <span>{formatDate(article.publishedAt)}</span>
          {article.readTime && <span>{article.readTime} min read</span>}
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-semibold mt-1" style={{ color: "#00D1FF" }}>
          Read Article →
        </span>
      </div>
    </Link>
  );
}

// ─── Email Capture ────────────────────────────────────────────────────────────

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "newsletter", source: "articles-index" }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #0D1B2E 0%, #0A2540 100%)", border: "1px solid rgba(200,168,75,0.3)" }}>
      <div className="flex justify-center mb-4">
        <Image src={ASSETS.everestSitting} alt="Everest the HuskyTail mascot" width={64} height={64} className="opacity-90" />
      </div>
      <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Get SEO Tips That Actually Work
      </h3>
      <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
        No fluff. No pitch deck. Just practical local SEO and AI search insights delivered to your inbox — straight from Stephen.
      </p>
      {status === "success" ? (
        <p className="text-[#00D1FF] font-semibold">🐾 You're in! Check your inbox for a confirmation.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D1FF]/60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)", color: "#0A2540" }}
          >
            {status === "loading" ? "Sending..." : "Send Me Tips 🐾"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm mt-2">Something went wrong. Try again or email us directly.</p>
      )}
      <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState({ category }: { category?: string }) {
  return (
    <div className="col-span-full text-center py-20">
      <Image src={ASSETS.everestSitting} alt="Everest the HuskyTail mascot" width={80} height={80} className="mx-auto mb-4 opacity-60" />
      <h3 className="text-xl font-bold text-white/70 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
        {category ? `No articles in this category yet` : "No articles yet"}
      </h3>
      <p className="text-white/40 text-sm">Check back soon — Everest is working on it. 🐾</p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

function ArticlesPageContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const [articles, setArticles] = useState<ArticleCard[]>([]);
  const [categories, setCategories] = useState<SanityCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [allArticles, allCats] = await Promise.all([
          sanityClient.fetch<ArticleCard[]>(allArticlesQuery),
          sanityClient.fetch<SanityCategory[]>(allCategoriesQuery),
        ]);
        setArticles(allArticles || []);
        setCategories(allCats || []);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filtered = activeCategory === "all"
    ? articles
    : articles.filter((a) => a.categories?.some((c) => c.slug?.current === activeCategory));

  const featured = filtered.find((a) => a.featured);
  const grid = filtered.filter((a) => !a.featured || a !== featured);

  // JSON-LD Blog schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "HuskyTail Digital Marketing Articles",
    "description": "Local SEO strategy, GEO insights, and technical tips for Las Vegas businesses.",
    "url": "https://huskytaildigital.com/articles",
    "publisher": {
      "@type": "Organization",
      "name": "HuskyTail Digital Marketing",
      "url": "https://huskytaildigital.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://huskytaildigital.com/logo.png"
      }
    },
    "blogPost": articles.slice(0, 10).map((a) => ({
      "@type": "BlogPosting",
      "headline": a.title,
      "url": `https://huskytaildigital.com/articles/${a.slug.current}`,
      "datePublished": a.publishedAt,
      "description": a.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen" style={{ background: "#0A0F1E" }}>

        {/* ── Hero ── */}
        <section className="relative pt-24 pb-12 px-4 overflow-hidden" style={{ background: "linear-gradient(180deg, #0A2540 0%, #0A0F1E 100%)" }}>
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #00D1FF 0%, transparent 60%)" }} />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full" style={{ color: "#00D1FF", background: "rgba(0,209,255,0.1)", border: "1px solid rgba(0,209,255,0.25)" }}>
              HuskyTail Articles
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
              SEO Strategy.<br />
              <span style={{ color: "#c8a84b" }}>No Fluff.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Local SEO strategy, GEO insights, and technical tips for Las Vegas businesses that want to rank — written by Stephen, tested in the field.
            </p>
          </div>
        </section>

        {/* ── Category Filter ── */}
        <section className="sticky top-16 z-30 px-4 py-3 border-b border-white/10" style={{ background: "rgba(10,15,30,0.95)", backdropFilter: "blur(12px)" }}>
          <div className="max-w-5xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            <Link
              href="/articles"
              className="shrink-0 text-xs font-semibold px-4 py-2 rounded-full transition-all"
              style={activeCategory === "all"
                ? { background: "#00D1FF", color: "#0A2540" }
                : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }
              }
            >
              All Articles
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/articles?category=${cat.slug.current}`}
                className="shrink-0 text-xs font-semibold px-4 py-2 rounded-full transition-all whitespace-nowrap"
                style={activeCategory === cat.slug.current
                  ? { background: "#00D1FF", color: "#0A2540" }
                  : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }
                }
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Content ── */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-[#0D1B2E] animate-pulse">
                  <div className="h-48 bg-white/5" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-white/10 rounded w-3/4" />
                    <div className="h-3 bg-white/5 rounded w-full" />
                    <div className="h-3 bg-white/5 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState category={activeCategory !== "all" ? activeCategory : undefined} />
          ) : (
            <div className="space-y-10">
              {/* Featured */}
              {featured && <FeaturedArticle article={featured} />}

              {/* Grid */}
              {grid.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {grid.map((article) => (
                    <ArticleCardItem key={article._id} article={article} />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* ── Email Capture ── */}
        <section className="max-w-3xl mx-auto px-4 pb-20">
          <EmailCapture />
        </section>

      </main>
    </>
  );
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#0A0F1E" }}>
        <div className="text-white/40 text-sm animate-pulse">Loading articles...</div>
      </main>
    }>
      <ArticlesPageContent />
    </Suspense>
  );
}
