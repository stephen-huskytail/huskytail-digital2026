import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | HuskyTail Digital Marketing",
  description: "Disclaimer for HuskyTail Digital Marketing. Read our disclaimers regarding our services and content.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[var(--desktop-nav-height)] min-h-screen bg-deep-navy text-husky-white">
        <div className="section-container py-16">
          <div className="prose prose-invert max-w-none font-inter">
            <div
              id="policy"
              data-policy-key="ZWpGb1ZrVk5aR1pCV0dFeVVFRTlQUT09"
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
