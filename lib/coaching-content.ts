import { Locale } from "./locales";

type Service = {
  title: string;
  duration?: string;
  price: string;
  summary: string;
};

export type CoachingContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: {
    hero: string;
    support: string;
  };
  servicesIntro: string;
  services: Service[];
  process: {
    eyebrow: string;
    title: string;
    text: string;
    points: string[];
  };
};

export const coachingContent: Record<Locale, CoachingContent> = {
  it: {
    eyebrow: "Servizi | Astrologia psicologica | Yoga terapeutico",
    title: "Coaching e astrologia psicologica",
    intro:
      "Sessioni individuali per leggere i movimenti interiori, sciogliere blocchi e integrare ciò che emerge attraverso il corpo, la parola e la carta natale.",
    primaryCta: "Prenota una sessione",
    secondaryCta: "Leggi i servizi",
    imageAlt: {
      hero: "Sarita Shakti durante una spiegazione in una sessione di yoga.",
      support: "Sarita Shakti in pratica al tramonto sul mare.",
    },
    servicesIntro:
      "Prezzi e durate confermati dai materiali cliente. Il pagamento online resta da decidere prima della pagina Booking.",
    services: [
      {
        title: "Lavaggio intestinale",
        price: "€110",
        summary:
          "Laghoo Shankhaprakshalana: pratica yogica di pulizia intestinale con acqua salata tiepida e movimenti specifici per favorire leggerezza, depurazione e chiarezza.",
      },
      {
        title: "Lavaggio intestinale & coaching astrologico",
        duration: "120 min",
        price: "€210",
        summary:
          "Un percorso integrato che unisce depurazione corporea e lettura astrologica di accompagnamento, pensato come reset profondo corpo-mente.",
      },
      {
        title: "Lettura di astrologia psicologica",
        duration: "90 min",
        price: "€150",
        summary:
          "Un'analisi completa della carta natale per comprendere talenti, dinamiche interiori e potenziale evolutivo.",
      },
      {
        title: "Sinastria — astrologia psicologica di coppia",
        duration: "90 min",
        price: "€150",
        summary:
          "Lettura della dinamica relazionale tra due persone per illuminare legami, proiezioni, affinità e sfide condivise.",
      },
      {
        title: "Coaching astrologico online",
        duration: "60 min",
        price: "€110",
        summary:
          "Sessione individuale online orientata alla trasformazione personale, alla comprensione dei blocchi interiori e all'attivazione delle risorse.",
      },
      {
        title: "Rivoluzione solare",
        duration: "60 min",
        price: "€110",
        summary:
          "Lettura annuale per comprendere temi chiave, sfide evolutive e opportunità di crescita dal compleanno in poi.",
      },
      {
        title: "Sessione mensile di coaching astrologico",
        duration: "30 min",
        price: "€50",
        summary:
          "Guida personalizzata mese per mese per leggere i transiti attivi e integrarli nella vita quotidiana.",
      },
    ],
    process: {
      eyebrow: "Come si lavora",
      title: "Una lettura che diventa pratica.",
      text:
        "Il punto non è prevedere il futuro, ma rendere visibile ciò che già si muove dentro di te. Le sessioni possono includere riflessione, ascolto corporeo e indicazioni pratiche da portare nella settimana.",
      points: [
        "Online o in presenza quando disponibile.",
        "Approccio psicologico, evolutivo e non fatalista.",
        "Possibile integrazione con routine di yoga personalizzate.",
      ],
    },
  },
  es: {
    eyebrow: "Servicios | Astrología psicológica | Yoga terapéutico",
    title: "Coaching y astrología psicológica",
    intro:
      "Sesiones individuales para leer los movimientos interiores, soltar bloqueos e integrar lo que aparece a través del cuerpo, la palabra y la carta natal.",
    primaryCta: "Reservar una sesión",
    secondaryCta: "Ver servicios",
    imageAlt: {
      hero: "Sarita Shakti explicando durante una sesión de yoga.",
      support: "Sarita Shakti practicando al atardecer junto al mar.",
    },
    servicesIntro:
      "Precios y duraciones confirmados desde los materiales de la clienta. El pago online sigue pendiente antes de cerrar la página de reservas.",
    services: [
      {
        title: "Lavado intestinal",
        price: "€110",
        summary:
          "Laghoo Shankhaprakshalana: técnica de limpieza intestinal del yoga tradicional con agua salada tibia y movimientos específicos para favorecer ligereza, depuración y claridad.",
      },
      {
        title: "Lavado intestinal y coaching astrológico",
        duration: "120 min",
        price: "€210",
        summary:
          "Una experiencia integrada que combina depuración corporal y lectura astrológica de acompañamiento, pensada como un reset profundo cuerpo-mente.",
      },
      {
        title: "Lectura de astrología psicológica",
        duration: "90 min",
        price: "€150",
        summary:
          "Una lectura completa de tu carta natal para comprender talentos, dinámicas internas y potencial evolutivo.",
      },
      {
        title: "Sinastría — astrología psicológica de pareja",
        duration: "90 min",
        price: "€150",
        summary:
          "Análisis de la dinámica relacional entre dos personas para iluminar vínculos, proyecciones, afinidades y desafíos compartidos.",
      },
      {
        title: "Coaching astrológico online",
        duration: "60 min",
        price: "€110",
        summary:
          "Sesión individual online orientada a la transformación personal, la comprensión de bloqueos interiores y la activación de tus recursos.",
      },
      {
        title: "Revolución solar",
        duration: "60 min",
        price: "€110",
        summary:
          "Lectura anual para comprender temas clave, desafíos evolutivos y oportunidades de crecimiento desde tu cumpleaños en adelante.",
      },
      {
        title: "Sesión mensual de coaching astrológico",
        duration: "30 min",
        price: "€50",
        summary:
          "Guía personalizada mes a mes para leer los tránsitos activos e integrarlos en la vida cotidiana.",
      },
    ],
    process: {
      eyebrow: "Cómo se trabaja",
      title: "Una lectura que se vuelve práctica.",
      text:
        "No se trata de predecir el futuro, sino de hacer visible lo que ya se mueve dentro de ti. Las sesiones pueden incluir reflexión, escucha corporal e indicaciones prácticas para llevar a la semana.",
      points: [
        "Online o presencial cuando esté disponible.",
        "Enfoque psicológico, evolutivo y no fatalista.",
        "Posible integración con rutinas de yoga personalizadas.",
      ],
    },
  },
  en: {
    eyebrow: "Services | Psychological Astrology | Therapeutic Yoga",
    title: "Coaching and psychological astrology",
    intro:
      "Individual sessions for reading inner movement, releasing blocks, and integrating what emerges through the body, the word, and the natal chart.",
    primaryCta: "Book a session",
    secondaryCta: "View services",
    imageAlt: {
      hero: "Sarita Shakti explaining during a yoga session.",
      support: "Sarita Shakti practicing at sunset by the sea.",
    },
    servicesIntro:
      "Prices and durations are confirmed from client materials. Online payment remains undecided before the Booking page is finalized.",
    services: [
      {
        title: "Intestinal wash",
        price: "€110",
        summary:
          "Laghoo Shankhaprakshalana: a traditional yogic intestinal cleansing practice using warm salted water and specific movements to support lightness, purification, and clarity.",
      },
      {
        title: "Intestinal wash & astrological coaching",
        duration: "120 min",
        price: "€210",
        summary:
          "An integrated experience combining physical cleansing with a supporting astrological reading, designed as a deep body-mind reset.",
      },
      {
        title: "Psychological astrology reading",
        duration: "90 min",
        price: "€150",
        summary:
          "A complete natal chart reading to understand gifts, inner dynamics, and evolutionary potential.",
      },
      {
        title: "Synastry — couple psychological astrology",
        duration: "90 min",
        price: "€150",
        summary:
          "A reading of the relational dynamic between two people, bringing light to bonds, projections, affinities, and shared challenges.",
      },
      {
        title: "Online astrological coaching",
        duration: "60 min",
        price: "€110",
        summary:
          "An individual online session focused on personal transformation, understanding inner blocks, and activating resources.",
      },
      {
        title: "Solar revolution",
        duration: "60 min",
        price: "€110",
        summary:
          "An annual reading to understand key themes, evolutionary challenges, and growth opportunities from your birthday onward.",
      },
      {
        title: "Monthly astrological coaching session",
        duration: "30 min",
        price: "€50",
        summary:
          "Month-by-month personalized guidance for reading active transits and integrating them into daily life.",
      },
    ],
    process: {
      eyebrow: "How It Works",
      title: "A reading that becomes practice.",
      text:
        "The point is not to predict the future, but to make visible what is already moving inside you. Sessions can include reflection, body listening, and practical guidance to carry into the week.",
      points: [
        "Online or in person when available.",
        "Psychological, evolutionary, non-fatalist approach.",
        "Possible integration with personalized yoga routines.",
      ],
    },
  },
};
