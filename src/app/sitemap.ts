import type { MetadataRoute } from "next";

const BASE_URL = "https://huskytaildigital.com";

const CITIES = [
  "las-vegas",
  "henderson",
  "summerlin",
  "north-las-vegas",
  "paradise",
  "spring-valley",
  "enterprise",
  "whitney",
  "sunrise-manor",
  "boulder-city",
  "mesquite",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/results`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/why-we-wag`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/paw-sultation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // City SEO pages
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/seo/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...corePages, ...servicePages, ...cityPages];
}
