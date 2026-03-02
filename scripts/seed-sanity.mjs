/**
 * Seed Sanity with:
 * - 3 categories: Local SEO, Website & Technical SEO, GEO / AI Search
 * - Stephen Gardner author document
 *
 * Run: node scripts/seed-sanity.mjs
 */
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "9m8souzb",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const CATEGORIES = [
  { _id: "category-local-seo", _type: "category", title: "Local SEO", slug: { _type: "slug", current: "local-seo" }, description: "Local SEO strategy, Google Maps optimization, and citation building for Las Vegas businesses." },
  { _id: "category-technical-seo", _type: "category", title: "Website & Technical SEO", slug: { _type: "slug", current: "website-technical-seo" }, description: "Technical SEO, site speed, Core Web Vitals, and on-page optimization." },
  { _id: "category-geo-ai", _type: "category", title: "GEO / AI Search", slug: { _type: "slug", current: "geo-ai-search" }, description: "Generative Engine Optimization, AI search visibility, and the future of local search." },
];

const STEPHEN_AUTHOR = {
  _id: "author-stephen-gardner",
  _type: "author",
  name: "Stephen Gardner",
  slug: { _type: "slug", current: "stephen-gardner" },
  title: "Founder & AiSEO Consultant, HuskyTail Digital",
  bio: "Stephen Gardner is the founder of HuskyTail Digital Marketing and a 20+ year veteran of SEO and digital marketing. He specializes in AI-powered local SEO for Las Vegas businesses, helping them dominate Google Maps and organic search without the fluff.",
  credentials: [
    "Google Certified Partner",
    "20+ Years Experience",
    "Former Google Search Team Member",
  ],
  // LinkedIn URL to be added by Stephen in the studio
};

async function seed() {
  console.log("Seeding Sanity...");

  for (const category of CATEGORIES) {
    try {
      await client.createOrReplace(category);
      console.log(`✓ Category: ${category.title}`);
    } catch (err) {
      console.error(`✗ Category ${category.title}:`, err.message);
    }
  }

  try {
    await client.createOrReplace(STEPHEN_AUTHOR);
    console.log("✓ Author: Stephen Gardner");
  } catch (err) {
    console.error("✗ Author Stephen:", err.message);
  }

  console.log("\nDone. Open Sanity Studio to verify and add Stephen's headshot + LinkedIn URL.");
}

seed();
