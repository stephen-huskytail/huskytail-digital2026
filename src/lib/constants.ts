export const SITE_URL = "https://huskytaildigital.com";
export const SITE_NAME = "HuskyTail Digital";
export const SITE_TAGLINE = "Built on Strategy. Backed by Clarity. No Fluff.";
export const CONTACT_EMAIL = "everest@huskytaildigital.com";

export const CITIES = [
  { name: "Las Vegas", slug: "las-vegas" },
  { name: "Paradise", slug: "paradise" },
  { name: "Spring Valley", slug: "spring-valley" },
  { name: "North Las Vegas", slug: "north-las-vegas" },
  { name: "Henderson", slug: "henderson" },
  { name: "Summerlin", slug: "summerlin" },
  { name: "Anthem", slug: "anthem" },
  { name: "Green Valley", slug: "green-valley" },
  { name: "Boulder City", slug: "boulder-city" },
  { name: "Mesquite", slug: "mesquite" },
  { name: "Pahrump", slug: "pahrump" },
  { name: "Laughlin", slug: "laughlin" },
];

export const INDUSTRIES = [
  {
    name: "Healthcare",
    slug: "healthcare",
    urlPath: "healthcare-seo",
    icon: "Heart",
    niches: ["Dentist","Chiropractor","Optometrist","Orthodontist","Dermatologist","Therapist","Pediatrician","Plastic Surgeon","Urgent Care","Physical Therapist","Podiatrist","Cardiologist","Gastroenterologist","Neurologist","Psychiatrist","Veterinarian","Oral Surgeon","OB-GYN","Weight Loss Clinic","Addiction Treatment","Med Spa"],
  },
  {
    name: "Home Services",
    slug: "home-services",
    urlPath: "home-services-seo",
    icon: "Home",
    niches: ["Plumber","Electrician","HVAC","Roofer","Painter","Locksmith","Landscaper","Cleaning Service","Pest Control","Pool Service","Garage Door","Flooring","Window Treatment","Handyman","Remodeling","Solar","Moving Company","Junk Removal","Fence Company","Tree Service","Appliance Repair","Carpet Cleaning","General Contractor","Concrete Contractor"],
  },
  {
    name: "Legal",
    slug: "legal",
    urlPath: "legal-seo",
    icon: "Scale",
    niches: ["Attorney","Personal Injury","Family Law","Criminal Defense","Immigration","Real Estate Attorney","Bankruptcy Attorney","DUI Attorney","Estate Planning Attorney","Workers' Comp Attorney","Business Attorney"],
  },
  {
    name: "Beauty & Wellness",
    slug: "beauty-wellness",
    urlPath: "beauty-wellness-seo",
    icon: "Sparkles",
    niches: ["Hair Salon","Spa","Nail Salon","Barber","Tattoo Shop","Lash Studio","Massage Therapist","Microblading","Gym","Personal Trainer","Yoga Studio","Martial Arts","Pilates Studio","Dance Studio","Weight Loss Clinic"],
  },
  {
    name: "Automotive",
    slug: "automotive",
    urlPath: "automotive-seo",
    icon: "Car",
    niches: ["Mechanic","Auto Body","Car Dealership","Towing","Auto Detailing","Window Tinting","Tire Shop"],
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    urlPath: "professional-services-seo",
    icon: "Briefcase",
    niches: ["Accountant","Financial Advisor","Mortgage Broker","Insurance Agent","Tax Preparer","Realtor","Property Manager","Real Estate Agent","Home Inspector","IT Support","Web Design"],
  },
  {
    name: "Events & Entertainment",
    slug: "events-entertainment",
    urlPath: "events-entertainment-seo",
    icon: "Calendar",
    niches: ["Event Planner","Wedding Venue","Wedding Planner","Florist","Limo Service","Photographer","Wedding Photographer","Videographer","Catering"],
  },
  {
    name: "Family Services",
    slug: "family-services",
    urlPath: "family-services-seo",
    icon: "Users",
    niches: ["Daycare","Tutoring","Driving School","Pet Groomer","Dog Trainer"],
  },
];

export const SERVICES = [
  {
    name: "Local SEO",
    slug: "local-seo",
    icon: "MapPin",
    tagline: "Get Found. Get Called. Get Clients.",
    description: "Dominate local search results and Google Maps in your city with our proven local SEO system.",
    features: ["GBP Optimization", "Citation Building", "On-Page SEO", "Review Strategy", "Local Link Building"],
  },
  {
    name: "AI Rank Boost",
    slug: "ai-rank-boost",
    icon: "Zap",
    tagline: "Outrank Competitors with AI Precision.",
    description: "AI-powered keyword clusters and content strategies that put you ahead of the competition — permanently.",
    features: ["AI Keyword Clusters", "Competitor Gap Analysis", "AI Content Creation", "Rank Tracking", "GEO Optimization"],
  },
  {
    name: "Maps Domination",
    slug: "maps-domination",
    icon: "Map",
    tagline: "Own the 3-Pack. Own Your Market.",
    description: "Own the Google Maps 3-Pack and drive more calls, visits, and revenue from local searches.",
    features: ["3-Pack Targeting", "GBP Posts & Photos", "Q&A Optimization", "Review Generation", "Map Embed Strategy"],
  },
];

export const PRICING_TIERS = [
  {
    name: "Standard",
    price: 197,
    period: "month",
    description: "Perfect for businesses ready to get found locally.",
    features: [
      "GBP optimization & citations",
      "Basic on-page SEO",
      "Essential keywords + 1 AI tool/report",
      "Top-10 focus in 1 city",
      "1 optimized page/blog per month",
      "Review monitoring",
      "Monthly summary report",
    ],
    cta: "Start Standard",
    popular: false,
    color: "ice-blue",
  },
  {
    name: "Pro",
    price: 497,
    period: "month",
    description: "For businesses serious about dominating their market.",
    features: [
      "Everything in Standard",
      "Advanced AI keyword clusters",
      "2–3 AI content pieces/month",
      "Competitor gap analysis",
      "Multi-city: up to 2–3 cities",
      "2–4 quality local backlinks",
      "3–4 blogs + review strategy",
      "Bi-weekly check-ins",
      "Detailed dashboards + ROI estimates",
    ],
    cta: "Start Pro",
    popular: true,
    color: "electric-blue",
  },
  {
    name: "Enterprise",
    price: null,
    period: "custom",
    description: "Multi-location businesses, franchises, and agencies deserve more than a template. We build custom strategies that actually move the needle.",
    features: [
      "Everything in Pro",
      "Unlimited cities & locations",
      "Dedicated account manager",
      "Custom AI strategy & content roadmap",
      "Priority support (24-48 hour response)",
      "Unlimited backlinks & PR outreach",
      "Advanced analytics & custom reporting",
      "Quarterly strategy reviews",
      "API access for integrations",
    ],
    cta: "Get Quote",
    popular: false,
    color: "gold",
  },
];

export const TRUST_STATS = [
  { value: "247+", label: "Local Businesses Ranked" },
  { value: "94%", label: "Client Retention Rate" },
  { value: "3.2x", label: "Average ROI Increase" },
  { value: "#1", label: "Ranked in Las Vegas SEO" },
];

export const TESTIMONIALS = [
  {
    name: "Maria R.",
    business: "Henderson Family Law",
    city: "Henderson, NV",
    rating: 5,
    text: "We went from page 3 to the Google Maps 3-Pack in 60 days. The phone hasn't stopped ringing. Stephen and his team are the real deal.",
  },
  {
    name: "Carlos M.",
    business: "Vegas Plumbing Pros",
    city: "Las Vegas, NV",
    rating: 5,
    text: "I was skeptical about SEO, but HuskyTail Digital proved me wrong. We're now the #1 plumber in our area on Google Maps. Worth every penny.",
  },
  {
    name: "Jennifer T.",
    business: "Summerlin Med Spa",
    city: "Summerlin, NV",
    rating: 5,
    text: "The AI-powered content strategy they built for us is incredible. We're ranking for keywords our competitors don't even know exist yet.",
  },
  {
    name: "David K.",
    business: "North LV Auto Repair",
    city: "North Las Vegas, NV",
    rating: 5,
    text: "Month-to-month, no contracts — that alone told me they were confident in their work. Results confirmed it. Best SEO investment I've made.",
  },
];

export const NAV_CITIES = CITIES.map(c => ({ label: c.name, href: `/${c.slug}-seo` }));
export const NAV_INDUSTRIES = INDUSTRIES.map(i => ({ label: i.name, href: `/${i.urlPath}` }));
export const NAV_BLOG_CATS = [
  { label: "Local SEO Tips", href: "/blog/local-seo-tips" },
  { label: "AI-Powered SEO", href: "/blog/ai-powered-seo" },
  { label: "Industry Insights", href: "/blog/industry-insights" },
  { label: "City Guides", href: "/blog/city-guides" },
  { label: "Case Studies", href: "/blog/case-studies" },
  { label: "Tools & Resources", href: "/blog/tools-resources" },
];

// CDN URLs for uploaded real photos
export const ASSETS = {
  everestRock: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-on-rock_02e2029b.webp",
  everestGrass: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-happy_7a210c0c.webp",
  everestSitting: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-sitting_f142456e.webp",
  stephenHeadshot: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/stephen-headshot_f381fc79.png",
};
