import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { TESTIMONIALS, TRUST_STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | HuskyTail Digital Las Vegas SEO",
  description:
    "Real results from real Las Vegas businesses. See how HuskyTail Digital has helped local businesses rank #1 on Google Maps, increase calls, and grow revenue.",
};

export default function ResultsPage() {
  const caseStudies = [
    {
      client: "Henderson Family Law",
      industry: "Legal",
      city: "Henderson, NV",
      challenge: "Buried on page 3 for all primary keywords. Google Business Profile incomplete. Zero reviews strategy.",
      solution: "Full GBP optimization, review generation campaign, local citation building, and AI-powered content strategy targeting Henderson family law keywords.",
      results: [
        { metric: "Google Maps Ranking", before: "Not in 3-Pack", after: "#1 in 3-Pack" },
        { metric: "Monthly Calls", before: "12/month", after: "47/month" },
        { metric: "Organic Traffic", before: "Baseline", after: "+312%" },
        { metric: "Time to Results", before: "—", after: "58 days" },
      ],
      quote: "We went from page 3 to the Google Maps 3-Pack in 60 days. The phone hasn't stopped ringing.",
      author: "Maria R.",
    },
    {
      client: "Vegas Plumbing Pros",
      industry: "Home Services",
      city: "Las Vegas, NV",
      challenge: "Competing against large national franchises with massive budgets. Local visibility was nearly zero.",
      solution: "Hyper-local neighborhood targeting, Google Maps optimization, emergency service keyword strategy, and competitor gap analysis.",
      results: [
        { metric: "Google Maps Ranking", before: "Page 2", after: "#1 in 3-Pack" },
        { metric: "Emergency Calls", before: "3/week", after: "18/week" },
        { metric: "Revenue Increase", before: "Baseline", after: "+$8,400/mo" },
        { metric: "Time to Results", before: "—", after: "72 days" },
      ],
      quote: "I was skeptical about SEO, but HuskyTail Digital proved me wrong. Worth every penny.",
      author: "Carlos M.",
    },
    {
      client: "Summerlin Med Spa",
      industry: "Healthcare / Beauty",
      city: "Summerlin, NV",
      challenge: "New business with no online presence competing against established med spas with years of reviews.",
      solution: "New GBP setup, aggressive review strategy, AI content for high-value treatment keywords, and local link building.",
      results: [
        { metric: "Google Maps Ranking", before: "Not Listed", after: "Top 3" },
        { metric: "Booking Requests", before: "0/month", after: "34/month" },
        { metric: "Keyword Rankings", before: "0 keywords", after: "47 page-1 keywords" },
        { metric: "Time to Results", before: "—", after: "90 days" },
      ],
      quote: "Starting from zero is scary. HuskyTail made it feel manageable — and the results came faster than I expected.",
      author: "Dr. Amanda K.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
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
              📊 Real Results. Real Businesses.
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
            The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Proof
            </span>{" "}
            Is in the Rankings
          </h1>
          <p
            style={{
              color: "rgba(248,250,252,0.7)",
              fontSize: "1.125rem",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.7,
              maxWidth: "40rem",
              margin: "0 auto",
            }}
          >
            No stock photos. No made-up numbers. Real Las Vegas businesses, real results, real timelines.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-12"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #E8F4FF 100%)" }}
      >
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    background: "linear-gradient(135deg, #0A2540, #00D1FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <p
                  style={{
                    color: "rgba(10,37,64,0.6)",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                    fontSize: "0.8125rem",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="section-container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#0A2540",
              }}
            >
              Case Studies
            </h2>
          </div>
          <div className="space-y-10">
            {caseStudies.map((study) => (
              <div
                key={study.client}
                className="rounded-3xl overflow-hidden"
                style={{
                  border: "1px solid rgba(165,216,255,0.3)",
                  boxShadow: "0 8px 32px rgba(10,37,64,0.06)",
                }}
              >
                {/* Header */}
                <div
                  className="p-6"
                  style={{
                    background: "linear-gradient(135deg, #0A2540 0%, #0d3060 100%)",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        color: "#F8FAFC",
                      }}
                    >
                      {study.client}
                    </h3>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: "rgba(0,209,255,0.15)",
                        color: "#00D1FF",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {study.industry}
                    </span>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        color: "rgba(248,250,252,0.6)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      📍 {study.city}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 bg-white">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          color: "#00D1FF",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          marginBottom: "0.5rem",
                        }}
                      >
                        The Challenge
                      </p>
                      <p
                        style={{
                          color: "rgba(10,37,64,0.7)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          color: "#00D1FF",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Our Solution
                      </p>
                      <p
                        style={{
                          color: "rgba(10,37,64,0.7)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {study.results.map((result) => (
                      <div
                        key={result.metric}
                        className="rounded-xl p-4 text-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(0,209,255,0.05) 0%, rgba(165,216,255,0.1) 100%)",
                          border: "1px solid rgba(0,209,255,0.15)",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 600,
                            fontSize: "0.6875rem",
                            color: "rgba(10,37,64,0.5)",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {result.metric}
                        </p>
                        <p
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.75rem",
                            color: "rgba(10,37,64,0.4)",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {result.before}
                        </p>
                        <p
                          style={{
                            fontFamily: "Orbitron, sans-serif",
                            fontWeight: 700,
                            fontSize: "0.9375rem",
                            color: "#0A2540",
                          }}
                        >
                          {result.after}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="rounded-2xl p-5"
                    style={{
                      backgroundColor: "rgba(10,37,64,0.03)",
                      borderLeft: "3px solid #00D1FF",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "1rem",
                        color: "#0A2540",
                        fontStyle: "italic",
                        lineHeight: 1.7,
                        marginBottom: "0.5rem",
                      }}
                    >
                      &ldquo;{study.quote}&rdquo;
                    </p>
                    <p
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "rgba(10,37,64,0.5)",
                      }}
                    >
                      — {study.author}, {study.client}
                    </p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0d3060 100%)" }}
      >
        <div className="section-container max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#F8FAFC",
              }}
            >
              What Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl flex flex-col"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#FFD700", fontSize: "1rem" }}>★</span>
                  ))}
                </div>
                <p
                  style={{
                    color: "rgba(248,250,252,0.8)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    flex: 1,
                    marginBottom: "1rem",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color: "#F8FAFC",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8125rem",
                      color: "rgba(248,250,252,0.4)",
                    }}
                  >
                    {t.business} · {t.city}
                  </p>
                </div>
              </div>
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
            Your Business Could Be the Next Case Study
          </h2>
          <p
            style={{
              color: "rgba(10,37,64,0.7)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.125rem",
              maxWidth: "36rem",
              margin: "0 auto 2rem",
            }}
          >
            Start with a free audit. We&apos;ll show you exactly what&apos;s holding you back and what it will take to get you to the top.
          </p>
          <Link href="/free-audit" className="btn-gold px-10 py-4 text-base">
            🐾 Book My Free Audit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
