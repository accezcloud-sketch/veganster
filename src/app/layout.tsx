import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { DEFAULT_SOCIAL_IMAGE, SITE_NAME, SITE_URL, ogImage } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteDescription =
  "Discover delicious vegan recipes, fresh juices and smoothies, simple meal plans, and plant-based living inspiration at Veganster.";

const defaultSocialImage = ogImage(DEFAULT_SOCIAL_IMAGE);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Veganster — Plant-Based Living & Wellness",
    template: `%s — ${SITE_NAME}`,
  },
  description: siteDescription,
  // No `alternates.canonical` here on purpose: a canonical set on the root
  // layout is inherited by every child route, which would tell Google that
  // every page on the site is a duplicate of the homepage. Each page sets its
  // own. `openGraph.url` is left out for the same reason — it used to be "/",
  // so every page reported the homepage as its Open Graph URL.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: "Veganster — Plant-Based Living & Wellness",
    description: siteDescription,
    images: [
      {
        url: defaultSocialImage,
        width: 1200,
        height: 630,
        alt: "Colorful plant-based meal spread",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veganster — Plant-Based Living & Wellness",
    description: siteDescription,
    images: [defaultSocialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        {children}
        <GoogleAnalytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X6M89PJQE4"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-X6M89PJQE4', { send_page_view: false });
          `}
        </Script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2065215403709511"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
