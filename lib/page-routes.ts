import { Locale, locales } from "./locales";
import { PageSlug, pageSlugs } from "./page-content";

export type SpecialPageKey =
  | "reviews"
  | "faq"
  | "astrologyTraining"
  | "astrologyTrainingBarcelona"
  | "psychologicalAstrologyMilan"
  | "cartaNatal"
  | "sinastria"
  | "revolucionSolar"
  | "coachingAstrologico"
  | "cartaNatalMilan"
  | "sinastriaMilan"
  | "revolucionSolarMilan"
  | "coachingAstrologicoMilan";
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
  astrologyTrainingBarcelona: {
    es: "formacion-astrologia-psicologica-barcelona",
    it: "formazione-astrologia-psicologica-barcellona",
    en: "psychological-astrology-training-barcelona",
  },
  psychologicalAstrologyMilan: {
    es: "astrologia-psicologica-milan",
    it: "astrologia-psicologica-milano",
    en: "psychological-astrology-milan",
  },
  cartaNatal: {
    es: "carta-natal-barcelona",
    it: "carta-natale-milano",
    en: "birth-chart-reading-barcelona",
  },
  sinastria: {
    es: "sinastria-barcelona",
    it: "sinastria-milano",
    en: "synastry-reading-barcelona",
  },
  revolucionSolar: {
    es: "revolucion-solar-barcelona",
    it: "rivoluzione-solare-milano",
    en: "solar-return-reading-barcelona",
  },
  coachingAstrologico: {
    es: "coaching-astrologico-barcelona",
    it: "coaching-astrologico-milano",
    en: "astrological-coaching-barcelona",
  },
  cartaNatalMilan: {
    es: "carta-natal-milan",
    it: "carta-natale-milano",
    en: "birth-chart-reading-milan",
  },
  sinastriaMilan: {
    es: "sinastria-milan",
    it: "sinastria-milano",
    en: "synastry-reading-milan",
  },
  revolucionSolarMilan: {
    es: "revolucion-solar-milan",
    it: "rivoluzione-solare-milano",
    en: "solar-return-reading-milan",
  },
  coachingAstrologicoMilan: {
    es: "coaching-astrologico-milan",
    it: "coaching-astrologico-milano",
    en: "astrological-coaching-milan",
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
