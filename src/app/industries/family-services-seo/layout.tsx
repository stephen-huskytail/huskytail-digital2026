import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Services SEO Las Vegas | Childcare, Pet & Education SEO",
  description: "SEO for daycares, tutoring centers, pet groomers, dog trainers, and driving schools in Las Vegas, NV. Rank on Google and get more families through your door. Free audit.",
  alternates: {
    canonical: "https://huskytaildigital.com/family-services-seo",
  },
  openGraph: {
    title: "Family Services SEO Las Vegas | Childcare, Pet & Education SEO | HuskyTail Digital",
    description: "SEO for daycares, tutoring centers, pet groomers, dog trainers, and driving schools in Las Vegas, NV. Rank on Google and get more families through your door. Free audit.",
    url: "https://huskytaildigital.com/family-services-seo",
    type: "website",
  },
};

export default function FamilyServicesSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
