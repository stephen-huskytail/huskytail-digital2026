"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const EVEREST_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-hero-realistic-laptop-KVdGPHKu5pyaQZJNE9SKsk.webp";

const STATS = [
  {
    "value": "82%",
    "label": "of homeowners search Google before hiring a contractor"
  },
  {
    "value": "4×",
    "label": "more leads from local SEO vs. door hangers and mailers"
  },
  {
    "value": "97%",
    "label": "of people search online to find a local business"
  },
  {
    "value": "3-Pack",
    "label": "gets 44% of all clicks for local service searches"
  }
];

const NICHES = [
  {
    "slug": "plumber",
    "name": "Plumber",
    "icon": "🔧",
    "description": "Own 'plumber near me' and emergency plumbing searches that convert to same-day calls."
  },
  {
    "slug": "electrician",
    "name": "Electrician",
    "icon": "⚡",
    "description": "Rank for electrical repair, panel upgrades, and EV charger installation searches in your area."
  },
  {
    "slug": "hvac",
    "name": "HVAC",
    "icon": "❄️",
    "description": "Dominate AC repair, furnace replacement, and HVAC maintenance searches year-round."
  },
  {
    "slug": "roofer",
    "name": "Roofer",
    "icon": "🏠",
    "description": "Capture storm damage, roof replacement, and inspection searches across the Las Vegas Valley."
  },
  {
    "slug": "painter",
    "name": "Painter",
    "icon": "🎨",
    "description": "Rank for interior and exterior painting searches and fill your schedule with booked jobs."
  },
  {
    "slug": "locksmith",
    "name": "Locksmith",
    "icon": "🔑",
    "description": "Own emergency lockout searches — the highest-intent, highest-urgency local service category."
  },
  {
    "slug": "landscaper",
    "name": "Landscaper",
    "icon": "🌿",
    "description": "Rank for lawn care, desert landscaping, and irrigation searches across the valley."
  },
  {
    "slug": "cleaning",
    "name": "Cleaning Service",
    "icon": "🧹",
    "description": "Get found for house cleaning, deep cleaning, and move-out cleaning searches in your city."
  },
  {
    "slug": "pest-control",
    "name": "Pest Control",
    "icon": "🐛",
    "description": "Dominate scorpion control, termite treatment, and pest inspection searches in Las Vegas."
  },
  {
    "slug": "pool-service",
    "name": "Pool Service",
    "icon": "🏊",
    "description": "Rank for pool cleaning, repair, and renovation searches in the Las Vegas market."
  },
  {
    "slug": "garage-door",
    "name": "Garage Door",
    "icon": "🚪",
    "description": "Own garage door repair and replacement searches — high-urgency, high-conversion."
  },
  {
    "slug": "flooring",
    "name": "Flooring",
    "icon": "🪵",
    "description": "Capture flooring installation, tile, and hardwood searches from homeowners ready to remodel."
  },
  {
    "slug": "window-treatment",
    "name": "Window Treatment",
    "icon": "🪟",
    "description": "Rank for blinds, shutters, and window covering searches in every Las Vegas neighborhood."
  },
  {
    "slug": "handyman",
    "name": "Handyman",
    "icon": "🔨",
    "description": "Get found for small repairs, honey-do lists, and home maintenance searches year-round."
  },
  {
    "slug": "remodeling",
    "name": "Remodeling",
    "icon": "🏗️",
    "description": "Rank for kitchen remodel, bathroom renovation, and home addition searches in your market."
  },
  {
    "slug": "solar",
    "name": "Solar",
    "icon": "☀️",
    "description": "Capture solar installation and energy savings searches from Las Vegas homeowners ready to go solar."
  },
  {
    "slug": "moving-company",
    "name": "Moving Company",
    "icon": "📦",
    "description": "Own local and long-distance moving searches — Las Vegas has one of the highest relocation rates in the US."
  },
  {
    "slug": "junk-removal",
    "name": "Junk Removal",
    "icon": "🗑️",
    "description": "Rank for junk removal, estate cleanout, and debris hauling searches across the valley."
  },
  {
    "slug": "fence-company",
    "name": "Fence Company",
    "icon": "🚧",
    "description": "Get found for fence installation, repair, and replacement searches from homeowners and builders."
  },
  {
    "slug": "tree-service",
    "name": "Tree Service",
    "icon": "🌳",
    "description": "Rank for tree trimming, removal, and stump grinding searches in your service area."
  },
  {
    "slug": "appliance-repair",
    "name": "Appliance Repair",
    "icon": "🔌",
    "description": "Own appliance repair searches — high urgency, high conversion, and underserved in most markets."
  },
  {
    "slug": "carpet-cleaning",
    "name": "Carpet Cleaning",
    "icon": "🧽",
    "description": "Rank for carpet cleaning, upholstery cleaning, and water damage restoration searches."
  },
  {
    "slug": "general-contractor",
    "name": "General Contractor",
    "icon": "🏗️",
    "description": "Capture new construction, commercial build-out, and major renovation project searches."
  },
  {
    "slug": "concrete-contractor",
    "name": "Concrete Contractor",
    "icon": "🪨",
    "description": "Rank for driveway, patio, and decorative concrete searches from homeowners and developers."
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
    "q": "How does SEO work for home service contractors in Las Vegas?",
    "a": "Home service SEO focuses on three things: Google Business Profile optimization (to appear in the map pack when someone searches 'plumber near me'), service area pages (to rank in every neighborhood you serve), and review strategy (to build the trust signals that convert searchers into callers). We layer in citation building and on-page optimization to create a system that compounds over time."
  },
  {
    "q": "How quickly can a contractor start getting more calls from SEO?",
    "a": "Most home service businesses in Las Vegas see measurable ranking improvements within 45–60 days. Emergency service categories (plumbing, HVAC, locksmith) often see faster results because search intent is so high. Long-term, SEO consistently outperforms paid ads because the leads don't stop when your budget runs out."
  },
  {
    "q": "Do I need a website to do SEO?",
    "a": "You need at minimum a Google Business Profile, but a website dramatically amplifies your results. We can help with both — from GBP-only campaigns for newer businesses to full website + SEO packages for established contractors ready to dominate their market."
  },
  {
    "q": "Can you help me rank in multiple cities across the Las Vegas Valley?",
    "a": "Yes — and this is one of our specialties. We build individual service area pages for each city and community you serve, so you can rank in Henderson, Summerlin, North Las Vegas, and every other area without cannibalizing your own rankings."
  },
  {
    "q": "What makes home service SEO different from other industries?",
    "a": "Intent and urgency. When someone searches 'emergency plumber Las Vegas' they need help right now. Home service SEO is about being present at that exact moment — in the map pack, at the top of organic results, with reviews that build instant trust. Speed to rank and local precision matter more here than in almost any other industry."
  }
];

const TESTIMONIALS = [
  {
    "result": "Page 4 → #1 in 60 Days",
    "specialty": "Plumber",
    "city": "Henderson, NV",
    "quote": "I went from barely getting calls to turning away work. HuskyTail got us into the map pack in under two months. The ROI is insane.",
    "name": "M.T., Owner",
    "icon": "🔧"
  },
  {
    "result": "3× More Booked Jobs",
    "specialty": "HVAC Company",
    "city": "Las Vegas, NV",
    "quote": "Summer is our busiest season and this year we were fully booked two weeks out. SEO made the difference — we stopped chasing leads and started fielding them.",
    "name": "D.R., Owner",
    "icon": "❄️"
  },
  {
    "result": "Map Pack in 45 Days",
    "specialty": "Roofing Contractor",
    "city": "North Las Vegas, NV",
    "quote": "After every storm we used to scramble for leads. Now the phone rings before we even send a single flyer. Stephen's team knows what they're doing.",
    "name": "K.L., Owner",
    "icon": "🏠"
  }
];

const WHY_SERVICES = [
  {
    "title": "Google Business Profile Optimization",
    "desc": "Dominate the map pack where emergency and same-day service searches convert directly to calls."
  },
  {
    "title": "Service Area Page Strategy",
    "desc": "Rank in every neighborhood you serve — not just your zip code. We build pages for every city and community."
  },
  {
    "title": "Review Generation System",
    "desc": "More 5-star reviews means more trust, higher rankings, and more calls. We build the system that makes it automatic."
  },
  {
    "title": "Local Citation & NAP Consistency",
    "desc": "Consistent business information across 50+ directories builds the trust signals Google uses to rank local contractors."
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
          ? `Showing all ${NICHES.length} home services services`
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

export default function HomeServicesSEOPage() {
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
                <span className="text-[#C8A84B]">Home Services SEO</span>
              </div>
            </nav>
            <div className="py-16 md:py-24 px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-6">
                    <span>🏠</span>
                    <span>24 Home Service Trades · 12 Cities</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    Home Services SEO<br />
                    <span className="text-[#C8A84B]">Las Vegas, NV</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
                    More Calls. More Jobs. More Revenue.
                  </p>
                  <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                    Las Vegas is one of the fastest-growing construction and home improvement markets in the country. Every day, homeowners search Google for a plumber, roofer, or HVAC tech. We make sure they find you — not your competitor.
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
                24 Home Services Services
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
                Las Vegas Home Services Businesses That Now Own Their Market
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
                  Why Las Vegas Home Service Businesses Need SEO Now
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  The Las Vegas Valley is booming. New construction, aging homes, and a growing population mean demand for home services has never been higher. But the contractors getting the calls aren't necessarily the best ones — they're the ones Google can find.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  When a pipe bursts at 11pm or an AC unit dies in July, homeowners don't flip through a phone book. They grab their phone and search. If you're not in the top 3 results, you're invisible to a customer who is ready to hire right now.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Home service SEO is about being in the right place at the right moment — when the need is urgent and the intent to hire is highest. That's where we put you.
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
                Home Services SEO by City — Full Directory
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
              How We Grow Home Service Businesses in Las Vegas
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
              A four-step system built around one goal: more calls through your phone.
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
              Home Services SEO Questions, Answered
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#C8A84B] py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              Ready to Grow Your Home Services Business?
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
