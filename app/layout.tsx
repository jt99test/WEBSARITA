import type { Metadata } from "next";
import { headers } from "next/headers";
import { isLocale } from "@/lib/locales";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.youryogapills.org",
  ),
  title: {
    default: "Sarita Shakti",
    template: "%s | Sarita Shakti",
  },
  description:
    "Therapeutic yoga, psychological astrology, and holistic coaching with Sarita Shakti.",
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
    <html lang={htmlLocale} className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
