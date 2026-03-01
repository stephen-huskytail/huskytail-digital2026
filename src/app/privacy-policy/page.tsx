import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | HuskyTail Digital Marketing",
  description: "Privacy Policy for HuskyTail Digital Marketing. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[var(--desktop-nav-height)] min-h-screen bg-deep-navy text-husky-white">
        <div className="section-container py-16">
          <h1 className="font-orbitron font-bold text-3xl md:text-4xl text-husky-white mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none font-inter">
            <div id="termageddon-privacy-policy"></div>
          </div>
        </div>
      </main>
      <Footer />
      <Script src="https://app.termageddon.com/js/termageddon.js" strategy="afterInteractive" />
    </>
  );
}
