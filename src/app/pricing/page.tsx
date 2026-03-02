import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { PRICING_TIERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO Pricing Las Vegas | HuskyTail Digital — No Contracts",
  description:
    "Transparent SEO pricing for Las Vegas businesses. Plans starting at $197/month. No contracts, no surprises. Free audit included with every plan.",
};

export default function PricingPage() {
  const faqs = [
    {
      q: "Are there any contracts or long-term commitments?",
      a: "Zero contracts. Every plan is month-to-month. We earn your business every single month — if you're not seeing results, you shouldn't be locked in. That's our promise.",
    },
    {
      q: "What's included in the free audit?",
      a: "Your free audit covers your current Google rankings, Google Business Profile health, competitor analysis, citation consistency, and a prioritized action plan. It's a real audit — not a sales pitch dressed up as one.",
    },
    {
      q: "How quickly will I see results?",
      a: "Most clients see measurable improvements in rankings and Google Maps visibility within 60–90 days. SEO compounds over time — the longer you invest, the stronger your position becomes.",
    },
    {
      q: "Can I upgrade or downgrade my plan?",
      a: "Absolutely. You can change your plan at any time. We'll work with you to find the right level of investment for where your business is right now.",
    },
    {
      q: "Do you work with businesses outside Las Vegas?",
      a: "Our primary focus is the Las Vegas Valley — Las Vegas, Henderson, Summerlin, North Las Vegas, and surrounding areas. This hyper-local focus is what makes us effective.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16"
        style={{
          background: "linear-gradient(135deg, #0A2540 0%, #0d3060 40%, #0a4080 100%)",
        }}
      >
        <div className="section-container text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{
              backgroundColor: "rgba(0,209,255,0.1)",
              border: "1px solid rgba(0,209,255,0.3)",
            }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
            >
              Transparent Pricing — No Surprises
            </span>
          </div>
          <h1
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#F8FAFC",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Simple Pricing.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real Results.
            </span>
          </h1>
          <p
            style={{
              color: "rgba(248,250,252,0.8)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.125rem",
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            No contracts. No surprises. Just transparent pricing and results-driven SEO.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #E8F4FF 100%)" }}
      >
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PRICING_TIERS.filter(tier => tier.name !== "Enterprise").map((tier) => (
              <div
                key={tier.name}
                className="relative rounded-3xl p-8 flex flex-col"
                style={{
                  backgroundColor: tier.popular ? "#0A2540" : "white",
                  border: tier.popular
                    ? "2px solid #00D1FF"
                    : "1px solid rgba(165,216,255,0.3)",
                  boxShadow: tier.popular
                    ? "0 0 40px rgba(0,209,255,0.15)"
                    : "0 4px 24px rgba(10,37,64,0.06)",
                }}
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1"
                    style={{
                      backgroundColor: "#00D1FF",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      color: "#0A2540",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ⭐ Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      color: tier.popular ? "#F8FAFC" : "#0A2540",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    style={{
                      color: tier.popular ? "rgba(248,250,252,0.6)" : "rgba(10,37,64,0.6)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        fontWeight: 900,
                        fontSize: "3rem",
                        color: tier.popular ? "#00D1FF" : "#0A2540",
                        lineHeight: 1,
                      }}
                    >
                      ${tier.price}
                    </span>
                    <span
                      style={{
                        color: tier.popular ? "rgba(248,250,252,0.5)" : "rgba(10,37,64,0.5)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.875rem",
                      }}
                    >
                      /{tier.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                        style={{
                          backgroundColor: tier.popular ? "#00D1FF" : "#C8A84B",
                          color: tier.popular ? "#0A2540" : "white",
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          color: tier.popular ? "rgba(248,250,252,0.85)" : "rgba(10,37,64,0.8)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.9375rem",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/paw-sultation"
                  className="block text-center py-3 px-6 rounded-lg font-semibold transition-all"
                  style={{
                    backgroundColor: tier.popular ? "#00D1FF" : "#C8A84B",
                    color: tier.popular ? "#0A2540" : "white",
                    fontFamily: "Montserrat, sans-serif",
                    textDecoration: "none",
                  }}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ backgroundColor: "#0A2540" }}>
        <div className="section-container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#F8FAFC",
                marginBottom: "1rem",
              }}
            >
              HuskyTail vs. The{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Other Guys
              </span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "collapse", borderSpacing: 0, tableLayout: "fixed" }}>
              <thead>
                <tr>
                  <th
                    className="text-left p-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      color: "rgba(248,250,252,0.5)",
                      fontSize: "0.875rem",
                      width: "40%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    className="text-center p-4"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 700,
                      color: "#00D1FF",
                      fontSize: "0.875rem",
                      width: "30%",
                    }}
                  >
                    HuskyTail Digital
                  </th>
                  <th
                    className="text-center p-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      color: "rgba(248,250,252,0.4)",
                      fontSize: "0.875rem",
                      width: "30%",
                    }}
                  >
                    Typical Agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["No Long-Term Contracts", "✅", "❌"],
                  ["AI-Powered Strategy", "✅", "❌"],
                  ["Las Vegas Local Expertise", "✅", "❌"],
                  ["Transparent Monthly Reporting", "✅", "⚠️ Sometimes"],
                  ["Free Audit Before You Buy", "✅", "❌"],
                  ["Dedicated Strategist", "✅", "⚠️ Account Manager"],
                  ["GEO / AI Search Optimization", "✅", "❌"],
                  ["Google Maps 3-Pack Focus", "✅", "⚠️ Sometimes"],
                ].map(([feature, us, them], i) => (
                  <tr
                    key={feature}
                    style={{
                      backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
                    }}
                  >
                    <td
                      className="p-4"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.9rem",
                        color: "white",
                      }}
                    >
                      {feature}
                    </td>
                    <td
                      className="text-center p-4"
                      style={{ fontSize: "1.125rem" }}
                    >
                      {us}
                    </td>
                    <td
                      className="text-center p-4"
                      style={{ fontSize: "1.125rem" }}
                    >
                      {them}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#0A2540",
              }}
            >
              Pricing FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-200 rounded-lg overflow-hidden" style={{ backgroundColor: "white" }}>
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0A2540" }}>
                  {faq.q}
                  <span className="text-xl group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                  <p style={{ color: "rgba(10,37,64,0.7)", fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: "#00D1FF" }}>
        <div className="section-container text-center">
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#0A2540",
              marginBottom: "1rem",
            }}
          >
            Start With a Free Audit — Zero Risk
          </h2>
          <p
            style={{
              color: "rgba(10,37,64,0.7)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.125rem",
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "2rem",
            }}
          >
            No credit card required. No pressure. Just a real audit and a clear action plan.
          </p>
          <Link
            href="/paw-sultation"
            className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
            style={{
              backgroundColor: "#0A2540",
              color: "#00D1FF",
              fontFamily: "Montserrat, sans-serif",
              textDecoration: "none",
            }}
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
