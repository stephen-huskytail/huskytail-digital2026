import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Stephen Gardner | HuskyTail Digital — Las Vegas SEO Expert",
  description:
    "Meet Stephen Gardner, founder of HuskyTail Digital. Las Vegas AI SEO consultant with a proven track record of ranking local businesses #1 on Google. No fluff. Just results.",
};

const STEPHEN_HEADSHOT = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/stephen-headshot_f381fc79.png";
const EVEREST_SITTING = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-sitting_f142456e.webp";

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Stephen Gardner",
    jobTitle: "AiSEO / GEO Digital Marketing Consultant",
    worksFor: {
      "@type": "Organization",
      name: "HuskyTail Digital Marketing",
      url: "https://huskytaildigital.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
    description:
      "Stephen Gardner is the founder of HuskyTail Digital Marketing, an AI-powered SEO agency serving Las Vegas businesses. He specializes in local SEO, Google Business Profile optimization, and GEO (Generative Engine Optimization).",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16"
        style={{
          background: "linear-gradient(135deg, #0A2540 0%, #0d3060 40%, #0a4080 100%)",
        }}
      >
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
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
                  The Human Behind the Husky
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
                Meet{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Stephen Gardner
                </span>
              </h1>
              <p
                style={{
                  color: "rgba(248,250,252,0.7)",
                  fontSize: "1.125rem",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                AiSEO & GEO Digital Marketing Consultant. Founder of HuskyTail Digital. Las Vegas-based. Pepsi-fueled. Husky-obsessed.
              </p>
              <p
                style={{
                  color: "rgba(248,250,252,0.6)",
                  fontSize: "1rem",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.7,
                }}
              >
                I help Las Vegas businesses get found, get called, and get clients — using AI-powered SEO strategies that actually work in the real world.
              </p>
            </div>
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  border: "2px solid rgba(0,209,255,0.3)",
                  boxShadow: "0 0 60px rgba(0,209,255,0.1)",
                }}
              >
                <Image
                  src={STEPHEN_HEADSHOT}
                  alt="Stephen Gardner — Founder of HuskyTail Digital Marketing"
                  width={480}
                  height={560}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/5" }}
                  unoptimized
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 rounded-2xl px-4 py-3"
                style={{
                  backgroundColor: "#00D1FF",
                  boxShadow: "0 8px 24px rgba(0,209,255,0.4)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "#0A2540",
                  }}
                >
                  Las Vegas, NV
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #E8F4FF 100%)" }}
      >
        <div className="section-container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#0A2540",
                  marginBottom: "1.5rem",
                }}
              >
                The{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  HuskyTail Story
                </span>
              </h2>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1rem",
                  color: "rgba(10,37,64,0.7)",
                  lineHeight: 1.8,
                }}
              >
                <p style={{ marginBottom: "1.25rem" }}>
                  I started HuskyTail Digital because I was tired of watching great Las Vegas businesses get buried on page 3 while inferior competitors dominated the top spots — not because they were better, but because they had better SEO.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  I&apos;ve spent years mastering local SEO, Google Business Profile optimization, and the emerging world of AI-powered search. I&apos;ve seen what works, what doesn&apos;t, and — more importantly — what actually moves the needle for local businesses.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  The name HuskyTail comes from my Siberian Husky, Everest. She&apos;s the spirit of this brand — fierce, loyal, relentless, and always leading the pack. That&apos;s exactly how I approach every client&apos;s SEO strategy.
                </p>
                <p>
                  My philosophy is simple: <strong style={{ color: "#0A2540" }}>Clarity over complexity. Strategy first, execution follows. Authenticity beats algorithms.</strong>
                </p>
              </div>
            </div>
            <div>
              <div
                className="rounded-3xl overflow-hidden mb-6"
                style={{
                  border: "1px solid rgba(165,216,255,0.3)",
                  boxShadow: "0 8px 32px rgba(10,37,64,0.08)",
                }}
              >
                <Image
                  src={EVEREST_SITTING}
                  alt="Everest the Husky — HuskyTail Digital mascot"
                  width={480}
                  height={480}
                  className="w-full object-cover"
                  unoptimized
                />
              </div>
              <div
                className="rounded-2xl p-5 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(0,209,255,0.05) 0%, rgba(165,216,255,0.1) 100%)",
                  border: "1px solid rgba(0,209,255,0.2)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#0A2540",
                    marginBottom: "0.25rem",
                  }}
                >
                  Meet Everest 🐾
                </p>
                <p
                  style={{
                    color: "rgba(10,37,64,0.6)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                  }}
                >
                  Chief Inspiration Officer & Brand Mascot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0d3060 100%)" }}
      >
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#F8FAFC",
                marginBottom: "1rem",
              }}
            >
              What I Believe In
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Clarity Over Complexity",
                desc: "SEO doesn't have to be a black box. I explain exactly what I'm doing, why I'm doing it, and what results to expect.",
              },
              {
                icon: "🧠",
                title: "Strategy First",
                desc: "Tactics without strategy are just noise. Every campaign starts with a clear plan built around your specific market and goals.",
              },
              {
                icon: "🤝",
                title: "Authenticity Beats Algorithms",
                desc: "Google rewards businesses that are genuinely the best answer for a search. I help you become that answer — authentically.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(0,209,255,0.1)" }}
                >
                  <span style={{ fontSize: "1.75rem" }}>{value.icon}</span>
                </div>
                <h3
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#F8FAFC",
                    marginBottom: "0.75rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    color: "rgba(248,250,252,0.6)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hearts for Huskies */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #E8F4FF 100%)" }}
      >
        <div className="section-container max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(255,100,100,0.1)" }}
          >
            <span style={{ fontSize: "2rem" }}>❤️</span>
          </div>
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#0A2540",
              marginBottom: "1rem",
            }}
          >
            Hearts for Huskies
          </h2>
          <p
            style={{
              color: "rgba(10,37,64,0.7)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            A portion of every HuskyTail Digital client engagement goes toward Husky rescue organizations. Everest was rescued, and giving back to the dogs who need it most is a core part of who we are. When you invest in your business with HuskyTail Digital, you&apos;re also investing in a dog who needs a second chance.
          </p>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              backgroundColor: "rgba(255,100,100,0.08)",
              border: "1px solid rgba(255,100,100,0.2)",
            }}
          >
            <span style={{ fontSize: "1rem" }}>🐾</span>
            <span
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "#cc3333",
              }}
            >
              Proud supporter of Husky rescue
            </span>
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
            Ready to Work Together?
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
            Let&apos;s have a real conversation about your business, your goals, and exactly how I can help you dominate Las Vegas search.
          </p>
          <Link href="/paw-sultation" className="btn-gold px-10 py-4 text-base">
            🐾 Book a Free Paw-sultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
