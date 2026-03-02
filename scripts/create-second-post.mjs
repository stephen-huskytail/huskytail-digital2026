import { createClient } from '@sanity/client';
const client = createClient({
  projectId: '9m8souzb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function createPost() {
  // Get the author and category references
  const author = await client.fetch('*[_type == "author"][0]{ _id, name }');
  const category = await client.fetch('*[_type == "category" && slug.current == "local-seo"][0]{ _id, title }');

  console.log('Author:', author?._id, author?.name);
  console.log('Category:', category?._id, category?.title);

  const post = {
    _type: 'post',
    title: 'How to Rank #1 on Google Maps in Las Vegas: The Complete 2026 Guide',
    slug: { _type: 'slug', current: 'rank-number-one-google-maps-las-vegas-2026' },
    excerpt: 'Google Maps is the most competitive real estate in Las Vegas search. Here\'s the exact framework we use to get local businesses into the 3-Pack — and keep them there.',
    publishedAt: new Date('2026-02-15').toISOString(),
    featured: false,
    readTime: 9,
    metaTitle: 'How to Rank #1 on Google Maps in Las Vegas (2026 Guide)',
    metaDescription: 'A step-by-step guide to ranking in the Google Maps 3-Pack for Las Vegas businesses. Covers GBP optimization, citation building, review strategy, and local link building.',
    focusKeyword: 'rank on Google Maps Las Vegas',
    relatedCities: ['Las Vegas', 'Henderson', 'Summerlin', 'Paradise', 'Spring Valley', 'North Las Vegas'],
    relatedIndustries: ['Legal', 'Healthcare', 'Dental', 'Home Services', 'Restaurants', 'Retail', 'Automotive'],
    ...(author ? { author: { _type: 'reference', _ref: author._id } } : {}),
    ...(category ? { categories: [{ _type: 'reference', _ref: category._id, _key: 'cat1' }] } : {}),
    body: [
      {
        _type: 'block',
        _key: 'intro1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'If you\'re a Las Vegas business owner and you\'re not in the Google Maps 3-Pack, you\'re invisible to the people who are actively looking for you right now. Not tomorrow. Right now. Someone in Summerlin is searching "dentist near me" and your competitor — who may be objectively worse than you — is getting that call because they show up and you don\'t.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'intro2',
        style: 'normal',
        children: [{ _type: 'span', _key: 's2', text: 'This guide covers the exact framework we use at HuskyTail Digital to get local businesses into the 3-Pack. No fluff. No generic advice you\'ve read a hundred times. Just the specific moves that work in a competitive market like Las Vegas.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-1',
        style: 'h2',
        children: [{ _type: 'span', _key: 's3', text: 'Why Google Maps Matters More Than Your Website', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p3',
        style: 'normal',
        children: [{ _type: 'span', _key: 's4', text: 'For local businesses, Google Maps is where the decision gets made. Studies consistently show that over 70% of consumers who perform a local search visit a business within 5 miles — and the vast majority of those searches end with a click on a Maps result, not an organic listing. The 3-Pack (the top three Google Business Profile results) captures the majority of all local clicks.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'statBlock',
        _key: 'stat1',
        stat: '76%',
        label: 'of local searches result in a phone call or store visit within 24 hours',
        source: 'Google/Ipsos',
      },
      {
        _type: 'block',
        _key: 'h2-2',
        style: 'h2',
        children: [{ _type: 'span', _key: 's5', text: 'Step 1: Claim and Fully Optimize Your Google Business Profile', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p4',
        style: 'normal',
        children: [{ _type: 'span', _key: 's6', text: 'Your Google Business Profile (GBP) is the single most important local SEO asset you own. Most businesses claim it and then abandon it. That\'s a mistake. Google treats your GBP like a living document — the more complete, accurate, and active it is, the more it trusts you to show up for searchers.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p5',
        style: 'normal',
        children: [{ _type: 'span', _key: 's7', text: 'Start with the basics: every field filled in, the correct primary category (this is critical — most businesses pick the wrong one), a keyword-rich business description that actually describes what you do and where you do it, and at minimum 10 high-quality photos. Then move to the advanced layer: weekly GBP posts, Q&A populated with your own questions and answers, and services listed with individual descriptions.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'summaryBox',
        _key: 'sum1',
        headline: 'GBP Quick Checklist',
        content: 'Business name matches your signage exactly. Primary category is your most specific service. Description includes your city and top 2-3 keywords. At least 15 photos uploaded. Weekly posts active. Q&A section seeded with 5+ questions.',
      },
      {
        _type: 'block',
        _key: 'h2-3',
        style: 'h2',
        children: [{ _type: 'span', _key: 's8', text: 'Step 2: Build a Consistent Citation Foundation', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p6',
        style: 'normal',
        children: [{ _type: 'span', _key: 's9', text: 'Citations are mentions of your business name, address, and phone number (NAP) across the web. Google uses citation consistency as a trust signal — if your address appears differently across Yelp, Yellow Pages, and your website, that inconsistency erodes your ranking potential. In Las Vegas, where the competition is dense, citation hygiene is non-negotiable.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p7',
        style: 'normal',
        children: [{ _type: 'span', _key: 's10', text: 'The core citation sources to prioritize: Yelp, Apple Maps, Bing Places, Facebook, Foursquare, BBB, and any industry-specific directories relevant to your niche. Every listing must have identical NAP data — down to whether you abbreviate "Street" as "St." or spell it out.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-4',
        style: 'h2',
        children: [{ _type: 'span', _key: 's11', text: 'Step 3: Build a Review Engine, Not a Review Campaign', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p8',
        style: 'normal',
        children: [{ _type: 'span', _key: 's12', text: 'Reviews are one of the top three ranking factors for Google Maps. But most businesses treat reviews as a one-time campaign — they ask for a burst of reviews, get 20, and then stop. Google notices velocity. A steady stream of new reviews over time signals an active, trusted business. A spike followed by silence signals a manipulation attempt.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p9',
        style: 'normal',
        children: [{ _type: 'span', _key: 's13', text: 'Build a system: every completed job, every satisfied customer, every closed deal should trigger a review request. Automate it if you can. Respond to every review — positive and negative — within 48 hours. Your response to a negative review is often more powerful than the review itself.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-5',
        style: 'h2',
        children: [{ _type: 'span', _key: 's14', text: 'Step 4: Optimize Your Website for Local Signals', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p10',
        style: 'normal',
        children: [{ _type: 'span', _key: 's15', text: 'Your website and your GBP are connected. Google cross-references them. Your website needs to have your NAP in the footer on every page, a dedicated contact page with your full address, city-specific landing pages if you serve multiple areas, and schema markup (LocalBusiness JSON-LD) that confirms your business details to Google\'s crawlers.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p11',
        style: 'normal',
        children: [{ _type: 'span', _key: 's16', text: 'Page speed matters too. A slow website hurts your Maps ranking because Google uses your website as a quality signal. If your site takes more than 3 seconds to load on mobile, you\'re leaving ranking potential on the table.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'promoCard',
        _key: 'promo1',
        headline: 'Not Sure Where You Stand?',
        body: 'Get a free Google Maps audit and find out exactly why you\'re not in the 3-Pack — and what it\'ll take to get there.',
        ctaLabel: '🐾 Get My Free Maps Audit',
        ctaUrl: '/paw-sultation',
      },
      {
        _type: 'block',
        _key: 'h2-6',
        style: 'h2',
        children: [{ _type: 'span', _key: 's17', text: 'How Long Does It Take to Rank on Google Maps?', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p12',
        style: 'normal',
        children: [{ _type: 'span', _key: 's18', text: 'Honest answer: it depends on your starting point and your competition. For a brand-new listing in a moderately competitive niche, you can see meaningful movement in 60–90 days with consistent effort. For highly competitive categories in Las Vegas (attorneys, dentists, HVAC), expect 4–6 months of sustained work before you\'re consistently in the 3-Pack.', marks: [] }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p13',
        style: 'normal',
        children: [{ _type: 'span', _key: 's19', text: 'The businesses that win long-term are the ones that treat local SEO as an ongoing operation, not a one-time project. Google Maps is not a set-it-and-forget-it channel. It rewards consistency.', marks: [] }],
        markDefs: [],
      },
    ],
    faqItems: [
      {
        _key: 'faq1',
        question: 'How do I get my business to show up on Google Maps?',
        answer: 'Start by claiming and fully completing your Google Business Profile at business.google.com. Ensure your business name, address, and phone number are consistent across all online directories. Build reviews consistently and keep your profile active with weekly posts.',
      },
      {
        _key: 'faq2',
        question: 'Why is my competitor ranking higher on Google Maps even though I have more reviews?',
        answer: 'Reviews are just one of many ranking factors. Your competitor may have stronger citation consistency, better website local signals, more relevant primary category selection, or a higher engagement rate on their GBP (more clicks, calls, and direction requests). A full audit is needed to identify the specific gap.',
      },
      {
        _key: 'faq3',
        question: 'Does my website affect my Google Maps ranking?',
        answer: 'Yes. Google uses your website as a quality and relevance signal for your Maps listing. A fast, mobile-friendly website with consistent NAP data, local schema markup, and relevant content will support your Maps ranking.',
      },
    ],
  };

  const result = await client.create(post);
  console.log('Created post:', result._id, result.title);
  return result;
}

createPost().catch(console.error);
