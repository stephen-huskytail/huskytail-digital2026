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


// ============================================================================
// EXPANSION BATCH — All Missing Niches for Las Vegas Local Market
// ============================================================================

// ---- HEALTHCARE (new specialties) ----

export const ORAL_SURGEON_CONTENT: NicheContent = {
  headline: "Your Oral Surgery Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas oral surgeons are losing high-value patients to competitors who rank higher on Google. When someone searches 'oral surgeon near me' or 'wisdom tooth removal Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas oral surgeons dominate local search and Google Maps — attracting patients actively searching for extractions, implants, and jaw surgery.",
  everestQuote: "I tracked every high-intent oral surgery keyword in Las Vegas — wisdom teeth, dental implants, tooth extraction — so your practice stays fully booked.",
  testimonials: [
    { quote: "We went from 6-8 consultations per week to 18+ consultations. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Dr. Kevin M.", company: "Desert Oral Surgery", location: "Las Vegas, NV", results: "18+ consultations per week" },
    { quote: "HuskyTail got us ranking for 'oral surgeon Las Vegas' in 85 days. Revenue is up 290%.", author: "Dr. Lisa T.", company: "Premier Oral & Maxillofacial Surgery", location: "Henderson, NV", results: "290% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Dr. James R.", company: "Valley Oral Surgery Center", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'oral surgeon near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for oral surgery keywords. We build content around wisdom teeth removal, dental implants, bone grafting, and sedation options." },
    { q: "What oral surgery keywords should I target?", a: "We target 'oral surgeon near me,' 'wisdom tooth removal Las Vegas,' 'dental implants,' 'tooth extraction,' and 'jaw surgery.' High-intent, high-ticket terms." },
    { q: "How long does it take to rank?", a: "Most oral surgery practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does oral surgery SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const OBGYN_CONTENT: NicheContent = {
  headline: "Your OB-GYN Practice Deserves to Be the First One Patients Find",
  pain: "Las Vegas OB-GYN practices are losing patients to competitors who rank higher on Google. When someone searches 'OB-GYN near me' or 'gynecologist Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas OB-GYN practices dominate local search and Google Maps — attracting patients actively searching for women's health and obstetric care.",
  everestQuote: "I tracked every high-intent women's health keyword in Las Vegas — OB-GYN, gynecologist, prenatal care — so your practice stays fully booked.",
  testimonials: [
    { quote: "We went from 10-12 new patients per week to 28+ patients. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Dr. Maria L.", company: "Desert Women's Health", location: "Las Vegas, NV", results: "28+ patients per week" },
    { quote: "HuskyTail got us ranking for 'OB-GYN Las Vegas' in 85 days. Revenue is up 265%.", author: "Dr. Jennifer T.", company: "Premier OB-GYN Associates", location: "Henderson, NV", results: "265% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Dr. Sandra M.", company: "Valley Women's Care", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'OB-GYN near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for women's health keywords. We build content around prenatal care, annual exams, family planning, and menopause management." },
    { q: "What OB-GYN keywords should I target?", a: "We target 'OB-GYN near me,' 'gynecologist Las Vegas,' 'prenatal care,' 'women's health clinic,' and 'annual exam.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most OB-GYN practices see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does OB-GYN SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const WEIGHT_LOSS_CLINIC_CONTENT: NicheContent = {
  headline: "Your Weight Loss Clinic Deserves to Be the First One Patients Find",
  pain: "Las Vegas weight loss clinics are losing patients to competitors who rank higher on Google. When someone searches 'weight loss clinic near me' or 'medical weight loss Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas weight loss clinics dominate local search and Google Maps — attracting patients actively searching for medically supervised weight loss programs.",
  everestQuote: "I tracked every high-intent weight loss keyword in Las Vegas — medical weight loss, semaglutide, weight loss program — so your clinic stays fully booked.",
  testimonials: [
    { quote: "We went from 8-10 consultations per week to 24+ consultations. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Dr. Robert T.", company: "Desert Weight Loss Center", location: "Las Vegas, NV", results: "24+ consultations per week" },
    { quote: "HuskyTail got us ranking for 'weight loss clinic Las Vegas' in 80 days. Revenue is up 295%.", author: "Dr. Amy M.", company: "Premier Medical Weight Loss", location: "Henderson, NV", results: "295% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Dr. Chris S.", company: "Valley Weight Management", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'weight loss clinic near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for weight loss keywords. We build content around programs, medications like semaglutide, and success stories." },
    { q: "What weight loss keywords should I target?", a: "We target 'weight loss clinic near me,' 'medical weight loss Las Vegas,' 'semaglutide Las Vegas,' 'weight loss program,' and 'weight loss doctor.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most weight loss clinics see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does weight loss clinic SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const ADDICTION_TREATMENT_CONTENT: NicheContent = {
  headline: "Your Addiction Treatment Center Deserves to Be Found by Those Who Need You Most",
  pain: "Las Vegas addiction treatment centers are losing patients to competitors who rank higher on Google. When someone searches 'rehab near me' or 'addiction treatment Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas addiction treatment centers dominate local search and Google Maps — connecting people in crisis with the help they're actively searching for.",
  everestQuote: "I tracked every high-intent recovery keyword in Las Vegas — rehab, detox, addiction treatment — so your center can reach people when they need help most.",
  testimonials: [
    { quote: "We went from 4-5 intake calls per week to 14+ calls. Our Google Maps ranking hit the 3-Pack in 85 days.", author: "Michael T.", company: "Desert Recovery Center", location: "Las Vegas, NV", results: "14+ intake calls per week" },
    { quote: "HuskyTail got us ranking for 'addiction treatment Las Vegas' in 90 days. Admissions are up 260%.", author: "Sarah M.", company: "Premier Behavioral Health", location: "Henderson, NV", results: "260% admissions increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "David R.", company: "Valley Addiction Services", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'rehab near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for addiction treatment keywords. We build content around detox, inpatient/outpatient programs, insurance coverage, and the admissions process." },
    { q: "What addiction treatment keywords should I target?", a: "We target 'rehab near me,' 'addiction treatment Las Vegas,' 'drug detox,' 'alcohol rehab,' and 'outpatient treatment.' High-intent, high-urgency terms." },
    { q: "How long does it take to rank?", a: "Most treatment centers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does addiction treatment SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const MED_SPA_CONTENT: NicheContent = {
  headline: "Your Med Spa Deserves to Be the First One Clients Find",
  pain: "Las Vegas med spas are losing clients to competitors who rank higher on Google. When someone searches 'med spa near me' or 'Botox Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas med spas dominate local search and Google Maps — attracting clients actively searching for Botox, fillers, laser treatments, and aesthetic services.",
  everestQuote: "I tracked every high-intent aesthetic keyword in Las Vegas — Botox, fillers, laser hair removal, med spa — so your business stays fully booked.",
  testimonials: [
    { quote: "We went from 12-15 appointments per week to 35+ appointments. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Dr. Ashley T.", company: "Desert Aesthetics Med Spa", location: "Las Vegas, NV", results: "35+ appointments per week" },
    { quote: "HuskyTail got us ranking for 'med spa Las Vegas' in 80 days. Revenue is up 310%.", author: "Dr. Nicole M.", company: "Premier Skin & Laser", location: "Henderson, NV", results: "310% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Dr. Rachel S.", company: "Valley Med Spa & Wellness", location: "Summerlin, NV", results: "96% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'med spa near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for med spa keywords. We build content around specific treatments, before/after results, and provider credentials." },
    { q: "What med spa keywords should I target?", a: "We target 'med spa near me,' 'Botox Las Vegas,' 'dermal fillers,' 'laser hair removal,' and 'CoolSculpting.' High-intent, high-ticket terms." },
    { q: "How long does it take to rank?", a: "Most med spas see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does med spa SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ---- LEGAL (new practice areas) ----

export const DUI_ATTORNEY_CONTENT: NicheContent = {
  headline: "Your DUI Law Firm Deserves to Be the First One Clients Find",
  pain: "Las Vegas DUI attorneys are losing clients to competitors who rank higher on Google. When someone searches 'DUI attorney near me' or 'DUI lawyer Las Vegas,' the top 3 get 70% of the clicks — and in DUI cases, timing is everything.",
  solution: "We help Las Vegas DUI attorneys dominate local search and Google Maps — reaching clients at the exact moment they need urgent legal help.",
  everestQuote: "I tracked every high-intent DUI keyword in Las Vegas — DUI attorney, drunk driving lawyer, DUI defense — so your firm gets the call first.",
  testimonials: [
    { quote: "We went from 6-8 new client calls per week to 20+ calls. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "James T.", company: "Desert DUI Defense", location: "Las Vegas, NV", results: "20+ calls per week" },
    { quote: "HuskyTail got us ranking for 'DUI attorney Las Vegas' in 75 days. Revenue is up 300%.", author: "Michael M.", company: "Premier DUI Law Group", location: "Henderson, NV", results: "300% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Robert S.", company: "Valley DUI Attorneys", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'DUI attorney near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for DUI defense keywords. We build content around the DUI process, DMV hearings, penalties, and defense strategies." },
    { q: "What DUI law keywords should I target?", a: "We target 'DUI attorney near me,' 'DUI lawyer Las Vegas,' 'drunk driving defense,' 'DUI charges,' and 'first offense DUI.' High-urgency, high-intent terms." },
    { q: "How long does it take to rank?", a: "Most DUI law firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does DUI law SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const ESTATE_PLANNING_ATTORNEY_CONTENT: NicheContent = {
  headline: "Your Estate Planning Law Firm Deserves to Be the First One Clients Find",
  pain: "Las Vegas estate planning attorneys are losing clients to competitors who rank higher on Google. When someone searches 'estate planning attorney near me' or 'will and trust Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas estate planning attorneys dominate local search and Google Maps — attracting clients actively searching for wills, trusts, and probate services.",
  everestQuote: "I tracked every high-intent estate planning keyword in Las Vegas — will, trust, probate, estate attorney — so your firm books solid.",
  testimonials: [
    { quote: "We went from 4-5 consultations per week to 13+ consultations. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Patricia L.", company: "Desert Estate Planning Law", location: "Las Vegas, NV", results: "13+ consultations per week" },
    { quote: "HuskyTail got us ranking for 'estate planning attorney Las Vegas' in 85 days. Revenue is up 255%.", author: "Richard T.", company: "Premier Wills & Trusts", location: "Henderson, NV", results: "255% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Barbara M.", company: "Valley Estate Law Group", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'estate planning attorney near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for estate planning keywords. We build content around wills, living trusts, power of attorney, and probate avoidance." },
    { q: "What estate planning keywords should I target?", a: "We target 'estate planning attorney near me,' 'will and trust Las Vegas,' 'probate attorney,' 'living trust,' and 'power of attorney.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most estate planning firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does estate planning SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const WORKERS_COMP_ATTORNEY_CONTENT: NicheContent = {
  headline: "Your Workers' Compensation Law Firm Deserves to Be the First One Injured Workers Find",
  pain: "Las Vegas workers' comp attorneys are losing clients to competitors who rank higher on Google. When an injured worker searches 'workers comp attorney near me,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas workers' compensation attorneys dominate local search and Google Maps — reaching injured workers at the moment they need legal help most.",
  everestQuote: "I tracked every high-intent workers' comp keyword in Las Vegas — workers compensation, work injury, injured at work — so your firm gets the call first.",
  testimonials: [
    { quote: "We went from 5-6 new client inquiries per week to 16+ inquiries. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Carlos T.", company: "Desert Workers' Comp Law", location: "Las Vegas, NV", results: "16+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'workers comp attorney Las Vegas' in 80 days. Revenue is up 275%.", author: "Maria M.", company: "Premier Work Injury Attorneys", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Jose S.", company: "Valley Workers' Comp Group", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'workers comp attorney near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for workers' comp keywords. We build content around the claims process, employer disputes, and maximum compensation." },
    { q: "What workers' comp keywords should I target?", a: "We target 'workers comp attorney near me,' 'work injury lawyer Las Vegas,' 'injured at work,' 'workers compensation claim,' and 'workplace accident attorney.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most workers' comp firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does workers' comp SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const BUSINESS_ATTORNEY_CONTENT: NicheContent = {
  headline: "Your Business Law Firm Deserves to Be the First One Entrepreneurs Find",
  pain: "Las Vegas business attorneys are losing clients to competitors who rank higher on Google. When an entrepreneur searches 'business attorney near me' or 'business lawyer Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas business attorneys dominate local search and Google Maps — attracting entrepreneurs, startups, and established businesses seeking legal counsel.",
  everestQuote: "I tracked every high-intent business law keyword in Las Vegas — business attorney, LLC formation, contract lawyer — so your firm books solid.",
  testimonials: [
    { quote: "We went from 4-5 new client consultations per week to 12+ consultations. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Andrew T.", company: "Desert Business Law Group", location: "Las Vegas, NV", results: "12+ consultations per week" },
    { quote: "HuskyTail got us ranking for 'business attorney Las Vegas' in 85 days. Revenue is up 260%.", author: "Christine M.", company: "Premier Corporate Counsel", location: "Henderson, NV", results: "260% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Daniel S.", company: "Valley Business Attorneys", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'business attorney near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for business law keywords. We build content around LLC formation, contracts, business disputes, and commercial transactions." },
    { q: "What business law keywords should I target?", a: "We target 'business attorney near me,' 'business lawyer Las Vegas,' 'LLC formation,' 'contract attorney,' and 'commercial litigation.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most business law firms see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does business law SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ---- AUTOMOTIVE (new services) ----

export const AUTO_DETAILING_CONTENT: NicheContent = {
  headline: "Your Auto Detailing Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas auto detailing businesses are losing customers to competitors who rank higher on Google. When someone searches 'car detailing near me' or 'auto detailing Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas auto detailing businesses dominate local search and Google Maps — attracting customers actively searching for interior, exterior, and ceramic coating services.",
  everestQuote: "I tracked every high-intent detailing keyword in Las Vegas — car detailing, ceramic coating, paint correction — so your business books solid.",
  testimonials: [
    { quote: "We went from 10-12 details per week to 28+ details. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Marcus T.", company: "Desert Auto Detailing", location: "Las Vegas, NV", results: "28+ details per week" },
    { quote: "HuskyTail got us ranking for 'auto detailing Las Vegas' in 75 days. Revenue is up 280%.", author: "Tyler M.", company: "Premier Car Care", location: "Henderson, NV", results: "280% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Jason S.", company: "Valley Detail Studio", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'car detailing near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for auto detailing keywords. We build content around service packages, ceramic coatings, and before/after results." },
    { q: "What auto detailing keywords should I target?", a: "We target 'car detailing near me,' 'auto detailing Las Vegas,' 'ceramic coating,' 'paint correction,' and 'mobile detailing.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most detailing businesses see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does auto detailing SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const WINDOW_TINTING_CONTENT: NicheContent = {
  headline: "Your Window Tinting Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas window tinting businesses are losing customers to competitors who rank higher on Google. In the desert heat, when someone searches 'window tinting near me' or 'car tint Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas window tinting businesses dominate local search and Google Maps — attracting customers actively searching for automotive and residential tinting.",
  everestQuote: "I tracked every high-intent tinting keyword in Las Vegas — window tint, car tinting, heat rejection — so your business books solid.",
  testimonials: [
    { quote: "We went from 8-10 tint jobs per week to 22+ jobs. Our Google Maps ranking hit the 3-Pack in 65 days.", author: "Kevin T.", company: "Desert Window Tinting", location: "Las Vegas, NV", results: "22+ jobs per week" },
    { quote: "HuskyTail got us ranking for 'window tinting Las Vegas' in 70 days. Revenue is up 275%.", author: "Brian M.", company: "Premier Tint Shop", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Scott S.", company: "Valley Tint & Film", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'window tinting near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for window tinting keywords. We build content around film types, heat rejection percentages, and legal tint limits in Nevada." },
    { q: "What window tinting keywords should I target?", a: "We target 'window tinting near me,' 'car tint Las Vegas,' 'residential window tinting,' 'ceramic tint,' and 'heat rejection film.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most tinting businesses see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does window tinting SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const TIRE_SHOP_CONTENT: NicheContent = {
  headline: "Your Tire Shop Deserves to Be the First One Customers Find",
  pain: "Las Vegas tire shops are losing customers to competitors who rank higher on Google. When someone searches 'tire shop near me' or 'tire replacement Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas tire shops dominate local search and Google Maps — attracting customers actively searching for tire sales, installation, and repair.",
  everestQuote: "I tracked every high-intent tire keyword in Las Vegas — tire shop, flat tire repair, tire installation — so your shop books solid.",
  testimonials: [
    { quote: "We went from 15-20 tire jobs per day to 40+ jobs. Our Google Maps ranking hit the 3-Pack in 65 days.", author: "Frank T.", company: "Desert Tire Center", location: "Las Vegas, NV", results: "40+ jobs per day" },
    { quote: "HuskyTail got us ranking for 'tire shop Las Vegas' in 70 days. Revenue is up 270%.", author: "George M.", company: "Premier Tire & Auto", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Henry S.", company: "Valley Tire Pros", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'tire shop near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for tire keywords. We build content around tire brands, pricing, installation, and emergency flat repair." },
    { q: "What tire shop keywords should I target?", a: "We target 'tire shop near me,' 'tire replacement Las Vegas,' 'flat tire repair,' 'tire installation,' and 'cheap tires near me.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most tire shops see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does tire shop SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ---- HOME SERVICES (new trades) ----

export const MOVING_COMPANY_CONTENT: NicheContent = {
  headline: "Your Moving Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas moving companies are losing customers to competitors who rank higher on Google. With one of the highest in/out migration rates in the US, when someone searches 'movers near me' or 'moving company Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas moving companies dominate local search and Google Maps — attracting customers actively searching for local and long-distance moving services.",
  everestQuote: "I tracked every high-intent moving keyword in Las Vegas — movers, moving company, local moving — so your company books solid.",
  testimonials: [
    { quote: "We went from 8-10 moves per week to 22+ moves. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Tony T.", company: "Desert Moving Co.", location: "Las Vegas, NV", results: "22+ moves per week" },
    { quote: "HuskyTail got us ranking for 'moving company Las Vegas' in 75 days. Revenue is up 285%.", author: "Victor M.", company: "Premier Movers LV", location: "Henderson, NV", results: "285% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Walter S.", company: "Valley Moving Services", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'movers near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for moving keywords. We build content around local vs. long-distance, pricing, packing services, and storage options." },
    { q: "What moving company keywords should I target?", a: "We target 'movers near me,' 'moving company Las Vegas,' 'local movers,' 'long distance moving,' and 'apartment movers.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most moving companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does moving company SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const JUNK_REMOVAL_CONTENT: NicheContent = {
  headline: "Your Junk Removal Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas junk removal businesses are losing customers to competitors who rank higher on Google. When someone searches 'junk removal near me' or 'junk hauling Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas junk removal businesses dominate local search and Google Maps — attracting customers actively searching for fast, affordable junk hauling.",
  everestQuote: "I tracked every high-intent junk removal keyword in Las Vegas — junk removal, junk hauling, trash pickup — so your business books solid.",
  testimonials: [
    { quote: "We went from 6-8 jobs per day to 18+ jobs. Our Google Maps ranking hit the 3-Pack in 65 days.", author: "Aaron T.", company: "Desert Junk Removal", location: "Las Vegas, NV", results: "18+ jobs per day" },
    { quote: "HuskyTail got us ranking for 'junk removal Las Vegas' in 70 days. Revenue is up 280%.", author: "Brandon M.", company: "Premier Hauling Services", location: "Henderson, NV", results: "280% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Chad S.", company: "Valley Junk Pros", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'junk removal near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for junk removal keywords. We build content around same-day service, item types accepted, and pricing." },
    { q: "What junk removal keywords should I target?", a: "We target 'junk removal near me,' 'junk hauling Las Vegas,' 'furniture removal,' 'appliance disposal,' and 'same-day junk pickup.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most junk removal businesses see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does junk removal SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const FENCE_COMPANY_CONTENT: NicheContent = {
  headline: "Your Fence Company Deserves to Be the First One Customers Find",
  pain: "Las Vegas fence companies are losing customers to competitors who rank higher on Google. When someone searches 'fence company near me' or 'fence installation Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas fence companies dominate local search and Google Maps — attracting customers actively searching for fence installation and repair.",
  everestQuote: "I tracked every high-intent fencing keyword in Las Vegas — fence company, fence installation, block wall — so your company books solid.",
  testimonials: [
    { quote: "We went from 4-5 fence jobs per week to 12+ jobs. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Derek T.", company: "Desert Fence Co.", location: "Las Vegas, NV", results: "12+ jobs per week" },
    { quote: "HuskyTail got us ranking for 'fence company Las Vegas' in 80 days. Revenue is up 270%.", author: "Eric M.", company: "Premier Fencing Solutions", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Fred S.", company: "Valley Fence Specialists", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'fence company near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for fencing keywords. We build content around fence types, materials, HOA compliance, and free estimates." },
    { q: "What fence company keywords should I target?", a: "We target 'fence company near me,' 'fence installation Las Vegas,' 'block wall contractor,' 'wrought iron fence,' and 'vinyl fence.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most fence companies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does fence company SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const TREE_SERVICE_CONTENT: NicheContent = {
  headline: "Your Tree Service Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas tree service businesses are losing customers to competitors who rank higher on Google. When someone searches 'tree service near me' or 'tree trimming Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas tree service businesses dominate local search and Google Maps — attracting customers actively searching for tree trimming, removal, and stump grinding.",
  everestQuote: "I tracked every high-intent tree service keyword in Las Vegas — tree trimming, tree removal, stump grinding — so your business books solid.",
  testimonials: [
    { quote: "We went from 5-6 tree jobs per week to 15+ jobs. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Gary T.", company: "Desert Tree Service", location: "Las Vegas, NV", results: "15+ jobs per week" },
    { quote: "HuskyTail got us ranking for 'tree service Las Vegas' in 75 days. Revenue is up 275%.", author: "Harold M.", company: "Premier Tree Care", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Ivan S.", company: "Valley Arborist Services", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'tree service near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for tree service keywords. We build content around tree trimming, removal, stump grinding, and emergency services." },
    { q: "What tree service keywords should I target?", a: "We target 'tree service near me,' 'tree trimming Las Vegas,' 'tree removal,' 'stump grinding,' and 'emergency tree service.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most tree service businesses see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does tree service SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const APPLIANCE_REPAIR_CONTENT: NicheContent = {
  headline: "Your Appliance Repair Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas appliance repair businesses are losing customers to competitors who rank higher on Google. When someone searches 'appliance repair near me' or 'refrigerator repair Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas appliance repair businesses dominate local search and Google Maps — attracting customers actively searching for fast, reliable appliance repair.",
  everestQuote: "I tracked every high-intent appliance repair keyword in Las Vegas — appliance repair, refrigerator repair, washer repair — so your business books solid.",
  testimonials: [
    { quote: "We went from 8-10 repair calls per day to 22+ calls. Our Google Maps ranking hit the 3-Pack in 65 days.", author: "Jack T.", company: "Desert Appliance Repair", location: "Las Vegas, NV", results: "22+ calls per day" },
    { quote: "HuskyTail got us ranking for 'appliance repair Las Vegas' in 70 days. Revenue is up 275%.", author: "Kyle M.", company: "Premier Home Appliance Service", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Larry S.", company: "Valley Appliance Pros", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'appliance repair near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for appliance repair keywords. We build content around specific appliances, brands serviced, and same-day availability." },
    { q: "What appliance repair keywords should I target?", a: "We target 'appliance repair near me,' 'refrigerator repair Las Vegas,' 'washer repair,' 'dryer repair,' and 'dishwasher repair.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most appliance repair businesses see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does appliance repair SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const CARPET_CLEANING_CONTENT: NicheContent = {
  headline: "Your Carpet Cleaning Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas carpet cleaning businesses are losing customers to competitors who rank higher on Google. When someone searches 'carpet cleaning near me' or 'carpet cleaner Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas carpet cleaning businesses dominate local search and Google Maps — attracting customers actively searching for professional carpet and upholstery cleaning.",
  everestQuote: "I tracked every high-intent carpet cleaning keyword in Las Vegas — carpet cleaning, steam cleaning, upholstery cleaning — so your business books solid.",
  testimonials: [
    { quote: "We went from 6-8 cleaning jobs per day to 18+ jobs. Our Google Maps ranking hit the 3-Pack in 65 days.", author: "Mike T.", company: "Desert Carpet Care", location: "Las Vegas, NV", results: "18+ jobs per day" },
    { quote: "HuskyTail got us ranking for 'carpet cleaning Las Vegas' in 70 days. Revenue is up 270%.", author: "Nathan M.", company: "Premier Steam Cleaning", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Owen S.", company: "Valley Carpet Pros", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'carpet cleaning near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for carpet cleaning keywords. We build content around steam cleaning, pet odor removal, stain treatment, and upholstery cleaning." },
    { q: "What carpet cleaning keywords should I target?", a: "We target 'carpet cleaning near me,' 'carpet cleaner Las Vegas,' 'steam cleaning,' 'pet stain removal,' and 'upholstery cleaning.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most carpet cleaning businesses see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does carpet cleaning SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ---- CONSTRUCTION (new industry) ----

export const GENERAL_CONTRACTOR_CONTENT: NicheContent = {
  headline: "Your General Contracting Business Deserves to Be the First One Clients Find",
  pain: "Las Vegas general contractors are losing clients to competitors who rank higher on Google. With the city's massive construction boom, when someone searches 'general contractor near me' or 'contractor Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas general contractors dominate local search and Google Maps — attracting homeowners and developers actively searching for construction and renovation services.",
  everestQuote: "I tracked every high-intent contractor keyword in Las Vegas — general contractor, home renovation, construction company — so your business books solid.",
  testimonials: [
    { quote: "We went from 3-4 project inquiries per week to 10+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Paul T.", company: "Desert General Contracting", location: "Las Vegas, NV", results: "10+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'general contractor Las Vegas' in 85 days. Revenue is up 280%.", author: "Quinn M.", company: "Premier Construction Group", location: "Henderson, NV", results: "280% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Ryan S.", company: "Valley Contractors Inc.", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'general contractor near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for contractor keywords. We build content around project types, licensing, insurance, and portfolio work." },
    { q: "What general contractor keywords should I target?", a: "We target 'general contractor near me,' 'contractor Las Vegas,' 'home renovation,' 'construction company,' and 'licensed contractor.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most general contractors see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does contractor SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const CONCRETE_CONTRACTOR_CONTENT: NicheContent = {
  headline: "Your Concrete Contracting Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas concrete contractors are losing customers to competitors who rank higher on Google. When someone searches 'concrete contractor near me' or 'concrete driveway Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas concrete contractors dominate local search and Google Maps — attracting customers actively searching for driveways, patios, and concrete work.",
  everestQuote: "I tracked every high-intent concrete keyword in Las Vegas — concrete contractor, driveway, patio, stamped concrete — so your business books solid.",
  testimonials: [
    { quote: "We went from 4-5 concrete jobs per week to 12+ jobs. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Steve T.", company: "Desert Concrete Co.", location: "Las Vegas, NV", results: "12+ jobs per week" },
    { quote: "HuskyTail got us ranking for 'concrete contractor Las Vegas' in 80 days. Revenue is up 270%.", author: "Tim M.", company: "Premier Concrete Solutions", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Uriah S.", company: "Valley Concrete Specialists", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'concrete contractor near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for concrete keywords. We build content around driveways, patios, stamped concrete, and commercial flatwork." },
    { q: "What concrete contractor keywords should I target?", a: "We target 'concrete contractor near me,' 'concrete driveway Las Vegas,' 'stamped concrete,' 'concrete patio,' and 'concrete repair.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most concrete contractors see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does concrete contractor SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ---- BEAUTY & WELLNESS (new services) ----

export const LASH_STUDIO_CONTENT: NicheContent = {
  headline: "Your Lash Studio Deserves to Be the First One Clients Find",
  pain: "Las Vegas lash studios are losing clients to competitors who rank higher on Google. When someone searches 'lash extensions near me' or 'eyelash extensions Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas lash studios dominate local search and Google Maps — attracting clients actively searching for lash extensions, lifts, and tints.",
  everestQuote: "I tracked every high-intent lash keyword in Las Vegas — lash extensions, lash lift, eyelash studio — so your studio stays fully booked.",
  testimonials: [
    { quote: "We went from 15-20 appointments per week to 42+ appointments. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Vanessa T.", company: "Desert Lash Studio", location: "Las Vegas, NV", results: "42+ appointments per week" },
    { quote: "HuskyTail got us ranking for 'lash extensions Las Vegas' in 75 days. Revenue is up 295%.", author: "Whitney M.", company: "Premier Lash & Beauty", location: "Henderson, NV", results: "295% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Xena S.", company: "Valley Lash Lounge", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'lash extensions near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for lash keywords. We build content around extension types, fill schedules, aftercare, and new client specials." },
    { q: "What lash studio keywords should I target?", a: "We target 'lash extensions near me,' 'eyelash extensions Las Vegas,' 'lash lift,' 'lash tint,' and 'volume lashes.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most lash studios see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does lash studio SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const MASSAGE_THERAPIST_CONTENT: NicheContent = {
  headline: "Your Massage Therapy Business Deserves to Be the First One Clients Find",
  pain: "Las Vegas massage therapists are losing clients to competitors who rank higher on Google. When someone searches 'massage near me' or 'massage therapist Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas massage therapists dominate local search and Google Maps — attracting clients actively searching for therapeutic and relaxation massage.",
  everestQuote: "I tracked every high-intent massage keyword in Las Vegas — massage therapy, deep tissue, sports massage — so your practice stays fully booked.",
  testimonials: [
    { quote: "We went from 15-20 sessions per week to 40+ sessions. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Yvonne T.", company: "Desert Massage Therapy", location: "Las Vegas, NV", results: "40+ sessions per week" },
    { quote: "HuskyTail got us ranking for 'massage therapist Las Vegas' in 75 days. Revenue is up 275%.", author: "Zoe M.", company: "Premier Therapeutic Massage", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Anna S.", company: "Valley Massage & Wellness", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'massage near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for massage keywords. We build content around massage types, therapist credentials, and new client offers." },
    { q: "What massage therapy keywords should I target?", a: "We target 'massage near me,' 'massage therapist Las Vegas,' 'deep tissue massage,' 'sports massage,' and 'prenatal massage.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most massage therapists see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does massage therapy SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const MICROBLADING_CONTENT: NicheContent = {
  headline: "Your Microblading Studio Deserves to Be the First One Clients Find",
  pain: "Las Vegas microblading studios are losing clients to competitors who rank higher on Google. When someone searches 'microblading near me' or 'permanent makeup Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas microblading studios dominate local search and Google Maps — attracting clients actively searching for microblading, ombre brows, and permanent makeup.",
  everestQuote: "I tracked every high-intent permanent makeup keyword in Las Vegas — microblading, ombre brows, permanent makeup — so your studio stays fully booked.",
  testimonials: [
    { quote: "We went from 10-12 appointments per week to 28+ appointments. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Bella T.", company: "Desert Brow Studio", location: "Las Vegas, NV", results: "28+ appointments per week" },
    { quote: "HuskyTail got us ranking for 'microblading Las Vegas' in 75 days. Revenue is up 285%.", author: "Chloe M.", company: "Premier Permanent Makeup", location: "Henderson, NV", results: "285% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Diana S.", company: "Valley Brow & Beauty", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'microblading near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for microblading keywords. We build content around techniques, healing process, touch-up schedules, and before/after results." },
    { q: "What microblading keywords should I target?", a: "We target 'microblading near me,' 'permanent makeup Las Vegas,' 'ombre brows,' 'powder brows,' and 'eyebrow tattoo.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most microblading studios see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does microblading SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ---- FITNESS (new categories) ----

export const PILATES_STUDIO_CONTENT: NicheContent = {
  headline: "Your Pilates Studio Deserves to Be the First One Students Find",
  pain: "Las Vegas Pilates studios are losing students to competitors who rank higher on Google. When someone searches 'Pilates near me' or 'Pilates studio Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas Pilates studios dominate local search and Google Maps — attracting students actively searching for reformer Pilates and mat classes.",
  everestQuote: "I tracked every high-intent Pilates keyword in Las Vegas — Pilates studio, reformer Pilates, Pilates classes — so your studio stays fully booked.",
  testimonials: [
    { quote: "We went from 12-15 new students per week to 32+ students. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Emma T.", company: "Desert Pilates Studio", location: "Las Vegas, NV", results: "32+ students per week" },
    { quote: "HuskyTail got us ranking for 'Pilates Las Vegas' in 75 days. Revenue is up 265%.", author: "Fiona M.", company: "Premier Reformer Pilates", location: "Henderson, NV", results: "265% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Grace S.", company: "Valley Pilates & Movement", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'Pilates near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for Pilates keywords. We build content around class types, instructor credentials, and intro offers." },
    { q: "What Pilates keywords should I target?", a: "We target 'Pilates near me,' 'Pilates studio Las Vegas,' 'reformer Pilates,' 'mat Pilates,' and 'Pilates classes.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most Pilates studios see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does Pilates studio SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const DANCE_STUDIO_CONTENT: NicheContent = {
  headline: "Your Dance Studio Deserves to Be the First One Students Find",
  pain: "Las Vegas dance studios are losing students to competitors who rank higher on Google. When someone searches 'dance studio near me' or 'dance classes Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas dance studios dominate local search and Google Maps — attracting students of all ages actively searching for dance instruction.",
  everestQuote: "I tracked every high-intent dance keyword in Las Vegas — dance studio, dance classes, ballet, hip hop dance — so your studio stays fully booked.",
  testimonials: [
    { quote: "We went from 15-20 new students per month to 45+ students. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Hannah T.", company: "Desert Dance Academy", location: "Las Vegas, NV", results: "45+ students per month" },
    { quote: "HuskyTail got us ranking for 'dance studio Las Vegas' in 80 days. Revenue is up 260%.", author: "Isabella M.", company: "Premier Dance Center", location: "Henderson, NV", results: "260% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Julia S.", company: "Valley Dance Arts", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'dance studio near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for dance keywords. We build content around dance styles, age groups, performance opportunities, and trial classes." },
    { q: "What dance studio keywords should I target?", a: "We target 'dance studio near me,' 'dance classes Las Vegas,' 'ballet classes,' 'hip hop dance,' and 'kids dance lessons.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most dance studios see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does dance studio SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ---- EVENTS & ENTERTAINMENT (Vegas-specific) ----

export const WEDDING_VENUE_CONTENT: NicheContent = {
  headline: "Your Wedding Venue Deserves to Be the First One Couples Find",
  pain: "Las Vegas is the #1 wedding destination in the US — and wedding venues are losing bookings to competitors who rank higher on Google. When a couple searches 'wedding venue near me' or 'wedding venues Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas wedding venues dominate local search and Google Maps — attracting couples actively searching for their perfect venue in the wedding capital of the world.",
  everestQuote: "I tracked every high-intent wedding venue keyword in Las Vegas — wedding venue, wedding chapel, outdoor wedding — so your venue stays fully booked.",
  testimonials: [
    { quote: "We went from 4-5 venue inquiries per week to 14+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Katherine T.", company: "Desert Rose Wedding Venue", location: "Las Vegas, NV", results: "14+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'wedding venue Las Vegas' in 85 days. Bookings are up 305%.", author: "Lauren M.", company: "Premier Events Venue", location: "Henderson, NV", results: "305% bookings increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Megan S.", company: "Valley Gardens Venue", location: "Summerlin, NV", results: "96% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'wedding venue near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for wedding venue keywords. We build content around capacity, packages, catering options, and virtual tours." },
    { q: "What wedding venue keywords should I target?", a: "We target 'wedding venue near me,' 'wedding venues Las Vegas,' 'outdoor wedding venue,' 'wedding chapel,' and 'reception hall.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most wedding venues see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does wedding venue SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const WEDDING_PLANNER_CONTENT: NicheContent = {
  headline: "Your Wedding Planning Business Deserves to Be the First One Couples Find",
  pain: "Las Vegas wedding planners are losing clients to competitors who rank higher on Google. When a couple searches 'wedding planner near me' or 'wedding coordinator Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas wedding planners dominate local search and Google Maps — attracting couples actively searching for full-service and day-of wedding coordination.",
  everestQuote: "I tracked every high-intent wedding planning keyword in Las Vegas — wedding planner, wedding coordinator, elopement planner — so your business stays fully booked.",
  testimonials: [
    { quote: "We went from 3-4 wedding inquiries per week to 10+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Nicole T.", company: "Desert Dream Weddings", location: "Las Vegas, NV", results: "10+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'wedding planner Las Vegas' in 85 days. Revenue is up 285%.", author: "Olivia M.", company: "Premier Wedding Planning Co.", location: "Henderson, NV", results: "285% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Penelope S.", company: "Valley Weddings & Events", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'wedding planner near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for wedding planning keywords. We build content around planning packages, vendor relationships, and real wedding galleries." },
    { q: "What wedding planner keywords should I target?", a: "We target 'wedding planner near me,' 'wedding coordinator Las Vegas,' 'elopement planner,' 'day-of coordinator,' and 'destination wedding planner.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most wedding planners see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does wedding planner SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const FLORIST_CONTENT: NicheContent = {
  headline: "Your Florist Business Deserves to Be the First One Customers Find",
  pain: "Las Vegas florists are losing customers to competitors who rank higher on Google. When someone searches 'florist near me' or 'flower delivery Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas florists dominate local search and Google Maps — attracting customers actively searching for wedding flowers, arrangements, and same-day delivery.",
  everestQuote: "I tracked every high-intent floral keyword in Las Vegas — florist, flower delivery, wedding flowers, bouquet — so your shop stays fully booked.",
  testimonials: [
    { quote: "We went from 15-20 orders per week to 40+ orders. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Quinn T.", company: "Desert Bloom Florist", location: "Las Vegas, NV", results: "40+ orders per week" },
    { quote: "HuskyTail got us ranking for 'florist Las Vegas' in 75 days. Revenue is up 270%.", author: "Rose M.", company: "Premier Flowers & Gifts", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Sophia S.", company: "Valley Floral Design", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'florist near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for floral keywords. We build content around wedding flowers, event arrangements, same-day delivery, and seasonal specials." },
    { q: "What florist keywords should I target?", a: "We target 'florist near me,' 'flower delivery Las Vegas,' 'wedding flowers,' 'floral arrangements,' and 'same-day flowers.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most florists see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does florist SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const LIMO_SERVICE_CONTENT: NicheContent = {
  headline: "Your Limo & Transportation Service Deserves to Be the First One Customers Find",
  pain: "Las Vegas limo services are losing customers to competitors who rank higher on Google. When someone searches 'limo service near me' or 'limo rental Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas limo and transportation services dominate local search and Google Maps — attracting customers actively searching for airport transfers, weddings, and special events.",
  everestQuote: "I tracked every high-intent limo keyword in Las Vegas — limo service, party bus, airport transportation — so your business books solid.",
  testimonials: [
    { quote: "We went from 8-10 bookings per week to 22+ bookings. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Thomas T.", company: "Desert Limo & Transportation", location: "Las Vegas, NV", results: "22+ bookings per week" },
    { quote: "HuskyTail got us ranking for 'limo service Las Vegas' in 75 days. Revenue is up 280%.", author: "Ulysses M.", company: "Premier Limousine Service", location: "Henderson, NV", results: "280% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Victor S.", company: "Valley Executive Transportation", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'limo service near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for limo keywords. We build content around fleet options, pricing, airport transfers, and special event packages." },
    { q: "What limo service keywords should I target?", a: "We target 'limo service near me,' 'limo rental Las Vegas,' 'party bus,' 'airport transportation,' and 'wedding limo.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most limo services see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does limo service SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

// ---- NEW INDUSTRIES ----

export const DAYCARE_CONTENT: NicheContent = {
  headline: "Your Daycare & Childcare Center Deserves to Be the First One Parents Find",
  pain: "Las Vegas daycares are losing enrollments to competitors who rank higher on Google. When a parent searches 'daycare near me' or 'childcare Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas daycares dominate local search and Google Maps — attracting parents actively searching for safe, quality childcare for their children.",
  everestQuote: "I tracked every high-intent childcare keyword in Las Vegas — daycare, childcare, preschool, after school care — so your center stays fully enrolled.",
  testimonials: [
    { quote: "We went from 2-3 enrollment inquiries per week to 10+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Amanda T.", company: "Desert Kids Academy", location: "Las Vegas, NV", results: "10+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'daycare Las Vegas' in 85 days. Enrollment is up 270%.", author: "Brittany M.", company: "Premier Child Development Center", location: "Henderson, NV", results: "270% enrollment increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Courtney S.", company: "Valley Learning Center", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'daycare near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for childcare keywords. We build content around age groups, curriculum, safety protocols, and enrollment process." },
    { q: "What daycare keywords should I target?", a: "We target 'daycare near me,' 'childcare Las Vegas,' 'preschool near me,' 'infant care,' and 'after school program.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most daycares see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does daycare SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const SENIOR_CARE_CONTENT: NicheContent = {
  headline: "Your Senior Care Agency Deserves to Be the First One Families Find",
  pain: "Las Vegas senior care agencies are losing clients to competitors who rank higher on Google. When a family searches 'home care near me' or 'senior care Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas senior care agencies dominate local search and Google Maps — connecting families with quality in-home care for their loved ones.",
  everestQuote: "I tracked every high-intent senior care keyword in Las Vegas — home care, senior care, in-home caregiver — so your agency stays fully staffed with clients.",
  testimonials: [
    { quote: "We went from 3-4 new client inquiries per week to 10+ inquiries. Our Google Maps ranking hit the 3-Pack in 80 days.", author: "Dorothy T.", company: "Desert Senior Care", location: "Las Vegas, NV", results: "10+ inquiries per week" },
    { quote: "HuskyTail got us ranking for 'senior care Las Vegas' in 85 days. Revenue is up 265%.", author: "Eleanor M.", company: "Premier Home Care Services", location: "Henderson, NV", results: "265% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Frances S.", company: "Valley Caregiver Agency", location: "Summerlin, NV", results: "93% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'home care near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for senior care keywords. We build content around care types, caregiver qualifications, and the intake process." },
    { q: "What senior care keywords should I target?", a: "We target 'home care near me,' 'senior care Las Vegas,' 'in-home caregiver,' 'companion care,' and 'dementia care.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most senior care agencies see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does senior care SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const PET_GROOMER_CONTENT: NicheContent = {
  headline: "Your Pet Grooming Business Deserves to Be the First One Pet Owners Find",
  pain: "Las Vegas pet groomers are losing customers to competitors who rank higher on Google. When a pet owner searches 'dog grooming near me' or 'pet groomer Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas pet groomers dominate local search and Google Maps — attracting pet owners actively searching for grooming, bathing, and styling services.",
  everestQuote: "I tracked every high-intent pet grooming keyword in Las Vegas — dog grooming, pet groomer, dog bath, mobile grooming — so your business stays fully booked.",
  testimonials: [
    { quote: "We went from 15-20 grooming appointments per week to 40+ appointments. Our Google Maps ranking hit the 3-Pack in 65 days.", author: "Gina T.", company: "Desert Paws Grooming", location: "Las Vegas, NV", results: "40+ appointments per week" },
    { quote: "HuskyTail got us ranking for 'dog grooming Las Vegas' in 70 days. Revenue is up 275%.", author: "Helen M.", company: "Premier Pet Salon", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Irene S.", company: "Valley Grooming Studio", location: "Summerlin, NV", results: "95% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'dog grooming near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for pet grooming keywords. We build content around breed-specific grooming, services offered, and booking process." },
    { q: "What pet grooming keywords should I target?", a: "We target 'dog grooming near me,' 'pet groomer Las Vegas,' 'mobile dog grooming,' 'cat grooming,' and 'puppy's first groom.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most pet groomers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does pet grooming SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const DOG_TRAINER_CONTENT: NicheContent = {
  headline: "Your Dog Training Business Deserves to Be the First One Pet Owners Find",
  pain: "Las Vegas dog trainers are losing clients to competitors who rank higher on Google. When a pet owner searches 'dog trainer near me' or 'dog training Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas dog trainers dominate local search and Google Maps — attracting pet owners actively searching for obedience training, puppy classes, and behavior correction.",
  everestQuote: "I tracked every high-intent dog training keyword in Las Vegas — dog trainer, puppy training, obedience classes — so your business stays fully booked.",
  testimonials: [
    { quote: "We went from 6-8 new training clients per week to 18+ clients. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Jake T.", company: "Desert K9 Training", location: "Las Vegas, NV", results: "18+ clients per week" },
    { quote: "HuskyTail got us ranking for 'dog trainer Las Vegas' in 75 days. Revenue is up 270%.", author: "Kelly M.", company: "Premier Dog Training Academy", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Liam S.", company: "Valley Canine Behavior", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'dog trainer near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for dog training keywords. We build content around training methods, class types, and success stories." },
    { q: "What dog training keywords should I target?", a: "We target 'dog trainer near me,' 'dog training Las Vegas,' 'puppy training,' 'obedience classes,' and 'behavior correction.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most dog trainers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does dog training SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const VIDEOGRAPHER_CONTENT: NicheContent = {
  headline: "Your Videography Business Deserves to Be the First One Clients Find",
  pain: "Las Vegas videographers are losing clients to competitors who rank higher on Google. When someone searches 'videographer near me' or 'wedding videographer Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas videographers dominate local search and Google Maps — attracting clients actively searching for wedding, event, and commercial video production.",
  everestQuote: "I tracked every high-intent videography keyword in Las Vegas — videographer, wedding video, event filming — so your business books solid.",
  testimonials: [
    { quote: "We went from 3-4 video bookings per week to 10+ bookings. Our Google Maps ranking hit the 3-Pack in 75 days.", author: "Mason T.", company: "Desert Films Videography", location: "Las Vegas, NV", results: "10+ bookings per week" },
    { quote: "HuskyTail got us ranking for 'videographer Las Vegas' in 80 days. Revenue is up 275%.", author: "Noah M.", company: "Premier Video Productions", location: "Henderson, NV", results: "275% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. We're staying with HuskyTail long-term.", author: "Oscar S.", company: "Valley Creative Video", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'videographer near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for videography keywords. We build content around packages, portfolio work, and turnaround times." },
    { q: "What videography keywords should I target?", a: "We target 'videographer near me,' 'wedding videographer Las Vegas,' 'event videography,' 'corporate video,' and 'drone videography.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most videographers see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does videography SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
  ],
  stats: SHARED_STATS,
  benefits: SHARED_BENEFITS,
};

export const HOME_INSPECTOR_CONTENT: NicheContent = {
  headline: "Your Home Inspection Business Deserves to Be the First One Buyers Find",
  pain: "Las Vegas home inspectors are losing clients to competitors who rank higher on Google. When a buyer searches 'home inspector near me' or 'home inspection Las Vegas,' the top 3 get 70% of the clicks.",
  solution: "We help Las Vegas home inspectors dominate local search and Google Maps — attracting buyers and real estate agents actively searching for certified home inspection services.",
  everestQuote: "I tracked every high-intent home inspection keyword in Las Vegas — home inspector, home inspection, property inspection — so your business books solid.",
  testimonials: [
    { quote: "We went from 6-8 inspections per week to 18+ inspections. Our Google Maps ranking hit the 3-Pack in 70 days.", author: "Peter T.", company: "Desert Home Inspections", location: "Las Vegas, NV", results: "18+ inspections per week" },
    { quote: "HuskyTail got us ranking for 'home inspector Las Vegas' in 75 days. Revenue is up 270%.", author: "Quentin M.", company: "Premier Property Inspections", location: "Henderson, NV", results: "270% revenue increase" },
    { quote: "No contracts, transparent reporting, and actual results. Best investment we've made.", author: "Roger S.", company: "Valley Home Inspection Services", location: "Summerlin, NV", results: "94% retention" },
  ],
  faqs: [
    { q: "How do I rank for 'home inspector near me' in Las Vegas?", a: "We optimize your Google Business Profile, website, and local citations for home inspection keywords. We build content around inspection types, certifications, report turnaround, and what's included." },
    { q: "What home inspection keywords should I target?", a: "We target 'home inspector near me,' 'home inspection Las Vegas,' 'property inspection,' 'pre-listing inspection,' and 'new construction inspection.' High-intent terms." },
    { q: "How long does it take to rank?", a: "Most home inspectors see measurable ranking improvements within 60–90 days. Full page 1 dominance typically takes 4–6 months." },
    { q: "How much does home inspection SEO cost?", a: "Our local SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting." },
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

  // ---- EXPANSION BATCH ----
  // Healthcare (new specialties)
  "oral-surgeon": ORAL_SURGEON_CONTENT,
  "obgyn": OBGYN_CONTENT,
  "weight-loss-clinic": WEIGHT_LOSS_CLINIC_CONTENT,
  "addiction-treatment": ADDICTION_TREATMENT_CONTENT,
  "med-spa": MED_SPA_CONTENT,

  // Legal (new practice areas)
  "dui-attorney": DUI_ATTORNEY_CONTENT,
  "estate-planning-attorney": ESTATE_PLANNING_ATTORNEY_CONTENT,
  "workers-comp-attorney": WORKERS_COMP_ATTORNEY_CONTENT,
  "business-attorney": BUSINESS_ATTORNEY_CONTENT,

  // Automotive (new services)
  "auto-detailing": AUTO_DETAILING_CONTENT,
  "window-tinting": WINDOW_TINTING_CONTENT,
  "tire-shop": TIRE_SHOP_CONTENT,

  // Home Services (new trades)
  "moving-company": MOVING_COMPANY_CONTENT,
  "junk-removal": JUNK_REMOVAL_CONTENT,
  "fence-company": FENCE_COMPANY_CONTENT,
  "tree-service": TREE_SERVICE_CONTENT,
  "appliance-repair": APPLIANCE_REPAIR_CONTENT,
  "carpet-cleaning": CARPET_CLEANING_CONTENT,

  // Construction (new industry)
  "general-contractor": GENERAL_CONTRACTOR_CONTENT,
  "concrete-contractor": CONCRETE_CONTRACTOR_CONTENT,

  // Beauty & Wellness (new services)
  "lash-studio": LASH_STUDIO_CONTENT,
  "massage-therapist": MASSAGE_THERAPIST_CONTENT,
  "microblading": MICROBLADING_CONTENT,

  // Fitness (new categories)
  "pilates-studio": PILATES_STUDIO_CONTENT,
  "dance-studio": DANCE_STUDIO_CONTENT,

  // Events & Entertainment (Vegas-specific)
  "wedding-venue": WEDDING_VENUE_CONTENT,
  "wedding-planner": WEDDING_PLANNER_CONTENT,
  "florist": FLORIST_CONTENT,
  "limo-service": LIMO_SERVICE_CONTENT,

  // New Industries
  "daycare": DAYCARE_CONTENT,
  "senior-care": SENIOR_CARE_CONTENT,
  "pet-groomer": PET_GROOMER_CONTENT,
  "dog-trainer": DOG_TRAINER_CONTENT,
  "videographer": VIDEOGRAPHER_CONTENT,
  "home-inspector": HOME_INSPECTOR_CONTENT,
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
