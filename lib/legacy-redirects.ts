import { blogPostRedirects } from "./blog-redirects";

type LegacyRedirect = {
  source: string;
  destination: string;
  statusCode: 301;
};

export const legacyRedirects: LegacyRedirect[] = [
  {
    source: "/info",
    destination: "/it/about",
    statusCode: 301,
  },
  {
    source: "/about",
    destination: "/es/about",
    statusCode: 301,
  },
  {
    source: "/contact",
    destination: "/es/about",
    statusCode: 301,
  },
  {
    source: "/contacto",
    destination: "/es/about",
    statusCode: 301,
  },
  {
    source: "/astrology",
    destination: "/es/coaching",
    statusCode: 301,
  },
  {
    source: "/astrologia",
    destination: "/es/coaching",
    statusCode: 301,
  },
  {
    source: "/yoga",
    destination: "/es/training",
    statusCode: 301,
  },
  {
    source: "/coaching",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/it/servizi",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/es/servicios",
    destination: "/es/coaching",
    statusCode: 301,
  },
  {
    source: "/en/services",
    destination: "/en/coaching",
    statusCode: 301,
  },
  {
    source: "/retirosyogayastrologia",
    destination: "/es/coaching",
    statusCode: 301,
  },
  {
    source: "/retreats",
    destination: "/en/coaching",
    statusCode: 301,
  },
  {
    source: "/it/retreats",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/es/retreats",
    destination: "/es/coaching",
    statusCode: 301,
  },
  {
    source: "/en/retreats",
    destination: "/en/coaching",
    statusCode: 301,
  },
  {
    source: "/training",
    destination: "/it/training",
    statusCode: 301,
  },
  {
    source: "/book",
    destination: "/it/booking",
    statusCode: 301,
  },
  {
    source: "/book-online",
    destination: "/it/booking",
    statusCode: 301,
  },
  {
    source: "/booking",
    destination: "/it/booking",
    statusCode: 301,
  },
  {
    source: "/gift-card",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/search",
    destination: "/it/blog",
    statusCode: 301,
  },
  {
    source: "/blog",
    destination: "/es/blog",
    statusCode: 301,
  },
  {
    source: "/post/retreat-in-spain-unwind-and-rejuvenate-with-yoga-and-meditation",
    destination: "/en/coaching",
    statusCode: 301,
  },
  {
    source: "/post/luna-nuova-in-toro-16-maggio-2026-semina-quello-che-vuoi-davvero-sostenere",
    destination: "/it/blog/luna-nuova-in-toro-16-maggio-2026-semina-quello-che-vuoi-davvero-sostenere",
    statusCode: 301,
  },
  {
    source: "/post/discover-the-ultimate-yoga-retreat-on-the-costa-brava",
    destination: "/en/coaching",
    statusCode: 301,
  },
  {
    source: "/it/post/luna-nuova-in-toro-16-maggio-2026-semina-quello-che-vuoi-davvero-sostenere",
    destination: "/it/blog/luna-nuova-in-toro-16-maggio-2026-semina-quello-che-vuoi-davvero-sostenere",
    statusCode: 301,
  },
  {
    source: "/es/post/luna-nueva-en-tauro-16-de-mayo-2026-siembra-lo-que-quieres-sostener-de-verdad",
    destination: "/es/blog/luna-nueva-en-tauro-16-de-mayo-2026-siembra-lo-que-quieres-sostener-de-verdad",
    statusCode: 301,
  },
  {
    source: "/it/post/luna-piena-in-scorpione-1-maggio-2026-quello-che-non-volevi-vedere-non-pu%C3%B2-pi%C3%B9-aspettare",
    destination: "/it/blog/luna-piena-in-scorpione-1-maggio-2026-quello-che-non-volevi-vedere-non-puo-piu-aspettare",
    statusCode: 301,
  },
  {
    source: "/es/post/luna-llena-escorpio-1-mayo-2026",
    destination: "/es/blog/luna-llena-escorpio-1-mayo-2026",
    statusCode: 301,
  },
  {
    source: "/it/post/ariete-in-fiamme-come-lo-stellium-di-aprile-2026-sta-trasformando-la-tua-identi",
    destination: "/it/blog/ariete-in-fiamme-come-lo-stellium-di-aprile-2026-sta-trasformando-la-tua-identi",
    statusCode: 301,
  },
  {
    source: "/es/post/aries-en-llamas-c%C3%B3mo-el-stellium-de-abril-2026-est%C3%A1-transformando-tu-identidad",
    destination: "/es/blog/aries-en-llamas-como-el-stellium-de-abril-2026-esta-transformando-tu-identidad",
    statusCode: 301,
  },
  {
    source: "/it/post/luna-piena-bilancia-aprile-2026-relazioni-transiti-astrologici",
    destination: "/it/blog/luna-piena-bilancia-aprile-2026-relazioni-transiti-astrologici",
    statusCode: 301,
  },
  {
    source: "/es/post/impacto-de-la-luna-llena-en-libra-del-2-de-abril-en-tu-vida-y-relaciones",
    destination: "/es/blog/impacto-de-la-luna-llena-en-libra-del-2-de-abril-en-tu-vida-y-relaciones",
    statusCode: 301,
  },
  {
    source: "/it/post/i-3-cicli-di-navratri-e-il-loro-significato-spirituale",
    destination: "/it/blog/i-3-cicli-di-navratri-e-il-loro-significato-spirituale",
    statusCode: 301,
  },
  {
    source: "/es/post/navratri-9-noches-para-transformar-nutrir-y-elevar-la-energ%C3%ADa",
    destination: "/es/blog/navratri-9-noches-para-transformar-nutrir-y-elevar-la-energia",
    statusCode: 301,
  },
  {
    source: "/it/post/luna-nuova-in-pesci-28-19-marzo-2026",
    destination: "/it/blog/luna-nuova-in-pesci-28-19-marzo-2026",
    statusCode: 301,
  },
  {
    source: "/es/post/luna-nueva-en-piscis",
    destination: "/es/blog/luna-nueva-en-piscis",
    statusCode: 301,
  },
  {
    source: "/it/post/iranterzoocchiodellaterrasimbolismospirituale",
    destination: "/it/blog/iranterzoocchiodellaterrasimbolismospirituale",
    statusCode: 301,
  },
  {
    source: "/es/post/ir%C3%A1n-el-tercer-ojo-y-la-batalla-invisible-por-la-conciencia-del-mundo",
    destination: "/es/blog/iran-el-tercer-ojo-y-la-batalla-invisible-por-la-conciencia-del-mundo",
    statusCode: 301,
  },
  {
    source: "/it/post/una-chiusura-per-mettere-ordine-nel-cuore-luna-piena-in-vergine",
    destination: "/it/blog/una-chiusura-per-mettere-ordine-nel-cuore-luna-piena-in-vergine",
    statusCode: 301,
  },
  {
    source: "/es/post/un-cierre-para-ordenar-el-coraz%C3%B3n-luna-llena-en-virgo",
    destination: "/es/blog/un-cierre-para-ordenar-el-corazon-luna-llena-en-virgo",
    statusCode: 301,
  },
  {
    source: "/it/post/chiave-psicologica-di-saturno-in-ariete",
    destination: "/it/blog/chiave-psicologica-di-saturno-in-ariete",
    statusCode: 301,
  },
  {
    source: "/es/post/clave-psicol%C3%B3gica-de-saturno-en-aries",
    destination: "/es/blog/clave-psicologica-de-saturno-en-aries",
    statusCode: 301,
  },
  {
    source: "/it/post/le-fasi-di-mercurio-retrogrado-e-il-suo-linguaggio-pre-ombra-retrogradazione-e-post-ombra",
    destination: "/it/blog/le-fasi-di-mercurio-retrogrado-e-il-suo-linguaggio-pre-ombra-retrogradazione-e-post-ombra",
    statusCode: 301,
  },
  {
    source: "/es/post/las-fases-de-mercurio-retr%C3%B3grado-y-su-lenguaje-pre-sombra-retrogradaci%C3%B3n-y-post-sombra",
    destination: "/es/blog/las-fases-de-mercurio-retrogrado-y-su-lenguaje-pre-sombra-retrogradacion-y-post-sombra",
    statusCode: 301,
  },
  {
    source: "/service-page/intestinal-wash-and-astrology-coach",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/service-page/one-on-one-yoga-session-with-astrologica",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/service-page/monthly-astrological-coaching-session",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/service-page/solar-return-reading",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/service-page/psychological-astrology-reading",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/service-page/psychological-synastry",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/service-page/short-intestinal-wash",
    destination: "/it/coaching",
    statusCode: 301,
  },
  ...blogPostRedirects,
];
