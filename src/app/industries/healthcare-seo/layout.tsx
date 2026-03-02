import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare SEO Las Vegas | Medical Practice SEO",
  description:
    "SEO for healthcare practices in Las Vegas, NV. Dentists, chiropractors, specialists, and medical clinics — we help you rank on Google, fill your schedule, and grow your practice. Free audit.",
  alternates: {
    canonical: "https://huskytaildigital.com/healthcare-seo",
  },
  openGraph: {
    title: "Healthcare SEO Las Vegas | HuskyTail Digital",
    description:
      "More patients. More appointments. More revenue. HuskyTail Digital builds SEO strategies for Las Vegas healthcare providers that actually move the needle.",
    url: "https://huskytaildigital.com/healthcare-seo",
    type: "website",
  },
};

export default function HealthcareSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
