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
          <div className="prose prose-invert max-w-none font-inter">
            <div
              id="policy"
              data-policy-key="T0U1UmVFZ3djVFZ0Y0RSVE5XYzlQUT09"
              data-extra="h-align=left&table-style=accordion"
            ></div>
          </div>
        </div>
      </main>
      <Footer />
      <Script src="https://app.termageddon.com/js/termageddon.js" strategy="afterInteractive" />
    </>
  );
}
