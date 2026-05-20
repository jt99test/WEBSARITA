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
    title: "Servizi di astrologia psicologica e coaching",
    intro:
      "Letture, sessioni online e percorsi brevi per comprendere i movimenti interiori, accompagnare decisioni e integrare i cicli astrologici nella vita quotidiana.",
    primaryCta: "Prenota una sessione",
    secondaryCta: "Vedi tutti i servizi",
    imageAlt: {
      hero: "Sarita Shakti durante una spiegazione in una sessione di yoga.",
      support: "Sarita Shakti in pratica al tramonto sul mare.",
    },
    servicesIntro:
      "Scegli una lettura puntuale, un accompagnamento mensile, un pacchetto di coaching o una pratica yogica di purificazione.",
    services: [
      {
        title: "Lettura di astrologia psicologica",
        duration: "90 min",
        price: "€150",
        summary:
          "Una lettura completa della carta natale per comprendere talenti, dinamiche interiori e potenziale evolutivo.",
      },
      {
        title: "Sinastria",
        duration: "90 min",
        price: "€150",
        summary:
          "Lettura della dinamica relazionale tra due persone per illuminare legami, proiezioni, affinità e sfide condivise.",
      },
      {
        title: "Rivoluzione solare",
        duration: "60 min",
        price: "€110",
        summary:
          "Lettura annuale per comprendere temi chiave, sfide evolutive e opportunità di crescita dal compleanno in poi.",
      },
      {
        title: "Coaching astrologico online",
        duration: "60 min",
        price: "€110",
        summary:
          "Sessione individuale online orientata alla trasformazione personale, alla comprensione dei blocchi interiori e all'attivazione delle risorse.",
      },
      {
        title: "Sessione mensile",
        duration: "30 min",
        price: "€50",
        summary:
          "Guida personalizzata mese per mese per leggere i transiti attivi e integrarli nella vita quotidiana.",
      },
      {
        title: "Pack coaching astrologico - 3 sessioni",
        duration: "3 x 30 min",
        price: "€135",
        summary:
          "Accompagnamento per approfondire un processo concreto, seguire cambiamenti o decisioni e integrare in modo pratico i transiti attuali. Prezzo individuale: €150.",
      },
      {
        title: "Pack coaching astrologico - 5 sessioni",
        duration: "5 x 30 min",
        price: "€220",
        summary:
          "Uno spazio più continuo per sostenere trasformazioni a medio termine, osservare l'evoluzione sessione dopo sessione e integrare strumenti di consapevolezza. Prezzo individuale: €250.",
      },
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
    ],
    process: {
      eyebrow: "Come si lavora",
      title: "Una lettura che diventa pratica.",
      text:
        "Il punto non è prevedere il futuro, ma rendere visibile ciò che già si muove dentro di te. Le sessioni possono includere riflessione, ascolto corporeo e indicazioni pratiche da portare nella settimana.",
      points: [
        "Sessioni online e in presenza quando disponibile.",
        "Approccio psicologico, evolutivo e non fatalista.",
        "Possibile integrazione con routine di yoga personalizzate.",
      ],
    },
  },
  es: {
    eyebrow: "Servicios | Astrología psicológica | Yoga terapéutico",
    title: "Servicios de astrología psicológica y coaching",
    intro:
      "Lecturas, sesiones online y procesos breves para comprender los movimientos interiores, acompañar decisiones e integrar los ciclos astrológicos en la vida cotidiana.",
    primaryCta: "Reservar una sesión",
    secondaryCta: "Ver todos los servicios",
    imageAlt: {
      hero: "Sarita Shakti explicando durante una sesión de yoga.",
      support: "Sarita Shakti practicando al atardecer junto al mar.",
    },
    servicesIntro:
      "Elige una lectura puntual, un acompañamiento mensual, un pack de coaching o una práctica yóguica de purificación.",
    services: [
      {
        title: "Lectura de astrología psicológica",
        duration: "90 min",
        price: "€150",
        summary:
          "Una lectura completa de tu carta natal para comprender talentos, dinámicas internas y potencial evolutivo.",
      },
      {
        title: "Sinastría",
        duration: "90 min",
        price: "€150",
        summary:
          "Análisis de la dinámica relacional entre dos personas para iluminar vínculos, proyecciones, afinidades y desafíos compartidos.",
      },
      {
        title: "Revolución solar",
        duration: "60 min",
        price: "€110",
        summary:
          "Lectura anual para comprender temas clave, desafíos evolutivos y oportunidades de crecimiento desde tu cumpleaños en adelante.",
      },
      {
        title: "Coaching astrológico online",
        duration: "60 min",
        price: "€110",
        summary:
          "Sesión individual online orientada a la transformación personal, la comprensión de bloqueos interiores y la activación de tus recursos.",
      },
      {
        title: "Sesión mensual",
        duration: "30 min",
        price: "€50",
        summary:
          "Guía personalizada mes a mes para leer los tránsitos activos e integrarlos en la vida cotidiana.",
      },
      {
        title: "Pack coaching astrológico - 3 sesiones",
        duration: "3 x 30 min",
        price: "€135",
        summary:
          "Acompañamiento para profundizar en un proceso concreto, dar seguimiento a cambios o decisiones e integrar de forma práctica los tránsitos actuales. Precio individual: €150.",
      },
      {
        title: "Pack coaching astrológico - 5 sesiones",
        duration: "5 x 30 min",
        price: "€220",
        summary:
          "Un espacio más continuo para sostener procesos de transformación a medio plazo, observar tu evolución sesión a sesión e integrar herramientas de conciencia. Precio individual: €250.",
      },
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
    ],
    process: {
      eyebrow: "Cómo se trabaja",
      title: "Una lectura que se vuelve práctica.",
      text:
        "No se trata de predecir el futuro, sino de hacer visible lo que ya se mueve dentro de ti. Las sesiones pueden incluir reflexión, escucha corporal e indicaciones prácticas para llevar a la semana.",
      points: [
        "Sesiones online y presenciales cuando estén disponibles.",
        "Enfoque psicológico, evolutivo y no fatalista.",
        "Posible integración con rutinas de yoga personalizadas.",
      ],
    },
  },
  en: {
    eyebrow: "Services | Psychological Astrology | Therapeutic Yoga",
    title: "Psychological astrology and coaching services",
    intro:
      "Readings, online sessions, and short coaching processes for understanding inner movement, supporting decisions, and integrating astrological cycles into daily life.",
    primaryCta: "Book a session",
    secondaryCta: "View all services",
    imageAlt: {
      hero: "Sarita Shakti explaining during a yoga session.",
      support: "Sarita Shakti practicing at sunset by the sea.",
    },
    servicesIntro:
      "Choose a focused reading, monthly support, a coaching pack, or a yogic purification practice.",
    services: [
      {
        title: "Psychological astrology reading",
        duration: "90 min",
        price: "€150",
        summary:
          "A complete natal chart reading to understand gifts, inner dynamics, and evolutionary potential.",
      },
      {
        title: "Synastry",
        duration: "90 min",
        price: "€150",
        summary:
          "A reading of the relational dynamic between two people, bringing light to bonds, projections, affinities, and shared challenges.",
      },
      {
        title: "Solar revolution",
        duration: "60 min",
        price: "€110",
        summary:
          "An annual reading to understand key themes, evolutionary challenges, and growth opportunities from your birthday onward.",
      },
      {
        title: "Online astrological coaching",
        duration: "60 min",
        price: "€110",
        summary:
          "An individual online session focused on personal transformation, understanding inner blocks, and activating resources.",
      },
      {
        title: "Monthly session",
        duration: "30 min",
        price: "€50",
        summary:
          "Month-by-month personalized guidance for reading active transits and integrating them into daily life.",
      },
      {
        title: "Astrological coaching pack - 3 sessions",
        duration: "3 x 30 min",
        price: "€135",
        summary:
          "Support for deepening a concrete process, following changes or decisions, and integrating current transits in practical ways. Individual price: €150.",
      },
      {
        title: "Astrological coaching pack - 5 sessions",
        duration: "5 x 30 min",
        price: "€220",
        summary:
          "A more continuous space for medium-term transformation, observing your evolution session by session and integrating awareness tools. Individual price: €250.",
      },
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
    ],
    process: {
      eyebrow: "How It Works",
      title: "A reading that becomes practice.",
      text:
        "The point is not to predict the future, but to make visible what is already moving inside you. Sessions can include reflection, body listening, and practical guidance to carry into the week.",
      points: [
        "Online sessions and in-person sessions when available.",
        "Psychological, evolutionary, non-fatalist approach.",
        "Possible integration with personalized yoga routines.",
      ],
    },
  },
};
