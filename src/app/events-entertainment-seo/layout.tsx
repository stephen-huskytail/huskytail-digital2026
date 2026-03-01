import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Entertainment SEO Las Vegas | Wedding & Event Vendor SEO",
  description: "SEO for event planners, wedding vendors, photographers, caterers, and entertainment businesses in Las Vegas, NV. Rank on Google and get more bookings. Free audit.",
  alternates: {
    canonical: "https://huskytaildigital.com/events-entertainment-seo",
  },
  openGraph: {
    title: "Events & Entertainment SEO Las Vegas | Wedding & Event Vendor SEO | HuskyTail Digital",
    description: "SEO for event planners, wedding vendors, photographers, caterers, and entertainment businesses in Las Vegas, NV. Rank on Google and get more bookings. Free audit.",
    url: "https://huskytaildigital.com/events-entertainment-seo",
    type: "website",
  },
};

export default function EventsEntertainmentSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
