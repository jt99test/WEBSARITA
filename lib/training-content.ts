import { Locale } from "./locales";

export type TrainingOffer = {
  eyebrow: string;
  title: string;
  place: string;
  date: string;
  price: string;
  text: string;
  details: string[];
  ctaLabel?: string;
  ctaUrl?: string;
};

type TrainingModule = {
  label: string;
  title: string;
  text: string;
};

export type TrainingContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  priceNote: string;
  imageAlt: {
    hero: string;
    portrait: string;
  };
  offers: TrainingOffer[];
  curriculum: {
    eyebrow: string;
    title: string;
    text: string;
    modules: TrainingModule[];
  };
  practice: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
};

const meditationModules = {
  it: [
    [
      "Livello I",
      "Respiro, presenza e chakra",
      "Per chi inizia o vuole consolidare le basi: chakra, pranayama, mudra, Trataka, Yoga Nidra e movimento consapevole.",
    ],
    [
      "Livello II",
      "Satyananda Yoga",
      "Per chi ha già una base meditativa: Yoga Nidra con Sankalpa, Antar Mouna, Chakra Shuddhi, Ajapa Japa, pranayama avanzato e mantra.",
    ],
    [
      "Formato",
      "Quattro incontri mensili",
      "Ogni livello prevede quattro sessioni di due ore in presenza, con gruppi piccoli e prenotazione anticipata consigliata.",
    ],
    [
      "Preparazione",
      "Pratica semplice e concreta",
      "Portare tappetino, cuscino o coperta e abbigliamento comodo. Si consiglia di non mangiare nelle due ore precedenti.",
    ],
  ],
  es: [
    [
      "Nivel I",
      "Respiración, presencia y chakras",
      "Para quien empieza o quiere consolidar las bases: chakras, pranayama, mudras, Trataka, Yoga Nidra y movimiento consciente.",
    ],
    [
      "Nivel II",
      "Satyananda Yoga",
      "Para quien ya tiene una base meditativa: Yoga Nidra con Sankalpa, Antar Mouna, Chakra Shuddhi, Ajapa Japa, pranayama avanzado y mantras.",
    ],
    [
      "Formato",
      "Cuatro encuentros mensuales",
      "Cada nivel incluye cuatro sesiones presenciales de dos horas, con grupos pequeños y reserva anticipada recomendada.",
    ],
    [
      "Preparación",
      "Práctica sencilla y concreta",
      "Traer esterilla, cojín o manta y ropa cómoda. Se recomienda no comer durante las dos horas previas.",
    ],
  ],
  en: [
    [
      "Level I",
      "Breath, presence, and chakras",
      "For beginners or anyone consolidating the basics: chakras, pranayama, mudra, Trataka, Yoga Nidra, and mindful movement.",
    ],
    [
      "Level II",
      "Satyananda Yoga",
      "For people with a meditation base: Yoga Nidra with Sankalpa, Antar Mouna, Chakra Shuddhi, Ajapa Japa, advanced pranayama, and mantra.",
    ],
    [
      "Format",
      "Four monthly meetings",
      "Each level includes four in-person two-hour sessions, with small groups and advance booking recommended.",
    ],
    [
      "Preparation",
      "Simple, grounded practice",
      "Bring a mat, cushion or blanket, and comfortable clothing. Avoid eating during the two hours before class.",
    ],
  ],
} satisfies Record<Locale, string[][]>;

function mapModules(locale: Locale): TrainingModule[] {
  return meditationModules[locale].map(([label, title, text]) => ({
    label,
    title,
    text,
  }));
}

export const trainingContent: Record<Locale, TrainingContent> = {
  it: {
    eyebrow: "Corsi | Meditazione a Milano",
    title: "Corsi di meditazione e yoga terapeutico a Barcellona.",
    intro:
      "Due percorsi mensili in presenza ad Alma Matters Milano: uno per iniziare e uno per approfondire la pratica secondo la tradizione yogica.",
    primaryCta: "Chiedi informazioni",
    secondaryCta: "Vedi i livelli",
    priceNote: "4 sessioni",
    imageAlt: {
      hero: "Sarita Shakti durante una pratica di yoga.",
      portrait: "Sarita Shakti insegna e spiega una pratica di gruppo.",
    },
    offers: [
      {
        eyebrow: "Livello I",
        title: "Respiro, Presenza e Chakra",
        place: "Alma Matters Milano",
        date: "Giovedi, 20:00-22:00. Prossime date da confermare.",
        price: "€150",
        text:
          "Un percorso per chi inizia o desidera consolidare le basi della meditazione attraverso corpo, respiro e attenzione.",
        details: [
          "Chakra, pranayama, mudra, Trataka, Yoga Nidra e movimento consapevole.",
          "Ogni sessione alterna pratica corporea, respiro e meditazione guidata.",
          "Nessuna esperienza richiesta.",
        ],
        ctaLabel: "Prenota il tuo posto",
      },
      {
        eyebrow: "Livello II",
        title: "Satyananda Yoga",
        place: "Alma Matters Milano",
        date: "Venerdi, 19:30-21:30. Prossime date da confermare.",
        price: "€150",
        text:
          "Un approfondimento per chi ha già una base di pratica meditativa, ispirato alla Bihar School of Yoga di Swami Satyananda Saraswati.",
        details: [
          "Yoga Nidra con Sankalpa, Antar Mouna, Chakra Shuddhi e Ajapa Japa.",
          "Pranayama avanzato con bandha, Nadi Shodhana e Surya Namaskar con mantra.",
          "Gruppi piccoli e prenotazione anticipata consigliata.",
        ],
        ctaLabel: "Prenota il tuo posto",
      },
    ],
    curriculum: {
      eyebrow: "Programma",
      title: "Due livelli, dalla base all'approfondimento.",
      text:
        "Le date esatte della prossima edizione saranno pubblicate quando confermate. Il programma mantiene la struttura dei corsi di meditazione a Milano inviati dalla cliente.",
      modules: mapModules("it"),
    },
    practice: {
      eyebrow: "Metodo",
      title: "Meditare non significa smettere di pensare.",
      text:
        "Significa imparare a tornare a sé attraverso respiro, corpo energetico, ascolto e tecniche concrete della tradizione yogica.",
      items: [
        "Pratica in presenza ad Alma Matters Milano.",
        "Gruppi piccoli, guida diretta e spazio per domande reali.",
        "Un percorso radicato nella formazione di Sarita alla Bihar School of Yoga.",
      ],
    },
  },
  es: {
    eyebrow: "Cursos | Meditación en Milán",
    title: "Cursos de meditación y yoga terapéutico en Milán.",
    intro:
      "Dos recorridos mensuales presenciales en Alma Matters Milano: uno para empezar y otro para profundizar la práctica según la tradición yóguica.",
    primaryCta: "Pedir información",
    secondaryCta: "Ver niveles",
    priceNote: "4 sesiones",
    imageAlt: {
      hero: "Sarita Shakti durante una práctica de yoga.",
      portrait: "Sarita Shakti enseña y explica una práctica de grupo.",
    },
    offers: [
      {
        eyebrow: "Nivel I",
        title: "Respiración, Presencia y Chakras",
        place: "Alma Matters Milano",
        date: "Jueves, 20:00-22:00. Próximas fechas por confirmar.",
        price: "€150",
        text:
          "Un recorrido para quien empieza o quiere consolidar las bases de la meditación a través del cuerpo, la respiración y la atención.",
        details: [
          "Chakras, pranayama, mudras, Trataka, Yoga Nidra y movimiento consciente.",
          "Cada sesión alterna práctica corporal, respiración y meditación guiada.",
          "No se requiere experiencia previa.",
        ],
        ctaLabel: "Reserva tu plaza",
      },
      {
        eyebrow: "Nivel II",
        title: "Satyananda Yoga",
        place: "Alma Matters Milano",
        date: "Viernes, 19:30-21:30. Próximas fechas por confirmar.",
        price: "€150",
        text:
          "Un recorrido de profundización para quien ya tiene una base meditativa, inspirado en la Bihar School of Yoga de Swami Satyananda Saraswati.",
        details: [
          "Yoga Nidra con Sankalpa, Antar Mouna, Chakra Shuddhi y Ajapa Japa.",
          "Pranayama avanzado con bandha, Nadi Shodhana y Surya Namaskar con mantras.",
          "Grupos pequeños y reserva anticipada recomendada.",
        ],
        ctaLabel: "Reserva tu plaza",
      },
    ],
    curriculum: {
      eyebrow: "Programa",
      title: "Dos niveles, de la base a la profundización.",
      text:
        "Las fechas exactas de la próxima edición se publicarán cuando estén confirmadas. El programa conserva la estructura de los cursos de meditación en Milán enviados por la clienta.",
      modules: mapModules("es"),
    },
    practice: {
      eyebrow: "Método",
      title: "Meditar no significa dejar de pensar.",
      text:
        "Significa aprender a volver a una misma a través de la respiración, el cuerpo energético, la escucha y técnicas concretas de la tradición yóguica.",
      items: [
        "Práctica presencial en Alma Matters Milano.",
        "Grupos pequeños, guía directa y espacio para preguntas reales.",
        "Un recorrido enraizado en la formación de Sarita en la Bihar School of Yoga.",
      ],
    },
  },
  en: {
    eyebrow: "Courses | Meditation in Milan",
    title: "Meditation and therapeutic yoga courses in Milan.",
    intro:
      "Two monthly in-person paths at Alma Matters Milano: one for beginners and one for deepening practice through the yogic tradition.",
    primaryCta: "Ask for details",
    secondaryCta: "See levels",
    priceNote: "4 sessions",
    imageAlt: {
      hero: "Sarita Shakti during a yoga practice.",
      portrait: "Sarita Shakti teaching and explaining a group practice.",
    },
    offers: [
      {
        eyebrow: "Level I",
        title: "Breath, Presence, and Chakras",
        place: "Alma Matters Milano",
        date: "Thursdays, 20:00-22:00. Next dates to confirm.",
        price: "€150",
        text:
          "A path for beginners or anyone consolidating meditation foundations through the body, breath, and attention.",
        details: [
          "Chakras, pranayama, mudra, Trataka, Yoga Nidra, and mindful movement.",
          "Each session alternates body practice, breath, and guided meditation.",
          "No previous experience required.",
        ],
        ctaLabel: "Book your place",
      },
      {
        eyebrow: "Level II",
        title: "Satyananda Yoga",
        place: "Alma Matters Milano",
        date: "Fridays, 19:30-21:30. Next dates to confirm.",
        price: "€150",
        text:
          "A deepening course for people with a meditation base, inspired by the Bihar School of Yoga of Swami Satyananda Saraswati.",
        details: [
          "Yoga Nidra with Sankalpa, Antar Mouna, Chakra Shuddhi, and Ajapa Japa.",
          "Advanced pranayama with bandha, Nadi Shodhana, and Surya Namaskar with mantra.",
          "Small groups and advance booking recommended.",
        ],
        ctaLabel: "Book your place",
      },
    ],
    curriculum: {
      eyebrow: "Program",
      title: "Two levels, from foundations to deepening.",
      text:
        "Exact dates for the next edition will be published once confirmed. The program keeps the structure of the Milan meditation courses sent by the client.",
      modules: mapModules("en"),
    },
    practice: {
      eyebrow: "Method",
      title: "Meditation does not mean stopping thought.",
      text:
        "It means learning to return to yourself through breath, the energetic body, listening, and concrete techniques from the yogic tradition.",
      items: [
        "In-person practice at Alma Matters Milano.",
        "Small groups, direct guidance, and room for real questions.",
        "A path rooted in Sarita's training at the Bihar School of Yoga.",
      ],
    },
  },
};
