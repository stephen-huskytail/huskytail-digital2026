# OG Image Implementation Guide

## Overview

HuskyTail Digital uses **5 static OG image templates** across all page types. Each template features Everest with her correct red/brown and white coloring, pink collar, and cyan glow on dark navy background.

---

## Template URLs (Compressed/WebP)

| Page Type | Template URL | Use For |
|-----------|--------------|---------|
| **Homepage** | `https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-homepage-BWLMf5PXPfKtZuGdXCHsQc.webp` | Homepage social shares |
| **Industry** | `https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-industry-template-NJV9JpfsY2oP2xZL8sUTp7.webp` | Industry parent pages (`/home-services-seo`, `/legal-seo`, etc.) |
| **Niche** | `https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-niche-template-v2-ZXBRzZJJCgr3VxYDveBjxy.webp` | Niche parent pages (`/plumber-seo`, `/dentist-seo`, etc.) and niche-city pages |
| **Blog** | `https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-blog-template-9p9TBP5qZCxuH2j3pF9ccY.webp` | Blog posts |
| **Core Pages** | `https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-core-pages-QgiMCvv8dd94p9f8VcWEvk.webp` | About, Why We Wag, Results, Pricing, Contact, etc. |

---

## Implementation Pattern

### For Static Pages (About, Pricing, etc.)

```typescript
// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Stephen Gardner | HuskyTail Digital",
  description: "Meet Stephen Gardner, founder of HuskyTail Digital...",
  openGraph: {
    title: "About HuskyTail Digital",
    description: "Meet the team behind Las Vegas's top SEO agency.",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-core-pages-QgiMCvv8dd94p9f8VcWEvk.webp",
        width: 1200,
        height: 630,
        alt: "HuskyTail Digital — Las Vegas SEO Agency",
      },
    ],
  },
};

export default function About() {
  return <div>About page content</div>;
}
```

### For Dynamic Pages (Industry, Niche, Blog)

**Step 1: Add displayName to your data structure**

```typescript
// src/lib/constants.ts (example)
export const INDUSTRIES = [
  {
    slug: "home-services",
    name: "Home Services",
    displayName: "Home Services SEO", // ← Short name for OG image
    description: "...",
  },
  {
    slug: "legal",
    name: "Legal Services",
    displayName: "Legal SEO", // ← Fits nicely on OG image
    description: "...",
  },
];
```

**Step 2: Reference displayName in metadata**

```typescript
// src/app/[industry]-seo/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = INDUSTRIES.find(i => i.slug === params.industry);
  
  return {
    title: `${industry.name} SEO Services | Las Vegas | HuskyTail Digital`,
    description: `${industry.name} SEO specialists in Las Vegas...`,
    openGraph: {
      title: `${industry.displayName} | HuskyTail Digital`,
      description: `AI-powered ${industry.displayName.toLowerCase()} for Las Vegas businesses.`,
      images: [
        {
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-industry-template-NJV9JpfsY2oP2xZL8sUTp7.webp",
          width: 1200,
          height: 630,
          alt: `${industry.displayName} | HuskyTail Digital`,
        },
      ],
    },
  };
}
```

---

## Key Notes

- **Static templates**: No dynamic text rendering. The OG images are pre-designed and don't change per page.
- **displayName field**: Use short, concise names (2–4 words max) that fit nicely on the template. Examples:
  - ✅ "Plumber SEO" (fits)
  - ✅ "Legal SEO" (fits)
  - ✅ "Dental SEO" (fits)
  - ❌ "Professional Liability Insurance SEO" (too long)
  - → Use "Insurance SEO" instead
- **Full title in `<title>` tag**: The page's HTML `<title>` tag still contains the full, SEO-optimized title. The displayName is only for the OG image.
- **Consistency**: All OG images feature Everest with the same styling, so social shares look cohesive across the entire site.

---

## Current Implementation Status

- ✅ Homepage: Wired to homepage template
- ✅ Niche-city pages: Wired to niche template
- ⏳ Industry pages: Ready to wire when built
- ⏳ Niche parent pages: Ready to wire when built
- ⏳ Blog posts: Ready to wire when built
- ⏳ Core pages: Ready to wire when built

---

## Testing

To verify OG images are working:

1. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/sharing/
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

Paste your page URL and verify the OG image, title, and description appear correctly.
