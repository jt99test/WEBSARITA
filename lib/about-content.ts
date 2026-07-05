import { Locale } from "./locales";

type InfoCard = {
  title: string;
  text: string;
};

type StatCard = {
  value: string;
  label: string;
};

type CredentialCard = {
  title: string;
  text: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: {
    portrait: string;
    practice: string;
  };
  stats: StatCard[];
  bio: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  credentials: {
    eyebrow: string;
    title: string;
    text: string;
    cards: CredentialCard[];
  };
  method: {
    eyebrow: string;
    title: string;
    text: string;
    pillars: InfoCard[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    cards: InfoCard[];
  };
};

export const aboutContent: Record<Locale, AboutContent> = {
  it: {
    eyebrow: "About | Contact",
    title: "Sarita Shakti, astrologa psicologica a Milano",
    intro:
      "Da oltre 25 anni accompagna processi di trasformazione personale integrando astrologia psicologica, yoga, meditazione e coaching astrologico.",
    primaryCta: "Scrivi a Sarita",
    secondaryCta: "Leggi il percorso",
    imageAlt: {
      portrait: "Sarita Shakti seduta durante una spiegazione in una sessione di gruppo.",
      practice: "Sarita Shakti in una posizione di yoga al tramonto vicino al mare.",
    },
    stats: [
      { value: "25+", label: "anni di esperienza nel lavoro su corpo, psiche e coscienza" },
      { value: "1.000+", label: "persone accompagnate in processi di crescita personale" },
      { value: "2001", label: "formazione presso la Bihar School of Yoga in India" },
      { value: "170+", label: "recensioni Google a 5 stelle" },
    ],
    bio: {
      eyebrow: "Il percorso",
      title: "Un lavoro nato tra India, yoga e astrologia psicologica.",
      paragraphs: [
        "Il cammino di Sarita Shakti inizia in India, alla Bihar School of Yoga, dove si diploma nel 2001 e vive per tre anni immersa nello studio personale, nel Karma Yoga e nella pratica quotidiana. Questa esperienza resta la base del suo modo di accompagnare: presenza, ascolto e disciplina interiore.",
        "La sua formazione nello yoga comprende Hatha Yoga, Raja Yoga, Karma Yoga, Bhakti Yoga, Pranayama, Yoga Nidra, tecniche di concentrazione e meditazione. Per Sarita, lo yoga non è solo una pratica fisica: è un modo concreto per regolare il sistema nervoso, sviluppare presenza e ritrovare equilibrio.",
        "Negli anni integra questo percorso con l'astrologia psicologica, studiando con astrologi specializzati in Argentina, Cile e Colombia e approfondendo autori come Carl Gustav Jung, Dane Rudhyar, Liz Greene e Stephen Arroyo. La carta natale diventa così uno strumento di comprensione, non di previsione del futuro.",
      ],
    },
    credentials: {
      eyebrow: "Formazione",
      title: "Una base ampia, costruita in più di due decenni.",
      text:
        "Sarita unisce tradizione yogica, lettura simbolica, educazione emotiva e accompagnamento umano. Le sue formazioni non restano in comparti stagni: dialogano in un metodo pratico e personale.",
      cards: [
        {
          title: "Bihar School of Yoga",
          text: "Diploma in India nel 2001, tre anni di vita e pratica nella tradizione di Swami Satyananda Saraswati e Swami Niranjanananda Saraswati.",
        },
        {
          title: "Astrologia psicologica",
          text: "Formazione con astrologi di Argentina, Cile e Colombia, con riferimenti a Jung, Rudhyar, Greene e Arroyo.",
        },
        {
          title: "Sviluppo umano",
          text: "Biografia Umana con Laura Gutman, Disegno Umano, Costellazioni Familiari con Joan Garriga ed Educazione Emotiva.",
        },
        {
          title: "Esperienza educativa",
          text: "Lavoro con bambini, adolescenti ed educazione speciale, che ha affinato uno sguardo rispettoso sui processi di apprendimento e cambiamento.",
        },
      ],
    },
    method: {
      eyebrow: "Metodo",
      title: "Astrologia, corpo e coscienza nello stesso processo.",
      text:
        "Ogni sessione parte dalla storia reale della persona. La mappa astrologica offre linguaggio e orientamento; il lavoro corporeo e meditativo aiuta a integrare ciò che emerge dalla comprensione.",
      pillars: [
        {
          title: "Astrologia psicologica",
          text: "Carta natale, rivoluzione solare e sinastria per leggere potenziali, talenti, cicli e schemi inconsci.",
        },
        {
          title: "Coaching astrologico",
          text: "Uno spazio per tradurre la comprensione simbolica in decisioni concrete e più coerenti.",
        },
        {
          title: "Yoga terapeutico",
          text: "Respirazione, meditazione, presenza e rilassamento per sostenere equilibrio emotivo e chiarezza.",
        },
      ],
    },
    contact: {
      eyebrow: "Contatto",
      title: "Per letture astrologiche, coaching e sessioni di yoga terapeutico.",
      text:
        "Le sessioni possono iniziare online o, quando disponibile, in presenza a Milano. Per formazione e percorsi dal vivo, Sarita lavora principalmente ad Alma Matters Milano.",
      cards: [
        {
          title: "Canali",
          text: "saritashakti@gmail.com | +34 665 25 98 59 | Instagram @saritastroyoga | YouTube Sarita Shakti Yoga.",
        },
        {
          title: "Sessioni",
          text: "Letture astrologiche, coaching online, sessioni mensili, pacchetti brevi e incontri a Milano quando disponibili.",
        },
        {
          title: "Formazione",
          text: "Formazione in astrologia psicologica e meditazione in presenza ad Alma Matters Milano.",
        },
      ],
    },
  },
  es: {
    eyebrow: "About | Contacto",
    title: "Sarita Shakti, astróloga psicológica en Barcelona",
    intro:
      "Desde hace más de 25 años acompaña procesos de transformación personal integrando astrología psicológica, yoga, meditación y coaching astrológico.",
    primaryCta: "Escribir a Sarita",
    secondaryCta: "Leer el recorrido",
    imageAlt: {
      portrait: "Sarita Shakti sentada durante una explicación en una sesión grupal.",
      practice: "Sarita Shakti en una postura de yoga al atardecer junto al mar.",
    },
    stats: [
      { value: "25+", label: "años de experiencia acompañando cuerpo, psique y conciencia" },
      { value: "1.000+", label: "personas acompañadas en procesos de autoconocimiento" },
      { value: "2001", label: "formación en la Bihar School of Yoga, India" },
      { value: "170+", label: "reseñas de 5 estrellas en Google" },
    ],
    bio: {
      eyebrow: "El recorrido",
      title: "Un trabajo nacido entre India, yoga y astrología psicológica.",
      paragraphs: [
        "El camino de Sarita Shakti comienza en India, en la Bihar School of Yoga, donde se gradúa en 2001 y vive durante tres años dedicada al estudio personal, al Karma Yoga y a la práctica diaria. Esa experiencia sigue siendo la base de su forma de acompañar: presencia, escucha y disciplina interior.",
        "Su formación yóguica incluye Hatha Yoga, Raja Yoga, Karma Yoga, Bhakti Yoga, Pranayama, Yoga Nidra, técnicas de concentración y meditación. Para Sarita, el yoga no es solo una práctica física: es una herramienta concreta para regular el sistema nervioso, desarrollar presencia y recuperar equilibrio.",
        "Con los años integra este recorrido con la astrología psicológica, formándose con astrólogos especializados de Argentina, Chile y Colombia y profundizando en autores como Carl Gustav Jung, Dane Rudhyar, Liz Greene y Stephen Arroyo. La carta natal se convierte así en una herramienta de comprensión, no de predicción.",
      ],
    },
    credentials: {
      eyebrow: "Formación",
      title: "Una base amplia, construida durante más de dos décadas.",
      text:
        "Sarita une tradición yóguica, lectura simbólica, educación emocional y acompañamiento humano. Sus formaciones no funcionan como compartimentos separados: dialogan en una metodología práctica y personal.",
      cards: [
        {
          title: "Bihar School of Yoga",
          text: "Graduada en India en 2001, con tres años de vida y práctica dentro de la tradición de Swami Satyananda Saraswati y Swami Niranjanananda Saraswati.",
        },
        {
          title: "Astrología psicológica",
          text: "Formación con astrólogos de Argentina, Chile y Colombia, con referencias como Jung, Rudhyar, Greene y Arroyo.",
        },
        {
          title: "Desarrollo humano",
          text: "Biografía Humana con Laura Gutman, Diseño Humano, Constelaciones Familiares con Joan Garriga y Educación Emocional.",
        },
        {
          title: "Experiencia educativa",
          text: "Trabajo con infancia, adolescencia y educación especial, que afina una mirada respetuosa sobre los procesos de aprendizaje y cambio.",
        },
      ],
    },
    method: {
      eyebrow: "Método",
      title: "Astrología, cuerpo y conciencia dentro del mismo proceso.",
      text:
        "Cada sesión parte de la historia real de la persona. El mapa astrológico aporta lenguaje y orientación; el trabajo corporal y meditativo ayuda a integrar lo que se comprende.",
      pillars: [
        {
          title: "Astrología psicológica",
          text: "Carta natal, revolución solar y sinastría para leer potenciales, talentos, ciclos y patrones inconscientes.",
        },
        {
          title: "Coaching astrológico",
          text: "Un espacio para traducir la comprensión simbólica en decisiones concretas y más coherentes.",
        },
        {
          title: "Yoga terapéutico",
          text: "Respiración, meditación, presencia y relajación para sostener equilibrio emocional y claridad.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Para lecturas astrológicas, coaching y sesiones de yoga terapéutico.",
      text:
        "Las sesiones pueden empezar online o a través de contacto directo. Antes del lanzamiento revisaremos con la clienta los datos finales y el flujo de reservas.",
      cards: [
        {
          title: "Canales",
          text: "saritashakti@gmail.com | +34 665 25 98 59 | Instagram @saritastroyoga | YouTube Sarita Shakti Yoga.",
        },
        {
          title: "Sesiones",
          text: "Lecturas astrológicas, coaching online, sesiones mensuales, packs breves y prácticas de yoga terapéutico.",
        },
        {
          title: "Formación",
          text: "Bihar School of Yoga, astrología psicológica transpersonal, astrología médica y psicológica.",
        },
      ],
    },
  },
  en: {
    eyebrow: "About | Contact",
    title: "Sarita Shakti, psychological astrologer in Barcelona",
    intro:
      "For more than 25 years, Sarita has guided personal transformation through psychological astrology, yoga, meditation, and astrological coaching.",
    primaryCta: "Write to Sarita",
    secondaryCta: "Read the path",
    imageAlt: {
      portrait: "Sarita Shakti seated while explaining during a group session.",
      practice: "Sarita Shakti in a yoga posture at sunset by the sea.",
    },
    stats: [
      { value: "25+", label: "years of experience working with body, psyche, and consciousness" },
      { value: "1,000+", label: "people guided through self-knowledge and personal growth" },
      { value: "2001", label: "training at the Bihar School of Yoga in India" },
      { value: "170+", label: "5-star Google reviews" },
    ],
    bio: {
      eyebrow: "The Path",
      title: "Work shaped by India, yoga, and psychological astrology.",
      paragraphs: [
        "Sarita Shakti's path began in India at the Bihar School of Yoga, where she graduated in 2001 and lived for three years immersed in personal study, Karma Yoga, and daily practice. That experience remains the foundation of her way of guiding: presence, listening, and inner discipline.",
        "Her yogic training includes Hatha Yoga, Raja Yoga, Karma Yoga, Bhakti Yoga, Pranayama, Yoga Nidra, concentration techniques, and meditation. For Sarita, yoga is not only physical practice: it is a practical way to regulate the nervous system, develop presence, and restore balance.",
        "Over time, she integrated this path with psychological astrology, training with specialized astrologers from Argentina, Chile, and Colombia and studying authors such as Carl Gustav Jung, Dane Rudhyar, Liz Greene, and Stephen Arroyo. The natal chart becomes a tool for understanding, not prediction.",
      ],
    },
    credentials: {
      eyebrow: "Training",
      title: "A broad foundation built over more than two decades.",
      text:
        "Sarita brings together yogic tradition, symbolic language, emotional education, and human accompaniment. These disciplines do not sit apart: they meet in a practical, personal methodology.",
      cards: [
        {
          title: "Bihar School of Yoga",
          text: "Graduated in India in 2001, with three years of life and practice in the tradition of Swami Satyananda Saraswati and Swami Niranjanananda Saraswati.",
        },
        {
          title: "Psychological astrology",
          text: "Training with astrologers from Argentina, Chile, and Colombia, with references including Jung, Rudhyar, Greene, and Arroyo.",
        },
        {
          title: "Human development",
          text: "Human Biography with Laura Gutman, Human Design, Family Constellations with Joan Garriga, and Emotional Education.",
        },
        {
          title: "Educational experience",
          text: "Work with children, teenagers, and special education, refining a respectful view of learning and change.",
        },
      ],
    },
    method: {
      eyebrow: "Method",
      title: "Astrology, body, and consciousness in one process.",
      text:
        "Each session begins with the person's real story. The astrological map offers language and orientation; body-based and meditative work helps integrate what is understood.",
      pillars: [
        {
          title: "Psychological astrology",
          text: "Natal chart, solar return, and synastry to read potentials, talents, cycles, and unconscious patterns.",
        },
        {
          title: "Astrological coaching",
          text: "A space to translate symbolic understanding into concrete and more coherent decisions.",
        },
        {
          title: "Therapeutic yoga",
          text: "Breathwork, meditation, presence, and relaxation to support emotional balance and clarity.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "For astrology readings, coaching, and therapeutic yoga sessions.",
      text:
        "Sessions can begin online or through direct contact. Before launch, we will recheck final contact details and the booking flow with the client.",
      cards: [
        {
          title: "Channels",
          text: "saritashakti@gmail.com | +34 665 25 98 59 | Instagram @saritastroyoga | YouTube Sarita Shakti Yoga.",
        },
        {
          title: "Sessions",
          text: "Astrology readings, online coaching, monthly sessions, short packs, and therapeutic yoga practices.",
        },
        {
          title: "Training",
          text: "Bihar School of Yoga, transpersonal psychological astrology, medical and psychological astrology.",
        },
      ],
    },
  },
};
