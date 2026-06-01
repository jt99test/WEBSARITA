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
      "Letture di carta natale, sinastria, rivoluzione solare e coaching astrologico in italiano, con sessioni online e incontri in presenza a Milano quando disponibili.",
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
    eyebrow: "Astrologia psicologica | Milan y online",
    title: "Astrologia psicologica en Milan con Sarita Shakti",
    intro:
      "Sesiones de carta natal, sinastria, revolucion solar y coaching astrologico para personas que buscan trabajar con Sarita en italiano, espanol o ingles, online y en Milan cuando haya disponibilidad.",
    primaryCta: "Reservar una sesion",
    secondaryCta: "Ver servicios",
    highlights: [
      {
        title: "Lectura profunda de carta natal",
        text:
          "Una lectura psicologica para comprender patrones, talentos, bloqueos y momentos de cambio desde una mirada evolutiva.",
      },
      {
        title: "Barcelona sigue siendo el eje en espanol",
        text:
          "En espanol, la web mantiene Barcelona y el trabajo online como referencia principal para sesiones y acompanamiento personal.",
      },
      {
        title: "Milan para formacion y encuentros",
        text:
          "Milan aparece como mercado especifico para formacion presencial y sesiones cuando Sarita abra disponibilidad alli.",
      },
    ],
    method: {
      eyebrow: "Metodo",
      title: "Astrologia psicologica sin fatalismo.",
      text:
        "El objetivo no es predecir, sino ordenar lo que ya se mueve dentro de ti y convertir la lectura en decisiones, presencia y practica.",
      points: [
        "Lecturas individuales de 90 minutos.",
        "Coaching astrologico online y procesos breves.",
        "Posible integracion con yoga terapeutico y escucha corporal.",
      ],
    },
  },
  en: {
    eyebrow: "Psychological astrology | Milan and online",
    title: "Psychological astrology in Milan with Sarita Shakti",
    intro:
      "Natal chart readings, synastry, solar revolution, and astrological coaching with Sarita Shakti, online and in Milan when in-person availability is open.",
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
          "This page gives Milan a clear SEO focus while keeping Sarita's wider Barcelona and online work coherent.",
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
