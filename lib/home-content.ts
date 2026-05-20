import { Locale } from "./locales";

export type HomeContent = {
  eyebrow: string;
  title: string;
  intro: string;
  serviceLine: string;
  primaryCta: string;
  secondaryCta: string;
  pillars: Array<{
    title: string;
    text: string;
  }>;
  reviews: {
    eyebrow: string;
    title: string;
    text: string;
  };
  imageAlt: {
    hero: string;
    practice: string;
    portrait: string;
  };
  feature: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
  astrology: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
};

export const homeContent: Record<Locale, HomeContent> = {
  it: {
    eyebrow: "Yoga terapeutico | Astrologia psicologica | Coaching",
    title: "Sarita Shakti",
    intro:
      "Letture astrologiche e accompagnamento personale per capire dove sei, cosa si muove dentro di te e quali passi concreti puoi fare ora.",
    serviceLine: "Astrologia psicologica | coaching online | yoga terapeutico",
    primaryCta: "Vedi i servizi",
    secondaryCta: "Prenota una chiamata",
    pillars: [
      {
        title: "Astrologia psicologica",
        text: "Carta natale, sinastria e rivoluzione solare lette con Sarita: uno spazio personale, umano e psicologico.",
      },
      {
        title: "Coaching astrologico",
        text: "Sessioni singole, mensili e pacchetti brevi per trasformare una lettura in decisioni, pratica e continuità.",
      },
      {
        title: "Yoga terapeutico",
        text: "Pratiche personalizzate e ascolto somatico per ritrovare presenza, mobilità e radicamento.",
      },
    ],
    reviews: {
      eyebrow: "Google Reviews",
      title: "Esperienze reali, integrate nel design del sito.",
      text:
        "Qui entreranno alcune recensioni verificate da Google, selezionate e presentate con lo stesso stile del sito invece di un widget generico.",
    },
    imageAlt: {
      hero: "Sarita Shakti in meditazione davanti al tramonto sul mare.",
      practice: "Gruppo di yoga in pratica all'aperto.",
      portrait: "Sarita Shakti durante una spiegazione in cerchio.",
    },
    feature: {
      eyebrow: "About Sarita",
      title: "Un percorso tra yoga, astrologia e accompagnamento umano.",
      text:
        "Sarita Shakti accompagna persone e gruppi da oltre vent'anni. La sua formazione unisce Bihar School of Yoga, astrologia psicologica e un modo di lavorare concreto: ascoltare ciò che accade nel corpo, leggerlo anche attraverso la carta natale e trasformarlo in presenza quotidiana.",
      cta: "Conosci Sarita",
    },
    astrology: {
      eyebrow: "Sarita Astrology",
      title: "Vuoi una lettura più accessibile e immediata?",
      text:
        "SaritaAstrology.com offre letture astrologiche online generate dal sito: sono più economiche e rapide, ma meno personalizzate. Questo sito è per capire Sarita, scegliere un servizio con lei e prenotare un accompagnamento umano.",
      cta: "Vai a SaritaAstrology.com",
    },
  },
  es: {
    eyebrow: "Yoga terapéutico | Astrología psicológica | Coaching",
    title: "Sarita Shakti",
    intro:
      "Lecturas astrológicas y acompañamiento personal para entender dónde estás, qué se mueve dentro de ti y qué pasos concretos puedes dar ahora.",
    serviceLine: "Astrología psicológica | coaching online | yoga terapéutico",
    primaryCta: "Ver servicios",
    secondaryCta: "Reservar una llamada",
    pillars: [
      {
        title: "Astrología psicológica",
        text: "Carta natal, sinastría y revolución solar leídas con Sarita: un espacio personal, humano y psicológico.",
      },
      {
        title: "Coaching astrológico",
        text: "Sesiones individuales, mensuales y packs breves para transformar una lectura en decisiones, práctica y continuidad.",
      },
      {
        title: "Yoga terapéutico",
        text: "Prácticas personalizadas y escucha somática para recuperar presencia, movilidad y arraigo.",
      },
    ],
    reviews: {
      eyebrow: "Google Reviews",
      title: "Experiencias reales, integradas en el diseño del sitio.",
      text:
        "Aquí irán algunas reseñas verificadas de Google, seleccionadas y presentadas con el estilo propio del sitio en vez de un widget genérico.",
    },
    imageAlt: {
      hero: "Sarita Shakti meditando frente al atardecer en el mar.",
      practice: "Grupo de yoga practicando al aire libre.",
      portrait: "Sarita Shakti explicando una práctica en círculo.",
    },
    feature: {
      eyebrow: "Sobre Sarita",
      title: "Un recorrido entre yoga, astrología y acompañamiento humano.",
      text:
        "Sarita Shakti acompaña a personas y grupos desde hace más de veinte años. Su formación une Bihar School of Yoga, astrología psicológica y una forma de trabajar concreta: escuchar lo que ocurre en el cuerpo, leerlo también a través de la carta natal y convertirlo en presencia cotidiana.",
      cta: "Conocer a Sarita",
    },
    astrology: {
      eyebrow: "Sarita Astrology",
      title: "¿Quieres una lectura más accesible e inmediata?",
      text:
        "SaritaAstrology.com ofrece lecturas astrológicas online generadas por la web: son más económicas y rápidas, pero menos personalizadas. Este sitio es para conocer a Sarita, elegir un servicio con ella y reservar un acompañamiento humano.",
      cta: "Ir a SaritaAstrology.com",
    },
  },
  en: {
    eyebrow: "Therapeutic yoga | Psychological astrology | Coaching",
    title: "Sarita Shakti",
    intro:
      "Astrology readings and personal guidance to understand where you are, what is moving inside you, and what concrete steps you can take now.",
    serviceLine: "Psychological astrology | online coaching | therapeutic yoga",
    primaryCta: "View services",
    secondaryCta: "Book a call",
    pillars: [
      {
        title: "Psychological astrology",
        text: "Natal chart, synastry, and solar revolution readings with Sarita: personal, human, and psychologically grounded.",
      },
      {
        title: "Astrological coaching",
        text: "Single sessions, monthly support, and short packs for turning a reading into decisions, practice, and continuity.",
      },
      {
        title: "Therapeutic yoga",
        text: "Personalized practices and somatic listening for presence, mobility, and grounded regulation.",
      },
    ],
    reviews: {
      eyebrow: "Google Reviews",
      title: "Real client experiences, integrated into the site design.",
      text:
        "This area will hold a small set of verified Google reviews, selected and rendered in the site's own style instead of a generic widget.",
    },
    imageAlt: {
      hero: "Sarita Shakti meditating at sunset by the sea.",
      practice: "Yoga group practicing outdoors.",
      portrait: "Sarita Shakti explaining a practice in circle.",
    },
    feature: {
      eyebrow: "About Sarita",
      title: "A path between yoga, astrology, and human guidance.",
      text:
        "Sarita Shakti has guided people and groups for more than twenty years. Her training brings together the Bihar School of Yoga, psychological astrology, and a grounded way of working: listening to what happens in the body, reading it through the natal chart, and turning it into everyday presence.",
      cta: "Meet Sarita",
    },
    astrology: {
      eyebrow: "Sarita Astrology",
      title: "Want a more accessible, immediate reading?",
      text:
        "SaritaAstrology.com offers online astrology readings generated by the website: they are cheaper and faster, but less personalized. This site is for understanding Sarita, choosing a service with her, and booking human guidance.",
      cta: "Go to SaritaAstrology.com",
    },
  },
};
