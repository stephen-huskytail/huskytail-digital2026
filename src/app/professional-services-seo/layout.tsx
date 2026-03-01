import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Services SEO Las Vegas | Finance, Tech & Real Estate SEO",
  description: "SEO for accountants, financial advisors, IT companies, real estate agents, and professional service businesses in Las Vegas, NV. Rank on Google and get more clients. Free audit.",
  alternates: {
    canonical: "https://huskytaildigital.com/professional-services-seo",
  },
  openGraph: {
    title: "Professional Services SEO Las Vegas | Finance, Tech & Real Estate SEO | HuskyTail Digital",
    description: "SEO for accountants, financial advisors, IT companies, real estate agents, and professional service businesses in Las Vegas, NV. Rank on Google and get more clients. Free audit.",
    url: "https://huskytaildigital.com/professional-services-seo",
    type: "website",
  },
};

export default function ProfessionalServicesSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
