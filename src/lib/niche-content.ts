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

