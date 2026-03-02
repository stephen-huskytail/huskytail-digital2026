import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty & Wellness SEO Las Vegas | Salon, Spa & Fitness SEO",
  description: "SEO for salons, spas, gyms, fitness studios, and wellness businesses in Las Vegas, NV. Rank on Google, get more bookings, and grow your beauty or wellness business. Free audit.",
  alternates: {
    canonical: "https://huskytaildigital.com/beauty-wellness-seo",
  },
  openGraph: {
    title: "Beauty & Wellness SEO Las Vegas | Salon, Spa & Fitness SEO | HuskyTail Digital",
    description: "SEO for salons, spas, gyms, fitness studios, and wellness businesses in Las Vegas, NV. Rank on Google, get more bookings, and grow your beauty or wellness business. Free audit.",
    url: "https://huskytaildigital.com/beauty-wellness-seo",
    type: "website",
  },
};

export default function BeautyWellnessSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
