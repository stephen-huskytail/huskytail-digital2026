import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { CITIES } from "@/lib/constants";
import FAQAccordion from "@/components/FAQAccordion";

// CDN assets
const ASSETS = {
  everestRock: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-on-rock_02e2029b.webp",
  everestGrass: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-happy_7a210c0c.webp",
  everestSitting: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-sitting_f142456e.webp",
  everestLeap: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-mid-leap-v2-LkVUzVyqddX8JgNZHz8xJx.webp",
};

// ISR revalidation
export const revalidate = 0;

// --- Types ---
interface NicheCity {
  nicheSlug: string;
  nicheName: string;
  industryName: string;
  industrySlug: string;
  citySlug: string;
  cityName: string;
}

// --- Sample pages only — 4 for audit ---
// After approval, replace with full combinatorial generation
const SAMPLE_PAGES: NicheCity[] = [
  { nicheSlug: "plumber", nicheName: "Plumbers", industryName: "Home Services", industrySlug: "home-services", citySlug: "las-vegas", cityName: "Las Vegas" },
  { nicheSlug: "plumber", nicheName: "Plumbers", industryName: "Home Services", industrySlug: "home-services", citySlug: "henderson", cityName: "Henderson" },
  { nicheSlug: "dentist", nicheName: "Dentists", industryName: "Healthcare", industrySlug: "healthcare", citySlug: "las-vegas", cityName: "Las Vegas" },
  { nicheSlug: "dentist", nicheName: "Dentists", industryName: "Healthcare", industrySlug: "healthcare", citySlug: "henderson", cityName: "Henderson" },
];

export async function generateStaticParams() {
  return SAMPLE_PAGES.map((p) => ({
    "niche-seo-city": `${p.nicheSlug}-seo-${p.citySlug}`,
  }));
}

function parsePage(slug: string): NicheCity | null {
  return SAMPLE_PAGES.find(
    (p) => `${p.nicheSlug}-seo-${p.citySlug}` === slug
  ) ?? null;
}

interface Props {
  params: Promise<{ "niche-seo-city": string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const slug = resolved["niche-seo-city"];
  const page = parsePage(slug);
  if (!page) return {};

  return {
    title: `${page.nicheName} SEO ${page.cityName} NV | Google Maps 3-Pack | HuskyTail Digital`,
    description: `Dominate local searches for your ${page.nicheName.toLowerCase()} business in ${page.cityName}. AI-powered SEO for Google Maps 3-Pack. Month-to-month, 30-Day Satisfaction Review. Free Paw-sultation.`,
    alternates: {
      canonical: `https://huskytaildigital.com/${page.nicheSlug}-seo-${page.citySlug}`,
    },
    openGraph: {
      title: `${page.nicheName} SEO ${page.cityName} NV | HuskyTail Digital`,
      description: `More calls. More clients. More revenue. AI-powered SEO for ${page.nicheName.toLowerCase()} in ${page.cityName}, NV.`,
    },
  };
}

// --- Niche-specific content ---
const NICHE_CONTENT: Record<string, {
  headline: string;
  pain: string;
  solution: string;
  stats: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  everestQuote: string;
}> = {
  plumber: {
    headline: "Stop Losing Emergency Calls to Your Competitors",
    pain: "When a pipe bursts at 2am, homeowners grab their phone and search 'plumber near me.' If you're not in the top 3 results on Google Maps, that call goes to your competitor. Every. Single. Time.",
    solution: "We get Las Vegas plumbers to the top of Google Maps and local search — so when someone needs a plumber fast, they find you first. Our AI-powered local SEO system is built specifically for home service businesses in the Las Vegas Valley.",
    stats: [
      { label: "Avg. increase in Google Maps calls", value: "312%" },
      { label: "Time to first page ranking", value: "60–90 days" },
      { label: "Emergency calls captured", value: "24/7" },
      { label: "Client retention rate", value: "94%" },
    ],
    everestQuote: "I tracked down every emergency plumbing keyword in Las Vegas so your phone rings first — not your competitor's.",
    faqs: [
      {
        q: "How long does it take to rank my plumbing business on Google Maps?",
        a: "Most of our plumbing clients see measurable movement in Google Maps rankings within 60–90 days. Full dominance of the 3-Pack typically takes 4–6 months depending on your current GBP health and competition level in your service area.",
      },
      {
        q: "Do I need a website to rank on Google Maps?",
        a: "You need a Google Business Profile, but a strong website dramatically accelerates your rankings. We optimize both together — your GBP and your website work as a unified local SEO system.",
      },
      {
        q: "What makes HuskyTail different from other SEO agencies for plumbers?",
        a: "We specialize exclusively in local SEO for Las Vegas Valley businesses. We don't take on clients in other markets. That means every strategy, every tactic, and every piece of content we create is built for the Las Vegas local search landscape — not recycled from a national template.",
      },
      {
        q: "How much does plumber SEO cost in Las Vegas?",
        a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting before you invest a dollar.",
      },
    ],
  },
  dentist: {
    headline: "Your Dental Practice Deserves to Be the First One Patients Find",
    pain: "Las Vegas has hundreds of dental practices competing for the same patients. When someone searches 'dentist near me' or 'emergency dentist Las Vegas,' the practices in the Google Maps 3-Pack get 70% of the clicks. If you're not there, you're invisible.",
    solution: "We help Las Vegas dental practices dominate local search and Google Maps — attracting high-value patients who are actively searching for a dentist right now. Our AI-powered SEO system is built specifically for healthcare practices in the Las Vegas Valley.",
    stats: [
      { label: "Avg. increase in new patient inquiries", value: "287%" },
      { label: "Time to Google Maps 3-Pack", value: "60–90 days" },
      { label: "Procedures targeted", value: "Implants & More" },
      { label: "Client retention rate", value: "94%" },
    ],
    everestQuote: "I sniffed out every high-value dental keyword in Las Vegas — implants, Invisalign, emergency visits — so your practice fills the schedule, not your competitor's.",
    faqs: [
      {
        q: "How do I get my dental practice into the Google Maps 3-Pack?",
        a: "The Google Maps 3-Pack is determined by three factors: relevance, distance, and prominence. We optimize all three — your Google Business Profile, your website's local signals, and your online reputation — to push your practice into the top 3 for your most valuable search terms.",
      },
      {
        q: "What dental search terms should I be targeting in Las Vegas?",
        a: "The highest-value terms are procedure-specific and location-specific: 'dental implants Las Vegas,' 'Invisalign Henderson,' 'emergency dentist near me,' 'cosmetic dentist Summerlin.' We build a keyword strategy around the procedures that generate the most revenue for your practice.",
      },
      {
        q: "How is HuskyTail different from dental marketing agencies?",
        a: "Most dental marketing agencies use the same national templates for every market. We are a Las Vegas-only SEO agency. We know the local search landscape, the local competition, and the local patient behavior. Every strategy is built for your specific market — not copied from a playbook.",
      },
      {
        q: "How much does dental SEO cost in Las Vegas?",
        a: "Our packages start at $197/month with no contracts. We offer a free audit that shows you exactly where you stand against your top 3 competitors before you commit to anything.",
      },
    ],
  },
};

export default async function NicheCityPage({ params }: Props) {
  const resolved = await params;
  const slug = resolved["niche-seo-city"];
  const page = parsePage(slug);
  if (!page) notFound();

  const content = NICHE_CONTENT[page.nicheSlug] ?? {
    headline: `${page.nicheName} SEO in ${page.cityName} — Get Found First`,
    pain: `${page.cityName} ${page.nicheName.toLowerCase()} are losing clients to competitors who rank higher on Google. Every day you're not on page 1 is revenue walking out the door.`,
    solution: `HuskyTail Digital helps ${page.cityName} ${page.nicheName.toLowerCase()} dominate local search and Google Maps with AI-powered SEO built specifically for the Las Vegas Valley.`,
    stats: [
      { label: "Avg. increase in local calls", value: "300%+" },
      { label: "Time to first page ranking", value: "60–90 days" },
      { label: "Client retention rate", value: "94%" },
      { label: "Pages ranked per client", value: "50+" },
    ],
    everestQuote: `I tracked down every local keyword for ${page.nicheName.toLowerCase()} in ${page.cityName} so your business shows up first — every time.`,
    faqs: [
      {
        q: `How long does it take to rank my ${page.nicheName.toLowerCase()} business in ${page.cityName}?`,
        a: `Most clients see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months depending on competition in your specific niche and location.`,
      },
      {
        q: `What makes HuskyTail Digital different for ${page.nicheName.toLowerCase()} SEO?`,
        a: `We specialize exclusively in Las Vegas Valley local SEO. Every strategy is built for your specific market — not a national template. We know the local search landscape and the local competition.`,
      },
    ],
  };

  // --- Schema markup ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://huskytaildigital.com" },
      { "@type": "ListItem", "position": 2, "name": `${page.industryName} SEO`, "item": `https://huskytaildigital.com/${page.industrySlug}-seo` },
      { "@type": "ListItem", "position": 3, "name": `${page.nicheName} SEO`, "item": `https://huskytaildigital.com/${page.nicheSlug}-seo` },
      { "@type": "ListItem", "position": 4, "name": `${page.nicheName} SEO ${page.cityName}`, "item": `https://huskytaildigital.com/${page.nicheSlug}-seo-${page.citySlug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${page.nicheName} SEO Services in ${page.cityName}, NV`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "HuskyTail Digital",
      "url": "https://huskytaildigital.com",
      "telephone": "+17025551234",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "addressCountry": "US",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": page.cityName,
      "containedInPlace": { "@type": "State", "name": "Nevada" },
    },
    "description": `AI-powered local SEO for ${page.nicheName.toLowerCase()} in ${page.cityName}, NV. Get found on Google Maps and dominate local search.`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };

  // Related cities for internal linking (cards)
  const relatedCities = CITIES.filter((c) => c.slug !== page.citySlug).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="pt-20">

        {/* Breadcrumb nav */}
        <nav className="bg-[#0A0F1E] border-b border-white/5 px-4 py-3">
          <div className="max-w-6xl mx-auto px-4 lg:px-8 flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-[#C8A84B] transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${page.industrySlug}-seo`} className="hover:text-[#C8A84B] transition-colors">{page.industryName} SEO</Link>
            <span>/</span>
            <Link href={`/${page.nicheSlug}-seo`} className="hover:text-[#C8A84B] transition-colors">{page.nicheName} SEO</Link>
            <span>/</span>
            <span className="text-gray-400">{page.cityName}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0F1E] via-[#0D1B3E] to-[#0A0F1E] text-white py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-6">
                <span>📍</span>
                <span>{page.cityName}, Nevada · {page.industryName}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {page.nicheName} SEO in<br />
                <span className="text-[#C8A84B]">{page.cityName}, NV</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
                {content.headline}
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                {content.pain}
              </p>
              {/* Credibility bridge → niche parent page for silo authority */}
              <p className="text-sm text-gray-500 mb-8">
                Trusted by Las Vegas {page.industryName.toLowerCase()} businesses.{" "}
                <Link href={`/${page.nicheSlug}-seo`} className="text-[#C8A84B] hover:underline font-medium">
                  See how we rank {page.nicheName.toLowerCase()} →
                </Link>
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
            {/* Right: Everest photo */}
            <div className="hidden md:flex justify-center items-end relative">
              <div className="relative w-[380px] h-[420px]">
                <div className="absolute inset-0 rounded-2xl bg-[#C8A84B]/10 blur-2xl scale-90" />
                <Image
                  src={ASSETS.everestSitting}
                  alt={`${page.nicheName} SEO ${page.cityName} — HuskyTail Digital mascot Everest`}
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                  sizes="380px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#C8A84B] py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-black mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-black/70 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-6">
                  The HuskyTail Approach for{" "}
                  <span className="text-[#C8A84B]">{page.nicheName}</span> in {page.cityName}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {content.solution}
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Google Business Profile Optimization",
                    "AI-Powered Keyword Research",
                    "Local Citation Building & Cleanup",
                    "Review Generation Strategy",
                    "Niche-Specific Content Creation",
                    "Monthly Reporting & Strategy Calls",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <span className="text-[#C8A84B] font-bold text-lg">✓</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* Internal links to related services */}
                <div className="flex flex-wrap gap-3">
                  <Link href="/services/ai-rank-boost" className="text-sm text-[#C8A84B] hover:underline font-medium">
                    → AI Rank Boost
                  </Link>
                  <Link href="/services/maps-domination" className="text-sm text-[#C8A84B] hover:underline font-medium">
                    → Maps Domination
                  </Link>
                  <Link href="/results" className="text-sm text-[#C8A84B] hover:underline font-medium">
                    → See Client Results
                  </Link>
                </div>
              </div>
              <div className="bg-[#0A0F1E] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 text-[#C8A84B]">
                  Free {page.nicheName} SEO Audit
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  See exactly where your {page.nicheName.toLowerCase()} business stands against your top 3 competitors in {page.cityName}. No pitch. No pressure. Just clarity.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Google Maps ranking analysis",
                    "GBP health check",
                    "Competitor gap report",
                    "Quick-win opportunities",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-[#C8A84B]">🐾</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-audit"
                  className="block text-center bg-[#C8A84B] hover:bg-[#B8943B] text-black font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Claim Your Free Audit →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Everest Mid-Page Quote Block */}
        <section className="py-16 px-4 bg-[#0A0F1E]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Everest mid-leap illustration */}
            <div className="shrink-0 w-48 h-48 md:w-72 md:h-72 relative">
              <Image
                src={ASSETS.everestLeap}
                alt="Everest the Husky mid-leap — HuskyTail Digital Chief Distraction Officer"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(0,209,255,0.4)]"
                sizes="288px"
              />
            </div>
            <div>
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed italic mb-3">
                &ldquo;{content.everestQuote}&rdquo;
              </p>
              <p className="text-[#C8A84B] font-bold text-sm">
                — Everest, Chief Distraction Officer · HuskyTail Digital
              </p>
            </div>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4 text-center">
              Why {page.cityName} {page.nicheName} Need Local SEO Now
            </h2>
            <p className="text-lg text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              The Las Vegas Valley is one of the most competitive local markets in the country. Here is what the data says.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: "76%", label: "of local searches result in a business visit within 24 hours", source: "Google" },
                { stat: "88%", label: "of consumers trust online reviews as much as personal recommendations", source: "BrightLocal" },
                { stat: "70%", label: "of clicks go to the top 3 Google Maps results — the 3-Pack", source: "Moz" },
              ].map((item) => (
                <div key={item.stat} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                  <div className="text-5xl font-black text-[#C8A84B] mb-3">{item.stat}</div>
                  <p className="text-gray-600 mb-2 leading-relaxed">{item.label}</p>
                  <p className="text-xs text-gray-400">Source: {item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section — Accordion */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={content.faqs} />
          </div>
        </section>

        {/* Related City Cards */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0A0F1E] mb-3 text-center">
              {page.nicheName} SEO Across the Las Vegas Valley
            </h2>
            <p className="text-gray-500 text-center mb-10 text-sm">
              We cover every city in the Las Vegas Valley. Click your city to see a tailored strategy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {relatedCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${page.nicheSlug}-seo-${city.slug}`}
                  className="group bg-white border border-gray-200 hover:border-[#C8A84B] rounded-xl p-5 transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#C8A84B] text-lg">📍</span>
                    <span className="font-bold text-[#0A0F1E] group-hover:text-[#C8A84B] transition-colors text-sm">
                      {city.name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {page.nicheName} SEO · Las Vegas Valley
                  </p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${page.nicheSlug}-seo`} className="text-[#C8A84B] hover:underline font-medium text-sm">
                ← All {page.nicheName} SEO Services
              </Link>
              <Link href={`/${page.citySlug}-seo`} className="text-[#C8A84B] hover:underline font-medium text-sm">
                ← All SEO Services in {page.cityName}
              </Link>
            </div>
          </div>
        </section>

        {/* 30-Day Satisfaction Review + Final CTA */}
        <section className="py-20 px-4 bg-[#0A0F1E] text-white">
          <div className="max-w-3xl mx-auto text-center">

            {/* 30-Day Satisfaction Review block */}
            <div className="bg-white/5 border border-[#C8A84B]/20 rounded-2xl p-8 mb-12 text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🛡️</span>
                <h3 className="text-xl font-bold text-[#C8A84B]">Our 30-Day Satisfaction Review</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                After your first 30 days, we sit down together and review everything — rankings, activity, strategy, and results. If you feel we haven't delivered value, we'll make it right or part ways without drama.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                No lock-in. No fine print. We operate month-to-month because we believe our results should earn your business every single month — not a contract.
              </p>
            </div>

            {/* Final CTA */}
            <div className="text-5xl mb-6">🐾</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Dominate {page.cityName} Search Results?
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Get a free, no-pressure audit of your {page.nicheName.toLowerCase()} business in {page.cityName}. See exactly what it will take to reach page 1.
            </p>
            {/* Credible urgency */}
            <p className="text-[#C8A84B] font-semibold text-sm mb-8">
              Currently accepting 3 new {page.nicheName.toLowerCase()} clients in {page.cityName} this month.
            </p>
            <Link
              href="/paw-sultation"
              className="inline-flex items-center gap-2 bg-[#C8A84B] hover:bg-[#B8943B] text-black font-bold px-10 py-5 rounded-lg text-xl transition-colors"
            >
              🐾 Book Your Free Paw-sultation
            </Link>
            <p className="text-gray-500 text-sm mt-6">
              No contracts. No fluff. Just strategy. Starts at{" "}
              <Link href="/pricing" className="text-[#C8A84B] hover:underline">$197/month</Link>.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
