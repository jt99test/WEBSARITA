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
  externalCtaLabel?: string;
  externalCtaUrl?: string;
};

type TrainingModule = {
  label: string;
  title: string;
  text: string;
};

export const almaMattersAstrologyCourseUrl =
  "https://www.almamattersmilano.com/almamatters/corsi/scuola-astrologia-psicologica/";

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

const curriculumModules = {
  it: [
    [
      "Astrologia 2027",
      "Dal tema natale alla lettura autonoma",
      "Undici weekend in presenza per studiare pianeti, segni, case, aspetti, nodi lunari, Chirone e pratica di lettura.",
    ],
    [
      "Metodo S.A.R.I.T.A.",
      "Astrologia psicologica ed esperienza",
      "Un approccio strutturato che integra simbolo astrologico, lavoro interiore, pratica di gruppo e trasformazione personale.",
    ],
    [
      "Meditazione I",
      "Respiro, presenza e chakra",
      "Quattro incontri per avvicinarsi alla meditazione attraverso respiro consapevole, rilassamento, chakra, mudra e pratica guidata.",
    ],
    [
      "Formato",
      "In presenza a Milano e Barcellona",
      "Percorsi dal vivo, gruppi contenuti e pratica accompagnata direttamente da Sarita Shakti.",
    ],
  ],
  es: [
    [
      "Astrología 2027",
      "De la carta natal a la lectura autónoma",
      "Once fines de semana presenciales para estudiar planetas, signos, casas, aspectos, nodos lunares, Quirón y práctica de lectura.",
    ],
    [
      "Método S.A.R.I.T.A.",
      "Astrología psicológica y experiencia",
      "Un enfoque estructurado que integra símbolo astrológico, trabajo interior, práctica grupal y transformación personal.",
    ],
    [
      "Meditación I",
      "Respiración, presencia y chakras",
      "Cuatro encuentros para acercarse a la meditación mediante respiración consciente, relajación, chakras, mudras y práctica guiada.",
    ],
    [
      "Formato",
      "Presencial en Milán y Barcelona",
      "Recorridos en vivo, grupos reducidos y práctica acompañada directamente por Sarita Shakti.",
    ],
  ],
  en: [
    [
      "Astrology 2027",
      "From natal chart to independent reading",
      "Eleven in-person weekends to study planets, signs, houses, aspects, lunar nodes, Chiron, and guided chart-reading practice.",
    ],
    [
      "S.A.R.I.T.A. method",
      "Psychological astrology through experience",
      "A structured approach integrating astrological symbolism, inner work, group practice, and personal transformation.",
    ],
    [
      "Meditation I",
      "Breath, presence, and chakras",
      "Four meetings for entering meditation through conscious breathing, relaxation, chakras, mudra, and guided practice.",
    ],
    [
      "Format",
      "In person in Milan and Barcelona",
      "Live courses, small groups, and practice guided directly by Sarita Shakti.",
    ],
  ],
} satisfies Record<Locale, string[][]>;

function mapModules(locale: Locale): TrainingModule[] {
  return curriculumModules[locale].map(([label, title, text]) => ({
    label,
    title,
    text,
  }));
}

export const trainingContent: Record<Locale, TrainingContent> = {
  it: {
    eyebrow: "Formazione | Milano e Barcellona",
    title: "Formazione in astrologia psicologica e meditazione.",
    intro:
      "Percorsi in presenza a Milano e Barcellona per studiare astrologia psicologica, meditazione, respiro e pratica interiore con Sarita Shakti.",
    primaryCta: "Chiedi informazioni",
    secondaryCta: "Vedi i percorsi",
    priceNote: "4 incontri",
    imageAlt: {
      hero: "Sarita Shakti durante una pratica di yoga.",
      portrait: "Sarita Shakti insegna e spiega una pratica di gruppo.",
    },
    offers: [
      {
        eyebrow: "Formazione professionale | Milano 2027",
        title: "Scuola di Astrologia Psicologica",
        place: "Alma Matters, Via Stradella 5, Milano",
        date: "11 weekend, gennaio-dicembre 2027.",
        price: "",
        text:
          "Un percorso annuale per imparare a leggere il tema natale come mappa dell'anima, con metodo strutturato, pratica di gruppo e attestato finale.",
        details: [],
        ctaLabel: "Vedi programma completo",
        ctaUrl: "/it/formazione-astrologia-psicologica-milano",
        externalCtaLabel: "Scheda ufficiale Alma Matters",
        externalCtaUrl: almaMattersAstrologyCourseUrl,
      },
      {
        eyebrow: "Formazione | Barcellona 2027",
        title: "Formazione in Astrologia Psicologica — 1° Anno",
        place: "Barcellona",
        date: "11 incontri di fine settimana, gennaio-dicembre 2027.",
        price: "",
        text:
          "Un viaggio per comprenderti, integrare i simboli del cielo e imparare a interpretare il tema natale.",
        details: [],
        ctaLabel: "Vedi programma completo",
        ctaUrl: "/it/formazione-astrologia-psicologica-barcellona",
      },
      {
        eyebrow: "Corso di Meditazione | Livello I",
        title: "Respiro, Presenza e Chakra",
        place: "Alma Matters Milano",
        date:
          "10 settembre, 8 ottobre, 5 novembre e 10 dicembre 2026. Giovedì, 20:00-22:00.",
        price: "",
        text:
          "Quattro incontri esperienziali per avvicinarsi alla meditazione in modo semplice, autentico e pratico.",
        details: [
          "Basi della meditazione, postura, respiro consapevole e rilassamento guidato.",
          "Sistema dei chakra, mudra, visualizzazioni e meditazione guidata.",
          "Osservazione interiore, concentrazione, presenza e pranayama per calmare il sistema nervoso.",
          "Strumenti pratici per integrare la meditazione nella vita quotidiana.",
        ],
        ctaLabel: "Prenota il tuo posto",
      },
    ],
    curriculum: {
      eyebrow: "Programma",
      title: "Percorsi dal vivo, pratica guidata e trasformazione personale.",
      text:
        "La formazione unisce astrologia psicologica, tradizione yogica e lavoro esperienziale. I dettagli pubblicati seguono i testi aggiornati inviati dalla cliente.",
      modules: mapModules("it"),
    },
    practice: {
      eyebrow: "Metodo",
      title: "Conoscere il simbolo, praticarlo nel corpo.",
      text:
        "Sarita integra quasi trent'anni di pratica yogica, astrologia psicologica e accompagnamento umano in percorsi concreti, progressivi e dal vivo.",
      items: [
        "Lezioni in presenza ad Alma Matters Milano e a Barcellona.",
        "Gruppi piccoli, pratica accompagnata e spazio per domande reali.",
        "Astrologia e meditazione come strumenti di conoscenza di sé, non di previsione.",
      ],
    },
  },
  es: {
    eyebrow: "Formación | Milán y Barcelona",
    title: "Formación en astrología psicológica y meditación.",
    intro:
      "Recorridos presenciales en Milán y Barcelona para estudiar astrología psicológica, meditación, respiración y práctica interior con Sarita Shakti.",
    primaryCta: "Pedir información",
    secondaryCta: "Ver recorridos",
    priceNote: "4 encuentros",
    imageAlt: {
      hero: "Sarita Shakti durante una práctica de yoga.",
      portrait: "Sarita Shakti enseña y explica una práctica de grupo.",
    },
    offers: [
      {
        eyebrow: "Formación profesional | Milán 2027",
        title: "Escuela de Astrología Psicológica",
        place: "Alma Matters, Via Stradella 5, Milán",
        date: "11 fines de semana, enero-diciembre 2027.",
        price: "",
        text:
          "Un recorrido anual para aprender a leer la carta natal como mapa del alma, con método estructurado, práctica grupal y certificado final.",
        details: [],
        ctaLabel: "Ver programa completo",
        ctaUrl: "/es/formacion-astrologia-psicologica-milan",
        externalCtaLabel: "Ficha oficial Alma Matters",
        externalCtaUrl: almaMattersAstrologyCourseUrl,
      },
      {
        eyebrow: "Formación | Barcelona 2027",
        title: "Formación en Astrología Psicológica — 1º Año",
        place: "Barcelona",
        date: "11 encuentros de fin de semana, enero-diciembre 2027.",
        price: "",
        text:
          "Un viaje para comprenderte, integrar los símbolos del cielo y aprender a interpretar la Carta Natal.",
        details: [],
        ctaLabel: "Ver programa completo",
        ctaUrl: "/es/formacion-astrologia-psicologica-barcelona",
      },
      {
        eyebrow: "Curso de Meditación | Nivel I",
        title: "Respiración, Presencia y Chakras",
        place: "Alma Matters Milano",
        date:
          "10 de septiembre, 8 de octubre, 5 de noviembre y 10 de diciembre de 2026. Jueves, 20:00-22:00.",
        price: "",
        text:
          "Cuatro encuentros experienciales para acercarse a la meditación de forma sencilla, auténtica y práctica.",
        details: [
          "Bases de la meditación, postura, respiración consciente y relajación guiada.",
          "Sistema de chakras, mudras, visualizaciones y meditación guiada.",
          "Observación interior, concentración, presencia y pranayama para calmar el sistema nervioso.",
          "Herramientas prácticas para integrar la meditación en la vida cotidiana.",
        ],
        ctaLabel: "Reserva tu plaza",
      },
    ],
    curriculum: {
      eyebrow: "Programa",
      title: "Recorridos en vivo, práctica guiada y transformación personal.",
      text:
        "La formación une astrología psicológica, tradición yóguica y trabajo experiencial. Los detalles publicados siguen los textos actualizados enviados por la clienta.",
      modules: mapModules("es"),
    },
    practice: {
      eyebrow: "Método",
      title: "Conocer el símbolo, practicarlo en el cuerpo.",
      text:
        "Sarita integra casi treinta años de práctica yóguica, astrología psicológica y acompañamiento humano en recorridos concretos, progresivos y presenciales.",
      items: [
        "Clases presenciales en Alma Matters Milano y en Barcelona.",
        "Grupos reducidos, práctica acompañada y espacio para preguntas reales.",
        "Astrología y meditación como herramientas de autoconocimiento, no de predicción.",
      ],
    },
  },
  en: {
    eyebrow: "Training | Milan & Barcelona",
    title: "Psychological astrology and meditation training.",
    intro:
      "In-person courses in Milan and Barcelona for studying psychological astrology, meditation, breath, and inner practice with Sarita Shakti.",
    primaryCta: "Ask for details",
    secondaryCta: "See courses",
    priceNote: "4 meetings",
    imageAlt: {
      hero: "Sarita Shakti during a yoga practice.",
      portrait: "Sarita Shakti teaching and explaining a group practice.",
    },
    offers: [
      {
        eyebrow: "Professional training | Milan 2027",
        title: "School of Psychological Astrology",
        place: "Alma Matters, Via Stradella 5, Milan",
        date: "11 weekends, January-December 2027.",
        price: "",
        text:
          "A year-long training to learn how to read the natal chart as a map of the soul, with a structured method, group practice, and final certificate.",
        details: [],
        ctaLabel: "See full program",
        ctaUrl: "/en/psychological-astrology-training-milan",
        externalCtaLabel: "Official Alma Matters page",
        externalCtaUrl: almaMattersAstrologyCourseUrl,
      },
      {
        eyebrow: "Training | Barcelona 2027",
        title: "Psychological Astrology Training — Year 1",
        place: "Barcelona",
        date: "11 weekend meetings, January-December 2027.",
        price: "",
        text:
          "A journey to understand yourself, integrate the symbols of the sky, and learn to interpret the natal chart.",
        details: [],
        ctaLabel: "See full program",
        ctaUrl: "/en/psychological-astrology-training-barcelona",
      },
      {
        eyebrow: "Meditation Course | Level I",
        title: "Breath, Presence, and Chakras",
        place: "Alma Matters Milano",
        date:
          "September 10, October 8, November 5, and December 10, 2026. Thursdays, 20:00-22:00.",
        price: "",
        text:
          "Four experiential meetings for approaching meditation in a simple, authentic, and practical way.",
        details: [
          "Meditation foundations, posture, conscious breathing, and guided relaxation.",
          "Chakra system, mudra, visualizations, and guided meditation.",
          "Inner observation, concentration, presence, and pranayama to calm the nervous system.",
          "Practical tools for integrating meditation into everyday life.",
        ],
        ctaLabel: "Book your place",
      },
    ],
    curriculum: {
      eyebrow: "Program",
      title: "Live courses, guided practice, and personal transformation.",
      text:
        "The training brings together psychological astrology, yogic tradition, and experiential work. The published details follow the updated texts sent by the client.",
      modules: mapModules("en"),
    },
    practice: {
      eyebrow: "Method",
      title: "Understand the symbol, practice it through the body.",
      text:
        "Sarita integrates almost thirty years of yogic practice, psychological astrology, and human accompaniment into grounded, progressive, in-person courses.",
      items: [
        "In-person classes at Alma Matters Milano and in Barcelona.",
        "Small groups, guided practice, and space for real questions.",
        "Astrology and meditation as tools for self-knowledge, not prediction.",
      ],
    },
  },
};
