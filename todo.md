# HuskyTail Digital — Project TODO

---

## ✅ Phase 1 Complete (Built)

- [x] Next.js 15 App Router project with TypeScript, Tailwind CSS 4, shadcn/ui v2
- [x] Homepage: hero video, services, how-it-works, testimonials, pricing tiers, city coverage grid, CTAs
- [x] 12 Las Vegas Valley city SEO pages at `/{city}-seo`
- [x] Core pages: About, Pricing, Results, Why We Wag, Paw-sultation booking, Everest page
- [x] Service pages: 3 main service pages at `/services/[slug]`
- [x] 4 sample niche-city pages: `/plumber-seo-las-vegas`, `/plumber-seo-henderson`, `/dentist-seo-las-vegas`, `/dentist-seo-henderson`
- [x] Close CRM API integration (server-side)
- [x] PWA manifest, service worker, custom offline page
- [x] LocalBusiness + WebSite schema markup
- [x] Sitemap and robots.txt auto-generated
- [x] Real CDN assets: Everest's 3 photos, Stephen's headshot, hero video
- [x] FAQPage schema on niche-city pages
- [x] All CTAs wired to `/paw-sultation`

---

## 🔄 Niche-City Template Improvements (In Progress)

- [x] Everest sitting photo in hero (two-column layout, text left / Everest right)
- [x] H1 controlled line break: `{niche} SEO in` / `{city}, NV` on separate lines, single H1 tag
- [x] Credibility bridge below hero copy linking up to niche parent page (`/{niche}-seo`)
- [x] Stats bar label fix: "Implants & More" replaces multi-line procedure list
- [x] Remove niche SVG icon from stats bar
- [ ] Audit and approve template on all 4 sample pages before scaling
- [x] Add 30-Day Satisfaction Review text block above final CTA
- [x] Add BreadcrumbList JSON-LD schema to niche-city pages
- [x] Strengthen internal links: related services, /pricing, /results on niche-city pages
- [x] Update Everest image alt text to be keyword-aware
- [x] Upgrade city sibling links to visual location cards (city name, niche, small visual)
- [x] Add credible urgency line to final CTA ("Currently accepting 3 new clients in [city] this month")
- [x] Fix pricing across entire site: $197/mo (Standard) and $497/mo (Pro)
- [x] Add Everest mid-page quote block with mid-leap illustration
- [x] Generate Everest mid-leap AI illustration (ice-blue aura, transparent PNG)

---

## 📐 Architecture Decisions (Locked)

- [ ] Niche-city pages: fully static + ISR (revalidate: 600s), template-driven, `generateStaticParams`
- [ ] 200-word unique city-specific intro per niche-city page (content production required)
- [ ] Sanity CMS: blog posts, case studies, results, author bios, media timeline, testimonials/reviews
- [ ] Niche-city pages: NO Sanity — template in code, global changes via redeploy

---

## 🏗️ Phase 2 — Niche-City Scale (Next)

- [ ] Build 8 industry parent pages (`/home-services-seo`, `/legal-seo`, `/healthcare-seo`, etc.)
- [ ] Build 12 niche parent pages (`/plumber-seo`, `/dentist-seo`, `/lawyer-seo`, etc.) with case study, reviews, process sections
- [ ] Scale niche-city pages to full 960+ combinations (8 industries × 12 niches × 12 cities)
- [ ] Write 200-word unique city-specific intros for all niche-city pages
- [ ] Fix sibling city links (currently link to pages that don't exist yet — fix after pages are built)

---

## 📝 Sanity CMS Integration

- [ ] Set up Sanity project and Studio
- [ ] Schema: `Post` (title, slug, body, author, categories, city tags, meta title/desc, featured image + alt, publishedAt)
- [ ] Schema: `CaseStudy` (client type, city, niche, result stats, before/after, testimonial quote)
- [ ] Schema: `Review` (clientName, businessType, city, stars 1–5, reviewText, source, date, featured, nicheTag[])
- [ ] Schema: `Author` (name, photo, bio, link to /about)
- [ ] Schema: `MediaItem` (type, outlet, date, link, description) — for media timeline
- [ ] Schema: `RecommendedTool` (name, url, description, category, affiliate link)
- [ ] Wire GROQ queries in Next.js for blog, case studies, reviews
- [ ] ISR webhook revalidation on Sanity publish
- [ ] Draft mode / live preview for editorial content
- [ ] Refactor homepage testimonial section to pull from Sanity `Review` schema
- [ ] Niche parent pages: pull filtered reviews by `nicheTag` via GROQ

---

## ⭐ Google Reviews Integration

- [ ] **Sanity `Review` schema** — curated review cards (client name, business type, city, stars, text, source, date, nicheTag[])
- [ ] **Homepage** — refactor hardcoded testimonials to pull from Sanity; add placeholder slot for live Google Reviews widget
- [ ] **Niche parent pages** — pull industry-filtered reviews via GROQ `nicheTag` filter
- [ ] **Live Google Reviews widget** — implement when GBP is verified; decide between:
  - Elfsight embed (fast, third-party, no API approval needed)
  - Direct Google Business Profile API (cleaner, requires Google OAuth approval)
- [ ] **Placement plan:**
  - Homepage hero/footer: live Google Reviews widget
  - Niche parent pages: Sanity curated cards (industry-filtered)
  - Service pages: Sanity curated cards (service-specific)
  - Pricing page: mix of both (overcome objection at decision point)

---

## 🎨 Design & UX (Planned)

- [ ] Framer Motion page transitions and skeleton screens
- [ ] AI-illustrated Everest mascot poses: mid-leap hero, sticky scroll element, footer sleeping pose, mobile tail-wag button
- [ ] Trust badges: Google Reviews widget, 30-Day Satisfaction Review section
- [ ] Mobile bottom navigation — 5 icons: Home (paw), Services (map), Cities (pin), Industries (briefcase), Pricing (dollar)
- [ ] Chatbot bubble "Chat with Everest?" — requires AI backend, conversation flow, geo-detection (build after core pages are solid)

---

## 📄 Remaining Pages to Build

- [ ] Blog architecture (index + post template, powered by Sanity)
- [ ] Free SEO Tools page
- [ ] Case Studies index + individual case study pages (powered by Sanity)
- [ ] Recommended Tools page (powered by Sanity)
- [ ] Media page / press timeline (powered by Sanity)
- [ ] Contact page
- [ ] `/results` page with real client data (powered by Sanity)

---

## 🔧 Integrations & Config (Pending)

- [ ] Wire real GTM container ID (currently placeholder `GTM-XXXXXX`) — Stephen to provide
- [ ] Wire Cal.com booking URL on `/paw-sultation` page — Stephen to provide
- [ ] Google Business Profile verification (required for live reviews API)
- [ ] Sanity project credentials (API key, project ID, dataset)

---

## 🚀 Pre-Launch Checklist

- [ ] Lighthouse score 95+ on mobile and desktop
- [ ] Core Web Vitals passing
- [ ] All 960+ niche-city pages indexed and crawlable
- [ ] Sitemap submitted to Google Search Console
- [ ] Schema markup validated (Rich Results Test)
- [ ] GTM + GA4 firing correctly
- [ ] Close CRM lead capture tested end-to-end
- [ ] PWA install prompt working on mobile
- [ ] Cloudflare DNS-only mode confirmed (no proxy)

## 🐛 Bugs (Reported)

- [x] Redesign /paw-sultation: two-column layout, Calendly above fold, eliminate scroll
- [x] Add Everest mid-leap image to paw-sultation left column (Option A)
- [x] Create /paw-sultation/confirmed celebration page with Everest (Option C)
- [x] Fix breadcrumb alignment on niche-city pages
- [x] Fix nav menu alignment sitewide
- [ ] Fix Everest image display on niche-city pages
- [ ] Fix FAQ accordion toggle on niche-city pages (currently static, needs open/close)
- [ ] Fix pricing sitewide: $197/mo Standard, $497/mo Pro (confirmed)

- [ ] Nav alignment off sitewide — nav links not properly centered/spaced in header bar
- [ ] Dropdown menus transparent/unreadable — "Cities We Serve" text invisible against hero background
- [ ] Dropdown hover too sensitive — submenu disappears when mouse moves slightly off trigger
- [x] Hydration error on niche-city pages — React SSR/client mismatch (likely `typeof window` or unstable reference)
- [x] Nav dropdown transparency fixed — fully opaque bg-[#0A1628]
- [x] Nav dropdown hover sensitivity fixed — 150ms delay + invisible bridge
- [x] Everest on credibility/stats line — make larger, use real red/white sitting photo (not the hero image)
- [x] Breadcrumb alignment off on niche-city pages
- [x] Nav menu items still left-shifted — not properly centered between logo and CTA
- [x] FAQ section on niche-city pages — convert to accordion
- [x] Fix Paw-sultation page: remove audit form content, make it Cal.com booking page with placeholder embed
- [x] Build /free-audit page: short lead capture form (name, email, website, city, niche) wired to Close CRM
- [x] Update all CTAs sitewide: "Book Paw-sultation" → /paw-sultation | "Get Free Audit" → /free-audit
- [x] Niche-city page changes not rendering in browser — ISR disabled (revalidate=0) for dev, re-enable at launch
- [x] Build /free-audit page: lead capture form (name, email, website, city, niche) wired to Close CRM
- [x] Fix email on Paw-sultation page: Stephen@huskytaildigital.com (capital S)
- [x] Audit all page CTAs sitewide — ensure "Book Paw-sultation" → /paw-sultation and "Free Audit" → /free-audit
- [ ] Set correct ISR revalidate values at launch: niche-city=86400, homepage=3600, pricing=3600, about=false
- [x] Embed Calendly inline widget on /paw-sultation page — https://calendly.com/stephen-huskytaildigital/30min
- [ ] Confirm Calendly → Close CRM native integration is active
- [x] Fix breadcrumb background to match hero gradient (left side matches but right side doesn't blend)
- [x] Add Step 1 / Step 2 / Step 3 "How It Works" process section to niche-city landing page template
- [x] Switch from Cal.com to Calendly for booking (integrates natively with Close CRM)
- [x] Create homepage og-image.jpg (1200x630px)
- [x] Create niche-city OG template image (1200x630px)
- [x] Add notFound import to niche-city page
- [x] Add AggregateRating schema to niche-city pages
- [x] Fix "dentists businesses" → "dental businesses" copy in Step 2
- [x] Add social proof (star rating + review count) above the fold in hero
- [ ] Add sticky mobile CTA bar (above mobile bottom nav)
- [x] Verify FAQ answers 2-4 are rendering correctly for dentist niche
- [x] Wire niche-city pages to use dynamic OG image
- [x] Add phone number (702) 786-1309 to schema

## 🎫 OG Image Strategy (Complete)

- [x] Optimize mobile top bar CTA: tap size increased to min 44px, contrast verified, always-visible
- [x] Create OG image templates for all page types:
  - [x] Homepage OG image (Everest with correct red/brown + white coloring)
  - [x] Industry parent pages template (e.g., `/home-services-seo`)
  - [x] Niche parent pages template (e.g., `/plumber-seo`)
  - [x] Blog post template
  - [x] Core pages template (About, Why We Wag, Results, Pricing, etc.)
- [x] Wire OG images into metadata for homepage and niche-city pages
- [ ] Wire OG images into metadata for industry, niche parent, blog, and core pages (when those pages are built)
- [ ] Test social sharing on all major platforms (Twitter, LinkedIn, Facebook)


## 📝 Messaging Patterns (Remember for All Pages)

- **Urgency line**: Use "Currently accepting 3 new partner clients in [CITY] this month" — signals selectivity + relationship-focused, avoids implying competing businesses work together
- When building industry/niche/blog pages, apply this same pattern to avoid competitor concerns

## 🔗 Pricing Tiers (Updated)

- [x] Add Enterprise tier with "Quote Required" CTA (no fixed price)
- [x] Enterprise features: unlimited cities, dedicated account manager, custom strategy, priority support, unlimited backlinks, advanced analytics, quarterly reviews, API access
