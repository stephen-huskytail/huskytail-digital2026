import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTAPair from "@/components/ui/CTAPair";

export const metadata: Metadata = {
  title: "Why We Wag | HuskyTail Digital — What Makes Us Different",
  description:
    "Why do Las Vegas businesses choose HuskyTail Digital? No contracts, AI-powered strategy, hyper-local expertise, and a team that genuinely cares about your results.",
};

export default function WhyWeWagPage() {
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
              🐾 Our Differentiators
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
            Why We{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Wag
            </span>
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
            There are hundreds of SEO agencies in Las Vegas. Here&apos;s why the ones who do their homework choose HuskyTail Digital.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #E8F4FF 100%)" }}
      >
        <div className="section-container max-w-5xl mx-auto">
          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "We're AI-First — Not AI-Curious",
                desc: "Most agencies are still figuring out how to use AI. We built our entire workflow around it. AI keyword clustering, AI content strategy, GEO optimization for AI-powered search engines like ChatGPT, Perplexity, and Google's AI Overviews — this is our core competency, not a buzzword we slap on a proposal.",
                highlight: "AI isn't a feature. It's the foundation.",
              },
              {
                number: "02",
                title: "No Contracts — Ever",
                desc: "We operate month-to-month because we believe in earning your business every single month. If you're not seeing results, you shouldn't be locked into a 12-month contract. This keeps us accountable and keeps you in control.",
                highlight: "Your confidence in us should be earned, not contractually obligated.",
              },
              {
                number: "03",
                title: "Hyper-Local Las Vegas Expertise",
                desc: "We don't serve 47 cities across 12 states. We know Las Vegas — the neighborhoods, the competition, the search behavior, the seasonal patterns. This depth of local knowledge is what separates a generic agency from a strategic partner.",
                highlight: "We know your market because it's our market.",
              },
              {
                number: "04",
                title: "Radical Transparency",
                desc: "You'll never wonder what we're doing or whether it's working. Monthly reports show exactly what we did, what moved, and what's coming next. No vanity metrics. No fluff. Just the numbers that matter to your business.",
                highlight: "Clarity is a service, not a bonus.",
              },
              {
                number: "05",
                title: "Strategy Before Tactics",
                desc: "Too many agencies jump straight to execution without a plan. We start with a deep understanding of your market, your competition, and your goals — then we build a strategy that makes every tactic count.",
                highlight: "Tactics without strategy are just expensive noise.",
              },
              {
                number: "06",
                title: "We Actually Pick Up the Phone",
                desc: "You'll have direct access to your strategist — not a rotating cast of account managers reading from a script. When you have a question, you get an answer from the person doing the work.",
                highlight: "Real communication. Real accountability.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="grid md:grid-cols-12 gap-6 items-start p-8 rounded-3xl"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(165,216,255,0.3)",
                  boxShadow: "0 4px 24px rgba(10,37,64,0.06)",
                }}
              >
                <div className="md:col-span-1">
                  <span
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 900,
                      fontSize: "2rem",
                      background: "linear-gradient(135deg, #00D1FF, #A5D8FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.number}
                  </span>
                </div>
                <div className="md:col-span-11">
                  <h3
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#0A2540",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(10,37,64,0.7)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {item.desc}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                    style={{
                      backgroundColor: "rgba(0,209,255,0.08)",
                      border: "1px solid rgba(0,209,255,0.2)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8125rem",
                        color: "#0A2540",
                        fontStyle: "italic",
                      }}
                    >
                      &ldquo;{item.highlight}&rdquo;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0d3060 100%)" }}
      >
        <div className="section-container text-center">
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#F8FAFC",
              marginBottom: "1rem",
            }}
          >
            Ready to Work With an Agency That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Actually Delivers?
            </span>
          </h2>
          <p
            style={{
              color: "rgba(248,250,252,0.7)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.125rem",
              maxWidth: "36rem",
              margin: "0 auto 2rem",
            }}
          >
            Start with a free audit. No commitment. No credit card. Just a clear picture of where you stand and how to get to the top.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAPair className="justify-center" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
