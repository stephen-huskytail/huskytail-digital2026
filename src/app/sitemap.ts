import type { MetadataRoute } from "next";

const BASE_URL = "https://huskytaildigital.com";

const CITIES = [
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

const SERVICES = [
  "local-seo",
  "ai-rank-boost",
  "maps-domination",
  "gbp-optimization",
  "citation-building",
  "reputation-management",
  "content-strategy",
  "geo-optimization",
];

const INDUSTRY_HUBS = [
  "healthcare-seo",
  "home-services-seo",
  "legal-seo",
  "beauty-wellness-seo",
  "automotive-seo",
  "professional-services-seo",
  "events-entertainment-seo",
  "family-services-seo",
];

const NICHES = [
  "dentist","chiropractor","optometrist","orthodontist","dermatologist",
  "therapist","pediatrician","plastic-surgeon","urgent-care","physical-therapist",
  "podiatrist","cardiologist","gastroenterologist","neurologist","psychiatrist",
  "veterinarian","oral-surgeon","ob-gyn","weight-loss-clinic","addiction-treatment",
  "med-spa",
  "plumber","electrician","hvac","roofer","painter","locksmith","landscaper",
  "cleaning","pest-control","pool-service","garage-door","flooring",
  "window-treatment","handyman","remodeling","solar","moving-company",
  "junk-removal","fence-company","tree-service","appliance-repair",
  "carpet-cleaning","general-contractor","concrete-contractor",
  "attorney","personal-injury","family-law","criminal-defense","immigration",
  "real-estate-attorney","bankruptcy-attorney","dui-attorney",
  "estate-planning-attorney","workers-comp-attorney","business-attorney",
  "salon","spa","nail-salon","barber","tattoo-shop","lash-studio",
  "massage-therapist","microblading","gym","personal-trainer","yoga-studio",
  "martial-arts","pilates-studio","dance-studio",
  "mechanic","auto-body","car-dealership","towing","auto-detailing",
  "window-tinting","tire-shop",
  "accountant","financial-advisor","mortgage-broker","insurance-agent",
  "tax-preparer","realtor","property-manager","real-estate-agent",
  "home-inspector","it-support","web-design",
  "event-planner","wedding-venue","wedding-planner","florist","limo-service",
  "photographer","wedding-photographer","videographer","catering",
  "daycare","tutoring","driving-school","pet-groomer","dog-trainer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/results`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/why-we-wag`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/paw-sultation`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/free-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const industryHubPages: MetadataRoute.Sitemap = INDUSTRY_HUBS.map((hub) => ({
    url: `${BASE_URL}/industries/${hub}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/seo/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const nichePages: MetadataRoute.Sitemap = NICHES.flatMap((niche) =>
    CITIES.map((city) => ({
      url: `${BASE_URL}/${niche}-seo-${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  return [
    ...corePages,
    ...servicePages,
    ...industryHubPages,
    ...cityPages,
    ...nichePages,
  ];
}
