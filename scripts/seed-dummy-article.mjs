import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "9m8souzb",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function seedDummyArticle() {
  console.log("Seeding dummy article...");

  // First get the category and author IDs
  const categories = await client.fetch(`*[_type == "category"]{ _id, title }`);
  const authors = await client.fetch(`*[_type == "author"]{ _id, name }`);

  console.log("Categories:", categories);
  console.log("Authors:", authors);

  const localSeoCategory = categories.find((c) => c.title === "Local SEO");
  const stephen = authors.find((a) => a.name === "Stephen Gardner");

  if (!localSeoCategory || !stephen) {
    console.error("Missing category or author — run seed-sanity.mjs first");
    process.exit(1);
  }

  const dummyPost = {
    _type: "post",
    title: "Why Your Las Vegas Business Isn't Showing Up on Google Maps (And How to Fix It)",
    slug: {
      _type: "slug",
      current: "las-vegas-google-maps-not-showing-up",
    },
    excerpt:
      "If your Las Vegas business isn't appearing in the Google Maps 3-Pack, you're losing customers every single day. Here's exactly why it happens and the step-by-step fix that actually works.",
    publishedAt: new Date().toISOString(),
    featured: true,
    readTime: 7,
    metaTitle: "Why Your Las Vegas Business Isn't on Google Maps | HuskyTail Digital",
    metaDescription:
      "Discover the top reasons Las Vegas businesses don't appear in Google Maps results — and the proven local SEO fixes to get you into the 3-Pack.",
    focusKeyword: "Las Vegas Google Maps SEO",
    categories: [
      {
        _type: "reference",
        _ref: localSeoCategory._id,
        _key: "cat-local-seo",
      },
    ],
    author: {
      _type: "reference",
      _ref: stephen._id,
    },
    body: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "intro-span",
            text: "You've claimed your Google Business Profile. You've added photos. You've even asked a few customers to leave reviews. But when someone searches \"plumber near me\" or \"dentist in Las Vegas,\" your business is nowhere to be found in the Maps results.",
          },
        ],
      },
      {
        _type: "block",
        _key: "intro2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "intro2-span",
            text: "This is one of the most common — and most costly — problems I see with local businesses in Las Vegas. The good news: it's fixable. Here's what's actually going on.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "h2-1-span",
            text: "The Google Maps 3-Pack: Why It Matters",
          },
        ],
      },
      {
        _type: "block",
        _key: "body-1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "body-1-span",
            text: "The Google Maps 3-Pack is the block of three business listings that appears at the top of local search results — above the organic blue links. Studies consistently show that the 3-Pack captures over 44% of all clicks on local search results pages. If you're not in it, you're essentially invisible to the majority of people searching for what you offer.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "h2-2-span",
            text: "The 5 Most Common Reasons You're Not Ranking",
          },
        ],
      },
      {
        _type: "block",
        _key: "h3-1",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "h3-1-span",
            text: "1. Your NAP Data Is Inconsistent",
          },
        ],
      },
      {
        _type: "block",
        _key: "body-2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "body-2-span",
            text: "NAP stands for Name, Address, Phone number. Google cross-references your business information across dozens of directories — Yelp, YellowPages, Bing Places, Apple Maps, and hundreds more. If your address is listed as \"Ste 4 #1166\" in one place and \"Suite 4-1166\" in another, Google sees inconsistency and loses confidence in your listing. Inconsistent NAP is one of the single biggest ranking killers for local businesses.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h3-2",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "h3-2-span",
            text: "2. Your Google Business Profile Is Under-Optimized",
          },
        ],
      },
      {
        _type: "block",
        _key: "body-3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "body-3-span",
            text: "Most business owners claim their GBP, fill in the basics, and call it done. But Google rewards profiles that are actively maintained. That means keyword-rich business descriptions, regular posts (at least weekly), updated service areas, Q&A responses, and a steady stream of photos. A dormant profile signals to Google that you're not engaged — and engaged businesses rank higher.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h3-3",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "h3-3-span",
            text: "3. You Don't Have Enough Reviews — Or They're Not Recent",
          },
        ],
      },
      {
        _type: "block",
        _key: "body-4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "body-4-span",
            text: "Review velocity matters as much as review volume. A business with 50 reviews but none in the last 6 months will often rank below a competitor with 20 reviews that got 5 last week. Google interprets recent reviews as a signal that your business is active and relevant. Build a system for consistently generating reviews — not a one-time push.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h3-4",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "h3-4-span",
            text: "4. Your Website Isn't Sending Local Signals",
          },
        ],
      },
      {
        _type: "block",
        _key: "body-5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "body-5-span",
            text: "Your GBP doesn't rank in isolation. Google looks at your website as a trust signal for your Maps listing. If your site doesn't have your exact address in the footer, LocalBusiness schema markup, city-specific landing pages, and consistent NAP data — your Maps ranking suffers. The website and the GBP need to work together.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h3-5",
        style: "h3",
        children: [
          {
            _type: "span",
            _key: "h3-5-span",
            text: "5. You're Targeting the Wrong Keywords",
          },
        ],
      },
      {
        _type: "block",
        _key: "body-6",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "body-6-span",
            text: "Many businesses optimize for their business name or a generic category when they should be targeting specific service + location combinations. \"Las Vegas HVAC repair\" converts at a completely different rate than just \"HVAC.\" Your GBP primary category, service descriptions, and website content all need to align around the specific terms your customers are actually searching.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "h2-3-span",
            text: "The Fix: A 90-Day Maps Domination Plan",
          },
        ],
      },
      {
        _type: "block",
        _key: "body-7",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "body-7-span",
            text: "Getting into the 3-Pack isn't a one-day job, but it's also not a mystery. Here's the framework I use with every client:",
          },
        ],
      },
      {
        _type: "block",
        _key: "list-1",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "list-1-span",
            text: "Week 1–2: Full NAP audit across 50+ directories. Fix every inconsistency.",
          },
        ],
      },
      {
        _type: "block",
        _key: "list-2",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "list-2-span",
            text: "Week 3–4: GBP optimization — description, categories, services, photos, first post.",
          },
        ],
      },
      {
        _type: "block",
        _key: "list-3",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "list-3-span",
            text: "Month 2: Website LocalBusiness schema, city landing pages, internal linking.",
          },
        ],
      },
      {
        _type: "block",
        _key: "list-4",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            _key: "list-4-span",
            text: "Month 3: Review generation system, GBP posting cadence, local link building.",
          },
        ],
      },
      {
        _type: "block",
        _key: "conclusion",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "conclusion-span",
            text: "Most businesses that follow this framework see meaningful movement in their Maps ranking within 60–90 days. The key is consistency — Google rewards businesses that show up reliably, not those that sprint and stop.",
          },
        ],
      },
    ],
    faqItems: [
      {
        _key: "faq-1",
        question: "How long does it take to rank in the Google Maps 3-Pack?",
        answer:
          "For most Las Vegas businesses, meaningful movement happens within 60–90 days of consistent optimization. Highly competitive niches (personal injury law, real estate) can take 4–6 months. The key variable is how much ground you need to make up on your competitors.",
      },
      {
        _key: "faq-2",
        question: "Do I need a physical Las Vegas address to rank in Maps?",
        answer:
          "Yes — Google requires a verifiable physical address for Maps rankings. P.O. boxes and virtual offices typically don't qualify. If you serve customers at their location (plumbers, landscapers), you can hide your address and set a service area instead, but you still need a real address for verification.",
      },
      {
        _key: "faq-3",
        question: "Can I rank in multiple Las Vegas neighborhoods?",
        answer:
          "Your primary ranking strength will always be closest to your physical location. To rank across multiple neighborhoods, you need a combination of strong overall domain authority, neighborhood-specific landing pages on your website, and a high volume of reviews mentioning different service areas.",
      },
    ],
  };

  try {
    const result = await client.create(dummyPost);
    console.log("✅ Dummy article created:", result._id);
    console.log("   Slug:", result.slug?.current);
    console.log("   URL: /articles/" + result.slug?.current);
  } catch (err) {
    console.error("❌ Error creating article:", err);
    process.exit(1);
  }
}

seedDummyArticle();
