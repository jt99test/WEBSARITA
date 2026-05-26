import type { Metadata } from "next";
import { Locale, locales } from "./locales";

const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

export const siteConfig = {
  name: "Sarita Shakti",
  legacyDomain: "https://www.youryogapills.org",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    vercelUrl ??
    "https://websarita.vercel.app",
};

type PageSeo = {
  title: string;
  description: string;
  path?: string;
};

const homeSeo: Record<Locale, PageSeo> = {
  it: {
    title: "Sarita Shakti | Astrologia psicologica Barcellona",
    description:
      "Astrologia psicologica a Barcellona, yoga terapeutico e carta natale con Sarita Shakti.",
  },
  es: {
    title: "Sarita Shakti | Astrología Psicológica Barcelona",
    description:
      "Astrología psicológica Barcelona, yoga terapéutico y carta natal con Sarita Shakti.",
  },
  en: {
    title: "Sarita Shakti | Psychological Astrology Barcelona",
    description:
      "Psychological astrology in Barcelona, therapeutic yoga, and natal chart readings with Sarita Shakti.",
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
    canonical: buildLocalizedPath("es", path),
    languages: Object.fromEntries(
      [
        ...locales.map((locale) => [locale, buildLocalizedPath(locale, path)]),
        ["x-default", buildLocalizedPath("es", path)],
      ],
    ),
  };
}

type PageMetadataOptions = {
  origin?: string;
  languages?: Partial<Record<Locale, string>>;
};

function metadataUrl(path: string, origin?: string) {
  return new URL(path, origin ?? siteConfig.url).toString();
}

export function buildPageMetadata(
  locale: Locale,
  seo: PageSeo,
  options: PageMetadataOptions = {},
): Metadata {
  const canonicalPath = buildLocalizedPath(locale, seo.path);
  const languagePaths =
    options.languages ??
    Object.fromEntries(
      locales.map((alternateLocale) => [
        alternateLocale,
        buildLocalizedPath(alternateLocale, seo.path),
      ]),
    );
  const defaultPath =
    languagePaths.es ?? buildLocalizedPath("es", seo.path);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: metadataUrl(canonicalPath, options.origin),
      languages: Object.fromEntries(
        [
          ...Object.entries(languagePaths),
          ["x-default", defaultPath],
        ].map(([alternateLocale, alternatePath]) => [
          alternateLocale,
          metadataUrl(alternatePath, options.origin),
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
