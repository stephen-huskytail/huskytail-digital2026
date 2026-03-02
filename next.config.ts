import type { NextConfig } from "next";

// City slugs - keep in sync with CITIES in page.tsx
const CITY_SLUGS = [
  "las-vegas",
  "henderson",
  "paradise",
  "spring-valley",
  "north-las-vegas",
  "summerlin",
  "anthem",
  "green-valley",
  "boulder-city",
  "mesquite",
  "pahrump",
  "laughlin",
];

// All 104 niche slugs
const NICHE_SLUGS = [
  "dentist",
  "chiropractor",
  "optometrist",
  "orthodontist",
  "dermatologist",
  "therapist",
  "plumber",
  "electrician",
  "hvac",
  "roofer",
  "painter",
  "locksmith",
  "attorney",
  "realtor",
  "mechanic",
  "accountant",
  "salon",
  "photographer",
  "pediatrician",
  "plastic-surgeon",
  "urgent-care",
  "landscaper",
  "cleaning",
  "pest-control",
  "pool-service",
  "personal-injury",
  "family-law",
  "property-manager",
  "spa",
  "nail-salon",
  "restaurant",
  "gym",
  "personal-trainer",
  "auto-body",
  "physical-therapist",
  "podiatrist",
  "veterinarian",
  "garage-door",
  "flooring",
  "window-treatment",
  "criminal-defense",
  "immigration-lawyer",
  "financial-advisor",
  "mortgage-broker",
  "insurance-agent",
  "tutoring",
  "event-planner",
  "cardiologist",
  "gastroenterologist",
  "neurologist",
  "psychiatrist",
  "solar",
  "handyman",
  "remodeling",
  "car-dealership",
  "towing",
  "barber",
  "tattoo-shop",
  "driving-school",
  "it-support",
  "web-design",
  "real-estate-attorney",
  "bankruptcy-attorney",
  "real-estate-agent",
  "yoga-studio",
  "martial-arts",
  "catering",
  "tax-preparer",
  "wedding-photographer",
  "oral-surgeon",
  "obgyn",
  "weight-loss-clinic",
  "addiction-treatment",
  "med-spa",
  "dui-attorney",
  "estate-planning-attorney",
  "workers-comp-attorney",
  "business-attorney",
  "auto-detailing",
  "window-tinting",
  "tire-shop",
  "moving-company",
  "junk-removal",
  "fence-company",
  "tree-service",
  "appliance-repair",
  "carpet-cleaning",
  "general-contractor",
  "concrete-contractor",
  "lash-studio",
  "massage-therapist",
  "microblading",
  "pilates-studio",
  "dance-studio",
  "wedding-venue",
  "wedding-planner",
  "florist",
  "limo-service",
  "daycare",
  "senior-care",
  "pet-groomer",
  "dog-trainer",
  "videographer",
  "home-inspector",
];

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2xsxph8kpxj0f.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "files.manuscdn.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    // On Vercel preview/staging deployments, add X-Robots-Tag: noindex, nofollow
    // to every response so crawlers ignore the *.vercel.app URL entirely.
    // VERCEL_ENV is only "production" on the live production deployment.
    if (process.env.VERCEL_ENV !== "production") {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Robots-Tag", value: "noindex, nofollow" },
          ],
        },
      ];
    }
    return [];
  },
  async redirects() {
    return [
      // Service pages deleted — redirect to pricing
      { source: "/services", destination: "/pricing", permanent: true },
      { source: "/services/local-seo", destination: "/pricing", permanent: true },
      { source: "/services/ai-rank-boost", destination: "/pricing", permanent: true },
      { source: "/services/maps-domination", destination: "/pricing", permanent: true },
    ];
  },
  async rewrites() {
    // /{city}-seo → /seo/{city}
    const cityRewrites = CITY_SLUGS.map((slug) => ({
      source: `/${slug}-seo`,
      destination: `/seo/${slug}`,
    }));

    // /{niche}-seo-{city} → /niches/{niche}-seo-{city}
    const nicheCityRewrites: { source: string; destination: string }[] = [];
    for (const niche of NICHE_SLUGS) {
      for (const city of CITY_SLUGS) {
        nicheCityRewrites.push({
          source: `/${niche}-seo-${city}`,
          destination: `/niches/${niche}-seo-${city}`,
        });
      }
    }

    return [...cityRewrites, ...nicheCityRewrites];
  },
};

export default nextConfig;
