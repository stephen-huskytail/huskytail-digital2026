import { defineField, defineType } from "sanity";

export const articlesSettingsSchema = defineType({
  name: "articlesSettings",
  title: "Articles Settings",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Index Page Headline",
      type: "string",
      description: "Main headline on the /articles index page.",
      initialValue: "The HuskyTail Blog",
    }),
    defineField({
      name: "subheadline",
      title: "Index Page Subheadline",
      type: "text",
      rows: 2,
      description: "Subheadline below the main headline on the /articles index page.",
      initialValue: "Local SEO strategy, GEO insights, and technical tips for Las Vegas businesses that want to rank.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Articles Settings" };
    },
  },
});
