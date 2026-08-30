import { Locale } from "./locales";

type MilanAstrologyContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  highlights: Array<{
    title: string;
    text: string;
  }>;
  method: {
    eyebrow: string;
    title: string;
    text: string;
    points: string[];
  };
};

export const psychologicalAstrologyMilanContent: Record<
  Locale,
  MilanAstrologyContent
> = {
  it: {
    eyebrow: "Astrologia psicologica | Milano e online",
    title: "Astrologia psicologica a Milano con Sarita Shakti",
    intro:
      "Capisci cosa ti sta succedendo, perché certi schemi si ripetono e cosa puoi farci — in italiano, online o in presenza a Milano quando disponibile.",
    primaryCta: "Prenota una sessione",
    secondaryCta: "Vedi i servizi",
    highlights: [
      {
        title: "Carta natale e processi interiori",
        text:
          "La carta natale viene letta come mappa simbolica della psiche: talenti, blocchi, relazioni, momenti di passaggio e direzione evolutiva.",
      },
      {
        title: "Sessioni in italiano",
        text:
          "Uno spazio di dialogo chiaro e umano per integrare astrologia psicologica, ascolto corporeo e passi concreti nella vita quotidiana.",
      },
      {
        title: "Milano come punto di riferimento",
        text:
          "Sarita porta a Milano formazione e sessioni in presenza secondo disponibilita, mantenendo anche il lavoro online per chi vive altrove.",
      },
    ],
    method: {
      eyebrow: "Approccio",
      title: "Non previsione, ma consapevolezza.",
      text:
        "L'astrologia psicologica non chiude il futuro in una sentenza. Aiuta a leggere cicli, risorse e conflitti interni per scegliere con piu presenza.",
      points: [
        "Letture individuali di 90 minuti.",
        "Coaching astrologico online e percorsi brevi.",
        "Integrazione con yoga terapeutico e ascolto somatico quando utile.",
      ],
    },
  },
  es: {
    eyebrow: "Astrología psicológica | Milán y online",
    title: "Astrología psicológica en Milán con Sarita Shakti",
    intro:
      "Comprende lo que te está pasando, por qué ciertos patrones se repiten y qué puedes hacer con ello — en italiano, español o inglés, online o presencialmente en Milán cuando haya disponibilidad.",
    primaryCta: "Reservar una sesión",
    secondaryCta: "Ver servicios",
    highlights: [
      {
        title: "Lectura profunda de carta natal",
        text:
          "Una lectura psicologica para comprender patrones, talentos, bloqueos y momentos de cambio desde una mirada evolutiva.",
      },
      {
        title: "Sesiones en tu idioma",
        text:
          "Las sesiones online en espanol, italiano e ingles siguen disponibles vivas donde vivas.",
      },
      {
        title: "Milan para formacion y encuentros",
        text:
          "Milan aparece como mercado especifico para formacion presencial y sesiones cuando Sarita abra disponibilidad alli.",
      },
    ],
    method: {
      eyebrow: "Método",
      title: "Astrología psicológica sin fatalismo.",
      text:
        "El objetivo no es predecir, sino ordenar lo que ya se mueve dentro de ti y convertir la lectura en decisiones, presencia y práctica.",
      points: [
        "Lecturas individuales de 90 minutos.",
        "Coaching astrológico online y procesos breves.",
        "Posible integración con yoga terapéutico y escucha corporal.",
      ],
    },
  },
  en: {
    eyebrow: "Psychological astrology | Milan and online",
    title: "Psychological astrology in Milan with Sarita Shakti",
    intro:
      "Understand what is happening to you, why certain patterns repeat, and what you can do about it — in English, Italian, or Spanish, online or in Milan when availability opens.",
    primaryCta: "Book a session",
    secondaryCta: "View services",
    highlights: [
      {
        title: "Natal chart as inner map",
        text:
          "A psychological reading of the chart as a symbolic map of patterns, resources, relationships, blocks, and life transitions.",
      },
      {
        title: "International and online",
        text:
          "Sessions are available online in English, Spanish, and Italian, with Milan as a key location for in-person work and training.",
      },
      {
        title: "Milan without losing the wider context",
        text:
          "Sessions in English, Italian, and Spanish remain available online wherever you live.",
      },
    ],
    method: {
      eyebrow: "Approach",
      title: "Not prediction, but awareness.",
      text:
        "Psychological astrology does not close the future into a fixed statement. It helps you read cycles, resources, and inner conflicts with more presence.",
      points: [
        "Individual 90-minute readings.",
        "Online astrological coaching and short processes.",
        "Possible integration with therapeutic yoga and somatic listening.",
      ],
    },
  },
};
