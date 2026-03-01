import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive SEO Las Vegas | Auto Shop & Dealership SEO",
  description: "SEO for auto repair shops, dealerships, and automotive businesses in Las Vegas, NV. Rank on Google, get more service appointments, and grow your automotive business. Free audit.",
  alternates: {
    canonical: "https://huskytaildigital.com/automotive-seo",
  },
  openGraph: {
    title: "Automotive SEO Las Vegas | Auto Shop & Dealership SEO | HuskyTail Digital",
    description: "SEO for auto repair shops, dealerships, and automotive businesses in Las Vegas, NV. Rank on Google, get more service appointments, and grow your automotive business. Free audit.",
    url: "https://huskytaildigital.com/automotive-seo",
    type: "website",
  },
};

export default function AutomotiveSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
