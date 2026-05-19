import { Locale } from "./locales";

type TrainingOffer = {
  eyebrow: string;
  title: string;
  place: string;
  date: string;
  price: string;
  text: string;
  details: string[];
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

const milanModules = {
  it: [
    ["Modulo 1", "Il tema natale", "Astrologia psicologica, segni, case, pianeti, reggenze e prime pratiche di gruppo."],
    ["Modulo 2", "Sole e Luna", "Identità, bisogni emotivi e lettura del Sole e della Luna nei segni e nelle case."],
    ["Modulo 3", "Aspetti planetari e Mercurio", "Tipi di aspetti, linguaggio mentale, comunicazione e manifestazione di Mercurio."],
    ["Modulo 4", "Venere e Marte", "Energia femminile, energia maschile, desiderio, relazione, attrazione e azione."],
    ["Modulo 5", "Giove e Saturno", "Crescita, struttura, fiducia, limiti e responsabilità nella carta natale."],
    ["Modulo 6", "Urano e Nettuno", "Cambiamento, sensibilità, intuizione e visione collettiva."],
    ["Modulo 7", "Plutone e Lilith", "Ombra, paure profonde, potere personale e trasformazione."],
    ["Modulo 8", "Ascendenti e Chirone", "Direzione evolutiva, ascendente e Chirone come guaritore ferito."],
    ["Modulo 9", "Nodi lunari", "Missione personale, Nodo Sud, Nodo Nord e ciò che chiede di essere lasciato andare."],
    ["Modulo 10", "Classe pratica", "Lettura guidata di temi natali e integrazione del metodo."],
    ["Modulo 11", "Pratica e test finale", "Letture dei temi natali degli studenti, pratica di gruppo e consegna attestati."],
  ],
  es: [
    ["Módulo 1", "La carta natal", "Astrología psicológica, signos, casas, planetas, regencias y primeras prácticas en grupo."],
    ["Módulo 2", "Sol y Luna", "Identidad, necesidades emocionales y lectura del Sol y la Luna en signos y casas."],
    ["Módulo 3", "Aspectos planetarios y Mercurio", "Tipos de aspectos, lenguaje mental, comunicación y manifestación de Mercurio."],
    ["Módulo 4", "Venus y Marte", "Energía femenina, energía masculina, deseo, relación, atracción y acción."],
    ["Módulo 5", "Júpiter y Saturno", "Crecimiento, estructura, confianza, límites y responsabilidad en la carta natal."],
    ["Módulo 6", "Urano y Neptuno", "Cambio, sensibilidad, intuición y visión colectiva."],
    ["Módulo 7", "Plutón y Lilith", "Sombra, miedos profundos, poder personal y transformación."],
    ["Módulo 8", "Ascendentes y Quirón", "Dirección evolutiva, ascendente y Quirón como sanador herido."],
    ["Módulo 9", "Nodos lunares", "Misión personal, Nodo Sur, Nodo Norte y aquello que pide ser soltado."],
    ["Módulo 10", "Clase práctica", "Lectura guiada de cartas natales e integración del método."],
    ["Módulo 11", "Práctica y test final", "Lecturas de las cartas natales de estudiantes, práctica grupal y entrega de certificados."],
  ],
  en: [
    ["Module 1", "The natal chart", "Psychological astrology, signs, houses, planets, rulerships, and first group practices."],
    ["Module 2", "Sun and Moon", "Identity, emotional needs, and reading the Sun and Moon through signs and houses."],
    ["Module 3", "Planetary aspects and Mercury", "Types of aspects, mental language, communication, and Mercury's expression."],
    ["Module 4", "Venus and Mars", "Feminine energy, masculine energy, desire, relationship, attraction, and action."],
    ["Module 5", "Jupiter and Saturn", "Growth, structure, trust, limits, and responsibility in the natal chart."],
    ["Module 6", "Uranus and Neptune", "Change, sensitivity, intuition, and collective vision."],
    ["Module 7", "Pluto and Lilith", "Shadow, deep fears, personal power, and transformation."],
    ["Module 8", "Ascendants and Chiron", "Evolutionary direction, the ascendant, and Chiron as the wounded healer."],
    ["Module 9", "Lunar nodes", "Personal mission, South Node, North Node, and what needs to be released."],
    ["Module 10", "Practice class", "Guided natal chart readings and integration of the method."],
    ["Module 11", "Practice and final test", "Student natal chart readings, group practice, and certificate delivery."],
  ],
} satisfies Record<Locale, string[][]>;

function mapModules(locale: Locale): TrainingModule[] {
  return milanModules[locale].map(([label, title, text]) => ({
    label,
    title,
    text,
  }));
}

export const trainingContent: Record<Locale, TrainingContent> = {
  it: {
    eyebrow: "Training | Yoga e astrologia",
    title: "Formazioni per leggere il cielo attraverso il corpo.",
    intro:
      "Percorsi residenziali e in presenza che uniscono yoga terapeutico, astrologia psicologica e pratica esperienziale.",
    primaryCta: "Chiedi informazioni",
    secondaryCta: "Programma Milano",
    priceNote: "Prezzo indicativo",
    imageAlt: {
      hero: "Sarita Shakti durante una pratica di yoga in ritiro.",
      portrait: "Sarita Shakti insegna e spiega il lavoro astrologico.",
    },
    offers: [
      {
        eyebrow: "Residenziale",
        title: "Yoga e astrologia psicologica",
        place: "Serre",
        date: "Prossime date da confermare",
        price: "€350",
        text:
          "Sei giorni per studiare la carta natale e trasformare la comprensione astrologica in pratica corporea, respiro e presenza.",
        details: [
          "Tema natale, elementi, segni, pianeti, case e aspetti.",
          "Chakra, elementi, posizioni yoga, pranayama, Yoga Nidra e meditazione.",
          "Due sessioni extra dedicate alla descrizione e alla diagnosi della carta.",
        ],
      },
      {
        eyebrow: "Milano",
        title: "Scuola di astrologia psicologica",
        place: "Alma Matters Milano, via Solari 6",
        date: "Prossima coorte da confermare",
        price: "€1500 / €1700",
        text:
          "Un percorso annuale in presenza per imparare a leggere il tema natale con un approccio umano, psicologico e trasformativo.",
        details: [
          "Un weekend al mese, sabato e domenica, dalle 10:00 alle 17:30.",
          "Attestato di partecipazione al termine della formazione.",
          "Prezzo agevolato e rateizzazione da riconfermare con la prossima coorte.",
        ],
      },
    ],
    curriculum: {
      eyebrow: "Programma",
      title: "Undici moduli, dal simbolo alla lettura.",
      text:
        "Ogni modulo alterna teoria astrologica, pratica di gruppo e integrazione personale. Le prossime date saranno pubblicate quando confermate.",
      modules: mapModules("it"),
    },
    practice: {
      eyebrow: "Metodo",
      title: "Non solo studio: esperienza diretta.",
      text:
        "L'astrologia offre una mappa; lo yoga aiuta ad attivare e integrare quell'informazione dal corpo alla mente.",
      items: [
        "Lettura del potenziale, dei talenti e dei blocchi personali.",
        "Pratiche yoga legate a chakra, elementi e qualità planetarie.",
        "Gruppi piccoli, presenza della docente e spazio per domande reali.",
      ],
    },
  },
  es: {
    eyebrow: "Formación | Yoga y astrología",
    title: "Formaciones para leer el cielo desde el cuerpo.",
    intro:
      "Recorridos residenciales y presenciales que unen yoga terapéutico, astrología psicológica y práctica experiencial.",
    primaryCta: "Pedir información",
    secondaryCta: "Programa Milán",
    priceNote: "Precio orientativo",
    imageAlt: {
      hero: "Sarita Shakti durante una práctica de yoga en retiro.",
      portrait: "Sarita Shakti enseña y explica el trabajo astrológico.",
    },
    offers: [
      {
        eyebrow: "Residencial",
        title: "Yoga y astrología psicológica",
        place: "Serre",
        date: "Próximas fechas por confirmar",
        price: "€350",
        text:
          "Seis días para estudiar la carta natal y transformar la comprensión astrológica en práctica corporal, respiración y presencia.",
        details: [
          "Carta natal, elementos, signos, planetas, casas y aspectos.",
          "Chakras, elementos, posturas de yoga, pranayama, Yoga Nidra y meditación.",
          "Dos sesiones extra dedicadas a la descripción y diagnóstico de la carta.",
        ],
      },
      {
        eyebrow: "Milán",
        title: "Escuela de astrología psicológica",
        place: "Alma Matters Milano, via Solari 6",
        date: "Próxima cohorte por confirmar",
        price: "€1500 / €1700",
        text:
          "Un recorrido anual presencial para aprender a leer la carta natal con un enfoque humano, psicológico y transformador.",
        details: [
          "Un fin de semana al mes, sábado y domingo, de 10:00 a 17:30.",
          "Certificado de participación al finalizar la formación.",
          "Precio reducido y pago fraccionado a reconfirmar con la próxima cohorte.",
        ],
      },
    ],
    curriculum: {
      eyebrow: "Programa",
      title: "Once módulos, del símbolo a la lectura.",
      text:
        "Cada módulo alterna teoría astrológica, práctica de grupo e integración personal. Las próximas fechas se publicarán cuando estén confirmadas.",
      modules: mapModules("es"),
    },
    practice: {
      eyebrow: "Método",
      title: "No solo estudio: experiencia directa.",
      text:
        "La astrología ofrece un mapa; el yoga ayuda a activar e integrar esa información desde el cuerpo hacia la mente.",
      items: [
        "Lectura del potencial, los talentos y los bloqueos personales.",
        "Prácticas de yoga vinculadas a chakras, elementos y cualidades planetarias.",
        "Grupos pequeños, presencia de la docente y espacio para preguntas reales.",
      ],
    },
  },
  en: {
    eyebrow: "Training | Yoga and astrology",
    title: "Trainings for reading the sky through the body.",
    intro:
      "Residential and in-person paths combining therapeutic yoga, psychological astrology, and experiential practice.",
    primaryCta: "Ask for details",
    secondaryCta: "Milan program",
    priceNote: "Guide price",
    imageAlt: {
      hero: "Sarita Shakti during a retreat yoga practice.",
      portrait: "Sarita Shakti teaching and explaining astrological work.",
    },
    offers: [
      {
        eyebrow: "Residential",
        title: "Yoga and psychological astrology",
        place: "Serre",
        date: "Next dates to confirm",
        price: "€350",
        text:
          "Six days to study the natal chart and turn astrological understanding into embodied practice, breath, and presence.",
        details: [
          "Natal chart, elements, signs, planets, houses, and aspects.",
          "Chakras, elements, yoga postures, pranayama, Yoga Nidra, and meditation.",
          "Two extra sessions dedicated to chart description and diagnosis.",
        ],
      },
      {
        eyebrow: "Milan",
        title: "Psychological astrology school",
        place: "Alma Matters Milano, via Solari 6",
        date: "Next cohort to confirm",
        price: "€1500 / €1700",
        text:
          "A year-long in-person path for learning to read the natal chart with a human, psychological, and transformative approach.",
        details: [
          "One weekend per month, Saturday and Sunday, from 10:00 to 17:30.",
          "Participation certificate at the end of the training.",
          "Early price and installment options to reconfirm with the next cohort.",
        ],
      },
    ],
    curriculum: {
      eyebrow: "Program",
      title: "Eleven modules, from symbol to reading.",
      text:
        "Each module alternates astrological theory, group practice, and personal integration. Upcoming dates will be published once confirmed.",
      modules: mapModules("en"),
    },
    practice: {
      eyebrow: "Method",
      title: "Not just study: direct experience.",
      text:
        "Astrology offers a map; yoga helps activate and integrate that information from the body to the mind.",
      items: [
        "Reading personal potential, talents, and blocks.",
        "Yoga practices linked to chakras, elements, and planetary qualities.",
        "Small groups, teacher presence, and room for real questions.",
      ],
    },
  },
};
