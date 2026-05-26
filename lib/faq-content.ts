import { Locale } from "./locales";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqContent: Record<
  Locale,
  { title: string; intro: string; teaserTitle: string; cta: string; items: FaqItem[] }
> = {
  es: {
    title: "Preguntas frecuentes sobre astrología psicológica Barcelona",
    intro:
      "Respuestas claras para entender cómo trabaja Sarita Shakti con astrología psicológica, carta natal, coaching astrológico y yoga terapéutico en Barcelona y online.",
    teaserTitle: "¿Tienes dudas antes de reservar?",
    cta: "FAQ astrología psicológica",
    items: [
      {
        question: "¿Qué es la astrología psicológica?",
        answer:
          "La astrología psicológica es una forma de leer la carta natal como mapa de autoconocimiento. En astrología psicológica Barcelona, Sarita la utiliza para comprender patrones, talentos, bloqueos y momentos de cambio sin fatalismo.",
      },
      {
        question: "¿En qué se diferencia de la astrología tradicional?",
        answer:
          "No se centra en predecir hechos cerrados, sino en comprender procesos internos. La lectura mira símbolos, ciclos y experiencias para que puedas elegir con más conciencia.",
      },
      {
        question: "¿Para qué sirve una carta natal?",
        answer:
          "La carta natal sirve para ver tu manera de vincularte, tus recursos, tus heridas y tu dirección evolutiva. Una carta natal Barcelona con Sarita puede ayudarte a ordenar preguntas personales y tomar decisiones desde un lugar más claro.",
      },
      {
        question: "¿Cuánto dura una sesión?",
        answer:
          "La lectura de astrología psicológica dura 90 minutos. Otras sesiones, como revolución solar o coaching astrológico Barcelona, pueden durar 60 o 30 minutos según el servicio.",
      },
      {
        question: "¿Se necesita creer en la astrología para que funcione?",
        answer:
          "No necesitas creer ciegamente. Basta con venir con apertura, curiosidad y ganas de observar tu historia desde otra perspectiva.",
      },
      {
        question: "¿Qué es el coaching astrológico?",
        answer:
          "Es un acompañamiento que usa los tránsitos y la carta natal como brújula para trabajar un proceso concreto. Une reflexión, escucha y pasos prácticos para integrar lo que aparece en la sesión.",
      },
      {
        question: "¿Puedo hacer la sesión online o solo presencial en Barcelona?",
        answer:
          "Puedes hacer la sesión online y, cuando haya disponibilidad, también presencial en Barcelona. La astrología psicológica Barcelona funciona muy bien en ambos formatos porque el centro del trabajo es el diálogo y la carta natal.",
      },
      {
        question: "¿En qué idiomas trabajas?",
        answer:
          "Sarita trabaja en español, italiano e inglés. Puedes elegir el idioma en el que te sientas más cómoda para hablar de tu proceso.",
      },
      {
        question: "¿Qué es el yoga terapéutico y cómo se relaciona con la astrología?",
        answer:
          "El yoga terapéutico ayuda a escuchar el cuerpo, regular el sistema nervioso y convertir la comprensión en práctica. Para Sarita, psicología y astrología Barcelona se integran mejor cuando también hay presencia corporal.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "Puedes empezar con una sola lectura si necesitas claridad puntual. Si estás atravesando un proceso, los packs o sesiones mensuales permiten acompañar el cambio con continuidad.",
      },
    ],
  },
  it: {
    title: "Domande frequenti su astrologia psicologica e yoga terapeutico",
    intro:
      "Risposte semplici per capire come Sarita Shakti lavora con astrologia psicologica, carta natale, coaching astrologico e yoga terapeutico a Barcellona e online.",
    teaserTitle: "Hai dubbi prima di prenotare?",
    cta: "FAQ astrologia psicologica",
    items: [
      {
        question: "Che cos'è l'astrologia psicologica?",
        answer:
          "L'astrologia psicologica legge la carta natale come mappa di conoscenza di sé. Sarita la usa per comprendere talenti, blocchi, relazioni e passaggi di vita senza fatalismo.",
      },
      {
        question: "In cosa è diversa dall'astrologia tradizionale?",
        answer:
          "Non cerca di prevedere eventi chiusi, ma di dare significato ai processi interiori. I simboli astrologici diventano un linguaggio per scegliere con più presenza.",
      },
      {
        question: "A cosa serve una carta natale?",
        answer:
          "La carta natale aiuta a vedere risorse, bisogni, ferite e direzione evolutiva. Può portare ordine quando senti molte domande aperte.",
      },
      {
        question: "Quanto dura una sessione?",
        answer:
          "La lettura di astrologia psicologica dura 90 minuti. Altri servizi, come rivoluzione solare o coaching astrologico, durano 60 o 30 minuti.",
      },
      {
        question: "Bisogna credere nell'astrologia perché funzioni?",
        answer:
          "Non serve credere ciecamente. Serve disponibilità ad ascoltarsi e a guardare la propria storia da una prospettiva nuova.",
      },
      {
        question: "Che cos'è il coaching astrologico?",
        answer:
          "È un accompagnamento che usa carta natale e transiti come bussola per lavorare su un tema concreto. Porta la lettura nella vita quotidiana.",
      },
      {
        question: "Posso fare la sessione online o solo a Barcellona?",
        answer:
          "Puoi lavorare online e, quando disponibile, anche in presenza a Barcellona. Il dialogo e la qualità dell'ascolto restano il centro della sessione.",
      },
      {
        question: "In quali lingue lavori?",
        answer:
          "Sarita lavora in italiano, spagnolo e inglese. Puoi scegliere la lingua in cui ti senti più libera di esprimerti.",
      },
      {
        question: "Che cos'è lo yoga terapeutico e come si collega all'astrologia?",
        answer:
          "Lo yoga terapeutico aiuta ad ascoltare il corpo e a regolare il sistema nervoso. L'astrologia mostra una mappa; il corpo aiuta a integrarla.",
      },
      {
        question: "Quante sessioni servono?",
        answer:
          "Una sola lettura può bastare per fare chiarezza. Se stai attraversando un processo, un pacchetto o un accompagnamento mensile dà continuità.",
      },
    ],
  },
  en: {
    title: "FAQ about psychological astrology and therapeutic yoga",
    intro:
      "Clear answers about how Sarita Shakti works with psychological astrology, natal charts, astrological coaching, and therapeutic yoga in Barcelona and online.",
    teaserTitle: "Questions before booking?",
    cta: "Psychological astrology FAQ",
    items: [
      {
        question: "What is psychological astrology?",
        answer:
          "Psychological astrology reads the natal chart as a map for self-knowledge. Sarita uses it to understand patterns, gifts, blocks, and life transitions without fatalism.",
      },
      {
        question: "How is it different from traditional astrology?",
        answer:
          "It is less about fixed prediction and more about understanding inner processes. The chart becomes a symbolic language for more conscious choices.",
      },
      {
        question: "What is a natal chart useful for?",
        answer:
          "A natal chart helps you see resources, needs, wounds, relationship patterns, and direction. It can bring order when you are carrying many open questions.",
      },
      {
        question: "How long does a session last?",
        answer:
          "A psychological astrology reading lasts 90 minutes. Other services, such as solar revolution or astrological coaching, may last 60 or 30 minutes.",
      },
      {
        question: "Do I need to believe in astrology for it to work?",
        answer:
          "You do not need blind belief. Openness, curiosity, and willingness to listen to yourself are enough.",
      },
      {
        question: "What is astrological coaching?",
        answer:
          "It is guidance that uses your natal chart and current transits as a compass for a concrete process. The aim is to turn insight into daily-life practice.",
      },
      {
        question: "Can I do the session online or only in Barcelona?",
        answer:
          "You can work online and, when available, in person in Barcelona. The heart of the session is the dialogue, the chart, and the quality of listening.",
      },
      {
        question: "Which languages do you work in?",
        answer:
          "Sarita works in Spanish, Italian, and English. Choose the language that lets you speak most freely about your process.",
      },
      {
        question: "What is therapeutic yoga and how does it relate to astrology?",
        answer:
          "Therapeutic yoga supports body awareness and nervous-system regulation. Astrology offers the map; the body helps you integrate it.",
      },
      {
        question: "How many sessions do I need?",
        answer:
          "One reading can be enough for a clear first step. If you are in a longer process, packs or monthly sessions create continuity.",
      },
    ],
  },
};
