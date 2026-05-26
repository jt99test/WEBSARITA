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
      title: "Sarita Shakti, astrologa psicologica a Barcellona",
      intro:
        "Biografia, contatti e percorso di Sarita Shakti per astrologia psicologica, carta natale e yoga terapeutico a Barcellona.",
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
      title: "Prenota astrologia psicologica a Barcellona",
      intro:
        "Prenota una sessione con Sarita attraverso Calendly o contattala per coordinare un'alternativa.",
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
      title: "Astrologia psicologica e coaching a Barcellona",
      intro:
        "Letture astrologiche, coaching online, pacchetti brevi e pratiche yogiche con prezzi e durate confermati dalla cliente.",
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
      eyebrow: "Corsi di meditazione",
      title: "Corsi di meditazione e yoga terapeutico a Barcellona",
      intro:
        "Percorsi mensili in presenza ad Alma Matters Milano per iniziare o approfondire la pratica meditativa.",
    },
    es: {
      eyebrow: "Cursos de meditación",
      title: "Cursos de meditación y yoga terapéutico en Milán",
      intro:
        "Recorridos mensuales presenciales en Alma Matters Milano para empezar o profundizar la práctica meditativa.",
    },
    en: {
      eyebrow: "Meditation courses",
      title: "Meditation and therapeutic yoga courses in Milan",
      intro:
        "Monthly in-person paths at Alma Matters Milano for beginning or deepening meditation practice.",
    },
  },
  blog: {
    it: {
      eyebrow: "Blog",
      title: "Articoli",
      intro:
        "Il blog sarà gestito in Sanity con post filtrati per lingua e varianti non obbligatorie.",
    },
    es: {
      eyebrow: "Blog",
      title: "Artículos",
      intro:
        "El blog se gestionará en Sanity con entradas filtradas por idioma y variantes no obligatorias.",
    },
    en: {
      eyebrow: "Blog",
      title: "Articles",
      intro:
        "The blog will be managed in Sanity with posts filtered by language and optional language variants.",
    },
  },
};
