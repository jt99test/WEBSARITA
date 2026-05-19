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
    title: "Yoga terapeutico e astrologia psicologica",
    description:
      "Yoga terapeutico, astrologia psicologica e coaching olistico con Sarita Shakti tra Barcellona, Milano e Sant Pol de Mar.",
  },
  es: {
    title: "Yoga terapeutico y astrologia psicologica",
    description:
      "Yoga terapeutico, astrologia psicologica y coaching holistico con Sarita Shakti entre Barcelona, Milan y Sant Pol de Mar.",
  },
  en: {
    title: "Therapeutic yoga and psychological astrology",
    description:
      "Therapeutic yoga, psychological astrology, and holistic coaching with Sarita Shakti in Barcelona, Milan, and Sant Pol de Mar.",
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
