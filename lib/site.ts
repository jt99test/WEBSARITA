import type { Metadata } from "next";
import { Locale, locales } from "./locales";

export const siteConfig = {
  name: "Sarita Shakti",
  legacyDomain: "https://www.youryogapills.org",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.youryogapills.org",
};

type PageSeo = {
  title: string;
  description: string;
  path?: string;
};

const homeSeo: Record<Locale, PageSeo> = {
  it: {
    title: "Astrologia psicologica, coaching e yoga terapeutico",
    description:
      "Letture astrologiche, coaching online e yoga terapeutico con Sarita Shakti.",
  },
  es: {
    title: "Astrología psicológica, coaching y yoga terapéutico",
    description:
      "Lecturas astrológicas, coaching online y yoga terapéutico con Sarita Shakti.",
  },
  en: {
    title: "Psychological astrology, coaching, and therapeutic yoga",
    description:
      "Astrology readings, online coaching, and therapeutic yoga with Sarita Shakti.",
  },
};

export function getHomeSeo(locale: Locale) {
  return homeSeo[locale];
}

export function buildLocalizedPath(locale: Locale, path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function buildAlternates(path = ""): Metadata["alternates"] {
  return {
    canonical: buildLocalizedPath("it", path),
    languages: Object.fromEntries(
      locales.map((locale) => [locale, buildLocalizedPath(locale, path)]),
    ),
  };
}

export function buildPageMetadata(locale: Locale, seo: PageSeo): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: buildLocalizedPath(locale, seo.path),
      languages: Object.fromEntries(
        locales.map((alternateLocale) => [
          alternateLocale,
          buildLocalizedPath(alternateLocale, seo.path),
        ]),
      ),
    },
    openGraph: {
      title: `${seo.title} | ${siteConfig.name}`,
      description: seo.description,
      siteName: siteConfig.name,
      locale,
      type: "website",
    },
  };
}
