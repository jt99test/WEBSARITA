import { Locale } from "./locales";

export const pageSlugs = [
  "about",
  "booking",
  "coaching",
  "training",
  "blog",
] as const;

export type PageSlug = (typeof pageSlugs)[number];

export type BasicPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  note?: string;
};

export const pageContent: Record<PageSlug, Record<Locale, BasicPageContent>> = {
  about: {
    it: {
      eyebrow: "About | Contact",
      title: "Sarita Shakti, astrologa psicologica a Milano",
      intro:
        "Biografia, contatti e percorso di Sarita Shakti per astrologia psicologica, carta natale, formazione a Milano e yoga terapeutico.",
    },
    es: {
      eyebrow: "About | Contacto",
      title: "Sarita Shakti, astróloga psicológica en Barcelona",
      intro:
        "Biografía, contacto y recorrido de Sarita Shakti para astrología psicológica, carta natal y yoga terapéutico en Barcelona.",
    },
    en: {
      eyebrow: "About | Contact",
      title: "Sarita Shakti, psychological astrologer in Barcelona",
      intro:
        "Biography, contact, and Sarita Shakti's path in psychological astrology, natal chart readings, and therapeutic yoga in Barcelona.",
    },
  },
  booking: {
    it: {
      eyebrow: "Booking",
      title: "Prenota astrologia psicologica online",
      intro:
        "Prenota una sessione online attraverso Calendly o contatta Sarita per coordinare un'alternativa.",
    },
    es: {
      eyebrow: "Booking",
      title: "Reserva astrología psicológica en Barcelona",
      intro:
        "Reserva una sesión con Sarita a través de Calendly o contáctala para coordinar una alternativa.",
    },
    en: {
      eyebrow: "Booking",
      title: "Book psychological astrology in Barcelona",
      intro:
        "Book a session with Sarita through Calendly or contact her to coordinate another option.",
    },
  },
  coaching: {
    it: {
      eyebrow: "Servizi",
      title: "Astrologia psicologica e coaching a Milano",
      intro:
        "Letture astrologiche in italiano, coaching online, sessioni a Milano quando disponibili e pratiche yogiche con prezzi confermati.",
    },
    es: {
      eyebrow: "Servicios",
      title: "Astrología psicológica y coaching en Barcelona",
      intro:
        "Lecturas astrológicas, coaching online, packs breves y prácticas yóguicas con precios y duraciones confirmados por la clienta.",
    },
    en: {
      eyebrow: "Services",
      title: "Psychological astrology and coaching in Barcelona",
      intro:
        "Astrology readings, online coaching, short packs, and yogic practices with prices and durations confirmed by the client.",
    },
  },
  training: {
    it: {
      eyebrow: "Formazione",
      title: "Formazione in astrologia psicologica e meditazione a Milano",
      intro:
        "Percorsi in presenza ad Alma Matters Milano: scuola di astrologia psicologica 2027 e corso di meditazione livello I.",
    },
    es: {
      eyebrow: "Formación",
      title: "Formación en astrología psicológica y meditación en Milán",
      intro:
        "Recorridos presenciales en Alma Matters Milano: escuela de astrología psicológica 2027 y curso de meditación nivel I.",
    },
    en: {
      eyebrow: "Training",
      title: "Psychological astrology and meditation training in Milan",
      intro:
        "In-person courses at Alma Matters Milano: psychological astrology school 2027 and meditation course level I.",
    },
  },
  blog: {
    it: {
      eyebrow: "Blog",
      title: "Blog di astrologia psicologica e yoga terapeutico",
      intro:
        "Articoli di Sarita Shakti su astrologia psicologica, carta natale, transiti, coaching astrologico, yoga terapeutico e consapevolezza.",
    },
    es: {
      eyebrow: "Blog",
      title: "Blog de astrología psicológica y yoga terapéutico",
      intro:
        "Artículos de Sarita Shakti sobre astrología psicológica, carta natal, tránsitos, coaching astrológico, yoga terapéutico y autoconocimiento.",
    },
    en: {
      eyebrow: "Blog",
      title: "Psychological astrology and therapeutic yoga blog",
      intro:
        "Articles by Sarita Shakti on psychological astrology, natal charts, transits, astrological coaching, therapeutic yoga, and self-knowledge.",
    },
  },
};
