"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

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

const CALENDLY_URL =
  "https://calendly.com/stephen-huskytaildigital/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=162233&text_color=ffffff&primary_color=c8a84b";

const EVEREST_SRC =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-peeking-rust-kFh6dBnFdmybyA6vk2RDFT.png";

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

  // Fix Calendly not loading on first visit — load script manually and
  // re-init the widget after mount so it works on client-side navigation too.
  useEffect(() => {
    const initCalendly = () => {
      if (typeof window !== "undefined" && (window as any).Calendly) {
        (window as any).Calendly.initInlineWidgets();
      }
    };

    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (existing) {
      // Script already present — just re-init
      initCalendly();
    } else {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initCalendly;
      document.head.appendChild(script);
    }
  }, []);

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
          <p className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4">
            🐾 Free · No Commitment · Two Ways to Start
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-4">
            Let&apos;s Figure Out Why<br />
            <span className="text-[#c8a84b]">You&apos;re Not Ranking</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Pick how you want to start.
          </p>

          {/* Trust bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-400">
            <span>🔒 SSL Secured</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>⚡ Audit Delivered in 24 Hours</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>📅 No Contracts Ever</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>⭐ 94% Client Retention Rate</span>
          </div>
        </section>

        {/* Two-column main section */}
        {/* Extra top padding on the grid row to give Everest room to peek above the card */}
        <section className="pb-12 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT: Audit Form */}
            {/* Outer wrapper: pt-16 for Everest clearance, flex-col so card stretches full height */}
            <div className="pt-16 flex flex-col">
              {/* Card is position:relative — Everest is anchored to THIS element */}
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col flex-1">

                {/* Everest — absolute to the card, top:0 translateY(-50%) straddles the top border */}
                {/* left-[25%] places her left-of-center on the card */}
                <div
                  className="absolute z-10"
                  style={{
                    top: 0,
                    left: "25%",
                    transform: "translate(-50%, -50%)",
                    width: "160px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={EVEREST_SRC}
                    alt="Everest the HuskyTail mascot peeking over the form card"
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </div>

                {/* Caption sits just inside the card top, directly below Everest's paws */}
                {/* pt-10 gives clearance so caption appears below the paw overlap zone */}
                <div className="pt-10 flex flex-col flex-1">
                  <p className="text-center text-xs text-gray-500 italic mb-6">
                    &ldquo;No spam. Just strategy.&rdquo; &mdash; Everest 🐾
                  </p>

                  <p className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-3">
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
                  <form onSubmit={handleSubmit} className="space-y-5 flex flex-col flex-1">
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
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8a84b] focus:ring-1 focus:ring-[#c8a84b] transition-colors"
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
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8a84b] focus:ring-1 focus:ring-[#c8a84b] transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8a84b] focus:ring-1 focus:ring-[#c8a84b] transition-colors"
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
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8a84b] focus:ring-1 focus:ring-[#c8a84b] transition-colors"
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
                          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0d1f3c] text-white text-sm focus:outline-none focus:border-[#c8a84b] focus:ring-1 focus:ring-[#c8a84b] transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#c8a84b] focus:ring-1 focus:ring-[#c8a84b] transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}

                    <div className="mt-auto pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#c8a84b] hover:bg-[#c8a84b] disabled:opacity-60 text-[#0A1628] font-black text-base py-4 rounded-full transition-colors flex items-center justify-center gap-2"
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
                    </div>{/* end mt-auto button wrapper */}
                  </form>
                )}
                </div>{/* end pt-10 content wrapper */}
              </div>{/* end card */}
            </div>{/* end outer pt-16 wrapper */}

            {/* RIGHT: Calendly */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
              <div className="px-8 pt-8 pb-2 shrink-0">
                <p className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-3">
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
                className="calendly-inline-widget flex-1"
                data-url={CALENDLY_URL}
                style={{ minWidth: "320px", minHeight: "600px" }}
              />
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="pt-10 pb-16 px-4 bg-[#0D1B2E] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-black text-white text-center mb-8">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  q: "What happens after I submit the audit request?",
                  a: "We review your business within 24 hours and send you a personalized audit showing exactly where you stand, who\u2019s outranking you, and what it\u2019ll take to get to page 1. No pitch. Just clarity.",
                },
                {
                  q: "How long does the audit take to complete?",
                  a: "Most audits are delivered within 24 hours. We\u2019ll email you directly when it\u2019s ready.",
                },
                {
                  q: "Will I get a sales pitch on the call?",
                  a: "No pitch deck. No pressure. Stephen does actual audit work on the call \u2014 you\u2019ll see real data about your business, not a generic presentation.",
                },
                {
                  q: "Do I need a big budget to work with HuskyTail?",
                  a: "Our plans start at $197/month. The free audit helps us figure out exactly what you need before you spend a dollar. You\u2019ll never be pushed into a plan that doesn\u2019t fit.",
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

        {/* FAQPage schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What happens after I submit the audit request?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We review your business within 24 hours and send you a personalized audit showing exactly where you stand, who\u2019s outranking you, and what it\u2019ll take to get to page 1. No pitch. Just clarity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does the audit take to complete?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most audits are delivered within 24 hours. We\u2019ll email you directly when it\u2019s ready."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will I get a sales pitch on the call?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No pitch deck. No pressure. Stephen does actual audit work on the call \u2014 you\u2019ll see real data about your business, not a generic presentation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a big budget to work with HuskyTail?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our plans start at $197/month. The free audit helps us figure out exactly what you need before you spend a dollar. You\u2019ll never be pushed into a plan that doesn\u2019t fit."
                  }
                }
              ]
            })
          }}
        />

      </main>
      <Footer />
    </>
  );
}
