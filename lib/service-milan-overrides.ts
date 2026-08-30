import { Locale } from "./locales";
import { ServiceKey } from "./service-pages-content";

export type MilanServiceKey =
  | "cartaNatalMilan"
  | "sinastriaMilan"
  | "revolucionSolarMilan"
  | "coachingAstrologicoMilan";

export const milanToBaseKey: Record<MilanServiceKey, ServiceKey> = {
  cartaNatalMilan: "cartaNatal",
  sinastriaMilan: "sinastria",
  revolucionSolarMilan: "revolucionSolar",
  coachingAstrologicoMilan: "coachingAstrologico",
};

export const milanServiceKeys: MilanServiceKey[] = [
  "cartaNatalMilan",
  "sinastriaMilan",
  "revolucionSolarMilan",
  "coachingAstrologicoMilan",
];

export type MilanOverride = {
  title: string;
  eyebrow: string;
  mode: string;
  seoTitle: string;
  seoDescription: string;
  heroNote: string;
  location: { title: string; lead: string };
  ctaTitle: string;
};

/**
 * Milan-context overrides for ES and EN service pages.
 * The IT locale needs no overrides: its base service pages are already
 * Milano-targeted (carta-natale-milano, etc.) and the Milan slugs map to them.
 */
export const milanOverrides: Record<
  ServiceKey,
  Partial<Record<Locale, MilanOverride>>
> = {
  cartaNatal: {
    es: {
      title: "Carta Natal en Milán",
      eyebrow: "Astrología psicológica · Milán y online",
      mode: "Online o presencial en Milán",
      seoTitle: "Carta Natal en Milán y Online — Lectura completa",
      seoDescription:
        "Lectura de carta natal (carta astral) en Milán y online con Sarita Shakti, astróloga psicológica con más de 25 años de experiencia. Sesión de 90 minutos en español o italiano.",
      heroNote: "Online o presencial en Milán · Primera orientación por WhatsApp gratuita",
      location: {
        title: "¿Buscas una lectura de carta natal en Milán?",
        lead: "Las sesiones se realizan online y, según disponibilidad, presencialmente en Milán. Sarita trabaja en Milán en italiano y español, y mantiene el trabajo online para quien vive en otra ciudad.",
      },
      ctaTitle: "¿Quieres entender qué cuenta tu Carta Natal sobre ti?",
    },
    en: {
      title: "Birth Chart Reading in Milan",
      eyebrow: "Psychological astrology · Milan and online",
      mode: "Online or in person in Milan",
      seoTitle: "Birth Chart Reading in Milan and Online",
      seoDescription:
        "Birth chart (natal chart) reading in Milan and online with Sarita Shakti, psychological astrologer with 25+ years of experience. A 90-minute session in English, Italian, or Spanish.",
      heroNote: "Online or in person in Milan · Free first orientation on WhatsApp",
      location: {
        title: "Looking for a birth chart reading in Milan?",
        lead: "Sessions are held online and, depending on availability, in person in Milan. In Milan Sarita works in Italian, Spanish, and English, and keeps online work available wherever you live.",
      },
      ctaTitle: "Want to understand what your birth chart says about you?",
    },
  },
  sinastria: {
    es: {
      title: "Sinastría en Milán: compatibilidad de pareja",
      eyebrow: "Astrología psicológica · Milán y online",
      mode: "Online o presencial en Milán",
      seoTitle: "Sinastría en Milán — Compatibilidad de pareja",
      seoDescription:
        "Sinastría en Milán y online: análisis de compatibilidad entre dos cartas natales con Sarita Shakti. Pareja, familia o trabajo. Sesión de 90 minutos.",
      heroNote: "Online o presencial en Milán · Primera orientación por WhatsApp gratuita",
      location: {
        title: "¿Buscas una sinastría en Milán?",
        lead: "Las sesiones de sinastría se realizan online y, según disponibilidad, presencialmente en Milán, en pareja o individualmente.",
      },
      ctaTitle: "¿Hay algo de vuestra relación que no termináis de entender?",
    },
    en: {
      title: "Synastry Reading in Milan",
      eyebrow: "Psychological astrology · Milan and online",
      mode: "Online or in person in Milan",
      seoTitle: "Synastry Reading in Milan — Relationship Compatibility",
      seoDescription:
        "Synastry in Milan and online: compatibility analysis of two birth charts with Sarita Shakti. Couples, family, or work. A 90-minute session.",
      heroNote: "Online or in person in Milan · Free first orientation on WhatsApp",
      location: {
        title: "Looking for a synastry reading in Milan?",
        lead: "Synastry sessions are held online and, depending on availability, in person in Milan — as a couple or individually.",
      },
      ctaTitle: "Is there something about your relationship you can't quite figure out?",
    },
  },
  revolucionSolar: {
    es: {
      title: "Revolución Solar en Milán: tu carta del año",
      eyebrow: "Astrología psicológica · Milán y online",
      mode: "Online o presencial en Milán",
      seoTitle: "Revolución Solar en Milán — Tu carta del año",
      seoDescription:
        "Revolución solar en Milán y online con Sarita Shakti: la lectura de tu año astrológico desde tu cumpleaños. Sesión de 60 minutos.",
      heroNote: "Online o presencial en Milán · Primera orientación por WhatsApp gratuita",
      location: {
        title: "¿Buscas una revolución solar en Milán?",
        lead: "Puedes hacer tu lectura anual online o, según disponibilidad, presencialmente en Milán, idealmente cerca de tu cumpleaños.",
      },
      ctaTitle: "¿Quieres entender mejor el año que tienes delante?",
    },
    en: {
      title: "Solar Return Reading in Milan",
      eyebrow: "Psychological astrology · Milan and online",
      mode: "Online or in person in Milan",
      seoTitle: "Solar Return Reading in Milan — Your Year Ahead",
      seoDescription:
        "Solar return reading in Milan and online with Sarita Shakti: your astrological year from your birthday. A 60-minute session.",
      heroNote: "Online or in person in Milan · Free first orientation on WhatsApp",
      location: {
        title: "Looking for a solar return reading in Milan?",
        lead: "You can have your yearly reading online or, depending on availability, in person in Milan, ideally near your birthday.",
      },
      ctaTitle: "Want to understand the year ahead of you?",
    },
  },
  coachingAstrologico: {
    es: {
      title: "Coaching Astrológico en Milán y Online",
      eyebrow: "Astrología psicológica · Online y Milán",
      mode: "Online (presencial en Milán según disponibilidad)",
      seoTitle: "Coaching Astrológico en Milán y Online",
      seoDescription:
        "Coaching astrológico online y en Milán con Sarita Shakti: sesiones individuales, seguimiento mensual y packs de acompañamiento.",
      heroNote: "Online, estés donde estés · Primera orientación por WhatsApp gratuita",
      location: {
        title: "Coaching astrológico online, también desde Milán",
        lead: "El coaching se realiza online, por videollamada. Si estás en Milán, algunas sesiones pueden coordinarse presencialmente según disponibilidad.",
      },
      ctaTitle: "¿Hay algo que sabes que necesitas trabajar?",
    },
    en: {
      title: "Astrological Coaching in Milan and Online",
      eyebrow: "Psychological astrology · Online and Milan",
      mode: "Online (in person in Milan depending on availability)",
      seoTitle: "Astrological Coaching in Milan and Online",
      seoDescription:
        "Astrological coaching online and in Milan with Sarita Shakti: individual sessions, monthly follow-ups, and guidance packs.",
      heroNote: "Online, wherever you are · Free first orientation on WhatsApp",
      location: {
        title: "Online astrological coaching, also from Milan",
        lead: "Coaching happens online by video call. If you are in Milan, some sessions can be arranged in person depending on availability.",
      },
      ctaTitle: "Is there something you know you need to work on?",
    },
  },
};
