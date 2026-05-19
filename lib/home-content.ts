import { Locale } from "./locales";

export type HomeContent = {
  eyebrow: string;
  title: string;
  intro: string;
  locationLine: string;
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
  };
  locations: Array<{
    place: string;
    text: string;
  }>;
};

export const homeContent: Record<Locale, HomeContent> = {
  it: {
    eyebrow: "Yoga terapeutico | Astrologia psicologica | Coaching",
    title: "Sarita Shakti",
    intro:
      "Uno spazio di ascolto profondo per integrare corpo, psiche e cielo attraverso pratiche terapeutiche, letture astrologiche e percorsi olistici.",
    locationLine: "Barcellona | Milano | Sant Pol de Mar",
    primaryCta: "Prenota una sessione",
    secondaryCta: "Scopri i percorsi",
    pillars: [
      {
        title: "Yoga terapeutico",
        text: "Pratiche personalizzate per ritrovare presenza, mobilità e radicamento.",
      },
      {
        title: "Astrologia psicologica",
        text: "La carta natale come mappa di consapevolezza, talenti e cicli interiori.",
      },
      {
        title: "Coaching olistico",
        text: "Un accompagnamento concreto per trasformare intuizioni in scelte quotidiane.",
      },
    ],
    imageAlt: {
      hero: "Sarita Shakti in meditazione davanti al tramonto sul mare.",
      practice: "Gruppo di yoga sulla spiaggia durante un ritiro.",
      portrait: "Sarita Shakti durante una spiegazione in cerchio.",
    },
    feature: {
      eyebrow: "Un lavoro integrato",
      title: "Dal corpo alla carta natale, senza separare ciò che vive insieme.",
      text:
        "Le sessioni possono unire ascolto somatico, movimento, astrologia psicologica e coaching. La direzione è semplice: più presenza, più chiarezza e strumenti concreti da portare nella vita quotidiana.",
    },
    locations: [
      {
        place: "Barcellona",
        text: "Sessioni, pratiche e percorsi individuali in presenza quando disponibile.",
      },
      {
        place: "Milano",
        text: "Incontri e consulenze legate ai periodi di lavoro in Italia.",
      },
      {
        place: "Sant Pol de Mar",
        text: "Ritiri sul mare con yoga, nutrimento, silenzio e pratiche di integrazione.",
      },
    ],
  },
  es: {
    eyebrow: "Yoga terapéutico | Astrología psicológica | Coaching",
    title: "Sarita Shakti",
    intro:
      "Un espacio de escucha profunda para integrar cuerpo, psique y cielo a través de prácticas terapéuticas, lecturas astrológicas y procesos holísticos.",
    locationLine: "Barcelona | Milán | Sant Pol de Mar",
    primaryCta: "Reservar una sesión",
    secondaryCta: "Ver acompañamientos",
    pillars: [
      {
        title: "Yoga terapéutico",
        text: "Prácticas personalizadas para recuperar presencia, movilidad y arraigo.",
      },
      {
        title: "Astrología psicológica",
        text: "La carta natal como mapa de conciencia, talentos y ciclos interiores.",
      },
      {
        title: "Coaching holístico",
        text: "Un acompañamiento práctico para convertir la claridad en decisiones diarias.",
      },
    ],
    imageAlt: {
      hero: "Sarita Shakti meditando frente al atardecer en el mar.",
      practice: "Grupo de yoga en la playa durante un retiro.",
      portrait: "Sarita Shakti explicando una práctica en círculo.",
    },
    feature: {
      eyebrow: "Un trabajo integrado",
      title: "Del cuerpo a la carta natal, sin separar lo que vive unido.",
      text:
        "Las sesiones pueden unir escucha somática, movimiento, astrología psicológica y coaching. La dirección es sencilla: más presencia, más claridad y herramientas concretas para la vida cotidiana.",
    },
    locations: [
      {
        place: "Barcelona",
        text: "Sesiones, prácticas y procesos individuales presenciales cuando esté disponible.",
      },
      {
        place: "Milán",
        text: "Encuentros y consultas vinculadas a sus periodos de trabajo en Italia.",
      },
      {
        place: "Sant Pol de Mar",
        text: "Retiros junto al mar con yoga, nutrición, silencio y prácticas de integración.",
      },
    ],
  },
  en: {
    eyebrow: "Therapeutic yoga | Psychological astrology | Coaching",
    title: "Sarita Shakti",
    intro:
      "A space for deep listening where body, psyche, and sky meet through therapeutic practice, astrological insight, and holistic coaching.",
    locationLine: "Barcelona | Milan | Sant Pol de Mar",
    primaryCta: "Book a session",
    secondaryCta: "Explore the work",
    pillars: [
      {
        title: "Therapeutic yoga",
        text: "Personalized practices for presence, mobility, and grounded regulation.",
      },
      {
        title: "Psychological astrology",
        text: "The natal chart as a map of awareness, gifts, and inner cycles.",
      },
      {
        title: "Holistic coaching",
        text: "Practical support for turning insight into embodied daily choices.",
      },
    ],
    imageAlt: {
      hero: "Sarita Shakti meditating at sunset by the sea.",
      practice: "Yoga group practicing on the beach during a retreat.",
      portrait: "Sarita Shakti explaining a practice in circle.",
    },
    feature: {
      eyebrow: "Integrated Work",
      title: "From the body to the birth chart, without splitting what belongs together.",
      text:
        "Sessions can weave somatic listening, movement, psychological astrology, and coaching. The direction is simple: more presence, more clarity, and practical tools for everyday life.",
    },
    locations: [
      {
        place: "Barcelona",
        text: "Sessions, practices, and individual processes in person when available.",
      },
      {
        place: "Milan",
        text: "Consultations and meetings connected to her periods of work in Italy.",
      },
      {
        place: "Sant Pol de Mar",
        text: "Sea-side retreats with yoga, nourishment, silence, and integration practices.",
      },
    ],
  },
};
