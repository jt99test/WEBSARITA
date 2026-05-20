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
      "Sessioni e percorsi per integrare corpo, psiche e cielo attraverso astrologia psicologica, coaching e pratiche terapeutiche.",
    serviceLine: "Letture astrologiche | coaching online | yoga terapeutico",
    primaryCta: "Prenota una sessione",
    secondaryCta: "Vedi i servizi",
    pillars: [
      {
        title: "Astrologia psicologica",
        text: "Letture di carta natale, sinastria e rivoluzione solare per comprendere talenti, relazioni e cicli interiori.",
      },
      {
        title: "Coaching astrologico",
        text: "Sessioni singole, mensili e pacchetti brevi per trasformare la comprensione in scelte concrete.",
      },
      {
        title: "Yoga terapeutico",
        text: "Pratiche personalizzate e ascolto somatico per ritrovare presenza, mobilità e radicamento.",
      },
    ],
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
      title: "Vuoi iniziare dalla carta natale?",
      text:
        "Sarita Astrology è lo spazio dedicato alle letture astrologiche online: una porta semplice per esplorare il tema natale, la sinastria o l'anno astrologico prima di entrare in un percorso personale.",
      cta: "Visita il sito di astrologia",
    },
  },
  es: {
    eyebrow: "Yoga terapéutico | Astrología psicológica | Coaching",
    title: "Sarita Shakti",
    intro:
      "Sesiones y procesos para integrar cuerpo, psique y cielo a través de astrología psicológica, coaching y prácticas terapéuticas.",
    serviceLine: "Lecturas astrológicas | coaching online | yoga terapéutico",
    primaryCta: "Reservar una sesión",
    secondaryCta: "Ver servicios",
    pillars: [
      {
        title: "Astrología psicológica",
        text: "Lecturas de carta natal, sinastría y revolución solar para comprender talentos, relaciones y ciclos interiores.",
      },
      {
        title: "Coaching astrológico",
        text: "Sesiones individuales, mensuales y packs breves para transformar la comprensión en decisiones concretas.",
      },
      {
        title: "Yoga terapéutico",
        text: "Prácticas personalizadas y escucha somática para recuperar presencia, movilidad y arraigo.",
      },
    ],
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
      title: "¿Quieres empezar por tu carta natal?",
      text:
        "Sarita Astrology es el espacio dedicado a las lecturas astrológicas online: una puerta sencilla para explorar tu carta natal, la sinastría o el año astrológico antes de entrar en un proceso personal.",
      cta: "Visitar la web de astrología",
    },
  },
  en: {
    eyebrow: "Therapeutic yoga | Psychological astrology | Coaching",
    title: "Sarita Shakti",
    intro:
      "Sessions and short processes for integrating body, psyche, and sky through psychological astrology, coaching, and therapeutic practice.",
    serviceLine: "Astrology readings | online coaching | therapeutic yoga",
    primaryCta: "Book a session",
    secondaryCta: "View services",
    pillars: [
      {
        title: "Psychological astrology",
        text: "Natal chart, synastry, and solar revolution readings for understanding gifts, relationships, and inner cycles.",
      },
      {
        title: "Astrological coaching",
        text: "Single sessions, monthly support, and short packs for turning insight into concrete choices.",
      },
      {
        title: "Therapeutic yoga",
        text: "Personalized practices and somatic listening for presence, mobility, and grounded regulation.",
      },
    ],
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
      title: "Want to begin with your birth chart?",
      text:
        "Sarita Astrology is the dedicated space for online astrology readings: a simple doorway into the natal chart, synastry, or the astrological year before entering a personal process.",
      cta: "Visit the astrology website",
    },
  },
};
