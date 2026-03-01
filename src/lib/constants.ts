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
    name: "Legal",
    slug: "legal",
    icon: "Scale",
    niches: ["Attorneys","Law Firms","Personal Injury","Criminal Defense","Family Law","Divorce Lawyers","Bankruptcy","Immigration","Estate Planning","Corporate Law","DUI Lawyers","Workers Comp"],
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: "Heart",
    niches: ["Dentists","Chiropractors","Med Spas","Plastic Surgeons","Veterinarians","Optometrists","Dermatologists","Orthodontists","Physical Therapists","Psychologists","Urgent Care","Pediatricians"],
  },
  {
    name: "Home Services",
    slug: "home-services",
    icon: "Home",
    niches: ["Plumbers","Roofers","HVAC","Electricians","Landscapers","Painters","General Contractors","Pest Control","Window Installers","Flooring","Pool Services","Garage Door Repair"],
  },
  {
    name: "Beauty & Wellness",
    slug: "beauty-wellness",
    icon: "Sparkles",
    niches: ["Salons","Spas","Gyms","Fitness Centers","Yoga Studios","Barbers","Nail Salons","Massage Therapists","Tanning Salons","Tattoo Shops","Weight Loss Centers","Nutritionists"],
  },
  {
    name: "Food & Drink",
    slug: "food-drink",
    icon: "UtensilsCrossed",
    niches: ["Restaurants","Bars","Coffee Shops","Cafes","Food Trucks","Caterers","Bakeries","Breweries","Wineries","Nightclubs","Pizza Places","Food Delivery Services"],
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    icon: "Building",
    niches: ["Agents","Brokers","Property Management","Home Inspectors","Mortgage Brokers","Title Companies","Appraisers","Staging Services","Real Estate Lawyers","Commercial Real Estate","Rental Agencies","Flippers"],
  },
  {
    name: "Auto & Repair",
    slug: "auto-repair",
    icon: "Car",
    niches: ["Auto Repair","Detailers","Tire Shops","Body Shops","Dealerships","Towing Services","Windshield Repair","Car Washes","Mechanics","RV Repair","Motorcycle Shops","Transmission Specialists"],
  },
  {
    name: "Professional Services",
    slug: "professional-services",
    icon: "Briefcase",
    niches: ["Accountants","Insurance Agents","Marketing Agencies","Consultants","Financial Advisors","IT Services","Graphic Designers","Photographers","Event Planners","Cleaning Services","Security Companies","HR Services"],
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
export const NAV_INDUSTRIES = INDUSTRIES.map(i => ({ label: i.name, href: `/${i.slug}-seo` }));
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
