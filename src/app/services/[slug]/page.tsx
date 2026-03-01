import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} Las Vegas | HuskyTail Digital`,
    description: `${service.description} Serving Las Vegas, Henderson, Summerlin & the entire Las Vegas Valley. No contracts. Free audit.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceIcons: Record<string, string> = {
    "local-seo": "📍",
    "ai-seo": "⚡",
    "google-business-profile": "🗺️",
  };

  const icon = serviceIcons[service.slug] || "🔍";

  const faqs = [
    {
      q: `How long does ${service.name} take to show results?`,
      a: "Most clients see measurable improvements in rankings and traffic within 60–90 days. Local SEO compounds over time — the longer you invest, the stronger your position becomes.",
    },
    {
      q: `Do I need a contract for ${service.name}?`,
      a: "No contracts, ever. We operate month-to-month because we believe in earning your business every single month. If you're not seeing results, you shouldn't be locked in.",
    },
    {
      q: `How is HuskyTail's ${service.name} different from other agencies?`,
      a: "We combine AI-powered tools with genuine local expertise. We know the Las Vegas market — the neighborhoods, the competition, the search behavior. That local intelligence is what separates us from generic agencies.",
    },
    {
      q: `What does ${service.name} cost?`,
      a: "Our packages start at $197/month. Every plan is tailored to your business size, competition level, and goals. Start with a free audit to get a clear picture of what you need.",
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
        className="relative pt-24 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A2540 0%, #0d3060 40%, #0a4080 100%)",
        }}
      >
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(0,209,255,0.1)", border: "1px solid rgba(0,209,255,0.2)" }}
            >
              <span style={{ fontSize: "2.5rem" }}>{icon}</span>
            </div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
              style={{ backgroundColor: "rgba(0,209,255,0.1)", border: "1px solid rgba(0,209,255,0.3)" }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}>
                Las Vegas {service.name}
              </span>
            </div>
            <h1
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#F8FAFC",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              {service.name} That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Actually Works
              </span>
            </h1>
            <p
              style={{
                color: "rgba(248,250,252,0.7)",
                fontSize: "1.125rem",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              {service.description} Built for Las Vegas businesses that are serious about growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit" className="btn-primary px-8 py-4">
                🐾 Get Your Free {service.name} Audit
              </Link>
              <Link href="/pricing" className="btn-secondary px-8 py-4">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #E8F4FF 100%)" }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#0A2540",
                marginBottom: "1rem",
              }}
            >
              Everything Included in Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {service.name} Package
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="card-glass p-5 flex items-start gap-4"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(0,209,255,0.1)" }}
                >
                  <span style={{ color: "#00D1FF", fontSize: "1rem" }}>✓</span>
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9375rem",
                    color: "#0A2540",
                    lineHeight: 1.5,
                  }}
                >
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
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
              Why Las Vegas Businesses Need{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {service.name}
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: "93%",
                label: "of local searches never scroll past page 1",
                desc: "If you're not on page 1, you're invisible to almost every potential customer.",
              },
              {
                stat: "76%",
                label: "of local mobile searches result in a store visit",
                desc: "Las Vegas customers are searching on their phones — right now. Are they finding you?",
              },
              {
                stat: "28%",
                label: "of local searches result in a purchase",
                desc: "Local search intent is high. People who find you are ready to buy.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="text-center p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 900,
                    fontSize: "3rem",
                    background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.stat}
                </div>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    color: "#F8FAFC",
                    fontSize: "0.875rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    color: "rgba(248,250,252,0.5)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8125rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
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
                marginBottom: "1rem",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-glass p-6">
                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#0A2540",
                    marginBottom: "0.75rem",
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    color: "rgba(10,37,64,0.7)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#00D1FF" }}
      >
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
            Ready to Dominate Las Vegas Search?
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
            Start with a free {service.name} audit. No commitment. No credit card. Just a clear picture of where you stand and how to get to the top.
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
