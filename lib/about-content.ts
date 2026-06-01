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
    title: "Sarita Shakti, astrologa psicologica a Milano",
    intro:
      "Astrologa psicologica, insegnante e accompagnatrice in percorsi online e in presenza a Milano.",
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
        "Diplomata alla Bihar School of Yoga in India nel 2001, Sarita Shakti è riconosciuta come insegnante di yoga in Catalogna e da oltre vent'anni condivide la pratica con persone e gruppi.",
        "Ha vissuto tre anni alla Bihar School of Yoga, immergendosi nel Karma Yoga e nello studio personale. Il suo nome spirituale, Saritashakti, significa energia che scorre e rappresenta il suo modo di accompagnare: fluire con l'energia della vita.",
        "Il suo percorso integra yoga, astrologia psicologica, ascolto relazionale e maternità. Ha organizzato programmi internazionali di yoga, introdotto lo yoga nelle scuole ed esplora la pratica come strumento concreto di miglioramento interiore.",
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
          title: "Astrologia",
          text: "Il servizio dedicato alle letture astrologiche vive anche su saritaastrology.com.",
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
      "Profesora y acompañante en procesos de yoga terapéutico, astrología psicológica y coaching holístico.",
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
        "Graduada en la Bihar School of Yoga, India, en 2001, Sarita Shakti es reconocida como instructora de yoga en Cataluña y lleva más de veinte años compartiendo la práctica con personas y grupos.",
        "Vivió tres años en la Bihar School of Yoga, dedicada al Karma Yoga y al estudio personal. Su nombre espiritual, Saritashakti, significa energía que fluye y habla de su manera de acompañar: fluir con la energía de la vida.",
        "Su camino integra yoga, astrología psicológica, escucha relacional y maternidad. Ha organizado programas internacionales de yoga, introducido yoga en escuelas y entiende la práctica como una herramienta concreta de mejora interior.",
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
          title: "Astrología",
          text: "El servicio dedicado a las lecturas astrológicas también vive en saritaastrology.com.",
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
      "Teacher and guide in therapeutic yoga, psychological astrology, and holistic coaching.",
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
        "A graduate of the Bihar School of Yoga in India in 2001, Sarita Shakti is recognized as a yoga instructor in Catalonia and has shared yoga with people and groups for more than twenty years.",
        "She spent three years at the Bihar School of Yoga immersed in Karma Yoga and personal study. Her spiritual name, Saritashakti, means flowing energy and reflects her way of guiding: flowing with the energy of life.",
        "Her path integrates yoga, psychological astrology, relational listening, and motherhood. She has organized international yoga programs, introduced yoga in schools, and approaches practice as a concrete tool for inner growth.",
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
          title: "Astrology",
          text: "The dedicated astrology reading service also lives at saritaastrology.com.",
        },
        {
          title: "Training",
          text: "Bihar School of Yoga, transpersonal psychological astrology, medical and psychological astrology.",
        },
      ],
    },
  },
};
