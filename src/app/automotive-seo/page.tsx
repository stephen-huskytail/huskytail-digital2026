"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const EVEREST_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-hero-realistic-laptop-KVdGPHKu5pyaQZJNE9SKsk.webp";

const STATS = [
  {
    "value": "88%",
    "label": "of car buyers research online before visiting a dealership"
  },
  {
    "value": "3×",
    "label": "more service appointments from map pack vs. walk-ins"
  },
  {
    "value": "76%",
    "label": "of 'near me' automotive searches result in a same-day visit"
  },
  {
    "value": "5-Star",
    "label": "reviews are the #1 factor in choosing an auto shop"
  }
];

const NICHES = [
  {
    "slug": "mechanic",
    "name": "Mechanic",
    "icon": "🔧",
    "description": "Own 'mechanic near me' and auto repair searches that convert to same-day service appointments."
  },
  {
    "slug": "auto-body",
    "name": "Auto Body",
    "icon": "🚘",
    "description": "Rank for collision repair, dent removal, and auto body shop searches across the Las Vegas Valley."
  },
  {
    "slug": "car-dealership",
    "name": "Car Dealership",
    "icon": "🏪",
    "description": "Capture car buyers searching for new and used vehicles — rank for makes, models, and dealer searches."
  },
  {
    "slug": "towing",
    "name": "Towing",
    "icon": "🚛",
    "description": "Own towing and roadside assistance searches — the highest-urgency automotive category."
  },
  {
    "slug": "auto-detailing",
    "name": "Auto Detailing",
    "icon": "✨",
    "description": "Rank for car detailing, ceramic coating, and paint protection searches in your market."
  },
  {
    "slug": "window-tinting",
    "name": "Window Tinting",
    "icon": "🪟",
    "description": "Capture window tinting searches — a high-demand service in the Las Vegas heat."
  },
  {
    "slug": "tire-shop",
    "name": "Tire Shop",
    "icon": "⭕",
    "description": "Rank for tire replacement, rotation, and alignment searches from drivers ready to buy."
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
    "q": "How does SEO work for auto repair shops in Las Vegas?",
    "a": "Automotive SEO focuses on Google Business Profile optimization (to appear in the map pack for 'auto repair near me' searches), service-specific pages (to rank for individual services like brake repair or oil change), and review strategy (to build the trust that converts searchers into customers). We also build location pages if you serve multiple areas across the valley."
  },
  {
    "q": "How quickly can an auto shop start getting more calls from SEO?",
    "a": "Most auto shops see measurable improvements within 45–60 days. High-urgency categories like towing and lockout services often see faster results. The map pack is typically the fastest win — optimizing your GBP correctly can move you into the top 3 within weeks."
  },
  {
    "q": "Can you help a dealership rank for specific makes and models?",
    "a": "Yes. Dealership SEO includes make/model-specific inventory pages, comparison content, and local search optimization that captures buyers who are already deep in the research process and ready to visit."
  },
  {
    "q": "Do reviews really matter for automotive SEO?",
    "a": "Enormously. Automotive is one of the highest-trust purchase decisions people make. A shop with 200 reviews at 4.8 stars will consistently outperform a shop with 20 reviews at 5.0 stars — both in rankings and in conversion rate."
  },
  {
    "q": "What's the difference between SEO and Google Ads for auto shops?",
    "a": "Google Ads stops the moment you stop paying. SEO builds an asset — rankings, reviews, and authority — that keeps generating leads indefinitely. Most of our automotive clients see a 3–5× better cost-per-lead from SEO vs. paid ads within 6 months."
  }
];

const TESTIMONIALS = [
  {
    "result": "2× More Service Appointments",
    "specialty": "Auto Repair Shop",
    "city": "Las Vegas, NV",
    "quote": "We were relying on word of mouth for years. SEO opened up a whole new stream of customers we never would have reached. Bays are full every day now.",
    "name": "T.M., Owner",
    "icon": "🔧"
  },
  {
    "result": "Map Pack in 30 Days",
    "specialty": "Auto Detailing",
    "city": "Henderson, NV",
    "quote": "Detailing is competitive in Vegas. Getting into the map pack changed everything — we're booked out two weeks in advance now.",
    "name": "C.R., Owner",
    "icon": "✨"
  },
  {
    "result": "3× More Test Drives",
    "specialty": "Used Car Dealership",
    "city": "North Las Vegas, NV",
    "quote": "Online visibility is everything in the car business now. HuskyTail got us ranking for the makes and models people actually search for. Sales are up significantly.",
    "name": "B.K., GM",
    "icon": "🚗"
  }
];

const WHY_SERVICES = [
  {
    "title": "Google Business Profile Optimization",
    "desc": "Dominate the map pack for service-specific searches — oil change, brake repair, tire rotation, and more."
  },
  {
    "title": "Service Page SEO",
    "desc": "Individual optimized pages for every service you offer, ranking for the exact terms your customers search."
  },
  {
    "title": "Review Generation System",
    "desc": "Systematic review collection that builds trust, improves rankings, and converts searchers into customers."
  },
  {
    "title": "Competitor Gap Analysis",
    "desc": "Find the searches your competitors are winning and build a strategy to take those rankings from them."
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
          ? `Showing all ${NICHES.length} automotive services`
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

export default function AutomotiveSEOPage() {
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
                <span className="text-[#C8A84B]">Automotive SEO</span>
              </div>
            </nav>
            <div className="py-16 md:py-24 px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-6">
                    <span>🚗</span>
                    <span>7 Automotive Services · 12 Cities</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    Automotive SEO<br />
                    <span className="text-[#C8A84B]">Las Vegas, NV</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
                    More Cars In. More Revenue Out.
                  </p>
                  <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                    Las Vegas drivers search Google before they trust anyone with their vehicle. Whether it's an oil change, a collision repair, or a new car purchase — the shop or dealership that ranks first gets the call. We put you there.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/free-audit"
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
                7 Automotive Services
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
                Las Vegas Automotive Businesses That Now Own Their Market
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
                  Why Las Vegas Automotive Businesses Need SEO Now
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  Las Vegas has one of the highest vehicle-per-capita rates in the country. Every one of those vehicles needs maintenance, repairs, and eventually replacement. The shops and dealerships capturing that demand are the ones showing up first on Google.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  Automotive searches are highly local and highly intent-driven. When someone searches 'auto repair near me' or 'oil change Henderson,' they're ready to act. Being in the map pack at that moment is the difference between a full bay and an empty one.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Reviews matter more in automotive than almost any other industry. People are trusting you with a major asset. A strong review profile combined with top rankings creates an unstoppable combination.
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
                Automotive SEO by City — Full Directory
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
              How We Grow Automotive Businesses in Las Vegas
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
              A four-step system built around one goal: more vehicles through your door.
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
              Automotive SEO Questions, Answered
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#C8A84B] py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              Ready to Grow Your Automotive Business?
            </h2>
            <p className="text-black/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Start with a free audit. No contracts. No fluff. Just a clear picture of what it takes to rank in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
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
