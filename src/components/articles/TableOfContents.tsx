"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
}

function extractH2sFromBody(body: any[]): TocItem[] {
  if (!Array.isArray(body)) return [];
  return body
    .filter((block) => block._type === "block" && block.style === "h2")
    .map((block) => {
      const text = (block.children || [])
        .filter((c: any) => c._type === "span")
        .map((c: any) => c.text || "")
        .join("");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      return { id, text };
    })
    .filter((item) => item.text.length > 0);
}

// Scroll to heading with offset to clear the fixed nav bar (88px) + extra breathing room
function scrollToHeading(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const NAV_HEIGHT = 96; // 88px nav + 8px breathing room
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

interface TableOfContentsProps {
  body: any[];
  variant?: "inline" | "sidebar";
}

export default function TableOfContents({ body, variant = "inline" }: TableOfContentsProps) {
  const items = extractH2sFromBody(body);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Add IDs to the rendered H2 elements and set scroll-margin-top
    const headings = document.querySelectorAll("article h2");
    headings.forEach((el, i) => {
      if (items[i]) {
        el.id = items[i].id;
        // Ensure native anchor scrolling also clears the nav
        (el as HTMLElement).style.scrollMarginTop = "96px";
      }
    });

    // Intersection observer for active highlight
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0% -80% 0%", threshold: 0 }
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  if (variant === "sidebar") {
    return (
      <div
        className="rounded-xl p-5"
        style={{ background: "#0D1B2E", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">On This Page</h4>
        <nav>
          <ul className="space-y-1.5">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block text-xs leading-snug transition-colors"
                  style={{
                    color: activeId === item.id ? "#00D1FF" : "rgba(255,255,255,0.55)",
                    fontWeight: activeId === item.id ? 600 : 400,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHeading(item.id);
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }

  // Inline variant
  return (
    <div
      className="my-8 rounded-2xl p-6"
      style={{
        background: "linear-gradient(135deg, #0A2540 0%, #0D1B2E 100%)",
        border: "1px solid rgba(0,209,255,0.2)",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#00D1FF] text-sm">📋</span>
        <h3
          className="text-sm font-bold text-white uppercase tracking-wider"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          In This Article
        </h3>
      </div>
      <nav>
        <ol className="space-y-2">
          {items.map((item, i) => (
            <li key={item.id} className="flex items-start gap-3">
              <span
                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                style={{ background: "rgba(0,209,255,0.15)", color: "#00D1FF" }}
              >
                {i + 1}
              </span>
              <a
                href={`#${item.id}`}
                className="text-sm text-white/70 hover:text-[#00D1FF] transition-colors leading-snug"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHeading(item.id);
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
