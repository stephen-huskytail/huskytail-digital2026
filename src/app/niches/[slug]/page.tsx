import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { CITIES } from "@/lib/constants";
import FAQAccordion from "@/components/FAQAccordion";
import { getNicheContent, NICHE_CONTENT_MAP } from "@/lib/niche-content";
import { FromTheBlog } from "@/components/FromTheBlog";

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

// Generate all niche/city combinations
const CITIES_LIST = [
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

const NICHES = [
  // Healthcare
  { slug: "dentist", name: "Dentist", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "chiropractor", name: "Chiropractor", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "optometrist", name: "Optometrist", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "orthodontist", name: "Orthodontist", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "dermatologist", name: "Dermatologist", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "therapist", name: "Therapist", industry: "Healthcare", industrySlug: "healthcare" },
  
  // Home Services
  { slug: "plumber", name: "Plumber", industry: "Home Services", industrySlug: "home-services" },
  { slug: "electrician", name: "Electrician", industry: "Home Services", industrySlug: "home-services" },
  { slug: "hvac", name: "HVAC", industry: "Home Services", industrySlug: "home-services" },
  { slug: "roofer", name: "Roofer", industry: "Home Services", industrySlug: "home-services" },
  { slug: "painter", name: "Painter", industry: "Home Services", industrySlug: "home-services" },
  { slug: "locksmith", name: "Locksmith", industry: "Home Services", industrySlug: "home-services" },
  
  // Legal
  { slug: "attorney", name: "Attorney", industry: "Legal", industrySlug: "legal" },
  
  // Real Estate
  { slug: "realtor", name: "Realtor", industry: "Real Estate", industrySlug: "professional-services" },
  
  // Automotive
  { slug: "mechanic", name: "Auto Mechanic", industry: "Automotive", industrySlug: "automotive" },
  
  // Finance
  { slug: "accountant", name: "Accountant", industry: "Finance", industrySlug: "professional-services" },
  
  // Beauty
  { slug: "salon", name: "Hair Salon", industry: "Beauty", industrySlug: "beauty-wellness" },
  
  // Other
  { slug: "photographer", name: "Photographer", industry: "Other Services", industrySlug: "events-entertainment" },
  
  // Healthcare (additional)
  { slug: "pediatrician", name: "Pediatrician", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "plastic-surgeon", name: "Plastic Surgeon", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "urgent-care", name: "Urgent Care", industry: "Healthcare", industrySlug: "healthcare" },
  
  // Home Services (additional)
  { slug: "landscaper", name: "Landscaper", industry: "Home Services", industrySlug: "home-services" },
  { slug: "cleaning", name: "Cleaning Service", industry: "Home Services", industrySlug: "home-services" },
  { slug: "pest-control", name: "Pest Control", industry: "Home Services", industrySlug: "home-services" },
  { slug: "pool-service", name: "Pool Service", industry: "Home Services", industrySlug: "home-services" },
  
  // Legal (additional)
  { slug: "personal-injury", name: "Personal Injury Attorney", industry: "Legal", industrySlug: "legal" },
  { slug: "family-law", name: "Family Law Attorney", industry: "Legal", industrySlug: "legal" },
  
  // Real Estate (additional)
  { slug: "property-manager", name: "Property Manager", industry: "Real Estate", industrySlug: "professional-services" },
  
  // Beauty (additional)
  { slug: "spa", name: "Spa", industry: "Beauty", industrySlug: "beauty-wellness" },
  { slug: "nail-salon", name: "Nail Salon", industry: "Beauty", industrySlug: "beauty-wellness" },
  
  // Food & Restaurant
  { slug: "restaurant", name: "Restaurant", industry: "Food & Dining", industrySlug: "events-entertainment" },
  
  // Fitness
  { slug: "gym", name: "Gym", industry: "Fitness", industrySlug: "beauty-wellness" },
  { slug: "personal-trainer", name: "Personal Trainer", industry: "Fitness", industrySlug: "beauty-wellness" },
  
  // Automotive (additional)
  { slug: "auto-body", name: "Auto Body", industry: "Automotive", industrySlug: "automotive" },
  
  // Healthcare (batch 3)
  { slug: "physical-therapist", name: "Physical Therapist", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "podiatrist", name: "Podiatrist", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "veterinarian", name: "Veterinarian", industry: "Healthcare", industrySlug: "healthcare" },
  
  // Home Services (batch 3)
  { slug: "garage-door", name: "Garage Door", industry: "Home Services", industrySlug: "home-services" },
  { slug: "flooring", name: "Flooring", industry: "Home Services", industrySlug: "home-services" },
  { slug: "window-treatment", name: "Window Treatment", industry: "Home Services", industrySlug: "home-services" },
  
  // Legal (batch 3)
  { slug: "criminal-defense", name: "Criminal Defense Attorney", industry: "Legal", industrySlug: "legal" },
  { slug: "immigration-lawyer", name: "Immigration Attorney", industry: "Legal", industrySlug: "legal" },
  
  // Finance (additional)
  { slug: "financial-advisor", name: "Financial Advisor", industry: "Finance", industrySlug: "professional-services" },
  { slug: "mortgage-broker", name: "Mortgage Broker", industry: "Finance", industrySlug: "professional-services" },
  { slug: "insurance-agent", name: "Insurance Agent", industry: "Finance", industrySlug: "professional-services" },
  
  // Education
  { slug: "tutoring", name: "Tutoring", industry: "Education", industrySlug: "family-services" },
  
  // Events & Entertainment
  { slug: "event-planner", name: "Event Planner", industry: "Events", industrySlug: "events-entertainment" },

  // Healthcare (batch 4)
  { slug: "cardiologist", name: "Cardiologist", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "gastroenterologist", name: "Gastroenterologist", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "neurologist", name: "Neurologist", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "psychiatrist", name: "Psychiatrist", industry: "Healthcare", industrySlug: "healthcare" },

  // Home Services (batch 4)
  { slug: "solar", name: "Solar", industry: "Home Services", industrySlug: "home-services" },
  { slug: "handyman", name: "Handyman", industry: "Home Services", industrySlug: "home-services" },
  { slug: "remodeling", name: "Remodeling", industry: "Home Services", industrySlug: "home-services" },

  // Automotive (batch 3)
  { slug: "car-dealership", name: "Car Dealership", industry: "Automotive", industrySlug: "automotive" },
  { slug: "towing", name: "Towing", industry: "Automotive", industrySlug: "automotive" },

  // Beauty (batch 3)
  { slug: "barber", name: "Barbershop", industry: "Beauty", industrySlug: "beauty-wellness" },
  { slug: "tattoo-shop", name: "Tattoo Shop", industry: "Beauty", industrySlug: "beauty-wellness" },

  // Education (additional)
  { slug: "driving-school", name: "Driving School", industry: "Education", industrySlug: "family-services" },

  // Technology
  { slug: "it-support", name: "IT Support", industry: "Technology", industrySlug: "professional-services" },
  { slug: "web-design", name: "Web Design", industry: "Technology", industrySlug: "professional-services" },

  // Healthcare (final batch - new only)
  // urgent-care, plastic-surgeon, pediatrician, orthodontist already added above

  // Home Services (final batch - new only)
  // hvac, roofer, painter, locksmith, pest-control already added above

  // Legal (final batch)
  { slug: "real-estate-attorney", name: "Real Estate Attorney", industry: "Legal", industrySlug: "legal" },
  { slug: "bankruptcy-attorney", name: "Bankruptcy Attorney", industry: "Legal", industrySlug: "legal" },

  // Real Estate (final batch)
  { slug: "real-estate-agent", name: "Real Estate Agent", industry: "Real Estate", industrySlug: "professional-services" },

  // Fitness (final batch)
  { slug: "yoga-studio", name: "Yoga Studio", industry: "Fitness", industrySlug: "beauty-wellness" },
  { slug: "martial-arts", name: "Martial Arts", industry: "Fitness", industrySlug: "beauty-wellness" },

  // Food & Dining (final batch)
  { slug: "catering", name: "Catering", industry: "Food & Dining", industrySlug: "events-entertainment" },

  // Finance (final batch)
  { slug: "tax-preparer", name: "Tax Preparer", industry: "Finance", industrySlug: "professional-services" },

  // Photography (final batch)
  { slug: "wedding-photographer", name: "Wedding Photographer", industry: "Photography", industrySlug: "events-entertainment" },

  // ---- EXPANSION BATCH ----
  // Healthcare (new specialties)
  { slug: "oral-surgeon", name: "Oral Surgeon", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "obgyn", name: "OB-GYN", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "weight-loss-clinic", name: "Weight Loss Clinic", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "addiction-treatment", name: "Addiction Treatment", industry: "Healthcare", industrySlug: "healthcare" },
  { slug: "med-spa", name: "Med Spa", industry: "Healthcare", industrySlug: "healthcare" },

  // Legal (new practice areas)
  { slug: "dui-attorney", name: "DUI Attorney", industry: "Legal", industrySlug: "legal" },
  { slug: "estate-planning-attorney", name: "Estate Planning Attorney", industry: "Legal", industrySlug: "legal" },
  { slug: "workers-comp-attorney", name: "Workers Comp Attorney", industry: "Legal", industrySlug: "legal" },
  { slug: "business-attorney", name: "Business Attorney", industry: "Legal", industrySlug: "legal" },

  // Automotive (new services)
  { slug: "auto-detailing", name: "Auto Detailing", industry: "Automotive", industrySlug: "automotive" },
  { slug: "window-tinting", name: "Window Tinting", industry: "Automotive", industrySlug: "automotive" },
  { slug: "tire-shop", name: "Tire Shop", industry: "Automotive", industrySlug: "automotive" },

  // Home Services (new trades)
  { slug: "moving-company", name: "Moving Company", industry: "Home Services", industrySlug: "home-services" },
  { slug: "junk-removal", name: "Junk Removal", industry: "Home Services", industrySlug: "home-services" },
  { slug: "fence-company", name: "Fence Company", industry: "Home Services", industrySlug: "home-services" },
  { slug: "tree-service", name: "Tree Service", industry: "Home Services", industrySlug: "home-services" },
  { slug: "appliance-repair", name: "Appliance Repair", industry: "Home Services", industrySlug: "home-services" },
  { slug: "carpet-cleaning", name: "Carpet Cleaning", industry: "Home Services", industrySlug: "home-services" },

  // Construction (new industry)
  { slug: "general-contractor", name: "General Contractor", industry: "Construction", industrySlug: "home-services" },
  { slug: "concrete-contractor", name: "Concrete Contractor", industry: "Construction", industrySlug: "home-services" },

  // Beauty & Wellness (new services)
  { slug: "lash-studio", name: "Lash Studio", industry: "Beauty", industrySlug: "beauty-wellness" },
  { slug: "massage-therapist", name: "Massage Therapist", industry: "Beauty", industrySlug: "beauty-wellness" },
  { slug: "microblading", name: "Microblading", industry: "Beauty", industrySlug: "beauty-wellness" },

  // Fitness (new categories)
  { slug: "pilates-studio", name: "Pilates Studio", industry: "Fitness", industrySlug: "beauty-wellness" },
  { slug: "dance-studio", name: "Dance Studio", industry: "Fitness", industrySlug: "beauty-wellness" },

  // Events & Entertainment (Vegas-specific)
  { slug: "wedding-venue", name: "Wedding Venue", industry: "Events", industrySlug: "events-entertainment" },
  { slug: "wedding-planner", name: "Wedding Planner", industry: "Events", industrySlug: "events-entertainment" },
  { slug: "florist", name: "Florist", industry: "Events", industrySlug: "events-entertainment" },
  { slug: "limo-service", name: "Limo Service", industry: "Events", industrySlug: "events-entertainment" },

  // New Industries
  { slug: "daycare", name: "Daycare", industry: "Childcare", industrySlug: "family-services" },
  { slug: "senior-care", name: "Senior Care", industry: "Senior Care", industrySlug: "family-services" },
  { slug: "pet-groomer", name: "Pet Groomer", industry: "Pet Services", industrySlug: "family-services" },
  { slug: "dog-trainer", name: "Dog Trainer", industry: "Pet Services", industrySlug: "family-services" },
  { slug: "videographer", name: "Videographer", industry: "Photography", industrySlug: "events-entertainment" },
  { slug: "home-inspector", name: "Home Inspector", industry: "Real Estate", industrySlug: "professional-services" },
];

const SAMPLE_PAGES: NicheCity[] = NICHES.flatMap(niche =>
  CITIES_LIST.map(city => ({
    nicheSlug: niche.slug,
    nicheName: niche.name,
    industryName: niche.industry,
    industrySlug: niche.industrySlug,
    citySlug: city.slug,
    cityName: city.name,
  }))
);

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

// Niche content is now imported from niche-content.ts
// This allows us to maintain all content in a single, centralized data file

export default async function NicheCityPage({ params }: Props) {
  const resolved = await params;
  const slug = resolved.slug;
  const page = parsePage(slug);
  if (!page) notFound();

  // Get niche-specific content from centralized data file
  const content = getNicheContent(page.nicheSlug, page.nicheName, page.cityName);

  // --- Testimonials Section ---
  const testimonials = content.testimonials || [];

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
        "streetAddress": "10120 W Flamingo Rd Ste 4-1166",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "addressCountry": "US",
        "postalCode": "89147",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "21",
        "bestRating": "5",
        "worstRating": "1",
      },
      "sameAs": [
        "https://www.google.com/maps/place/HuskyTail+Digital+Marketing/@36.1163938,-115.3136191,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8bf3e01c452f9:0x6348e3e318fdcb59!8m2!3d36.1163938!4d-115.3136191!16s%2Fg%2F11x30wkpv9",
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
              <Link href="/" className="hover:text-[#c8a84b] transition-colors">Home</Link>
              <span className="text-gray-600 mx-2">/</span>
              <Link href={`/${page.industrySlug}-seo`} className="hover:text-[#c8a84b] transition-colors">{page.industryName} SEO</Link>
              <span className="text-gray-600 mx-2">/</span>
              <Link href={`/${page.nicheSlug}-seo`} className="hover:text-[#c8a84b] transition-colors">{page.nicheName} SEO</Link>
              <span className="text-gray-600 mx-2">/</span>
              <span className="text-gray-400">{page.cityName}</span>
            </div>
          </nav>

          {/* Hero content */}
          <div className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#c8a84b]/10 border border-[#c8a84b]/30 text-[#c8a84b] text-sm font-medium px-4 py-2 rounded-full mb-6">
                <span>📍</span>
                <span>{page.cityName}, Nevada · {page.industryName}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="block">{page.nicheName} SEO</span>
                <span className="block text-[#c8a84b]">{page.cityName}, NV</span>
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
                <Link href={`/${page.nicheSlug}-seo`} className="text-[#c8a84b] hover:underline font-medium">
                  See how we rank {page.nicheName.toLowerCase()} →
                </Link>
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
        <section className="bg-[#c8a84b] py-10 px-4">
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
                  <span className="text-[#c8a84b]">{page.nicheName}</span> in {page.cityName}
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
                      <span className="text-[#c8a84b] font-bold text-lg">✓</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* Internal links to related services */}
                <div className="flex flex-wrap gap-3">
                  <Link href="/pricing" className="text-sm text-[#c8a84b] hover:underline font-medium">
                    → AI Rank Boost
                  </Link>
                  <Link href="/pricing" className="text-sm text-[#c8a84b] hover:underline font-medium">
                    → Maps Domination
                  </Link>
                  <Link href="/results" className="text-sm text-[#c8a84b] hover:underline font-medium">
                    → See Client Results
                  </Link>
                </div>
              </div>
              <div className="bg-[#0A0F1E] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 text-[#c8a84b]">
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
                      <span className="text-[#c8a84b]">🐾</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/paw-sultation"
                  className="block text-center bg-[#c8a84b] hover:bg-[#b09038] text-black font-bold px-6 py-3 rounded-lg transition-colors"
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
                  <div className="text-5xl font-black text-[#c8a84b] mb-3">{item.stat}</div>
                  <p className="text-gray-600 mb-2 leading-relaxed">{item.label}</p>
                  <p className="text-xs text-gray-400">Source: {item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get — Benefits Section */}
        <section className="py-20 px-4 bg-[#0A0F1E] text-white border-t-4 border-[#c8a84b]">
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
                      <span className="italic text-[#c8a84b] font-semibold">First part.</span> {benefit.description}
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
                alt={`Everest the Husky — HuskyTail Digital Marketing, ${page.nicheName} SEO in ${page.cityName}, NV`}
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(0,209,255,0.4)]"
                sizes="320px"
              />
            </div>
            <div>
              <p className="text-lg md:text-xl text-[#0A0F1E] font-medium leading-relaxed italic mb-3">
                &ldquo;{content.everestQuote}&rdquo;
              </p>
              <p className="text-[#c8a84b] font-bold text-sm">
                — Everest, Chief Distraction Officer · HuskyTail Digital
              </p>
            </div>
          </div>
        </section>

        {/* How It Works — Step 1 / 2 / 3 */}
        <section className="py-20 px-4 bg-[#0A0F1E] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#c8a84b] text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
              <h2 className="text-3xl md:text-4xl font-black">
                How We Get Your {page.nicheName} Business to Page 1
              </h2>
                <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                No guesswork. No fluff. Three focused steps that move the needle in {page.cityName}.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line on desktop */}
              <div className="hidden md:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-[#c8a84b]/20 via-[#c8a84b]/60 to-[#c8a84b]/20" />

              {[
                {
                  step: "01",
                  title: "Free Audit & Strategy Call",
                  description: `We dig into your ${page.nicheSlug === 'dentist' ? 'dental practice' : page.nicheName.toLowerCase() + ' business'} in ${page.cityName} — your Google Business Profile, competitors, keyword gaps, and quick wins. You leave with a clear picture of exactly where you stand and what it takes to rank.`,
                  icon: "🔍",
                  cta: "Book Your Free Audit",
                  ctaHref: "/paw-sultation",
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
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#c8a84b]/10 border-2 border-[#c8a84b]/40 mx-auto mb-6 relative z-10">
                    <span className="text-3xl font-black text-[#c8a84b]">{item.step}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 flex-1 flex flex-col">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm flex-1">{item.description}</p>
                    {item.cta && item.ctaHref && (
                      <Link
                        href={item.ctaHref}
                        className="mt-6 inline-flex items-center gap-1 text-[#c8a84b] font-semibold text-sm hover:underline"
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
                Real Results from Real {page.nicheName}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                See how HuskyTail Digital helped {page.nicheName.toLowerCase()} in {page.cityName} dominate local search and fill their schedules.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-[#c8a84b]">★★★★★</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-[#0A0F1E]">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}, {testimonial.location}</p>
                  </div>
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
                  className="group bg-white border border-gray-200 hover:border-[#c8a84b] rounded-xl p-5 transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#c8a84b] text-lg">📍</span>
                    <span className="font-bold text-[#0A0F1E] group-hover:text-[#c8a84b] transition-colors text-sm">
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
              <Link href={`/${page.nicheSlug}-seo`} className="text-[#c8a84b] hover:underline font-medium text-sm">
                ← All {page.nicheName} SEO Services
              </Link>
              <Link href={`/${page.citySlug}-seo`} className="text-[#c8a84b] hover:underline font-medium text-sm">
                ← All SEO Services in {page.cityName}
              </Link>
            </div>
          </div>
        </section>

        {/* From the Blog */}
        <FromTheBlog city={page.cityName} industry={page.nicheName} />
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
            <p className="text-[#c8a84b] font-semibold text-sm mb-8">
              Currently accepting 3 new partner clients in {page.cityName} this month.
            </p>
            <Link
              href="/paw-sultation"
              className="inline-flex items-center gap-2 bg-[#c8a84b] hover:bg-[#b09038] text-black font-bold px-10 py-5 rounded-lg text-xl transition-colors"
            >
              🐾 Book Your Free Paw-sultation
            </Link>
            <p className="text-gray-500 text-sm mt-6">
              No contracts. No fluff. Just strategy. Starts at{" "}
              <Link href="/pricing" className="text-[#c8a84b] hover:underline">$197/month</Link>.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
