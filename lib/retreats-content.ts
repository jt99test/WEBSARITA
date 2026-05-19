import { Locale } from "./locales";

type RetreatPillar = {
  title: string;
  text: string;
};

export type RetreatsContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: {
    hero: string;
    breakfast: string;
    food: string;
    sea: string;
  };
  pillars: RetreatPillar[];
  nourishment: {
    eyebrow: string;
    title: string;
    text: string;
  };
  practical: {
    eyebrow: string;
    title: string;
    text: string;
    items: RetreatPillar[];
  };
};

export const retreatsContent: Record<Locale, RetreatsContent> = {
  it: {
    eyebrow: "Ritiri | Sant Pol de Mar",
    title: "Ritiri sul mare per tornare al corpo.",
    intro:
      "Giornate di yoga terapeutico, respiro, alimentazione consapevole e spazio interiore nella luce mediterranea di Sant Pol de Mar.",
    primaryCta: "Chiedi informazioni",
    secondaryCta: "Cosa include",
    imageAlt: {
      hero: "Gruppo in pratica yoga sulla spiaggia di Sant Pol de Mar.",
      breakfast: "Colazione del ritiro con frutta fresca e vista sul mare.",
      food: "Piatto vegetale colorato preparato per il ritiro.",
      sea: "Vista del mare e del paese di Sant Pol de Mar.",
    },
    pillars: [
      {
        title: "Pratica",
        text: "Yoga terapeutico, movimento dolce, respiro e ascolto corporeo per sciogliere tensioni e ritrovare presenza.",
      },
      {
        title: "Nutrimento",
        text: "Cucina naturale, colorata e leggera, pensata come parte del processo di purificazione e radicamento.",
      },
      {
        title: "Integrazione",
        text: "Momenti di silenzio, condivisione e orientamento interiore per portare la pratica nella vita quotidiana.",
      },
    ],
    nourishment: {
      eyebrow: "Cibo e cura",
      title: "La tavola fa parte della pratica.",
      text:
        "Il ritiro non separa movimento, riposo e nutrimento. I pasti diventano uno spazio di attenzione: ingredienti vivi, colori, semplicità e una cura concreta per il sistema nervoso.",
    },
    practical: {
      eyebrow: "Dettagli pratici",
      title: "Date e prezzi saranno confermati dalla cliente.",
      text:
        "Questa pagina è pronta per accogliere il programma finale senza inventare logistica non ancora approvata.",
      items: [
        {
          title: "Luogo",
          text: "Sant Pol de Mar, tra mare, natura e spazi di pratica raccolti.",
        },
        {
          title: "Programma",
          text: "Da confermare: orari, durata, attività incluse e livello di pratica.",
        },
        {
          title: "Prenotazione",
          text: "Da collegare al sistema scelto per booking e pagamenti, quando sarà deciso.",
        },
      ],
    },
  },
  es: {
    eyebrow: "Retiros | Sant Pol de Mar",
    title: "Retiros junto al mar para volver al cuerpo.",
    intro:
      "Días de yoga terapéutico, respiración, alimentación consciente y espacio interior en la luz mediterránea de Sant Pol de Mar.",
    primaryCta: "Pedir información",
    secondaryCta: "Qué incluye",
    imageAlt: {
      hero: "Grupo practicando yoga en la playa de Sant Pol de Mar.",
      breakfast: "Desayuno del retiro con fruta fresca y vista al mar.",
      food: "Plato vegetal colorido preparado para el retiro.",
      sea: "Vista del mar y del pueblo de Sant Pol de Mar.",
    },
    pillars: [
      {
        title: "Práctica",
        text: "Yoga terapéutico, movimiento suave, respiración y escucha corporal para soltar tensiones y recuperar presencia.",
      },
      {
        title: "Nutrición",
        text: "Cocina natural, colorida y ligera, pensada como parte del proceso de purificación y arraigo.",
      },
      {
        title: "Integración",
        text: "Momentos de silencio, compartir y orientación interior para llevar la práctica a la vida cotidiana.",
      },
    ],
    nourishment: {
      eyebrow: "Comida y cuidado",
      title: "La mesa también forma parte de la práctica.",
      text:
        "El retiro no separa movimiento, descanso y nutrición. Las comidas se convierten en un espacio de atención: ingredientes vivos, colores, sencillez y un cuidado concreto para el sistema nervioso.",
    },
    practical: {
      eyebrow: "Detalles prácticos",
      title: "Fechas y precios serán confirmados por la clienta.",
      text:
        "Esta página queda preparada para recibir el programa final sin inventar logística que todavía no está aprobada.",
      items: [
        {
          title: "Lugar",
          text: "Sant Pol de Mar, entre mar, naturaleza y espacios recogidos de práctica.",
        },
        {
          title: "Programa",
          text: "Por confirmar: horarios, duración, actividades incluidas y nivel de práctica.",
        },
        {
          title: "Reserva",
          text: "Se conectará al sistema elegido para reservas y pagos cuando esté decidido.",
        },
      ],
    },
  },
  en: {
    eyebrow: "Retreats | Sant Pol de Mar",
    title: "Sea-side retreats for coming back to the body.",
    intro:
      "Days of therapeutic yoga, breath, conscious nourishment, and inner space in the Mediterranean light of Sant Pol de Mar.",
    primaryCta: "Ask for details",
    secondaryCta: "What is included",
    imageAlt: {
      hero: "Group practicing yoga on the beach in Sant Pol de Mar.",
      breakfast: "Retreat breakfast with fresh fruit and sea view.",
      food: "Colorful plant-based dish prepared for the retreat.",
      sea: "View of the sea and town of Sant Pol de Mar.",
    },
    pillars: [
      {
        title: "Practice",
        text: "Therapeutic yoga, gentle movement, breath, and body listening to release tension and return to presence.",
      },
      {
        title: "Nourishment",
        text: "Natural, colorful, light food designed as part of the process of purification and grounding.",
      },
      {
        title: "Integration",
        text: "Moments of silence, sharing, and inner orientation for carrying the practice into daily life.",
      },
    ],
    nourishment: {
      eyebrow: "Food and Care",
      title: "The table is part of the practice.",
      text:
        "The retreat does not separate movement, rest, and nourishment. Meals become a place of attention: living ingredients, color, simplicity, and concrete care for the nervous system.",
    },
    practical: {
      eyebrow: "Practical Details",
      title: "Dates and prices will be confirmed by the client.",
      text:
        "This page is ready for the final program without inventing logistics that have not yet been approved.",
      items: [
        {
          title: "Place",
          text: "Sant Pol de Mar, between the sea, nature, and intimate spaces for practice.",
        },
        {
          title: "Program",
          text: "To confirm: schedule, duration, included activities, and practice level.",
        },
        {
          title: "Booking",
          text: "To connect to the selected booking and payment setup once decided.",
        },
      ],
    },
  },
};
