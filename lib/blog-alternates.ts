import { Locale } from "./locales";

type BlogAlternateGroup = Partial<Record<Locale, string>>;

const blogAlternateGroups: BlogAlternateGroup[] = [
  {
    it: "luna-nuova-in-toro-16-maggio-2026-semina-quello-che-vuoi-davvero-sostenere",
    es: "luna-nueva-en-tauro-16-de-mayo-2026-siembra-lo-que-quieres-sostener-de-verdad",
  },
  {
    it: "luna-piena-in-scorpione-1-maggio-2026-quello-che-non-volevi-vedere-non-puo-piu-aspettare",
    es: "luna-llena-escorpio-1-mayo-2026",
  },
  {
    it: "ariete-in-fiamme-come-lo-stellium-di-aprile-2026-sta-trasformando-la-tua-identi",
    es: "aries-en-llamas-como-el-stellium-de-abril-2026-esta-transformando-tu-identidad",
  },
  {
    it: "luna-piena-bilancia-aprile-2026-relazioni-transiti-astrologici",
    es: "impacto-de-la-luna-llena-en-libra-del-2-de-abril-en-tu-vida-y-relaciones",
  },
  {
    it: "i-3-cicli-di-navratri-e-il-loro-significato-spirituale",
    es: "navratri-9-noches-para-transformar-nutrir-y-elevar-la-energia",
  },
  {
    it: "luna-nuova-in-pesci-28-19-marzo-2026",
    es: "luna-nueva-en-piscis",
  },
  {
    it: "iranterzoocchiodellaterrasimbolismospirituale",
    es: "iran-el-tercer-ojo-y-la-batalla-invisible-por-la-conciencia-del-mundo",
  },
  {
    it: "una-chiusura-per-mettere-ordine-nel-cuore-luna-piena-in-vergine",
    es: "un-cierre-para-ordenar-el-corazon-luna-llena-en-virgo",
  },
  {
    it: "chiave-psicologica-di-saturno-in-ariete",
    es: "clave-psicologica-de-saturno-en-aries",
  },
  {
    it: "le-fasi-di-mercurio-retrogrado-e-il-suo-linguaggio-pre-ombra-retrogradazione-e-post-ombra",
    es: "las-fases-de-mercurio-retrogrado-y-su-lenguaje-pre-sombra-retrogradacion-y-post-sombra",
  },
  {
    it: "la-storia-del-cielo-che-si-ripete",
    es: "el-cuento-del-cielo-que-se-repite",
  },
  {
    it: "cambiamento-interiore-2025-2026-astrologia-psicologica-per-comprendere-una-nuova-fase-di-coscien",
    es: "cambio-interior-2025-2026",
  },
  {
    it: "la-fine-del-ciclo-un-viaggio-psicologico-di-dissoluzione-confini-e-resa",
    es: "final-de-etapa-un-viaje-psicologico-de-disolucion-limites-y-rendicion",
  },
  {
    it: "mi-permetto-di-pensare-in-modo-diverso",
    es: "luna-llena-en-geminis-me-permito-pensar-diferente",
    en: "i-allow-myself-to-think-differently",
  },
  {
    it: "luna-nuova-in-scorpione-28-un-inizio-che-nasce-dalla-fine",
    es: "luna-nueva-en-escorpio-28-un-comienzo-que-nace-del-final",
  },
  {
    it: "coraggio-dal-tangibile-allinvisibile",
    es: "el-valor-de-lo-tangible-a-lo-invisible",
  },
  {
    it: "luna-piena-in-ariete-e-plutone-diretto-in-acquario-il-fuoco-dell-anima-che-risveglia-la-coscienz",
    es: "luna-llena-en-aries-y-pluton-directo-en-acuario-el-fuego-del-alma-que-despierta-la-conciencia-co",
  },
  {
    it: "macrocosmo-e-microcosmo-il-risveglio-della-coscienza-nel-presente",
    es: "eldespertardelaconcienciaenelpresente",
  },
  {
    it: "alta-sensilibita",
    es: "el-poder-de-mi-alta-sensibilidad-de-la-vulnerabilidad-al-superpoder",
  },
  {
    it: "yoga-terapeutico-e-astrologia-psicologica-l-unione-degli-elementi-e-dei-chakra",
    es: "yoga-terapeutico-y-astrologia-psicologica-la-union-de-los-elementos-y-los-chakras",
  },
  {
    it: "urano-in-gemelli-e-iniziata-la-rivoluzione-mentale",
    es: "urano-en-geminis-la-revolucion-mental-ha-comenzado",
  },
  {
    it: "luna-piena-in-capricorno-gurupoornima",
    es: "luna-llena-en-capricornio-gurupoornima",
  },
  {
    es: "sembrando-desde-el-corazon-luna-nueva-en-tauro-y-el-despertar-de-nuestra-verdadera-estabilidad",
    en: "new-roots-new-moon-in-taurus-and-the-path-to-authenticity",
  },
  {
    es: "eclipseenvirgo2025",
    en: "eclipse-with-south-node-in-virgo-and-full-moon-on-march-14-2025-a-call-to-integrate-chaos-and-or",
  },
  {
    es: "lunallenaenleobrillaconautenticidad",
    en: "fullmooninleoshinewithauthenticity",
  },
  {
    es: "coaching-astrologico",
    en: "astrological-coaching",
  },
];

export function getBlogPostAlternates(locale: Locale, slug: string) {
  const group = blogAlternateGroups.find((alternateGroup) =>
    Object.entries(alternateGroup).some(
      ([alternateLocale, alternateSlug]) =>
        alternateLocale === locale && alternateSlug === slug,
    ),
  );

  return group ?? { [locale]: slug };
}
