"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const INDUSTRIES = [
  "Healthcare",
  "Home Services",
  "Legal",
  "Beauty & Wellness",
  "Automotive",
  "Professional Services",
  "Events & Entertainment",
  "Family Services",
  "Other",
];

export default function PawSultationPage() {
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
          source: "HuskyTail Digital — Paw-sultation Page Audit Form",
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
      <main className="min-h-screen bg-[#0A1628]">

        {/* Page header */}
        <section className="pt-24 pb-10 px-4 text-center">
          <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-widest mb-4">
            🐾 Free · No Commitment · Two Ways to Start
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-4">
            Let&apos;s Figure Out Why<br />
            <span className="text-[#C8A84B]">You&apos;re Not Ranking</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Pick how you want to start.
          </p>
        </section>

        {/* Two-column main section */}
        <section className="pb-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">

            {/* LEFT: Audit Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-widest mb-3">
                Option 1
              </p>
              <h2 className="text-2xl font-black text-white mb-2">
                Request Your Free SEO Audit
              </h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Fill out the form and we&apos;ll deliver your personalized audit within 24 hours.
                No fluff, just a clear picture of where you stand and what it&apos;ll take to rank.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🐾</div>
                  <h3 className="text-xl font-black text-white mb-3">
                    Audit Request Received!
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                    Everest is already sniffing out your competition. Stephen will have your
                    personalized audit in your inbox within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1.5">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@yourbusiness.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Business Website <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="website"
                      type="url"
                      required
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourbusiness.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                    />
                  </div>

                  {/* City + Niche */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-gray-300 mb-1.5">
                        Your City <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Las Vegas, NV"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="niche" className="block text-sm font-semibold text-gray-300 mb-1.5">
                        Business Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="niche"
                        required
                        value={formData.niche}
                        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0d1f3c] text-white text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                      >
                        <option value="">Select your industry</option>
                        {INDUSTRIES.map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Challenge (optional) */}
                  <div>
                    <label htmlFor="challenge" className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Biggest SEO Challenge{" "}
                      <span className="text-gray-500 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="challenge"
                      rows={3}
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      placeholder="e.g. We're not showing up on Google Maps at all, or competitors keep outranking us..."
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C8A84B] hover:bg-[#b8973d] disabled:opacity-60 text-[#0A1628] font-black text-base py-4 rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin">🐾</span> Sending to Everest...
                      </>
                    ) : (
                      <>🐾 Send Me My Free Audit</>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    No spam. No sales calls unless you ask. Just your audit, delivered in 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT: Calendly */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-8 pt-8 pb-2">
                <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-widest mb-3">
                  Option 2
                </p>
                <h2 className="text-2xl font-black text-white mb-2">
                  Book a Call with Stephen
                </h2>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  30 minutes. No pitch deck. No pressure. Just a straight conversation about
                  your rankings and what&apos;s holding you back.
                </p>
              </div>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/stephen-huskytaildigital/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=162233&text_color=ffffff&primary_color=c8a84b"
                style={{ minWidth: "320px", height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#0A0F1E] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-black text-white text-center mb-8">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  q: "Do I need to prepare anything?",
                  a: "Nothing required. Having your Google Business Profile open is helpful — but not necessary.",
                },
                {
                  q: "Is this really free?",
                  a: "Yes. No credit card, no obligation. You leave with actionable insights regardless.",
                },
                {
                  q: "What if I'm not ready to start yet?",
                  a: "That's fine. Many people book months before they're ready to invest — and that's the right move.",
                },
                {
                  q: "How is this different from a sales call?",
                  a: "Stephen does actual audit work on the call. You'll see real data about your business, not a generic pitch.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-bold text-white text-sm mb-2">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
