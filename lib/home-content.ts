import { Locale } from "./locales";

export type HomeContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  pillars: Array<{
    title: string;
    text: string;
  }>;
};

export const homeContent: Record<Locale, HomeContent> = {
  it: {
    eyebrow: "Yoga terapeutico | Astrologia psicologica | Coaching",
    title: "Sarita Shakti",
    intro:
      "Uno spazio di ascolto profondo per integrare corpo, psiche e cielo attraverso pratiche terapeutiche, letture astrologiche e percorsi olistici.",
    primaryCta: "Prenota una sessione",
    secondaryCta: "Scopri i percorsi",
    pillars: [
      {
        title: "Yoga terapeutico",
        text: "Pratiche personalizzate per ritrovare presenza, mobilita e radicamento.",
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
  },
  es: {
    eyebrow: "Yoga terapeutico | Astrologia psicologica | Coaching",
    title: "Sarita Shakti",
    intro:
      "Un espacio de escucha profunda para integrar cuerpo, psique y cielo a traves de practicas terapeuticas, lecturas astrologicas y procesos holisticos.",
    primaryCta: "Reservar una sesion",
    secondaryCta: "Ver acompanamientos",
    pillars: [
      {
        title: "Yoga terapeutico",
        text: "Practicas personalizadas para recuperar presencia, movilidad y arraigo.",
      },
      {
        title: "Astrologia psicologica",
        text: "La carta natal como mapa de conciencia, talentos y ciclos interiores.",
      },
      {
        title: "Coaching holistico",
        text: "Un acompanamiento practico para convertir la claridad en decisiones diarias.",
      },
    ],
  },
  en: {
    eyebrow: "Therapeutic yoga | Psychological astrology | Coaching",
    title: "Sarita Shakti",
    intro:
      "A space for deep listening where body, psyche, and sky meet through therapeutic practice, astrological insight, and holistic coaching.",
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
  },
};
