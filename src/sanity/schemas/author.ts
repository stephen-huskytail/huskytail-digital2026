import { defineField, defineType } from "sanity";

export const authorSchema = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "headshot", title: "Headshot", type: "image", options: { hotspot: true } }),
    defineField({ name: "title", title: "Title", type: "string", description: 'e.g. "Founder & AiSEO Consultant"' }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 3, description: "2-3 sentences." }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "array",
      of: [{ type: "string" }],
      description: 'e.g. ["Google Certified Partner", "20+ Years Experience"]',
    }),
  ],
  preview: {
    select: { title: "name", media: "headshot", subtitle: "title" },
  },
});
