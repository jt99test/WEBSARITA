import { Locale, locales } from "./locales";
import { PageSlug, pageSlugs } from "./page-content";

export type SpecialPageKey =
  | "reviews"
  | "faq"
  | "astrologyTraining"
  | "psychologicalAstrologyMilan";
export type PageRouteKey = PageSlug | SpecialPageKey;

export const specialPagePaths: Record<SpecialPageKey, Record<Locale, string>> = {
  reviews: {
    es: "resenas-y-testimonios-sarita-shakti",
    it: "recensioni-e-testimonianze-sarita-shakti",
    en: "reviews-and-testimonials-sarita-shakti",
  },
  faq: {
    es: "preguntas-frecuentes",
    it: "domande-frequenti",
    en: "faq",
  },
  astrologyTraining: {
    es: "formacion-astrologia-psicologica-milan",
    it: "formazione-astrologia-psicologica-milano",
    en: "psychological-astrology-training-milan",
  },
  psychologicalAstrologyMilan: {
    es: "astrologia-psicologica-milan",
    it: "astrologia-psicologica-milano",
    en: "psychological-astrology-milan",
  },
};

export function resolvePageRoute(locale: Locale, slug: string): PageRouteKey | null {
  if (pageSlugs.includes(slug as PageSlug)) {
    return slug as PageSlug;
  }

  const specialRoute = Object.entries(specialPagePaths).find(([, paths]) =>
    paths[locale] === slug,
  );

  return specialRoute ? (specialRoute[0] as SpecialPageKey) : null;
}

export function getLocalizedPagePath(locale: Locale, key: PageRouteKey) {
  if (key in specialPagePaths) {
    return specialPagePaths[key as SpecialPageKey][locale];
  }

  return key;
}

export function getPageStaticParams() {
  const standardParams = pageSlugs.flatMap((slug) =>
    locales.map((locale) => ({ locale, slug })),
  );
  const specialParams = Object.values(specialPagePaths).flatMap((paths) =>
    locales.map((locale) => ({ locale, slug: paths[locale] })),
  );

  return [...standardParams, ...specialParams];
}

export function getAllPageRoutes() {
  return [
    ...pageSlugs.map((key) => ({ key })),
    ...Object.keys(specialPagePaths).map((key) => ({ key: key as SpecialPageKey })),
  ];
}
