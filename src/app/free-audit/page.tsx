"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const NICHES = [
  "Plumber",
  "Dentist",
  "HVAC",
  "Electrician",
  "Attorney / Law Firm",
  "Chiropractor",
  "Med Spa / Aesthetics",
  "Roofing",
  "Landscaping",
  "Real Estate Agent",
  "Veterinarian",
  "Other",
];

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    city: "",
    niche: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: formData.website,
          city: formData.city,
          message: `[FREE AUDIT REQUEST]\nBusiness Type: ${formData.niche}\nCity: ${formData.city}\nWebsite: ${formData.website}\nChallenge: ${formData.challenge}`,
          source: "HuskyTail Digital — Free Audit Form",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email Stephen@huskytaildigital.com directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email Stephen@huskytaildigital.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F8F6F0]">

        {/* Hero */}
        <section className="bg-[#0A1628] pt-28 pb-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#C8A84B] text-sm font-semibold uppercase tracking-widest mb-4">
              🐾 Free · No Call Required · Results in 48 Hours
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Get Your Free<br />
              <span className="text-[#C8A84B]">Local SEO Audit</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Tell us your website and city. We&apos;ll audit your Google Business Profile,
              local rankings, and top competitors — then send you a clear breakdown of
              exactly where you stand and what to fix first.
            </p>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-[#0A1628] text-center mb-10">
              What&apos;s in Your Free Audit
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📍",
                  title: "Google Maps Ranking",
                  desc: "Where you rank for your top 5 keywords in your city — and who's ahead of you.",
                },
                {
                  icon: "📋",
                  title: "GBP Health Check",
                  desc: "Missing categories, photos, hours, and Q&A that are costing you visibility.",
                },
                {
                  icon: "🔍",
                  title: "Competitor Snapshot",
                  desc: "What your top 3 local competitors are doing that you're not.",
                },
                {
                  icon: "✅",
                  title: "Quick-Win List",
                  desc: "The 3 highest-impact changes you can make right now — free to implement.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#F8F6F0] rounded-2xl p-6 border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-[#0A1628] font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-14 px-4 bg-[#F8F6F0]">
          <div className="max-w-2xl mx-auto">

            {submitted ? (
              <div className="bg-[#0A1628] rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">🐾</div>
                <h2 className="text-3xl font-black text-white mb-4">
                  Everest is on it!
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Your audit request is in. Stephen will review your site and send your
                  free audit within 48 hours. Check your inbox at <strong className="text-[#C8A84B]">{formData.email}</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/paw-sultation"
                    className="inline-flex items-center justify-center gap-2 bg-[#C8A84B] hover:bg-[#b8973d] text-[#0A1628] font-bold px-6 py-3 rounded-full transition-colors"
                  >
                    🐾 Book a Paw-sultation Too
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-black text-[#0A1628] mb-2">
                  Request Your Free Audit
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Takes 60 seconds. No credit card. No commitment.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F6F0] text-[#0A1628] text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@yourbusiness.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F6F0] text-[#0A1628] text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                      Business Website <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="website"
                      type="url"
                      required
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourbusiness.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F6F0] text-[#0A1628] text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                    />
                  </div>

                  {/* City + Niche */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                        Your City <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Las Vegas, NV"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F6F0] text-[#0A1628] text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="niche" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="niche"
                        required
                        value={formData.niche}
                        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F6F0] text-[#0A1628] text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                      >
                        <option value="">Select your industry</option>
                        {NICHES.map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Challenge (optional) */}
                  <div>
                    <label htmlFor="challenge" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                      Biggest SEO Challenge{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="challenge"
                      rows={3}
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      placeholder="e.g. We're not showing up on Google Maps at all, or competitors keep outranking us..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F6F0] text-[#0A1628] text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C8A84B] hover:bg-[#b8973d] disabled:opacity-60 text-[#0A1628] font-black text-lg py-4 rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin">🐾</span> Sending to Everest...
                      </>
                    ) : (
                      <>🐾 Send Me My Free Audit</>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    No spam. No sales calls unless you ask. Just your audit.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Trust + Upgrade CTA */}
        <section className="py-14 px-4 bg-[#0A1628]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#C8A84B] font-semibold text-sm uppercase tracking-widest mb-3">
              Ready to move faster?
            </p>
            <h2 className="text-3xl font-black text-white mb-4">
              Skip the Wait — Book a Paw-sultation
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Get your audit live on a 30-minute call with Stephen. You&apos;ll see your
              data in real time and leave with a clear action plan — same day.
            </p>
            <Link
              href="/paw-sultation"
              className="inline-flex items-center gap-2 bg-[#C8A84B] hover:bg-[#b8973d] text-[#0A1628] font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              🐾 Book My Free Paw-sultation
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
