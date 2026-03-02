import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal SEO Las Vegas | Law Firm SEO Nevada",
  description: "SEO for law firms and attorneys in Las Vegas, NV. Personal injury, criminal defense, family law, DUI, and more — rank on Google and get more consultation calls. Free audit.",
  alternates: {
    canonical: "https://huskytaildigital.com/legal-seo",
  },
  openGraph: {
    title: "Legal SEO Las Vegas | Law Firm SEO Nevada | HuskyTail Digital",
    description: "SEO for law firms and attorneys in Las Vegas, NV. Personal injury, criminal defense, family law, DUI, and more — rank on Google and get more consultation calls. Free audit.",
    url: "https://huskytaildigital.com/legal-seo",
    type: "website",
  },
};

export default function LegalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
