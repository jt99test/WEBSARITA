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
        "La pagina prenotazioni usera un embed sostituibile, in attesa della scelta tra Google Appointment Schedules e Calendly.",
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
        "Le offerte e i prezzi verranno costruiti dai materiali in docs/client-source, con conferma richiesta per ogni discrepanza.",
      note: "Da confermare: il servizio standalone di lavaggio intestinale a EUR110.",
    },
    es: {
      eyebrow: "Servicios",
      title: "Coaching y astrología psicológica",
      intro:
        "Las ofertas y precios se construirán desde los materiales en docs/client-source, confirmando cualquier discrepancia.",
      note: "Por confirmar: el lavado intestinal independiente de EUR110.",
    },
    en: {
      eyebrow: "Services",
      title: "Coaching and psychological astrology",
      intro:
        "Offerings and prices will be built from docs/client-source, with discrepancies confirmed before launch.",
      note: "To confirm: standalone intestinal wash at EUR110.",
    },
  },
  retreats: {
    it: {
      eyebrow: "Ritiri",
      title: "Ritiri a Sant Pol de Mar",
      intro:
        "Questa sezione attende copy e dettagli finali su date, programma, prezzi e disponibilita.",
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
      title: "Formazione",
      intro:
        "La pagina training sarà completata quando saranno confermati contenuti, struttura e dettagli dell'offerta.",
    },
    es: {
      eyebrow: "Formación",
      title: "Formación",
      intro:
        "La página de formación se completará cuando se confirmen contenidos, estructura y detalles de la oferta.",
    },
    en: {
      eyebrow: "Training",
      title: "Training",
      intro:
        "The training page will be completed once content, structure, and offer details are confirmed.",
    },
  },
  blog: {
    it: {
      eyebrow: "Blog",
      title: "Articoli",
      intro:
        "Il blog sara gestito in Sanity con post filtrati per lingua e varianti non obbligatorie.",
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
