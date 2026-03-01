import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://huskytaildigital.com";

// ─── Data ────────────────────────────────────────────────────────────────────

const INDUSTRY = {
  name: "Healthcare",
  slug: "healthcare",
  headline: "Healthcare SEO Las Vegas",
  subheadline: "More Patients. More Appointments. More Revenue.",
  description:
    "Las Vegas is one of the fastest-growing healthcare markets in the country. Whether you run a dental practice, chiropractic clinic, or specialty medical office, your patients are searching Google before they ever pick up the phone. HuskyTail Digital builds SEO strategies that put healthcare providers in front of the right patients at the right moment — no fluff, no guesswork.",
  targetKeyword: "healthcare SEO Las Vegas",
  stats: [
    { value: "77%", label: "of patients use Google to find a new provider" },
    { value: "3×", label: "more leads from local SEO vs. paid ads long-term" },
    { value: "90%", label: "of clicks go to page-one results" },
    { value: "46%", label: "of all Google searches have local intent" },
  ],
};

const NICHES = [
  { slug: "dentist", name: "Dentists", icon: "🦷", description: "Rank for 'dentist near me' and fill your appointment book with high-value patients." },
  { slug: "chiropractor", name: "Chiropractors", icon: "🦴", description: "Dominate local search for back pain, neck pain, and auto injury patients in your area." },
  { slug: "optometrist", name: "Optometrists", icon: "👁️", description: "Get found when patients search for eye exams, glasses, and contact lens fittings." },
  { slug: "orthodontist", name: "Orthodontists", icon: "😁", description: "Capture high-intent searches for braces and Invisalign in every neighborhood you serve." },
  { slug: "dermatologist", name: "Dermatologists", icon: "🩺", description: "Rank for acne treatment, skin cancer screening, and cosmetic dermatology searches." },
  { slug: "therapist", name: "Therapists", icon: "🧠", description: "Connect with patients actively searching for mental health support and counseling." },
  { slug: "pediatrician", name: "Pediatricians", icon: "👶", description: "Be the first practice parents find when searching for a pediatrician for their child." },
  { slug: "plastic-surgeon", name: "Plastic Surgeons", icon: "✨", description: "Attract high-value cosmetic surgery consultations through targeted local SEO." },
  { slug: "urgent-care", name: "Urgent Care Clinics", icon: "🚑", description: "Own the 'urgent care near me' search and capture walk-in patients around the clock." },
  { slug: "physical-therapist", name: "Physical Therapists", icon: "💪", description: "Rank for post-surgery rehab, sports injury, and chronic pain searches in your city." },
  { slug: "podiatrist", name: "Podiatrists", icon: "🦶", description: "Get found by patients searching for foot pain, bunions, and diabetic foot care." },
  { slug: "cardiologist", name: "Cardiologists", icon: "❤️", description: "Build a steady referral pipeline and direct patient flow through local search authority." },
  { slug: "gastroenterologist", name: "Gastroenterologists", icon: "🏥", description: "Rank for colonoscopy, IBS, and digestive health searches across the Las Vegas Valley." },
  { slug: "neurologist", name: "Neurologists", icon: "🧬", description: "Capture patients searching for headache specialists, MS treatment, and neurological care." },
  { slug: "psychiatrist", name: "Psychiatrists", icon: "💊", description: "Be visible when patients search for medication management and psychiatric evaluations." },
  { slug: "veterinarian", name: "Veterinarians", icon: "🐾", description: "Fill your schedule with pet owners searching for routine care and emergency vet services." },
  { slug: "oral-surgeon", name: "Oral Surgeons", icon: "🦷", description: "Rank for wisdom tooth removal, dental implants, and jaw surgery searches." },
  { slug: "obgyn", name: "OB-GYN Practices", icon: "👩‍⚕️", description: "Connect with women searching for prenatal care, annual exams, and gynecological services." },
  { slug: "weight-loss-clinic", name: "Weight Loss Clinics", icon: "⚖️", description: "Capture the massive demand for medical weight loss, semaglutide, and body transformation programs." },
  { slug: "addiction-treatment", name: "Addiction Treatment Centers", icon: "🌿", description: "Reach individuals and families searching for rehab, detox, and recovery programs in Nevada." },
  { slug: "med-spa", name: "Med Spas", icon: "💆", description: "Rank for Botox, fillers, laser treatments, and aesthetic medicine searches in your market." },
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

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Healthcare SEO Las Vegas | Medical Practice SEO | HuskyTail Digital",
  description:
    "SEO for healthcare practices in Las Vegas, NV. Dentists, chiropractors, specialists, and medical clinics — we help you rank on Google, fill your schedule, and grow your practice. Free audit.",
  alternates: {
    canonical: `${BASE_URL}/healthcare-seo`,
  },
  openGraph: {
    title: "Healthcare SEO Las Vegas | HuskyTail Digital",
    description:
      "More patients. More appointments. More revenue. HuskyTail Digital builds SEO strategies for Las Vegas healthcare providers that actually move the needle.",
    url: `${BASE_URL}/healthcare-seo`,
    type: "website",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HealthcareSEOPage() {
  // Structured data: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Healthcare SEO", item: `${BASE_URL}/healthcare-seo` },
    ],
  };

  // Structured data: ItemList of all sub-niches
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Healthcare SEO Services in Las Vegas",
    description: "SEO services for every healthcare specialty in the Las Vegas Valley",
    numberOfItems: NICHES.length,
    itemListElement: NICHES.map((niche, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${niche.name} SEO Las Vegas`,
      url: `${BASE_URL}/${niche.slug}-seo-las-vegas`,
    })),
  };

  // Structured data: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  // Structured data: Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare SEO Las Vegas",
    provider: {
      "@type": "LocalBusiness",
      name: "HuskyTail Digital Marketing",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        addressCountry: "US",
      },
    },
    areaServed: { "@type": "State", name: "Nevada" },
    description:
      "Search engine optimization for healthcare practices and medical providers in Las Vegas and the greater Nevada market.",
    serviceType: "Search Engine Optimization",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navigation />

      <main style={{ paddingTop: "var(--desktop-nav-height, 80px)" }}>

        {/* ── Hero ── */}
        <section
          className="text-white overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #0A0F1E 0%, #0D1528 60%, #111827 100%)",
            minHeight: "420px",
          }}
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(200,168,75,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
            {/* Breadcrumb */}
            <nav className="text-xs text-gray-400 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#C8A84B] transition-colors">Home</Link>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-[#C8A84B]">Healthcare SEO</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span>🏥</span>
              <span>21 Healthcare Specialties · 12 Cities · Las Vegas Valley</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Healthcare SEO{" "}
              <span className="text-[#C8A84B]">Las Vegas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold max-w-3xl">
              {INDUSTRY.subheadline}
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              {INDUSTRY.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-[#C8A84B] hover:bg-[#B8943B] text-black font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Get Your Free Healthcare SEO Audit
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C8A84B] text-white hover:text-[#C8A84B] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-[#C8A84B] py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-black">
              {INDUSTRY.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-black">{stat.value}</div>
                  <div className="text-sm font-medium mt-1 opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Healthcare SEO Matters ── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-6">
                  Why Las Vegas Healthcare Practices Need SEO Now
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  The Las Vegas Valley added over 40,000 new residents last year. Every one of them needs a primary care doctor, a dentist, a specialist. They're not asking friends — they're typing into Google. If your practice isn't on page one, you're invisible to a market that's actively growing.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Healthcare SEO isn't just about rankings. It's about trust signals — reviews, accurate business information, authoritative content — that tell both Google and prospective patients that your practice is the right choice. We build that infrastructure for you.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Unlike paid ads that stop the moment you stop paying, SEO compounds. The authority you build in month one is still working in year three. That's why the practices that invest in SEO early in a growing market like Las Vegas win disproportionately.
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
                      <h3 className="font-bold text-[#0A0F1E] mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Niche Grid — the main internal linking section ── */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-4">
                21 Healthcare Specialties
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4">
                SEO for Every Healthcare Specialty in Las Vegas
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Each specialty has its own search behavior, competitive landscape, and patient intent. We build niche-specific strategies — not one-size-fits-all campaigns.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {NICHES.map((niche) => (
                <Link
                  key={niche.slug}
                  href={`/${niche.slug}-seo-las-vegas`}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-[#C8A84B] hover:shadow-lg transition-all duration-200 p-6 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{niche.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#0A0F1E] text-lg group-hover:text-[#C8A84B] transition-colors leading-tight">
                        {niche.name} SEO
                      </h3>
                      <span className="text-xs text-gray-400 font-medium">Las Vegas, NV</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {niche.description}
                  </p>
                  {/* City quick-links for this niche */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">
                      Also serving:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {CITIES.filter((c) => c.slug !== "las-vegas").slice(0, 4).map((city) => (
                        <Link
                          key={city.slug}
                          href={`/${niche.slug}-seo-${city.slug}`}
                          className="text-xs text-gray-400 hover:text-[#C8A84B] hover:underline transition-colors"
                        >
                          {city.name}
                        </Link>
                      ))}
                      <span className="text-xs text-gray-300">+{CITIES.length - 5} more</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── City × Niche Matrix — full crawlable link grid ── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4">
                Healthcare SEO by City in the Las Vegas Valley
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                We serve every corner of the Las Vegas Valley. Find your specialty and your city below.
              </p>
            </div>

            {/* Full matrix: each niche × all cities */}
            <div className="space-y-8">
              {NICHES.map((niche) => (
                <div key={niche.slug} className="border border-gray-100 rounded-2xl overflow-hidden">
                  <div className="bg-[#0A0F1E] px-6 py-4 flex items-center gap-3">
                    <span className="text-xl">{niche.icon}</span>
                    <h3 className="text-white font-bold text-lg">{niche.name} SEO — Las Vegas Valley</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y divide-gray-100">
                    {CITIES.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/${niche.slug}-seo-${city.slug}`}
                        className="px-4 py-3 text-sm text-gray-600 hover:bg-[#C8A84B]/5 hover:text-[#C8A84B] transition-colors font-medium"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="bg-[#0A0F1E] py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              How We Grow Healthcare Practices in Las Vegas
            </h2>
            <p className="text-gray-400 text-lg mb-14 max-w-2xl mx-auto">
              A four-step process built around one goal: more patients through your door.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Free Audit", desc: "We analyze your current rankings, GBP health, citations, and competitors. You get a clear picture of where you stand before spending a dollar." },
                { step: "02", title: "Strategy Build", desc: "Custom SEO roadmap for your specialty and service area. No templates — every plan is built around your specific competitive landscape." },
                { step: "03", title: "Execution", desc: "On-page optimization, GBP management, citation building, content creation, and review generation — all handled for you." },
                { step: "04", title: "Reporting", desc: "Monthly reports showing ranking movement, traffic growth, and call volume. You always know exactly what your investment is producing." },
              ].map((item) => (
                <div key={item.step} className="text-left">
                  <div className="text-5xl font-black text-[#C8A84B]/20 mb-3">{item.step}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-12 text-center">
              Healthcare SEO Questions, Answered
            </h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="font-bold text-[#0A0F1E] text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#C8A84B] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              Ready to Grow Your Healthcare Practice?
            </h2>
            <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">
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
