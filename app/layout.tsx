import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { isLocale } from "@/lib/locales";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sarita Shakti",
    template: "%s | Sarita Shakti",
  },
  description:
    "Therapeutic yoga, psychological astrology, and holistic coaching with Sarita Shakti.",
  openGraph: {
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Sarita Shakti - Psychological astrology and therapeutic yoga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.defaultOgImage],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const requestLocale = headersList.get("x-saritashakti-locale") ?? "en";
  const htmlLocale = isLocale(requestLocale) ? requestLocale : "en";

  return (
    <html
      lang={htmlLocale}
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
