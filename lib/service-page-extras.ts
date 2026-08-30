import { Locale } from "./locales";
import { ServiceKey } from "./service-pages-content";

type QuickCard = { tag: string; title: string; text: string };
type SeoSub = { h3: string; text: string };
type AudienceCard = { title: string; text: string };

export type ServicePageExtras = {
  benefitTitle: string;
  heroCta?: string;
  heroNote?: string;
  audienceTitle?: string;
  quick: QuickCard[];
  sticky: { eyebrow: string; title: string; text: string };
  seo: { eyebrow: string; h2: string; paragraphs: string[]; subs: SeoSub[] };
  audience: AudienceCard[];
  location: { title: string; lead: string; showAddress: boolean; cta?: string };
  cta: { title: string; lead: string; label?: string; support?: string };
};

export type ServiceExtrasLabels = {
  audienceEyebrow: string;
  locationEyebrow: string;
  locationAddressText: string;
  locationCta: string;
  stepsEyebrow: string;
  ctaEyebrow: string;
  faqEyebrow: string;
  moreEyebrow: string;
  callLabel: string;
  heroImageBadgeTitle: string;
  heroImageBadgeText: string;
};

export const serviceExtrasLabels: Record<Locale, ServiceExtrasLabels> = {
  es: {
    audienceEyebrow: "Para quién es esta sesión",
    locationEyebrow: "Sesión presencial en Barcelona",
    locationAddressText:
      "La consulta presencial se realiza en Carrer de Salomó ben Adret 4, 08001 Barcelona. Al reservar te confirmo todos los detalles por WhatsApp.",
    locationCta: "Reservar en Barcelona",
    stepsEyebrow: "Cómo funciona",
    ctaEyebrow: "Reserva tu sesión",
    faqEyebrow: "Preguntas frecuentes",
    moreEyebrow: "Astrología psicológica en Barcelona",
    callLabel: "+34 665 25 98 59",
    heroImageBadgeTitle: "Preparada específicamente para ti",
    heroImageBadgeText: "Estudio tu carta antes de la sesión. No utilizo una interpretación automática o genérica.",
  },
  it: {
    audienceEyebrow: "Per chi è questa sessione",
    locationEyebrow: "Sessioni a Milano e online",
    locationAddressText:
      "Le sessioni in presenza a Milano si coordinano secondo disponibilità. Al momento della prenotazione ti confermo tutti i dettagli su WhatsApp.",
    locationCta: "Prenota su WhatsApp",
    stepsEyebrow: "Come funziona",
    ctaEyebrow: "Prenota la tua sessione",
    faqEyebrow: "Domande frequenti",
    moreEyebrow: "Astrologia psicologica a Milano",
    callLabel: "+34 665 25 98 59",
    heroImageBadgeTitle: "Una lettura personale",
    heroImageBadgeText: "Preparata per te, non un'interpretazione generica.",
  },
  en: {
    audienceEyebrow: "Who this session is for",
    locationEyebrow: "In-person session in Barcelona",
    locationAddressText:
      "In-person sessions take place at Carrer de Salomó ben Adret 4, 08001 Barcelona. When you book, I confirm all the details over WhatsApp.",
    locationCta: "Book in Barcelona",
    stepsEyebrow: "How it works",
    ctaEyebrow: "Book your session",
    faqEyebrow: "Frequently asked questions",
    moreEyebrow: "Psychological astrology in Barcelona",
    callLabel: "+34 665 25 98 59",
    heroImageBadgeTitle: "A personal reading",
    heroImageBadgeText: "Prepared for you, not a generic interpretation.",
  },
};

export const servicePageExtras: Record<ServiceKey, Record<Locale, ServicePageExtras>> = {
  cartaNatal: {
    es: {
      benefitTitle: "Sal de la sesión entendiendo cosas de ti que antes no terminaban de encajar.",
      heroCta: "Quiero conocer mi Carta Natal",
      heroNote: "Online o presencial en Barcelona · Primera orientación por WhatsApp gratuita",
      audienceTitle: "Esta sesión puede encajarte especialmente si…",
      quick: [
        { tag: "01 · Antes", title: "Estudio tu Carta Natal", text: "Me envías tu fecha, hora y lugar de nacimiento y preparo tu carta antes de vernos." },
        { tag: "02 · Durante", title: "Conectamos la carta contigo", text: "No se trata de enumerar planetas. Relacionamos lo que aparece en tu carta con tu historia, relaciones, decisiones y preguntas." },
        { tag: "03 · Después", title: "Te llevas una visión mucho más clara", text: "Entiendes mejor qué se repite, qué necesitas y dónde puedes empezar a actuar de forma diferente." },
      ],
      sticky: {
        eyebrow: "Carta natal Barcelona",
        title: "Tu Carta Natal explica patrones. No decide tu futuro.",
        text: "La utilizamos para entenderte mejor, no para decirte lo que va a ocurrir ni convertirte en una etiqueta.",
      },
      seo: {
        eyebrow: "Astrología psicológica",
        h2: "¿Qué es una carta natal y para qué sirve?",
        paragraphs: [
          "La Carta Natal, también llamada Carta Astral o mapa astral, representa la posición del Sol, la Luna, los planetas, el Ascendente y las casas astrológicas en el momento exacto de tu nacimiento. Para calcularla se utilizan tres datos: tu fecha, hora y lugar de nacimiento.",
          "Pero el gráfico por sí solo no es lo importante. En una lectura de Carta Natal desde la astrología psicológica interpretamos cómo se relacionan todos esos elementos para comprender mejor tu personalidad, necesidades, talentos, contradicciones, vínculos y procesos personales.",
        ],
        subs: [
          {
            h3: "Carta Natal y astrología psicológica",
            text: "No utilizo la Carta Natal para darte una lista cerrada de acontecimientos futuros. La utilizamos como herramienta de autoconocimiento: para poner palabras y contexto a patrones que quizá ya reconoces en tu vida pero todavía no sabes cómo interpretar.",
          },
          {
            h3: "Carta Natal, Carta Astral y mapa astral",
            text: "Son diferentes nombres que habitualmente se utilizan para referirse al mismo mapa de nacimiento. Lo que realmente cambia es la forma de interpretarlo. Mi enfoque se centra en la astrología psicológica y en cómo puedes relacionar la información de tu carta con tu experiencia real.",
          },
        ],
      },
      audience: [
        { title: "Estás en un momento de cambio", text: "Tienes decisiones delante y necesitas entender mejor qué quieres realmente." },
        { title: "Te das cuenta de que repites patrones", text: "Cambian las personas o las circunstancias, pero ciertas dinámicas vuelven." },
        { title: "Quieres entender mejor tus relaciones", text: "Quieres comprender qué necesitas, cómo te vinculas y por qué determinados comportamientos te afectan tanto." },
        { title: "Hay partes de ti que parecen contradictorias", text: "Quieres entender por qué puedes querer dos cosas opuestas al mismo tiempo." },
        { title: "Te interesa la astrología pero buscas algo más serio", text: "No quieres frases genéricas sobre tu signo. Quieres una lectura personalizada y profunda." },
        { title: "Buscas autoconocimiento sin fatalismo", text: "Quieres utilizar la astrología para comprender, no para que alguien decida tu futuro por ti." },
      ],
      location: {
        title: "¿Buscas una lectura de carta natal en Barcelona?",
        lead: "Puedes hacer tu lectura de Carta Natal presencialmente en Barcelona o realizarla online estés donde estés. La sesión presencial permite trabajar tu mapa astral cara a cara en un entorno tranquilo y privado.",
        showAddress: true,
        cta: "Reservar Carta Natal en Barcelona",
      },
      cta: {
        title: "¿Quieres entender qué cuenta tu Carta Natal sobre ti?",
        lead: "Escríbeme por WhatsApp y cuéntame brevemente qué te gustaría comprender.",
        label: "Quiero reservar mi Carta Natal",
        support: "Disponible presencialmente en Barcelona y online.",
      },
    },
    it: {
      benefitTitle: "Esci dalla sessione capendo cose di te che prima non tornavano.",
      heroCta: "Voglio conoscere la mia Carta Natale",
      heroNote: "Online o in presenza a Milano · Primo orientamento su WhatsApp gratuito",
      audienceTitle: "Questa sessione può fare per te soprattutto se…",
      quick: [
        { tag: "01 · Prima", title: "Studio la tua Carta Natale", text: "Mi invii data, ora e luogo di nascita e preparo la tua carta prima di vederci." },
        { tag: "02 · Durante", title: "Colleghiamo la carta a te", text: "Non si tratta di elencare pianeti. Colleghiamo ciò che appare nella tua carta alla tua storia, relazioni, decisioni e domande." },
        { tag: "03 · Dopo", title: "Porti con te una visione molto più chiara", text: "Capisci meglio cosa si ripete, di cosa hai bisogno e dove puoi iniziare ad agire diversamente." },
      ],
      sticky: {
        eyebrow: "Carta natale Milano",
        title: "La tua Carta Natale spiega schemi. Non decide il tuo futuro.",
        text: "La usiamo per capirti meglio, non per dirti cosa accadrà né per trasformarti in un'etichetta.",
      },
      seo: {
        eyebrow: "Astrologia psicologica",
        h2: "Che cos'è una carta natale e a cosa serve?",
        paragraphs: [
          "Una carta natale o tema natale rappresenta la posizione simbolica del Sole, della Luna, dei pianeti, dell'Ascendente e delle case astrologiche nel momento della tua nascita. Per calcolarla servono data, ora e luogo di nascita.",
          "In una lettura della carta natale non cerco di dirti chi “dovresti” essere né di fare previsioni rigide sul tuo futuro. L'approccio dell'astrologia psicologica cerca di comprendere come si esprimono i tuoi bisogni, le contraddizioni, le risorse, i legami e le fasi di crescita.",
        ],
        subs: [
          {
            h3: "Carta Natale e astrologia psicologica",
            text: "Non uso la Carta Natale per darti una lista chiusa di eventi futuri. La usiamo come strumento di autoconoscenza: per dare parole e contesto a schemi che forse già riconosci nella tua vita ma non sai ancora interpretare.",
          },
          {
            h3: "Carta Natale, tema natale e mappa astrale",
            text: "Sono nomi diversi che di solito indicano la stessa mappa di nascita. Ciò che cambia davvero è il modo di interpretarla. Il mio approccio si concentra sull'astrologia psicologica e su come collegare le informazioni della tua carta alla tua esperienza reale.",
          },
        ],
      },
      audience: [
        { title: "Sei in un momento di cambiamento", text: "Hai decisioni davanti e ti serve capire meglio cosa vuoi davvero." },
        { title: "Ti accorgi di ripetere schemi", text: "Cambiano le persone o le circostanze, ma certe dinamiche tornano." },
        { title: "Vuoi capire meglio le tue relazioni", text: "Vuoi comprendere di cosa hai bisogno, come ti leghi e perché certi comportamenti ti toccano tanto." },
        { title: "Ci sono parti di te che sembrano contraddittorie", text: "Vuoi capire perché puoi volere due cose opposte allo stesso tempo." },
        { title: "Ti interessa l'astrologia ma cerchi qualcosa di più serio", text: "Non vuoi frasi generiche sul tuo segno. Vuoi una lettura personalizzata e profonda." },
        { title: "Cerchi autoconoscenza senza fatalismo", text: "Vuoi usare l'astrologia per comprendere, non perché qualcuno decida il tuo futuro al posto tuo." },
      ],
      location: {
        title: "Cerchi una lettura della carta natale a Milano?",
        lead: "Le sessioni si svolgono online e, secondo disponibilità, in presenza a Milano. La qualità della lettura è la stessa in entrambi i formati.",
        showAddress: false,
      },
      cta: {
        title: "Vuoi capire cosa racconta di te la tua Carta Natale?",
        lead: "Scrivimi su WhatsApp e raccontami brevemente cosa vorresti comprendere.",
        label: "Voglio prenotare la mia Carta Natale",
        support: "Disponibile online e in presenza a Milano.",
      },
    },
    en: {
      benefitTitle: "Leave the session understanding things about yourself that never quite added up.",
      heroCta: "I want to know my Birth Chart",
      heroNote: "Online or in person in Barcelona · Free first orientation on WhatsApp",
      audienceTitle: "This session may especially fit you if…",
      quick: [
        { tag: "01 · Before", title: "I study your Birth Chart", text: "You send me your date, time, and place of birth and I prepare your chart before we meet." },
        { tag: "02 · During", title: "We connect the chart to you", text: "It is not about listing planets. We relate what appears in your chart to your story, relationships, decisions, and questions." },
        { tag: "03 · After", title: "You leave with a much clearer picture", text: "You better understand what repeats, what you need, and where you can start acting differently." },
      ],
      sticky: {
        eyebrow: "Birth chart Barcelona",
        title: "Your Birth Chart explains patterns. It does not decide your future.",
        text: "We use it to understand you better, not to tell you what will happen or turn you into a label.",
      },
      seo: {
        eyebrow: "Psychological astrology",
        h2: "What is a birth chart and what is it for?",
        paragraphs: [
          "A birth chart or natal chart represents the symbolic position of the Sun, the Moon, the planets, the Ascendant, and the astrological houses at the moment you were born. To calculate it, your date, time, and place of birth are used.",
          "In a birth chart reading in Barcelona I am not trying to tell you who you “should” be or make rigid predictions about your future. The psychological astrology approach seeks to understand how your needs, contradictions, resources, bonds, and stages of growth express themselves.",
        ],
        subs: [
          {
            h3: "Birth chart and psychological astrology",
            text: "I do not use the birth chart to give you a closed list of future events. We use it as a tool for self-knowledge: to put words and context to patterns you may already recognize in your life but do not yet know how to interpret.",
          },
          {
            h3: "Birth chart, natal chart, and astral map",
            text: "They are different names that usually refer to the same birth map. What really changes is how it is interpreted. My approach focuses on psychological astrology and on how you can relate the information in your chart to your real experience.",
          },
        ],
      },
      audience: [
        { title: "You are at a turning point", text: "You have decisions ahead and need to understand better what you really want." },
        { title: "You notice you repeat patterns", text: "The people or circumstances change, but certain dynamics keep returning." },
        { title: "You want to understand your relationships better", text: "You want to understand what you need, how you bond, and why certain behaviours affect you so much." },
        { title: "Parts of you seem contradictory", text: "You want to understand why you can want two opposite things at the same time." },
        { title: "You like astrology but want something more serious", text: "You don't want generic lines about your sign. You want a personalized, deep reading." },
        { title: "You want self-knowledge without fatalism", text: "You want to use astrology to understand, not to have someone decide your future for you." },
      ],
      location: {
        title: "Looking for a birth chart reading in Barcelona?",
        lead: "You can have your birth chart session in person in Barcelona. If you are outside the city, the same session is available online.",
        showAddress: true,
      },
      cta: {
        title: "Want to understand what your Birth Chart says about you?",
        lead: "Message me on WhatsApp and tell me briefly what you would like to understand.",
        label: "I want to book my Birth Chart",
        support: "Available in person in Barcelona and online.",
      },
    },
  },

  sinastria: {
    es: {
      benefitTitle: "Comprende lo que ocurre entre vosotros, no solo lo que ocurre en cada uno.",
      heroCta: "Quiero entender nuestra relación",
      heroNote: "Online o presencial en Barcelona · Primera orientación por WhatsApp gratuita",
      quick: [
        { tag: "01 · Antes", title: "Preparo las dos cartas", text: "Me envías los datos de nacimiento de ambas personas y estudio cada carta y la dinámica entre ellas." },
        { tag: "02 · Sesión", title: "90 minutos de lectura", text: "Sinastría presencial en Barcelona u online. Puede venir la pareja o solo tú: ambas opciones funcionan." },
        { tag: "03 · Después", title: "Claves para la relación", text: "Sales con una comprensión concreta de la dinámica y pasos aplicables a los retos que estáis viviendo." },
      ],
      sticky: {
        eyebrow: "Sinastría Barcelona",
        title: "Una carta no decide si una relación “funciona”.",
        text: "La sinastría no da una puntuación de compatibilidad. Ayuda a entender la dinámica para que podáis verla con más claridad.",
      },
      seo: {
        eyebrow: "Astrología psicológica",
        h2: "¿Qué es la sinastría y qué puede decirte?",
        paragraphs: [
          "La sinastría astrológica compara dos Cartas Natales para estudiar cómo interactúan los planetas y puntos principales de una persona con los de la otra.",
          "Puede utilizarse para comprender vínculos de pareja, aunque también puede aplicarse a otras relaciones significativas.",
          "Una sesión de sinastría puede ayudarte a entender afinidades, tensiones, necesidades emocionales, comunicación, atracción y patrones que se generan entre ambas personas.",
        ],
        subs: [
          {
            h3: "Compatibilidad de pareja con mirada psicológica",
            text: "Más que preguntar “¿somos compatibles?”, la sinastría psicológica pregunta “¿cómo funciona lo nuestro?”. Qué proyecta cada uno en el otro, qué necesidades emocionales están en juego y qué aprendizajes trae la relación a cada parte.",
          },
          {
            h3: "¿Hace falta que venga la otra persona?",
            text: "No. Muchas sinastrías se hacen con una sola persona presente. Solo necesito los datos de nacimiento de ambos: fecha, hora y lugar. La sesión se adapta a quien esté en la lectura.",
          },
        ],
      },
      audience: [
        { title: "Tu pareja y tú queréis entenderos", text: "En buen momento o en crisis: ver la dinámica desde fuera cambia la conversación." },
        { title: "Un vínculo se repite en conflicto", text: "Relaciones familiares o de trabajo con fricciones que vuelven una y otra vez." },
        { title: "Estás empezando una relación", text: "Quieres ver con más claridad qué se está formando y qué trae cada uno." },
      ],
      location: {
        title: "¿Buscas una sinastría en Barcelona?",
        lead: "Puedes realizar tu lectura de sinastría presencialmente en Barcelona o hacer la sesión online.",
        showAddress: true,
        cta: "Reservar Sinastría en Barcelona",
      },
      cta: {
        title: "¿Hay algo de vuestra relación que no termináis de entender?",
        lead: "Cuéntame qué os preocupa y vemos si una sinastría puede ayudaros a ponerlo en contexto.",
        label: "Consultar por WhatsApp",
      },
    },
    it: {
      benefitTitle: "Comprendi ciò che accade tra di voi, non solo ciò che accade in ciascuno.",
      heroCta: "Voglio capire la nostra relazione",
      heroNote: "Online o in presenza a Milano · Primo orientamento su WhatsApp gratuito",
      quick: [
        { tag: "01 · Prima", title: "Preparo le due carte", text: "Mi invii i dati di nascita di entrambe le persone e studio ogni carta e la dinamica tra le due." },
        { tag: "02 · Sessione", title: "90 minuti di lettura", text: "Sinastria online o in presenza a Milano. Può venire la coppia o solo tu: entrambe le opzioni funzionano." },
        { tag: "03 · Dopo", title: "Chiavi per la relazione", text: "Esci con una comprensione concreta della dinamica e passi applicabili alle sfide che state vivendo." },
      ],
      sticky: {
        eyebrow: "Sinastria Milano",
        title: "Una carta non decide se una relazione «funziona».",
        text: "La sinastria non dà un punteggio di compatibilità. Aiuta a capire la dinamica perché possiate vederla con più chiarezza.",
      },
      seo: {
        eyebrow: "Astrologia psicologica",
        h2: "Che cos'è la sinastria e cosa può dirti?",
        paragraphs: [
          "La sinastria è lo studio della compatibilità tra due carte natali: confronta il tuo tema natale con quello di un'altra persona per vedere come interagite davvero. Non è un test da rivista: è una lettura psicologica della dinamica tra due persone concrete.",
          "In una sinastria guardiamo dove la relazione scorre, dove i conflitti si ripetono e cosa chiede ciascuno senza dirlo. Funziona per le coppie, ma anche per relazioni familiari, di amicizia o di lavoro.",
        ],
        subs: [
          {
            h3: "Compatibilità di coppia con sguardo psicologico",
            text: "Più che chiedere “siamo compatibili?”, la sinastria psicologica chiede “come funziona il nostro rapporto?”. Cosa proietta ciascuno sull'altro, quali bisogni emotivi sono in gioco e quali apprendimenti porta la relazione a ciascuna parte.",
          },
          {
            h3: "Deve venire anche l'altra persona?",
            text: "No. Molte sinastrie si fanno con una sola persona presente. Servono solo i dati di nascita di entrambi: data, ora e luogo. La sessione si adatta a chi è presente nella lettura.",
          },
        ],
      },
      audience: [
        { title: "Tu e il tuo partner volete capirvi", text: "In un buon momento o in crisi: vedere la dinamica da fuori cambia la conversazione." },
        { title: "Un legame si ripete in conflitto", text: "Relazioni familiari o di lavoro con attriti che tornano ancora e ancora." },
        { title: "Stai iniziando una relazione", text: "Vuoi vedere con più chiarezza cosa si sta formando e cosa porta ciascuno." },
      ],
      location: {
        title: "Cerchi una sinastria a Milano?",
        lead: "Le sessioni di sinastria si svolgono online e, secondo disponibilità, in presenza a Milano, in coppia o individualmente.",
        showAddress: false,
      },
      cta: {
        title: "C'è qualcosa della vostra relazione che non riuscite a capire fino in fondo?",
        lead: "Raccontami cosa vi preoccupa e vediamo se una sinastria può aiutarvi a metterlo in contesto.",
        label: "Chiedi su WhatsApp",
      },
    },
    en: {
      benefitTitle: "Understand what happens between you, not just what happens in each of you.",
      heroCta: "I want to understand our relationship",
      heroNote: "Online or in person in Barcelona · Free first orientation on WhatsApp",
      quick: [
        { tag: "01 · Before", title: "I prepare both charts", text: "You send me both people's birth data and I study each chart and the dynamic between them." },
        { tag: "02 · Session", title: "A 90-minute reading", text: "Synastry in person in Barcelona or online. The couple can come, or just you — both work." },
        { tag: "03 · After", title: "Keys for the relationship", text: "You leave with a concrete understanding of the dynamic and applicable steps for the challenges you are living." },
      ],
      sticky: {
        eyebrow: "Synastry Barcelona",
        title: "A chart does not decide whether a relationship “works”.",
        text: "Synastry does not give a compatibility score. It helps you understand the dynamic so you can see it with more clarity.",
      },
      seo: {
        eyebrow: "Psychological astrology",
        h2: "What is synastry and what can it tell you?",
        paragraphs: [
          "Synastry is the study of compatibility between two birth charts: it compares your chart with another person's to see how you actually interact. It is not a magazine quiz: it is a psychological reading of the dynamic between two real people.",
          "In a synastry session in Barcelona we look at where the relationship flows, where conflicts repeat, and what each of you is asking for without saying it. It works for couples, but also for family, friendship, or work relationships.",
        ],
        subs: [
          {
            h3: "Relationship compatibility with a psychological lens",
            text: "Rather than asking “are we compatible?”, psychological synastry asks “how does our relationship work?”. What each of you projects onto the other, which emotional needs are at play, and which lessons the relationship brings each side.",
          },
          {
            h3: "Does the other person have to come?",
            text: "No. Many synastry readings are done with only one person present. I just need both people's birth data: date, time, and place. The session adapts to whoever is in the reading.",
          },
        ],
      },
      audience: [
        { title: "You and your partner want to understand each other", text: "In good times or in crisis: seeing the dynamic from outside changes the conversation." },
        { title: "A bond keeps ending in conflict", text: "Family or work relationships with friction that returns again and again." },
        { title: "You are starting a relationship", text: "You want to see more clearly what is forming and what each person brings." },
      ],
      location: {
        title: "Looking for a synastry reading in Barcelona?",
        lead: "You can have the synastry session in person in Barcelona, as a couple or individually. It is also available online.",
        showAddress: true,
      },
      cta: {
        title: "Is there something about your relationship you can't quite figure out?",
        lead: "Tell me what worries you and we will see whether a synastry reading can help put it in context.",
        label: "Ask on WhatsApp",
      },
    },
  },

  revolucionSolar: {
    es: {
      benefitTitle: "Entiende dónde puede estar el foco de tu próximo año.",
      heroCta: "Quiero conocer mi próximo ciclo",
      heroNote: "Online o presencial en Barcelona · Primera orientación por WhatsApp gratuita",
      quick: [
        { tag: "01 · Antes", title: "Calculo tu carta del año", text: "Con tus datos de nacimiento calculo tu revolución solar y la estudio junto a tu carta natal." },
        { tag: "02 · Sesión", title: "60 minutos contigo", text: "Lectura presencial en Barcelona u online, idealmente en las semanas alrededor de tu cumpleaños." },
        { tag: "03 · Después", title: "Dirección para tu ciclo", text: "Sales sabiendo qué áreas se activan este año, qué retos trae y dónde están las oportunidades." },
      ],
      sticky: {
        eyebrow: "Revolución solar Barcelona",
        title: "Tu año no está escrito. Pero puede tener temas muy claros.",
        text: "La Revolución Solar sirve para comprender esos temas antes de vivirlos únicamente en automático.",
      },
      seo: {
        eyebrow: "Astrología psicológica",
        h2: "¿Qué es la revolución solar y para qué sirve?",
        paragraphs: [
          "La Revolución Solar es una carta astrológica calculada para el momento exacto en el que el Sol vuelve a la misma posición que ocupaba cuando naciste.",
          "Ese momento ocurre alrededor de tu cumpleaños y se utiliza para estudiar los temas principales del nuevo ciclo anual.",
          "La interpretación cobra más sentido cuando se compara con tu Carta Natal: el año solo se entiende sobre tu mapa de base.",
        ],
        subs: [
          {
            h3: "¿Cuándo conviene hacer la revolución solar?",
            text: "Idealmente en las semanas alrededor de tu cumpleaños, cuando arranca el ciclo. Pero puede leerse en cualquier momento del año: el ciclo sigue activo y la lectura sigue orientando lo que queda por delante.",
          },
          {
            h3: "Revolución solar y tránsitos: dos herramientas del año",
            text: "La revolución solar da la foto del ciclo anual; los tránsitos muestran los movimientos concretos mes a mes. En la sesión se integran ambas miradas para que el año tenga dirección y momentos.",
          },
        ],
      },
      audience: [
        { title: "Se acerca tu cumpleaños", text: "Quieres empezar tu nuevo ciclo con dirección en lugar de dejarlo pasar sin más." },
        { title: "Sientes que empieza una etapa", text: "Algo está cambiando y quieres entender qué trae y qué te pide." },
        { title: "Ya conoces tu carta natal", text: "Quieres seguir tu proceso año a año con una lectura anual concreta." },
      ],
      location: {
        title: "¿Buscas una revolución solar en Barcelona?",
        lead: "Puedes hacer tu lectura anual presencial en Barcelona o en sesión online, idealmente cerca de tu cumpleaños.",
        showAddress: true,
      },
      cta: {
        title: "¿Quieres entender mejor el año que tienes delante?",
        lead: "60 minutos para leer tu carta del año y darle dirección al ciclo que empieza.",
        label: "Reservar mi Revolución Solar",
      },
    },
    it: {
      benefitTitle: "Capisci dove può essere il focus del tuo prossimo anno.",
      heroCta: "Voglio conoscere il mio prossimo ciclo",
      heroNote: "Online o in presenza a Milano · Primo orientamento su WhatsApp gratuito",
      quick: [
        { tag: "01 · Prima", title: "Calcolo la tua carta dell'anno", text: "Con i tuoi dati di nascita calcolo la rivoluzione solare e la studio insieme alla tua carta natale." },
        { tag: "02 · Sessione", title: "60 minuti con te", text: "Lettura online o in presenza a Milano, idealmente nelle settimane intorno al tuo compleanno." },
        { tag: "03 · Dopo", title: "Direzione per il tuo ciclo", text: "Esci sapendo quali aree si attivano quest'anno, quali sfide porta e dove sono le opportunità." },
      ],
      sticky: {
        eyebrow: "Rivoluzione solare Milano",
        title: "Il tuo anno non è scritto. Ma può avere temi molto chiari.",
        text: "La Rivoluzione Solare serve a comprendere quei temi prima di viverli solo in automatico.",
      },
      seo: {
        eyebrow: "Astrologia psicologica",
        h2: "Che cos'è la rivoluzione solare e a cosa serve?",
        paragraphs: [
          "La rivoluzione solare è la carta calcolata nel momento esatto in cui il Sole torna nella posizione che occupava quando sei nato: il tuo compleanno astrologico. Quella carta segna il clima del tuo anno — quali aree della vita si attivano, quali temi chiedono attenzione e dove si aprono opportunità.",
          "In una lettura di rivoluzione solare la carta annuale si legge sempre sulla tua carta natale: l'anno ha senso solo sulla tua mappa di base. Per questo, anche se è la tua prima sessione, uscirai conoscendo anche l'essenziale del tuo tema natale.",
        ],
        subs: [
          {
            h3: "Quando conviene fare la rivoluzione solare?",
            text: "Idealmente nelle settimane intorno al compleanno, quando inizia il ciclo. Ma può essere letta in qualsiasi momento dell'anno: il ciclo resta attivo e la lettura continua a orientare ciò che resta davanti.",
          },
          {
            h3: "Rivoluzione solare e transiti: due strumenti dell'anno",
            text: "La rivoluzione solare dà la foto del ciclo annuale; i transiti mostrano i movimenti concreti mese per mese. Nella sessione si integrano entrambi gli sguardi perché l'anno abbia direzione e tempi.",
          },
        ],
      },
      audience: [
        { title: "Il tuo compleanno si avvicina", text: "Vuoi iniziare il nuovo ciclo con direzione invece di lasciarlo passare." },
        { title: "Senti che inizia una fase", text: "Qualcosa sta cambiando e vuoi capire cosa porta e cosa ti chiede." },
        { title: "Conosci già la tua carta natale", text: "Vuoi seguire il tuo processo anno per anno con una lettura annuale concreta." },
      ],
      location: {
        title: "Cerchi una rivoluzione solare a Milano?",
        lead: "Puoi fare la tua lettura annuale online o, secondo disponibilità, in presenza a Milano, idealmente vicino al compleanno.",
        showAddress: false,
      },
      cta: {
        title: "Vuoi capire meglio l'anno che hai davanti?",
        lead: "60 minuti per leggere la tua carta dell'anno e dare direzione al ciclo che inizia.",
        label: "Prenota la mia Rivoluzione Solare",
      },
    },
    en: {
      benefitTitle: "Understand where the focus of your next year may be.",
      heroCta: "I want to know my next cycle",
      heroNote: "Online or in person in Barcelona · Free first orientation on WhatsApp",
      quick: [
        { tag: "01 · Before", title: "I calculate your year chart", text: "With your birth data I calculate your solar return and study it together with your birth chart." },
        { tag: "02 · Session", title: "60 minutes with you", text: "Reading in person in Barcelona or online, ideally in the weeks around your birthday." },
        { tag: "03 · After", title: "Direction for your cycle", text: "You leave knowing which areas activate this year, which challenges it brings, and where the opportunities are." },
      ],
      sticky: {
        eyebrow: "Solar return Barcelona",
        title: "Your year is not written. But it can have very clear themes.",
        text: "The Solar Return helps you understand those themes before living them only on autopilot.",
      },
      seo: {
        eyebrow: "Psychological astrology",
        h2: "What is a solar return and what is it for?",
        paragraphs: [
          "The solar return is the chart calculated for the exact moment the Sun returns to the position it held when you were born: your astrological birthday. That chart sets the climate of your year — which areas of your life activate, which themes ask for attention, and where opportunities open.",
          "In a solar return reading in Barcelona the yearly chart is always read on top of your birth chart: the year only makes sense on your base map. That is why, even if it is your first session, you will also leave knowing the essentials of your birth chart.",
        ],
        subs: [
          {
            h3: "When is the best time for a solar return?",
            text: "Ideally in the weeks around your birthday, when the cycle begins. But it can be read at any point of the year: the cycle stays active and the reading still orients what lies ahead.",
          },
          {
            h3: "Solar return and transits: two tools for the year",
            text: "The solar return gives the photo of the yearly cycle; transits show the concrete movements month by month. The session integrates both perspectives so your year has direction and timing.",
          },
        ],
      },
      audience: [
        { title: "Your birthday is coming up", text: "You want to start the new cycle with direction instead of letting it slip by." },
        { title: "You feel a new phase beginning", text: "Something is shifting and you want to understand what it brings and what it asks of you." },
        { title: "You already know your birth chart", text: "You want to follow your process year by year with a concrete annual reading." },
      ],
      location: {
        title: "Looking for a solar return reading in Barcelona?",
        lead: "You can have your yearly reading in person in Barcelona or online, ideally near your birthday.",
        showAddress: true,
      },
      cta: {
        title: "Want to understand the year ahead of you better?",
        lead: "60 minutes to read your chart for the year and give direction to the cycle that begins.",
        label: "Book my Solar Return",
      },
    },
  },

  coachingAstrologico: {
    es: {
      benefitTitle: "No solo entender qué ocurre. Empezar a hacer algo diferente.",
      heroCta: "Cuéntame qué quieres trabajar",
      heroNote: "Online, estés donde estés · Primera orientación por WhatsApp gratuita",
      quick: [
        { tag: "01 · Antes", title: "Me cuentas tu proceso", text: "Por WhatsApp me explicas qué quieres trabajar. La primera orientación es gratuita y te recomiendo el formato." },
        { tag: "02 · Sesión", title: "Tu carta como brújula", text: "Miramos tu carta natal y tus tránsitos actuales, y definimos el foco del trabajo." },
        { tag: "03 · Proceso", title: "Acompañamiento continuo", text: "Sesión a sesión unimos comprensión astrológica con pasos concretos entre encuentros." },
      ],
      sticky: {
        eyebrow: "Coaching astrológico",
        title: "Entender el patrón es el principio. Cambiarlo es el trabajo.",
        text: "El coaching utiliza tu Carta Natal como una herramienta dentro de un proceso de reflexión, decisión y acción.",
      },
      seo: {
        eyebrow: "Astrología psicológica",
        h2: "¿Qué es el coaching astrológico y cómo funciona?",
        paragraphs: [
          "El coaching astrológico combina herramientas de acompañamiento personal con la información simbólica de tu Carta Natal.",
          "A diferencia de una lectura puntual, permite trabajar un tema durante varias sesiones, observar cómo evoluciona y convertir lo que vas comprendiendo en decisiones concretas.",
        ],
        subs: [
          {
            h3: "¿Coaching astrológico o lectura de carta natal?",
            text: "La carta natal es la foto completa de tu mapa; el coaching es el proceso que la pone en movimiento. Lo ideal suele ser empezar por la lectura de carta natal y continuar con coaching para trabajar lo que aparece.",
          },
          {
            h3: "¿Es psicoterapia?",
            text: "No. Es un acompañamiento basado en la astrología psicológica: útil para claridad, dirección y autoconocimiento, pero no sustituye a la psicoterapia cuando esta es necesaria.",
          },
        ],
      },
      audience: [
        { title: "Estás en medio de un proceso", text: "Una decisión, un cambio, un duelo o un bloqueo que no quieres atravesar a ciegas." },
        { title: "Ya te hiciste la carta natal", text: "Quieres pasar de la comprensión a la acción con un acompañamiento concreto." },
        { title: "Buscas seguimiento regular", text: "Un espacio mensual o un pack corto, sin comprometerte a una terapia larga." },
      ],
      location: {
        title: "Coaching astrológico online, estés donde estés",
        lead: "El coaching se realiza online, por videollamada. Si estás en Barcelona, algunas sesiones pueden coordinarse presencialmente según disponibilidad.",
        showAddress: true,
      },
      cta: {
        title: "¿Hay algo que sabes que necesitas trabajar?",
        lead: "Cuéntame brevemente qué está ocurriendo y vemos si el coaching astrológico puede encajar contigo.",
        label: "Hablar con Sarita por WhatsApp",
      },
    },
    it: {
      benefitTitle: "Non solo capire cosa succede. Iniziare a fare qualcosa di diverso.",
      heroCta: "Raccontami cosa vuoi lavorare",
      heroNote: "Online, ovunque tu sia · Primo orientamento su WhatsApp gratuito",
      quick: [
        { tag: "01 · Prima", title: "Mi racconti il tuo processo", text: "Su WhatsApp mi spieghi cosa vuoi lavorare. Il primo orientamento è gratuito e ti consiglio il formato." },
        { tag: "02 · Sessione", title: "La tua carta come bussola", text: "Guardiamo la tua carta natale e i transiti attuali, e definiamo il focus del lavoro." },
        { tag: "03 · Processo", title: "Accompagnamento continuo", text: "Sessione dopo sessione uniamo comprensione astrologica e passi concreti tra un incontro e l'altro." },
      ],
      sticky: {
        eyebrow: "Coaching astrologico",
        title: "Capire lo schema è l'inizio. Cambiarlo è il lavoro.",
        text: "Il coaching usa la tua Carta Natale come strumento dentro un processo di riflessione, decisione e azione.",
      },
      seo: {
        eyebrow: "Astrologia psicologica",
        h2: "Che cos'è il coaching astrologico e come funziona?",
        paragraphs: [
          "Il coaching astrologico online unisce la lettura della tua carta natale e dei transiti attuali a un lavoro di accompagnamento: non solo comprendere cosa ti accade, ma farci qualcosa. È il formato per processi in corso — un cambio di lavoro, una decisione importante, uno schema che vuoi rompere.",
          "A differenza di una lettura singola, il coaching è un processo: sessioni più brevi e frequenti su un tema concreto, con passi tra le sessioni. Può svolgersi in sessione individuale, in seguimento mensile dei transiti o in pacchetti di accompagnamento.",
        ],
        subs: [
          {
            h3: "Coaching astrologico o lettura della carta natale?",
            text: "La carta natale è la foto completa della tua mappa; il coaching è il processo che la mette in movimento. L'ideale è iniziare dalla lettura della carta natale e continuare con il coaching per lavorare ciò che emerge.",
          },
          {
            h3: "È psicoterapia?",
            text: "No. È un accompagnamento basato sull'astrologia psicologica: utile per chiarezza, direzione e autoconoscenza, ma non sostituisce la psicoterapia quando è necessaria.",
          },
        ],
      },
      audience: [
        { title: "Sei nel mezzo di un processo", text: "Una decisione, un cambiamento, un lutto o un blocco che non vuoi attraversare alla cieca." },
        { title: "Hai già fatto la carta natale", text: "Vuoi passare dalla comprensione all'azione con un accompagnamento concreto." },
        { title: "Cerchi un seguimento regolare", text: "Uno spazio mensile o un pacchetto breve, senza impegnarti in una terapia lunga." },
      ],
      location: {
        title: "Coaching astrologico online, ovunque tu sia",
        lead: "Il coaching si svolge online, in videochiamata. Alcune sessioni possono coordinarsi in presenza a Milano secondo disponibilità.",
        showAddress: false,
      },
      cta: {
        title: "C'è qualcosa che sai di dover lavorare?",
        lead: "Raccontami brevemente cosa sta succedendo e vediamo se il coaching astrologico può fare per te.",
        label: "Parla con Sarita su WhatsApp",
      },
    },
    en: {
      benefitTitle: "Not just understanding what happens. Starting to do something different.",
      heroCta: "Tell me what you want to work on",
      heroNote: "Online, wherever you are · Free first orientation on WhatsApp",
      quick: [
        { tag: "01 · Before", title: "You tell me your process", text: "Over WhatsApp you explain what you want to work on. The first orientation is free and I recommend the right format." },
        { tag: "02 · Session", title: "Your chart as a compass", text: "We look at your birth chart and current transits, and define the focus of the work." },
        { tag: "03 · Process", title: "Ongoing guidance", text: "Session by session we combine astrological understanding with concrete steps between meetings." },
      ],
      sticky: {
        eyebrow: "Astrological coaching",
        title: "Understanding the pattern is the beginning. Changing it is the work.",
        text: "Coaching uses your Birth Chart as a tool within a process of reflection, decision, and action.",
      },
      seo: {
        eyebrow: "Psychological astrology",
        h2: "What is astrological coaching and how does it work?",
        paragraphs: [
          "Online astrological coaching combines the reading of your birth chart and current transits with ongoing guidance: not just understanding what is happening to you, but doing something with it. It is the format for processes in motion — a career change, an important decision, a pattern you want to break.",
          "Unlike a one-off reading, coaching is a process: shorter, more frequent sessions focused on one topic, with steps between sessions. It can take the form of individual sessions, monthly transit follow-ups, or guidance packs.",
        ],
        subs: [
          {
            h3: "Astrological coaching or a birth chart reading?",
            text: "The birth chart is the complete photo of your map; coaching is the process that sets it in motion. Ideally you start with a birth chart reading and continue with coaching to work on what appears.",
          },
          {
            h3: "Is it psychotherapy?",
            text: "No. It is guidance based on psychological astrology: useful for clarity, direction, and self-knowledge, but it does not replace psychotherapy when that is needed.",
          },
        ],
      },
      audience: [
        { title: "You are in the middle of a process", text: "A decision, a change, a loss, or a block you do not want to go through blind." },
        { title: "You already had your chart read", text: "You want to move from understanding to action with concrete guidance." },
        { title: "You want regular follow-up", text: "A monthly space or a short pack, without committing to long-term therapy." },
      ],
      location: {
        title: "Online astrological coaching, wherever you are",
        lead: "Coaching happens online by video call. If you are in Barcelona, some sessions can be arranged in person depending on availability.",
        showAddress: true,
      },
      cta: {
        title: "Is there something you know you need to work on?",
        lead: "Tell me briefly what is happening and we will see whether astrological coaching fits you.",
        label: "Talk to Sarita on WhatsApp",
      },
    },
  },
};
