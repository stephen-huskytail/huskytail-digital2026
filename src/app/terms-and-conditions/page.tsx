import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | HuskyTail Digital Marketing",
  description: "Terms and Conditions for HuskyTail Digital Marketing. Read our terms for using our services.",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[var(--desktop-nav-height)] min-h-screen bg-deep-navy text-husky-white">
        <div className="section-container py-16">
          <div className="prose prose-invert max-w-none font-inter">
            <div
              id="policy"
              data-policy-key="TnpndmRsTmpjV0pSYWs1eFMzYzlQUT09"
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
