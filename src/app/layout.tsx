import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { CookieConsent } from "@/components/cookie-consent";
import { site } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ElevateX Digital — Digital Marketing & Web Design Agency, Panipat",
    template: "%s | ElevateX Digital",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "digital marketing agency Panipat",
    "website development Haryana",
    "social media marketing",
    "SEO services India",
    "Meta ads agency",
    "video editing services",
    "business management",
    "ElevateX Digital",
  ],
  authors: [{ name: site.contact.founderName, url: site.contact.website }],
  creator: site.contact.founderName,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "ElevateX Digital — We elevate your brand",
    description: site.description,
    images: [
      {
        url: "/assets/images/hero-glow.jpg",
        width: 1280,
        height: 720,
        alt: "ElevateX Digital — digital marketing and business management studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ElevateX Digital — We elevate your brand",
    description: site.description,
    images: ["/assets/images/hero-glow.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "Digital marketing agency",
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: "ElevateX",
      url: site.url,
      logo: `${site.url}/images/hero-glow.jpg`,
      image: `${site.url}/images/hero-glow.jpg`,
      description: site.description,
      email: site.contact.email,
      telephone: site.contact.phoneDisplay,
      slogan: site.promise,
      priceRange: "₹15,500 – ₹30,000",
      founder: {
        "@type": "Person",
        name: site.contact.founderName,
        jobTitle: site.contact.founderRole,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Panipat",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      areaServed: "Worldwide",
      sameAs: [site.contact.instagramUrl, site.contact.website],
      makesOffer: [
        { "@type": "Offer", name: "Website Design", priceCurrency: "INR", description: "Modern, responsive website design from ₹20K – ₹30K (negotiable)." },
        { "@type": "Offer", name: "Digital Marketing Package", price: "15500", priceCurrency: "INR" },
        { "@type": "Offer", name: "Business Management Package", price: "15500", priceCurrency: "INR" },
        { "@type": "Offer", name: "Combo Offer", price: "30000", priceCurrency: "INR" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-soft focus:px-5 focus:py-3 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:text-black"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFab />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
