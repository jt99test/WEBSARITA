import { Locale } from "./locales";

type InfoCard = {
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
  bio: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
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
    title: "Sarita Shakti",
    intro:
      "Insegnante e accompagnatrice in percorsi di yoga terapeutico, astrologia psicologica e coaching olistico tra Barcellona, Milano e Sant Pol de Mar.",
    primaryCta: "Scrivi a Sarita",
    secondaryCta: "Leggi il percorso",
    imageAlt: {
      portrait: "Sarita Shakti seduta durante una spiegazione in una sessione di gruppo.",
      practice: "Sarita Shakti in una posizione di yoga al tramonto vicino al mare.",
    },
    bio: {
      eyebrow: "Il percorso",
      title: "Un lavoro che ascolta il corpo, la psiche e i cicli.",
      paragraphs: [
        "Sarita Shakti accompagna persone e gruppi attraverso pratiche che uniscono movimento, respiro, consapevolezza corporea, astrologia psicologica e orientamento interiore.",
        "Il suo approccio è terapeutico e concreto: non separa ciò che accade nel corpo da ciò che vive nella mente, nelle relazioni e nei momenti di passaggio.",
        "Questa biografia sarà completata con il testo finale della cliente, così da restare precisa e fedele alla sua storia.",
      ],
    },
    contact: {
      eyebrow: "Contatto",
      title: "Per sessioni, ritiri e informazioni pratiche.",
      text:
        "I dettagli di contatto ufficiali verranno inseriti quando la cliente li confermerà. Per ora la pagina è pronta per accogliere WhatsApp, email, luoghi e link social senza rifare il layout.",
      cards: [
        {
          title: "Luoghi",
          text: "Barcellona, Milano e Sant Pol de Mar, con sessioni online quando necessario.",
        },
        {
          title: "Canali",
          text: "Da confermare: WhatsApp, email, Instagram e altri riferimenti ufficiali.",
        },
        {
          title: "Lingue",
          text: "Italiano, español e English, con contenuti principali disponibili in tutte e tre.",
        },
      ],
    },
  },
  es: {
    eyebrow: "About | Contacto",
    title: "Sarita Shakti",
    intro:
      "Profesora y acompañante en procesos de yoga terapéutico, astrología psicológica y coaching holístico entre Barcelona, Milán y Sant Pol de Mar.",
    primaryCta: "Escribir a Sarita",
    secondaryCta: "Leer el recorrido",
    imageAlt: {
      portrait: "Sarita Shakti sentada durante una explicación en una sesión grupal.",
      practice: "Sarita Shakti en una postura de yoga al atardecer junto al mar.",
    },
    bio: {
      eyebrow: "El recorrido",
      title: "Un trabajo que escucha el cuerpo, la psique y los ciclos.",
      paragraphs: [
        "Sarita Shakti acompaña a personas y grupos a través de prácticas que unen movimiento, respiración, conciencia corporal, astrología psicológica y orientación interior.",
        "Su enfoque es terapéutico y concreto: no separa lo que ocurre en el cuerpo de lo que vive en la mente, en las relaciones y en los momentos de cambio.",
        "Esta biografía se completará con el texto final de la clienta para mantenerse precisa y fiel a su historia.",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Para sesiones, retiros e información práctica.",
      text:
        "Los datos de contacto oficiales se añadirán cuando la clienta los confirme. Por ahora la página queda lista para WhatsApp, email, lugares y redes sin rehacer el diseño.",
      cards: [
        {
          title: "Lugares",
          text: "Barcelona, Milán y Sant Pol de Mar, con sesiones online cuando sea necesario.",
        },
        {
          title: "Canales",
          text: "Por confirmar: WhatsApp, email, Instagram y otras referencias oficiales.",
        },
        {
          title: "Idiomas",
          text: "Italiano, español e English, con contenidos principales disponibles en los tres.",
        },
      ],
    },
  },
  en: {
    eyebrow: "About | Contact",
    title: "Sarita Shakti",
    intro:
      "Teacher and guide in therapeutic yoga, psychological astrology, and holistic coaching between Barcelona, Milan, and Sant Pol de Mar.",
    primaryCta: "Write to Sarita",
    secondaryCta: "Read the path",
    imageAlt: {
      portrait: "Sarita Shakti seated while explaining during a group session.",
      practice: "Sarita Shakti in a yoga posture at sunset by the sea.",
    },
    bio: {
      eyebrow: "The Path",
      title: "Work that listens to the body, the psyche, and the cycles.",
      paragraphs: [
        "Sarita Shakti accompanies people and groups through practices that weave movement, breath, body awareness, psychological astrology, and inner orientation.",
        "Her approach is therapeutic and practical: it does not separate what happens in the body from what lives in the mind, relationships, and moments of transition.",
        "This biography will be completed with the client's final text so it remains precise and faithful to her story.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "For sessions, retreats, and practical details.",
      text:
        "Official contact details will be added once the client confirms them. For now, the page is ready for WhatsApp, email, locations, and social links without changing the layout.",
      cards: [
        {
          title: "Places",
          text: "Barcelona, Milan, and Sant Pol de Mar, with online sessions when needed.",
        },
        {
          title: "Channels",
          text: "To confirm: WhatsApp, email, Instagram, and other official references.",
        },
        {
          title: "Languages",
          text: "Italiano, español, and English, with main content available in all three.",
        },
      ],
    },
  },
};
