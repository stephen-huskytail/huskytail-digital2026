// ─── Sanity shared types ──────────────────────────────────────────────────────

export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

// ─── Author ───────────────────────────────────────────────────────────────────

export interface SanityAuthor {
  name: string;
  slug: SanitySlug;
  headshot?: SanityImage;
  title?: string;
  bio?: string;
  linkedinUrl?: string;
  credentials?: string[];
}

// ─── Category ─────────────────────────────────────────────────────────────────

export interface SanityCategory {
  _id: string;
  title: string;
  slug: SanitySlug;
  description?: string;
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

export interface FaqItem {
  _key: string;
  question: string;
  answer: string;
}

// ─── Article Card (used in index, cross-linking, related) ────────────────────

export interface ArticleCard {
  _id: string;
  title: string;
  slug: SanitySlug;
  mainImage?: SanityImage;
  excerpt?: string;
  publishedAt?: string;
  readTime?: number;
  featured?: boolean;
  categories?: SanityCategory[];
  author?: SanityAuthor;
}

// ─── Full Article (detail page) ───────────────────────────────────────────────

export interface SanityArticle extends ArticleCard {
  ogImage?: SanityImage;
  body?: any[]; // Portable Text blocks
  updatedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  faqItems?: FaqItem[];
  relatedCities?: string[];
  relatedIndustries?: string[];
  relatedPosts?: ArticleCard[];
}

// ─── Articles Settings ────────────────────────────────────────────────────────

export interface ArticlesSettings {
  headline?: string;
  subheadline?: string;
}
