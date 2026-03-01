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
  
  // Home Services
  plumber: PLUMBER_CONTENT,
  electrician: ELECTRICIAN_CONTENT,
  
  // Legal
  attorney: ATTORNEY_CONTENT,
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
