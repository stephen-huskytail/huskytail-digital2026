"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  articlesByCityAndIndustryQuery,
  articlesByCityQuery,
  articlesByIndustryQuery,
  allArticlesQuery,
} from "@/sanity/lib/queries";
import type { ArticleCard } from "@/sanity/lib/types";
import { formatDate } from "@/sanity/lib/readTime";
import { ASSETS } from "@/lib/constants";

interface FromTheBlogProps {
  city?: string;
  industry?: string;
  limit?: number;
}

export function FromTheBlog({ city, industry, limit = 3 }: FromTheBlogProps) {
  const [articles, setArticles] = useState<ArticleCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      try {
        let results: ArticleCard[] = [];

        // Priority: city + industry match → city only → industry only → latest
        if (city && industry) {
          results = await sanityClient.fetch<ArticleCard[]>(articlesByCityAndIndustryQuery, { city, industry });
        }
        if (results.length < limit && city) {
          const cityResults = await sanityClient.fetch<ArticleCard[]>(articlesByCityQuery, { city });
          const existing = new Set(results.map((a) => a._id));
          results = [...results, ...cityResults.filter((a) => !existing.has(a._id))];
        }
        if (results.length < limit && industry) {
          const industryResults = await sanityClient.fetch<ArticleCard[]>(articlesByIndustryQuery, { industry });
          const existing = new Set(results.map((a) => a._id));
          results = [...results, ...industryResults.filter((a) => !existing.has(a._id))];
        }
        if (results.length < limit) {
          const allResults = await sanityClient.fetch<ArticleCard[]>(allArticlesQuery);
          const existing = new Set(results.map((a) => a._id));
          results = [...results, ...allResults.filter((a) => !existing.has(a._id))];
        }

        setArticles(results.slice(0, limit));
      } catch (err) {
        console.error("FromTheBlog fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [city, industry, limit]);

  // Don't render the section if no articles
  if (!loading && articles.length === 0) return null;

  return (
    <section className="py-16 px-4" style={{ background: "#0D1B2E" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "#00D1FF" }}>
              From the Blog
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {city && industry
                ? `${industry} SEO Insights for ${city}`
                : city
                ? `SEO Tips for ${city} Businesses`
                : industry
                ? `${industry} SEO Strategy`
                : "Latest SEO Insights"}
            </h2>
          </div>
          <Link
            href="/articles"
            className="hidden md:inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80 shrink-0"
            style={{ color: "#00D1FF" }}
          >
            View All →
          </Link>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-[#0A1929] animate-pulse">
                <div className="h-40 bg-white/5" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/5 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => {
              const imgUrl = article.mainImage
                ? urlFor(article.mainImage).width(500).height(280).fit("crop").url()
                : null;
              const category = article.categories?.[0];

              return (
                <Link
                  key={article._id}
                  href={`/articles/${article.slug.current}`}
                  className="group flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#0A1929] hover:border-[#00D1FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,209,255,0.1)]"
                >
                  {/* Thumbnail */}
                  <div className="relative h-40 overflow-hidden bg-[#0A2540]">
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={article.mainImage?.alt || article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image src={ASSETS.everestSitting} alt="HuskyTail Digital" width={48} height={48} className="opacity-20" />
                      </div>
                    )}
                    {category && (
                      <span
                        className="absolute top-2 left-2 text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(0,209,255,0.15)", color: "#00D1FF", border: "1px solid rgba(0,209,255,0.3)" }}
                      >
                        {category.title}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 gap-2">
                    <h3
                      className="text-sm font-bold text-white leading-snug group-hover:text-[#00D1FF] transition-colors line-clamp-2"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-xs text-white/50 leading-relaxed line-clamp-2">{article.excerpt}</p>
                    )}
                    <div className="mt-auto flex items-center justify-between text-xs text-white/30 pt-2 border-t border-white/10">
                      <span>{formatDate(article.publishedAt)}</span>
                      {article.readTime && <span>{article.readTime} min</span>}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Mobile view all link */}
        <div className="mt-6 text-center md:hidden">
          <Link href="/articles" className="text-sm font-semibold" style={{ color: "#00D1FF" }}>
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
