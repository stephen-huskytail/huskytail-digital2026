import type { Metadata, Viewport } from "next";
import { Inter, Orbitron, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "HuskyTail Digital | Las Vegas SEO & AI Marketing Agency",
    template: "%s | HuskyTail Digital",
  },
  description:
    "Las Vegas's top-rated AI-powered SEO agency. HuskyTail Digital helps local businesses dominate Google Maps, rank #1, and convert more leads. No contracts. No fluff. Just results.",
  keywords: [
    "Las Vegas SEO",
    "local SEO Las Vegas",
    "AI SEO agency Las Vegas",
    "Google Maps optimization Las Vegas",
    "Henderson SEO",
    "Summerlin SEO",
    "GEO optimization Las Vegas",
    "HuskyTail Digital",
    "Stephen Gardner SEO",
  ],
  authors: [{ name: "Stephen Gardner", url: "https://huskytaildigital.com/about" }],
  creator: "Stephen Gardner",
  publisher: "HuskyTail Digital Marketing",
  metadataBase: new URL("https://huskytaildigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huskytaildigital.com",
    siteName: "HuskyTail Digital",
    title: "HuskyTail Digital | Las Vegas SEO & AI Marketing Agency",
    description:
      "AI-powered local SEO for Las Vegas businesses. Rank higher, get found, convert more.",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-homepage-BWLMf5PXPfKtZuGdXCHsQc.webp",
        width: 1200,
        height: 630,
        alt: "HuskyTail Digital Marketing — Las Vegas SEO Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HuskyTail Digital | Las Vegas SEO & AI Marketing",
    description: "AI-powered local SEO for Las Vegas businesses. No contracts. Just results.",
    images: ["https://d2xsxph8kpxj0f.cloudfront.net/310419663030307747/NnNepTYrVhxN4PqR3Vk26S/og-image-homepage-BWLMf5PXPfKtZuGdXCHsQc.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "HuskyTail",
  },
  alternates: {
    canonical: "https://huskytaildigital.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#A5D8FF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A2540" },
  ],
};

// Organization + LocalBusiness schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://huskytaildigital.com/#organization",
  name: "HuskyTail Digital Marketing",
  alternateName: "HuskyTail Digital",
  url: "https://huskytaildigital.com",
  logo: "https://huskytaildigital.com/icons/icon-512.png",
  image: "https://huskytaildigital.com/og-image.jpg",
  description:
    "AI-powered local SEO agency in Las Vegas, NV. Specializing in Google Maps optimization, GEO, and local search domination for Las Vegas businesses.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10120 W Flamingo Rd Ste 4-1166",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
    postalCode: "89147",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.1163938,
    longitude: -115.3136191,
  },
  hasMap: "https://maps.app.goo.gl/huskytaildigital",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "21",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    { "@type": "City", name: "Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Henderson", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Summerlin", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "North Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Paradise", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Spring Valley", containedInPlace: { "@type": "State", name: "Nevada" } },
  ],
  priceRange: "$$",
  email: "everest@huskytaildigital.com",
  telephone: "+17027861309",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Stephen Gardner",
    jobTitle: "AiSEO / GEO Digital Marketing Consultant",
    url: "https://huskytaildigital.com/about",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO",
          description: "Complete local SEO strategy for Las Vegas businesses",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Rank Boost",
          description: "AI-powered keyword strategy and content optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Maps Domination",
          description: "Google Business Profile optimization and Maps 3-Pack ranking",
        },
      },
    ],
  },
  sameAs: [
    "https://www.google.com/maps/place/HuskyTail+Digital+Marketing/@36.1163938,-115.3136191,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8bf3e01c452f9:0x6348e3e318fdcb59!8m2!3d36.1163938!4d-115.3136191!16s%2Fg%2F11x30wkpv9",
    "https://www.linkedin.com/company/huskytail-digital",
    "https://www.facebook.com/huskytaildigital",
  ],
};

// Website schema with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://huskytaildigital.com/#website",
  url: "https://huskytaildigital.com",
  name: "HuskyTail Digital",
  description: "AI-powered local SEO agency for Las Vegas businesses",
  publisher: { "@id": "https://huskytaildigital.com/#organization" },
  inLanguage: "en-US",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* GTM — replace GTM-XXXXXX with your actual container ID */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXX');`,
          }}
        />
        {/* PWA service worker registration */}
        <Script
          id="sw-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(reg) { console.log('[SW] Registered:', reg.scope); },
                    function(err) { console.log('[SW] Registration failed:', err); }
                  );
                });
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
