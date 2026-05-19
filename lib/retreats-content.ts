import { Locale } from "./locales";

type RetreatPillar = {
  title: string;
  text: string;
};

type RetreatPackage = {
  title: string;
  duration: string;
  price: string;
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
  packages: {
    eyebrow: string;
    title: string;
    text: string;
    items: RetreatPackage[];
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
      "Yoga terapeutico, astrologia, alimentazione consapevole e pratiche di purificazione in un formato intimo sul Mediterraneo.",
    primaryCta: "Chiedi informazioni",
    secondaryCta: "Pacchetti",
    imageAlt: {
      hero: "Gruppo in pratica yoga sulla spiaggia di Sant Pol de Mar.",
      breakfast: "Colazione del ritiro con frutta fresca e vista sul mare.",
      food: "Piatto vegetale colorato preparato per il ritiro.",
      sea: "Vista del mare e del paese di Sant Pol de Mar.",
    },
    packages: {
      eyebrow: "Pacchetti",
      title: "Quattro formati, massimo tre persone.",
      text:
        "Il sito attuale presenta ritiri all-inclusive con camera privata per ogni partecipante. Prezzi da ricontrollare prima del lancio, ma già presenti nella fonte cliente.",
      items: [
        {
          title: "Yoga Detox Retreat + Chart Reading",
          duration: "2 giorni / 1 notte",
          price: "€335",
          text:
            "Routine yoga personalizzata, lezione yoga, lavaggio intestinale breve, consigli nutrizionali e pratica SWAN.",
        },
        {
          title: "Living in Fullness Retreat",
          duration: "3 giorni / 2 notti",
          price: "€490",
          text:
            "Yoga personalizzato, yoga in spiaggia, bagno in mare facoltativo, lavaggio intestinale breve, nutrizione, SWAN e lettura del tema natale.",
        },
        {
          title: "Yoga and Astrology Retreat",
          duration: "4 giorni / 3 notti",
          price: "€670",
          text:
            "Yoga, mare, purificazione, teoria di pianeti, segni e case, pratica SWAN, tema natale e lettura dei transiti.",
        },
        {
          title: "Ekadashi Retreat",
          duration: "2 giorni / 1 notte",
          price: "€380",
          text:
            "Succhi biologici, lavaggio intestinale breve, due lezioni serali di yoga, respiro e meditazione guidata per gruppi fino a tre persone.",
        },
      ],
    },
    pillars: [
      {
        title: "Pratica",
        text: "Yoga terapeutico, movimento dolce, respiro e ascolto corporeo per sciogliere tensioni e ritrovare presenza.",
      },
      {
        title: "Purificazione",
        text: "Il lavaggio intestinale breve viene presentato come supporto per digestione, leggerezza, sonno e vitalità.",
      },
      {
        title: "Integrazione",
        text: "Carta natale, transiti e pratica SWAN aiutano a leggere potenziale, blocchi e direzione personale.",
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
      title: "Ritiri intimi sul mare.",
      text:
        "I ritiri sono pensati per un massimo di tre partecipanti, con esperienza personalizzata e camera privata.",
      items: [
        {
          title: "Luogo",
          text: "Sant Pol de Mar, tra mare, natura e spazi di pratica raccolti.",
        },
        {
          title: "Formato",
          text: "Pacchetti di 2, 3 o 4 giorni, con attività adattate al percorso scelto.",
        },
        {
          title: "Prenotazione",
          text: "Richiesta informazioni via contatto finché booking e pagamenti non saranno decisi.",
        },
      ],
    },
  },
  es: {
    eyebrow: "Retiros | Sant Pol de Mar",
    title: "Retiros junto al mar para volver al cuerpo.",
    intro:
      "Yoga terapéutico, astrología, alimentación consciente y prácticas de purificación en un formato íntimo junto al Mediterráneo.",
    primaryCta: "Pedir información",
    secondaryCta: "Paquetes",
    imageAlt: {
      hero: "Grupo practicando yoga en la playa de Sant Pol de Mar.",
      breakfast: "Desayuno del retiro con fruta fresca y vista al mar.",
      food: "Plato vegetal colorido preparado para el retiro.",
      sea: "Vista del mar y del pueblo de Sant Pol de Mar.",
    },
    packages: {
      eyebrow: "Paquetes",
      title: "Cuatro formatos, máximo tres personas.",
      text:
        "La web actual presenta retiros todo incluido con habitación privada para cada participante. Precios a revisar antes del lanzamiento, pero ya presentes en la fuente de la clienta.",
      items: [
        {
          title: "Yoga Detox Retreat + Chart Reading",
          duration: "2 días / 1 noche",
          price: "€335",
          text:
            "Rutina de yoga personalizada, clase de yoga, lavado intestinal corto, pautas de nutrición y práctica SWAN.",
        },
        {
          title: "Living in Fullness Retreat",
          duration: "3 días / 2 noches",
          price: "€490",
          text:
            "Yoga personalizado, yoga en la playa, baño en el mar opcional, lavado intestinal corto, nutrición, SWAN y lectura de carta natal.",
        },
        {
          title: "Yoga and Astrology Retreat",
          duration: "4 días / 3 noches",
          price: "€670",
          text:
            "Yoga, mar, purificación, teoría de planetas, signos y casas, práctica SWAN, carta natal y lectura de tránsitos.",
        },
        {
          title: "Ekadashi Retreat",
          duration: "2 días / 1 noche",
          price: "€380",
          text:
            "Zumos ecológicos, lavado intestinal corto, dos clases de yoga al atardecer, respiración y meditación guiada para grupos de hasta tres personas.",
        },
      ],
    },
    pillars: [
      {
        title: "Práctica",
        text: "Yoga terapéutico, movimiento suave, respiración y escucha corporal para soltar tensiones y recuperar presencia.",
      },
      {
        title: "Purificación",
        text: "El lavado intestinal corto se presenta como apoyo para digestión, ligereza, sueño y vitalidad.",
      },
      {
        title: "Integración",
        text: "Carta natal, tránsitos y práctica SWAN ayudan a leer potencial, bloqueos y dirección personal.",
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
      title: "Retiros íntimos junto al mar.",
      text:
        "Los retiros están pensados para un máximo de tres participantes, con experiencia personalizada y habitación privada.",
      items: [
        {
          title: "Lugar",
          text: "Sant Pol de Mar, entre mar, naturaleza y espacios recogidos de práctica.",
        },
        {
          title: "Formato",
          text: "Paquetes de 2, 3 o 4 días, con actividades adaptadas al recorrido elegido.",
        },
        {
          title: "Reserva",
          text: "Solicitud de información por contacto hasta que reservas y pagos estén decididos.",
        },
      ],
    },
  },
  en: {
    eyebrow: "Retreats | Sant Pol de Mar",
    title: "Sea-side retreats for coming back to the body.",
    intro:
      "Therapeutic yoga, astrology, conscious nourishment, and purification practices in an intimate Mediterranean format.",
    primaryCta: "Ask for details",
    secondaryCta: "Packages",
    imageAlt: {
      hero: "Group practicing yoga on the beach in Sant Pol de Mar.",
      breakfast: "Retreat breakfast with fresh fruit and sea view.",
      food: "Colorful plant-based dish prepared for the retreat.",
      sea: "View of the sea and town of Sant Pol de Mar.",
    },
    packages: {
      eyebrow: "Packages",
      title: "Four formats, maximum three people.",
      text:
        "The current site presents all-inclusive retreats with a private room for each participant. Prices should be rechecked before launch, but they are already present in the client source.",
      items: [
        {
          title: "Yoga Detox Retreat + Chart Reading",
          duration: "2 days / 1 night",
          price: "€335",
          text:
            "Personalized yoga routine, yoga class, short intestinal wash, nutrition insights, and SWAN practice.",
        },
        {
          title: "Living in Fullness Retreat",
          duration: "3 days / 2 nights",
          price: "€490",
          text:
            "Personalized yoga, beach yoga, optional sea swimming, short intestinal wash, nutrition insights, SWAN, and natal chart reading.",
        },
        {
          title: "Yoga and Astrology Retreat",
          duration: "4 days / 3 nights",
          price: "€670",
          text:
            "Yoga, sea, purification, theory of planets, signs and houses, SWAN practice, natal chart and transits reading.",
        },
        {
          title: "Ekadashi Retreat",
          duration: "2 days / 1 night",
          price: "€380",
          text:
            "Organic juices, short intestinal wash, two evening yoga classes, breathwork, and guided meditation for groups up to three people.",
        },
      ],
    },
    pillars: [
      {
        title: "Practice",
        text: "Therapeutic yoga, gentle movement, breath, and body listening to release tension and return to presence.",
      },
      {
        title: "Purification",
        text: "The short intestinal wash is presented as support for digestion, lightness, sleep, and vitality.",
      },
      {
        title: "Integration",
        text: "Natal chart work, transits, and SWAN practice help read potential, blocks, and personal direction.",
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
      title: "Intimate retreats by the sea.",
      text:
        "Retreats are designed for a maximum of three participants, with a personalized experience and private room.",
      items: [
        {
          title: "Place",
          text: "Sant Pol de Mar, between the sea, nature, and intimate spaces for practice.",
        },
        {
          title: "Format",
          text: "2, 3, or 4 day packages, with activities adapted to the chosen path.",
        },
        {
          title: "Booking",
          text: "Information request via contact until booking and payments are decided.",
        },
      ],
    },
  },
};
