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
  everestHero: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-hero-realistic-laptop-KVdGPHKu5pyaQZJNE9SKsk.webp",
};

// Disable all caching during development — switch to ISR (revalidate = 600) for production
export const dynamic = 'force-dynamic';

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

// Temporarily disabled to prevent Next.js prerender caching during development
// Re-enable for production build:
// export async function generateStaticParams() {
//   return SAMPLE_PAGES.map((p) => ({
//     slug: `${p.nicheSlug}-seo-${p.citySlug}`,
//   }));
// }

function parsePage(slug: string): NicheCity | null {
  return SAMPLE_PAGES.find(
    (p) => `${p.nicheSlug}-seo-${p.citySlug}` === slug
  ) ?? null;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const slug = resolved.slug;
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
      images: [
        {
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-niche-template-v2-ZXBRzZJJCgr3VxYDveBjxy.webp",
          width: 1200,
          height: 630,
          alt: `${page.nicheName} SEO ${page.cityName} | HuskyTail Digital`,
        },
      ],
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
  benefits: { title: string; description: string }[];
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
    benefits: [
      { title: "Get Found by Homeowners Ready to Call", description: "Be there when they need you most. Your future customers are already searching — we make sure you show up right where and when they are ready to act. Using advanced SEO tactics and localized targeting, we connect you with the high-intent folks in your area who are eager to book, call, or visit." },
      { title: "Boost Trust with Optimized Reviews & Reputation", description: "Turn happy customers into powerful marketing. Strong reviews build trust faster than any sales pitch. We help you generate, manage, and showcase glowing reviews across major platforms — building credibility that drives more clicks, more calls, and more business." },
      { title: "Rank Higher in the Map Pack Where It Counts", description: "Top spot on the map = more foot traffic and calls. The Google Map Pack is prime digital real estate. We help you claim it. By optimizing your listings, citations, and location signals, we boost your visibility exactly where people are searching — leading to more calls, directions, and walk-ins." },
      { title: "Stand Out with Smart, AI-Powered Content", description: "Say the right things to the right people — automatically. We combine data-driven insights with AI-crafted content to tell your story in a way that gets noticed. From service pages to blog posts, your content will attract, engage, and convert — all while reinforcing your local authority." },
      { title: "Drive More Leads Without Paying for Every Click", description: "Why rent traffic when you can own it? Stop relying solely on paid ads to bring in leads. Our SEO strategies help you build long-term, cost-effective visibility that keeps traffic flowing without draining your ad budget. Get more ROI with less spend." },
      { title: "Dominate Voice & Mobile Search", description: "Show up when they say Hey Siri... Voice and mobile searches are exploding — especially for local intent. We make sure your plumbing business is optimized for how real people search on the go, helping you win more attention (and conversions) from voice assistants and smartphones alike." },
    ],
  },
  dentist: {
    headline: "Your Dental Practice Deserves to Be the First One Patients Find",
    pain: `Las Vegas has hundreds of dental practices competing for the same patients. When someone searches 'dentist near me' or 'emergency dentist Las Vegas,' the practices in the Google Maps 3-Pack get 70% of the clicks. If you're not there, you're invisible.`,
    solution: `We help Las Vegas dental practices dominate local search and Google Maps — attracting high-value patients who are actively searching for a dentist right now. Our AI-powered SEO system is built specifically for healthcare practices in the Las Vegas Valley.`,
    stats: [
      { label: "Avg. increase in new patient inquiries", value: "287%" },
      { label: "Time to Google Maps 3-Pack", value: "60–90 days" },
      { label: "Procedures targeted", value: "Implants & More" },
      { label: "Client retention rate", value: "94%" },
    ],
    everestQuote: `I sniffed out every high-value dental keyword in Las Vegas — implants, Invisalign, emergency visits — so your practice fills the schedule, not your competitor's.`,
    faqs: [
      {
        q: `How do I get my dental practice into the Google Maps 3-Pack?`,
        a: `The Google Maps 3-Pack is determined by three factors: relevance, distance, and prominence. We optimize all three — your Google Business Profile, your website's local signals, and your online reputation — to push your practice into the top 3 for your most valuable search terms.`,
      },
      {
        q: `What dental search terms should I be targeting in Las Vegas?`,
        a: `We target high-intent keywords like 'emergency dentist Las Vegas,' 'implants Las Vegas,' 'teeth whitening near me,' and niche-specific terms like 'Invisalign specialist Las Vegas.' We focus on terms that bring patients ready to book — not just traffic.`,
      },
      {
        q: `How is HuskyTail different from dental marketing agencies?`,
        a: `Most dental marketing agencies are generalists. We specialize exclusively in Las Vegas Valley local SEO. Every strategy is built for your specific market — not a national template. We know the local search landscape and the local competition. Plus, we operate month-to-month with no contracts.`,
      },
      {
        q: `How much does dental SEO cost in Las Vegas?`,
        a: `Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting before you invest a dollar.`,
      },
    ],
    benefits: [
      { title: "Get Found by Patients Ready to Schedule", description: "Be there when they need you most. Your future patients are already searching - we make sure you show up right where and when they are ready to book. Using advanced SEO tactics and localized targeting, we connect you with high-intent folks in your area who are eager to schedule, call, or visit your practice." },
      { title: "Boost Trust with Optimized Reviews & Reputation", description: "Turn happy patients into powerful marketing. Strong reviews build trust faster than any sales pitch. We help you generate, manage, and showcase glowing reviews across major platforms - building credibility that drives more clicks, more calls, and more new patient appointments." },
      { title: "Rank Higher in the Map Pack Where It Counts", description: "Top spot on the map = more patient calls and appointments. The Google Map Pack is prime digital real estate for healthcare. We help you claim it. By optimizing your listings, citations, and location signals, we boost your visibility exactly where patients are searching - leading to more calls and new patient bookings." },
      { title: "Stand Out with Smart, AI-Powered Content", description: "Say the right things to the right patients - automatically. We combine data-driven insights with AI-crafted content to tell your practice story in a way that gets noticed. From service pages to blog posts about procedures, your content will attract, engage, and convert - all while reinforcing your local authority." },
      { title: "Drive More Patient Leads Without Paying for Every Click", description: "Why rent traffic when you can own it? Stop relying solely on paid ads to bring in new patients. Our SEO strategies help you build long-term, cost-effective visibility that keeps patient traffic flowing without draining your ad budget. Get more ROI with less spend." },
      { title: "Dominate Voice & Mobile Search", description: "Show up when they say Hey Siri... Voice and mobile searches are exploding - especially for local healthcare intent. We make sure your dental practice is optimized for how real patients search on the go, helping you win more attention (and appointments) from voice assistants and smartphones alike." },
    ],
  },
};

export default async function NicheCityPage({ params }: Props) {
  const resolved = await params;
  const slug = resolved.slug;
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
      "telephone": "+17027861309",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "addressCountry": "US",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "12",
        "bestRating": "5",
        "worstRating": "1",
      },
      "sameAs": [
        "https://www.linkedin.com/company/huskytail-digital",
        "https://www.instagram.com/huskytaildigital",
        "https://www.facebook.com/huskytaildigital",
        "https://x.com/huskytailseo",
      ],
    },
    "areaServed": {
      "@type": "City",
      "name": page.cityName,
      "containedInPlace": { "@type": "State", "name": "Nevada" },
    },
    "description": `AI-powered local SEO for ${page.nicheName.toLowerCase()} in ${page.cityName}, NV. Get found on Google Maps and dominate local search.`,
    "offers": {
      "@type": "Offer",
      "price": "197",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
    },
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
      <main className="border-t-0" style={{ paddingTop: 'var(--desktop-nav-height, 80px)' }}>

        {/* Hero Section */}
        <section className="text-white overflow-hidden relative" style={{
          background: `linear-gradient(to right, #0A0F1E 0%, #0A0F1E 50%, rgba(10, 15, 30, 0.3) 100%), url('${ASSETS.everestHero}')`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}>
          <div className="relative z-10">
          {/* Breadcrumb nav */}
          <nav className="px-4 py-3 relative z-10">
            <div className="max-w-6xl mx-auto text-xs text-gray-400" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <Link href="/" className="hover:text-[#C8A84B] transition-colors">Home</Link>
              <span className="text-gray-600 mx-2">/</span>
              <Link href={`/${page.industrySlug}-seo`} className="hover:text-[#C8A84B] transition-colors">{page.industryName} SEO</Link>
              <span className="text-gray-600 mx-2">/</span>
              <Link href={`/${page.nicheSlug}-seo`} className="hover:text-[#C8A84B] transition-colors">{page.nicheName} SEO</Link>
              <span className="text-gray-600 mx-2">/</span>
              <span className="text-gray-400">{page.cityName}</span>
            </div>
          </nav>

          {/* Hero content */}
          <div className="py-20 px-4 relative z-10">
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
            {/* Right: Everest photo - hidden on desktop since it's in background */}
            <div className="hidden md:flex justify-center items-end relative">
              {/* Everest is now in the background, so we can hide this or remove it */}
            </div>
            {/* Placeholder for layout balance */}
            <div className="hidden md:block" />
          </div>
          </div>
          </div>
        </section>

        {/* Social Proof Badge + Stats Bar */}
        <section className="bg-[#C8A84B] py-10 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Social proof line above stats */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-black text-sm md:text-base font-semibold">
              <div className="flex items-center gap-2">
                <span>★★★★★</span>
                <span>5.0 on Google</span>
              </div>
              <span className="text-black/40">|</span>
              <span>Trusted by 250+ Las Vegas Businesses</span>
            </div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {content.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-black mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-black/70 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
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
                  See exactly where your {page.nicheSlug === 'dentist' ? 'dental practice' : page.nicheName.toLowerCase() + ' business'} stands against your top 3 competitors in {page.cityName}. No pitch. No pressure. Just clarity.
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

        {/* Why Local Matters — Social Proof Stats */}
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

        {/* What You Get — Benefits Section */}
        <section className="py-20 px-4 bg-[#0A0F1E] text-white border-t-4 border-[#C8A84B]">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                What You Get with HuskyTail Digital {page.industryName} Services. No Fluff.
              </h2>

              <p className="text-lg text-gray-300 italic">
                "Lead the Pack for only $197/month" - Everest
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {content.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 text-3xl">🐾</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="italic text-[#C8A84B] font-semibold">First part.</span> {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Everest Mid-Page Quote Block — Visual Break */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Everest mid-leap illustration */}
            <div className="shrink-0 w-56 h-56 md:w-80 md:h-80 relative">
              <Image
                src={ASSETS.everestRock}
                alt="Everest the Husky — HuskyTail Digital Chief Distraction Officer"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(0,209,255,0.4)]"
                sizes="320px"
              />
            </div>
            <div>
              <p className="text-lg md:text-xl text-[#0A0F1E] font-medium leading-relaxed italic mb-3">
                &ldquo;{content.everestQuote}&rdquo;
              </p>
              <p className="text-[#C8A84B] font-bold text-sm">
                — Everest, Chief Distraction Officer · HuskyTail Digital
              </p>
            </div>
          </div>
        </section>

        {/* How It Works — Step 1 / 2 / 3 */}
        <section className="py-20 px-4 bg-[#0A0F1E] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#C8A84B] text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
              <h2 className="text-3xl md:text-4xl font-black">
                How We Get Your {page.nicheName} Business to Page 1
              </h2>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                No guesswork. No fluff. Three focused steps that move the needle in {page.cityName}.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line on desktop */}
              <div className="hidden md:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-[#C8A84B]/20 via-[#C8A84B]/60 to-[#C8A84B]/20" />

              {[
                {
                  step: "01",
                  title: "Free Audit & Strategy Call",
                  description: `We dig into your ${page.nicheSlug === 'dentist' ? 'dental practice' : page.nicheName.toLowerCase() + ' business'} in ${page.cityName} — your Google Business Profile, competitors, keyword gaps, and quick wins. You leave with a clear picture of exactly where you stand and what it takes to rank.`,
                  icon: "🔍",
                  cta: "Book Your Free Audit",
                  ctaHref: "/free-audit",
                },
                {
                  step: "02",
                  title: "We Build & Optimize",
                  description: `Our team executes the full local SEO playbook — GBP optimization, citation cleanup, AI-powered content, and review strategy — all tailored specifically to ${page.nicheSlug === 'dentist' ? 'dental' : page.nicheName.toLowerCase()} practices in the ${page.cityName} market.`,
                  icon: "⚙️",
                  cta: null,
                  ctaHref: null,
                },
                {
                  step: "03",
                  title: "You Rank. We Report.",
                  description: `You get a monthly strategy call and a clear report showing rankings, traffic, and leads. We guarantee first-page Google Maps rankings in 90 days or stop paying until you do.`,
                  icon: "📈",
                  cta: "See Real Results",
                  ctaHref: "/results",
                },
              ].map((item, i) => (
                <div key={item.step} className="relative flex flex-col">
                  {/* Step number bubble */}
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#C8A84B]/10 border-2 border-[#C8A84B]/40 mx-auto mb-6 relative z-10">
                    <span className="text-3xl font-black text-[#C8A84B]">{item.step}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 flex-1 flex flex-col">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm flex-1">{item.description}</p>
                    {item.cta && item.ctaHref && (
                      <Link
                        href={item.ctaHref}
                        className="mt-6 inline-flex items-center gap-1 text-[#C8A84B] font-semibold text-sm hover:underline"
                      >
                        {item.cta} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4">
                Real Results from Real Dental Practices
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                See how HuskyTail Digital helped dental practices in Las Vegas dominate local search and fill their schedules.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-[#C8A84B]">★★★★★</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "We went from 2-3 new patient calls per week to 15+ calls. Our Google Maps ranking went from page 3 to the 3-Pack in just 90 days. This is exactly what we needed."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#0A0F1E]">Dr. Sarah Mitchell</p>
                  <p className="text-sm text-gray-600">Mitchell Family Dental, Las Vegas</p>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-[#C8A84B]">★★★★★</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "I was skeptical about SEO, but HuskyTail proved it works. My practice went from invisible to dominating search results for 'emergency dentist Las Vegas.' Revenue is up 287% in 6 months."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#0A0F1E]">Dr. James Chen</p>
                  <p className="text-sm text-gray-600">Advanced Implant Center, Henderson</p>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-[#C8A84B]">★★★★★</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Stephen and his team know Las Vegas local search inside and out. They didn't just promise results — they delivered. No contracts, no BS. Just real growth."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#0A0F1E]">Dr. Maria Rodriguez</p>
                  <p className="text-sm text-gray-600">Smile Dental Group, Summerlin</p>
                </div>
              </div>
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

        {/* Final CTA */}
        <section className="py-20 px-4 bg-[#0A0F1E] text-white">
          <div className="max-w-3xl mx-auto text-center">
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
              Currently accepting 3 new partner clients in {page.cityName} this month.
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
