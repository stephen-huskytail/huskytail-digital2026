import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const EVEREST_LEAP = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/everest-mid-leap-v2-LkVUzVyqddX8JgNZHz8xJx.webp";

export const metadata: Metadata = {
  title: "You're Booked! | HuskyTail Digital",
  description: "Your Paw-sultation is confirmed. Stephen will see you soon — Everest is already sniffing out your competition.",
  robots: { index: false, follow: false },
};

export default function PawSultationConfirmedPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0A1628] flex items-center justify-center px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">

          {/* Everest celebrating */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-[#c8a84b]/10 blur-3xl scale-110" />
            <Image
              src={EVEREST_LEAP}
              alt="Everest the Husky celebrating your SEO consultation booking — HuskyTail Digital Marketing, Las Vegas"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(200,168,75,0.6)]"
              sizes="256px"
              priority
            />
          </div>

          {/* Headline */}
          <div className="inline-flex items-center gap-2 bg-[#c8a84b]/10 border border-[#c8a84b]/30 text-[#c8a84b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            🐾 Paws Up — You&apos;re Booked!
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            See you on the call,{" "}
            <span className="text-[#c8a84b]">let&apos;s get to work.</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-4 max-w-lg mx-auto">
            Your Paw-sultation is confirmed. Check your email for the calendar invite and Zoom link.
          </p>

          {/* Everest quote */}
          <p className="text-gray-400 text-base italic mb-10 max-w-md mx-auto">
            &ldquo;I&apos;m already sniffing out your competition. Stephen will have the receipts ready.&rdquo;
          </p>

          {/* What to expect */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left mb-10">
            <h2 className="text-white font-bold text-lg mb-5 text-center">What happens next</h2>
            <div className="space-y-5">
              {[
                {
                  icon: "📧",
                  title: "Check your inbox",
                  desc: "A calendar invite and Zoom link are on their way. Check your spam folder if you don't see it within a few minutes.",
                },
                {
                  icon: "🔍",
                  title: "Stephen preps your audit",
                  desc: "Before the call, Stephen reviews your Google Business Profile, current rankings, and top 3 competitors. You'll see real data — not a generic slide deck.",
                },
                {
                  icon: "🐾",
                  title: "Show up, that's it",
                  desc: "No homework required. Just show up ready to talk about your business. The call is 30 minutes, focused, and zero pressure.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#c8a84b] hover:bg-[#b09038] text-black font-bold px-8 py-4 rounded-lg transition-colors"
            >
              🐾 Back to Home
            </Link>
            <Link
              href="/free-seo-tools"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#c8a84b] text-white hover:text-[#c8a84b] font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Explore Free SEO Tools →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
