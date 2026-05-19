import { Locale } from "./locales";

export const pageSlugs = [
  "about",
  "booking",
  "coaching",
  "retreats",
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
        "Biografia, sedi, contatti e dettagli pratici saranno completati con le informazioni finali della cliente.",
    },
    es: {
      eyebrow: "About | Contacto",
      title: "Conoce a Sarita",
      intro:
        "Biografía, ubicaciones, contacto y detalles prácticos se completarán con la información final de la clienta.",
    },
    en: {
      eyebrow: "About | Contact",
      title: "Meet Sarita",
      intro:
        "Biography, locations, contact details, and practical information will be completed with final client copy.",
    },
  },
  booking: {
    it: {
      eyebrow: "Booking",
      title: "Prenotazioni",
      intro:
        "La pagina prenotazioni userà un embed sostituibile, in attesa della scelta tra Google Appointment Schedules e Calendly.",
      note: "Bloccato da decisione cliente: strumento di booking e pagamenti.",
    },
    es: {
      eyebrow: "Booking",
      title: "Reservas",
      intro:
        "La página de reservas usará un embed reemplazable mientras se decide entre Google Appointment Schedules y Calendly.",
      note: "Bloqueado por decisión de cliente: herramienta de reservas y pagos.",
    },
    en: {
      eyebrow: "Booking",
      title: "Booking",
      intro:
        "The booking page will use a swappable embed while Google Appointment Schedules vs Calendly is confirmed.",
      note: "Blocked by client decision: booking tool and payments.",
    },
  },
  coaching: {
    it: {
      eyebrow: "Servizi",
      title: "Coaching e astrologia psicologica",
      intro:
        "Letture astrologiche, coaching e pratiche di purificazione yogica con prezzi e durate confermati dai materiali cliente.",
    },
    es: {
      eyebrow: "Servicios",
      title: "Coaching y astrología psicológica",
      intro:
        "Lecturas astrológicas, coaching y prácticas de purificación yóguica con precios y duraciones confirmados desde los materiales de la clienta.",
    },
    en: {
      eyebrow: "Services",
      title: "Coaching and psychological astrology",
      intro:
        "Astrological readings, coaching, and yogic purification practices with prices and durations confirmed from client materials.",
    },
  },
  retreats: {
    it: {
      eyebrow: "Ritiri",
      title: "Ritiri a Sant Pol de Mar",
      intro:
        "Questa sezione attende copy e dettagli finali su date, programma, prezzi e disponibilità.",
    },
    es: {
      eyebrow: "Retiros",
      title: "Retiros en Sant Pol de Mar",
      intro:
        "Esta sección espera copy y detalles finales sobre fechas, programa, precios y disponibilidad.",
    },
    en: {
      eyebrow: "Retreats",
      title: "Retreats in Sant Pol de Mar",
      intro:
        "This section is waiting on final copy and details for dates, program, pricing, and availability.",
    },
  },
  training: {
    it: {
      eyebrow: "Training",
      title: "Yoga e astrologia psicologica",
      intro:
        "Formazioni residenziali e in presenza con yoga, carta natale e astrologia psicologica.",
    },
    es: {
      eyebrow: "Formación",
      title: "Yoga y astrología psicológica",
      intro:
        "Formaciones residenciales y presenciales con yoga, carta natal y astrología psicológica.",
    },
    en: {
      eyebrow: "Training",
      title: "Yoga and psychological astrology",
      intro:
        "Residential and in-person trainings with yoga, natal chart work, and psychological astrology.",
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
