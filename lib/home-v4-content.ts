import { Locale } from "./locales";

type ServiceCard = {
  title: string;
  outcome?: string;
  tag?: string;
  cta?: string;
  text: string;
  image: string;
  alt: string;
};

type Fact = string;

type FaqItem = {
  question: string;
  answer: string;
};

export type HomeV4Content = {
  notice: string;
  nav: {
    sessions: string;
    training: string;
    about: string;
    faq: string;
    whatsappCta: string;
    allServices: string;
  };
  whatsappMessages: {
    consult: string;
    doubt: string;
  };
  hero: {
    title: string;
    lead: string;
    text?: string;
    primaryCta: string;
    secondaryCta: string;
    freeNote: string;
    imageAlt: string;
    proof: Array<{ strong: string; label: string }>;
  };
  services: {
    title: string;
    sub?: string;
    moreLabel: string;
    cards: ServiceCard[];
  };
  reviews: {
    verifiedLabel: string;
    bandTitle?: string;
  };
  training: {
    eyebrow: string;
    title: string;
    meta: string;
    year: string;
    text: string;
    cta: string;
    imageAlt: string;
  };
  about: {
    title: string;
    text: string;
    facts: Fact[];
    cta: string;
    imageAlt: string;
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  whatsappStrip: {
    title: string;
    text: string;
    cta: string;
  };
  footer: {
    left: string;
    right: string;
    contactTitle: string;
    servicesTitle: string;
    linksTitle: string;
    maps: string;
    blog: string;
    reviews: string;
    tagline: string;
  };
  mobileCta: string;
};

export const homeV4Content: Record<Locale, HomeV4Content> = {
  es: {
    notice: "Primera orientación por WhatsApp gratuita y sin compromiso.",
    nav: {
      sessions: "Servicios",
      training: "Formación",
      about: "Sobre mí",
      faq: "FAQ",
      whatsappCta: "Escríbeme",
      allServices: "Ver todos los servicios",
    },
    whatsappMessages: {
      consult: "Hola Sarita, me gustaría hacerte una consulta.",
      doubt: "Hola Sarita, tengo una duda sobre qué sesión elegir.",
    },
    hero: {
      title: "Astrología Psicológica Barcelona",
      lead: "Comprende lo que te está pasando, por qué ciertos patrones se repiten y qué puedes hacer con ello.",
      text: "Una lectura astrológica puede ayudarte a mirar con más claridad tus relaciones, decisiones, bloqueos y el momento vital que estás atravesando. Sin predicciones cerradas. Sin decirte quién tienes que ser.",
      primaryCta: "Quiero orientación por WhatsApp",
      secondaryCta: "Ver las sesiones",
      freeNote: "¿No sabes qué sesión elegir? La primera orientación por WhatsApp es gratuita y sin compromiso.",
      imageAlt: "Sarita Shakti explicando durante una sesión de astrología psicológica",
      proof: [
        { strong: "25+ años", label: "de experiencia" },
        { strong: "Más de 1.000", label: "personas atendidas" },
        { strong: "5,0 ★ en Google", label: "179 reseñas" },
      ],
    },
    services: {
      title: "Elige qué quieres entender mejor ahora mismo",
      sub: "No necesitas saber astrología. Solo necesitas saber qué quieres comprender.",
      moreLabel: "Más información",
      cards: [
        {
          title: "Carta Natal",
          outcome: "Entiende tus patrones y cómo funcionas",
          tag: "Carta Natal · Barcelona y online",
          cta: "Ver Carta Natal",
          text: "Descubre qué necesitas, qué talentos estás dejando de usar, qué patrones se repiten en tu vida y por qué determinadas situaciones te afectan más que otras.",
          image: "/images/servicios/carta-natal-card.jpg",
          alt: "Carta natal y cuaderno de astrología",
        },
        {
          title: "Sinastría",
          outcome: "Entiende mejor vuestra relación",
          tag: "Sinastría · Barcelona y online",
          cta: "Ver Sinastría",
          text: "¿Por qué os atraéis? ¿Dónde chocáis? ¿Qué necesita cada uno? Comparamos las dos cartas natales para comprender vuestra dinámica con mucha más claridad.",
          image: "/images/servicios/sinastria-card.jpg",
          alt: "Dos tazas en un ambiente cálido como símbolo de sinastría",
        },
        {
          title: "Revolución Solar",
          outcome: "Entiende el año que tienes delante",
          tag: "Revolución Solar · Barcelona y online",
          cta: "Ver Revolución Solar",
          text: "Descubre qué áreas de tu vida van a cobrar más importancia desde tu próximo cumpleaños y qué temas pueden pedirte decisiones, atención o cambio.",
          image: "/images/servicios/revolucion-card.jpg",
          alt: "Amanecer sobre el mar como símbolo de un nuevo ciclo",
        },
        {
          title: "Coaching Astrológico",
          outcome: "Cuando entenderlo no es suficiente y quieres cambiarlo",
          tag: "Coaching Astrológico · Online",
          cta: "Ver Coaching Astrológico",
          text: "Un acompañamiento continuado para trabajar una decisión, bloqueo, relación o etapa de cambio utilizando tu carta natal como herramienta.",
          image: "/images/servicios/coaching-card.jpg",
          alt: "Cuaderno y taza en un espacio de acompañamiento",
        },
      ],
    },
    reviews: {
      verifiedLabel: "reseñas verificadas en Google",
      bandTitle: "Lo importante no es lo que diga yo. Es lo que se llevan quienes pasan por una sesión.",
    },
    training: {
      eyebrow: "Formación presencial · Barcelona 2027",
      title: "¿Quieres que interpreten tu carta… o aprender a interpretarla tú?",
      meta: "11 encuentros presenciales · Enero a diciembre de 2027 · Grupos reducidos",
      year: "",
      text: "Si quieres ir más allá de una lectura puntual, puedes aprender astrología psicológica desde la base y terminar el año comprendiendo cómo se construye y se interpreta una Carta Natal completa.",
      cta: "Ver la formación 2027",
      imageAlt: "Espacio cálido preparado para una formación presencial de astrología",
    },
    about: {
      title: "Más de 25 años ayudando a convertir una carta natal en algo que puedas comprender.",
      text: "Soy Sarita Shakti. Llevo más de dos décadas trabajando con astrología psicológica, acompañamiento personal, yoga y meditación. Mi forma de trabajar no consiste en darte respuestas cerradas sobre tu futuro: consiste en ayudarte a comprender mejor tus patrones, tus recursos y el momento que estás viviendo.",
      facts: [
        "Más de 25 años de experiencia",
        "Más de 1.000 personas atendidas",
        "Formación en Bihar School of Yoga, India",
        "Sesiones en español, inglés e italiano",
      ],
      cta: "Conoce a Sarita →",
      imageAlt: "Sarita Shakti riendo en un momento de convivencia",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "¿Qué diferencia hay entre astrología y astrología psicológica?",
          answer:
            "La astrología psicológica utiliza la carta natal (o carta astral) como herramienta de autoconocimiento. En lugar de hacer predicciones cerradas, busca comprender tus patrones, necesidades y procesos internos para que puedas tomar decisiones con más claridad.",
        },
        {
          question: "¿Qué es una carta natal y qué información me da?",
          answer:
            "La carta natal es un mapa del cielo en el momento exacto de tu nacimiento. Una lectura de carta natal te ayuda a explorar tu personalidad, tus talentos, tus relaciones y los temas importantes de tu vida.",
        },
        {
          question: "¿Qué es una sinastría y qué información me da?",
          answer:
            "La sinastría es el estudio de la compatibilidad entre dos cartas natales: cómo interactuáis, dónde hay afinidad y qué dinámicas o retos aparecen en una relación de pareja, familia o trabajo.",
        },
        {
          question: "¿Qué es una revolución solar y qué información me da?",
          answer:
            "La revolución solar es tu carta del año: se calcula en el momento en que el Sol vuelve a la posición de tu nacimiento y muestra los temas, aprendizajes y oportunidades de tu nuevo ciclo anual.",
        },
        {
          question: "¿La astrología psicológica funciona?",
          answer:
            "No sustituye a la psicología clínica ni ofrece certezas sobre el futuro. Es una herramienta de reflexión y autoconocimiento que muchas personas usan para ver su historia desde otra perspectiva y entender mejor sus decisiones.",
        },
        {
          question: "¿Cómo se realizan las sesiones?",
          answer:
            "Las sesiones son online o presenciales en Barcelona, según disponibilidad. Si no sabes qué consulta necesitas —carta natal, sinastría, revolución solar o coaching astrológico— escríbeme por WhatsApp sin compromiso.",
        },
      ],
    },
    whatsappStrip: {
      title: "¿No tienes claro qué sesión necesitas?",
      text: "Cuéntame brevemente qué quieres trabajar y te diré qué opción puede encajarte mejor. La primera orientación por WhatsApp es gratuita y sin compromiso.",
      cta: "Escribir a Sarita por WhatsApp",
    },
    footer: {
      left: "© Sarita Shakti · Astrología Psicológica Barcelona",
      right: "Barcelona · Online",
      contactTitle: "Contacto",
      servicesTitle: "Servicios",
      linksTitle: "Enlaces",
      maps: "Ver en Google Maps",
      blog: "Blog",
      reviews: "Reseñas",
      tagline: "Astrología psicológica en Barcelona y online: carta natal, sinastría, revolución solar y coaching astrológico.",
    },
    mobileCta: "Escríbeme por WhatsApp",
  },
  it: {
    notice: "Primo orientamento via WhatsApp gratuito e senza impegno.",
    nav: {
      sessions: "Servizi",
      training: "Formazione",
      about: "Chi sono",
      faq: "FAQ",
      whatsappCta: "Scrivimi",
      allServices: "Vedi tutti i servizi",
    },
    whatsappMessages: {
      consult: "Ciao Sarita, vorrei fare una consulenza con te.",
      doubt: "Ciao Sarita, ho un dubbio su quale sessione scegliere.",
    },
    hero: {
      title: "Astrologia Psicologica Milano",
      lead: "Capisci cosa ti sta succedendo, perché certi schemi si ripetono e cosa puoi farci.",
      text: "Una lettura astrologica può aiutarti a guardare con più chiarezza le tue relazioni, decisioni, blocchi e il momento che stai attraversando. Senza previsioni chiuse. Senza dirti chi devi essere.",
      primaryCta: "Voglio un orientamento su WhatsApp",
      secondaryCta: "Vedi le sessioni",
      freeNote: "Non sai quale sessione scegliere? Il primo orientamento su WhatsApp è gratuito e senza impegno.",
      imageAlt: "Sarita Shakti durante una sessione di astrologia psicologica",
      proof: [
        { strong: "25+ anni", label: "di esperienza" },
        { strong: "Più di 1.000", label: "persone accompagnate" },
        { strong: "5,0 ★ su Google", label: "179 recensioni" },
      ],
    },
    services: {
      title: "Scegli cosa vuoi capire meglio adesso",
      sub: "Non serve sapere di astrologia. Basta sapere cosa vuoi comprendere.",
      moreLabel: "Maggiori informazioni",
      cards: [
        {
          title: "Carta Natale",
          outcome: "Capisci i tuoi schemi e come funzioni",
          tag: "Carta Natale · Milano e online",
          cta: "Vedi Carta Natale",
          text: "Scopri di cosa hai bisogno, quali talenti stai lasciando da parte, quali schemi si ripetono nella tua vita e perché certe situazioni ti toccano più di altre.",
          image: "/images/servicios/carta-natal-card.jpg",
          alt: "Carta natale e quaderno di astrologia",
        },
        {
          title: "Sinastria",
          outcome: "Capisci meglio la vostra relazione",
          tag: "Sinastria · Milano e online",
          cta: "Vedi Sinastria",
          text: "Perché vi attraete? Dove vi scontrate? Di cosa ha bisogno ciascuno? Confrontiamo le due carte natali per comprendere la vostra dinamica con molta più chiarezza.",
          image: "/images/servicios/sinastria-card.jpg",
          alt: "Due tazze in un ambiente caldo come simbolo di sinastria",
        },
        {
          title: "Rivoluzione Solare",
          outcome: "Capisci l'anno che hai davanti",
          tag: "Rivoluzione Solare · Milano e online",
          cta: "Vedi Rivoluzione Solare",
          text: "Scopri quali aree della tua vita acquisteranno più peso dal tuo prossimo compleanno e quali temi potranno chiederti decisioni, attenzione o cambiamento.",
          image: "/images/servicios/revolucion-card.jpg",
          alt: "Alba sul mare come simbolo di un nuovo ciclo",
        },
        {
          title: "Coaching Astrologico",
          outcome: "Quando capirlo non basta e vuoi cambiarlo",
          tag: "Coaching Astrologico · Online",
          cta: "Vedi Coaching Astrologico",
          text: "Un accompagnamento continuativo per lavorare una decisione, un blocco, una relazione o una fase di cambiamento usando la tua carta natale come strumento.",
          image: "/images/servicios/coaching-card.jpg",
          alt: "Quaderno e tazza in uno spazio di accompagnamento",
        },
      ],
    },
    reviews: {
      verifiedLabel: "recensioni verificate su Google",
      bandTitle: "L'importante non è quello che dico io. È quello che si portano via le persone dopo una sessione.",
    },
    training: {
      eyebrow: "Formazione in presenza · Milano",
      title: "Vuoi che interpretino la tua carta… o imparare a interpretarla tu?",
      meta: "11 incontri in presenza · Da gennaio a dicembre 2027 · Gruppi ridotti",
      year: "",
      text: "Se vuoi andare oltre una lettura singola, puoi imparare l'astrologia psicologica dalla base e finire l'anno capendo come si costruisce e si interpreta una Carta Natale completa.",
      cta: "Vedi la formazione",
      imageAlt: "Spazio caldo preparato per una formazione in presenza di astrologia",
    },
    about: {
      title: "Più di 25 anni ad aiutare le persone a trasformare una carta natale in qualcosa che possano comprendere.",
      text: "Sono Sarita Shakti. Da più di due decenni lavoro con astrologia psicologica, accompagnamento personale, yoga e meditazione. Il mio modo di lavorare non consiste nel darti risposte chiuse sul tuo futuro: consiste nell'aiutarti a comprendere meglio i tuoi schemi, le tue risorse e il momento che stai vivendo.",
      facts: [
        "Più di 25 anni di esperienza",
        "Più di 1.000 persone accompagnate",
        "Formazione presso la Bihar School of Yoga, India",
        "Sessioni in spagnolo, inglese e italiano",
      ],
      cta: "Conosci Sarita →",
      imageAlt: "Sarita Shakti che ride in un momento di convivialità",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Che differenza c'è tra astrologia e astrologia psicologica?",
          answer:
            "L'astrologia psicologica utilizza la carta natale (tema natale) come strumento di autoconoscenza. Invece di fare previsioni chiuse, cerca di comprendere schemi, bisogni e processi interiori per aiutarti a decidere con più chiarezza.",
        },
        {
          question: "Che cos'è una carta natale e quali informazioni mi dà?",
          answer:
            "La carta natale è una mappa del cielo nel momento esatto della tua nascita. Una lettura della carta natale ti aiuta a esplorare personalità, talenti, relazioni e i temi importanti della tua vita.",
        },
        {
          question: "Che cos'è una sinastria e quali informazioni mi dà?",
          answer:
            "La sinastria è lo studio della compatibilità tra due carte natali: come interagite, dove c'è affinità e quali dinamiche o sfide emergono in una relazione di coppia, famiglia o lavoro.",
        },
        {
          question: "Che cos'è una rivoluzione solare e quali informazioni mi dà?",
          answer:
            "La rivoluzione solare è la tua carta dell'anno: si calcola quando il Sole torna nella posizione della tua nascita e mostra i temi, gli apprendimenti e le opportunità del tuo nuovo ciclo annuale.",
        },
        {
          question: "L'astrologia psicologica funziona?",
          answer:
            "Non sostituisce la psicologia clinica né offre certezze sul futuro. È uno strumento di riflessione e autoconoscenza che molte persone usano per vedere la propria storia da un'altra prospettiva.",
        },
        {
          question: "Come si svolgono le sessioni?",
          answer:
            "Le sessioni sono online o in presenza, secondo disponibilità. Se non sai quale consulenza ti serve — carta natale, sinastria, rivoluzione solare o coaching astrologico — scrivimi su WhatsApp senza impegno.",
        },
      ],
    },
    whatsappStrip: {
      title: "Non hai chiaro quale sessione ti serve?",
      text: "Raccontami brevemente cosa vuoi lavorare e ti dirò quale opzione può andare meglio per te. Il primo orientamento su WhatsApp è gratuito e senza impegno.",
      cta: "Scrivi a Sarita su WhatsApp",
    },
    footer: {
      left: "© Sarita Shakti · Astrologia Psicologica Milano",
      right: "Milano · Online",
      contactTitle: "Contatti",
      servicesTitle: "Servizi",
      linksTitle: "Link",
      maps: "Vedi su Google Maps",
      blog: "Blog",
      reviews: "Recensioni",
      tagline: "Astrologia psicologica a Milano e online: carta natale, sinastria, rivoluzione solare e coaching astrologico.",
    },
    mobileCta: "Scrivimi su WhatsApp",
  },
  en: {
    notice: "First WhatsApp orientation is free, with no obligation.",
    nav: {
      sessions: "Services",
      training: "Training",
      about: "About me",
      faq: "FAQ",
      whatsappCta: "Message me",
      allServices: "See all services",
    },
    whatsappMessages: {
      consult: "Hi Sarita, I would like to book a consultation.",
      doubt: "Hi Sarita, I have a question about which session to choose.",
    },
    hero: {
      title: "Psychological Astrology Barcelona",
      lead: "Understand what is happening to you, why certain patterns repeat, and what you can do about it.",
      text: "An astrological reading can help you look with more clarity at your relationships, decisions, blocks, and the moment of life you are going through. No fixed predictions. No telling you who you should be.",
      primaryCta: "I want guidance on WhatsApp",
      secondaryCta: "See the sessions",
      freeNote: "Not sure which session to choose? The first WhatsApp orientation is free, with no obligation.",
      imageAlt: "Sarita Shakti explaining during a psychological astrology session",
      proof: [
        { strong: "25+ years", label: "of experience" },
        { strong: "More than 1,000", label: "people guided" },
        { strong: "5.0 ★ on Google", label: "179 reviews" },
      ],
    },
    services: {
      title: "Choose what you want to understand better right now",
      sub: "You don't need to know astrology. You just need to know what you want to understand.",
      moreLabel: "Learn more",
      cards: [
        {
          title: "Natal Chart",
          outcome: "Understand your patterns and how you work",
          tag: "Birth Chart · Barcelona and online",
          cta: "See Birth Chart",
          text: "Discover what you need, which talents you are leaving unused, which patterns repeat in your life, and why certain situations affect you more than others.",
          image: "/images/servicios/carta-natal-card.jpg",
          alt: "Natal chart and astrology notebook",
        },
        {
          title: "Synastry",
          outcome: "Understand your relationship better",
          tag: "Synastry · Barcelona and online",
          cta: "See Synastry",
          text: "Why are you drawn to each other? Where do you clash? What does each of you need? We compare both birth charts to understand your dynamic with far more clarity.",
          image: "/images/servicios/sinastria-card.jpg",
          alt: "Two cups in a warm setting as a symbol of synastry",
        },
        {
          title: "Solar Return",
          outcome: "Understand the year ahead of you",
          tag: "Solar Return · Barcelona and online",
          cta: "See Solar Return",
          text: "Discover which areas of your life will carry more weight from your next birthday, and which themes may ask for decisions, attention, or change.",
          image: "/images/servicios/revolucion-card.jpg",
          alt: "Sunrise over the sea as a symbol of a new cycle",
        },
        {
          title: "Astrological Coaching",
          outcome: "When understanding it isn't enough and you want to change it",
          tag: "Astrological Coaching · Online",
          cta: "See Astrological Coaching",
          text: "Ongoing guidance to work through a decision, block, relationship, or phase of change using your birth chart as a tool.",
          image: "/images/servicios/coaching-card.jpg",
          alt: "Notebook and cup in a space for guidance",
        },
      ],
    },
    reviews: {
      verifiedLabel: "verified Google reviews",
      bandTitle: "What matters isn't what I say. It's what people take away from a session.",
    },
    training: {
      eyebrow: "In-person training · Barcelona 2027",
      title: "Do you want your chart interpreted… or to learn to interpret it yourself?",
      meta: "11 in-person meetings · January to December 2027 · Small groups",
      year: "",
      text: "If you want to go beyond a one-off reading, you can learn psychological astrology from the ground up and end the year understanding how a complete birth chart is built and interpreted.",
      cta: "See the 2027 training",
      imageAlt: "Warm space prepared for an in-person astrology training",
    },
    about: {
      title: "More than 25 years helping turn a birth chart into something you can understand.",
      text: "I'm Sarita Shakti. For over two decades I have worked with psychological astrology, personal guidance, yoga, and meditation. My way of working is not about giving you closed answers about your future: it is about helping you better understand your patterns, your resources, and the moment you are living.",
      facts: [
        "More than 25 years of experience",
        "More than 1,000 people guided",
        "Trained at the Bihar School of Yoga, India",
        "Sessions in Spanish, English, and Italian",
      ],
      cta: "Meet Sarita →",
      imageAlt: "Sarita Shakti laughing during a shared moment",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "What is the difference between astrology and psychological astrology?",
          answer:
            "Psychological astrology uses your birth chart (natal chart) as a tool for self-knowledge. Instead of making fixed predictions, it looks at your patterns, needs, and inner processes so you can make decisions with more clarity.",
        },
        {
          question: "What is a natal chart and what does it tell me?",
          answer:
            "A birth chart is a map of the sky at the exact moment you were born. A birth chart reading helps you explore your personality, your talents, your relationships, and the important themes of your life.",
        },
        {
          question: "What is synastry and what does it tell me?",
          answer:
            "Synastry is a compatibility reading of two birth charts: how you interact, where affinity exists, and which dynamics or challenges show up in a couple, family, or work relationship.",
        },
        {
          question: "What is a solar return and what does it tell me?",
          answer:
            "A solar return is your chart for the year: it is calculated for the moment the Sun returns to its position at your birth, and shows the themes, lessons, and opportunities of your new yearly cycle.",
        },
        {
          question: "Does psychological astrology work?",
          answer:
            "It does not replace clinical psychology or offer certainty about the future. It is a tool for reflection and self-knowledge that many people use to see their story from another perspective.",
        },
        {
          question: "How are sessions held?",
          answer:
            "Sessions are held online or in person in Barcelona, depending on availability. If you are not sure which reading you need — birth chart, synastry, solar return, or astrological coaching — message me on WhatsApp with no obligation.",
        },
      ],
    },
    whatsappStrip: {
      title: "Not sure which session you need?",
      text: "Tell me briefly what you want to work on and I will tell you which option may fit you best. The first WhatsApp orientation is free and without obligation.",
      cta: "Write to Sarita on WhatsApp",
    },
    footer: {
      left: "© Sarita Shakti · Psychological Astrology Barcelona",
      right: "Barcelona · Online",
      contactTitle: "Contact",
      servicesTitle: "Services",
      linksTitle: "Links",
      maps: "View on Google Maps",
      blog: "Blog",
      reviews: "Reviews",
      tagline: "Psychological astrology in Barcelona and online: birth chart, synastry, solar return, and astrological coaching.",
    },
    mobileCta: "Message me on WhatsApp",
  },
};
