import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/constants";
import { Heart, Home, Scale, Sparkles, Car, Briefcase, Calendar, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | HuskyTail Digital — Las Vegas SEO",
  description:
    "HuskyTail Digital delivers AI-powered local SEO for Las Vegas businesses across healthcare, home services, legal, beauty, automotive, and more. Find your industry.",
  alternates: { canonical: "https://www.huskytaildigital.com/industries" },
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Home,
  Scale,
  Sparkles,
  Car,
  Briefcase,
  Calendar,
  Users,
};

const DESCRIPTIONS: Record<string, string> = {
  "healthcare-seo": "Dentists, chiropractors, med spas, and every specialty in between — we get healthcare providers found first.",
  "home-services-seo": "Plumbers, electricians, roofers, HVAC, and 20+ trades dominating their local service area.",
  "legal-seo": "Attorneys and law firms that need to rank for high-intent searches before the competition does.",
  "beauty-wellness-seo": "Salons, spas, gyms, and wellness studios turning Google searches into booked appointments.",
  "automotive-seo": "Mechanics, auto body shops, dealerships, and detailers owning their local market.",
  "professional-services-seo": "Accountants, mortgage brokers, realtors, and financial advisors building authority online.",
  "events-entertainment-seo": "Event planners, wedding venues, photographers, and caterers filling their calendars.",
  "family-services-seo": "Daycares, tutors, pet groomers, and dog trainers connecting with Las Vegas families.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      {/* Hero */}
      <section
        className="py-20 md:py-28"
        style={{
          background: "linear-gradient(135deg, #0A2540 0%, #0d3060 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
          >
            Industry-Specific SEO
          </p>
          <h1
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#F8FAFC",
              lineHeight: 1.15,
            }}
          >
            We Know Your Industry.{" "}
            <span style={{ color: "#00D1FF" }}>We Know Las Vegas.</span>
          </h1>
          <p
            className="mt-6 max-w-2xl mx-auto text-lg"
            style={{ color: "rgba(248,250,252,0.75)", fontFamily: "Inter, sans-serif" }}
          >
            Generic SEO doesn't work for local businesses. Every industry has its own search intent,
            competitive landscape, and conversion triggers. We build strategies around yours.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => {
              const Icon = ICON_MAP[industry.icon] ?? Briefcase;
              const desc = DESCRIPTIONS[industry.urlPath] ?? "";
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.urlPath}`}
                  className="group rounded-2xl p-8 flex gap-5 items-start transition-all duration-200 hover:-translate-y-1"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid rgba(10,37,64,0.08)",
                    boxShadow: "0 4px 20px rgba(10,37,64,0.06)",
                  }}
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,209,255,0.1)" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#00D1FF" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2
                      className="mb-1 group-hover:text-[#00D1FF] transition-colors"
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#0A2540",
                      }}
                    >
                      {industry.name}
                    </h2>
                    <p
                      className="text-sm mb-3"
                      style={{ color: "rgba(10,37,64,0.6)", fontFamily: "Inter, sans-serif" }}
                    >
                      {desc}
                    </p>
                    <p
                      className="text-xs font-semibold flex items-center gap-1"
                      style={{ color: "#00D1FF", fontFamily: "Montserrat, sans-serif" }}
                    >
                      View {industry.name} SEO <ArrowRight className="w-3 h-3" />
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ backgroundColor: "#0A2540" }}
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#F8FAFC",
            }}
          >
            Don&apos;t See Your Industry?
          </h2>
          <p
            className="mb-8"
            style={{ color: "rgba(248,250,252,0.7)", fontFamily: "Inter, sans-serif" }}
          >
            We work with any local business in Las Vegas. If you have customers searching for you online, we can help them find you first.
          </p>
          <Link href="/paw-sultation" className="btn-primary text-base px-8 py-4">
            🐾 Get a Free SEO Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
