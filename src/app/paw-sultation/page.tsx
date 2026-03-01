import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const EVEREST_LEAP = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-mid-leap-v2-LkVUzVyqddX8JgNZHz8xJx.webp";

export const metadata: Metadata = {
  title: "Book a Free Paw-sultation | HuskyTail Digital",
  description:
    "Book your free 30-minute Paw-sultation with Stephen at HuskyTail Digital. We'll audit your local visibility, map out your fastest path to the top of Google and AI search results, and hand you a clear action plan.",
  alternates: {
    canonical: "https://huskytaildigital.com/paw-sultation",
  },
};

export default function PawSultationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A1628]">

        {/* Main Section — two-column, full viewport height */}
        <section className="pt-20 min-h-screen px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-80px)] items-stretch">

            {/* LEFT: Copy + Everest + trust signals */}
            <div className="flex flex-col justify-center py-12 lg:py-16 lg:pr-12">
              <p className="text-[#C8A84B] text-xs font-bold uppercase tracking-widest mb-5">
                🐾 Free · 30 Minutes · No Commitment
              </p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Book Your Free<br />
                <span className="text-[#C8A84B]">Paw-sultation</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                A focused 30-minute strategy call with Stephen. We&apos;ll audit your local visibility, map out your fastest path to the top of Google and AI search results, and hand you a clear action plan — no fluff, no pitch deck.
              </p>

              {/* What happens on the call */}
              <div className="space-y-4 mb-10">
                {[
                  { step: "01", title: "Local SEO Snapshot", desc: "See exactly where you rank right now for your most valuable keywords." },
                  { step: "02", title: "Quick-Win Audit", desc: "Stephen identifies the 2–3 highest-impact moves you can make before spending a dollar." },
                  { step: "03", title: "Clear Next Steps", desc: "You leave with a concrete plan — whether you work with us or not." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="text-[#C8A84B] text-2xl font-black shrink-0 w-10">{item.step}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {[
                  "🔒 No commitment",
                  "🚫 No sales scripts",
                  "🐾 Month-to-month",
                  "✅ 30-Day Review",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Everest — Option A */}
              <div className="flex items-end gap-5 border-t border-white/10 pt-8">
                <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
                  <Image
                    src={EVEREST_LEAP}
                    alt="Everest the Husky — HuskyTail Digital Chief Distraction Officer"
                    fill
                    className="object-contain drop-shadow-[0_0_16px_rgba(200,168,75,0.5)]"
                    sizes="128px"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-medium italic leading-relaxed">
                    &ldquo;I&apos;ll be listening in. Don&apos;t worry — I only bark at bad SEO.&rdquo;
                  </p>
                  <p className="text-[#C8A84B] text-xs font-bold mt-1">
                    — Everest, Chief Distraction Officer
                  </p>
                </div>
              </div>

              {/* Fallback CTA for mobile */}
              <div className="mt-8 lg:hidden">
                <p className="text-gray-500 text-sm mb-3">Not ready for a call?</p>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center gap-2 text-[#C8A84B] hover:underline font-semibold text-sm"
                >
                  🐾 Start with the Free Written Audit instead →
                </Link>
              </div>
            </div>

            {/* RIGHT: Calendly widget */}
            <div className="flex flex-col justify-center py-8 lg:py-12 lg:pl-8 lg:border-l lg:border-white/10">
              <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                <div className="px-6 pt-6 pb-2">
                  <h2 className="text-white font-bold text-lg">Pick a time that works for you</h2>
                  <p className="text-gray-400 text-xs mt-1">All times in your local timezone · 30 min · No prep needed</p>
                </div>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/stephen-huskytaildigital/30min?background_color=0d1f3c&text_color=ffffff&primary_color=c8a84b&hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "660px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </div>
            </div>

          </div>
        </section>

        {/* FAQ — compact, below fold */}
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

            {/* Audit alternative — desktop */}
            <div className="mt-12 text-center hidden lg:block">
              <p className="text-gray-500 text-sm mb-3">Not ready for a call?</p>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 text-[#C8A84B] hover:underline font-semibold text-sm"
              >
                🐾 Start with the Free Written Audit instead →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
