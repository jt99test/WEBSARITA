import { Locale } from "./locales";
import { AstrologyTrainingContent } from "./astrology-training-content";

export const saritaContactEmail = "saritashakti@gmail.com";
export const saritaContactPhone = "+34 665 25 98 59";
export const saritaWhatsappUrl = "https://wa.me/34665259859";

export const astrologyTrainingBarcelonaContent: Record<Locale, AstrologyTrainingContent> = {
  it: {
    eyebrow: "Formazione | Barcellona 2027",
    title: "Formazione in Astrologia Psicologica a Barcellona — 1° Anno",
    intro:
      "Impara a interpretare una Carta Natale dalla base e finisci l'anno capendo come unire segni, pianeti, case e aspetti in una lettura completa. 11 incontri in presenza di fine settimana a Barcellona · Da gennaio a dicembre 2027 · Gruppi ridotti.",
    primaryCta: "Voglio informazioni",
    secondaryCta: "Vedi le date 2027",
    facts: [
      { label: "Durata", value: "11 incontri, gennaio-dicembre 2027" },
      { label: "Formato", value: "In presenza" },
      { label: "Sede", value: "Barcellona" },
      { label: "Livello", value: "Primo anno" },
    ],
    positioning: {
      eyebrow: "Il percorso",
      title: "Da concetti sparsi a interpretare una Carta Natale completa.",
      text:
        "Non serve memorizzare centinaia di significati isolati. Durante il primo anno imparerai progressivamente cosa rappresenta ogni elemento della carta e, soprattutto, come metterli in relazione per costruire un'interpretazione coerente.",
    },
    audience: {
      eyebrow: "A chi si rivolge",
      title: "Per chi vuole studiare, integrare o accompagnare.",
      items: [
        {
          title: "Leggi già di astrologia ma fai fatica a unire i pezzi",
          text: "Conosci concetti sparsi e vuoi imparare a integrarli in una lettura coerente.",
        },
        {
          title: "Vuoi imparare a interpretare la tua Carta Natale",
          text: "Andare oltre una lettura singola e capire la tua mappa da solo.",
        },
        {
          title: "Vuoi usare l'astrologia come strumento di accompagnamento",
          text: "Integrarla in un lavoro professionale di accompagnamento di altre persone.",
        },
        {
          title: "Cerchi una formazione progressiva e in presenza",
          text: "Imparare con continuità, in gruppo ridotto e con pratica reale, non solo teoria.",
        },
      ],
    },
    calendar: {
      eyebrow: "Calendario 2027",
      title: "Undici incontri, da gennaio a dicembre.",
      text:
        "Il percorso parte dall'introduzione all'astrologia psicologica e dalla costruzione del tema natale, attraversa segni, pianeti, case e aspetti, e si chiude con il laboratorio di interpretazione.",
      weekends: [
        { number: "01", date: "23-24 Gennaio", title: "Introduzione all'Astrologia Psicologica e costruzione del Tema Natale", text: "Origine e proposito dell'astrologia psicologica. Elementi per costruire e interpretare il tema natale." },
        { number: "02", date: "13-14 Febbraio", title: "Segni Zodiacali, elementi, modalità e polarità", text: "Comprendere l'energia dei segni, gli elementi, le modalità e le polarità." },
        { number: "03", date: "20-21 Marzo", title: "Sole, Luna e Mercurio", text: "L'essenza, le emozioni e la mente: tre pilastri dell'identità." },
        { number: "04", date: "10-11 Aprile", title: "Venere e Marte", text: "Affetti, valori, desiderio e azione: il campo relazionale e creativo." },
        { number: "05", date: "15-16 Maggio", title: "Giove e Saturno", text: "Espansione e struttura: crescita, limiti e saggezza." },
        { number: "06", date: "19-20 Giugno", title: "Urano, Nettuno e Plutone", text: "Le forze generazionali e spirituali che trasformano la nostra coscienza." },
        { number: "07", date: "10-11 Luglio", title: "Le Dodici Case", text: "Gli scenari della vita in cui l'energia planetaria si esprime." },
        { number: "08", date: "18-19 Settembre", title: "Gli Aspetti Planetari", text: "Gli angoli che mostrano come si relazionano le energie nel tema natale." },
        { number: "09", date: "16-17 Ottobre", title: "Ascendente, Discendente, Medio Cielo e Fondo Cielo", text: "I quattro punti cardinali che orientano il nostro cammino." },
        { number: "10", date: "20-21 Novembre", title: "Chirone, Lilith e Nodi Lunari", text: "Ferite e doni dell'anima. L'asse evolutivo e karmico." },
        { number: "11", date: "10-11 Dicembre", title: "Laboratorio di interpretazione del Tema Natale", text: "Pratica guidata per integrare tutti gli elementi e sviluppare il proprio sguardo astrologico." },
      ],
    },
    practice: {
      eyebrow: "Come si svolge",
      title: "Un incontro al mese, in presenza a Barcellona.",
      text:
        "Ogni incontro unisce teoria e pratica in gruppo, per integrare i simboli del cielo nell'esperienza personale.",
      items: [
        "Incontri di fine settimana, una volta al mese.",
        "Formato in presenza a Barcellona.",
        "Gruppi contenuti e pratica accompagnata.",
        "Orari, sede esatta e prezzo vengono comunicati al momento dell'iscrizione.",
        "Docente: Sarita Shakti, con oltre 15 anni di esperienza nel settore.",
      ],
    },
    contact: {
      eyebrow: "Iscrizioni",
      title: "Vuoi sapere se questa formazione fa per te?",
      text:
        "Raccontami che esperienza hai con l'astrologia e cosa vorresti imparare. Ti invierò informazioni su programma, funzionamento, disponibilità e prenotazione.",
      emailLabel: saritaContactEmail,
      phoneLabel: saritaContactPhone,
      webLabel: "Scrivi a Sarita su WhatsApp",
      webUrl: saritaWhatsappUrl,
    },
  },
  es: {
    eyebrow: "Formación | Barcelona 2027",
    title: "Formación en Astrología Psicológica en Barcelona — 1º Año",
    intro:
      "Aprende a interpretar una Carta Natal desde la base y termina el año entendiendo cómo unir signos, planetas, casas y aspectos en una lectura completa. 11 encuentros presenciales de fin de semana en Barcelona · Enero a diciembre de 2027 · Grupos reducidos.",
    primaryCta: "Quiero información",
    secondaryCta: "Ver fechas 2027",
    facts: [
      { label: "Duración", value: "11 encuentros, enero-diciembre 2027" },
      { label: "Formato", value: "Presencial" },
      { label: "Sede", value: "Barcelona" },
      { label: "Nivel", value: "Primer año" },
    ],
    positioning: {
      eyebrow: "El recorrido",
      title: "De conceptos sueltos a interpretar una Carta Natal completa.",
      text:
        "No necesitas memorizar cientos de significados aislados. Durante el primer año aprenderás progresivamente qué representa cada elemento de la carta y, sobre todo, cómo relacionarlos entre sí para construir una interpretación coherente.",
    },
    audience: {
      eyebrow: "A quién va dirigido",
      title: "Para estudiar, integrar o acompañar.",
      items: [
        {
          title: "Ya lees sobre astrología pero te cuesta unir las piezas",
          text: "Sabes conceptos sueltos y quieres aprender a integrarlos en una lectura coherente.",
        },
        {
          title: "Quieres aprender a interpretar tu propia Carta Natal",
          text: "Ir más allá de una lectura puntual y entender tu mapa por ti mismo.",
        },
        {
          title: "Quieres usar la astrología como herramienta de acompañamiento",
          text: "Integrarla en un trabajo profesional de acompañamiento a otras personas.",
        },
        {
          title: "Buscas una formación progresiva y presencial",
          text: "Aprender con continuidad, en grupo reducido y con práctica real, no solo teoría.",
        },
      ],
    },
    calendar: {
      eyebrow: "Calendario 2027",
      title: "Once encuentros, de enero a diciembre.",
      text:
        "El recorrido parte de la introducción a la astrología psicológica y la construcción de la Carta Natal, atraviesa signos, planetas, casas y aspectos, y se cierra con el laboratorio de interpretación.",
      weekends: [
        { number: "01", date: "23 y 24 de enero", title: "Introducción a la Astrología Psicológica y construcción de la Carta Natal", text: "Origen y propósito de la astrología psicológica. Elementos para construir e interpretar la Carta Natal." },
        { number: "02", date: "13 y 14 de febrero", title: "Signos Zodiacales, elementos, modalidades y polaridades", text: "Comprender la energía de los signos, los elementos, las modalidades y las polaridades." },
        { number: "03", date: "20 y 21 de marzo", title: "Sol, Luna y Mercurio", text: "La esencia, las emociones y la mente: tres pilares de la identidad." },
        { number: "04", date: "10 y 11 de abril", title: "Venus y Marte", text: "Afectos, valores, deseo y acción: el campo relacional y creativo." },
        { number: "05", date: "15 y 16 de mayo", title: "Júpiter y Saturno", text: "Expansión y estructura: crecimiento, límites y sabiduría." },
        { number: "06", date: "19 y 20 de junio", title: "Urano, Neptuno y Plutón", text: "Las fuerzas generacionales y espirituales que transforman nuestra conciencia." },
        { number: "07", date: "10 y 11 de julio", title: "Las Doce Casas", text: "Los escenarios de la vida donde la energía planetaria se expresa." },
        { number: "08", date: "18 y 19 de septiembre", title: "Los Aspectos Planetarios", text: "Los ángulos que muestran cómo se relacionan las energías en la Carta Natal." },
        { number: "09", date: "16 y 17 de octubre", title: "Ascendente, Descendente, Medio Cielo y Fondo de Cielo", text: "Los cuatro puntos cardinales que orientan nuestro camino." },
        { number: "10", date: "20 y 21 de noviembre", title: "Quirón, Lilith y Nodos Lunares", text: "Heridas y dones del alma. El eje evolutivo y kármico." },
        { number: "11", date: "10 y 11 de diciembre", title: "Laboratorio de interpretación de la Carta Natal", text: "Práctica guiada para integrar todos los elementos y desarrollar tu mirada astrológica." },
      ],
    },
    practice: {
      eyebrow: "Cómo se desarrolla",
      title: "Un encuentro al mes, presencial en Barcelona.",
      text:
        "Cada encuentro une teoría y práctica en grupo, para integrar los símbolos del cielo en la experiencia personal.",
      items: [
        "Encuentros de fin de semana, una vez al mes.",
        "Formato presencial en Barcelona.",
        "Grupos reducidos y práctica acompañada.",
        "Cada encuentro incluye teoría, ejercicios y laboratorio de interpretación.",
        "Horarios, sede exacta y precio se comunican al inscribirse.",
        "Docente: Sarita Shakti, con más de 15 años de experiencia en el sector.",
      ],
    },
    contact: {
      eyebrow: "Inscripciones",
      title: "¿Quieres saber si esta formación encaja contigo?",
      text:
        "Cuéntame qué experiencia tienes con la astrología y qué te gustaría aprender. Te enviaré información sobre programa, funcionamiento, disponibilidad y reserva.",
      emailLabel: saritaContactEmail,
      phoneLabel: saritaContactPhone,
      webLabel: "Escribe a Sarita por WhatsApp",
      webUrl: saritaWhatsappUrl,
    },
  },
  en: {
    eyebrow: "Training | Barcelona 2027",
    title: "Psychological Astrology Training in Barcelona — Year 1",
    intro:
      "Learn to interpret a birth chart from the ground up and end the year understanding how to bring signs, planets, houses, and aspects together into a complete reading. 11 in-person weekend meetings in Barcelona · January to December 2027 · Small groups.",
    primaryCta: "I want information",
    secondaryCta: "See the 2027 dates",
    facts: [
      { label: "Duration", value: "11 meetings, January-December 2027" },
      { label: "Format", value: "In person" },
      { label: "Location", value: "Barcelona" },
      { label: "Level", value: "First year" },
    ],
    positioning: {
      eyebrow: "The training",
      title: "From scattered concepts to interpreting a complete birth chart.",
      text:
        "You don't need to memorize hundreds of isolated meanings. Over the first year you will progressively learn what each element of the chart represents and, above all, how to relate them to build a coherent interpretation.",
    },
    audience: {
      eyebrow: "Who it is for",
      title: "For study, integration, or accompaniment.",
      items: [
        {
          title: "You already read about astrology but struggle to connect the pieces",
          text: "You know scattered concepts and want to learn to integrate them into a coherent reading.",
        },
        {
          title: "You want to learn to interpret your own birth chart",
          text: "Going beyond a one-off reading and understanding your map yourself.",
        },
        {
          title: "You want to use astrology as a guidance tool",
          text: "Integrating it into professional guidance work with other people.",
        },
        {
          title: "You want a progressive, in-person training",
          text: "Learning with continuity, in a small group, with real practice — not just theory.",
        },
      ],
    },
    calendar: {
      eyebrow: "2027 calendar",
      title: "Eleven meetings, January to December.",
      text:
        "The training starts with the introduction to psychological astrology and building the natal chart, moves through signs, planets, houses, and aspects, and closes with the interpretation lab.",
      weekends: [
        { number: "01", date: "January 23-24", title: "Introduction to Psychological Astrology and Building the Natal Chart", text: "Origin and purpose of psychological astrology. Elements for building and interpreting the natal chart." },
        { number: "02", date: "February 13-14", title: "Zodiac Signs, Elements, Modalities, and Polarities", text: "Understanding the energy of the signs, the elements, the modalities, and the polarities." },
        { number: "03", date: "March 20-21", title: "Sun, Moon, and Mercury", text: "Essence, emotions, and mind: three pillars of identity." },
        { number: "04", date: "April 10-11", title: "Venus and Mars", text: "Affection, values, desire, and action: the relational and creative field." },
        { number: "05", date: "May 15-16", title: "Jupiter and Saturn", text: "Expansion and structure: growth, limits, and wisdom." },
        { number: "06", date: "June 19-20", title: "Uranus, Neptune, and Pluto", text: "The generational and spiritual forces that transform our consciousness." },
        { number: "07", date: "July 10-11", title: "The Twelve Houses", text: "The life scenarios where planetary energy expresses itself." },
        { number: "08", date: "September 18-19", title: "Planetary Aspects", text: "The angles that show how energies relate within the natal chart." },
        { number: "09", date: "October 16-17", title: "Ascendant, Descendant, Midheaven, and Imum Coeli", text: "The four cardinal points that orient our path." },
        { number: "10", date: "November 20-21", title: "Chiron, Lilith, and the Lunar Nodes", text: "Wounds and gifts of the soul. The evolutionary and karmic axis." },
        { number: "11", date: "December 10-11", title: "Natal Chart Interpretation Lab", text: "Guided practice for integrating all the elements and developing your own astrological eye." },
      ],
    },
    practice: {
      eyebrow: "How it works",
      title: "One meeting per month, in person in Barcelona.",
      text:
        "Each meeting combines theory and group practice, integrating the symbols of the sky into personal experience.",
      items: [
        "Weekend meetings, once a month.",
        "In-person format in Barcelona.",
        "Small groups and guided practice.",
        "Times, exact venue, and price are shared when you enroll.",
        "Teacher: Sarita Shakti, with more than 15 years of experience in the field.",
      ],
    },
    contact: {
      eyebrow: "Enrollment",
      title: "Want to know whether this training fits you?",
      text:
        "Tell me what experience you have with astrology and what you would like to learn. I will send you information about the program, how it works, availability, and booking.",
      emailLabel: saritaContactEmail,
      phoneLabel: saritaContactPhone,
      webLabel: "Message Sarita on WhatsApp",
      webUrl: saritaWhatsappUrl,
    },
  },
};
