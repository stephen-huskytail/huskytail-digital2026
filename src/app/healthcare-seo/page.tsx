"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const BASE_URL = "https://huskytaildigital.com";

const ASSETS = {
  everestHero: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-hero-realistic-laptop-KVdGPHKu5pyaQZJNE9SKsk.webp",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "77%", label: "of patients use Google to find a new provider" },
  { value: "3×", label: "more leads from local SEO vs. paid ads long-term" },
  { value: "90%", label: "of clicks go to page-one results" },
  { value: "46%", label: "of all Google searches have local intent" },
];

const NICHES = [
  { slug: "dentist", name: "Dentist", icon: "🦷", description: "Rank for 'dentist near me' and fill your appointment book with high-value patients." },
  { slug: "chiropractor", name: "Chiropractor", icon: "🦴", description: "Dominate local search for back pain, neck pain, and auto injury patients in your area." },
  { slug: "optometrist", name: "Optometrist", icon: "👁️", description: "Get found when patients search for eye exams, glasses, and contact lens fittings." },
  { slug: "orthodontist", name: "Orthodontist", icon: "😁", description: "Capture high-intent searches for braces and Invisalign in every neighborhood you serve." },
  { slug: "dermatologist", name: "Dermatologist", icon: "🩺", description: "Rank for acne treatment, skin cancer screening, and cosmetic dermatology searches." },
  { slug: "therapist", name: "Therapist", icon: "🧠", description: "Connect with patients actively searching for mental health support and counseling." },
  { slug: "pediatrician", name: "Pediatrician", icon: "👶", description: "Be the first practice parents find when searching for a pediatrician for their child." },
  { slug: "plastic-surgeon", name: "Plastic Surgeon", icon: "✨", description: "Attract high-value cosmetic surgery consultations through targeted local SEO." },
  { slug: "urgent-care", name: "Urgent Care", icon: "🚑", description: "Own the 'urgent care near me' search and capture walk-in patients around the clock." },
  { slug: "physical-therapist", name: "Physical Therapist", icon: "💪", description: "Rank for post-surgery rehab, sports injury, and chronic pain searches in your city." },
  { slug: "podiatrist", name: "Podiatrist", icon: "🦶", description: "Get found by patients searching for foot pain, bunions, and diabetic foot care." },
  { slug: "cardiologist", name: "Cardiologist", icon: "❤️", description: "Build a steady referral pipeline and direct patient flow through local search authority." },
  { slug: "gastroenterologist", name: "Gastroenterologist", icon: "🏥", description: "Rank for colonoscopy, IBS, and digestive health searches across the Las Vegas Valley." },
  { slug: "neurologist", name: "Neurologist", icon: "🧬", description: "Capture patients searching for headache specialists, MS treatment, and neurological care." },
  { slug: "psychiatrist", name: "Psychiatrist", icon: "💊", description: "Be visible when patients search for medication management and psychiatric evaluations." },
  { slug: "veterinarian", name: "Veterinarian", icon: "🐾", description: "Fill your schedule with pet owners searching for routine care and emergency vet services." },
  { slug: "oral-surgeon", name: "Oral Surgeon", icon: "🦷", description: "Rank for wisdom tooth removal, dental implants, and jaw surgery searches." },
  { slug: "obgyn", name: "OB-GYN", icon: "👩‍⚕️", description: "Connect with women searching for prenatal care, annual exams, and gynecological services." },
  { slug: "weight-loss-clinic", name: "Weight Loss Clinic", icon: "⚖️", description: "Capture the massive demand for medical weight loss, semaglutide, and body transformation programs." },
  { slug: "addiction-treatment", name: "Addiction Treatment", icon: "🌿", description: "Reach individuals and families searching for rehab, detox, and recovery programs in Nevada." },
  { slug: "med-spa", name: "Med Spa", icon: "💆", description: "Rank for Botox, fillers, laser treatments, and aesthetic medicine searches in your market." },
];

const CITIES = [
  { slug: "las-vegas", name: "Las Vegas" },
  { slug: "henderson", name: "Henderson" },
  { slug: "paradise", name: "Paradise" },
  { slug: "spring-valley", name: "Spring Valley" },
  { slug: "north-las-vegas", name: "North Las Vegas" },
  { slug: "summerlin", name: "Summerlin" },
  { slug: "anthem", name: "Anthem" },
  { slug: "green-valley", name: "Green Valley" },
  { slug: "boulder-city", name: "Boulder City" },
  { slug: "mesquite", name: "Mesquite" },
  { slug: "pahrump", name: "Pahrump" },
  { slug: "laughlin", name: "Laughlin" },
];

const FAQS = [
  {
    q: "How does SEO work for healthcare practices in Las Vegas?",
    a: "Healthcare SEO in Las Vegas focuses on three pillars: Google Business Profile optimization (so you appear in the map pack), on-page SEO (so your website ranks for the terms your patients search), and local citations (so Google trusts your practice's name, address, and phone number). We layer in reputation management and content strategy to build long-term authority in your specialty.",
  },
  {
    q: "How long does it take to see results from healthcare SEO?",
    a: "Most healthcare practices in Las Vegas see measurable ranking improvements within 60–90 days. Highly competitive specialties like dentistry and plastic surgery may take 4–6 months to reach page one. The key difference between SEO and paid ads: SEO compounds over time. The rankings you build in month three are still working for you in year three.",
  },
  {
    q: "Do you work with HIPAA compliance in mind?",
    a: "Yes. We never use patient data in our SEO work. All content, schema markup, and review strategies are built with healthcare privacy regulations in mind. We focus on practice-level visibility — not patient-level targeting.",
  },
  {
    q: "Can you help a new practice get found quickly in Las Vegas?",
    a: "Absolutely. New practices benefit most from an aggressive Google Business Profile launch, local citation building, and a content strategy that targets lower-competition long-tail keywords while building authority for broader terms. We've helped new practices rank on page one within 90 days.",
  },
  {
    q: "Do you offer SEO for multiple locations?",
    a: "Yes. Multi-location healthcare SEO is one of our specialties. We build individual location pages, manage multiple GBP profiles, and create a content architecture that lets each location rank independently while strengthening the overall brand.",
  },
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
      {/* Search + City Filter Bar */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 mb-8 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search by specialty (e.g. dentist, surgeon, therapist...)"
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

      {/* Result count */}
      <p className="text-sm text-gray-400 mb-6">
        {filtered.length === NICHES.length
          ? `Showing all ${NICHES.length} healthcare specialties`
          : `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`}
        {" · "}
        <span className="text-[#C8A84B] font-medium">{selectedCityName}, NV</span>
      </p>

      {/* Niche Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold text-lg">No specialties match "{query}"</p>
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
              {/* City quick-links */}
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
          placeholder="Filter specialties..."
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

export default function HealthcareSEOPage() {
  return (
    <>
      <Navigation />

      <main style={{ paddingTop: "var(--desktop-nav-height, 80px)" }}>

        {/* ── Hero — matches dentist page style ── */}
        <section
          className="text-white overflow-hidden relative"
          style={{
            background: `linear-gradient(to right, #0A0F1E 0%, #0A0F1E 50%, rgba(10, 15, 30, 0.3) 100%), url('${ASSETS.everestHero}')`,
            backgroundSize: "auto 100%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            minHeight: "480px",
          }}
        >
          <div className="relative z-10">
            {/* Breadcrumb */}
            <nav className="px-4 py-3">
              <div className="max-w-6xl mx-auto text-xs text-gray-400" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                <Link href="/" className="hover:text-[#C8A84B] transition-colors">Home</Link>
                <span className="text-gray-600 mx-2">/</span>
                <span className="text-[#C8A84B]">Healthcare SEO</span>
              </div>
            </nav>

            {/* Hero copy */}
            <div className="py-16 md:py-24 px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-6">
                    <span>🏥</span>
                    <span>21 Healthcare Specialties · 12 Cities</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    Healthcare SEO<br />
                    <span className="text-[#C8A84B]">Las Vegas, NV</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
                    More Patients. More Appointments. More Revenue.
                  </p>
                  <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                    Las Vegas is one of the fastest-growing healthcare markets in the country. Your patients are searching Google before they pick up the phone. We make sure they find you first.
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
                {/* Right col — empty on mobile, Everest shows through background on desktop */}
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

        {/* ── Filterable Niche Search — main UX section ── */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-4">
                21 Healthcare Specialties
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4">
                Find Your Specialty + City
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
                Search by specialty, then select your city to go straight to your niche page.
              </p>
            </div>
            <NicheSearch />
          </div>
        </section>

        {/* ── Why Healthcare SEO Matters ── */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-6">
                  Why Las Vegas Healthcare Practices Need SEO Now
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  The Las Vegas Valley added over 40,000 new residents last year. Every one of them needs a primary care doctor, a dentist, a specialist. They're not asking friends — they're typing into Google. If your practice isn't on page one, you're invisible to a market that's actively growing.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  Healthcare SEO isn't just about rankings. It's about trust signals — reviews, accurate business information, authoritative content — that tell both Google and prospective patients that your practice is the right choice.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Unlike paid ads that stop the moment you stop paying, SEO compounds. The authority you build in month one is still working in year three.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Google Business Profile Optimization", desc: "Dominate the map pack where 46% of healthcare searches convert directly to calls and appointments." },
                  { title: "On-Page SEO & Content Strategy", desc: "Rank for the exact terms your patients search — from 'dentist near me' to 'best cardiologist Las Vegas.'" },
                  { title: "Local Citation Building", desc: "Consistent NAP data across 50+ directories builds the trust signals Google uses to rank local businesses." },
                  { title: "Reputation Management", desc: "More 5-star reviews, fewer 1-star surprises. We build systems that generate reviews on autopilot." },
                ].map((item) => (
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

        {/* ── Full Niche × City Matrix ── */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4">
                Healthcare SEO by City — Full Directory
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                Every specialty. Every city in the Las Vegas Valley. Find yours below.
              </p>
            </div>
            <FullMatrix />
          </div>
        </section>

        {/* ── Process ── */}
        <section className="bg-[#0A0F1E] py-16 md:py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              How We Grow Healthcare Practices in Las Vegas
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
              A four-step process built around one goal: more patients through your door.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
              {[
                { step: "01", title: "Free Audit", desc: "We analyze your current rankings, GBP health, citations, and competitors. You get a clear picture before spending a dollar." },
                { step: "02", title: "Strategy Build", desc: "Custom SEO roadmap for your specialty and service area. No templates — every plan is built around your competitive landscape." },
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

        {/* ── FAQ Accordion ── */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-10 text-center">
              Healthcare SEO Questions, Answered
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#C8A84B] py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              Ready to Grow Your Healthcare Practice?
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
