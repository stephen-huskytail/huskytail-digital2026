import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Services SEO Las Vegas | Contractor & Trades SEO",
  description: "SEO for home service contractors in Las Vegas, NV. Plumbers, roofers, HVAC, electricians, landscapers, and more — rank on Google, get more calls, and fill your schedule. Free audit.",
  alternates: {
    canonical: "https://huskytaildigital.com/home-services-seo",
  },
  openGraph: {
    title: "Home Services SEO Las Vegas | Contractor & Trades SEO | HuskyTail Digital",
    description: "SEO for home service contractors in Las Vegas, NV. Plumbers, roofers, HVAC, electricians, landscapers, and more — rank on Google, get more calls, and fill your schedule. Free audit.",
    url: "https://huskytaildigital.com/home-services-seo",
    type: "website",
  },
};

export default function HomeServicesSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
