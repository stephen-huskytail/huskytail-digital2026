"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { FromTheBlog } from "@/components/FromTheBlog";

const EVEREST_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-hero-realistic-laptop-KVdGPHKu5pyaQZJNE9SKsk.webp";

const STATS = [
  {
    "value": "94%",
    "label": "of parents research childcare and family services online first"
  },
  {
    "value": "3×",
    "label": "more inquiries from family service businesses in the map pack"
  },
  {
    "value": "89%",
    "label": "of pet owners search Google before choosing a groomer or trainer"
  },
  {
    "value": "Trust",
    "label": "is the #1 factor for family service decisions — and SEO builds it"
  }
];

const NICHES = [
  {
    "slug": "daycare",
    "name": "Daycare",
    "icon": "👶",
    "description": "Rank for daycare, childcare, and preschool searches from parents looking for trusted care in their neighborhood."
  },
  {
    "slug": "tutoring",
    "name": "Tutoring",
    "icon": "📚",
    "description": "Get found by parents searching for tutors, test prep, and academic support for their children."
  },
  {
    "slug": "driving-school",
    "name": "Driving School",
    "icon": "🚗",
    "description": "Rank for driving lessons, teen driver education, and defensive driving searches in your area."
  },
  {
    "slug": "pet-groomer",
    "name": "Pet Groomer",
    "icon": "🐾",
    "description": "Own pet grooming, dog grooming, and mobile grooming searches from pet owners in your city."
  },
  {
    "slug": "dog-trainer",
    "name": "Dog Trainer",
    "icon": "🐕",
    "description": "Capture dog training, puppy classes, and behavior training searches from Las Vegas pet owners."
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
    "q": "How does SEO work for daycares and childcare centers in Las Vegas?",
    "a": "Childcare SEO focuses on Google Business Profile optimization (to appear in local searches), trust-building content (to answer the questions parents are searching), and review strategy (to build the social proof that converts searchers into enrolled families). Neighborhood-specific pages help you rank in the communities where your target families live."
  },
  {
    "q": "Is pet services SEO worth it for a small grooming business?",
    "a": "Absolutely. Pet owners are extremely loyal once they find a groomer or trainer they trust. A single new client can be worth hundreds of dollars per year in repeat business. The ROI on pet services SEO is exceptional because of the high lifetime value of each client."
  },
  {
    "q": "How quickly can a family service business start getting more inquiries from SEO?",
    "a": "Most family service businesses see measurable improvements within 45–60 days. The map pack is often the fastest win — a well-optimized GBP with strong reviews can move you into the top 3 within weeks of starting."
  },
  {
    "q": "Can you help a tutoring center rank against large national chains?",
    "a": "Yes. Local SEO levels the playing field. A local tutoring center with a well-optimized Google Business Profile, strong reviews, and neighborhood-specific content can outrank national chains for the searches that matter most in their specific community."
  },
  {
    "q": "Do you work with driving schools?",
    "a": "Yes. Driving school SEO is one of our specialties. We rank you for teen driver education, adult driving lessons, and defensive driving searches — capturing students at the exact moment they're ready to enroll."
  }
];

const TESTIMONIALS = [
  {
    "result": "Waitlist in 4 Months",
    "specialty": "Daycare Center",
    "city": "Summerlin, NV",
    "quote": "We opened with empty spots and within four months we had a waitlist. SEO brought in families we never would have reached through word of mouth alone.",
    "name": "C.M., Director",
    "icon": "👶"
  },
  {
    "result": "3× More Students",
    "specialty": "Tutoring Center",
    "city": "Henderson, NV",
    "quote": "Parents are very deliberate about choosing tutoring. Being on page one of Google meant we were already vetted before the first call. Enrollment tripled in six months.",
    "name": "T.R., Owner",
    "icon": "📚"
  },
  {
    "result": "Fully Booked in 60 Days",
    "specialty": "Pet Groomer",
    "city": "Las Vegas, NV",
    "quote": "Pet owners are loyal once they find someone they trust. SEO got us found — and our reviews did the rest. We're fully booked every week now.",
    "name": "K.L., Owner",
    "icon": "🐾"
  }
];

const WHY_SERVICES = [
  {
    "title": "Google Business Profile Optimization",
    "desc": "Appear in the map pack where parents and pet owners search for trusted family services in their neighborhood."
  },
  {
    "title": "Trust-Building Content Strategy",
    "desc": "Content that answers the questions parents and pet owners are searching, building the authority that converts searchers into clients."
  },
  {
    "title": "Review Generation System",
    "desc": "Family service decisions are trust-driven. A strong review profile is the single most powerful conversion tool in this industry."
  },
  {
    "title": "Neighborhood-Specific SEO",
    "desc": "Rank in the specific communities you serve — Summerlin, Henderson, Green Valley — not just the broader Las Vegas market."
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
              className="text-[#c8a84b] text-xl font-bold flex-shrink-0 transition-transform duration-200"
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
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#c8a84b] focus:outline-none text-[#0A0F1E] text-sm bg-gray-50 focus:bg-white transition-colors"
          />
        </div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">📍</span>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="pl-10 pr-8 py-3 rounded-xl border border-gray-200 focus:border-[#c8a84b] focus:outline-none text-[#0A0F1E] text-sm bg-gray-50 focus:bg-white transition-colors appearance-none cursor-pointer min-w-[160px]"
          >
            {CITIES.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-6">
        {filtered.length === NICHES.length
          ? `Showing all ${NICHES.length} family services services`
          : `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`}
        {" · "}
        <span className="text-[#c8a84b] font-medium">{selectedCityName}, NV</span>
      </p>
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold text-lg">No services match "{query}"</p>
          <button onClick={() => setQuery("")} className="mt-3 text-[#c8a84b] hover:underline text-sm">
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((niche) => (
            <Link
              key={niche.slug}
              href={`/${niche.slug}-seo-${selectedCity}`}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-[#c8a84b] hover:shadow-lg transition-all duration-200 p-6 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl">{niche.icon}</span>
                <div>
                  <h3 className="font-bold text-[#0A0F1E] text-base group-hover:text-[#c8a84b] transition-colors leading-tight">
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
                      className="text-xs text-gray-400 hover:text-[#c8a84b] hover:underline transition-colors"
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
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#c8a84b] focus:outline-none text-[#0A0F1E] text-sm"
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
                  className="px-3 py-3 text-xs md:text-sm text-gray-600 hover:bg-[#c8a84b]/5 hover:text-[#c8a84b] transition-colors font-medium"
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

export default function FamilyServicesSEOPage() {
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
                <Link href="/" className="hover:text-[#c8a84b] transition-colors">Home</Link>
                <span className="text-gray-600 mx-2">/</span>
                <span className="text-[#c8a84b]">Family Services SEO</span>
              </div>
            </nav>
            <div className="py-16 md:py-24 px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#c8a84b]/10 border border-[#c8a84b]/30 text-[#c8a84b] text-sm font-medium px-4 py-2 rounded-full mb-6">
                    <span>👨‍👩‍👧</span>
                    <span>5 Family Service Businesses · 12 Cities</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    Family Services SEO<br />
                    <span className="text-[#c8a84b]">Las Vegas, NV</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
                    More Families Found. More Trust Built. More Revenue.
                  </p>
                  <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                    Las Vegas is one of the fastest-growing family markets in the country. Parents search Google for daycares, tutors, and pet groomers before they make a single call. We make sure your business is the one they find — and trust.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/paw-sultation"
                      className="inline-flex items-center justify-center gap-2 bg-[#c8a84b] hover:bg-[#b09038] text-black font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                    >
                      🐾 Get Your Free Audit
                    </Link>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#c8a84b] text-white hover:text-[#c8a84b] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
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
        <section className="bg-[#c8a84b] py-8 px-4">
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
              <div className="inline-flex items-center gap-2 bg-[#c8a84b]/10 border border-[#c8a84b]/30 text-[#c8a84b] text-sm font-medium px-4 py-2 rounded-full mb-4">
                5 Family Services Services
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
              <p className="text-sm font-semibold text-[#c8a84b] uppercase tracking-widest mb-2">Real Results. Real Businesses.</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1E]">
                Las Vegas Family Services Businesses That Now Own Their Market
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{t.icon}</span>
                    <div>
                      <div className="font-black text-[#c8a84b] text-lg leading-tight">{t.result}</div>
                      <div className="text-xs text-gray-400 font-medium">{t.specialty} · {t.city}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#c8a84b] text-sm">★</span>
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
                  Why Las Vegas Family Service Businesses Need SEO Now
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  Las Vegas is growing fast — and with that growth comes a surge in families with children, pets, and educational needs. Parents and pet owners are discerning searchers. They read reviews, compare options, and choose businesses that feel trustworthy before they ever make contact.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  Family service searches are deeply local and highly emotional. When a parent searches 'daycare near me' or a pet owner searches 'dog groomer Henderson,' they're making a decision about something they care deeply about. Being visible and trustworthy in that moment is everything.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  The family services businesses that invest in SEO now are building lasting relationships with the community — and lasting rankings that keep generating leads without ongoing ad spend.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {WHY_SERVICES.map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-[#c8a84b] mt-2 flex-shrink-0" />
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
                Family Services SEO by City — Full Directory
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
              How We Grow Family Service Businesses in Las Vegas
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
              A four-step system built around one goal: more families through your door.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
              {[
                { step: "01", title: "Free Audit", desc: "We analyze your current rankings, GBP health, citations, and competitors. You get a clear picture before spending a dollar." },
                { step: "02", title: "Strategy Build", desc: "Custom SEO roadmap for your service and area. No templates — every plan is built around your competitive landscape." },
                { step: "03", title: "Execution", desc: "On-page optimization, GBP management, citation building, content creation, and review generation — all handled for you." },
                { step: "04", title: "Reporting", desc: "Monthly reports showing ranking movement, traffic growth, and call volume. You always know what your investment is producing." },
              ].map((item) => (
                <div key={item.step}>
                  <div className="text-5xl font-black text-[#c8a84b]/20 mb-3">{item.step}</div>
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
              Family Services SEO Questions, Answered
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#c8a84b] py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              Ready to Grow Your Family Services Business?
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
      {/* From the Blog */}
      <FromTheBlog />
      <Footer />
    </>
  );
}
