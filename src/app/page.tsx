import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { HoverCard, HoverLink } from "@/components/ui/HoverCard";
import { SERVICES, PRICING_TIERS, TRUST_STATS, TESTIMONIALS, INDUSTRIES, CITIES, ASSETS } from "@/lib/constants";
import { MapPin, Zap, Map, type LucideIcon } from "lucide-react";
import CTAPair from "@/components/ui/CTAPair";

const ICON_MAP: Record<string, LucideIcon> = {
  MapPin,
  Zap,
  Map,
};

export const metadata: Metadata = {
  title: "HuskyTail Digital | #1 Las Vegas SEO & AI Marketing Agency",
  description:
    "Las Vegas's top-rated AI-powered SEO agency. HuskyTail Digital helps local businesses dominate Google Maps, rank #1, and convert more leads. No contracts. No fluff. Just results.",
};

const INDUSTRY_ICONS: Record<string, string> = {
  healthcare: "🏥",
  "home-services": "🔧",
  legal: "⚖️",
  "beauty-wellness": "💅",
  automotive: "🚗",
  "professional-services": "💼",
  "events-entertainment": "🎉",
  "family-services": "👨‍👩‍👧",
};

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <Navigation />

      {/* ── HERO — Full-bleed background video ─────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ background: "#0A2540", overflow: "clip" }}
      >
        {/* Full-bleed background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/hero-keyframe-1-FT4gZYJAp2E5YFjFb36wV4.webp"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/hero-video_39265c9c.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,37,64,0.90) 0%, rgba(10,37,64,0.75) 55%, rgba(10,37,64,0.50) 100%)",
          }}
        />

        {/* Content overlaid on video */}
        <div className="section-container relative z-10 py-32 md:py-44">
          <div className="max-w-3xl">
            {/* Live badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                backgroundColor: "rgba(0,209,255,0.15)",
                border: "1px solid rgba(0,209,255,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#00D1FF" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
              >
                #1 AI-Powered SEO in Las Vegas
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                color: "#F8FAFC",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                textShadow: "0 2px 24px rgba(0,0,0,0.6)",
              }}
            >
              Stop Hiding on{" "}<span
                style={{
                  background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  whiteSpace: "nowrap",
                }}
              >Page 3.</span>
              <br />
              Start Owning{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  whiteSpace: "nowrap",
                }}
              >
                Page 1.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                color: "rgba(248,250,252,0.88)",
                fontSize: "1.2rem",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "38rem",
                textShadow: "0 1px 10px rgba(0,0,0,0.5)",
              }}
            >
              HuskyTail Digital uses AI-powered SEO to put Las Vegas businesses
              at the top of Google — and keep them there. No contracts. No fluff.
              Just results that make your phone ring.
            </p>

            {/* CTAs */}
            <CTAPair className="mb-10" />

            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    { initials: "MR", bg: "rgba(0,209,255,0.25)" },
                    { initials: "CL", bg: "rgba(255,215,0,0.2)" },
                    { initials: "JT", bg: "rgba(0,209,255,0.25)" },
                    { initials: "DM", bg: "rgba(255,215,0,0.2)" },
                  ].map((a) => (
                    <div
                      key={a.initials}
                      className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: a.bg,
                        borderColor: "rgba(0,209,255,0.6)",
                        color: "#F8FAFC",
                        backdropFilter: "blur(4px)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {a.initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm" style={{ color: "#FFD700" }}>★★★★★</div>
                  <p className="text-xs" style={{ color: "rgba(248,250,252,0.7)", fontFamily: "Inter, sans-serif" }}>
                    247+ Las Vegas businesses ranked
                  </p>
                </div>
              </div>
              <div
                className="rounded-xl px-4 py-2"
                style={{
                  backgroundColor: "rgba(255,215,0,0.15)",
                  border: "1px solid rgba(255,215,0,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, color: "#FFD700", fontSize: "1.25rem" }}>94%</p>
                <p style={{ color: "rgba(248,250,252,0.7)", fontSize: "0.7rem", fontFamily: "Montserrat, sans-serif" }}>Client Retention</p>
              </div>
              <div
                className="rounded-xl px-4 py-2"
                style={{
                  backgroundColor: "rgba(0,209,255,0.15)",
                  border: "1px solid rgba(0,209,255,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, color: "#00D1FF", fontSize: "1.25rem" }}>3.2x</p>
                <p style={{ color: "rgba(248,250,252,0.7)", fontSize: "0.7rem", fontFamily: "Montserrat, sans-serif" }}>Avg. ROI Boost</p>
              </div>
            </div>
          </div>
        </div>

        {/* Everest floating card — bottom right corner */}
        <div
          className="absolute bottom-8 right-8 hidden lg:block rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: "180px",
            border: "2px solid rgba(0,209,255,0.4)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(0,209,255,0.2)",
          }}
        >
          <Image
            src={ASSETS.everestRock}
            alt="Everest the Husky — HuskyTail Digital Mascot"
            width={180}
            height={220}
            className="w-full h-auto object-cover"
            priority
          />
          <div
            className="px-3 py-2"
            style={{ backgroundColor: "rgba(10,37,64,0.95)", backdropFilter: "blur(8px)" }}
          >
            <p style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 700, color: "#F8FAFC", fontSize: "0.7rem" }}>Everest 🐾</p>
            <p style={{ color: "rgba(0,209,255,0.9)", fontSize: "0.65rem", fontFamily: "Inter, sans-serif" }}>Chief Distraction Officer</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p style={{ color: "rgba(248,250,252,0.5)", fontSize: "0.7rem", fontFamily: "Montserrat, sans-serif", letterSpacing: "0.1em" }}>SCROLL</p>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(0,209,255,0.6), transparent)" }} />
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="section-container">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
            >
              What We Do
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#0A2540",
              }}
            >
              SEO That Actually Works in Las Vegas
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto"
              style={{ color: "rgba(10,37,64,0.6)", fontFamily: "Inter, sans-serif", fontSize: "1.05rem" }}
            >
              We combine AI precision with local market knowledge to get your business found — and chosen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <HoverCard key={service.slug} href={`/services/${service.slug}`}>
                <div
                  className="rounded-2xl p-8 h-full transition-all duration-300"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid rgba(10,37,64,0.08)",
                    boxShadow: "0 4px 20px rgba(10,37,64,0.06)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(0,209,255,0.1)" }}
                  >
                    {(() => { const IconComp = ICON_MAP[service.icon]; return IconComp ? <IconComp className="w-7 h-7" style={{ color: "#00D1FF" }} /> : null; })()}
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#0A2540",
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="mb-6"
                    style={{ color: "rgba(10,37,64,0.6)", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", lineHeight: 1.6 }}
                  >
                    {service.description}
                  </p>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
                  >
                    Learn More →
                  </span>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#0A2540" }}
      >
        <div className="section-container">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
            >
              The Process
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#F8FAFC",
              }}
            >
              From Invisible to Unstoppable
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free Paw-sultation", desc: "We audit your current SEO, identify the gaps, and map out exactly what it'll take to rank #1 in your market." },
              { step: "02", title: "Strategy Sprint", desc: "We build your custom AI-powered SEO blueprint — keywords, content, citations, and a 90-day roadmap." },
              { step: "03", title: "Execute & Dominate", desc: "We get to work. On-page optimization, local citations, Google Business Profile, and AI content that ranks." },
              { step: "04", title: "Report & Scale", desc: "Monthly reports with real numbers. Rankings, calls, clicks. Then we scale what's working." },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(165,216,255,0.05)",
                  border: "1px solid rgba(165,216,255,0.1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    color: "rgba(0,209,255,0.2)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {item.step}
                </p>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#F8FAFC",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "rgba(165,216,255,0.7)", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="section-container">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
            >
              Who We Serve
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#0A2540",
              }}
            >
              Built for Las Vegas Businesses
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <HoverLink key={industry.slug} href={`/${industry.urlPath}`}>
                <div
                  className="rounded-xl p-6 text-center transition-all duration-200"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid rgba(10,37,64,0.08)",
                    boxShadow: "0 2px 12px rgba(10,37,64,0.05)",
                  }}
                >
                  <div className="text-3xl mb-3">{INDUSTRY_ICONS[industry.slug] || "🏢"}</div>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#0A2540",
                    }}
                  >
                    {industry.name}
                  </p>
                </div>
              </HoverLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#0A2540" }}
      >
        <div className="section-container">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
            >
              Real Results
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#F8FAFC",
              }}
            >
              What Las Vegas Businesses Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(165,216,255,0.05)",
                  border: "1px solid rgba(165,216,255,0.1)",
                }}
              >
                <div className="text-sm mb-4" style={{ color: "#FFD700" }}>★★★★★</div>
                <p
                  className="mb-6"
                  style={{
                    color: "rgba(248,250,252,0.85)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#F8FAFC", fontSize: "0.9rem" }}>
                    {t.name}
                  </p>
                  <p style={{ color: "rgba(0,209,255,0.8)", fontSize: "0.8rem", fontFamily: "Inter, sans-serif" }}>
                    {t.business} · {t.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="section-container">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
            >
              Transparent Pricing
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#0A2540",
              }}
            >
              No Surprises. No Contracts.
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto"
              style={{ color: "rgba(10,37,64,0.6)", fontFamily: "Inter, sans-serif" }}
            >
              Flat monthly rates. Cancel anytime. Every plan includes a free SEO audit.
            </p>
          </div>

          {/* Standard + Pro — 2 column */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {PRICING_TIERS.filter((t) => t.name !== "Enterprise").map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl p-8 relative"
                style={{
                  backgroundColor: tier.popular ? "#0A2540" : "#fff",
                  border: tier.popular ? "2px solid #00D1FF" : "1px solid rgba(10,37,64,0.08)",
                  boxShadow: tier.popular ? "0 20px 40px rgba(0,209,255,0.2)" : "0 4px 20px rgba(10,37,64,0.06)",
                }}
              >
                {tier.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: "#00D1FF", color: "#0A2540", fontFamily: "Montserrat, sans-serif" }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: tier.popular ? "#F8FAFC" : "#0A2540",
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    color: tier.popular ? "#00D1FF" : "#0A2540",
                  }}
                >
                  ${tier.price}
                  <span style={{ fontSize: "1rem", color: tier.popular ? "rgba(165,216,255,0.6)" : "rgba(10,37,64,0.4)" }}>/mo</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span style={{ color: "#00D1FF" }}>✓</span>
                      <span style={{ color: tier.popular ? "rgba(248,250,252,0.8)" : "rgba(10,37,64,0.7)", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/paw-sultation"
                  className={tier.popular ? "btn-primary w-full text-center block" : "btn-secondary w-full text-center block"}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Enterprise — custom quote banner */}
          <div
            className="mt-6 max-w-3xl mx-auto rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              backgroundColor: "rgba(10,37,64,0.04)",
              border: "1px solid rgba(10,37,64,0.1)",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#0A2540",
                  marginBottom: "0.25rem",
                }}
              >
                Enterprise
              </h3>
              <p style={{ color: "rgba(10,37,64,0.6)", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                Multi-location, franchise, or agency? We build a custom strategy around your goals.
              </p>
            </div>
            <Link
              href="/pricing"
              className="btn-secondary whitespace-nowrap px-6 py-3"
              style={{ flexShrink: 0 }}
            >
              Get a Custom Quote →
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/pricing"
              style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
            >
              View Full Pricing & Compare Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CITY COVERAGE ─────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ backgroundColor: "#0A2540" }}
      >
        <div className="section-container">
          <p
            className="text-center text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "rgba(165,216,255,0.5)", fontFamily: "Montserrat, sans-serif" }}
          >
            Serving the Entire Las Vegas Valley
          </p>
          <h2
            className="text-center mb-10"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#F8FAFC",
            }}
          >
            Local SEO for Every Corner of Las Vegas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}-seo`}
                className="rounded-xl px-4 py-3 text-sm transition-all duration-200 text-center block"
                style={{
                  backgroundColor: "rgba(165,216,255,0.05)",
                  border: "1px solid rgba(165,216,255,0.15)",
                  color: "rgba(165,216,255,0.8)",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                📍 {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 text-center"
        style={{
          background: "linear-gradient(135deg, #0A2540 0%, #0d3060 50%, #0A2540 100%)",
        }}
      >
        <div className="section-container max-w-3xl">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
          >
            Ready to Rank?
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "#F8FAFC",
            }}
          >
            Your Competitors Are Already on Page 1.
            <br />
            <span style={{ color: "#FFD700" }}>Let&apos;s Put You There Too.</span>
          </h2>
          <p
            className="mb-10"
            style={{
              color: "rgba(165,216,255,0.8)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            Book your free Paw-sultation today. No pressure, no pitch deck, no fluff.
            Just a straight-talking SEO audit and a clear path to more leads.
          </p>
          <CTAPair className="justify-center" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
// Redeploy 1772338313
