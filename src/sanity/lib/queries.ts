import { groq } from "next-sanity";

// ─── Shared projection fragments ─────────────────────────────────────────────

const authorProjection = groq`
  author->{
    name,
    slug,
    headshot,
    title,
    bio,
    linkedinUrl,
    credentials
  }
`;

const categoryProjection = groq`
  categories[]->{
    title,
    slug,
    description
  }
`;

const articleCardProjection = groq`
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  readTime,
  featured,
  ${categoryProjection},
  ${authorProjection}
`;

// ─── Index page queries ───────────────────────────────────────────────────────

export const allArticlesQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    ${articleCardProjection}
  }
`;

export const articlesByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    ${articleCardProjection}
  }
`;

export const featuredArticleQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0] {
    ${articleCardProjection}
  }
`;

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

// ─── Detail page queries ──────────────────────────────────────────────────────

export const articleBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    ogImage,
    excerpt,
    body,
    publishedAt,
    updatedAt,
    readTime,
    featured,
    metaTitle,
    metaDescription,
    focusKeyword,
    canonicalUrl,
    noIndex,
    faqItems,
    relatedCities,
    relatedIndustries,
    ${categoryProjection},
    ${authorProjection},
    relatedPosts[]->{
      ${articleCardProjection}
    }
  }
`;

export const articleSlugsQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`;

// ─── Cross-linking queries ────────────────────────────────────────────────────

export const articlesByCityQuery = groq`
  *[_type == "post" && $city in relatedCities] | order(publishedAt desc)[0...3] {
    ${articleCardProjection}
  }
`;

export const articlesByIndustryQuery = groq`
  *[_type == "post" && $industry in relatedIndustries] | order(publishedAt desc)[0...3] {
    ${articleCardProjection}
  }
`;

export const articlesByCityAndIndustryQuery = groq`
  *[_type == "post" && $city in relatedCities && $industry in relatedIndustries] | order(publishedAt desc)[0...3] {
    ${articleCardProjection}
  }
`;

// ─── Related articles fallback ────────────────────────────────────────────────

export const relatedArticlesByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current && slug.current != $currentSlug] | order(publishedAt desc)[0...3] {
    ${articleCardProjection}
  }
`;

// ─── Global articles settings ─────────────────────────────────────────────────

export const articlesSettingsQuery = groq`
  *[_type == "articlesSettings"][0] {
    headline,
    subheadline
  }
`;
