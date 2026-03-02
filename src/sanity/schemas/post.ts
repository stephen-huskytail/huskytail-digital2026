import { defineField, defineType } from "sanity";

const CITIES = [
  "Las Vegas", "Henderson", "Summerlin", "Paradise", "Spring Valley",
  "North Las Vegas", "Anthem", "Green Valley", "Boulder City",
  "Mesquite", "Pahrump", "Laughlin",
];

const INDUSTRIES = [
  "Legal", "Healthcare", "Dental", "Home Services", "Beauty & Wellness",
  "Automotive", "Professional Services", "Events & Entertainment", "Family Services",
];

export const postSchema = defineType({
  name: "post",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt Text" }),
        defineField({ name: "caption", type: "string", title: "Caption" }),
      ],
    }),
    defineField({
      name: "ogImage",
      title: "OG Image Override",
      description: "Optional. Overrides the dynamic OG image. Leave blank to auto-generate.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, description: "2-3 sentences. Used in cards and as meta description fallback." }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt Text" }),
            defineField({ name: "caption", type: "string", title: "Caption" }),
          ],
        },
        {
          type: "object",
          name: "statBlock",
          title: "Stat Block",
          fields: [
            defineField({ name: "stat", type: "string", title: "Stat / Number" }),
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "source", type: "string", title: "Source (optional)" }),
          ],
        },
        {
          type: "object",
          name: "summaryBox",
          title: "Summary Box",
          fields: [
            defineField({ name: "headline", type: "string", title: "Headline" }),
            defineField({ name: "content", type: "text", title: "Content" }),
          ],
        },
        {
          type: "object",
          name: "promoCard",
          title: "Promo Card",
          fields: [
            defineField({ name: "headline", type: "string", title: "Headline" }),
            defineField({ name: "body", type: "text", title: "Body Copy" }),
            defineField({ name: "ctaLabel", type: "string", title: "CTA Button Label" }),
            defineField({ name: "ctaUrl", type: "string", title: "CTA URL" }),
          ],
        },
        {
          type: "object",
          name: "sectionDivider",
          title: "Section Divider",
          fields: [
            defineField({ name: "heading", type: "string", title: "Heading" }),
          ],
        },
        {
          type: "object",
          name: "videoEmbed",
          title: "Video Embed",
          fields: [
            defineField({ name: "url", type: "url", title: "YouTube or Vimeo URL" }),
            defineField({ name: "caption", type: "string", title: "Caption (optional)" }),
          ],
        },
      ],
    }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "updatedAt", title: "Updated At", type: "datetime" }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "categories", title: "Categories", type: "array", of: [{ type: "reference", to: [{ type: "category" }] }] }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false, description: "Pin to featured slot on the articles index page." }),
    defineField({ name: "metaTitle", title: "Meta Title", type: "string", description: "SEO title override. Defaults to article title." }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2, description: "Never auto-truncated. Write the full meta description here." }),
    defineField({ name: "focusKeyword", title: "Focus Keyword", type: "string" }),
    defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url", description: "Optional override. Defaults to current page URL." }),
    defineField({ name: "readTime", title: "Read Time (minutes)", type: "number", description: "Auto-calculated from word count. Override here if needed." }),
    defineField({
      name: "relatedPosts",
      title: "Related Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (r) => r.max(3),
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", type: "string", title: "Question" }),
            defineField({ name: "answer", type: "text", title: "Answer" }),
          ],
        },
      ],
    }),
    defineField({ name: "noIndex", title: "No Index", type: "boolean", initialValue: false, description: "Set to true to prevent search engines from indexing this article." }),
    defineField({
      name: "relatedCities",
      title: "Related Cities",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: CITIES.map((c) => ({ title: c, value: c })),
        layout: "tags",
      },
    }),
    defineField({
      name: "relatedIndustries",
      title: "Related Industries",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: INDUSTRIES.map((i) => ({ title: i, value: i })),
        layout: "tags",
      },
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage", subtitle: "publishedAt" },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : "No date",
      };
    },
  },
});
