import type { Metadata } from "next";
import { Locale, locales } from "./locales";

const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

export const siteConfig = {
  name: "Sarita Shakti",
  legacyDomain: "https://www.youryogapills.org",
  defaultOgImage: "/og-default.jpg",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    vercelUrl ??
    "https://saritashakti.com",
};

type PageSeo = {
  title: string;
  description: string;
  path?: string;
};

const homeSeo: Record<Locale, PageSeo> = {
  it: {
    title: "Sarita Shakti | Astrologia psicologica Milano",
    description:
      "Astrologia psicologica a Milano, sessioni online e formazione in presenza con Sarita Shakti.",
  },
  es: {
    title: "Sarita Shakti | Astrología Psicológica Barcelona",
    description:
      "Astrología psicológica Barcelona, yoga terapéutico y carta natal con Sarita Shakti.",
  },
  en: {
    title: "Sarita Shakti | Psychological Astrology Online",
    description:
      "Psychological astrology online, Milan training, therapeutic yoga, and natal chart readings with Sarita Shakti.",
  },
};

const openGraphLocales: Record<Locale, string> = {
  it: "it_IT",
  es: "es_ES",
  en: "en_US",
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
  image?: string;
};

function metadataUrl(path: string, origin?: string) {
  return new URL(path, origin ?? siteConfig.url).toString();
}

function buildOpenGraphTitle(title: string) {
  return title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
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
      title: buildOpenGraphTitle(seo.title),
      description: seo.description,
      url: metadataUrl(canonicalPath, options.origin),
      siteName: siteConfig.name,
      locale: openGraphLocales[locale],
      type: "website",
      images: [
        {
          url: options.image ?? metadataUrl(siteConfig.defaultOgImage, options.origin),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Psychological astrology and therapeutic yoga`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: buildOpenGraphTitle(seo.title),
      description: seo.description,
      images: [options.image ?? metadataUrl(siteConfig.defaultOgImage, options.origin)],
    },
  };
}
