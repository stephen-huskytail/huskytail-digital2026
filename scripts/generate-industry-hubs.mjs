#!/usr/bin/env node
/**
 * Industry Hub Page Generator
 * Generates all industry hub pages matching the healthcare-seo design pattern.
 * Run: node scripts/generate-industry-hubs.mjs
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const EVEREST_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-hero-realistic-laptop-KVdGPHKu5pyaQZJNE9SKsk.webp";

const CITIES = [
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

// ─── Industry Data ────────────────────────────────────────────────────────────

const INDUSTRIES = [
  {
    slug: "home-services",
    name: "Home Services",
    urlPath: "home-services-seo",
    icon: "🏠",
    badge: "24 Home Service Trades · 12 Cities",
    heroHeadline: "Home Services SEO",
    heroSubheadline: "More Calls. More Jobs. More Revenue.",
    heroBody: "Las Vegas is one of the fastest-growing construction and home improvement markets in the country. Every day, homeowners search Google for a plumber, roofer, or HVAC tech. We make sure they find you — not your competitor.",
    metaTitle: "Home Services SEO Las Vegas | Contractor & Trades SEO",
    metaDesc: "SEO for home service contractors in Las Vegas, NV. Plumbers, roofers, HVAC, electricians, landscapers, and more — rank on Google, get more calls, and fill your schedule. Free audit.",
    stats: [
      { value: "82%", label: "of homeowners search Google before hiring a contractor" },
      { value: "4×", label: "more leads from local SEO vs. door hangers and mailers" },
      { value: "97%", label: "of people search online to find a local business" },
      { value: "3-Pack", label: "gets 44% of all clicks for local service searches" },
    ],
    whyHeadline: "Why Las Vegas Home Service Businesses Need SEO Now",
    whyBody1: "The Las Vegas Valley is booming. New construction, aging homes, and a growing population mean demand for home services has never been higher. But the contractors getting the calls aren't necessarily the best ones — they're the ones Google can find.",
    whyBody2: "When a pipe bursts at 11pm or an AC unit dies in July, homeowners don't flip through a phone book. They grab their phone and search. If you're not in the top 3 results, you're invisible to a customer who is ready to hire right now.",
    whyBody3: "Home service SEO is about being in the right place at the right moment — when the need is urgent and the intent to hire is highest. That's where we put you.",
    whyServices: [
      { title: "Google Business Profile Optimization", desc: "Dominate the map pack where emergency and same-day service searches convert directly to calls." },
      { title: "Service Area Page Strategy", desc: "Rank in every neighborhood you serve — not just your zip code. We build pages for every city and community." },
      { title: "Review Generation System", desc: "More 5-star reviews means more trust, higher rankings, and more calls. We build the system that makes it automatic." },
      { title: "Local Citation & NAP Consistency", desc: "Consistent business information across 50+ directories builds the trust signals Google uses to rank local contractors." },
    ],
    testimonials: [
      { result: "Page 4 → #1 in 60 Days", specialty: "Plumber", city: "Henderson, NV", quote: "I went from barely getting calls to turning away work. HuskyTail got us into the map pack in under two months. The ROI is insane.", name: "M.T., Owner", icon: "🔧" },
      { result: "3× More Booked Jobs", specialty: "HVAC Company", city: "Las Vegas, NV", quote: "Summer is our busiest season and this year we were fully booked two weeks out. SEO made the difference — we stopped chasing leads and started fielding them.", name: "D.R., Owner", icon: "❄️" },
      { result: "Map Pack in 45 Days", specialty: "Roofing Contractor", city: "North Las Vegas, NV", quote: "After every storm we used to scramble for leads. Now the phone rings before we even send a single flyer. Stephen's team knows what they're doing.", name: "K.L., Owner", icon: "🏠" },
    ],
    faqs: [
      { q: "How does SEO work for home service contractors in Las Vegas?", a: "Home service SEO focuses on three things: Google Business Profile optimization (to appear in the map pack when someone searches 'plumber near me'), service area pages (to rank in every neighborhood you serve), and review strategy (to build the trust signals that convert searchers into callers). We layer in citation building and on-page optimization to create a system that compounds over time." },
      { q: "How quickly can a contractor start getting more calls from SEO?", a: "Most home service businesses in Las Vegas see measurable ranking improvements within 45–60 days. Emergency service categories (plumbing, HVAC, locksmith) often see faster results because search intent is so high. Long-term, SEO consistently outperforms paid ads because the leads don't stop when your budget runs out." },
      { q: "Do I need a website to do SEO?", a: "You need at minimum a Google Business Profile, but a website dramatically amplifies your results. We can help with both — from GBP-only campaigns for newer businesses to full website + SEO packages for established contractors ready to dominate their market." },
      { q: "Can you help me rank in multiple cities across the Las Vegas Valley?", a: "Yes — and this is one of our specialties. We build individual service area pages for each city and community you serve, so you can rank in Henderson, Summerlin, North Las Vegas, and every other area without cannibalizing your own rankings." },
      { q: "What makes home service SEO different from other industries?", a: "Intent and urgency. When someone searches 'emergency plumber Las Vegas' they need help right now. Home service SEO is about being present at that exact moment — in the map pack, at the top of organic results, with reviews that build instant trust. Speed to rank and local precision matter more here than in almost any other industry." },
    ],
    processHeadline: "How We Grow Home Service Businesses in Las Vegas",
    processSubheadline: "A four-step system built around one goal: more calls through your phone.",
    niches: [
      { slug: "plumber", name: "Plumber", icon: "🔧", description: "Own 'plumber near me' and emergency plumbing searches that convert to same-day calls." },
      { slug: "electrician", name: "Electrician", icon: "⚡", description: "Rank for electrical repair, panel upgrades, and EV charger installation searches in your area." },
      { slug: "hvac", name: "HVAC", icon: "❄️", description: "Dominate AC repair, furnace replacement, and HVAC maintenance searches year-round." },
      { slug: "roofer", name: "Roofer", icon: "🏠", description: "Capture storm damage, roof replacement, and inspection searches across the Las Vegas Valley." },
      { slug: "painter", name: "Painter", icon: "🎨", description: "Rank for interior and exterior painting searches and fill your schedule with booked jobs." },
      { slug: "locksmith", name: "Locksmith", icon: "🔑", description: "Own emergency lockout searches — the highest-intent, highest-urgency local service category." },
      { slug: "landscaper", name: "Landscaper", icon: "🌿", description: "Rank for lawn care, desert landscaping, and irrigation searches across the valley." },
      { slug: "cleaning", name: "Cleaning Service", icon: "🧹", description: "Get found for house cleaning, deep cleaning, and move-out cleaning searches in your city." },
      { slug: "pest-control", name: "Pest Control", icon: "🐛", description: "Dominate scorpion control, termite treatment, and pest inspection searches in Las Vegas." },
      { slug: "pool-service", name: "Pool Service", icon: "🏊", description: "Rank for pool cleaning, repair, and renovation searches in the Las Vegas market." },
      { slug: "garage-door", name: "Garage Door", icon: "🚪", description: "Own garage door repair and replacement searches — high-urgency, high-conversion." },
      { slug: "flooring", name: "Flooring", icon: "🪵", description: "Capture flooring installation, tile, and hardwood searches from homeowners ready to remodel." },
      { slug: "window-treatment", name: "Window Treatment", icon: "🪟", description: "Rank for blinds, shutters, and window covering searches in every Las Vegas neighborhood." },
      { slug: "handyman", name: "Handyman", icon: "🔨", description: "Get found for small repairs, honey-do lists, and home maintenance searches year-round." },
      { slug: "remodeling", name: "Remodeling", icon: "🏗️", description: "Rank for kitchen remodel, bathroom renovation, and home addition searches in your market." },
      { slug: "solar", name: "Solar", icon: "☀️", description: "Capture solar installation and energy savings searches from Las Vegas homeowners ready to go solar." },
      { slug: "moving-company", name: "Moving Company", icon: "📦", description: "Own local and long-distance moving searches — Las Vegas has one of the highest relocation rates in the US." },
      { slug: "junk-removal", name: "Junk Removal", icon: "🗑️", description: "Rank for junk removal, estate cleanout, and debris hauling searches across the valley." },
      { slug: "fence-company", name: "Fence Company", icon: "🚧", description: "Get found for fence installation, repair, and replacement searches from homeowners and builders." },
      { slug: "tree-service", name: "Tree Service", icon: "🌳", description: "Rank for tree trimming, removal, and stump grinding searches in your service area." },
      { slug: "appliance-repair", name: "Appliance Repair", icon: "🔌", description: "Own appliance repair searches — high urgency, high conversion, and underserved in most markets." },
      { slug: "carpet-cleaning", name: "Carpet Cleaning", icon: "🧽", description: "Rank for carpet cleaning, upholstery cleaning, and water damage restoration searches." },
      { slug: "general-contractor", name: "General Contractor", icon: "🏗️", description: "Capture new construction, commercial build-out, and major renovation project searches." },
      { slug: "concrete-contractor", name: "Concrete Contractor", icon: "🪨", description: "Rank for driveway, patio, and decorative concrete searches from homeowners and developers." },
    ],
  },

  {
    slug: "legal",
    name: "Legal",
    urlPath: "legal-seo",
    icon: "⚖️",
    badge: "11 Legal Practice Areas · 12 Cities",
    heroHeadline: "Legal SEO",
    heroSubheadline: "More Consultations. More Cases. More Revenue.",
    heroBody: "Las Vegas is a high-stakes legal market. Personal injury, criminal defense, family law — every practice area is competitive. The firms winning the most cases aren't always the best lawyers. They're the ones Google finds first.",
    metaTitle: "Legal SEO Las Vegas | Law Firm SEO Nevada",
    metaDesc: "SEO for law firms and attorneys in Las Vegas, NV. Personal injury, criminal defense, family law, DUI, and more — rank on Google and get more consultation calls. Free audit.",
    stats: [
      { value: "96%", label: "of people seeking legal help start with a Google search" },
      { value: "62%", label: "of legal searches happen on mobile — often in a crisis moment" },
      { value: "3-Pack", label: "captures the majority of clicks for 'attorney near me' searches" },
      { value: "5×", label: "higher ROI from SEO vs. TV and billboard advertising for attorneys" },
    ],
    whyHeadline: "Why Las Vegas Law Firms Need SEO Now",
    whyBody1: "Legal searches are among the highest-intent queries on Google. When someone searches 'DUI attorney Las Vegas' or 'personal injury lawyer Henderson,' they need help — and they need it now. The firm that appears first gets the call.",
    whyBody2: "Las Vegas is a unique legal market. High tourism, a large transient population, and a booming residential base create consistent demand across every practice area. But the competition is fierce. Without a strong SEO strategy, even excellent attorneys are invisible to the clients who need them most.",
    whyBody3: "Legal SEO is about trust as much as visibility. Reviews, authoritative content, and a strong Google Business Profile signal credibility before a potential client ever picks up the phone.",
    whyServices: [
      { title: "Practice Area Page Optimization", desc: "Rank for the exact terms your ideal clients search — from 'personal injury attorney Las Vegas' to 'divorce lawyer Henderson.'" },
      { title: "Google Business Profile Management", desc: "Dominate the map pack where high-intent legal searches convert directly to consultation calls." },
      { title: "Review Strategy & Reputation Management", desc: "More 5-star reviews build the trust that converts searchers into clients before they call anyone else." },
      { title: "Content Authority Building", desc: "Legal content that answers real questions, builds topical authority, and ranks for long-tail searches your competitors ignore." },
    ],
    testimonials: [
      { result: "Page 3 → #1 in 90 Days", specialty: "Personal Injury Attorney", city: "Las Vegas, NV", quote: "We were spending a fortune on billboards with mediocre results. SEO changed everything — we're now getting 3–4 qualified consultation calls every single day.", name: "R.M., Partner", icon: "⚖️" },
      { result: "4× More Consultations", specialty: "Criminal Defense Attorney", city: "Henderson, NV", quote: "Criminal defense is brutally competitive in Las Vegas. HuskyTail got us into the map pack and our consultation volume quadrupled in four months.", name: "J.T., Attorney", icon: "🏛️" },
      { result: "Map Pack in 60 Days", specialty: "Family Law Attorney", city: "Summerlin, NV", quote: "Divorce and custody cases require trust before the first call. Being visible on Google with strong reviews made all the difference in our client quality.", name: "A.K., Attorney", icon: "👨‍👩‍👧" },
    ],
    faqs: [
      { q: "How does SEO work for law firms in Las Vegas?", a: "Legal SEO focuses on three pillars: practice area pages (ranking for the specific legal services you offer), Google Business Profile optimization (appearing in the map pack for local searches), and content authority (building the topical depth that Google rewards with top rankings). We layer in review strategy and citation building to create a system that compounds over time." },
      { q: "How competitive is legal SEO in Las Vegas?", a: "Very competitive — especially for personal injury, criminal defense, and DUI. But competition also means high search volume and high case values. The ROI on legal SEO is among the highest of any industry because a single case can be worth thousands to tens of thousands of dollars." },
      { q: "How long does it take to see results from law firm SEO?", a: "Most law firms see measurable ranking improvements within 60–90 days. Highly competitive practice areas like personal injury may take 4–6 months to reach page one consistently. The key advantage of SEO over paid ads: the rankings you build keep generating leads without ongoing ad spend." },
      { q: "Do you understand legal marketing compliance rules?", a: "Yes. We build all content and strategies with bar association advertising rules in mind. No misleading claims, no guaranteed outcomes, no unauthorized testimonials. Our content is designed to be both effective and compliant." },
      { q: "Can you help a solo attorney compete with large firms?", a: "Absolutely. Local SEO levels the playing field. A solo attorney with a well-optimized Google Business Profile, strong reviews, and targeted practice area pages can outrank large firms for the searches that matter most in their specific market." },
    ],
    processHeadline: "How We Grow Law Firms in Las Vegas",
    processSubheadline: "A four-step system built around one goal: more consultation calls.",
    niches: [
      { slug: "attorney", name: "Attorney", icon: "⚖️", description: "Rank for general legal searches and capture clients who need legal help but aren't sure where to start." },
      { slug: "personal-injury", name: "Personal Injury", icon: "🏥", description: "Own 'personal injury attorney Las Vegas' and capture high-value accident and injury cases." },
      { slug: "family-law", name: "Family Law", icon: "👨‍👩‍👧", description: "Rank for divorce, custody, and family law searches from clients who need trusted representation." },
      { slug: "criminal-defense", name: "Criminal Defense", icon: "🏛️", description: "Dominate criminal defense searches — high urgency, high intent, and high case value." },
      { slug: "immigration", name: "Immigration", icon: "🌎", description: "Connect with clients searching for visa, green card, and immigration legal help in Nevada." },
      { slug: "real-estate-attorney", name: "Real Estate Attorney", icon: "🏠", description: "Rank for real estate closing, contract disputes, and property law searches in the Las Vegas market." },
      { slug: "bankruptcy-attorney", name: "Bankruptcy Attorney", icon: "📋", description: "Capture Chapter 7 and Chapter 13 bankruptcy searches from clients ready to take action." },
      { slug: "dui-attorney", name: "DUI Attorney", icon: "🚗", description: "Own DUI and traffic defense searches — among the highest-urgency legal searches in Las Vegas." },
      { slug: "estate-planning-attorney", name: "Estate Planning Attorney", icon: "📜", description: "Rank for wills, trusts, and estate planning searches from Las Vegas residents planning their future." },
      { slug: "workers-comp-attorney", name: "Workers' Comp Attorney", icon: "🦺", description: "Capture workers' compensation and workplace injury searches from employees who need help." },
      { slug: "business-attorney", name: "Business Attorney", icon: "💼", description: "Rank for business formation, contract review, and commercial litigation searches in Nevada." },
    ],
  },

  {
    slug: "automotive",
    name: "Automotive",
    urlPath: "automotive-seo",
    icon: "🚗",
    badge: "7 Automotive Services · 12 Cities",
    heroHeadline: "Automotive SEO",
    heroSubheadline: "More Cars In. More Revenue Out.",
    heroBody: "Las Vegas drivers search Google before they trust anyone with their vehicle. Whether it's an oil change, a collision repair, or a new car purchase — the shop or dealership that ranks first gets the call. We put you there.",
    metaTitle: "Automotive SEO Las Vegas | Auto Shop & Dealership SEO",
    metaDesc: "SEO for auto repair shops, dealerships, and automotive businesses in Las Vegas, NV. Rank on Google, get more service appointments, and grow your automotive business. Free audit.",
    stats: [
      { value: "88%", label: "of car buyers research online before visiting a dealership" },
      { value: "3×", label: "more service appointments from map pack vs. walk-ins" },
      { value: "76%", label: "of 'near me' automotive searches result in a same-day visit" },
      { value: "5-Star", label: "reviews are the #1 factor in choosing an auto shop" },
    ],
    whyHeadline: "Why Las Vegas Automotive Businesses Need SEO Now",
    whyBody1: "Las Vegas has one of the highest vehicle-per-capita rates in the country. Every one of those vehicles needs maintenance, repairs, and eventually replacement. The shops and dealerships capturing that demand are the ones showing up first on Google.",
    whyBody2: "Automotive searches are highly local and highly intent-driven. When someone searches 'auto repair near me' or 'oil change Henderson,' they're ready to act. Being in the map pack at that moment is the difference between a full bay and an empty one.",
    whyBody3: "Reviews matter more in automotive than almost any other industry. People are trusting you with a major asset. A strong review profile combined with top rankings creates an unstoppable combination.",
    whyServices: [
      { title: "Google Business Profile Optimization", desc: "Dominate the map pack for service-specific searches — oil change, brake repair, tire rotation, and more." },
      { title: "Service Page SEO", desc: "Individual optimized pages for every service you offer, ranking for the exact terms your customers search." },
      { title: "Review Generation System", desc: "Systematic review collection that builds trust, improves rankings, and converts searchers into customers." },
      { title: "Competitor Gap Analysis", desc: "Find the searches your competitors are winning and build a strategy to take those rankings from them." },
    ],
    testimonials: [
      { result: "2× More Service Appointments", specialty: "Auto Repair Shop", city: "Las Vegas, NV", quote: "We were relying on word of mouth for years. SEO opened up a whole new stream of customers we never would have reached. Bays are full every day now.", name: "T.M., Owner", icon: "🔧" },
      { result: "Map Pack in 30 Days", specialty: "Auto Detailing", city: "Henderson, NV", quote: "Detailing is competitive in Vegas. Getting into the map pack changed everything — we're booked out two weeks in advance now.", name: "C.R., Owner", icon: "✨" },
      { result: "3× More Test Drives", specialty: "Used Car Dealership", city: "North Las Vegas, NV", quote: "Online visibility is everything in the car business now. HuskyTail got us ranking for the makes and models people actually search for. Sales are up significantly.", name: "B.K., GM", icon: "🚗" },
    ],
    faqs: [
      { q: "How does SEO work for auto repair shops in Las Vegas?", a: "Automotive SEO focuses on Google Business Profile optimization (to appear in the map pack for 'auto repair near me' searches), service-specific pages (to rank for individual services like brake repair or oil change), and review strategy (to build the trust that converts searchers into customers). We also build location pages if you serve multiple areas across the valley." },
      { q: "How quickly can an auto shop start getting more calls from SEO?", a: "Most auto shops see measurable improvements within 45–60 days. High-urgency categories like towing and lockout services often see faster results. The map pack is typically the fastest win — optimizing your GBP correctly can move you into the top 3 within weeks." },
      { q: "Can you help a dealership rank for specific makes and models?", a: "Yes. Dealership SEO includes make/model-specific inventory pages, comparison content, and local search optimization that captures buyers who are already deep in the research process and ready to visit." },
      { q: "Do reviews really matter for automotive SEO?", a: "Enormously. Automotive is one of the highest-trust purchase decisions people make. A shop with 200 reviews at 4.8 stars will consistently outperform a shop with 20 reviews at 5.0 stars — both in rankings and in conversion rate." },
      { q: "What's the difference between SEO and Google Ads for auto shops?", a: "Google Ads stops the moment you stop paying. SEO builds an asset — rankings, reviews, and authority — that keeps generating leads indefinitely. Most of our automotive clients see a 3–5× better cost-per-lead from SEO vs. paid ads within 6 months." },
    ],
    processHeadline: "How We Grow Automotive Businesses in Las Vegas",
    processSubheadline: "A four-step system built around one goal: more vehicles through your door.",
    niches: [
      { slug: "mechanic", name: "Mechanic", icon: "🔧", description: "Own 'mechanic near me' and auto repair searches that convert to same-day service appointments." },
      { slug: "auto-body", name: "Auto Body", icon: "🚘", description: "Rank for collision repair, dent removal, and auto body shop searches across the Las Vegas Valley." },
      { slug: "car-dealership", name: "Car Dealership", icon: "🏪", description: "Capture car buyers searching for new and used vehicles — rank for makes, models, and dealer searches." },
      { slug: "towing", name: "Towing", icon: "🚛", description: "Own towing and roadside assistance searches — the highest-urgency automotive category." },
      { slug: "auto-detailing", name: "Auto Detailing", icon: "✨", description: "Rank for car detailing, ceramic coating, and paint protection searches in your market." },
      { slug: "window-tinting", name: "Window Tinting", icon: "🪟", description: "Capture window tinting searches — a high-demand service in the Las Vegas heat." },
      { slug: "tire-shop", name: "Tire Shop", icon: "⭕", description: "Rank for tire replacement, rotation, and alignment searches from drivers ready to buy." },
    ],
  },

  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    urlPath: "beauty-wellness-seo",
    icon: "💆",
    badge: "15 Beauty & Wellness Businesses · 12 Cities",
    heroHeadline: "Beauty & Wellness SEO",
    heroSubheadline: "More Bookings. More Clients. More Revenue.",
    heroBody: "Las Vegas is one of the most appearance-conscious cities in the world. Salons, spas, gyms, and wellness studios compete for clients who search Google before they book. We make sure your business is the one they find — and choose.",
    metaTitle: "Beauty & Wellness SEO Las Vegas | Salon, Spa & Fitness SEO",
    metaDesc: "SEO for salons, spas, gyms, fitness studios, and wellness businesses in Las Vegas, NV. Rank on Google, get more bookings, and grow your beauty or wellness business. Free audit.",
    stats: [
      { value: "85%", label: "of beauty clients search Google before booking an appointment" },
      { value: "2×", label: "more bookings from businesses in the Google map pack" },
      { value: "73%", label: "of salon and spa clients read reviews before choosing" },
      { value: "Local", label: "search drives 78% of beauty and wellness new client acquisition" },
    ],
    whyHeadline: "Why Las Vegas Beauty & Wellness Businesses Need SEO Now",
    whyBody1: "Las Vegas has a massive and growing beauty and wellness market — driven by residents, tourists, and a culture that prioritizes appearance and self-care. But the market is crowded. The businesses filling their books aren't necessarily the best — they're the most visible.",
    whyBody2: "Beauty and wellness searches are deeply local and highly personal. When someone searches 'hair salon near me' or 'best gym in Summerlin,' they're looking for a business they can trust with their appearance and health. Reviews, photos, and local visibility all play a critical role.",
    whyBody3: "Unlike paid ads that disappear the moment you stop spending, SEO builds lasting visibility. The rankings and reviews you build today keep generating bookings for years.",
    whyServices: [
      { title: "Google Business Profile Optimization", desc: "Dominate the map pack for beauty and wellness searches — where most new clients discover local businesses." },
      { title: "Service-Specific Page SEO", desc: "Individual pages for every service you offer, ranking for the exact treatments and classes your clients search." },
      { title: "Review Generation & Reputation Management", desc: "A systematic approach to collecting reviews that builds trust, improves rankings, and fills your appointment book." },
      { title: "Photo & Visual SEO", desc: "Beauty is visual. We optimize your photos and visual content to attract clients before they read a single word." },
    ],
    testimonials: [
      { result: "Fully Booked in 90 Days", specialty: "Hair Salon", city: "Summerlin, NV", quote: "I opened six months ago and was struggling to get new clients. HuskyTail got me into the map pack and now I'm turning away appointments. It's been transformational.", name: "S.M., Owner", icon: "💇" },
      { result: "3× More Memberships", specialty: "Fitness Studio", city: "Henderson, NV", quote: "Gym memberships are a relationship business. Being visible on Google with strong reviews meant people came in already trusting us. Membership sales tripled in four months.", name: "J.R., Owner", icon: "💪" },
      { result: "Map Pack in 45 Days", specialty: "Med Spa", city: "Las Vegas, NV", quote: "The aesthetics market in Vegas is incredibly competitive. Getting into the top 3 on Google changed our lead flow completely. We're now selective about which clients we take.", name: "D.K., Owner", icon: "✨" },
    ],
    faqs: [
      { q: "How does SEO work for salons and spas in Las Vegas?", a: "Beauty and wellness SEO focuses on Google Business Profile optimization (to appear in the map pack), service-specific pages (to rank for individual treatments and services), and review strategy (to build the social proof that converts searchers into booked clients). We also optimize your photos and visual content, which matters more in beauty than almost any other industry." },
      { q: "How quickly can a salon or spa start getting more bookings from SEO?", a: "Most beauty businesses see measurable improvements within 45–60 days. The map pack is often the fastest win — a well-optimized GBP with strong photos and reviews can move you into the top 3 within weeks of starting." },
      { q: "Does SEO work for fitness studios and gyms?", a: "Absolutely. Gym and fitness studio searches are highly local and highly competitive. We build strategies that rank you for class-specific searches (yoga, HIIT, Pilates), general fitness searches, and membership-intent queries — capturing clients at every stage of the decision process." },
      { q: "How important are photos for beauty business SEO?", a: "Critical. Google Business Profile photos directly impact both rankings and click-through rates. A salon with 50 high-quality photos of their work will consistently outperform one with 5 stock images — both in the algorithm and in the minds of potential clients." },
      { q: "Can you help a new beauty business compete with established salons?", a: "Yes. New businesses benefit most from an aggressive GBP launch, a strong review acquisition strategy from day one, and targeted content that captures the searches established competitors are ignoring. We've helped new salons rank above 10-year-old competitors within 90 days." },
    ],
    processHeadline: "How We Grow Beauty & Wellness Businesses in Las Vegas",
    processSubheadline: "A four-step system built around one goal: more bookings on your calendar.",
    niches: [
      { slug: "salon", name: "Hair Salon", icon: "💇", description: "Rank for 'hair salon near me' and specific service searches that fill your appointment book." },
      { slug: "spa", name: "Spa", icon: "🧖", description: "Capture spa day, massage, and luxury wellness searches from Las Vegas residents and visitors." },
      { slug: "nail-salon", name: "Nail Salon", icon: "💅", description: "Own nail salon, manicure, and pedicure searches in your neighborhood and city." },
      { slug: "barber", name: "Barber", icon: "✂️", description: "Rank for barbershop and men's grooming searches — a high-loyalty, high-repeat category." },
      { slug: "tattoo-shop", name: "Tattoo Shop", icon: "🎨", description: "Get found for tattoo and piercing searches from clients ready to book their next piece." },
      { slug: "lash-studio", name: "Lash Studio", icon: "👁️", description: "Rank for lash extensions, lash lift, and brow searches — one of the fastest-growing beauty categories." },
      { slug: "massage-therapist", name: "Massage Therapist", icon: "💆", description: "Capture therapeutic and relaxation massage searches from clients seeking relief and wellness." },
      { slug: "microblading", name: "Microblading", icon: "✏️", description: "Own microblading and permanent makeup searches — high-ticket, high-intent, and underserved." },
      { slug: "gym", name: "Gym", icon: "🏋️", description: "Rank for gym membership, fitness center, and workout facility searches in your area." },
      { slug: "personal-trainer", name: "Personal Trainer", icon: "💪", description: "Get found by clients searching for personal training, weight loss coaching, and fitness programs." },
      { slug: "yoga-studio", name: "Yoga Studio", icon: "🧘", description: "Rank for yoga classes, hot yoga, and mindfulness searches from health-conscious Las Vegas residents." },
      { slug: "martial-arts", name: "Martial Arts", icon: "🥋", description: "Capture BJJ, MMA, Muay Thai, and kids martial arts searches in your market." },
      { slug: "pilates-studio", name: "Pilates Studio", icon: "🤸", description: "Rank for Pilates classes, reformer Pilates, and core fitness searches in your neighborhood." },
      { slug: "dance-studio", name: "Dance Studio", icon: "💃", description: "Get found for dance classes, ballroom, and kids dance program searches across the valley." },
      { slug: "weight-loss-clinic", name: "Weight Loss Clinic", icon: "⚖️", description: "Capture medical weight loss, semaglutide, and body transformation program searches." },
    ],
  },

  {
    slug: "professional-services",
    name: "Professional Services",
    urlPath: "professional-services-seo",
    icon: "💼",
    badge: "11 Professional Service Businesses · 12 Cities",
    heroHeadline: "Professional Services SEO",
    heroSubheadline: "More Clients. More Contracts. More Revenue.",
    heroBody: "Las Vegas is a major business hub — and every business needs accountants, financial advisors, IT support, and real estate professionals. The firms getting the most clients aren't necessarily the most qualified. They're the most visible on Google.",
    metaTitle: "Professional Services SEO Las Vegas | Finance, Tech & Real Estate SEO",
    metaDesc: "SEO for accountants, financial advisors, IT companies, real estate agents, and professional service businesses in Las Vegas, NV. Rank on Google and get more clients. Free audit.",
    stats: [
      { value: "93%", label: "of B2B buyers research online before contacting a service provider" },
      { value: "4×", label: "more qualified leads from organic search vs. cold outreach" },
      { value: "78%", label: "of professional service clients choose from the first page of Google" },
      { value: "Trust", label: "is the #1 factor — and Google rankings build it before the first call" },
    ],
    whyHeadline: "Why Las Vegas Professional Service Firms Need SEO Now",
    whyBody1: "Las Vegas is no longer just a tourism economy. It's a growing business hub with thousands of small and medium businesses that need accountants, financial advisors, IT support, and professional services. Those businesses search Google before they sign a contract.",
    whyBody2: "Professional service SEO is about trust and authority. When a business owner searches 'CPA Las Vegas' or 'IT support Henderson,' they're looking for a firm they can trust with their finances, technology, or real estate. Rankings signal credibility before the first conversation.",
    whyBody3: "The firms that invest in SEO now are building an asset that compounds. Every ranking you earn today keeps generating leads without ongoing ad spend — while your competitors pay for every click.",
    whyServices: [
      { title: "Google Business Profile Optimization", desc: "Appear in the map pack where local business owners search for professional services in their area." },
      { title: "Service & Specialty Page SEO", desc: "Rank for the specific services you offer — from tax preparation to IT managed services to buyer's agent representation." },
      { title: "Authority Content Strategy", desc: "Content that answers the questions your ideal clients are searching, building topical authority that Google rewards." },
      { title: "Review & Reputation Management", desc: "Professional services run on trust. A strong review profile converts searchers into clients before they call anyone else." },
    ],
    testimonials: [
      { result: "3× More Tax Clients", specialty: "CPA / Tax Firm", city: "Las Vegas, NV", quote: "Tax season used to be stressful because we never knew how many clients we'd get. Now we have a waitlist. SEO changed our entire business model.", name: "P.L., CPA", icon: "📊" },
      { result: "Page 1 in 60 Days", specialty: "Financial Advisor", city: "Henderson, NV", quote: "High-net-worth clients do their research. Being on page one of Google for 'financial advisor Henderson' meant we were already vetted before the first call.", name: "M.R., CFP", icon: "💰" },
      { result: "2× More Listings", specialty: "Real Estate Agent", city: "Summerlin, NV", quote: "I was relying entirely on referrals. SEO opened up a whole new channel — people finding me on Google who had never heard of me. Listings doubled in six months.", name: "K.T., Realtor", icon: "🏠" },
    ],
    faqs: [
      { q: "How does SEO work for professional service firms in Las Vegas?", a: "Professional service SEO focuses on Google Business Profile optimization (to appear in local searches), service-specific pages (to rank for the exact services you offer), and authority content (to build the topical depth that Google rewards with top rankings). Reviews and reputation management are especially important because professional services are high-trust decisions." },
      { q: "Is SEO worth it for a small accounting or financial advisory firm?", a: "Absolutely. A single new client from SEO can be worth thousands of dollars in annual recurring revenue. The ROI on professional service SEO is among the highest of any industry because client lifetime values are so high." },
      { q: "How long does it take to see results?", a: "Most professional service firms see measurable ranking improvements within 60–90 days. Less competitive specialties and geographic areas can see results faster. The key advantage: unlike paid ads, the rankings you build keep generating leads without ongoing spend." },
      { q: "Can you help a real estate agent rank against large brokerages?", a: "Yes. Local SEO levels the playing field. An individual agent with a well-optimized Google Business Profile, strong reviews, and neighborhood-specific content can outrank large brokerages for the searches that matter most in their specific market." },
      { q: "Do you work with IT companies and technology service providers?", a: "Yes. IT and managed service provider SEO is one of our specialties. We build strategies that rank you for both consumer and B2B technology searches — from 'IT support Las Vegas' to 'managed IT services Henderson.'" },
    ],
    processHeadline: "How We Grow Professional Service Firms in Las Vegas",
    processSubheadline: "A four-step system built around one goal: more qualified clients.",
    niches: [
      { slug: "accountant", name: "Accountant", icon: "📊", description: "Rank for CPA, tax preparation, and accounting services searches from businesses and individuals." },
      { slug: "financial-advisor", name: "Financial Advisor", icon: "💰", description: "Capture wealth management, retirement planning, and investment advisor searches in your market." },
      { slug: "mortgage-broker", name: "Mortgage Broker", icon: "🏦", description: "Rank for home loan, refinance, and mortgage rate searches from Las Vegas buyers and homeowners." },
      { slug: "insurance-agent", name: "Insurance Agent", icon: "🛡️", description: "Get found for auto, home, life, and business insurance searches across the Las Vegas Valley." },
      { slug: "tax-preparer", name: "Tax Preparer", icon: "📋", description: "Own tax preparation and filing searches — especially high-intent during tax season." },
      { slug: "realtor", name: "Realtor", icon: "🏠", description: "Rank for home buying, selling, and real estate agent searches in your specific neighborhoods." },
      { slug: "property-manager", name: "Property Manager", icon: "🏢", description: "Capture property management and rental management searches from Las Vegas landlords and investors." },
      { slug: "real-estate-agent", name: "Real Estate Agent", icon: "🔑", description: "Get found by buyers and sellers searching for an agent in specific Las Vegas communities." },
      { slug: "home-inspector", name: "Home Inspector", icon: "🔍", description: "Rank for home inspection searches — a required step in every real estate transaction." },
      { slug: "it-support", name: "IT Support", icon: "💻", description: "Rank for IT support, computer repair, and managed services searches from Las Vegas businesses." },
      { slug: "web-design", name: "Web Design", icon: "🌐", description: "Capture web design, website development, and digital marketing searches from local businesses." },
    ],
  },

  {
    slug: "events-entertainment",
    name: "Events & Entertainment",
    urlPath: "events-entertainment-seo",
    icon: "🎉",
    badge: "9 Events & Entertainment Businesses · 12 Cities",
    heroHeadline: "Events & Entertainment SEO",
    heroSubheadline: "More Bookings. More Events. More Revenue.",
    heroBody: "Las Vegas is the events capital of the world. Weddings, corporate events, photography, catering — the demand is enormous. But so is the competition. The vendors getting booked aren't always the best. They're the ones Google finds first.",
    metaTitle: "Events & Entertainment SEO Las Vegas | Wedding & Event Vendor SEO",
    metaDesc: "SEO for event planners, wedding vendors, photographers, caterers, and entertainment businesses in Las Vegas, NV. Rank on Google and get more bookings. Free audit.",
    stats: [
      { value: "91%", label: "of couples research wedding vendors online before booking" },
      { value: "3×", label: "more event inquiries from vendors in the Google map pack" },
      { value: "87%", label: "of event clients read reviews before making a booking decision" },
      { value: "$35B", label: "wedding industry — Las Vegas is one of the top 5 wedding markets in the US" },
    ],
    whyHeadline: "Why Las Vegas Events & Entertainment Businesses Need SEO Now",
    whyBody1: "Las Vegas hosts more weddings, corporate events, and private celebrations than almost any city in the country. The vendors who capture this market aren't just talented — they're visible. When a couple searches 'wedding photographer Las Vegas' or a corporate planner searches 'event venue Henderson,' the businesses at the top of Google get the inquiry.",
    whyBody2: "Events and entertainment searches are high-value and high-intent. A single wedding booking can be worth thousands of dollars. A corporate event contract can be worth tens of thousands. The ROI on SEO in this industry is exceptional.",
    whyBody3: "Portfolio, reviews, and local visibility work together in events SEO. We build strategies that showcase your work, amplify your reputation, and put you in front of clients who are actively planning and ready to book.",
    whyServices: [
      { title: "Google Business Profile Optimization", desc: "Appear in the map pack where couples and event planners search for vendors in their area." },
      { title: "Portfolio & Visual SEO", desc: "Your work speaks louder than words. We optimize your photos and portfolio content to attract clients before they read a word." },
      { title: "Review Strategy", desc: "Events clients rely heavily on reviews. We build systems that collect reviews consistently and convert searchers into booked clients." },
      { title: "Event-Type Page Strategy", desc: "Individual pages for every type of event you serve — weddings, corporate events, birthdays, anniversaries — each ranking for its own searches." },
    ],
    testimonials: [
      { result: "Booked 18 Months Out", specialty: "Wedding Photographer", city: "Las Vegas, NV", quote: "I used to scramble for bookings. Now I'm turning away clients because I'm fully booked. SEO changed my business from reactive to selective.", name: "A.M., Photographer", icon: "📸" },
      { result: "3× More Event Inquiries", specialty: "Event Planner", city: "Henderson, NV", quote: "Corporate event planning is relationship-driven, but you have to be found first. HuskyTail got us ranking for the searches that matter and our inquiry volume tripled.", name: "L.T., Owner", icon: "🎉" },
      { result: "Map Pack in 60 Days", specialty: "Catering Company", city: "Las Vegas, NV", quote: "Catering is incredibly competitive in Vegas. Getting into the top 3 on Google meant we were getting calls from clients who had never heard of us before. Revenue is up 40%.", name: "R.K., Owner", icon: "🍽️" },
    ],
    faqs: [
      { q: "How does SEO work for wedding vendors in Las Vegas?", a: "Wedding vendor SEO focuses on Google Business Profile optimization (to appear in local searches), portfolio and photo optimization (to showcase your work to potential clients), review strategy (to build the social proof that converts inquiries into bookings), and event-type pages (to rank for specific searches like 'outdoor wedding photographer Las Vegas')." },
      { q: "Is Las Vegas a good market for wedding and events SEO?", a: "Exceptional. Las Vegas is one of the top 5 wedding markets in the US, with tens of thousands of weddings per year. The demand is enormous and the search volume is high. Vendors who rank well capture a disproportionate share of this market." },
      { q: "How quickly can an events business start getting more bookings from SEO?", a: "Most events businesses see measurable improvements within 60–90 days. The map pack is often the fastest win. For wedding vendors, the booking cycle is longer (couples often plan 12–18 months out), so SEO investments made today generate bookings well into the future." },
      { q: "Do you work with photographers and videographers?", a: "Yes. Photography and videography SEO is one of our specialties. We optimize your portfolio, rank you for style-specific searches (documentary, fine art, cinematic), and build the local visibility that puts you in front of couples and clients in your market." },
      { q: "Can you help a new events business compete with established vendors?", a: "Yes. New vendors benefit most from an aggressive GBP launch, a strong review acquisition strategy from day one, and targeted content that captures the searches established competitors are ignoring. We've helped new photographers rank above 10-year veterans within 90 days." },
    ],
    processHeadline: "How We Grow Events & Entertainment Businesses in Las Vegas",
    processSubheadline: "A four-step system built around one goal: more bookings on your calendar.",
    niches: [
      { slug: "event-planner", name: "Event Planner", icon: "🎉", description: "Rank for corporate events, private parties, and event planning searches across the Las Vegas Valley." },
      { slug: "wedding-venue", name: "Wedding Venue", icon: "💒", description: "Capture wedding venue searches from couples planning their Las Vegas ceremony or reception." },
      { slug: "wedding-planner", name: "Wedding Planner", icon: "💍", description: "Get found by couples searching for wedding coordination and full-service planning in Las Vegas." },
      { slug: "florist", name: "Florist", icon: "🌸", description: "Rank for wedding flowers, event florals, and everyday arrangement searches in your market." },
      { slug: "limo-service", name: "Limo Service", icon: "🚗", description: "Own limo rental, party bus, and luxury transportation searches for events and nights out." },
      { slug: "photographer", name: "Photographer", icon: "📸", description: "Rank for portrait, event, and commercial photography searches from clients ready to book." },
      { slug: "wedding-photographer", name: "Wedding Photographer", icon: "💒", description: "Capture wedding photography searches from couples planning their Las Vegas wedding." },
      { slug: "videographer", name: "Videographer", icon: "🎥", description: "Get found for wedding videography, corporate video, and event filming searches." },
      { slug: "catering", name: "Catering", icon: "🍽️", description: "Rank for catering, food service, and event catering searches from planners and hosts." },
    ],
  },

  {
    slug: "family-services",
    name: "Family Services",
    urlPath: "family-services-seo",
    icon: "👨‍👩‍👧",
    badge: "5 Family Service Businesses · 12 Cities",
    heroHeadline: "Family Services SEO",
    heroSubheadline: "More Families Found. More Trust Built. More Revenue.",
    heroBody: "Las Vegas is one of the fastest-growing family markets in the country. Parents search Google for daycares, tutors, and pet groomers before they make a single call. We make sure your business is the one they find — and trust.",
    metaTitle: "Family Services SEO Las Vegas | Childcare, Pet & Education SEO",
    metaDesc: "SEO for daycares, tutoring centers, pet groomers, dog trainers, and driving schools in Las Vegas, NV. Rank on Google and get more families through your door. Free audit.",
    stats: [
      { value: "94%", label: "of parents research childcare and family services online first" },
      { value: "3×", label: "more inquiries from family service businesses in the map pack" },
      { value: "89%", label: "of pet owners search Google before choosing a groomer or trainer" },
      { value: "Trust", label: "is the #1 factor for family service decisions — and SEO builds it" },
    ],
    whyHeadline: "Why Las Vegas Family Service Businesses Need SEO Now",
    whyBody1: "Las Vegas is growing fast — and with that growth comes a surge in families with children, pets, and educational needs. Parents and pet owners are discerning searchers. They read reviews, compare options, and choose businesses that feel trustworthy before they ever make contact.",
    whyBody2: "Family service searches are deeply local and highly emotional. When a parent searches 'daycare near me' or a pet owner searches 'dog groomer Henderson,' they're making a decision about something they care deeply about. Being visible and trustworthy in that moment is everything.",
    whyBody3: "The family services businesses that invest in SEO now are building lasting relationships with the community — and lasting rankings that keep generating leads without ongoing ad spend.",
    whyServices: [
      { title: "Google Business Profile Optimization", desc: "Appear in the map pack where parents and pet owners search for trusted family services in their neighborhood." },
      { title: "Trust-Building Content Strategy", desc: "Content that answers the questions parents and pet owners are searching, building the authority that converts searchers into clients." },
      { title: "Review Generation System", desc: "Family service decisions are trust-driven. A strong review profile is the single most powerful conversion tool in this industry." },
      { title: "Neighborhood-Specific SEO", desc: "Rank in the specific communities you serve — Summerlin, Henderson, Green Valley — not just the broader Las Vegas market." },
    ],
    testimonials: [
      { result: "Waitlist in 4 Months", specialty: "Daycare Center", city: "Summerlin, NV", quote: "We opened with empty spots and within four months we had a waitlist. SEO brought in families we never would have reached through word of mouth alone.", name: "C.M., Director", icon: "👶" },
      { result: "3× More Students", specialty: "Tutoring Center", city: "Henderson, NV", quote: "Parents are very deliberate about choosing tutoring. Being on page one of Google meant we were already vetted before the first call. Enrollment tripled in six months.", name: "T.R., Owner", icon: "📚" },
      { result: "Fully Booked in 60 Days", specialty: "Pet Groomer", city: "Las Vegas, NV", quote: "Pet owners are loyal once they find someone they trust. SEO got us found — and our reviews did the rest. We're fully booked every week now.", name: "K.L., Owner", icon: "🐾" },
    ],
    faqs: [
      { q: "How does SEO work for daycares and childcare centers in Las Vegas?", a: "Childcare SEO focuses on Google Business Profile optimization (to appear in local searches), trust-building content (to answer the questions parents are searching), and review strategy (to build the social proof that converts searchers into enrolled families). Neighborhood-specific pages help you rank in the communities where your target families live." },
      { q: "Is pet services SEO worth it for a small grooming business?", a: "Absolutely. Pet owners are extremely loyal once they find a groomer or trainer they trust. A single new client can be worth hundreds of dollars per year in repeat business. The ROI on pet services SEO is exceptional because of the high lifetime value of each client." },
      { q: "How quickly can a family service business start getting more inquiries from SEO?", a: "Most family service businesses see measurable improvements within 45–60 days. The map pack is often the fastest win — a well-optimized GBP with strong reviews can move you into the top 3 within weeks of starting." },
      { q: "Can you help a tutoring center rank against large national chains?", a: "Yes. Local SEO levels the playing field. A local tutoring center with a well-optimized Google Business Profile, strong reviews, and neighborhood-specific content can outrank national chains for the searches that matter most in their specific community." },
      { q: "Do you work with driving schools?", a: "Yes. Driving school SEO is one of our specialties. We rank you for teen driver education, adult driving lessons, and defensive driving searches — capturing students at the exact moment they're ready to enroll." },
    ],
    processHeadline: "How We Grow Family Service Businesses in Las Vegas",
    processSubheadline: "A four-step system built around one goal: more families through your door.",
    niches: [
      { slug: "daycare", name: "Daycare", icon: "👶", description: "Rank for daycare, childcare, and preschool searches from parents looking for trusted care in their neighborhood." },
      { slug: "tutoring", name: "Tutoring", icon: "📚", description: "Get found by parents searching for tutors, test prep, and academic support for their children." },
      { slug: "driving-school", name: "Driving School", icon: "🚗", description: "Rank for driving lessons, teen driver education, and defensive driving searches in your area." },
      { slug: "pet-groomer", name: "Pet Groomer", icon: "🐾", description: "Own pet grooming, dog grooming, and mobile grooming searches from pet owners in your city." },
      { slug: "dog-trainer", name: "Dog Trainer", icon: "🐕", description: "Capture dog training, puppy classes, and behavior training searches from Las Vegas pet owners." },
    ],
  },
];

// ─── Page Generator ───────────────────────────────────────────────────────────

function generatePageTsx(industry) {
  const nicheCount = industry.niches.length;
  const nichesJson = JSON.stringify(industry.niches, null, 2).replace(/"/g, '"');
  const citiesJson = JSON.stringify(CITIES, null, 2).replace(/"/g, '"');
  const statsJson = JSON.stringify(industry.stats, null, 2).replace(/"/g, '"');
  const faqsJson = JSON.stringify(industry.faqs, null, 2).replace(/"/g, '"');
  const testimonialsJson = JSON.stringify(industry.testimonials, null, 2).replace(/"/g, '"');
  const whyServicesJson = JSON.stringify(industry.whyServices, null, 2).replace(/"/g, '"');

  return `"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const EVEREST_HERO = "${EVEREST_HERO}";

const STATS = ${statsJson};

const NICHES = ${nichesJson};

const CITIES = ${citiesJson};

const FAQS = ${faqsJson};

const TESTIMONIALS = ${testimonialsJson};

const WHY_SERVICES = ${whyServicesJson};

// ─── Sub-components ───────────────────────────────────────────────────────────

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="font-bold text-[#0A0F1E] text-base leading-snug">{faq.q}</span>
            <span
              className="text-[#C8A84B] text-xl font-bold flex-shrink-0 transition-transform duration-200"
              style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function NicheSearch() {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("las-vegas");

  const filtered = NICHES.filter((n) =>
    n.name.toLowerCase().includes(query.toLowerCase()) ||
    n.description.toLowerCase().includes(query.toLowerCase())
  );

  const selectedCityName = CITIES.find((c) => c.slug === selectedCity)?.name ?? "Las Vegas";

  return (
    <div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 mb-8 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search by specialty or service..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#C8A84B] focus:outline-none text-[#0A0F1E] text-sm bg-gray-50 focus:bg-white transition-colors"
          />
        </div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">📍</span>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="pl-10 pr-8 py-3 rounded-xl border border-gray-200 focus:border-[#C8A84B] focus:outline-none text-[#0A0F1E] text-sm bg-gray-50 focus:bg-white transition-colors appearance-none cursor-pointer min-w-[160px]"
          >
            {CITIES.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-6">
        {filtered.length === NICHES.length
          ? \`Showing all \${NICHES.length} ${industry.name.toLowerCase()} services\`
          : \`\${filtered.length} result\${filtered.length !== 1 ? "s" : ""} for "\${query}"\`}
        {" · "}
        <span className="text-[#C8A84B] font-medium">{selectedCityName}, NV</span>
      </p>
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold text-lg">No services match "{query}"</p>
          <button onClick={() => setQuery("")} className="mt-3 text-[#C8A84B] hover:underline text-sm">
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((niche) => (
            <Link
              key={niche.slug}
              href={\`/\${niche.slug}-seo-\${selectedCity}\`}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-[#C8A84B] hover:shadow-lg transition-all duration-200 p-6 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl">{niche.icon}</span>
                <div>
                  <h3 className="font-bold text-[#0A0F1E] text-base group-hover:text-[#C8A84B] transition-colors leading-tight">
                    {niche.name} SEO
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">{selectedCityName}, NV</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                {niche.description}
              </p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Also serving:</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {CITIES.filter((c) => c.slug !== selectedCity).slice(0, 4).map((city) => (
                    <Link
                      key={city.slug}
                      href={\`/\${niche.slug}-seo-\${city.slug}\`}
                      className="text-xs text-gray-400 hover:text-[#C8A84B] hover:underline transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                  {CITIES.length - 5 > 0 && (
                    <span className="text-xs text-gray-300">+{CITIES.length - 5} more</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function FullMatrix() {
  const [matrixQuery, setMatrixQuery] = useState("");
  const filtered = NICHES.filter((n) =>
    n.name.toLowerCase().includes(matrixQuery.toLowerCase())
  );
  return (
    <div>
      <div className="relative mb-8 max-w-md">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        <input
          type="text"
          placeholder="Filter services..."
          value={matrixQuery}
          onChange={(e) => setMatrixQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#C8A84B] focus:outline-none text-[#0A0F1E] text-sm"
        />
      </div>
      <div className="space-y-4">
        {filtered.map((niche) => (
          <div key={niche.slug} className="border border-gray-100 rounded-2xl overflow-hidden">
            <div className="bg-[#0A0F1E] px-5 py-3 flex items-center gap-3">
              <span className="text-lg">{niche.icon}</span>
              <h3 className="text-white font-bold text-sm md:text-base">{niche.name} SEO — Las Vegas Valley</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y divide-gray-100">
              {CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={\`/\${niche.slug}-seo-\${city.slug}\`}
                  className="px-3 py-3 text-xs md:text-sm text-gray-600 hover:bg-[#C8A84B]/5 hover:text-[#C8A84B] transition-colors font-medium"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ${toPascalCase(industry.slug)}SEOPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "var(--desktop-nav-height, 80px)" }}>

        {/* ── Hero ── */}
        <section
          className="text-white overflow-hidden relative"
          style={{
            background: \`linear-gradient(to right, #0A0F1E 0%, #0A0F1E 50%, rgba(10, 15, 30, 0.3) 100%), url('\${EVEREST_HERO}')\`,
            backgroundSize: "auto 100%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            minHeight: "480px",
          }}
        >
          <div className="relative z-10">
            <nav className="px-4 py-3">
              <div className="max-w-6xl mx-auto text-xs text-gray-400">
                <Link href="/" className="hover:text-[#C8A84B] transition-colors">Home</Link>
                <span className="text-gray-600 mx-2">/</span>
                <span className="text-[#C8A84B]">${industry.name} SEO</span>
              </div>
            </nav>
            <div className="py-16 md:py-24 px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-6">
                    <span>${industry.icon}</span>
                    <span>${industry.badge}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    ${industry.heroHeadline}<br />
                    <span className="text-[#C8A84B]">Las Vegas, NV</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
                    ${industry.heroSubheadline}
                  </p>
                  <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                    ${industry.heroBody}
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
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-[#C8A84B] py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-black">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-black">{stat.value}</div>
                  <div className="text-xs md:text-sm font-medium mt-1 opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Niche Search ── */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#C8A84B]/10 border border-[#C8A84B]/30 text-[#C8A84B] text-sm font-medium px-4 py-2 rounded-full mb-4">
                ${nicheCount} ${industry.name} Services
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4">
                Find Your Service + City
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
                Search by service, then select your city to go straight to your niche page.
              </p>
            </div>
            <NicheSearch />
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-white py-14 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-[#C8A84B] uppercase tracking-widest mb-2">Real Results. Real Businesses.</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0A0F1E]">
                Las Vegas ${industry.name} Businesses That Now Own Their Market
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{t.icon}</span>
                    <div>
                      <div className="font-black text-[#C8A84B] text-lg leading-tight">{t.result}</div>
                      <div className="text-xs text-gray-400 font-medium">{t.specialty} · {t.city}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C8A84B] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-xs font-bold text-[#0A0F1E]">{t.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              * Initials used to protect client privacy. Results vary based on market, competition, and starting point.
            </p>
          </div>
        </section>

        {/* ── Why Section ── */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-6">
                  ${industry.whyHeadline}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  ${industry.whyBody1}
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  ${industry.whyBody2}
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  ${industry.whyBody3}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {WHY_SERVICES.map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-[#C8A84B] mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#0A0F1E] mb-1 text-sm md:text-base">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Full Matrix ── */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-4">
                ${industry.name} SEO by City — Full Directory
              </h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                Every service. Every city in the Las Vegas Valley. Find yours below.
              </p>
            </div>
            <FullMatrix />
          </div>
        </section>

        {/* ── Process ── */}
        <section className="bg-[#0A0F1E] py-16 md:py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              ${industry.processHeadline}
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
              ${industry.processSubheadline}
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
              {[
                { step: "01", title: "Free Audit", desc: "We analyze your current rankings, GBP health, citations, and competitors. You get a clear picture before spending a dollar." },
                { step: "02", title: "Strategy Build", desc: "Custom SEO roadmap for your service and area. No templates — every plan is built around your competitive landscape." },
                { step: "03", title: "Execution", desc: "On-page optimization, GBP management, citation building, content creation, and review generation — all handled for you." },
                { step: "04", title: "Reporting", desc: "Monthly reports showing ranking movement, traffic growth, and call volume. You always know what your investment is producing." },
              ].map((item) => (
                <div key={item.step}>
                  <div className="text-5xl font-black text-[#C8A84B]/20 mb-3">{item.step}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1E] mb-10 text-center">
              ${industry.name} SEO Questions, Answered
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#C8A84B] py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              Ready to Grow Your ${industry.name} Business?
            </h2>
            <p className="text-black/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
              Start with a free audit. No contracts. No fluff. Just a clear picture of what it takes to rank in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-[#0A0F1E] text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Get My Free Audit
              </Link>
              <Link
                href="/paw-sultation"
                className="inline-flex items-center justify-center gap-2 border-2 border-black hover:bg-black/10 text-black font-bold px-10 py-4 rounded-lg text-lg transition-colors"
              >
                Book a Paw-sultation
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
`;
}

function generateLayoutTsx(industry) {
  return `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${industry.metaTitle}",
  description: "${industry.metaDesc}",
  alternates: {
    canonical: "https://huskytaildigital.com/${industry.urlPath}",
  },
  openGraph: {
    title: "${industry.metaTitle} | HuskyTail Digital",
    description: "${industry.metaDesc}",
    url: "https://huskytaildigital.com/${industry.urlPath}",
    type: "website",
  },
};

export default function ${toPascalCase(industry.slug)}SEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
}

function toPascalCase(slug) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

// ─── Generate Files ───────────────────────────────────────────────────────────

let generated = 0;
for (const industry of INDUSTRIES) {
  const dir = join(ROOT, "src", "app", industry.urlPath);
  mkdirSync(dir, { recursive: true });

  writeFileSync(join(dir, "page.tsx"), generatePageTsx(industry));
  writeFileSync(join(dir, "layout.tsx"), generateLayoutTsx(industry));

  console.log(`✅ Generated: /${industry.urlPath} (${industry.niches.length} niches)`);
  generated++;
}

console.log(`\n🐾 Done! Generated ${generated} industry hub pages.`);
console.log(`📁 Pages created in src/app/`);
console.log(`\nNext: Update constants.ts INDUSTRIES and Navigation component.`);
