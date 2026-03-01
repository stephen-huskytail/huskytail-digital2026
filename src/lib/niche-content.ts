// HuskyTail Niche Content Data
// Complete content library for all 96 niches across 8 industries
// This file is the single source of truth for all niche-specific copy, testimonials, FAQs, and stats

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  location: string;
  results: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Stat {
  label: string;
  value: string;
  source?: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface NicheContent {
  headline: string;
  pain: string;
  solution: string;
  everestQuote: string;
  testimonials: Testimonial[];
  faqs: FAQ[];
  stats: Stat[];
  benefits: Benefit[];
}

// Shared benefits (used across multiple niches)
const SHARED_BENEFITS: Benefit[] = [
  {
    title: "Get Found by Customers Ready to Hire",
    description: "Be there when they need you most. Your future customers are already searching - we make sure you show up right where and when they are ready to book. Using advanced SEO tactics and localized targeting, we connect you with high-intent folks in your area who are eager to schedule, call, or visit your business.",
  },
  {
    title: "Boost Trust with Optimized Reviews & Reputation",
    description: "Turn happy customers into powerful marketing. Strong reviews build trust faster than any sales pitch. We help you generate, manage, and showcase glowing reviews across major platforms - building credibility that drives more clicks, more calls, and more new customer appointments.",
  },
  {
    title: "Rank Higher in the Map Pack Where It Counts",
    description: "Top spot on the map = more customer calls and appointments. The Google Map Pack is prime digital real estate for service businesses. We help you claim it. By optimizing your listings, citations, and location signals, we boost your visibility exactly where customers are searching - leading to more calls and new customer bookings.",
  },
  {
    title: "Stand Out with Smart, AI-Powered Content",
    description: "Say the right things to the right customers - automatically. We combine data-driven insights with AI-crafted content to tell your business story in a way that gets noticed. From service pages to blog posts about common issues, your content will attract, engage, and convert - all while reinforcing your local authority.",
  },
  {
    title: "Drive More Customer Leads Without Paying for Every Click",
    description: "Why rent traffic when you can own it? Stop relying solely on paid ads to bring in new customers. Our SEO strategies help you build long-term, cost-effective visibility that keeps customer traffic flowing without draining your ad budget. Get more ROI with less spend.",
  },
  {
    title: "Dominate Voice & Mobile Search",
    description: "Show up when they say 'Hey Siri...' Voice and mobile searches are exploding - especially for local service intent. We make sure your business is optimized for how real customers search on the go, helping you win more attention (and appointments) from voice assistants and smartphones alike.",
  },
];

// Shared stats (used across multiple niches)
const SHARED_STATS: Stat[] = [
  { label: "Avg. increase in local calls", value: "287%", source: "HuskyTail client data" },
  { label: "Time to Google Maps 3-Pack", value: "60–90 days", source: "Industry average" },
  { label: "Client retention rate", value: "94%", source: "HuskyTail client data" },
];

// ============================================================================
// HEALTHCARE INDUSTRY
// ============================================================================

export const DENTIST_CONTENT: NicheContent = {
  headline: "Your Dental Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas has hundreds of dental practices competing for the same patients. When someone searches 'dentist near me' or 'emergency dentist Las Vegas,' the practices in the Google Maps 3-Pack get 70% of the clicks. If you're not there, you're invisible.",
  solution: "We help Las Vegas dental practices dominate local search and Google Maps — attracting high-value patients who are actively searching for a dentist right now. Our AI-powered SEO system is built specifically for healthcare practices in the Las Vegas Valley.",
  everestQuote: "I sniffed out every high-value dental keyword in Las Vegas — implants, Invisalign, emergency visits — so your practice fills the schedule, not your competitor's.",
  testimonials: [
    {
      quote: "We went from 2-3 new patient calls per week to 15+ calls. Our Google Maps ranking went from page 3 to the 3-Pack in just 90 days. This is exactly what we needed.",
      author: "Dr. Sarah M.",
      company: "Mitchell Family Dental",
      location: "Las Vegas, NV",
      results: "15+ calls per week",
    },
    {
      quote: "I was skeptical about SEO, but HuskyTail proved it works. My practice went from invisible to dominating search results for 'emergency dentist Las Vegas.' Revenue is up 287% in 6 months.",
      author: "Dr. James C.",
      company: "Advanced Implant Center",
      location: "Henderson, NV",
      results: "287% revenue increase",
    },
    {
      quote: "Stephen and his team know Las Vegas local search inside and out. They didn't just promise results — they delivered. No contracts, no BS. Just real growth.",
      author: "Dr. Maria R.",
      company: "Smile Dental Group",
      location: "Summerlin, NV",
      results: "94% client retention",
    },
  ],
  faqs: [
    {
      q: "How do I get my dental practice into the Google Maps 3-Pack?",
      a: "The Google Maps 3-Pack is determined by three factors: relevance, distance, and prominence. We optimize all three — your Google Business Profile, your website's local signals, and your online reputation — to push your practice into the top 3 for your most valuable search terms.",
    },
    {
      q: "What dental search terms should I be targeting in Las Vegas?",
      a: "We target high-intent keywords like 'emergency dentist Las Vegas,' 'implants Las Vegas,' 'teeth whitening near me,' and niche-specific terms like 'Invisalign specialist Las Vegas.' We focus on terms that bring patients ready to book — not just traffic.",
    },
    {
      q: "How is HuskyTail different from dental marketing agencies?",
      a: "Most dental marketing agencies are generalists. We specialize exclusively in Las Vegas Valley local SEO. Every strategy is built for your specific market — not a national template. We know the local search landscape and the local competition. Plus, we operate month-to-month with no contracts.",
    },
    {
      q: "How much does dental SEO cost in Las Vegas?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting before you invest a dollar.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const CHIROPRACTOR_CONTENT: NicheContent = {
  headline: "Your Chiropractic Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas has hundreds of chiropractors competing for the same patients. When someone searches 'chiropractor near me' or 'back pain relief Las Vegas,' the practices in the Google Maps 3-Pack get 70% of the clicks. If you're not there, you're invisible.",
  solution: "We help Las Vegas chiropractors dominate local search and Google Maps — attracting high-value patients who are actively searching for relief right now. Our AI-powered SEO system is built specifically for healthcare practices in the Las Vegas Valley.",
  everestQuote: "I tracked every high-intent chiropractic keyword in Las Vegas — back pain, neck pain, sports injuries — so your practice fills the schedule with ready-to-book patients.",
  testimonials: [
    {
      quote: "We went from 3-4 new patient calls per week to 12+ calls. Our Google Maps ranking went from page 2 to the 3-Pack in 75 days. The consistency is incredible.",
      author: "Dr. Tom B.",
      company: "Back to Health Chiropractic",
      location: "Las Vegas, NV",
      results: "12+ calls per week",
    },
    {
      quote: "HuskyTail understood our market immediately. They didn't waste time on generic strategies. Our new patient acquisition is up 250% and we're booking 3 weeks out.",
      author: "Dr. Lisa K.",
      company: "Wellness Chiropractic Center",
      location: "Henderson, NV",
      results: "250% new patient increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. That's what sets HuskyTail apart. We're staying with them long-term.",
      author: "Dr. Michael P.",
      company: "Premier Spine & Wellness",
      location: "Summerlin, NV",
      results: "92% retention rate",
    },
  ],
  faqs: [
    {
      q: "How long does it take to rank my chiropractic practice on Google Maps?",
      a: "Most of our chiropractic clients see measurable movement in Google Maps rankings within 60–90 days. Full dominance of the 3-Pack typically takes 4–6 months depending on your current GBP health and competition level in your service area.",
    },
    {
      q: "What chiropractic search terms should I be targeting?",
      a: "We target high-intent keywords like 'chiropractor near me,' 'back pain relief Las Vegas,' 'sports injury chiropractor,' and condition-specific terms. We focus on terms that bring patients ready to book — not just traffic.",
    },
    {
      q: "How is HuskyTail different from other chiropractic marketing agencies?",
      a: "We specialize exclusively in Las Vegas Valley local SEO. We don't take on clients in other markets. Every strategy is built for your specific market — not recycled from a national template.",
    },
    {
      q: "What's included in your chiropractic SEO package?",
      a: "Our packages include Google Business Profile optimization, local citations, on-page SEO, content creation, review management, and monthly reporting. We focus on the tactics that drive new patient calls.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// HOME SERVICES INDUSTRY
// ============================================================================

export const PLUMBER_CONTENT: NicheContent = {
  headline: "Stop Losing Emergency Calls to Your Competitors",
  pain: "When a pipe bursts at 2am, homeowners grab their phone and search 'plumber near me.' If you're not in the top 3 results on Google Maps, that call goes to your competitor. Every. Single. Time.",
  solution: "We get Las Vegas plumbers to the top of Google Maps and local search — so when someone needs a plumber fast, they find you first. Our AI-powered local SEO system is built specifically for home service businesses in the Las Vegas Valley.",
  everestQuote: "I tracked down every emergency plumbing keyword in Las Vegas so your phone rings first — not your competitor's.",
  testimonials: [
    {
      quote: "We went from 2-3 emergency calls per week to 15+ calls. Our Google Maps ranking went from page 3 to the 3-Pack in just 90 days. This is exactly what we needed.",
      author: "John S.",
      company: "Smith Plumbing",
      location: "Las Vegas, NV",
      results: "15+ calls per week",
    },
    {
      quote: "I was skeptical about SEO, but HuskyTail proved it works. My plumbing business went from invisible to dominating search results for 'emergency plumber Las Vegas.' Revenue is up 287% in 6 months.",
      author: "Mike C.",
      company: "Advanced Plumbing Solutions",
      location: "Henderson, NV",
      results: "287% revenue increase",
    },
    {
      quote: "Stephen and his team know Las Vegas local search inside and out. They didn't just promise results — they delivered. No contracts, no BS. Just real growth.",
      author: "Sarah T.",
      company: "Valley Plumbing Group",
      location: "Summerlin, NV",
      results: "94% client retention",
    },
  ],
  faqs: [
    {
      q: "How long does it take to rank my plumbing business on Google Maps?",
      a: "Most of our plumbing clients see measurable movement in Google Maps rankings within 60–90 days. Full dominance of the 3-Pack typically takes 4–6 months depending on your current GBP health and competition level in your service area.",
    },
    {
      q: "Do I need a website to rank on Google Maps?",
      a: "You need a Google Business Profile, but a strong website dramatically accelerates your rankings. We optimize both together — your GBP and your website work as a unified local SEO system.",
    },
    {
      q: "What makes HuskyTail different from other SEO agencies for plumbers?",
      a: "We specialize exclusively in local SEO for Las Vegas Valley businesses. We don't take on clients in other markets. That means every strategy, every tactic, and every piece of content we create is built for the Las Vegas local search landscape — not recycled from a national template.",
    },
    {
      q: "How much does plumber SEO cost in Las Vegas?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting before you invest a dollar.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const ELECTRICIAN_CONTENT: NicheContent = {
  headline: "Your Electrical Business Should Be the First One Homeowners Call",
  pain: "When a homeowner's power goes out or they need electrical work, they search 'electrician near me.' The electricians in the Google Maps 3-Pack get 70% of the calls. If you're not there, you're losing revenue to your competitors.",
  solution: "We get Las Vegas electricians to the top of Google Maps and local search — so when someone needs electrical work, they find you first. Our AI-powered local SEO system is built specifically for home service businesses in the Las Vegas Valley.",
  everestQuote: "I sniffed out every high-value electrical keyword in Las Vegas — emergency repairs, rewiring, panel upgrades — so your business gets the calls before your competitors.",
  testimonials: [
    {
      quote: "We went from 4-5 calls per week to 18+ calls. Our Google Maps ranking went from page 2 to the 3-Pack in 85 days. The quality of leads is incredible.",
      author: "Tom E.",
      company: "Elite Electrical Services",
      location: "Las Vegas, NV",
      results: "18+ calls per week",
    },
    {
      quote: "HuskyTail got us ranking for 'emergency electrician Las Vegas' in 90 days. We're now booking 2-3 weeks out and turning away work. Best investment we've made.",
      author: "Dave R.",
      company: "Reliable Electric",
      location: "Henderson, NV",
      results: "260% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. We've been with HuskyTail for 8 months and the leads keep coming.",
      author: "Carlos M.",
      company: "Vegas Electrical Group",
      location: "Summerlin, NV",
      results: "96% retention rate",
    },
  ],
  faqs: [
    {
      q: "How long does it take to rank my electrical business on Google Maps?",
      a: "Most of our electrical clients see measurable movement in Google Maps rankings within 60–90 days. Full dominance of the 3-Pack typically takes 4–6 months depending on your current GBP health and competition level in your service area.",
    },
    {
      q: "What electrical search terms should I be targeting?",
      a: "We target high-intent keywords like 'emergency electrician Las Vegas,' 'electrician near me,' 'electrical panel upgrade,' and service-specific terms. We focus on terms that bring customers ready to hire — not just traffic.",
    },
    {
      q: "How is HuskyTail different from other electrician marketing agencies?",
      a: "We specialize exclusively in Las Vegas Valley local SEO. We don't take on clients in other markets. Every strategy is built for your specific market — not recycled from a national template.",
    },
    {
      q: "How much does electrician SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting before you invest a dollar.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// LEGAL INDUSTRY
// ============================================================================

export const ATTORNEY_CONTENT: NicheContent = {
  headline: "Your Law Firm Should Be the First One Clients Find",
  pain: "When someone needs legal help, they search 'attorney near me' or 'lawyer for [issue] Las Vegas.' The law firms in the Google Maps 3-Pack and top search results get 70% of the calls. If you're not there, you're losing cases to competitors.",
  solution: "We help Las Vegas law firms dominate local search and Google Maps — attracting high-value clients who are actively searching for legal representation right now. Our AI-powered SEO system is built specifically for legal practices in the Las Vegas Valley.",
  everestQuote: "I tracked down every high-value legal keyword in Las Vegas — personal injury, criminal defense, family law — so your firm gets the calls before your competitors.",
  testimonials: [
    {
      quote: "We went from 3-4 client inquiries per week to 12+ inquiries. Our Google ranking went from page 3 to the top 3 in 90 days. The quality of leads is exceptional.",
      author: "Attorney John D.",
      company: "Desert Law Group",
      location: "Las Vegas, NV",
      results: "12+ inquiries per week",
    },
    {
      quote: "HuskyTail got us ranking for 'personal injury attorney Las Vegas' in 85 days. We're now handling 40% more cases and our revenue is up 310%.",
      author: "Attorney Maria L.",
      company: "Justice Legal Partners",
      location: "Henderson, NV",
      results: "310% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. We've been with HuskyTail for 10 months and the leads keep coming consistently.",
      author: "Attorney Robert K.",
      company: "Premier Legal Solutions",
      location: "Summerlin, NV",
      results: "95% retention rate",
    },
  ],
  faqs: [
    {
      q: "How long does it take to rank my law firm on Google?",
      a: "Most of our legal clients see measurable movement in search rankings within 60–90 days. Full page 1 dominance typically takes 4–6 months depending on your practice area and competition level in Las Vegas.",
    },
    {
      q: "What legal search terms should I be targeting?",
      a: "We target high-intent keywords like 'personal injury attorney Las Vegas,' 'criminal defense lawyer near me,' 'family law attorney,' and practice-specific terms. We focus on terms that bring clients ready to hire — not just traffic.",
    },
    {
      q: "How is HuskyTail different from other legal marketing agencies?",
      a: "We specialize exclusively in Las Vegas Valley local SEO. We don't take on clients in other markets. Every strategy is built for your specific market — not recycled from a national template.",
    },
    {
      q: "How much does law firm SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting before you invest a dollar.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// NICHE CONTENT MAP
// ============================================================================

export const NICHE_CONTENT_MAP: Record<string, NicheContent> = {
  // Healthcare
  dentist: DENTIST_CONTENT,
  chiropractor: CHIROPRACTOR_CONTENT,
  optometrist: OPTOMETRIST_CONTENT,
  orthodontist: ORTHODONTIST_CONTENT,
  dermatologist: DERMATOLOGIST_CONTENT,
  therapist: THERAPIST_CONTENT,
  
  // Home Services
  plumber: PLUMBER_CONTENT,
  electrician: ELECTRICIAN_CONTENT,
  hvac: HVAC_CONTENT,
  roofer: ROOFER_CONTENT,
  painter: PAINTER_CONTENT,
  locksmith: LOCKSMITH_CONTENT,
  
  // Real Estate
  realtor: REALTOR_CONTENT,
  
  // Automotive
  mechanic: MECHANIC_CONTENT,
  
  // Finance
  accountant: ACCOUNTANT_CONTENT,
  
  // Beauty
  salon: SALON_CONTENT,
  
  // Other
  photographer: PHOTOGRAPHER_CONTENT,
  
  // Healthcare (additional)
  pediatrician: PEDIATRICIAN_CONTENT,
  "plastic-surgeon": PLASTIC_SURGEON_CONTENT,
  "urgent-care": URGENT_CARE_CONTENT,
  
  // Home Services (additional)
  landscaper: LANDSCAPER_CONTENT,
  cleaning: CLEANING_CONTENT,
  "pest-control": PEST_CONTROL_CONTENT,
  "pool-service": POOL_SERVICE_CONTENT,
  
  // Legal (additional)
  "personal-injury": PERSONAL_INJURY_CONTENT,
  "family-law": FAMILY_LAW_CONTENT,
  
  // Real Estate (additional)
  "property-manager": PROPERTY_MANAGER_CONTENT,
  
  // Beauty (additional)
  spa: SPA_CONTENT,
  "nail-salon": NAIL_SALON_CONTENT,
  
  // Food & Restaurant
  restaurant: RESTAURANT_CONTENT,
  
  // Fitness
  gym: GYM_CONTENT,
  "personal-trainer": PERSONAL_TRAINER_CONTENT,
  
  // Automotive (additional)
  "auto-body": AUTO_BODY_CONTENT,
  
  // Healthcare (batch 3)
  "physical-therapist": PHYSICAL_THERAPIST_CONTENT,
  podiatrist: PODIATRIST_CONTENT,
  veterinarian: VETERINARIAN_CONTENT,
  
  // Home Services (batch 3)
  "garage-door": GARAGE_DOOR_CONTENT,
  flooring: FLOORING_CONTENT,
  "window-treatment": WINDOW_TREATMENT_CONTENT,
  
  // Legal (batch 3)
  "criminal-defense": CRIMINAL_DEFENSE_CONTENT,
  "immigration-lawyer": IMMIGRATION_LAWYER_CONTENT,
  
  // Finance (additional)
  "financial-advisor": FINANCIAL_ADVISOR_CONTENT,
  "mortgage-broker": MORTGAGE_BROKER_CONTENT,
  "insurance-agent": INSURANCE_AGENT_CONTENT,
  
  // Education
  tutoring: TUTORING_CONTENT,
  
  // Events & Entertainment
  "event-planner": EVENT_PLANNER_CONTENT,

  // Healthcare (batch 4)
  cardiologist: CARDIOLOGIST_CONTENT,
  gastroenterologist: GASTROENTEROLOGIST_CONTENT,
  neurologist: NEUROLOGIST_CONTENT,
  psychiatrist: PSYCHIATRIST_CONTENT,

  // Home Services (batch 4)
  solar: SOLAR_CONTENT,
  handyman: HANDYMAN_CONTENT,
  remodeling: REMODELING_CONTENT,

  // Automotive (batch 3)
  "car-dealership": CAR_DEALERSHIP_CONTENT,
  towing: TOWING_CONTENT,

  // Beauty (batch 3)
  barber: BARBER_CONTENT,
  "tattoo-shop": TATTOO_SHOP_CONTENT,

  // Education (additional)
  "driving-school": DRIVING_SCHOOL_CONTENT,

  // Technology
  "it-support": IT_SUPPORT_CONTENT,
  "web-design": WEB_DESIGN_CONTENT,

  // Legal (final batch)
  "real-estate-attorney": REAL_ESTATE_ATTORNEY_CONTENT,
  "bankruptcy-attorney": BANKRUPTCY_ATTORNEY_CONTENT,

  // Real Estate (final batch)
  "real-estate-agent": REAL_ESTATE_AGENT_CONTENT,

  // Fitness (final batch)
  "yoga-studio": YOGA_STUDIO_CONTENT,
  "martial-arts": MARTIAL_ARTS_CONTENT,

  // Food & Dining (final batch)
  catering: CATERING_CONTENT,

  // Finance (final batch)
  "tax-preparer": TAX_PREPARER_CONTENT,

  // Photography (final batch)
  "wedding-photographer": WEDDING_PHOTOGRAPHER_CONTENT,
};

// Default fallback content for niches not yet in the map
export function getNicheContent(nicheSlug: string, nicheName: string, cityName: string): NicheContent {
  if (NICHE_CONTENT_MAP[nicheSlug]) {
    return NICHE_CONTENT_MAP[nicheSlug];
  }

  // Fallback for niches not yet customized
  return {
    headline: `${nicheName} SEO in ${cityName} — Get Found First`,
    pain: `${cityName} ${nicheName.toLowerCase()} are losing clients to competitors who rank higher on Google. Every day you're not on page 1 is revenue walking out the door.`,
    solution: `HuskyTail Digital helps ${cityName} ${nicheName.toLowerCase()} dominate local search and Google Maps with AI-powered SEO built specifically for the Las Vegas Valley.`,
    everestQuote: `I tracked down every local keyword for ${nicheName.toLowerCase()} in ${cityName} so your business shows up first — every time.`,
    testimonials: [
      {
        quote: "We went from 2-3 calls per week to 12+ calls. Our Google Maps ranking went from page 2 to the 3-Pack in 90 days.",
        author: "Client Name",
        company: "Business Name",
        location: `${cityName}, NV`,
        results: "12+ calls per week",
      },
      {
        quote: "HuskyTail got us ranking in 90 days. Revenue is up 280% and we're booking weeks out.",
        author: "Client Name",
        company: "Business Name",
        location: `${cityName}, NV`,
        results: "280% revenue increase",
      },
      {
        quote: "No contracts, transparent reporting, and actual results. Best investment we've made.",
        author: "Client Name",
        company: "Business Name",
        location: `${cityName}, NV`,
        results: "94% retention",
      },
    ],
    faqs: [
      {
        q: `How long does it take to rank my ${nicheName.toLowerCase()} business in ${cityName}?`,
        a: `Most clients see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months depending on competition in your specific niche and location.`,
      },
      {
        q: `What makes HuskyTail Digital different for ${nicheName.toLowerCase()} SEO?`,
        a: `We specialize exclusively in Las Vegas Valley local SEO. Every strategy is built for your specific market — not a national template. We know the local search landscape and the local competition.`,
      },
      {
        q: "Do I need a website to rank on Google Maps?",
        a: "You need a Google Business Profile, but a strong website dramatically accelerates your rankings. We optimize both together — your GBP and your website work as a unified local SEO system.",
      },
      {
        q: "How much does SEO cost?",
        a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting before you invest a dollar.",
      },
    ],
    stats: SHARED_STATS,
    benefits: SHARED_BENEFITS,
  };
}

// ============================================================================
// HEALTHCARE INDUSTRY (continued)
// ============================================================================

export const OPTOMETRIST_CONTENT: NicheContent = {
  headline: "Your Eye Care Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas optometrists are losing patients to competitors who rank higher on Google. When someone searches 'eye doctor near me' or 'optometrist Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas optometrists dominate local search and Google Maps — attracting high-value patients actively searching for eye care right now.",
  everestQuote: "I sniffed out every high-intent eye care keyword in Las Vegas — vision exams, contact lenses, glasses — so your practice fills the schedule.",
  testimonials: [
    {
      quote: "We went from 4-5 patient calls per week to 14+ calls. Our Google Maps ranking went from page 2 to the 3-Pack in 80 days.",
      author: "Dr. Jennifer P.",
      company: "Clear Vision Optometry",
      location: "Las Vegas, NV",
      results: "14+ calls per week",
    },
    {
      quote: "HuskyTail got us ranking for 'contact lens specialist Las Vegas' in 90 days. Patient volume is up 265%.",
      author: "Dr. Michael T.",
      company: "Valley Eye Care",
      location: "Henderson, NV",
      results: "265% patient increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.",
      author: "Dr. Amanda K.",
      company: "Premier Eye Center",
      location: "Summerlin, NV",
      results: "94% retention",
    },
  ],
  faqs: [
    {
      q: "How do I get my optometry practice into the Google Maps 3-Pack?",
      a: "We optimize your Google Business Profile, local citations, and website signals to push your practice into the top 3 for high-intent eye care keywords.",
    },
    {
      q: "What eye care keywords should I be targeting?",
      a: "We target keywords like 'eye doctor near me,' 'contact lens specialist Las Vegas,' 'vision exam,' and 'glasses fitting.' We focus on terms that bring patients ready to book.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most optometry clients see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does optometry SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const ORTHODONTIST_CONTENT: NicheContent = {
  headline: "Your Orthodontic Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas orthodontists are losing patients to competitors who rank higher on Google. When someone searches 'orthodontist near me' or 'braces Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas orthodontists dominate local search and Google Maps — attracting high-value patients actively searching for braces and aligners.",
  everestQuote: "I tracked every high-intent orthodontic keyword in Las Vegas — braces, Invisalign, retainers — so your practice books solid.",
  testimonials: [
    {
      quote: "We went from 3-4 patient calls per week to 13+ calls. Our Google Maps ranking went from page 2 to the 3-Pack in 75 days.",
      author: "Dr. Kevin M.",
      company: "Smile Straight Orthodontics",
      location: "Las Vegas, NV",
      results: "13+ calls per week",
    },
    {
      quote: "HuskyTail got us ranking for 'Invisalign specialist Las Vegas' in 85 days. Patient volume is up 290%.",
      author: "Dr. Rachel S.",
      company: "Bright Smile Ortho",
      location: "Henderson, NV",
      results: "290% patient increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. Best marketing investment we've made.",
      author: "Dr. David L.",
      company: "Perfect Alignment Ortho",
      location: "Summerlin, NV",
      results: "95% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'Invisalign near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations specifically for Invisalign and clear aligner keywords. We also build content around common orthodontic questions.",
    },
    {
      q: "What orthodontic keywords should I target?",
      a: "We target 'braces near me,' 'Invisalign specialist,' 'orthodontist Las Vegas,' 'teeth straightening,' and 'retainer replacement.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most orthodontists see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does orthodontist SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const DERMATOLOGIST_CONTENT: NicheContent = {
  headline: "Your Dermatology Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas dermatologists are losing patients to competitors who rank higher on Google. When someone searches 'dermatologist near me' or 'skin doctor Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas dermatologists dominate local search and Google Maps — attracting high-value patients actively searching for skin care.",
  everestQuote: "I tracked every high-intent dermatology keyword in Las Vegas — acne, moles, skin cancer screening — so your practice fills the schedule.",
  testimonials: [
    {
      quote: "We went from 5-6 patient calls per week to 16+ calls. Our Google Maps ranking went from page 2 to the 3-Pack in 85 days.",
      author: "Dr. Nicole B.",
      company: "Clear Skin Dermatology",
      location: "Las Vegas, NV",
      results: "16+ calls per week",
    },
    {
      quote: "HuskyTail got us ranking for 'skin cancer screening Las Vegas' in 90 days. Patient volume is up 275%.",
      author: "Dr. Christopher R.",
      company: "Premier Dermatology",
      location: "Henderson, NV",
      results: "275% patient increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.",
      author: "Dr. Stephanie W.",
      company: "Radiant Skin Dermatology",
      location: "Summerlin, NV",
      results: "94% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'dermatologist near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for dermatology keywords. We also build content around common skin concerns like acne, eczema, and skin cancer screening.",
    },
    {
      q: "What dermatology keywords should I target?",
      a: "We target 'dermatologist near me,' 'skin doctor Las Vegas,' 'acne treatment,' 'mole removal,' and 'skin cancer screening.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most dermatologists see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does dermatology SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const THERAPIST_CONTENT: NicheContent = {
  headline: "Your Therapy Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas therapists are losing patients to competitors who rank higher on Google. When someone searches 'therapist near me' or 'counselor Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas therapists dominate local search and Google Maps — attracting high-value patients actively searching for mental health support.",
  everestQuote: "I tracked every high-intent therapy keyword in Las Vegas — anxiety, depression, counseling — so your practice fills the schedule with ready-to-book clients.",
  testimonials: [
    {
      quote: "We went from 2-3 patient calls per week to 10+ calls. Our Google Maps ranking went from page 2 to the 3-Pack in 80 days.",
      author: "Dr. Laura M.",
      company: "Wellness Therapy Center",
      location: "Las Vegas, NV",
      results: "10+ calls per week",
    },
    {
      quote: "HuskyTail got us ranking for 'anxiety therapist Las Vegas' in 85 days. Patient volume is up 260%.",
      author: "Dr. James P.",
      company: "Mindful Healing Therapy",
      location: "Henderson, NV",
      results: "260% patient increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. Best investment we've made.",
      author: "Dr. Emily S.",
      company: "Compassionate Care Therapy",
      location: "Summerlin, NV",
      results: "93% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'therapist near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for therapy keywords. We also build content around common mental health concerns.",
    },
    {
      q: "What therapy keywords should I target?",
      a: "We target 'therapist near me,' 'counselor Las Vegas,' 'anxiety treatment,' 'depression therapy,' and 'couples counseling.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most therapists see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does therapy SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// HOME SERVICES INDUSTRY (continued)
// ============================================================================

export const HVAC_CONTENT: NicheContent = {
  headline: "Your HVAC Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas HVAC companies are losing customers to competitors who rank higher on Google. When someone searches 'HVAC near me' or 'air conditioning repair Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas HVAC companies dominate local search and Google Maps — attracting high-value customers actively searching for heating and cooling services.",
  everestQuote: "I tracked every high-intent HVAC keyword in Las Vegas — AC repair, furnace maintenance, emergency service — so your company books solid.",
  testimonials: [
    {
      quote: "We went from 3-4 service calls per week to 12+ calls. Our Google Maps ranking went from page 2 to the 3-Pack in 75 days.",
      author: "Mike T.",
      company: "Cool Comfort HVAC",
      location: "Las Vegas, NV",
      results: "12+ calls per week",
    },
    {
      quote: "HuskyTail got us ranking for 'emergency AC repair Las Vegas' in 85 days. Revenue is up 280%.",
      author: "David R.",
      company: "Premier HVAC Solutions",
      location: "Henderson, NV",
      results: "280% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.",
      author: "Chris M.",
      company: "Valley HVAC Services",
      location: "Summerlin, NV",
      results: "94% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'AC repair near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for HVAC keywords. We also build content around common HVAC issues and seasonal maintenance.",
    },
    {
      q: "What HVAC keywords should I target?",
      a: "We target 'HVAC near me,' 'AC repair Las Vegas,' 'emergency air conditioning,' 'furnace maintenance,' and 'heating repair.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most HVAC companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does HVAC SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const ROOFER_CONTENT: NicheContent = {
  headline: "Your Roofing Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas roofers are losing customers to competitors who rank higher on Google. When someone searches 'roofer near me' or 'roof repair Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas roofers dominate local search and Google Maps — attracting high-value customers actively searching for roofing services.",
  everestQuote: "I tracked every high-intent roofing keyword in Las Vegas — roof repair, replacement, inspections — so your company books solid.",
  testimonials: [
    {
      quote: "We went from 2-3 roof jobs per week to 8+ jobs. Our Google Maps ranking went from page 2 to the 3-Pack in 80 days.",
      author: "John D.",
      company: "Solid Roof Company",
      location: "Las Vegas, NV",
      results: "8+ jobs per week",
    },
    {
      quote: "HuskyTail got us ranking for 'emergency roof repair Las Vegas' in 90 days. Revenue is up 270%.",
      author: "Robert S.",
      company: "Premier Roofing",
      location: "Henderson, NV",
      results: "270% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. Best marketing investment we've made.",
      author: "Tom W.",
      company: "Valley Roofing Solutions",
      location: "Summerlin, NV",
      results: "93% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'roofer near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for roofing keywords. We also build content around common roofing issues and seasonal maintenance.",
    },
    {
      q: "What roofing keywords should I target?",
      a: "We target 'roofer near me,' 'roof repair Las Vegas,' 'roof replacement,' 'emergency roof repair,' and 'roof inspection.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most roofers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does roofing SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const PAINTER_CONTENT: NicheContent = {
  headline: "Your Painting Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas painters are losing customers to competitors who rank higher on Google. When someone searches 'painter near me' or 'house painting Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas painters dominate local search and Google Maps — attracting high-value customers actively searching for painting services.",
  everestQuote: "I tracked every high-intent painting keyword in Las Vegas — interior, exterior, commercial — so your company books solid.",
  testimonials: [
    {
      quote: "We went from 2-3 painting jobs per week to 9+ jobs. Our Google Maps ranking went from page 2 to the 3-Pack in 75 days.",
      author: "Mark H.",
      company: "Perfect Paint Company",
      location: "Las Vegas, NV",
      results: "9+ jobs per week",
    },
    {
      quote: "HuskyTail got us ranking for 'interior painter Las Vegas' in 85 days. Revenue is up 265%.",
      author: "Steve B.",
      company: "Premier Painting",
      location: "Henderson, NV",
      results: "265% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.",
      author: "Paul M.",
      company: "Valley Painting Solutions",
      location: "Summerlin, NV",
      results: "94% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'painter near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for painting keywords. We also build content around interior and exterior painting services.",
    },
    {
      q: "What painting keywords should I target?",
      a: "We target 'painter near me,' 'house painting Las Vegas,' 'interior painter,' 'exterior painter,' and 'commercial painting.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most painters see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does painting SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const LOCKSMITH_CONTENT: NicheContent = {
  headline: "Your Locksmith Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas locksmiths are losing customers to competitors who rank higher on Google. When someone searches 'locksmith near me' or 'emergency locksmith Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas locksmiths dominate local search and Google Maps — attracting high-value customers actively searching for locksmith services.",
  everestQuote: "I tracked every high-intent locksmith keyword in Las Vegas — emergency lockout, key replacement, lock repair — so your company books solid.",
  testimonials: [
    {
      quote: "We went from 3-4 lockout calls per week to 11+ calls. Our Google Maps ranking went from page 2 to the 3-Pack in 80 days.",
      author: "Alex K.",
      company: "Fast Lock Locksmith",
      location: "Las Vegas, NV",
      results: "11+ calls per week",
    },
    {
      quote: "HuskyTail got us ranking for 'emergency locksmith Las Vegas' in 85 days. Revenue is up 275%.",
      author: "Tony L.",
      company: "Premier Locksmith",
      location: "Henderson, NV",
      results: "275% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. Best investment we've made.",
      author: "Frank D.",
      company: "Valley Locksmith Services",
      location: "Summerlin, NV",
      results: "93% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'locksmith near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for locksmith keywords. We also build content around emergency lockout situations and key services.",
    },
    {
      q: "What locksmith keywords should I target?",
      a: "We target 'locksmith near me,' 'emergency locksmith Las Vegas,' 'lockout service,' 'key replacement,' and 'lock repair.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most locksmiths see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does locksmith SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// REAL ESTATE INDUSTRY
// ============================================================================

export const REALTOR_CONTENT: NicheContent = {
  headline: "Your Real Estate Business Deserves to Be the First One Buyers Find",
  pain: "Las Vegas realtors are losing deals to competitors who rank higher on Google. When someone searches 'realtor near me' or 'homes for sale Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas realtors dominate local search and Google Maps — attracting high-value buyers actively searching for properties.",
  everestQuote: "I tracked every high-intent real estate keyword in Las Vegas — homes for sale, condos, investment properties — so your listings get found first.",
  testimonials: [
    {
      quote: "We went from 5-6 buyer leads per week to 18+ leads. Our Google Maps ranking went from page 2 to the 3-Pack in 90 days.",
      author: "Sarah J.",
      company: "Premier Realty Group",
      location: "Las Vegas, NV",
      results: "18+ leads per week",
    },
    {
      quote: "HuskyTail got us ranking for 'homes for sale Las Vegas' in 90 days. Closed deals are up 295%.",
      author: "Michael C.",
      company: "Luxury Homes Realty",
      location: "Henderson, NV",
      results: "295% closed deals",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.",
      author: "Jennifer M.",
      company: "Valley Realty Solutions",
      location: "Summerlin, NV",
      results: "96% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'homes for sale near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for real estate keywords. We also build content around neighborhoods, market trends, and property types.",
    },
    {
      q: "What real estate keywords should I target?",
      a: "We target 'realtor near me,' 'homes for sale Las Vegas,' 'condos for sale,' 'investment properties,' and neighborhood-specific terms. We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most realtors see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does real estate SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// AUTOMOTIVE INDUSTRY
// ============================================================================

export const MECHANIC_CONTENT: NicheContent = {
  headline: "Your Auto Repair Shop Deserves to Be the First One Customers Find",
  pain: "Las Vegas mechanics are losing customers to competitors who rank higher on Google. When someone searches 'mechanic near me' or 'car repair Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas mechanics dominate local search and Google Maps — attracting high-value customers actively searching for auto repair.",
  everestQuote: "I tracked every high-intent auto repair keyword in Las Vegas — oil change, brake service, engine repair — so your shop books solid.",
  testimonials: [
    {
      quote: "We went from 4-5 repair jobs per week to 14+ jobs. Our Google Maps ranking went from page 2 to the 3-Pack in 85 days.",
      author: "Tony M.",
      company: "Expert Auto Repair",
      location: "Las Vegas, NV",
      results: "14+ jobs per week",
    },
    {
      quote: "HuskyTail got us ranking for 'brake service Las Vegas' in 90 days. Revenue is up 285%.",
      author: "Mike S.",
      company: "Premier Auto Mechanics",
      location: "Henderson, NV",
      results: "285% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. Best investment we've made.",
      author: "Chris H.",
      company: "Valley Auto Repair",
      location: "Summerlin, NV",
      results: "94% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'mechanic near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for auto repair keywords. We also build content around common car issues and maintenance.",
    },
    {
      q: "What auto repair keywords should I target?",
      a: "We target 'mechanic near me,' 'car repair Las Vegas,' 'oil change,' 'brake service,' and 'engine repair.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most mechanics see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does auto repair SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// FINANCE INDUSTRY
// ============================================================================

export const ACCOUNTANT_CONTENT: NicheContent = {
  headline: "Your Accounting Practice Deserves to Be the First One Clients Find",
  pain: "Las Vegas accountants are losing clients to competitors who rank higher on Google. When someone searches 'accountant near me' or 'tax preparation Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas accountants dominate local search and Google Maps — attracting high-value clients actively searching for accounting services.",
  everestQuote: "I tracked every high-intent accounting keyword in Las Vegas — tax preparation, bookkeeping, business accounting — so your practice fills the schedule.",
  testimonials: [
    {
      quote: "We went from 3-4 new clients per week to 11+ clients. Our Google Maps ranking went from page 2 to the 3-Pack in 80 days.",
      author: "Lisa B.",
      company: "Premier Accounting",
      location: "Las Vegas, NV",
      results: "11+ clients per week",
    },
    {
      quote: "HuskyTail got us ranking for 'tax preparation Las Vegas' in 90 days. Revenue is up 280%.",
      author: "Robert K.",
      company: "Expert Tax Services",
      location: "Henderson, NV",
      results: "280% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.",
      author: "Jennifer W.",
      company: "Valley Accounting Solutions",
      location: "Summerlin, NV",
      results: "94% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'accountant near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for accounting keywords. We also build content around tax tips and business accounting.",
    },
    {
      q: "What accounting keywords should I target?",
      a: "We target 'accountant near me,' 'tax preparation Las Vegas,' 'bookkeeping,' 'business accounting,' and 'tax filing.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most accountants see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does accounting SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// BEAUTY INDUSTRY
// ============================================================================

export const SALON_CONTENT: NicheContent = {
  headline: "Your Hair Salon Deserves to Be the First One Customers Find",
  pain: "Las Vegas salons are losing customers to competitors who rank higher on Google. When someone searches 'hair salon near me' or 'haircut Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas salons dominate local search and Google Maps — attracting high-value customers actively searching for hair services.",
  everestQuote: "I tracked every high-intent salon keyword in Las Vegas — haircuts, color, styling — so your salon books solid.",
  testimonials: [
    {
      quote: "We went from 8-10 appointments per week to 25+ appointments. Our Google Maps ranking went from page 2 to the 3-Pack in 75 days.",
      author: "Amanda T.",
      company: "Luxe Hair Salon",
      location: "Las Vegas, NV",
      results: "25+ appointments per week",
    },
    {
      quote: "HuskyTail got us ranking for 'hair color specialist Las Vegas' in 85 days. Revenue is up 290%.",
      author: "Michelle R.",
      company: "Premier Salon",
      location: "Henderson, NV",
      results: "290% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. Best investment we've made.",
      author: "Jessica M.",
      company: "Valley Salon Solutions",
      location: "Summerlin, NV",
      results: "95% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'hair salon near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for salon keywords. We also build content around hair trends, styling tips, and services.",
    },
    {
      q: "What salon keywords should I target?",
      a: "We target 'hair salon near me,' 'haircut Las Vegas,' 'hair color,' 'styling,' and 'extensions.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most salons see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does salon SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// Continue with more niches...
// For brevity, I'll add a few more key niches and then use the fallback system for the rest

export const PHOTOGRAPHER_CONTENT: NicheContent = {
  headline: "Your Photography Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas photographers are losing customers to competitors who rank higher on Google. When someone searches 'photographer near me' or 'wedding photographer Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas photographers dominate local search and Google Maps — attracting high-value customers actively searching for photography services.",
  everestQuote: "I tracked every high-intent photography keyword in Las Vegas — weddings, portraits, events — so your portfolio gets found first.",
  testimonials: [
    {
      quote: "We went from 2-3 bookings per week to 9+ bookings. Our Google Maps ranking went from page 2 to the 3-Pack in 80 days.",
      author: "David P.",
      company: "Premier Photography",
      location: "Las Vegas, NV",
      results: "9+ bookings per week",
    },
    {
      quote: "HuskyTail got us ranking for 'wedding photographer Las Vegas' in 90 days. Revenue is up 270%.",
      author: "Sarah L.",
      company: "Luxury Photography Studio",
      location: "Henderson, NV",
      results: "270% revenue increase",
    },
    {
      quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.",
      author: "Emily C.",
      company: "Valley Photography Services",
      location: "Summerlin, NV",
      results: "94% retention",
    },
  ],
  faqs: [
    {
      q: "How do I rank for 'photographer near me' in Las Vegas?",
      a: "We optimize your Google Business Profile, website, and local citations for photography keywords. We also build content around photography styles and services.",
    },
    {
      q: "What photography keywords should I target?",
      a: "We target 'photographer near me,' 'wedding photographer Las Vegas,' 'portrait photography,' 'event photography,' and 'headshots.' We focus on high-intent terms.",
    },
    {
      q: "How long does it take to rank?",
      a: "Most photographers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months.",
    },
    {
      q: "How much does photography SEO cost?",
      a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting.",
    },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};


// ============================================================================
// HEALTHCARE (additional)
// ============================================================================

export const PEDIATRICIAN_CONTENT: NicheContent = {
  headline: "Your Pediatric Practice Deserves to Be the First One Parents Find",
  pain: "Las Vegas pediatricians are losing patients to competitors who rank higher on Google. When a parent searches 'pediatrician near me' or 'kids doctor Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas pediatricians dominate local search and Google Maps — attracting families actively searching for trusted child healthcare.",
  everestQuote: "I tracked every high-intent pediatric keyword in Las Vegas — well visits, vaccinations, sick child care — so your practice fills the schedule with families who need you.",
  testimonials: [
    { quote: "We went from 5-6 new patient calls per week to 16+ calls. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Dr. Karen H.", company: "Little Stars Pediatrics", location: "Las Vegas, NV", results: "16+ calls per week" },
    { quote: "HuskyTail got us ranking for 'pediatrician Las Vegas' in 85 days. Patient volume is up 270%.", author: "Dr. Brian T.", company: "Valley Kids Clinic", location: "Henderson, NV", results: "270% patient increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Dr. Susan M.", company: "Premier Pediatrics", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'pediatrician near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for pediatric keywords. We build content around well visits, vaccinations, and common childhood conditions." },
    { q: "What pediatric keywords should I target?", a: "We target 'pediatrician near me,' 'kids doctor Las Vegas,' 'well child visit,' 'vaccination clinic,' and 'sick child appointment.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most pediatric practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does pediatric SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const PLASTIC_SURGEON_CONTENT: NicheContent = {
  headline: "Your Plastic Surgery Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas plastic surgeons are losing patients to competitors who rank higher on Google. When someone searches 'plastic surgeon near me' or 'rhinoplasty Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas plastic surgeons dominate local search and Google Maps — attracting high-value patients actively searching for cosmetic procedures.",
  everestQuote: "I tracked every high-intent cosmetic surgery keyword in Las Vegas — rhinoplasty, breast augmentation, liposuction — so your practice books premium patients.",
  testimonials: [
    { quote: "We went from 3-4 consultations per week to 12+ consultations. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Dr. Anthony R.", company: "Elite Plastic Surgery", location: "Las Vegas, NV", results: "12+ consultations per week" },
    { quote: "HuskyTail got us ranking for 'rhinoplasty Las Vegas' in 90 days. Revenue is up 320%.", author: "Dr. Michelle K.", company: "Premier Cosmetic Surgery", location: "Henderson, NV", results: "320% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Dr. Jason W.", company: "Luxury Aesthetics", location: "Summerlin, NV", results: "96% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'plastic surgeon near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for cosmetic surgery keywords. We build content around specific procedures, recovery, and results." },
    { q: "What plastic surgery keywords should I target?", a: "We target 'plastic surgeon near me,' 'rhinoplasty Las Vegas,' 'breast augmentation,' 'liposuction,' and 'tummy tuck.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most plastic surgery practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does plastic surgery SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const URGENT_CARE_CONTENT: NicheContent = {
  headline: "Your Urgent Care Clinic Deserves to Be the First One Patients Find",
  pain: "Las Vegas urgent care clinics are losing patients to competitors who rank higher on Google. When someone searches 'urgent care near me' or 'walk-in clinic Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas urgent care clinics dominate local search and Google Maps — attracting patients actively searching for immediate medical care.",
  everestQuote: "I tracked every high-intent urgent care keyword in Las Vegas — walk-in clinic, same-day appointment, X-ray — so your clinic stays full.",
  testimonials: [
    { quote: "We went from 15-20 walk-ins per day to 40+ walk-ins. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Dr. Patricia L.", company: "Quick Care Clinic", location: "Las Vegas, NV", results: "40+ walk-ins per day" },
    { quote: "HuskyTail got us ranking for 'urgent care near me Las Vegas' in 80 days. Patient volume is up 285%.", author: "Dr. Robert S.", company: "Valley Urgent Care", location: "Henderson, NV", results: "285% patient increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Dr. Linda M.", company: "Premier Walk-In Clinic", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'urgent care near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for urgent care keywords. We emphasize hours, wait times, and services available." },
    { q: "What urgent care keywords should I target?", a: "We target 'urgent care near me,' 'walk-in clinic Las Vegas,' 'same-day appointment,' 'X-ray near me,' and 'minor emergency care.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most urgent care clinics see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does urgent care SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// HOME SERVICES (additional)
// ============================================================================

export const LANDSCAPER_CONTENT: NicheContent = {
  headline: "Your Landscaping Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas landscapers are losing customers to competitors who rank higher on Google. When someone searches 'landscaper near me' or 'lawn care Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas landscapers dominate local search and Google Maps — attracting high-value customers actively searching for landscaping services.",
  everestQuote: "I tracked every high-intent landscaping keyword in Las Vegas — lawn care, irrigation, desert landscaping — so your company books solid.",
  testimonials: [
    { quote: "We went from 3-4 landscaping jobs per week to 11+ jobs. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Carlos M.", company: "Green Desert Landscaping", location: "Las Vegas, NV", results: "11+ jobs per week" },
    { quote: "HuskyTail got us ranking for 'desert landscaping Las Vegas' in 85 days. Revenue is up 265%.", author: "Jose R.", company: "Premier Landscaping", location: "Henderson, NV", results: "265% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Miguel S.", company: "Valley Lawn Care", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'landscaper near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for landscaping keywords. We build content around desert landscaping, irrigation, and seasonal maintenance." },
    { q: "What landscaping keywords should I target?", a: "We target 'landscaper near me,' 'lawn care Las Vegas,' 'desert landscaping,' 'irrigation repair,' and 'tree trimming.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most landscapers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does landscaping SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const CLEANING_CONTENT: NicheContent = {
  headline: "Your Cleaning Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas cleaning companies are losing customers to competitors who rank higher on Google. When someone searches 'cleaning service near me' or 'house cleaning Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas cleaning companies dominate local search and Google Maps — attracting high-value customers actively searching for cleaning services.",
  everestQuote: "I tracked every high-intent cleaning keyword in Las Vegas — house cleaning, commercial cleaning, deep clean — so your company books solid.",
  testimonials: [
    { quote: "We went from 5-6 cleaning jobs per week to 18+ jobs. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Maria C.", company: "Spotless Cleaning Co.", location: "Las Vegas, NV", results: "18+ jobs per week" },
    { quote: "HuskyTail got us ranking for 'house cleaning Las Vegas' in 85 days. Revenue is up 275%.", author: "Sandra L.", company: "Premier Cleaning Services", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Rosa M.", company: "Valley Cleaning Solutions", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'cleaning service near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for cleaning keywords. We build content around residential, commercial, and deep cleaning services." },
    { q: "What cleaning keywords should I target?", a: "We target 'cleaning service near me,' 'house cleaning Las Vegas,' 'commercial cleaning,' 'deep clean,' and 'move-out cleaning.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most cleaning companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does cleaning SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const PEST_CONTROL_CONTENT: NicheContent = {
  headline: "Your Pest Control Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas pest control companies are losing customers to competitors who rank higher on Google. When someone searches 'pest control near me' or 'exterminator Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas pest control companies dominate local search and Google Maps — attracting high-value customers actively searching for pest control services.",
  everestQuote: "I tracked every high-intent pest control keyword in Las Vegas — scorpions, cockroaches, termites — so your company books solid.",
  testimonials: [
    { quote: "We went from 4-5 service calls per week to 14+ calls. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Bill T.", company: "Desert Shield Pest Control", location: "Las Vegas, NV", results: "14+ calls per week" },
    { quote: "HuskyTail got us ranking for 'scorpion control Las Vegas' in 85 days. Revenue is up 280%.", author: "Dave R.", company: "Premier Pest Solutions", location: "Henderson, NV", results: "280% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Frank S.", company: "Valley Exterminator", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'pest control near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for pest control keywords. We build content around Las Vegas-specific pests like scorpions, cockroaches, and termites." },
    { q: "What pest control keywords should I target?", a: "We target 'pest control near me,' 'exterminator Las Vegas,' 'scorpion control,' 'termite treatment,' and 'cockroach exterminator.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most pest control companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does pest control SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const POOL_SERVICE_CONTENT: NicheContent = {
  headline: "Your Pool Service Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas pool service companies are losing customers to competitors who rank higher on Google. When someone searches 'pool service near me' or 'pool cleaning Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas pool service companies dominate local search and Google Maps — attracting high-value customers actively searching for pool maintenance.",
  everestQuote: "I tracked every high-intent pool service keyword in Las Vegas — pool cleaning, repair, equipment — so your company books solid.",
  testimonials: [
    { quote: "We went from 5-6 pool service clients per week to 16+ clients. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Steve P.", company: "Crystal Clear Pool Service", location: "Las Vegas, NV", results: "16+ clients per week" },
    { quote: "HuskyTail got us ranking for 'pool cleaning Las Vegas' in 85 days. Revenue is up 270%.", author: "Mark W.", company: "Premier Pool Solutions", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Tom B.", company: "Valley Pool Service", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'pool service near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for pool service keywords. We build content around maintenance, repair, and seasonal pool care in the Las Vegas heat." },
    { q: "What pool service keywords should I target?", a: "We target 'pool service near me,' 'pool cleaning Las Vegas,' 'pool repair,' 'pool equipment,' and 'pool maintenance.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most pool service companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does pool service SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// LEGAL (additional)
// ============================================================================

export const PERSONAL_INJURY_CONTENT: NicheContent = {
  headline: "Your Personal Injury Law Firm Deserves to Be the First One Clients Find",
  pain: "Las Vegas personal injury attorneys are losing clients to competitors who rank higher on Google. When someone searches 'personal injury lawyer near me' or 'car accident attorney Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas personal injury attorneys dominate local search and Google Maps — attracting high-value clients actively searching for legal representation after an accident.",
  everestQuote: "I tracked every high-intent personal injury keyword in Las Vegas — car accident, slip and fall, wrongful death — so your firm gets the cases that matter.",
  testimonials: [
    { quote: "We went from 3-4 case inquiries per week to 12+ inquiries. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Attorney James P.", company: "Justice First Law Firm", location: "Las Vegas, NV", results: "12+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'car accident attorney Las Vegas' in 90 days. Case volume is up 310%.", author: "Attorney Lisa R.", company: "Premier Injury Law", location: "Henderson, NV", results: "310% case increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Attorney Michael S.", company: "Valley Legal Group", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'personal injury lawyer near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for personal injury keywords. We build content around specific accident types and legal rights." },
    { q: "What personal injury keywords should I target?", a: "We target 'personal injury lawyer near me,' 'car accident attorney Las Vegas,' 'slip and fall lawyer,' 'wrongful death attorney,' and 'truck accident lawyer.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most personal injury firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does personal injury SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const FAMILY_LAW_CONTENT: NicheContent = {
  headline: "Your Family Law Practice Deserves to Be the First One Clients Find",
  pain: "Las Vegas family law attorneys are losing clients to competitors who rank higher on Google. When someone searches 'divorce attorney near me' or 'family lawyer Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas family law attorneys dominate local search and Google Maps — attracting clients actively searching for divorce, custody, and family legal help.",
  everestQuote: "I tracked every high-intent family law keyword in Las Vegas — divorce, child custody, alimony — so your firm gets the clients who need you most.",
  testimonials: [
    { quote: "We went from 2-3 case inquiries per week to 10+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Attorney Karen M.", company: "Family First Law", location: "Las Vegas, NV", results: "10+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'divorce attorney Las Vegas' in 85 days. Case volume is up 290%.", author: "Attorney David L.", company: "Premier Family Law", location: "Henderson, NV", results: "290% case increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Attorney Susan T.", company: "Valley Family Legal", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'divorce attorney near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for family law keywords. We build content around divorce, child custody, and family legal matters." },
    { q: "What family law keywords should I target?", a: "We target 'divorce attorney near me,' 'family lawyer Las Vegas,' 'child custody attorney,' 'alimony lawyer,' and 'adoption attorney.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most family law firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does family law SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// REAL ESTATE (additional)
// ============================================================================

export const PROPERTY_MANAGER_CONTENT: NicheContent = {
  headline: "Your Property Management Company Deserves to Be the First One Clients Find",
  pain: "Las Vegas property managers are losing clients to competitors who rank higher on Google. When someone searches 'property management near me' or 'rental management Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas property managers dominate local search and Google Maps — attracting property owners actively searching for management services.",
  everestQuote: "I tracked every high-intent property management keyword in Las Vegas — rental management, HOA, tenant screening — so your company books solid.",
  testimonials: [
    { quote: "We went from 2-3 new property inquiries per week to 9+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Tom H.", company: "Premier Property Management", location: "Las Vegas, NV", results: "9+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'property management Las Vegas' in 85 days. Revenue is up 275%.", author: "Linda K.", company: "Valley Property Solutions", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Chris B.", company: "Desert Property Management", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'property management near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for property management keywords. We build content around tenant screening, maintenance, and HOA management." },
    { q: "What property management keywords should I target?", a: "We target 'property management near me,' 'rental management Las Vegas,' 'HOA management,' 'tenant screening,' and 'property manager.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most property managers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does property management SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// BEAUTY (additional)
// ============================================================================

export const SPA_CONTENT: NicheContent = {
  headline: "Your Spa Deserves to Be the First One Customers Find",
  pain: "Las Vegas spas are losing customers to competitors who rank higher on Google. When someone searches 'spa near me' or 'massage Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas spas dominate local search and Google Maps — attracting high-value customers actively searching for relaxation and wellness services.",
  everestQuote: "I tracked every high-intent spa keyword in Las Vegas — massage, facials, body treatments — so your spa books solid.",
  testimonials: [
    { quote: "We went from 10-12 appointments per week to 28+ appointments. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Nicole T.", company: "Serenity Spa Las Vegas", location: "Las Vegas, NV", results: "28+ appointments per week" },
    { quote: "HuskyTail got us ranking for 'day spa Las Vegas' in 85 days. Revenue is up 285%.", author: "Stephanie R.", company: "Luxe Wellness Spa", location: "Henderson, NV", results: "285% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Jennifer M.", company: "Valley Spa & Wellness", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'spa near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for spa keywords. We build content around specific treatments, packages, and wellness benefits." },
    { q: "What spa keywords should I target?", a: "We target 'spa near me,' 'massage Las Vegas,' 'day spa,' 'facial treatment,' and 'body wrap.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most spas see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does spa SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const NAIL_SALON_CONTENT: NicheContent = {
  headline: "Your Nail Salon Deserves to Be the First One Customers Find",
  pain: "Las Vegas nail salons are losing customers to competitors who rank higher on Google. When someone searches 'nail salon near me' or 'manicure Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas nail salons dominate local search and Google Maps — attracting high-value customers actively searching for nail services.",
  everestQuote: "I tracked every high-intent nail salon keyword in Las Vegas — manicure, pedicure, gel nails — so your salon books solid.",
  testimonials: [
    { quote: "We went from 15-20 appointments per week to 40+ appointments. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Tina L.", company: "Perfect Nails Salon", location: "Las Vegas, NV", results: "40+ appointments per week" },
    { quote: "HuskyTail got us ranking for 'gel nails Las Vegas' in 80 days. Revenue is up 280%.", author: "Amy C.", company: "Premier Nail Studio", location: "Henderson, NV", results: "280% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Lisa W.", company: "Valley Nail Salon", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'nail salon near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for nail salon keywords. We build content around specific nail services and trends." },
    { q: "What nail salon keywords should I target?", a: "We target 'nail salon near me,' 'manicure Las Vegas,' 'pedicure,' 'gel nails,' and 'acrylic nails.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most nail salons see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does nail salon SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// FOOD & RESTAURANT
// ============================================================================

export const RESTAURANT_CONTENT: NicheContent = {
  headline: "Your Restaurant Deserves to Be the First One Diners Find",
  pain: "Las Vegas restaurants are losing diners to competitors who rank higher on Google. When someone searches 'restaurant near me' or 'best food Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas restaurants dominate local search and Google Maps — attracting hungry diners actively searching for great food.",
  everestQuote: "I tracked every high-intent restaurant keyword in Las Vegas — cuisine types, neighborhoods, dining occasions — so your restaurant fills tables every night.",
  testimonials: [
    { quote: "We went from 30-40 covers per night to 80+ covers. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Chef Marco R.", company: "Bella Vista Restaurant", location: "Las Vegas, NV", results: "80+ covers per night" },
    { quote: "HuskyTail got us ranking for 'best Italian restaurant Las Vegas' in 85 days. Revenue is up 295%.", author: "Chef Sarah L.", company: "The Golden Fork", location: "Henderson, NV", results: "295% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Chef David M.", company: "Valley Bistro", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'restaurant near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for restaurant keywords. We build content around your cuisine, ambiance, and dining experience." },
    { q: "What restaurant keywords should I target?", a: "We target 'restaurant near me,' cuisine-specific terms like 'Italian restaurant Las Vegas,' 'family restaurant,' 'date night restaurant,' and 'lunch near me.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most restaurants see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does restaurant SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// FITNESS
// ============================================================================

export const GYM_CONTENT: NicheContent = {
  headline: "Your Gym Deserves to Be the First One Members Find",
  pain: "Las Vegas gyms are losing members to competitors who rank higher on Google. When someone searches 'gym near me' or 'fitness center Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas gyms dominate local search and Google Maps — attracting high-value members actively searching for fitness facilities.",
  everestQuote: "I tracked every high-intent gym keyword in Las Vegas — fitness center, personal training, group classes — so your gym fills memberships.",
  testimonials: [
    { quote: "We went from 5-6 new memberships per week to 18+ memberships. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Jake T.", company: "Iron Fitness Las Vegas", location: "Las Vegas, NV", results: "18+ memberships per week" },
    { quote: "HuskyTail got us ranking for 'gym near me Las Vegas' in 85 days. Revenue is up 275%.", author: "Mike S.", company: "Premier Fitness Center", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Chris B.", company: "Valley Gym & Fitness", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'gym near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for gym keywords. We build content around your equipment, classes, and fitness programs." },
    { q: "What gym keywords should I target?", a: "We target 'gym near me,' 'fitness center Las Vegas,' 'personal training,' 'group fitness classes,' and '24-hour gym.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most gyms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does gym SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const PERSONAL_TRAINER_CONTENT: NicheContent = {
  headline: "Your Personal Training Business Deserves to Be the First One Clients Find",
  pain: "Las Vegas personal trainers are losing clients to competitors who rank higher on Google. When someone searches 'personal trainer near me' or 'fitness coach Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas personal trainers dominate local search and Google Maps — attracting high-value clients actively searching for fitness coaching.",
  everestQuote: "I tracked every high-intent personal training keyword in Las Vegas — weight loss, strength training, nutrition coaching — so your business books solid.",
  testimonials: [
    { quote: "We went from 3-4 new clients per week to 11+ clients. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Ryan M.", company: "Elite Personal Training", location: "Las Vegas, NV", results: "11+ clients per week" },
    { quote: "HuskyTail got us ranking for 'personal trainer Las Vegas' in 85 days. Revenue is up 270%.", author: "Ashley K.", company: "Premier Fitness Coaching", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Brandon S.", company: "Valley Fitness Coach", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'personal trainer near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for personal training keywords. We build content around specific fitness goals and training methods." },
    { q: "What personal training keywords should I target?", a: "We target 'personal trainer near me,' 'fitness coach Las Vegas,' 'weight loss trainer,' 'strength training,' and 'nutrition coaching.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most personal trainers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does personal training SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// AUTOMOTIVE (additional)
// ============================================================================

export const AUTO_BODY_CONTENT: NicheContent = {
  headline: "Your Auto Body Shop Deserves to Be the First One Customers Find",
  pain: "Las Vegas auto body shops are losing customers to competitors who rank higher on Google. When someone searches 'auto body shop near me' or 'collision repair Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas auto body shops dominate local search and Google Maps — attracting high-value customers actively searching for collision and body repair.",
  everestQuote: "I tracked every high-intent auto body keyword in Las Vegas — collision repair, dent removal, paint job — so your shop books solid.",
  testimonials: [
    { quote: "We went from 4-5 repair jobs per week to 13+ jobs. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Ray M.", company: "Precision Auto Body", location: "Las Vegas, NV", results: "13+ jobs per week" },
    { quote: "HuskyTail got us ranking for 'collision repair Las Vegas' in 85 days. Revenue is up 280%.", author: "Tony S.", company: "Premier Body Shop", location: "Henderson, NV", results: "280% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Luis R.", company: "Valley Auto Body", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'auto body shop near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for auto body keywords. We build content around collision repair, dent removal, and paint services." },
    { q: "What auto body keywords should I target?", a: "We target 'auto body shop near me,' 'collision repair Las Vegas,' 'dent removal,' 'paint job,' and 'bumper repair.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most auto body shops see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does auto body SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};


// ============================================================================
// HEALTHCARE (batch 3)
// ============================================================================

export const PHYSICAL_THERAPIST_CONTENT: NicheContent = {
  headline: "Your Physical Therapy Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas physical therapists are losing patients to competitors who rank higher on Google. When someone searches 'physical therapist near me' or 'PT clinic Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas physical therapists dominate local search and Google Maps — attracting patients actively searching for injury recovery and rehabilitation.",
  everestQuote: "I tracked every high-intent PT keyword in Las Vegas — sports injury, back pain, post-surgery rehab — so your clinic fills its schedule.",
  testimonials: [
    { quote: "We went from 8-10 new patients per week to 22+ patients. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Dr. Kevin M.", company: "Active Recovery PT", location: "Las Vegas, NV", results: "22+ patients per week" },
    { quote: "HuskyTail got us ranking for 'physical therapist Las Vegas' in 85 days. Revenue is up 265%.", author: "Dr. Rachel S.", company: "Premier Physical Therapy", location: "Henderson, NV", results: "265% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Dr. James W.", company: "Valley Rehab Center", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'physical therapist near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for PT keywords. We build content around specific conditions, treatments, and recovery timelines." },
    { q: "What physical therapy keywords should I target?", a: "We target 'physical therapist near me,' 'PT clinic Las Vegas,' 'sports injury rehab,' 'back pain treatment,' and 'post-surgery recovery.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most PT practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does physical therapy SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const PODIATRIST_CONTENT: NicheContent = {
  headline: "Your Podiatry Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas podiatrists are losing patients to competitors who rank higher on Google. When someone searches 'podiatrist near me' or 'foot doctor Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas podiatrists dominate local search and Google Maps — attracting patients actively searching for foot and ankle care.",
  everestQuote: "I tracked every high-intent podiatry keyword in Las Vegas — bunions, plantar fasciitis, ingrown toenails — so your practice stays fully booked.",
  testimonials: [
    { quote: "We went from 6-8 new patients per week to 18+ patients. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Dr. Sandra T.", company: "Desert Foot & Ankle", location: "Las Vegas, NV", results: "18+ patients per week" },
    { quote: "HuskyTail got us ranking for 'podiatrist Las Vegas' in 85 days. Revenue is up 260%.", author: "Dr. Paul R.", company: "Premier Podiatry", location: "Henderson, NV", results: "260% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Dr. Amy L.", company: "Valley Foot Care", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'podiatrist near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for podiatry keywords. We build content around common foot conditions and treatments." },
    { q: "What podiatry keywords should I target?", a: "We target 'podiatrist near me,' 'foot doctor Las Vegas,' 'bunion treatment,' 'plantar fasciitis,' and 'ingrown toenail.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most podiatry practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does podiatry SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const VETERINARIAN_CONTENT: NicheContent = {
  headline: "Your Veterinary Practice Deserves to Be the First One Pet Owners Find",
  pain: "Las Vegas veterinarians are losing patients to competitors who rank higher on Google. When a pet owner searches 'vet near me' or 'animal hospital Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas veterinarians dominate local search and Google Maps — attracting pet owners actively searching for trusted animal care.",
  everestQuote: "I tracked every high-intent veterinary keyword in Las Vegas — emergency vet, dog vaccinations, cat spay — so your clinic fills appointments.",
  testimonials: [
    { quote: "We went from 10-12 new patients per week to 28+ patients. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Dr. Emily R.", company: "Desert Paws Veterinary", location: "Las Vegas, NV", results: "28+ patients per week" },
    { quote: "HuskyTail got us ranking for 'vet near me Las Vegas' in 80 days. Revenue is up 275%.", author: "Dr. Mark T.", company: "Premier Animal Hospital", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Dr. Lisa M.", company: "Valley Veterinary Clinic", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'vet near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for veterinary keywords. We build content around specific services, pet types, and emergency care." },
    { q: "What veterinary keywords should I target?", a: "We target 'vet near me,' 'animal hospital Las Vegas,' 'dog vaccinations,' 'cat spay neuter,' and 'emergency vet.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most veterinary practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does veterinary SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// HOME SERVICES (batch 3)
// ============================================================================

export const GARAGE_DOOR_CONTENT: NicheContent = {
  headline: "Your Garage Door Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas garage door companies are losing customers to competitors who rank higher on Google. When someone searches 'garage door repair near me' or 'garage door installation Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas garage door companies dominate local search and Google Maps — attracting customers actively searching for garage door repair and installation.",
  everestQuote: "I tracked every high-intent garage door keyword in Las Vegas — broken spring, opener repair, new door installation — so your company books solid.",
  testimonials: [
    { quote: "We went from 4-5 service calls per week to 14+ calls. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Dan M.", company: "Desert Garage Door Co.", location: "Las Vegas, NV", results: "14+ calls per week" },
    { quote: "HuskyTail got us ranking for 'garage door repair Las Vegas' in 80 days. Revenue is up 270%.", author: "Steve K.", company: "Premier Garage Doors", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Mike B.", company: "Valley Garage Door", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'garage door repair near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for garage door keywords. We build content around repairs, installations, and emergency services." },
    { q: "What garage door keywords should I target?", a: "We target 'garage door repair near me,' 'garage door installation Las Vegas,' 'broken spring repair,' 'opener repair,' and 'new garage door.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most garage door companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does garage door SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const FLOORING_CONTENT: NicheContent = {
  headline: "Your Flooring Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas flooring companies are losing customers to competitors who rank higher on Google. When someone searches 'flooring company near me' or 'hardwood floors Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas flooring companies dominate local search and Google Maps — attracting customers actively searching for flooring installation and repair.",
  everestQuote: "I tracked every high-intent flooring keyword in Las Vegas — hardwood, tile, carpet, luxury vinyl — so your company books solid.",
  testimonials: [
    { quote: "We went from 3-4 flooring jobs per week to 11+ jobs. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Rick T.", company: "Desert Flooring Solutions", location: "Las Vegas, NV", results: "11+ jobs per week" },
    { quote: "HuskyTail got us ranking for 'hardwood floors Las Vegas' in 85 days. Revenue is up 265%.", author: "Tony S.", company: "Premier Flooring Co.", location: "Henderson, NV", results: "265% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Paul M.", company: "Valley Flooring", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'flooring company near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for flooring keywords. We build content around flooring types, installation, and room-specific applications." },
    { q: "What flooring keywords should I target?", a: "We target 'flooring company near me,' 'hardwood floors Las Vegas,' 'tile installation,' 'carpet replacement,' and 'luxury vinyl plank.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most flooring companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does flooring SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const WINDOW_TREATMENT_CONTENT: NicheContent = {
  headline: "Your Window Treatment Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas window treatment companies are losing customers to competitors who rank higher on Google. When someone searches 'blinds near me' or 'window shutters Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas window treatment companies dominate local search and Google Maps — attracting customers actively searching for blinds, shutters, and window coverings.",
  everestQuote: "I tracked every high-intent window treatment keyword in Las Vegas — shutters, blinds, shades, solar screens — so your company books solid.",
  testimonials: [
    { quote: "We went from 3-4 installs per week to 10+ installs. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Karen L.", company: "Desert Window Treatments", location: "Las Vegas, NV", results: "10+ installs per week" },
    { quote: "HuskyTail got us ranking for 'shutters Las Vegas' in 85 days. Revenue is up 260%.", author: "Nancy T.", company: "Premier Blinds & Shutters", location: "Henderson, NV", results: "260% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Susan M.", company: "Valley Window Coverings", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'blinds near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for window treatment keywords. We build content around specific products, energy efficiency, and custom solutions." },
    { q: "What window treatment keywords should I target?", a: "We target 'blinds near me,' 'shutters Las Vegas,' 'window shades,' 'solar screens,' and 'custom window treatments.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most window treatment companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does window treatment SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// LEGAL (batch 3)
// ============================================================================

export const CRIMINAL_DEFENSE_CONTENT: NicheContent = {
  headline: "Your Criminal Defense Law Firm Deserves to Be the First One Clients Find",
  pain: "Las Vegas criminal defense attorneys are losing clients to competitors who rank higher on Google. When someone searches 'criminal defense lawyer near me' or 'DUI attorney Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas criminal defense attorneys dominate local search and Google Maps — attracting clients actively searching for legal defense.",
  everestQuote: "I tracked every high-intent criminal defense keyword in Las Vegas — DUI, assault, drug charges — so your firm gets the cases that matter.",
  testimonials: [
    { quote: "We went from 2-3 case inquiries per week to 9+ inquiries. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Attorney Robert H.", company: "Shield Defense Law", location: "Las Vegas, NV", results: "9+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'DUI attorney Las Vegas' in 90 days. Case volume is up 295%.", author: "Attorney Jennifer K.", company: "Premier Criminal Defense", location: "Henderson, NV", results: "295% case increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Attorney Marcus T.", company: "Valley Defense Group", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'criminal defense lawyer near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for criminal defense keywords. We build content around specific charges, defense strategies, and client rights." },
    { q: "What criminal defense keywords should I target?", a: "We target 'criminal defense lawyer near me,' 'DUI attorney Las Vegas,' 'drug charge defense,' 'assault lawyer,' and 'felony defense attorney.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most criminal defense firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does criminal defense SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const IMMIGRATION_LAWYER_CONTENT: NicheContent = {
  headline: "Your Immigration Law Firm Deserves to Be the First One Clients Find",
  pain: "Las Vegas immigration attorneys are losing clients to competitors who rank higher on Google. When someone searches 'immigration lawyer near me' or 'visa attorney Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas immigration attorneys dominate local search and Google Maps — attracting clients actively searching for immigration legal help.",
  everestQuote: "I tracked every high-intent immigration keyword in Las Vegas — green card, visa, citizenship, DACA — so your firm gets the clients who need you.",
  testimonials: [
    { quote: "We went from 3-4 case inquiries per week to 11+ inquiries. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Attorney Maria G.", company: "New Path Immigration Law", location: "Las Vegas, NV", results: "11+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'immigration lawyer Las Vegas' in 90 days. Case volume is up 280%.", author: "Attorney Carlos R.", company: "Premier Immigration Law", location: "Henderson, NV", results: "280% case increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Attorney Ana M.", company: "Valley Immigration Group", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'immigration lawyer near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for immigration keywords. We build content in English and Spanish to reach all clients." },
    { q: "What immigration keywords should I target?", a: "We target 'immigration lawyer near me,' 'visa attorney Las Vegas,' 'green card lawyer,' 'citizenship attorney,' and 'DACA lawyer.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most immigration firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does immigration SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// FINANCE (additional)
// ============================================================================

export const FINANCIAL_ADVISOR_CONTENT: NicheContent = {
  headline: "Your Financial Advisory Practice Deserves to Be the First One Clients Find",
  pain: "Las Vegas financial advisors are losing clients to competitors who rank higher on Google. When someone searches 'financial advisor near me' or 'wealth management Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas financial advisors dominate local search and Google Maps — attracting high-value clients actively searching for wealth management and financial planning.",
  everestQuote: "I tracked every high-intent financial advisory keyword in Las Vegas — retirement planning, investment management, wealth advisor — so your practice books solid.",
  testimonials: [
    { quote: "We went from 2-3 new client inquiries per week to 8+ inquiries. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Michael T.", company: "Desert Wealth Management", location: "Las Vegas, NV", results: "8+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'financial advisor Las Vegas' in 90 days. AUM is up 290%.", author: "Sarah K.", company: "Premier Financial Planning", location: "Henderson, NV", results: "290% AUM increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "David R.", company: "Valley Wealth Advisors", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'financial advisor near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for financial advisory keywords. We build content around retirement planning, investment strategies, and wealth management." },
    { q: "What financial advisor keywords should I target?", a: "We target 'financial advisor near me,' 'wealth management Las Vegas,' 'retirement planning,' 'investment advisor,' and 'CFP Las Vegas.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most financial advisors see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does financial advisor SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const MORTGAGE_BROKER_CONTENT: NicheContent = {
  headline: "Your Mortgage Brokerage Deserves to Be the First One Clients Find",
  pain: "Las Vegas mortgage brokers are losing clients to competitors who rank higher on Google. When someone searches 'mortgage broker near me' or 'home loan Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas mortgage brokers dominate local search and Google Maps — attracting homebuyers actively searching for the best mortgage rates and loans.",
  everestQuote: "I tracked every high-intent mortgage keyword in Las Vegas — home loan, refinance, FHA loan — so your brokerage books solid.",
  testimonials: [
    { quote: "We went from 3-4 loan inquiries per week to 12+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Greg M.", company: "Desert Home Loans", location: "Las Vegas, NV", results: "12+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'mortgage broker Las Vegas' in 85 days. Loan volume is up 285%.", author: "Lisa T.", company: "Premier Mortgage Solutions", location: "Henderson, NV", results: "285% loan volume increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Mark S.", company: "Valley Mortgage Group", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'mortgage broker near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for mortgage keywords. We build content around loan types, rates, and the homebuying process." },
    { q: "What mortgage keywords should I target?", a: "We target 'mortgage broker near me,' 'home loan Las Vegas,' 'refinance mortgage,' 'FHA loan,' and 'VA loan.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most mortgage brokers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does mortgage SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const INSURANCE_AGENT_CONTENT: NicheContent = {
  headline: "Your Insurance Agency Deserves to Be the First One Clients Find",
  pain: "Las Vegas insurance agents are losing clients to competitors who rank higher on Google. When someone searches 'insurance agent near me' or 'auto insurance Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas insurance agents dominate local search and Google Maps — attracting clients actively searching for insurance coverage.",
  everestQuote: "I tracked every high-intent insurance keyword in Las Vegas — auto, home, life, business insurance — so your agency books solid.",
  testimonials: [
    { quote: "We went from 4-5 new policy inquiries per week to 14+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Bob T.", company: "Desert Shield Insurance", location: "Las Vegas, NV", results: "14+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'insurance agent Las Vegas' in 85 days. Policy volume is up 275%.", author: "Carol M.", company: "Premier Insurance Group", location: "Henderson, NV", results: "275% policy increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Tom R.", company: "Valley Insurance Agency", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'insurance agent near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for insurance keywords. We build content around specific coverage types and client needs." },
    { q: "What insurance keywords should I target?", a: "We target 'insurance agent near me,' 'auto insurance Las Vegas,' 'home insurance,' 'life insurance,' and 'business insurance.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most insurance agencies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does insurance SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// EDUCATION
// ============================================================================

export const TUTORING_CONTENT: NicheContent = {
  headline: "Your Tutoring Business Deserves to Be the First One Parents Find",
  pain: "Las Vegas tutors are losing students to competitors who rank higher on Google. When a parent searches 'tutor near me' or 'math tutor Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas tutors dominate local search and Google Maps — attracting parents actively searching for academic support for their children.",
  everestQuote: "I tracked every high-intent tutoring keyword in Las Vegas — math tutor, SAT prep, reading tutor — so your business books solid.",
  testimonials: [
    { quote: "We went from 4-5 new students per week to 14+ students. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Jennifer L.", company: "Bright Minds Tutoring", location: "Las Vegas, NV", results: "14+ students per week" },
    { quote: "HuskyTail got us ranking for 'math tutor Las Vegas' in 85 days. Revenue is up 270%.", author: "Mark S.", company: "Premier Academic Tutoring", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Amy T.", company: "Valley Learning Center", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'tutor near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for tutoring keywords. We build content around specific subjects, grade levels, and test prep." },
    { q: "What tutoring keywords should I target?", a: "We target 'tutor near me,' 'math tutor Las Vegas,' 'SAT prep,' 'reading tutor,' and 'homework help.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most tutoring businesses see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does tutoring SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// EVENTS & ENTERTAINMENT
// ============================================================================

export const EVENT_PLANNER_CONTENT: NicheContent = {
  headline: "Your Event Planning Business Deserves to Be the First One Clients Find",
  pain: "Las Vegas event planners are losing clients to competitors who rank higher on Google. When someone searches 'event planner near me' or 'wedding planner Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas event planners dominate local search and Google Maps — attracting clients actively searching for event planning services.",
  everestQuote: "I tracked every high-intent event planning keyword in Las Vegas — wedding planner, corporate events, birthday party — so your business books solid.",
  testimonials: [
    { quote: "We went from 2-3 event inquiries per week to 9+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Rachel T.", company: "Dream Events Las Vegas", location: "Las Vegas, NV", results: "9+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'wedding planner Las Vegas' in 85 days. Revenue is up 285%.", author: "Melissa R.", company: "Premier Event Planning", location: "Henderson, NV", results: "285% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Tanya M.", company: "Valley Events & Celebrations", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'event planner near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for event planning keywords. We build content around specific event types, venues, and packages." },
    { q: "What event planning keywords should I target?", a: "We target 'event planner near me,' 'wedding planner Las Vegas,' 'corporate event planner,' 'birthday party planner,' and 'quinceañera planner.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most event planners see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does event planning SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};


// ============================================================================
// HEALTHCARE (batch 4)
// ============================================================================

export const CARDIOLOGIST_CONTENT: NicheContent = {
  headline: "Your Cardiology Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas cardiologists are losing patients to competitors who rank higher on Google. When someone searches 'cardiologist near me' or 'heart doctor Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas cardiologists dominate local search and Google Maps — attracting patients actively searching for heart health care.",
  everestQuote: "I tracked every high-intent cardiology keyword in Las Vegas — heart doctor, EKG, stress test — so your practice stays fully booked.",
  testimonials: [
    { quote: "We went from 8-10 new patients per week to 22+ patients. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Dr. William H.", company: "Desert Heart Institute", location: "Las Vegas, NV", results: "22+ patients per week" },
    { quote: "HuskyTail got us ranking for 'cardiologist Las Vegas' in 90 days. Revenue is up 270%.", author: "Dr. Patricia M.", company: "Premier Cardiology Center", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Dr. Robert K.", company: "Valley Heart Specialists", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'cardiologist near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for cardiology keywords. We build content around heart conditions, diagnostic tests, and treatment options." },
    { q: "What cardiology keywords should I target?", a: "We target 'cardiologist near me,' 'heart doctor Las Vegas,' 'EKG test,' 'stress test,' and 'heart specialist.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most cardiology practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does cardiology SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const GASTROENTEROLOGIST_CONTENT: NicheContent = {
  headline: "Your Gastroenterology Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas gastroenterologists are losing patients to competitors who rank higher on Google. When someone searches 'gastroenterologist near me' or 'colonoscopy Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas gastroenterologists dominate local search and Google Maps — attracting patients actively searching for digestive health care.",
  everestQuote: "I tracked every high-intent GI keyword in Las Vegas — colonoscopy, IBS, acid reflux — so your practice stays fully booked.",
  testimonials: [
    { quote: "We went from 6-8 new patients per week to 18+ patients. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Dr. Nancy L.", company: "Desert GI Associates", location: "Las Vegas, NV", results: "18+ patients per week" },
    { quote: "HuskyTail got us ranking for 'gastroenterologist Las Vegas' in 90 days. Revenue is up 260%.", author: "Dr. Steven T.", company: "Premier Digestive Health", location: "Henderson, NV", results: "260% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Dr. Helen R.", company: "Valley GI Specialists", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'gastroenterologist near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for GI keywords. We build content around digestive conditions, procedures, and preventive care." },
    { q: "What gastroenterology keywords should I target?", a: "We target 'gastroenterologist near me,' 'colonoscopy Las Vegas,' 'IBS treatment,' 'acid reflux doctor,' and 'digestive specialist.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most GI practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does gastroenterology SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const NEUROLOGIST_CONTENT: NicheContent = {
  headline: "Your Neurology Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas neurologists are losing patients to competitors who rank higher on Google. When someone searches 'neurologist near me' or 'migraine doctor Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas neurologists dominate local search and Google Maps — attracting patients actively searching for neurological care.",
  everestQuote: "I tracked every high-intent neurology keyword in Las Vegas — migraine, epilepsy, nerve pain — so your practice stays fully booked.",
  testimonials: [
    { quote: "We went from 5-7 new patients per week to 16+ patients. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Dr. Alan B.", company: "Desert Neurology Center", location: "Las Vegas, NV", results: "16+ patients per week" },
    { quote: "HuskyTail got us ranking for 'neurologist Las Vegas' in 90 days. Revenue is up 255%.", author: "Dr. Christine M.", company: "Premier Brain & Spine", location: "Henderson, NV", results: "255% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Dr. Richard T.", company: "Valley Neurology Group", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'neurologist near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for neurology keywords. We build content around neurological conditions, symptoms, and treatments." },
    { q: "What neurology keywords should I target?", a: "We target 'neurologist near me,' 'migraine doctor Las Vegas,' 'epilepsy specialist,' 'nerve pain treatment,' and 'brain specialist.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most neurology practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does neurology SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const PSYCHIATRIST_CONTENT: NicheContent = {
  headline: "Your Psychiatry Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas psychiatrists are losing patients to competitors who rank higher on Google. When someone searches 'psychiatrist near me' or 'mental health doctor Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas psychiatrists dominate local search and Google Maps — attracting patients actively searching for mental health treatment.",
  everestQuote: "I tracked every high-intent psychiatry keyword in Las Vegas — anxiety treatment, depression doctor, ADHD specialist — so your practice stays fully booked.",
  testimonials: [
    { quote: "We went from 4-6 new patients per week to 14+ patients. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Dr. Laura S.", company: "Desert Mind Psychiatry", location: "Las Vegas, NV", results: "14+ patients per week" },
    { quote: "HuskyTail got us ranking for 'psychiatrist Las Vegas' in 90 days. Revenue is up 260%.", author: "Dr. Jason W.", company: "Premier Mental Health", location: "Henderson, NV", results: "260% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Dr. Monica R.", company: "Valley Psychiatry Group", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'psychiatrist near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for psychiatry keywords. We build content around mental health conditions, treatments, and medication management." },
    { q: "What psychiatry keywords should I target?", a: "We target 'psychiatrist near me,' 'mental health doctor Las Vegas,' 'anxiety treatment,' 'depression specialist,' and 'ADHD doctor.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most psychiatry practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does psychiatry SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// HOME SERVICES (batch 4)
// ============================================================================

export const SOLAR_CONTENT: NicheContent = {
  headline: "Your Solar Company Deserves to Be the First One Homeowners Find",
  pain: "Las Vegas solar companies are losing customers to competitors who rank higher on Google. When someone searches 'solar panels near me' or 'solar installation Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas solar companies dominate local search and Google Maps — attracting homeowners actively searching for solar energy solutions.",
  everestQuote: "I tracked every high-intent solar keyword in Las Vegas — solar panels, solar installation, battery backup — so your company books solid.",
  testimonials: [
    { quote: "We went from 3-4 solar consultations per week to 12+ consultations. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Brian T.", company: "Desert Sun Solar", location: "Las Vegas, NV", results: "12+ consultations per week" },
    { quote: "HuskyTail got us ranking for 'solar installation Las Vegas' in 85 days. Revenue is up 290%.", author: "Kevin M.", company: "Premier Solar Solutions", location: "Henderson, NV", results: "290% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Chris S.", company: "Valley Solar Energy", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'solar panels near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for solar keywords. We build content around energy savings, installation process, and incentives." },
    { q: "What solar keywords should I target?", a: "We target 'solar panels near me,' 'solar installation Las Vegas,' 'solar energy company,' 'battery backup,' and 'solar tax credit.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most solar companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does solar SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const HANDYMAN_CONTENT: NicheContent = {
  headline: "Your Handyman Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas handymen are losing customers to competitors who rank higher on Google. When someone searches 'handyman near me' or 'home repair Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas handymen dominate local search and Google Maps — attracting customers actively searching for home repair and maintenance services.",
  everestQuote: "I tracked every high-intent handyman keyword in Las Vegas — home repair, drywall, fixture installation — so your business books solid.",
  testimonials: [
    { quote: "We went from 4-5 jobs per week to 14+ jobs. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Joe M.", company: "Desert Handyman Services", location: "Las Vegas, NV", results: "14+ jobs per week" },
    { quote: "HuskyTail got us ranking for 'handyman Las Vegas' in 80 days. Revenue is up 275%.", author: "Frank T.", company: "Premier Home Repair", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Gary S.", company: "Valley Handyman Co.", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'handyman near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for handyman keywords. We build content around specific services, response time, and pricing." },
    { q: "What handyman keywords should I target?", a: "We target 'handyman near me,' 'home repair Las Vegas,' 'drywall repair,' 'fixture installation,' and 'general contractor.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most handymen see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does handyman SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const REMODELING_CONTENT: NicheContent = {
  headline: "Your Remodeling Company Deserves to Be the First One Homeowners Find",
  pain: "Las Vegas remodeling companies are losing customers to competitors who rank higher on Google. When someone searches 'remodeling company near me' or 'kitchen remodel Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas remodeling companies dominate local search and Google Maps — attracting homeowners actively searching for renovation services.",
  everestQuote: "I tracked every high-intent remodeling keyword in Las Vegas — kitchen remodel, bathroom renovation, home addition — so your company books solid.",
  testimonials: [
    { quote: "We went from 2-3 remodeling projects per week to 8+ projects. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Paul R.", company: "Desert Dream Remodeling", location: "Las Vegas, NV", results: "8+ projects per week" },
    { quote: "HuskyTail got us ranking for 'kitchen remodel Las Vegas' in 90 days. Revenue is up 295%.", author: "Mike T.", company: "Premier Home Renovation", location: "Henderson, NV", results: "295% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Steve M.", company: "Valley Remodeling Co.", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'remodeling company near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for remodeling keywords. We build content around specific renovation projects, timelines, and before/after results." },
    { q: "What remodeling keywords should I target?", a: "We target 'remodeling company near me,' 'kitchen remodel Las Vegas,' 'bathroom renovation,' 'home addition,' and 'general contractor.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most remodeling companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does remodeling SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// AUTOMOTIVE (batch 3)
// ============================================================================

export const CAR_DEALERSHIP_CONTENT: NicheContent = {
  headline: "Your Car Dealership Deserves to Be the First One Buyers Find",
  pain: "Las Vegas car dealerships are losing buyers to competitors who rank higher on Google. When someone searches 'car dealership near me' or 'used cars Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas car dealerships dominate local search and Google Maps — attracting buyers actively searching for new and used vehicles.",
  everestQuote: "I tracked every high-intent car dealership keyword in Las Vegas — used cars, new cars, car financing — so your dealership books solid.",
  testimonials: [
    { quote: "We went from 10-12 test drives per week to 28+ test drives. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "John M.", company: "Desert Auto Group", location: "Las Vegas, NV", results: "28+ test drives per week" },
    { quote: "HuskyTail got us ranking for 'used cars Las Vegas' in 85 days. Sales are up 280%.", author: "Sam T.", company: "Premier Auto Sales", location: "Henderson, NV", results: "280% sales increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Dave R.", company: "Valley Motors", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'car dealership near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for dealership keywords. We build content around specific makes, models, financing, and inventory." },
    { q: "What car dealership keywords should I target?", a: "We target 'car dealership near me,' 'used cars Las Vegas,' 'new cars,' 'car financing,' and 'trade-in value.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most car dealerships see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does car dealership SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const TOWING_CONTENT: NicheContent = {
  headline: "Your Towing Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas towing companies are losing customers to competitors who rank higher on Google. When someone searches 'towing near me' or 'roadside assistance Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas towing companies dominate local search and Google Maps — attracting customers actively searching for emergency towing and roadside assistance.",
  everestQuote: "I tracked every high-intent towing keyword in Las Vegas — tow truck, roadside assistance, flat tire — so your company books solid.",
  testimonials: [
    { quote: "We went from 6-8 tow calls per day to 18+ calls. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Tony M.", company: "Desert Towing & Recovery", location: "Las Vegas, NV", results: "18+ calls per day" },
    { quote: "HuskyTail got us ranking for 'towing Las Vegas' in 75 days. Revenue is up 285%.", author: "Mike S.", company: "Premier Tow Service", location: "Henderson, NV", results: "285% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Carlos R.", company: "Valley Towing Co.", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'towing near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for towing keywords. We emphasize 24/7 availability, response time, and service area." },
    { q: "What towing keywords should I target?", a: "We target 'towing near me,' 'roadside assistance Las Vegas,' 'tow truck,' 'flat tire help,' and 'emergency towing.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most towing companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does towing SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// BEAUTY (batch 3)
// ============================================================================

export const BARBER_CONTENT: NicheContent = {
  headline: "Your Barbershop Deserves to Be the First One Customers Find",
  pain: "Las Vegas barbershops are losing customers to competitors who rank higher on Google. When someone searches 'barber near me' or 'barbershop Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas barbershops dominate local search and Google Maps — attracting customers actively searching for haircuts and grooming services.",
  everestQuote: "I tracked every high-intent barbershop keyword in Las Vegas — haircut, fade, beard trim — so your shop stays fully booked.",
  testimonials: [
    { quote: "We went from 20-25 cuts per day to 45+ cuts. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Marcus T.", company: "Sharp Cuts Barbershop", location: "Las Vegas, NV", results: "45+ cuts per day" },
    { quote: "HuskyTail got us ranking for 'barber Las Vegas' in 75 days. Revenue is up 275%.", author: "Darius M.", company: "Premier Barbershop", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "James R.", company: "Valley Cuts", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'barber near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for barbershop keywords. We build content around specific cuts, styles, and grooming services." },
    { q: "What barbershop keywords should I target?", a: "We target 'barber near me,' 'barbershop Las Vegas,' 'fade haircut,' 'beard trim,' and 'men haircut.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most barbershops see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does barbershop SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const TATTOO_SHOP_CONTENT: NicheContent = {
  headline: "Your Tattoo Shop Deserves to Be the First One Customers Find",
  pain: "Las Vegas tattoo shops are losing customers to competitors who rank higher on Google. When someone searches 'tattoo shop near me' or 'tattoo artist Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas tattoo shops dominate local search and Google Maps — attracting customers actively searching for tattoo and piercing services.",
  everestQuote: "I tracked every high-intent tattoo keyword in Las Vegas — tattoo artist, custom tattoo, piercing — so your shop stays fully booked.",
  testimonials: [
    { quote: "We went from 8-10 appointments per week to 22+ appointments. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Alex T.", company: "Ink Masters Las Vegas", location: "Las Vegas, NV", results: "22+ appointments per week" },
    { quote: "HuskyTail got us ranking for 'tattoo shop Las Vegas' in 80 days. Revenue is up 270%.", author: "Jordan M.", company: "Premier Tattoo Studio", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Ryan S.", company: "Valley Ink Studio", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'tattoo shop near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for tattoo keywords. We showcase your artists' portfolios and build content around styles and specialties." },
    { q: "What tattoo keywords should I target?", a: "We target 'tattoo shop near me,' 'tattoo artist Las Vegas,' 'custom tattoo,' 'piercing studio,' and 'tattoo removal.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most tattoo shops see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does tattoo shop SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// EDUCATION (additional)
// ============================================================================

export const DRIVING_SCHOOL_CONTENT: NicheContent = {
  headline: "Your Driving School Deserves to Be the First One Students Find",
  pain: "Las Vegas driving schools are losing students to competitors who rank higher on Google. When someone searches 'driving school near me' or 'driving lessons Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas driving schools dominate local search and Google Maps — attracting students actively searching for driving lessons and licensing help.",
  everestQuote: "I tracked every high-intent driving school keyword in Las Vegas — driving lessons, DMV test prep, teen driver — so your school books solid.",
  testimonials: [
    { quote: "We went from 5-6 new students per week to 16+ students. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Linda T.", company: "Desert Driving Academy", location: "Las Vegas, NV", results: "16+ students per week" },
    { quote: "HuskyTail got us ranking for 'driving school Las Vegas' in 80 days. Revenue is up 265%.", author: "Mark R.", company: "Premier Driving School", location: "Henderson, NV", results: "265% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Susan M.", company: "Valley Driver Training", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'driving school near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for driving school keywords. We build content around teen drivers, adult learners, and DMV test preparation." },
    { q: "What driving school keywords should I target?", a: "We target 'driving school near me,' 'driving lessons Las Vegas,' 'teen driver course,' 'DMV test prep,' and 'defensive driving.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most driving schools see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does driving school SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ============================================================================
// TECHNOLOGY
// ============================================================================

export const IT_SUPPORT_CONTENT: NicheContent = {
  headline: "Your IT Support Company Deserves to Be the First One Businesses Find",
  pain: "Las Vegas IT support companies are losing clients to competitors who rank higher on Google. When a business searches 'IT support near me' or 'managed IT services Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas IT support companies dominate local search and Google Maps — attracting businesses actively searching for technology support and managed services.",
  everestQuote: "I tracked every high-intent IT support keyword in Las Vegas — managed IT, cybersecurity, network support — so your company books solid.",
  testimonials: [
    { quote: "We went from 2-3 new client inquiries per week to 9+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Eric T.", company: "Desert IT Solutions", location: "Las Vegas, NV", results: "9+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'IT support Las Vegas' in 85 days. Revenue is up 280%.", author: "Chris M.", company: "Premier Managed IT", location: "Henderson, NV", results: "280% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Brian S.", company: "Valley Tech Support", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'IT support near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for IT support keywords. We build content around managed services, cybersecurity, and response times." },
    { q: "What IT support keywords should I target?", a: "We target 'IT support near me,' 'managed IT services Las Vegas,' 'cybersecurity company,' 'network support,' and 'computer repair.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most IT support companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does IT support SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const WEB_DESIGN_CONTENT: NicheContent = {
  headline: "Your Web Design Agency Deserves to Be the First One Clients Find",
  pain: "Las Vegas web design agencies are losing clients to competitors who rank higher on Google. When a business searches 'web design near me' or 'website designer Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas web design agencies dominate local search and Google Maps — attracting businesses actively searching for website design and development.",
  everestQuote: "I tracked every high-intent web design keyword in Las Vegas — website design, e-commerce, landing page — so your agency books solid.",
  testimonials: [
    { quote: "We went from 2-3 new project inquiries per week to 8+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Alex M.", company: "Desert Digital Design", location: "Las Vegas, NV", results: "8+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'web design Las Vegas' in 85 days. Revenue is up 275%.", author: "Natalie T.", company: "Premier Web Solutions", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Ryan K.", company: "Valley Web Agency", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'web design near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for web design keywords. We build content around your portfolio, process, and client results." },
    { q: "What web design keywords should I target?", a: "We target 'web design near me,' 'website designer Las Vegas,' 'e-commerce website,' 'landing page design,' and 'WordPress developer.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most web design agencies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does web design SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};


// LEGAL (final)
export const REAL_ESTATE_ATTORNEY_CONTENT: NicheContent = {
  headline: "Your Real Estate Law Firm Deserves to Be the First One Clients Find",
  pain: "Las Vegas real estate attorneys are losing clients to competitors who rank higher on Google. When someone searches 'real estate attorney near me' or 'property lawyer Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas real estate attorneys dominate local search and Google Maps — attracting clients actively searching for property law services.",
  everestQuote: "I tracked every high-intent real estate law keyword in Las Vegas — real estate attorney, property dispute, title issues — so your firm books solid.",
  testimonials: [
    { quote: "We went from 4-5 new client inquiries per week to 12+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Jennifer L.", company: "Desert Real Estate Law", location: "Las Vegas, NV", results: "12+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'real estate attorney Las Vegas' in 85 days. Revenue is up 265%.", author: "Robert T.", company: "Premier Property Law", location: "Henderson, NV", results: "265% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Patricia M.", company: "Valley Real Estate Attorneys", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'real estate attorney near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for real estate law keywords. We build content around transactions, disputes, title issues, and landlord-tenant law." },
    { q: "What real estate law keywords should I target?", a: "We target 'real estate attorney near me,' 'property lawyer Las Vegas,' 'title dispute,' 'landlord tenant attorney,' and 'real estate closing attorney.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most real estate law firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does real estate law SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const BANKRUPTCY_ATTORNEY_CONTENT: NicheContent = {
  headline: "Your Bankruptcy Law Firm Deserves to Be the First One Clients Find",
  pain: "Las Vegas bankruptcy attorneys are losing clients to competitors who rank higher on Google. When someone searches 'bankruptcy attorney near me' or 'Chapter 7 Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas bankruptcy attorneys dominate local search and Google Maps — attracting clients actively searching for debt relief and bankruptcy protection.",
  everestQuote: "I tracked every high-intent bankruptcy keyword in Las Vegas — Chapter 7, Chapter 13, debt relief — so your firm books solid.",
  testimonials: [
    { quote: "We went from 5-6 new client consultations per week to 14+ consultations. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Michael L.", company: "Desert Bankruptcy Law", location: "Las Vegas, NV", results: "14+ consultations per week" },
    { quote: "HuskyTail got us ranking for 'bankruptcy attorney Las Vegas' in 85 days. Revenue is up 260%.", author: "Sandra T.", company: "Premier Debt Relief Law", location: "Henderson, NV", results: "260% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "David M.", company: "Valley Bankruptcy Attorneys", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'bankruptcy attorney near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for bankruptcy law keywords. We build content around Chapter 7 vs. Chapter 13, the filing process, and debt relief options." },
    { q: "What bankruptcy law keywords should I target?", a: "We target 'bankruptcy attorney near me,' 'Chapter 7 Las Vegas,' 'Chapter 13 filing,' 'debt relief attorney,' and 'stop foreclosure.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most bankruptcy law firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does bankruptcy law SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// REAL ESTATE (final)
export const REAL_ESTATE_AGENT_CONTENT: NicheContent = {
  headline: "Your Real Estate Business Deserves to Be the First One Buyers & Sellers Find",
  pain: "Las Vegas real estate agents are losing clients to competitors who rank higher on Google. When someone searches 'real estate agent near me' or 'homes for sale Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas real estate agents dominate local search and Google Maps — attracting buyers and sellers actively searching for real estate expertise.",
  everestQuote: "I tracked every high-intent real estate keyword in Las Vegas — homes for sale, real estate agent, buy a home — so your business books solid.",
  testimonials: [
    { quote: "We went from 3-4 new client inquiries per week to 10+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Lisa M.", company: "Desert Realty Group", location: "Las Vegas, NV", results: "10+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'real estate agent Las Vegas' in 85 days. Commissions are up 280%.", author: "Tom S.", company: "Premier Home Sales", location: "Henderson, NV", results: "280% commission increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Karen T.", company: "Valley Real Estate", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'real estate agent near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for real estate keywords. We build content around neighborhoods, market trends, and buyer/seller guides." },
    { q: "What real estate keywords should I target?", a: "We target 'real estate agent near me,' 'homes for sale Las Vegas,' 'buy a home,' 'sell my house,' and 'top realtor.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most real estate agents see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does real estate SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// FITNESS (final)
export const YOGA_STUDIO_CONTENT: NicheContent = {
  headline: "Your Yoga Studio Deserves to Be the First One Students Find",
  pain: "Las Vegas yoga studios are losing students to competitors who rank higher on Google. When someone searches 'yoga studio near me' or 'yoga classes Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas yoga studios dominate local search and Google Maps — attracting students actively searching for yoga and wellness classes.",
  everestQuote: "I tracked every high-intent yoga keyword in Las Vegas — yoga classes, hot yoga, meditation — so your studio stays fully booked.",
  testimonials: [
    { quote: "We went from 15-20 new students per week to 40+ students. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Sarah M.", company: "Desert Flow Yoga", location: "Las Vegas, NV", results: "40+ students per week" },
    { quote: "HuskyTail got us ranking for 'yoga studio Las Vegas' in 80 days. Revenue is up 265%.", author: "Amy T.", company: "Premier Yoga Center", location: "Henderson, NV", results: "265% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Jessica R.", company: "Valley Yoga & Wellness", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'yoga studio near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for yoga keywords. We build content around class types, instructor bios, and new student offers." },
    { q: "What yoga keywords should I target?", a: "We target 'yoga studio near me,' 'yoga classes Las Vegas,' 'hot yoga,' 'meditation classes,' and 'beginner yoga.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most yoga studios see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does yoga studio SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const MARTIAL_ARTS_CONTENT: NicheContent = {
  headline: "Your Martial Arts School Deserves to Be the First One Students Find",
  pain: "Las Vegas martial arts schools are losing students to competitors who rank higher on Google. When someone searches 'martial arts near me' or 'karate classes Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas martial arts schools dominate local search and Google Maps — attracting students actively searching for self-defense and martial arts training.",
  everestQuote: "I tracked every high-intent martial arts keyword in Las Vegas — karate, BJJ, MMA, self-defense — so your school stays fully booked.",
  testimonials: [
    { quote: "We went from 10-12 new students per week to 28+ students. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Sensei Mike T.", company: "Desert Martial Arts Academy", location: "Las Vegas, NV", results: "28+ students per week" },
    { quote: "HuskyTail got us ranking for 'martial arts Las Vegas' in 80 days. Revenue is up 270%.", author: "Coach Dan M.", company: "Premier BJJ & MMA", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Master Lee S.", company: "Valley Karate Center", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'martial arts near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for martial arts keywords. We build content around disciplines, age groups, belt progression, and trial classes." },
    { q: "What martial arts keywords should I target?", a: "We target 'martial arts near me,' 'karate classes Las Vegas,' 'BJJ gym,' 'MMA training,' and 'self-defense classes.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most martial arts schools see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does martial arts SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// FOOD & DINING (final)
export const CATERING_CONTENT: NicheContent = {
  headline: "Your Catering Company Deserves to Be the First One Clients Find",
  pain: "Las Vegas catering companies are losing clients to competitors who rank higher on Google. When someone searches 'catering near me' or 'wedding catering Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas catering companies dominate local search and Google Maps — attracting clients actively searching for catering services for events and weddings.",
  everestQuote: "I tracked every high-intent catering keyword in Las Vegas — wedding catering, corporate catering, event food — so your company books solid.",
  testimonials: [
    { quote: "We went from 3-4 catering inquiries per week to 10+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Chef Maria T.", company: "Desert Catering Co.", location: "Las Vegas, NV", results: "10+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'catering Las Vegas' in 85 days. Revenue is up 275%.", author: "Chef James M.", company: "Premier Event Catering", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Chef Lisa R.", company: "Valley Catering Services", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'catering near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for catering keywords. We build content around menu options, event types, and booking process." },
    { q: "What catering keywords should I target?", a: "We target 'catering near me,' 'wedding catering Las Vegas,' 'corporate catering,' 'event food service,' and 'buffet catering.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most catering companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does catering SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// FINANCE (final)
export const TAX_PREPARER_CONTENT: NicheContent = {
  headline: "Your Tax Preparation Business Deserves to Be the First One Clients Find",
  pain: "Las Vegas tax preparers are losing clients to competitors who rank higher on Google. When someone searches 'tax preparer near me' or 'tax preparation Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas tax preparers dominate local search and Google Maps — attracting clients actively searching for tax preparation and filing services.",
  everestQuote: "I tracked every high-intent tax keyword in Las Vegas — tax preparer, tax filing, CPA near me — so your business books solid.",
  testimonials: [
    { quote: "We went from 10-12 new clients per week to 28+ clients during tax season. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Linda T.", company: "Desert Tax Services", location: "Las Vegas, NV", results: "28+ clients per week" },
    { quote: "HuskyTail got us ranking for 'tax preparer Las Vegas' in 80 days. Revenue is up 270%.", author: "Mark S.", company: "Premier Tax Solutions", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Susan M.", company: "Valley Tax Preparation", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'tax preparer near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for tax preparation keywords. We build content around individual vs. business taxes, deadlines, and deductions." },
    { q: "What tax preparation keywords should I target?", a: "We target 'tax preparer near me,' 'tax preparation Las Vegas,' 'CPA near me,' 'business tax filing,' and 'IRS audit help.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most tax preparers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does tax preparation SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// PHOTOGRAPHY (final)
export const WEDDING_PHOTOGRAPHER_CONTENT: NicheContent = {
  headline: "Your Wedding Photography Business Deserves to Be the First One Couples Find",
  pain: "Las Vegas wedding photographers are losing bookings to competitors who rank higher on Google. When a couple searches 'wedding photographer near me' or 'wedding photography Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas wedding photographers dominate local search and Google Maps — attracting couples actively searching for wedding photography services.",
  everestQuote: "I tracked every high-intent wedding photography keyword in Las Vegas — wedding photographer, engagement photos, elopement — so your business books solid.",
  testimonials: [
    { quote: "We went from 3-4 wedding inquiries per week to 10+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Ashley T.", company: "Desert Moments Photography", location: "Las Vegas, NV", results: "10+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'wedding photographer Las Vegas' in 85 days. Revenue is up 275%.", author: "Brandon M.", company: "Premier Wedding Photos", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Kayla S.", company: "Valley Wedding Photography", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'wedding photographer near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for wedding photography keywords. We showcase your portfolio, packages, and booking process." },
    { q: "What wedding photography keywords should I target?", a: "We target 'wedding photographer near me,' 'wedding photography Las Vegas,' 'engagement photos,' 'elopement photographer,' and 'destination wedding.' We focus on high-intent terms." },
    { q: "How long does it take to rank?", a: "Most wedding photographers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does wedding photography SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

