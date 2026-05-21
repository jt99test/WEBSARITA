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
      title: "Conosci Sarita",
      intro:
        "Biografia, percorso, contatti e dettagli pratici per iniziare una sessione con Sarita Shakti.",
    },
    es: {
      eyebrow: "About | Contacto",
      title: "Conoce a Sarita",
      intro:
        "Biografía, recorrido, contacto y detalles prácticos para empezar una sesión con Sarita Shakti.",
    },
    en: {
      eyebrow: "About | Contact",
      title: "Meet Sarita",
      intro:
        "Biography, path, contact details, and practical information for starting a session with Sarita Shakti.",
    },
  },
  booking: {
    it: {
      eyebrow: "Booking",
      title: "Prenotazioni",
      intro:
        "Prenota una sessione con Sarita attraverso Calendly o contattala per coordinare un'alternativa.",
    },
    es: {
      eyebrow: "Booking",
      title: "Reservas",
      intro:
        "Reserva una sesión con Sarita a través de Calendly o contáctala para coordinar una alternativa.",
    },
    en: {
      eyebrow: "Booking",
      title: "Booking",
      intro:
        "Book a session with Sarita through Calendly or contact her to coordinate another option.",
    },
  },
  coaching: {
    it: {
      eyebrow: "Servizi",
      title: "Astrologia psicologica e coaching",
      intro:
        "Letture astrologiche, coaching online, pacchetti brevi e pratiche yogiche con prezzi e durate confermati dalla cliente.",
    },
    es: {
      eyebrow: "Servicios",
      title: "Astrología psicológica y coaching",
      intro:
        "Lecturas astrológicas, coaching online, packs breves y prácticas yóguicas con precios y duraciones confirmados por la clienta.",
    },
    en: {
      eyebrow: "Services",
      title: "Psychological astrology and coaching",
      intro:
        "Astrology readings, online coaching, short packs, and yogic practices with prices and durations confirmed by the client.",
    },
  },
  training: {
    it: {
      eyebrow: "Formazione in presenza",
      title: "Formazione in yoga e astrologia psicologica",
      intro:
        "Percorsi di studio in presenza con yoga, carta natale e astrologia psicologica.",
    },
    es: {
      eyebrow: "Formación presencial",
      title: "Formación en yoga y astrología psicológica",
      intro:
        "Procesos de estudio presenciales con yoga, carta natal y astrología psicológica.",
    },
    en: {
      eyebrow: "In-person training",
      title: "Yoga and psychological astrology training",
      intro:
        "In-person study processes with yoga, natal chart work, and psychological astrology.",
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
