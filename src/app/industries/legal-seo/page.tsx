"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const EVEREST_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-hero-realistic-laptop-KVdGPHKu5pyaQZJNE9SKsk.webp";

const STATS = [
  {
    "value": "96%",
    "label": "of people seeking legal help start with a Google search"
  },
  {
    "value": "62%",
    "label": "of legal searches happen on mobile — often in a crisis moment"
  },
  {
    "value": "3-Pack",
    "label": "captures the majority of clicks for 'attorney near me' searches"
  },
  {
    "value": "5×",
    "label": "higher ROI from SEO vs. TV and billboard advertising for attorneys"
  }
];

const NICHES = [
  {
    "slug": "attorney",
    "name": "Attorney",
    "icon": "⚖️",
    "description": "Rank for general legal searches and capture clients who need legal help but aren't sure where to start."
  },
  {
    "slug": "personal-injury",
    "name": "Personal Injury",
    "icon": "🏥",
    "description": "Own 'personal injury attorney Las Vegas' and capture high-value accident and injury cases."
  },
  {
    "slug": "family-law",
    "name": "Family Law",
    "icon": "👨‍👩‍👧",
    "description": "Rank for divorce, custody, and family law searches from clients who need trusted representation."
  },
  {
    "slug": "criminal-defense",
    "name": "Criminal Defense",
    "icon": "🏛️",
    "description": "Dominate criminal defense searches — high urgency, high intent, and high case value."
  },
  {
    "slug": "immigration",
    "name": "Immigration",
    "icon": "🌎",
    "description": "Connect with clients searching for visa, green card, and immigration legal help in Nevada."
  },
  {
    "slug": "real-estate-attorney",
    "name": "Real Estate Attorney",
    "icon": "🏠",
    "description": "Rank for real estate closing, contract disputes, and property law searches in the Las Vegas market."
  },
  {
    "slug": "bankruptcy-attorney",
    "name": "Bankruptcy Attorney",
    "icon": "📋",
    "description": "Capture Chapter 7 and Chapter 13 bankruptcy searches from clients ready to take action."
  },
  {
    "slug": "dui-attorney",
    "name": "DUI Attorney",
    "icon": "🚗",
    "description": "Own DUI and traffic defense searches — among the highest-urgency legal searches in Las Vegas."
  },
  {
    "slug": "estate-planning-attorney",
    "name": "Estate Planning Attorney",
    "icon": "📜",
    "description": "Rank for wills, trusts, and estate planning searches from Las Vegas residents planning their future."
  },
  {
    "slug": "workers-comp-attorney",
    "name": "Workers' Comp Attorney",
    "icon": "🦺",
    "description": "Capture workers' compensation and workplace injury searches from employees who need help."
  },
  {
    "slug": "business-attorney",
    "name": "Business Attorney",
    "icon": "💼",
    "description": "Rank for business formation, contract review, and commercial litigation searches in Nevada."
  }
];

const CITIES = [
  {
    "slug": "las-vegas",
    "name": "Las Vegas"
  },
  {
    "slug": "henderson",
    "name": "Henderson"
  },
  {
    "slug": "paradise",
    "name": "Paradise"
  },
  {
    "slug": "spring-valley",
    "name": "Spring Valley"
  },
  {
    "slug": "north-las-vegas",
    "name": "North Las Vegas"
  },
  {
    "slug": "summerlin",
    "name": "Summerlin"
  },
  {
    "slug": "anthem",
    "name": "Anthem"
  },
  {
    "slug": "green-valley",
    "name": "Green Valley"
  },
  {
    "slug": "boulder-city",
    "name": "Boulder City"
  },
  {
    "slug": "mesquite",
    "name": "Mesquite"
  },
  {
    "slug": "pahrump",
    "name": "Pahrump"
  },
  {
    "slug": "laughlin",
    "name": "Laughlin"
  }
];

const FAQS = [
  {
    "q": "How does SEO work for law firms in Las Vegas?",
    "a": "Legal SEO focuses on three pillars: practice area pages (ranking for the specific legal services you offer), Google Business Profile optimization (appearing in the map pack for local searches), and content authority (building the topical depth that Google rewards with top rankings). We layer in review strategy and citation building to create a system that compounds over time."
  },
  {
    "q": "How competitive is legal SEO in Las Vegas?",
    "a": "Very competitive — especially for personal injury, criminal defense, and DUI. But competition also means high search volume and high case values. The ROI on legal SEO is among the highest of any industry because a single case can be worth thousands to tens of thousands of dollars."
  },
  {
    "q": "How long does it take to see results from law firm SEO?",
    "a": "Most law firms see measurable ranking improvements within 60–90 days. Highly competitive practice areas like personal injury may take 4–6 months to reach page one consistently. The key advantage of SEO over paid ads: the rankings you build keep generating leads without ongoing ad spend."
  },
  {
    "q": "Do you understand legal marketing compliance rules?",
    "a": "Yes. We build all content and strategies with bar association advertising rules in mind. No misleading claims, no guaranteed outcomes, no unauthorized testimonials. Our content is designed to be both effective and compliant."
  },
  {
    "q": "Can you help a solo attorney compete with large firms?",
    "a": "Absolutely. Local SEO levels the playing field. A solo attorney with a well-optimized Google Business Profile, strong reviews, and targeted practice area pages can outrank large firms for the searches that matter most in their specific market."
  }
];

const TESTIMONIALS = [
  {
    "result": "Page 3 → #1 in 90 Days",
    "specialty": "Personal Injury Attorney",
    "city": "Las Vegas, NV",
    "quote": "We were spending a fortune on billboards with mediocre results. SEO changed everything — we're now getting 3–4 qualified consultation calls every single day.",
    "name": "R.M., Partner",
    "icon": "⚖️"
  },
  {
    "result": "4× More Consultations",
    "specialty": "Criminal Defense Attorney",
    "city": "Henderson, NV",
    "quote": "Criminal defense is brutally competitive in Las Vegas. HuskyTail got us into the map pack and our consultation volume quadrupled in four months.",
    "name": "J.T., Attorney",
    "icon": "🏛️"
  },
  {
    "result": "Map Pack in 60 Days",
    "specialty": "Family Law Attorney",
    "city": "Summerlin, NV",
    "quote": "Divorce and custody cases require trust before the first call. Being visible on Google with strong reviews made all the difference in our client quality.",
    "name": "A.K., Attorney",
    "icon": "👨‍👩‍👧"
  }
];

const WHY_SERVICES = [
  {
    "title": "Practice Area Page Optimization",
    "desc": "Rank for the exact terms your ideal clients search — from 'personal injury attorney Las Vegas' to 'divorce lawyer Henderson.'"
  },
  {
    "title": "Google Business Profile Management",
    "desc": "Dominate the map pack where high-intent legal searches convert directly to consultation calls."
  },
  {
    "title": "Review Strategy & Reputation Management",
    "desc": "More 5-star reviews build the trust that converts searchers into clients before they call anyone else."
  },
  {
    "title": "Content Authority Building",
    "desc": "Legal content that answers real questions, builds topical authority, and ranks for long-tail searches your competitors ignore."
  }
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="font-bold text-[#0A0F1E] text-base leading-snug">{faq.q}</span>
            <span
              className="text-[#C8A84B] text-xl font-bold flex-shrink-0 transition-transform duration-200"
              style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function NicheSearch() {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("las-vegas");

  const filtered = NICHES.filter((n) =>
    n.name.toLowerCase().includes(query.toLowerCase()) ||
    n.description.toLowerCase().includes(query.toLowerCase())
  );

  const selectedCityName = CITIES.find((c) => c.slug === selectedCity)?.name ?? "Las Vegas";

  return (
    <div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 mb-8 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search by specialty or service..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#C8A84B] focus:outline-none text-[#0A0F1E] text-sm bg-gray-50 focus:bg-white transition-colors"
          />
        </div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">📍</span>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="pl-10 pr-8 py-3 rounded-xl border border-gray-200 focus:border-[#C8A84B] focus:outline-none text-[#0A0F1E] text-sm bg-gray-50 focus:bg-white transition-colors appearance-none cursor-pointer min-w-[160px]"
          >
            {CITIES.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-6">
        {filtered.length === NICHES.length
          ? `Showing all ${NICHES.length} legal services`
          : `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`}
        {" · "}
        <span className="text-[#C8A84B] font-medium">{selectedCityName}, NV</span>
      </p>
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold text-lg">No services match "{query}"</p>
          <button onClick={() => setQuery("")} className="mt-3 text-[#C8A84B] hover:underline text-sm">
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((niche) => (
            <Link
              key={niche.slug}
              href={`/${niche.slug}-seo-${selectedCity}`}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-[#C8A84B] hover:shadow-lg transition-all duration-200 p-6 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl">{niche.icon}</span>
                <div>
                  <h3 className="font-bold text-[#0A0F1E] text-base group-hover:text-[#C8A84B] transition-colors leading-tight">
                    {niche.name} SEO
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">{selectedCityName}, NV</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                {niche.description}
              </p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Also serving:</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {CITIES.filter((c) => c.slug !== selectedCity).slice(0, 4).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${niche.slug}-seo-${city.slug}`}
                      className="text-xs text-gray-400 hover:text-[#C8A84B] hover:underline transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                  {CITIES.length - 5 > 0 && (
                    <span className="text-xs text-gray-300">+{CITIES.length - 5} more</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function FullMatrix() {
  const [matrixQuery, setMatrixQuery] = useState("");
  const filtered = NICHES.filter((n) =>
    n.name.toLowerCase().includes(matrixQuery.toLowerCase())
  );
  return (
    <div>
      <div className="relative mb-8 max-w-md">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        <input
          type="text"
          placeholder="Filter services..."
          value={matrixQuery}
          onChange={(e) => setMatrixQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#C8A84B] focus:outline-none text-[#0A0F1E] text-sm"
        />
      </div>
      <div className="space-y-4">
        {filtered.map((niche) => (
          <div key={niche.slug} className="border border-gray-100 rounded-2xl overflow-hidden">
            <div className="bg-[#0A0F1E] px-5 py-3 flex items-center gap-3">
              <span className="text-lg">{niche.icon}</span>
              <h3 className="text-white font-bold text-sm md:text-base">{niche.name} SEO — Las Vegas Valley</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y divide-gray-100">
              {CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${niche.slug}-seo-${city.slug}`}
                  className="px-3 py-3 text-xs md:text-sm text-gray-600 hover:bg-[#C8A84B]/5 hover:text-[#C8A84B] transition-colors font-medium"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LegalSEOPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "var(--desktop-nav-height, 80px)" }}>

        {/* ── Hero ── */}
        <section
          className="text-white overflow-hidden relative"
          style={{
            background: `linear-gradient(to right, #0A0F1E 0%, #0A0F1E 50%, rgba(10, 15, 30, 0.3) 100%), url('${EVEREST_HERO}')`,
            backgroundSize: "auto 100%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            minHeight: "480px",
          }}
        >
          <div className="relative z-10">
            <nav className="px-4 py-3">
              <div className="max-w-6xl mx-auto text-xs text-gray-400">
                <Link href="/" className="hover:text-[#C8A84B] transition-colors">Home</Link>
                <span className="text-gray-600 mx-2">/</span>
                <span className="text-[#C8A84B]">Legal SEO</span>
              </div>
            </nav>
            <div className="py-16 md:py-24 px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-6">
                    <span>⚖️</span>
                    <span>11 Legal Practice Areas · 12 Cities</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    Legal SEO<br />
                    <span className="text-[#C8A84B]">Las Vegas, NV</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
                    More Consultations. More Cases. More Revenue.
                  </p>
                  <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                    Las Vegas is a high-stakes legal market. Personal injury, criminal defense, family law — every practice area is competitive. The firms winning the most cases aren't always the best lawyers. They're the ones Google finds first.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/paw-sultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#C8A84B] hover:bg-[#B8943B] text-black font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                    >
                      🐾 Get Your Free Audit
                    </Link>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C8A84B] text-white hover:text-[#C8A84B] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-[#C8A84B] py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-black">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-black">{stat.value}</div>
                  <div className="text-xs md:text-sm font-medium mt-1 opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Niche Search ── */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-4">
                11 Legal Services
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4">
                Find Your Service + City
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
                Search by service, then select your city to go straight to your niche page.
              </p>
            </div>
            <NicheSearch />
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-white py-14 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-[#C8A84B] uppercase tracking-widest mb-2">Real Results. Real Businesses.</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1E]">
                Las Vegas Legal Businesses That Now Own Their Market
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{t.icon}</span>
                    <div>
                      <div className="font-black text-[#C8A84B] text-lg leading-tight">{t.result}</div>
                      <div className="text-xs text-gray-400 font-medium">{t.specialty} · {t.city}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C8A84B] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-xs font-bold text-[#0A0F1E]">{t.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              * Initials used to protect client privacy. Results vary based on market, competition, and starting point.
            </p>
          </div>
        </section>

        {/* ── Why Section ── */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-6">
                  Why Las Vegas Law Firms Need SEO Now
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  Legal searches are among the highest-intent queries on Google. When someone searches 'DUI attorney Las Vegas' or 'personal injury lawyer Henderson,' they need help — and they need it now. The firm that appears first gets the call.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  Las Vegas is a unique legal market. High tourism, a large transient population, and a booming residential base create consistent demand across every practice area. But the competition is fierce. Without a strong SEO strategy, even excellent attorneys are invisible to the clients who need them most.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Legal SEO is about trust as much as visibility. Reviews, authoritative content, and a strong Google Business Profile signal credibility before a potential client ever picks up the phone.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {WHY_SERVICES.map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-[#C8A84B] mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#0A0F1E] mb-1 text-sm md:text-base">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Full Matrix ── */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4">
                Legal SEO by City — Full Directory
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                Every service. Every city in the Las Vegas Valley. Find yours below.
              </p>
            </div>
            <FullMatrix />
          </div>
        </section>

        {/* ── Process ── */}
        <section className="bg-[#0A0F1E] py-16 md:py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              How We Grow Law Firms in Las Vegas
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
              A four-step system built around one goal: more consultation calls.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
              {[
                { step: "01", title: "Free Audit", desc: "We analyze your current rankings, GBP health, citations, and competitors. You get a clear picture before spending a dollar." },
                { step: "02", title: "Strategy Build", desc: "Custom SEO roadmap for your service and area. No templates — every plan is built around your competitive landscape." },
                { step: "03", title: "Execution", desc: "On-page optimization, GBP management, citation building, content creation, and review generation — all handled for you." },
                { step: "04", title: "Reporting", desc: "Monthly reports showing ranking movement, traffic growth, and call volume. You always know what your investment is producing." },
              ].map((item) => (
                <div key={item.step}>
                  <div className="text-5xl font-black text-[#C8A84B]/20 mb-3">{item.step}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-10 text-center">
              Legal SEO Questions, Answered
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#C8A84B] py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              Ready to Grow Your Legal Business?
            </h2>
            <p className="text-black/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Start with a free audit. No contracts. No fluff. Just a clear picture of what it takes to rank in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/paw-sultation"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-[#0A0F1E] text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Get My Free Audit
              </Link>
              <Link
                href="/paw-sultation"
                className="inline-flex items-center justify-center gap-2 border-2 border-black hover:bg-black/10 text-black font-bold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Book a Paw-sultation
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
