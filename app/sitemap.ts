import type { MetadataRoute } from "next";
import { locales } from "@/lib/locales";
import { pageSlugs } from "@/lib/page-content";
import { buildLocalizedPath, siteConfig } from "@/lib/site";

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

function localizedAlternates(path = "") {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [
        locale,
        absoluteUrl(buildLocalizedPath(locale, path)),
      ]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const homeEntries = locales.map((locale) => ({
    url: absoluteUrl(buildLocalizedPath(locale)),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: locale === "it" ? 1 : 0.9,
    alternates: localizedAlternates(),
  }));

  const pageEntries = pageSlugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: absoluteUrl(buildLocalizedPath(locale, slug)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: slug === "blog" ? 0.7 : 0.85,
      alternates: localizedAlternates(slug),
    })),
  );

  return [...homeEntries, ...pageEntries];
}
