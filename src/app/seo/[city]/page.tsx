import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTAPair from "@/components/ui/CTAPair";
import { CITIES, SERVICES } from "@/lib/constants";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) return {};

  return {
    title: `SEO Agency ${city.name} NV | HuskyTail Digital`,
    description: `Top-rated SEO agency in ${city.name}, NV. HuskyTail Digital helps ${city.name} businesses rank #1 on Google Maps and dominate local search. Free audit. No contracts.`,
    openGraph: {
      title: `${city.name} SEO Agency | HuskyTail Digital`,
      description: `AI-powered local SEO for ${city.name} businesses. Get found, get calls, get clients.`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HuskyTail Digital Marketing",
    description: `AI-powered SEO agency serving ${city.name}, NV`,
    url: `https://huskytaildigital.com/seo/${city.slug}`,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Nevada" },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  };

  const faqs = [
    {
      q: `Do you offer SEO services in ${city.name}, NV?`,
      a: `Yes. HuskyTail Digital serves ${city.name} and the entire Las Vegas Valley. We specialize in local SEO for ${city.name} businesses looking to dominate Google Maps and organic search.`,
    },
    {
      q: `How much does SEO cost for a ${city.name} business?`,
      a: `Our ${city.name} SEO packages start at $197/month with no contracts. We offer a free audit so you know exactly what you're getting before you invest a dollar.`,
    },
    {
      q: `How long before my ${city.name} business ranks on Google?`,
      a: `Most ${city.name} clients see measurable ranking improvements within 60–90 days. Highly competitive niches may take 4–6 months to reach page 1, but the results compound over time.`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
              style={{
                backgroundColor: "rgba(0,209,255,0.1)",
                border: "1px solid rgba(0,209,255,0.3)",
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}>
                📍 {city.name}, Nevada
              </span>
            </div>
            <h1
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
                color: "#F8FAFC",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              {city.name} SEO Agency That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Delivers Results
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
              HuskyTail Digital helps {city.name} businesses rank higher on Google, dominate Google Maps, and convert more local searches into paying customers. No contracts. No fluff. Just results.
            </p>
            <CTAPair className="justify-center" />
          </div>
        </div>
      </section>

      {/* Services for this city */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #E8F4FF 100%)" }}
      >
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
              SEO Services for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {city.name} Businesses
              </span>
            </h2>
            <p
              style={{
                color: "rgba(10,37,64,0.6)",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                maxWidth: "36rem",
                margin: "0 auto",
              }}
            >
              Every service is tailored to the {city.name} market — your local competition, your local customers, your local growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div key={service.slug} className="card-glass p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(0,209,255,0.1)" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>
                    {["📍", "⚡", "🗺️"][i]}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "#0A2540",
                    marginBottom: "0.75rem",
                  }}
                >
                  {service.name}
                </h3>
                <p
                  style={{
                    color: "rgba(10,37,64,0.6)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  style={{
                    color: "#00D1FF",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Proof */}
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
              Why {city.name} Businesses Choose{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                HuskyTail Digital
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎯",
                title: "Hyper-Local Targeting",
                desc: `We don't just target "Las Vegas" — we target ${city.name} specifically, including your neighborhood, zip codes, and the exact search terms your customers use.`,
              },
              {
                icon: "🤖",
                title: "AI-Powered Strategy",
                desc: `We use cutting-edge AI tools to analyze your ${city.name} competition, identify ranking opportunities, and build a strategy that outperforms generic agencies.`,
              },
              {
                icon: "📊",
                title: "Transparent Reporting",
                desc: `Monthly reports that show exactly what we did, what moved, and what's coming next. No vanity metrics — just the numbers that matter to your ${city.name} business.`,
              },
              {
                icon: "🤝",
                title: "No Contracts, Ever",
                desc: `We earn your business every single month. If you're not seeing results, you shouldn't be locked in. That's our commitment to every ${city.name} client.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(0,209,255,0.1)" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#F8FAFC",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(248,250,252,0.6)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
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
              }}
            >
              {city.name} SEO — Common Questions
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

      {/* Other Cities */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #E8F4FF 100%)" }}
      >
        <div className="section-container">
          <div className="text-center mb-8">
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#0A2540",
              }}
            >
              Also Serving the Las Vegas Valley
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {CITIES.filter((c) => c.slug !== citySlug).map((c) => (
              <Link
                key={c.slug}
                href={`/seo/${c.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  backgroundColor: "white",
                  border: "1px solid rgba(165,216,255,0.4)",
                  borderRadius: "9999px",
                  padding: "0.5rem 1rem",
                  fontSize: "0.8125rem",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500,
                  color: "#0A2540",
                  textDecoration: "none",
                }}
              >
                📍 {c.name}
              </Link>
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
            Ready to Dominate {city.name} Search?
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
            Get a free {city.name} SEO audit. We&apos;ll show you exactly where you rank, who&apos;s beating you, and how to fix it.
          </p>
          <CTAPair className="justify-center" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
