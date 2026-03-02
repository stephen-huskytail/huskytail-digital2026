import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Block crawlers entirely on Vercel preview / staging URLs.
  // VERCEL_ENV is "production" only when deployed to the production domain.
  // On preview deployments (*.vercel.app) it is "preview" or "development".
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://www.huskytaildigital.com/sitemap.xml",
    host: "https://www.huskytaildigital.com",
  };
}
