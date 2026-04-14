import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://veganster.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Veganster — Plant-Based Living & Wellness",
    template: "%s — Veganster",
  },
  description:
    "Discover delicious vegan recipes, healing juice blends, wellness programs, and plant-based living inspiration at Veganster.",
  openGraph: {
    type: "website",
    siteName: "Veganster",
    locale: "en_US",
    url: "/",
    title: "Veganster — Plant-Based Living & Wellness",
    description:
      "Discover delicious vegan recipes, healing juice blends, wellness programs, and plant-based living inspiration at Veganster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veganster — Plant-Based Living & Wellness",
    description:
      "Discover delicious vegan recipes, healing juice blends, wellness programs, and plant-based living inspiration at Veganster.",
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
      </body>
    </html>
  );
}
