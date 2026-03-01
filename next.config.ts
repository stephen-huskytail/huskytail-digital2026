import type { NextConfig } from "next";

// City slugs hardcoded here to avoid import issues in next.config.ts
// Keep in sync with CITIES in src/lib/constants.ts
const CITY_SLUGS = [
  "las-vegas",
  "henderson",
  "summerlin",
  "north-las-vegas",
  "boulder-city",
  "enterprise",
  "spring-valley",
  "paradise",
  "sunrise-manor",
  "whitney",
  "winchester",
  "laughlin",
];

// Niche-city slugs for the 4 sample pages
const NICHE_CITY_SLUGS = [
  "plumbers-seo-las-vegas",
  "plumbers-seo-henderson",
  "dentists-seo-las-vegas",
  "dentists-seo-henderson",
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

  // Rewrite /{city}-seo → /seo/{city}
  // Rewrite /{niche}-seo-{city} → /niches/{niche}-seo-{city}
  // These deliver the prompt-specified URL formats while Next.js generates pages correctly
  async rewrites() {
    const cityRewrites = CITY_SLUGS.map((slug) => ({
      source: `/${slug}-seo`,
      destination: `/seo/${slug}`,
    }));

    const nicheCityRewrites = NICHE_CITY_SLUGS.map((slug) => ({
      source: `/${slug}`,
      destination: `/niches/${slug}`,
    }));

    return [...cityRewrites, ...nicheCityRewrites];
  },
};

export default nextConfig;
