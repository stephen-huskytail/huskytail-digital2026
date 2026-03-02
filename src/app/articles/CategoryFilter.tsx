"use client";

import Link from "next/link";
import type { SanityCategory } from "@/sanity/lib/types";

export default function CategoryFilter({
  categories,
  activeCategory,
}: {
  categories: SanityCategory[];
  activeCategory: string;
}) {
  return (
    <section
      className="sticky top-16 z-30 px-4 py-3 border-b border-white/10"
      style={{ background: "rgba(10,15,30,0.95)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-5xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
        <Link
          href="/articles"
          className="shrink-0 text-xs font-semibold px-4 py-2 rounded-full transition-all"
          style={
            activeCategory === "all"
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
            style={
              activeCategory === cat.slug.current
                ? { background: "#00D1FF", color: "#0A2540" }
                : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }
            }
          >
            {cat.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
