import { Locale } from "./locales";

export type ServiceKey =
  | "cartaNatal"
  | "sinastria"
  | "revolucionSolar"
  | "coachingAstrologico";

export const serviceKeys: ServiceKey[] = [
  "cartaNatal",
  "sinastria",
  "revolucionSolar",
  "coachingAstrologico",
];

type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  intro: string;
  price: string;
  duration: string;
  mode: string;
  whatsappMessage: string;
  explore: {
    title: string;
    items: string[];
  };
  how: {
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  forWho: {
    title: string;
    items: string[];
  };
  faqs: ServiceFaq[];
  related: ServiceKey[];
  image: string;
  imageAlt: string;
};

export type ServiceSharedLabels = {
  breadcrumbHome: string;
  priceLabel: string;
  durationLabel: string;
  modeLabel: string;
  bookCta: string;
  faqTitle: string;
  relatedTitle: string;
  allServices: string;
};

export const serviceSharedLabels: Record<Locale, ServiceSharedLabels> = {
  es: {
    breadcrumbHome: "Inicio",
    priceLabel: "Precio",
    durationLabel: "Duración",
    modeLabel: "Modalidad",
    bookCta: "Reservar por WhatsApp",
    faqTitle: "Preguntas frecuentes",
    relatedTitle: "Otros servicios",
    allServices: "Ver todos los servicios",
  },
  it: {
    breadcrumbHome: "Home",
    priceLabel: "Prezzo",
    durationLabel: "Durata",
    modeLabel: "Modalità",
    bookCta: "Prenota su WhatsApp",
    faqTitle: "Domande frequenti",
    relatedTitle: "Altri servizi",
    allServices: "Vedi tutti i servizi",
  },
  en: {
    breadcrumbHome: "Home",
    priceLabel: "Price",
    durationLabel: "Duration",
    modeLabel: "Format",
    bookCta: "Book on WhatsApp",
    faqTitle: "Frequently asked questions",
    relatedTitle: "Other services",
    allServices: "See all services",
  },
};

export const servicePagesContent: Record<
  ServiceKey,
  Record<Locale, ServicePageContent>
> = {
  cartaNatal: {
    es: {
      seoTitle: "Carta Natal en Barcelona y Online — Lectura completa",
      seoDescription:
        "Lectura de carta natal (carta astral) en Barcelona y online con Sarita Shakti, astróloga psicológica con más de 25 años de experiencia. Sesión de 90 minutos, online o presencial. Reserva por WhatsApp.",
      eyebrow: "Astrología psicológica · Barcelona y online",
      title: "Carta Natal en Barcelona",
      lead: "Entiende qué patrones se repiten en tu vida, qué necesitas realmente y por qué determinadas relaciones, decisiones o situaciones te afectan como lo hacen.",
      intro:
        "Tu Carta Natal no es una descripción genérica de tu signo. Es una lectura personalizada de tu mapa astral para comprender mejor cómo funcionas, qué recursos tienes, dónde aparecen tus conflictos y qué estás viviendo ahora.",
      price: "150 €",
      duration: "90 min",
      mode: "Online o presencial en Barcelona",
      whatsappMessage: "Hola Sarita, me interesa una lectura de carta natal.",
      explore: {
        title: "Qué descubrirás en tu lectura",
        items: [
          "Por qué ciertos patrones se repiten: identifica comportamientos y situaciones que aparecen una y otra vez en relaciones, trabajo o decisiones",
          "Qué necesitas en tus relaciones: comprende cómo te vinculas, qué buscas en los demás y qué dinámicas pueden generar conflicto",
          "Qué talentos estás infrautilizando: reconoce recursos y capacidades que quizá has dado por normales o todavía no has desarrollado",
          "Qué suele bloquearte: entiende dónde aparecen tus inseguridades, contradicciones y resistencias",
          "Qué etapa estás atravesando: pon contexto a determinadas preguntas, cambios o sensaciones que están presentes ahora mismo",
          "Cómo integrar lo que descubres: la sesión no termina en un significado; buscamos cómo llevar esa comprensión a tu vida cotidiana",
        ],
      },
      how: {
        title: "Así será tu lectura de Carta Natal",
        steps: [
          {
            title: "Me escribes",
            text: "Cuéntame que quieres hacer una Carta Natal y te pediré los datos necesarios.",
          },
          {
            title: "Preparo tu carta antes de vernos",
            text: "Estudio previamente tu mapa para que la sesión se centre directamente en lo importante.",
          },
          {
            title: "Trabajamos sobre tus preguntas",
            text: "Durante la sesión conectamos la Carta Natal con lo que estés viviendo y con aquello que quieras comprender mejor.",
          },
        ],
      },
      forWho: {
        title: "Para quién es",
        items: [
          "Si estás en un momento de cambio y quieres tomar decisiones con más claridad",
          "Si notas patrones que se repiten y quieres entender de dónde vienen",
          "Si buscas autoconocimiento serio, sin predicciones cerradas ni miedo",
        ],
      },
      faqs: [
        {
          question: "¿Qué necesito para la lectura de carta natal?",
          answer:
            "Solo tu fecha, hora y lugar de nacimiento. La hora exacta importa: aparece en el libro de familia o en el registro civil. Si no la tienes, escríbeme igualmente y vemos opciones.",
        },
        {
          question: "¿La lectura es online o presencial?",
          answer:
            "Ambas. La mayoría de lecturas son online por videollamada; las presenciales se coordinan en Barcelona según disponibilidad.",
        },
        {
          question: "¿En qué se diferencia de una carta astral 'normal'?",
          answer:
            "El enfoque. Una carta astral tradicional suele centrarse en predicciones; la astrología psicológica usa tu carta natal para comprender tu mundo interno: patrones, necesidades y recursos. Sales con comprensión y pasos aplicables, no con profecías.",
        },
        {
          question: "¿Cuánto cuesta y cuánto dura?",
          answer:
            "La lectura de carta natal dura 90 minutos, online o presencial en Barcelona. El precio te lo confirmo por WhatsApp en la primera orientación gratuita, sin compromiso.",
        },
      ],
      related: ["sinastria", "revolucionSolar", "coachingAstrologico"],
      image: "/images/home/svc-carta-natal.jpg",
      imageAlt: "Carta natal y cuaderno de astrología",
    },
    it: {
      seoTitle: "Carta Natale a Milano e Online — Lettura completa",
      seoDescription:
        "Lettura della carta natale (tema natale) a Milano e online con Sarita Shakti, astrologa psicologica con più di 25 anni di esperienza. Sessione di 90 minuti, online o in presenza. Prenota su WhatsApp.",
      eyebrow: "Astrologia psicologica · Milano e online",
      title: "Carta Natale a Milano",
      lead: "Capisci quali schemi si ripetono nella tua vita, di cosa hai davvero bisogno e perché certe relazioni, decisioni o situazioni ti toccano come fanno.",
      intro:
        "La tua Carta Natale non è una descrizione generica del tuo segno. È una lettura personalizzata della tua mappa astrale per capire meglio come funzioni, quali risorse hai, dove nascono i tuoi conflitti e cosa stai vivendo adesso.",
      price: "150 €",
      duration: "90 min",
      mode: "Online o in presenza a Milano",
      whatsappMessage: "Ciao Sarita, mi interessa una lettura della carta natale.",
      explore: {
        title: "Cosa scoprirai nella tua lettura",
        items: [
          "Perché certi schemi si ripetono: individua comportamenti e situazioni che tornano ancora e ancora in relazioni, lavoro o decisioni",
          "Di cosa hai bisogno nelle relazioni: comprendi come ti leghi, cosa cerchi negli altri e quali dinamiche possono generare conflitto",
          "Quali talenti stai sottoutilizzando: riconosci risorse e capacità che forse dai per scontate o non hai ancora sviluppato",
          "Cosa tende a bloccarti: capisci dove nascono le tue insicurezze, contraddizioni e resistenze",
          "Quale fase stai attraversando: dai contesto a domande, cambiamenti o sensazioni presenti proprio adesso",
          "Come integrare ciò che scopri: la sessione non finisce in un significato; cerchiamo come portare quella comprensione nella vita quotidiana",
        ],
      },
      how: {
        title: "Così sarà la tua lettura della Carta Natale",
        steps: [
          {
            title: "Mi scrivi",
            text: "Raccontami che vuoi fare una Carta Natale e ti chiederò i dati necessari.",
          },
          {
            title: "Preparo la tua carta prima di vederci",
            text: "Studio in anticipo la tua mappa perché la sessione si concentri subito sull'essenziale.",
          },
          {
            title: "Lavoriamo sulle tue domande",
            text: "Durante la sessione colleghiamo la Carta Natale a ciò che stai vivendo e a ciò che vuoi comprendere meglio.",
          },
        ],
      },
      forWho: {
        title: "Per chi è",
        items: [
          "Se sei in un momento di cambiamento e vuoi decidere con più chiarezza",
          "Se noti schemi che si ripetono e vuoi capire da dove vengono",
          "Se cerchi un'autoconoscenza seria, senza previsioni chiuse né paura",
        ],
      },
      faqs: [
        {
          question: "Cosa serve per la lettura della carta natale?",
          answer:
            "Solo data, ora e luogo di nascita. L'ora esatta è importante. Se non la conosci, scrivimi comunque e vediamo le opzioni.",
        },
        {
          question: "La lettura è online o in presenza?",
          answer:
            "Entrambe. La maggior parte delle letture è online in videochiamata; quelle in presenza si coordinano a Milano secondo disponibilità.",
        },
        {
          question: "In cosa si differenzia da un tema natale 'normale'?",
          answer:
            "L'approccio. L'astrologia psicologica non cerca di predire fatti, ma di comprendere il tuo mondo interiore: schemi, bisogni e risorse. Esci con comprensione e passi applicabili.",
        },
        {
          question: "Quanto costa e quanto dura?",
          answer: "La lettura della carta natale dura 90 minuti, online o in presenza a Milano. Il prezzo te lo confermo su WhatsApp nel primo orientamento gratuito, senza impegno.",
        },
      ],
      related: ["sinastria", "revolucionSolar", "coachingAstrologico"],
      image: "/images/home/svc-carta-natal.jpg",
      imageAlt: "Carta natale e quaderno di astrologia",
    },
    en: {
      seoTitle: "Birth Chart Reading in Barcelona and Online",
      seoDescription:
        "Birth chart (natal chart) reading in Barcelona and online with Sarita Shakti, psychological astrologer with 25+ years of experience. A 90-minute session, online or in person. Book on WhatsApp.",
      eyebrow: "Psychological astrology · Barcelona and online",
      title: "Birth Chart Reading in Barcelona",
      lead: "Understand which patterns repeat in your life, what you really need, and why certain relationships, decisions, or situations affect you the way they do.",
      intro:
        "Your birth chart is not a generic description of your sign. It is a personalized reading of your astral map to better understand how you work, what resources you have, where your conflicts appear, and what you are living through now.",
      price: "€150",
      duration: "90 min",
      mode: "Online or in person in Barcelona",
      whatsappMessage: "Hi Sarita, I am interested in a birth chart reading.",
      explore: {
        title: "What you will discover",
        items: [
          "Why certain patterns repeat: identify behaviours and situations that show up again and again in relationships, work, or decisions",
          "What you need in your relationships: understand how you bond, what you look for in others, and which dynamics can create conflict",
          "Which talents you are underusing: recognize resources and abilities you may have taken for granted or not yet developed",
          "What tends to block you: understand where your insecurities, contradictions, and resistances appear",
          "Which stage you are going through: put context to questions, changes, or feelings that are present right now",
          "How to integrate what you discover: the session doesn't end at a meaning; we look at how to bring that understanding into your daily life",
        ],
      },
      how: {
        title: "This is what your birth chart reading will look like",
        steps: [
          {
            title: "You write to me",
            text: "Tell me you want a birth chart reading and I will ask you for the details I need.",
          },
          {
            title: "I prepare your chart before we meet",
            text: "I study your map in advance so the session goes straight to what matters.",
          },
          {
            title: "We work on your questions",
            text: "During the session we connect the chart to what you are living and what you want to understand better.",
          },
        ],
      },
      forWho: {
        title: "Who it is for",
        items: [
          "If you are at a turning point and want to decide with more clarity",
          "If you notice repeating patterns and want to understand where they come from",
          "If you want serious self-knowledge, without fixed predictions or fear",
        ],
      },
      faqs: [
        {
          question: "What do I need for a birth chart reading?",
          answer:
            "Just your date, time, and place of birth. The exact time matters. If you do not have it, message me anyway and we will look at options.",
        },
        {
          question: "Is the reading online or in person?",
          answer:
            "Both. Most readings are online by video call; in-person sessions are arranged in Barcelona depending on availability.",
        },
        {
          question: "How is this different from a regular natal chart reading?",
          answer:
            "The approach. Psychological astrology does not try to predict events — it looks at your inner world: patterns, needs, and resources. You leave with understanding and applicable steps.",
        },
        {
          question: "How much does it cost and how long is it?",
          answer: "A birth chart reading lasts 90 minutes, online or in person in Barcelona. I confirm the price over WhatsApp in the free first orientation, with no obligation.",
        },
      ],
      related: ["sinastria", "revolucionSolar", "coachingAstrologico"],
      image: "/images/home/svc-carta-natal.jpg",
      imageAlt: "Natal chart and astrology notebook",
    },
  },

  sinastria: {
    es: {
      seoTitle: "Sinastría en Barcelona — Compatibilidad de pareja",
      seoDescription:
        "Sinastría en Barcelona y online: análisis de compatibilidad entre dos cartas natales con Sarita Shakti. Pareja, familia o trabajo. Sesión de 90 minutos, online o presencial. Reserva por WhatsApp.",
      eyebrow: "Astrología psicológica · Barcelona y online",
      title: "Sinastría en Barcelona: compatibilidad de pareja",
      lead: "Entiende por qué os atraéis, dónde chocáis, qué necesita cada uno y qué patrones aparecen cuando estáis juntos.",
      intro:
        "La sinastría compara dos Cartas Natales para comprender la dinámica real entre dos personas. No se trata de decidir si sois compatibles o incompatibles: se trata de entender cómo funciona vuestra relación.",
      price: "150 €",
      duration: "90 min",
      mode: "Online o presencial en Barcelona",
      whatsappMessage: "Hola Sarita, me interesa una sinastría.",
      explore: {
        title: "Qué descubrirás",
        items: [
          "Qué os atrae el uno del otro",
          "Dónde aparecen los principales choques",
          "Qué necesita cada persona para sentirse segura",
          "Cómo expresáis afecto, deseo y conflicto",
          "Qué patrones activáis mutuamente",
          "Qué podéis aprender de la relación",
        ],
      },
      how: {
        title: "Cómo funciona",
        steps: [
          {
            title: "Escríbeme por WhatsApp",
            text: "Necesito los datos de nacimiento de las dos personas: fecha, hora y lugar.",
          },
          {
            title: "Preparo las dos cartas",
            text: "Estudio cada carta por separado y después la dinámica entre ambas.",
          },
          {
            title: "La sesión",
            text: "90 minutos, online o en Barcelona. Puede venir la pareja o solo tú: ambas opciones funcionan.",
          },
        ],
      },
      forWho: {
        title: "Para quién es",
        items: [
          "Parejas que quieren entender su dinámica, en buen momento o en crisis",
          "Relaciones familiares o de trabajo con conflictos que se repiten",
          "Si estás empezando una relación y quieres verla con más claridad",
        ],
      },
      faqs: [
        {
          question: "¿Tiene que venir la otra persona a la sesión?",
          answer:
            "No es necesario. Muchas sinastrías se hacen con una sola persona presente. Solo necesito los datos de nacimiento de ambos.",
        },
        {
          question: "¿Sirve para relaciones que no son de pareja?",
          answer:
            "Sí. La sinastría funciona igual para relaciones madre-hija, hermanos, socios de negocio o amistades importantes.",
        },
        {
          question: "¿Me dirá si somos compatibles o no?",
          answer:
            "No en términos de 'sí o no'. Ninguna relación es imposible ni perfecta por carta: lo que verás es cómo funciona la vuestra, dónde apoya y dónde exige trabajo.",
        },
        {
          question: "¿Cuánto cuesta y cuánto dura?",
          answer: "La sinastría dura 90 minutos, online o presencial en Barcelona. El precio te lo confirmo por WhatsApp, sin compromiso.",
        },
      ],
      related: ["cartaNatal", "revolucionSolar", "coachingAstrologico"],
      image: "/images/home/svc-sinastria.jpg",
      imageAlt: "Dos tazas en un ambiente cálido como símbolo de sinastría",
    },
    it: {
      seoTitle: "Sinastria a Milano — Compatibilità di coppia",
      seoDescription:
        "Sinastria a Milano e online: analisi di compatibilità tra due carte natali con Sarita Shakti. Coppia, famiglia o lavoro. Sessione di 90 minuti, online o in presenza. Prenota su WhatsApp.",
      eyebrow: "Astrologia psicologica · Milano e online",
      title: "Sinastria a Milano: compatibilità di coppia",
      lead: "Capisci perché vi attraete, dove vi scontrate, di cosa ha bisogno ciascuno e quali schemi emergono quando siete insieme.",
      intro:
        "La sinastria confronta due Carte Natali per comprendere la dinamica reale tra due persone. Non si tratta di decidere se siete compatibili o incompatibili: si tratta di capire come funziona la vostra relazione.",
      price: "150 €",
      duration: "90 min",
      mode: "Online o in presenza a Milano",
      whatsappMessage: "Ciao Sarita, mi interessa una sinastria.",
      explore: {
        title: "Cosa scoprirai",
        items: [
          "Cosa vi attrae l'uno dell'altro",
          "Dove nascono i principali scontri",
          "Di cosa ha bisogno ciascuno per sentirsi sicuro",
          "Come esprimete affetto, desiderio e conflitto",
          "Quali schemi attivate a vicenda",
          "Cosa potete imparare dalla relazione",
        ],
      },
      how: {
        title: "Come funziona",
        steps: [
          {
            title: "Scrivimi su WhatsApp",
            text: "Servono i dati di nascita di entrambe le persone: data, ora e luogo.",
          },
          {
            title: "Preparo le due carte",
            text: "Studio ogni carta separatamente e poi la dinamica tra le due.",
          },
          {
            title: "La sessione",
            text: "90 minuti, online o a Milano. Può venire la coppia o solo tu: entrambe le opzioni funzionano.",
          },
        ],
      },
      forWho: {
        title: "Per chi è",
        items: [
          "Coppie che vogliono capire la propria dinamica, in un buon momento o in crisi",
          "Relazioni familiari o di lavoro con conflitti che si ripetono",
          "Se stai iniziando una relazione e vuoi vederla con più chiarezza",
        ],
      },
      faqs: [
        {
          question: "Deve venire anche l'altra persona alla sessione?",
          answer:
            "Non è necessario. Molte sinastrie si fanno con una sola persona presente. Servono solo i dati di nascita di entrambi.",
        },
        {
          question: "Vale anche per relazioni che non sono di coppia?",
          answer:
            "Sì. La sinastria funziona anche per relazioni madre-figlia, fratelli, soci di lavoro o amicizie importanti.",
        },
        {
          question: "Mi dirà se siamo compatibili o no?",
          answer:
            "Non in termini di 'sì o no'. Nessuna relazione è impossibile né perfetta per carta: vedrai come funziona la vostra, dove sostiene e dove chiede lavoro.",
        },
        {
          question: "Quanto costa e quanto dura?",
          answer: "La sinastria dura 90 minuti, online o in presenza a Milano. Il prezzo te lo confermo su WhatsApp, senza impegno.",
        },
      ],
      related: ["cartaNatal", "revolucionSolar", "coachingAstrologico"],
      image: "/images/home/svc-sinastria.jpg",
      imageAlt: "Due tazze in un ambiente caldo come simbolo di sinastria",
    },
    en: {
      seoTitle: "Synastry Reading in Barcelona — Relationship Compatibility",
      seoDescription:
        "Synastry in Barcelona and online: compatibility analysis of two birth charts with Sarita Shakti. Couples, family, or work. A 90-minute session, online or in person. Book on WhatsApp.",
      eyebrow: "Psychological astrology · Barcelona and online",
      title: "Synastry in Barcelona: Relationship Compatibility",
      lead: "Understand why you attract each other, where you clash, what each of you needs, and which patterns show up when you are together.",
      intro:
        "Synastry compares two birth charts to understand the real dynamic between two people. It is not about deciding whether you are compatible or incompatible: it is about understanding how your relationship works.",
      price: "€150",
      duration: "90 min",
      mode: "Online or in person in Barcelona",
      whatsappMessage: "Hi Sarita, I am interested in a synastry reading.",
      explore: {
        title: "What you will discover",
        items: [
          "What draws you to each other",
          "Where the main clashes appear",
          "What each person needs to feel safe",
          "How you express affection, desire, and conflict",
          "Which patterns you trigger in each other",
          "What you can learn from the relationship",
        ],
      },
      how: {
        title: "How it works",
        steps: [
          {
            title: "Message me on WhatsApp",
            text: "I need the birth data of both people: date, time, and place.",
          },
          {
            title: "I prepare both charts",
            text: "I study each chart separately, then the dynamic between them.",
          },
          {
            title: "The session",
            text: "90 minutes, online or in Barcelona. The couple can come, or just you — both work.",
          },
        ],
      },
      forWho: {
        title: "Who it is for",
        items: [
          "Couples who want to understand their dynamic — in good times or in crisis",
          "Family or work relationships with recurring conflicts",
          "If you are starting a relationship and want to see it more clearly",
        ],
      },
      faqs: [
        {
          question: "Does the other person have to attend the session?",
          answer:
            "No. Many synastry readings are done with only one person present. I just need both people's birth data.",
        },
        {
          question: "Does it work for non-romantic relationships?",
          answer:
            "Yes. Synastry works equally well for parent-child relationships, siblings, business partners, or close friendships.",
        },
        {
          question: "Will it tell me whether we are compatible or not?",
          answer:
            "Not as a yes or no. No relationship is impossible or perfect on paper: you will see how yours works, where it supports you, and where it asks for work.",
        },
        {
          question: "How much does it cost and how long is it?",
          answer: "A synastry reading lasts 90 minutes, online or in person in Barcelona. I confirm the price over WhatsApp, with no obligation.",
        },
      ],
      related: ["cartaNatal", "revolucionSolar", "coachingAstrologico"],
      image: "/images/home/svc-sinastria.jpg",
      imageAlt: "Two cups in a warm setting as a symbol of synastry",
    },
  },

  revolucionSolar: {
    es: {
      seoTitle: "Revolución Solar en Barcelona — Tu carta del año",
      seoDescription:
        "Revolución solar en Barcelona y online con Sarita Shakti: la lectura de tu año astrológico desde tu cumpleaños. Sesión de 60 minutos. Reserva por WhatsApp.",
      eyebrow: "Astrología psicológica · Barcelona y online",
      title: "Revolución Solar en Barcelona: tu carta del año",
      lead: "Entiende qué temas pueden cobrar más importancia en tu vida durante el ciclo que empieza en tu próximo cumpleaños.",
      intro:
        "La Revolución Solar no pretende decirte exactamente qué va a pasar. Te ayuda a comprender dónde puede concentrarse tu atención, qué cambios pueden pedirte más energía y qué oportunidades o retos pueden adquirir mayor peso durante el año.",
      price: "110 €",
      duration: "60 min",
      mode: "Online o presencial en Barcelona",
      whatsappMessage: "Hola Sarita, me interesa una revolución solar.",
      explore: {
        title: "Qué descubrirás",
        items: [
          "Relaciones: qué puede cambiar en tu manera de vincularte o qué relaciones pueden cobrar mayor importancia",
          "Trabajo y dirección: qué preguntas profesionales pueden aparecer y dónde puede haber movimiento",
          "Cambios personales: qué partes de tu identidad o forma de vivir pueden estar evolucionando",
          "Decisiones: qué áreas pueden requerir más atención y conciencia",
          "Oportunidades: dónde puede abrirse espacio para crecimiento o nuevas experiencias",
          "Retos: qué temas pueden pedir más paciencia, revisión o responsabilidad",
        ],
      },
      how: {
        title: "Cómo funciona",
        steps: [
          {
            title: "Escríbeme por WhatsApp",
            text: "Con tu fecha, hora y lugar de nacimiento calculo tu revolución solar del año.",
          },
          {
            title: "Preparo tu carta anual",
            text: "Leo tu revolución solar junto con tu carta natal: el año solo tiene sentido sobre tu mapa base.",
          },
          {
            title: "La sesión",
            text: "60 minutos online o en Barcelona, idealmente cerca de tu cumpleaños.",
          },
        ],
      },
      forWho: {
        title: "Para quién es",
        items: [
          "Si se acerca tu cumpleaños y quieres empezar el ciclo con dirección",
          "Si sientes que empieza una etapa y quieres entender qué trae",
          "Si ya conoces tu carta natal y quieres seguirla año a año",
        ],
      },
      faqs: [
        {
          question: "¿Cuándo conviene hacer la revolución solar?",
          answer:
            "Idealmente en las semanas alrededor de tu cumpleaños, que es cuando arranca el ciclo. Pero se puede leer en cualquier momento del año: el ciclo sigue activo.",
        },
        {
          question: "¿Necesito haber hecho antes una carta natal?",
          answer:
            "No es imprescindible, pero ayuda. Si es tu primera sesión, la revolución solar se lee siempre sobre tu carta natal, así que también saldrás conociendo lo esencial de tu mapa base.",
        },
        {
          question: "¿Es una predicción de lo que me va a pasar?",
          answer:
            "No. Muestra qué áreas y temas se activan en tu año, no hechos cerrados. La lectura te da dirección y timing, y las decisiones siguen siendo tuyas.",
        },
        {
          question: "¿Cuánto cuesta y cuánto dura?",
          answer: "La revolución solar dura 60 minutos, online o presencial en Barcelona. El precio te lo confirmo por WhatsApp, sin compromiso.",
        },
      ],
      related: ["cartaNatal", "sinastria", "coachingAstrologico"],
      image: "/images/home/svc-revolucion-solar.jpg",
      imageAlt: "Amanecer sobre el mar como símbolo de un nuevo ciclo",
    },
    it: {
      seoTitle: "Rivoluzione Solare a Milano — La tua carta dell'anno",
      seoDescription:
        "Rivoluzione solare a Milano e online con Sarita Shakti: la lettura del tuo anno astrologico dal compleanno. Sessione di 60 minuti. Prenota su WhatsApp.",
      eyebrow: "Astrologia psicologica · Milano e online",
      title: "Rivoluzione Solare a Milano: la tua carta dell'anno",
      lead: "Capisci quali temi possono acquistare più importanza nella tua vita durante il ciclo che inizia al tuo prossimo compleanno.",
      intro:
        "La Rivoluzione Solare non pretende di dirti esattamente cosa accadrà. Ti aiuta a capire dove può concentrarsi la tua attenzione, quali cambiamenti possono chiederti più energia e quali opportunità o sfide possono acquistare più peso durante l'anno.",
      price: "110 €",
      duration: "60 min",
      mode: "Online o in presenza a Milano",
      whatsappMessage: "Ciao Sarita, mi interessa una rivoluzione solare.",
      explore: {
        title: "Cosa scoprirai",
        items: [
          "Relazioni: cosa può cambiare nel tuo modo di legarti o quali relazioni possono acquistare più importanza",
          "Lavoro e direzione: quali domande professionali possono emergere e dove può esserci movimento",
          "Cambiamenti personali: quali parti della tua identità o del tuo modo di vivere possono evolvere",
          "Decisioni: quali aree possono richiedere più attenzione e coscienza",
          "Opportunità: dove può aprirsi spazio per crescita o nuove esperienze",
          "Sfide: quali temi possono chiedere più pazienza, revisione o responsabilità",
        ],
      },
      how: {
        title: "Come funziona",
        steps: [
          {
            title: "Scrivimi su WhatsApp",
            text: "Con data, ora e luogo di nascita calcolo la tua rivoluzione solare dell'anno.",
          },
          {
            title: "Preparo la tua carta annuale",
            text: "Leggo la rivoluzione solare insieme alla tua carta natale: l'anno ha senso solo sulla tua mappa di base.",
          },
          {
            title: "La sessione",
            text: "60 minuti online o a Milano, idealmente vicino al tuo compleanno.",
          },
        ],
      },
      forWho: {
        title: "Per chi è",
        items: [
          "Se si avvicina il tuo compleanno e vuoi iniziare il ciclo con direzione",
          "Se senti che inizia una fase e vuoi capire cosa porta",
          "Se conosci già la tua carta natale e vuoi seguirla anno per anno",
        ],
      },
      faqs: [
        {
          question: "Quando conviene fare la rivoluzione solare?",
          answer:
            "Idealmente nelle settimane intorno al compleanno, quando inizia il ciclo. Ma si può leggere in qualsiasi momento dell'anno: il ciclo resta attivo.",
        },
        {
          question: "Devo aver fatto prima una carta natale?",
          answer:
            "Non è indispensabile, ma aiuta. Se è la tua prima sessione, la rivoluzione solare si legge sempre sulla carta natale, quindi conoscerai anche l'essenziale della tua mappa di base.",
        },
        {
          question: "È una previsione di ciò che mi accadrà?",
          answer:
            "No. Mostra quali aree e temi si attivano nel tuo anno, non fatti chiusi. La lettura ti dà direzione e tempi; le decisioni restano tue.",
        },
        {
          question: "Quanto costa e quanto dura?",
          answer: "La rivoluzione solare dura 60 minuti, online o in presenza a Milano. Il prezzo te lo confermo su WhatsApp, senza impegno.",
        },
      ],
      related: ["cartaNatal", "sinastria", "coachingAstrologico"],
      image: "/images/home/svc-revolucion-solar.jpg",
      imageAlt: "Alba sul mare come simbolo di un nuovo ciclo",
    },
    en: {
      seoTitle: "Solar Return Reading in Barcelona — Your Year Ahead",
      seoDescription:
        "Solar return reading in Barcelona and online with Sarita Shakti: your astrological year from your birthday. A 60-minute session. Book on WhatsApp.",
      eyebrow: "Psychological astrology · Barcelona and online",
      title: "Solar Return in Barcelona: Your Chart for the Year",
      lead: "Understand which themes may carry more weight in your life during the cycle that begins on your next birthday.",
      intro:
        "The Solar Return does not claim to tell you exactly what will happen. It helps you understand where your attention may concentrate, which changes may ask more energy of you, and which opportunities or challenges may gain weight during the year.",
      price: "€110",
      duration: "60 min",
      mode: "Online or in person in Barcelona",
      whatsappMessage: "Hi Sarita, I am interested in a solar return reading.",
      explore: {
        title: "What you will discover",
        items: [
          "Relationships: what may change in how you bond, or which relationships may gain importance",
          "Work and direction: which professional questions may appear and where there may be movement",
          "Personal changes: which parts of your identity or way of living may be evolving",
          "Decisions: which areas may require more attention and awareness",
          "Opportunities: where space may open for growth or new experiences",
          "Challenges: which themes may ask for more patience, revision, or responsibility",
        ],
      },
      how: {
        title: "How it works",
        steps: [
          {
            title: "Message me on WhatsApp",
            text: "With your date, time, and place of birth I calculate your solar return for the year.",
          },
          {
            title: "I prepare your yearly chart",
            text: "I read your solar return together with your birth chart — the year only makes sense on top of your base map.",
          },
          {
            title: "The session",
            text: "60 minutes online or in Barcelona, ideally near your birthday.",
          },
        ],
      },
      forWho: {
        title: "Who it is for",
        items: [
          "If your birthday is coming up and you want to start the cycle with direction",
          "If you feel a new phase beginning and want to understand what it brings",
          "If you already know your birth chart and want to follow it year by year",
        ],
      },
      faqs: [
        {
          question: "When is the best time for a solar return reading?",
          answer:
            "Ideally in the weeks around your birthday, when the cycle begins. But it can be read at any point — the cycle stays active all year.",
        },
        {
          question: "Do I need a birth chart reading first?",
          answer:
            "Not strictly, but it helps. If this is your first session, the solar return is always read on top of your birth chart, so you will also learn the essentials of your base map.",
        },
        {
          question: "Is it a prediction of what will happen to me?",
          answer:
            "No. It shows which areas and themes activate in your year, not fixed events. The reading gives you direction and timing; the decisions remain yours.",
        },
        {
          question: "How much does it cost and how long is it?",
          answer: "A solar return reading lasts 60 minutes, online or in person in Barcelona. I confirm the price over WhatsApp, with no obligation.",
        },
      ],
      related: ["cartaNatal", "sinastria", "coachingAstrologico"],
      image: "/images/home/svc-revolucion-solar.jpg",
      imageAlt: "Sunrise over the sea as a symbol of a new cycle",
    },
  },

  coachingAstrologico: {
    es: {
      seoTitle: "Coaching Astrológico Online — Sesiones y packs",
      seoDescription:
        "Coaching astrológico online con Sarita Shakti: sesiones individuales, seguimiento mensual de tránsitos y packs de acompañamiento. Reserva por WhatsApp.",
      eyebrow: "Astrología psicológica · Online y Barcelona",
      title: "Coaching Astrológico en Barcelona y Online",
      lead: "Si sabes que algo tiene que cambiar pero sigues bloqueado en el mismo punto, trabajamos ese proceso contigo utilizando tu Carta Natal como herramienta.",
      intro:
        "Una sesión puede darte comprensión. El coaching astrológico sirve para cuando necesitas acompañamiento para convertir esa comprensión en decisiones y cambios reales.",
      price: "Desde 50 €",
      duration: "30–60 min",
      mode: "Online (presencial en Barcelona según disponibilidad)",
      whatsappMessage: "Hola Sarita, me interesa el coaching astrológico.",
      explore: {
        title: "Para qué se utiliza",
        items: [
          "Una decisión que llevas demasiado tiempo posponiendo",
          "Un patrón que entiendes pero sigues repitiendo",
          "Un cambio profesional o personal",
          "Una relación que te está haciendo cuestionarte",
          "Un bloqueo que no consigues atravesar",
          "Una etapa de transición en la que necesitas dirección",
        ],
      },
      how: {
        title: "Cómo funciona",
        steps: [
          {
            title: "Escríbeme por WhatsApp",
            text: "Me cuentas qué proceso quieres trabajar. La primera orientación es gratuita y te recomiendo el formato que encaja.",
          },
          {
            title: "Primera sesión",
            text: "Miramos tu carta y tus tránsitos actuales, y definimos el foco del trabajo.",
          },
          {
            title: "Acompañamiento",
            text: "Sesión a sesión, unimos comprensión astrológica con pasos concretos entre encuentros.",
          },
        ],
      },
      forWho: {
        title: "Para quién es",
        items: [
          "Si estás en medio de un proceso — decisión, cambio, duelo, bloqueo — y no quieres atravesarlo a ciegas",
          "Si ya te hiciste la carta natal y quieres pasar de la comprensión a la acción",
          "Si buscas un acompañamiento regular sin comprometerte a una terapia larga",
        ],
      },
      faqs: [
        {
          question: "¿En qué se diferencia de una lectura de carta natal?",
          answer:
            "La carta natal es una foto completa de tu mapa; el coaching es un proceso: sesiones más cortas y frecuentes centradas en un tema concreto, con pasos entre sesiones. Lo ideal suele ser empezar por la carta natal y continuar con coaching.",
        },
        {
          question: "¿Cuántas sesiones necesito?",
          answer:
            "Depende del proceso. Una decisión puntual puede resolverse en una o dos sesiones; un cambio más profundo suele pedir un pack de 3 o 5. En la primera conversación por WhatsApp te oriento sin compromiso.",
        },
        {
          question: "¿Es terapia psicológica?",
          answer:
            "No. Es un acompañamiento basado en la astrología psicológica: útil para claridad, dirección y autoconocimiento, pero no sustituye a la psicoterapia cuando esta es necesaria.",
        },
        {
          question: "¿Cuánto cuesta?",
          answer:
            "El coaching astrológico online tiene varios formatos: sesión individual de 60 minutos, seguimiento mensual de 30 minutos y packs de 3 o 5 sesiones. Precios y disponibilidad se confirman por WhatsApp en la primera orientación gratuita.",
        },
      ],
      related: ["cartaNatal", "sinastria", "revolucionSolar"],
      image: "/images/home/svc-coaching.jpg",
      imageAlt: "Cuaderno y taza en un espacio de acompañamiento",
    },
    it: {
      seoTitle: "Coaching Astrologico Online — Sessioni e pacchetti",
      seoDescription:
        "Coaching astrologico online con Sarita Shakti: sessioni individuali, seguimento mensile dei transiti e pacchetti di accompagnamento. Prenota su WhatsApp.",
      eyebrow: "Astrologia psicologica · Online e Milano",
      title: "Coaching Astrologico a Milano e Online",
      lead: "Se sai che qualcosa deve cambiare ma resti bloccato nello stesso punto, lavoriamo quel processo insieme usando la tua Carta Natale come strumento.",
      intro:
        "Una sessione può darti comprensione. Il coaching astrologico serve quando hai bisogno di accompagnamento per trasformare quella comprensione in decisioni e cambiamenti reali.",
      price: "Da 50 €",
      duration: "30–60 min",
      mode: "Online (in presenza a Milano secondo disponibilità)",
      whatsappMessage: "Ciao Sarita, mi interessa il coaching astrologico.",
      explore: {
        title: "A cosa serve",
        items: [
          "Una decisione che rimandi da troppo tempo",
          "Uno schema che capisci ma continui a ripetere",
          "Un cambiamento professionale o personale",
          "Una relazione che ti sta facendo mettere in discussione",
          "Un blocco che non riesci ad attraversare",
          "Una fase di transizione in cui ti serve direzione",
        ],
      },
      how: {
        title: "Come funziona",
        steps: [
          {
            title: "Scrivimi su WhatsApp",
            text: "Mi racconti quale processo vuoi lavorare. Il primo orientamento è gratuito e ti consiglio il formato adatto.",
          },
          {
            title: "Prima sessione",
            text: "Guardiamo la tua carta e i transiti attuali, e definiamo il focus del lavoro.",
          },
          {
            title: "Accompagnamento",
            text: "Sessione dopo sessione, uniamo comprensione astrologica e passi concreti tra un incontro e l'altro.",
          },
        ],
      },
      forWho: {
        title: "Per chi è",
        items: [
          "Se sei nel mezzo di un processo — decisione, cambiamento, blocco — e non vuoi attraversarlo alla cieca",
          "Se hai già fatto la carta natale e vuoi passare dalla comprensione all'azione",
          "Se cerchi un accompagnamento regolare senza impegnarti in una terapia lunga",
        ],
      },
      faqs: [
        {
          question: "In cosa si differenzia da una lettura della carta natale?",
          answer:
            "La carta natale è una foto completa della tua mappa; il coaching è un processo: sessioni più brevi e frequenti su un tema concreto, con passi tra le sessioni. L'ideale è iniziare dalla carta natale e continuare con il coaching.",
        },
        {
          question: "Quante sessioni servono?",
          answer:
            "Dipende dal processo. Una decisione puntuale può risolversi in una o due sessioni; un cambiamento più profondo chiede un pacchetto da 3 o 5. Nella prima conversazione su WhatsApp ti oriento senza impegno.",
        },
        {
          question: "È psicoterapia?",
          answer:
            "No. È un accompagnamento basato sull'astrologia psicologica: utile per chiarezza, direzione e autoconoscenza, ma non sostituisce la psicoterapia quando è necessaria.",
        },
        {
          question: "Quanto costa?",
          answer:
            "Il coaching astrologico online ha vari formati: sessione individuale di 60 minuti, seguimento mensile di 30 minuti e pacchetti da 3 o 5 sessioni. Prezzi e disponibilità si confermano su WhatsApp nel primo orientamento gratuito.",
        },
      ],
      related: ["cartaNatal", "sinastria", "revolucionSolar"],
      image: "/images/home/svc-coaching.jpg",
      imageAlt: "Quaderno e tazza in uno spazio di accompagnamento",
    },
    en: {
      seoTitle: "Astrological Coaching Online — Sessions and Packs",
      seoDescription:
        "Online astrological coaching with Sarita Shakti: individual sessions, monthly transit follow-ups, and coaching packs. Book on WhatsApp.",
      eyebrow: "Psychological astrology · Online and Barcelona",
      title: "Astrological Coaching in Barcelona and Online",
      lead: "If you know something has to change but you stay stuck at the same point, we work on that process together using your birth chart as a tool.",
      intro:
        "A session can give you understanding. Astrological coaching is for when you need guidance to turn that understanding into real decisions and changes.",
      price: "From €50",
      duration: "30–60 min",
      mode: "Online (in person in Barcelona depending on availability)",
      whatsappMessage: "Hi Sarita, I am interested in astrological coaching.",
      explore: {
        title: "What it is used for",
        items: [
          "A decision you have been postponing for too long",
          "A pattern you understand but keep repeating",
          "A professional or personal change",
          "A relationship that is making you question yourself",
          "A block you can't get through",
          "A transition phase where you need direction",
        ],
      },
      how: {
        title: "How it works",
        steps: [
          {
            title: "Message me on WhatsApp",
            text: "Tell me what process you want to work on. The first orientation is free and I will recommend the right format.",
          },
          {
            title: "First session",
            text: "We look at your chart and current transits, and define the focus of the work.",
          },
          {
            title: "Ongoing guidance",
            text: "Session by session, we combine astrological understanding with concrete steps between meetings.",
          },
        ],
      },
      forWho: {
        title: "Who it is for",
        items: [
          "If you are in the middle of a process — a decision, a change, a block — and do not want to go through it blind",
          "If you have already had a birth chart reading and want to move from understanding to action",
          "If you want regular guidance without committing to long-term therapy",
        ],
      },
      faqs: [
        {
          question: "How is it different from a birth chart reading?",
          answer:
            "The birth chart is a complete photo of your map; coaching is a process: shorter, more frequent sessions focused on one topic, with steps between sessions. Ideally you start with a birth chart reading and continue with coaching.",
        },
        {
          question: "How many sessions do I need?",
          answer:
            "It depends on the process. A specific decision may resolve in one or two sessions; deeper change usually calls for a 3- or 5-session pack. In the first WhatsApp conversation I will orient you with no obligation.",
        },
        {
          question: "Is it psychotherapy?",
          answer:
            "No. It is guidance based on psychological astrology: useful for clarity, direction, and self-knowledge, but it does not replace psychotherapy when that is needed.",
        },
        {
          question: "How much does it cost?",
          answer:
            "Online astrological coaching comes in several formats: an individual 60-minute session, a monthly 30-minute follow-up, and packs of 3 or 5 sessions. Prices and availability are confirmed over WhatsApp in the free first orientation.",
        },
      ],
      related: ["cartaNatal", "sinastria", "revolucionSolar"],
      image: "/images/home/svc-coaching.jpg",
      imageAlt: "Notebook and cup in a space for guidance",
    },
  },
};
