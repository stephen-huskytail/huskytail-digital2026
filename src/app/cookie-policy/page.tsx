import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | HuskyTail Digital Marketing",
  description: "Cookie Policy for HuskyTail Digital Marketing. Learn about how we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[var(--desktop-nav-height)] min-h-screen bg-deep-navy text-husky-white">
        <div className="section-container py-16">
          <div className="prose prose-invert max-w-none font-inter">
            <div
              id="policy"
              data-policy-key="T0U5cWRXOWtRbkJ0YVZBNWFsRTlQUT09"
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
