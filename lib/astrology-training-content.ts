import { Locale } from "./locales";

export type AstrologyTrainingWeekend = {
  number: string;
  date: string;
  title: string;
  text: string;
};

export type AstrologyTrainingContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  facts: Array<{
    label: string;
    value: string;
  }>;
  positioning: {
    eyebrow: string;
    title: string;
    text: string;
  };
  audience: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  calendar: {
    eyebrow: string;
    title: string;
    text: string;
    weekends: AstrologyTrainingWeekend[];
  };
  practice: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    emailLabel: string;
    phoneLabel: string;
    webLabel: string;
  };
};

export const astrologyTrainingContent: Record<Locale, AstrologyTrainingContent> = {
  it: {
    eyebrow: "Formazione professionale | Milano 2027",
    title: "Scuola di Astrologia Psicologica a Milano",
    intro:
      "Un percorso di 11 weekend in presenza per imparare a leggere il tema natale come mappa dell'anima, integrando astrologia psicologica, psicologia del profondo e pratica di gruppo.",
    primaryCta: "Chiedi informazioni",
    secondaryCta: "Vedi calendario",
    facts: [
      { label: "Durata", value: "11 weekend, gennaio-dicembre 2027" },
      { label: "Formato", value: "Sempre in presenza" },
      { label: "Sede", value: "Alma Matters, Via Stradella 5, Milano" },
      { label: "Attestato", value: "Rilascio attestato finale" },
    ],
    positioning: {
      eyebrow: "Il percorso",
      title: "L'astrologia psicologica come via di trasformazione interiore.",
      text:
        "Questa formazione non usa l'astrologia per prevedere il futuro, ma per comprendere identità, bisogni profondi, ferite, risorse e direzione evolutiva. Il tema natale diventa una mappa concreta per leggere sé stessi e accompagnare altre persone con maggiore ascolto.",
    },
    audience: {
      eyebrow: "A chi si rivolge",
      title: "Per chi vuole studiare, integrare o accompagnare.",
      items: [
        {
          title: "Curiosi e appassionati",
          text: "Per chi desidera approfondire l'astrologia come sistema di autoconoscenza e crescita personale.",
        },
        {
          title: "Operatori olistici",
          text: "Per integrare l'astrologia psicologica nel proprio lavoro di accompagnamento.",
        },
        {
          title: "Psicologi e operatori della relazione",
          text: "Per accedere ai contenuti simbolici e inconsci del consultante senza etichette riduttive.",
        },
      ],
    },
    calendar: {
      eyebrow: "Calendario 2027",
      title: "Undici weekend, da gennaio a dicembre.",
      text:
        "Il percorso avanza dai fondamenti del tema natale ai pianeti personali, sociali e transpersonali, fino ai punti evolutivi e alla pratica finale.",
      weekends: [
        { number: "01", date: "16-17 Gennaio", title: "Il Tema Natale", text: "Fondamenti, simbologia, pianeti, segni, case e reggenze." },
        { number: "02", date: "20-21 Febbraio", title: "Sole e Luna", text: "Identità cosciente, mondo emotivo e bisogni profondi." },
        { number: "03", date: "13-14 Marzo", title: "Aspetti Planetari e Mercurio", text: "Relazioni tra funzioni psichiche, mente, comunicazione e linguaggio." },
        { number: "04", date: "3-4 Aprile", title: "Venere e Marte", text: "Amore, autostima, valori, desiderio e affermazione di sé." },
        { number: "05", date: "8-9 Maggio", title: "Giove e Saturno", text: "Espansione, struttura, limite, maturazione e cicli evolutivi." },
        { number: "06", date: "12-13 Giugno", title: "Urano e Nettuno", text: "Rivoluzione, libertà, alta sensibilità e trascendenza." },
        { number: "07", date: "3-4 Luglio", title: "Plutone e Lilith", text: "Trasformazione profonda, potere, femminile selvaggio e ombra." },
        { number: "08", date: "11-12 Settembre", title: "Ascendente e Chirone", text: "Rotta evolutiva, ferita, dono e lettura Casa 4-8-12." },
        { number: "09", date: "9-10 Ottobre", title: "I Nodi Lunari", text: "Nodo Sud, Nodo Nord e asse evolutivo per segno e casa." },
        { number: "10", date: "13-14 Novembre", title: "Classe Pratica", text: "Lettura integrata di temi natali e applicazione del metodo S.A.R.I.T.A." },
        { number: "11", date: "4-5 Dicembre", title: "Classe Pratica e Test Finale", text: "Letture, valutazione finale e consegna degli attestati." },
      ],
    },
    practice: {
      eyebrow: "Metodo S.A.R.I.T.A.",
      title: "Sistema di Astrologia Relazionale Integrata e Trasformazione Archetipica.",
      text:
        "Ogni weekend alterna teoria e pratica: sabato mattina parte teorica, sabato pomeriggio e domenica mattina pratica di gruppo guidata.",
      items: [
        "Sabato 9:00-13:00 teoria.",
        "Sabato 14:30-17:30 pratica di gruppo.",
        "Domenica 9:00-12:30 pratica di gruppo.",
        "Docente: Sarita Shakti, con oltre 15 anni di esperienza nel settore.",
      ],
    },
    contact: {
      eyebrow: "Iscrizioni",
      title: "Informazioni e prenotazioni",
      text:
        "La formazione si svolge presso Alma Matters Milano. Per dettagli aggiornati, iscrizioni e disponibilità, contatta direttamente la sede.",
      emailLabel: "info@almamattersmilano.it",
      phoneLabel: "349.4487760",
      webLabel: "www.almamattersmilano.com",
    },
  },
  es: {
    eyebrow: "Formación profesional | Milán 2027",
    title: "Escuela de Astrología Psicológica en Milán",
    intro:
      "Un recorrido de 11 fines de semana presenciales para aprender a leer la carta natal como mapa del alma, integrando astrología psicológica, psicología profunda y práctica grupal.",
    primaryCta: "Pedir información",
    secondaryCta: "Ver calendario",
    facts: [
      { label: "Duración", value: "11 fines de semana, enero-diciembre 2027" },
      { label: "Formato", value: "Siempre presencial" },
      { label: "Sede", value: "Alma Matters, Via Stradella 5, Milán" },
      { label: "Certificado", value: "Certificado final de formación" },
    ],
    positioning: {
      eyebrow: "El recorrido",
      title: "La astrología psicológica como vía de transformación interior.",
      text:
        "Esta formación no usa la astrología para predecir el futuro, sino para comprender identidad, necesidades profundas, heridas, recursos y dirección evolutiva. La carta natal se convierte en un mapa concreto para leerse a una misma y acompañar a otras personas con mayor escucha.",
    },
    audience: {
      eyebrow: "A quién va dirigido",
      title: "Para estudiar, integrar o acompañar.",
      items: [
        {
          title: "Personas curiosas y apasionadas",
          text: "Para profundizar en la astrología como sistema de autoconocimiento y crecimiento personal.",
        },
        {
          title: "Operadores holísticos",
          text: "Para integrar la astrología psicológica en un trabajo de acompañamiento.",
        },
        {
          title: "Psicólogos y profesionales de la relación",
          text: "Para acceder a contenidos simbólicos e inconscientes sin reducir a la persona a una etiqueta.",
        },
      ],
    },
    calendar: {
      eyebrow: "Calendario 2027",
      title: "Once fines de semana, de enero a diciembre.",
      text:
        "El recorrido avanza desde los fundamentos de la carta natal hasta planetas personales, sociales y transpersonales, puntos evolutivos y práctica final.",
      weekends: [
        { number: "01", date: "16-17 enero", title: "La Carta Natal", text: "Fundamentos, simbología, planetas, signos, casas y regencias." },
        { number: "02", date: "20-21 febrero", title: "Sol y Luna", text: "Identidad consciente, mundo emocional y necesidades profundas." },
        { number: "03", date: "13-14 marzo", title: "Aspectos Planetarios y Mercurio", text: "Relaciones entre funciones psíquicas, mente, comunicación y lenguaje." },
        { number: "04", date: "3-4 abril", title: "Venus y Marte", text: "Amor, autoestima, valores, deseo y afirmación personal." },
        { number: "05", date: "8-9 mayo", title: "Júpiter y Saturno", text: "Expansión, estructura, límite, maduración y ciclos evolutivos." },
        { number: "06", date: "12-13 junio", title: "Urano y Neptuno", text: "Revolución, libertad, alta sensibilidad y trascendencia." },
        { number: "07", date: "3-4 julio", title: "Plutón y Lilith", text: "Transformación profunda, poder, femenino salvaje y sombra." },
        { number: "08", date: "11-12 septiembre", title: "Ascendente y Quirón", text: "Ruta evolutiva, herida, don y lectura Casa 4-8-12." },
        { number: "09", date: "9-10 octubre", title: "Nodos Lunares", text: "Nodo Sur, Nodo Norte y eje evolutivo por signo y casa." },
        { number: "10", date: "13-14 noviembre", title: "Clase Práctica", text: "Lectura integrada de cartas natales y aplicación del método S.A.R.I.T.A." },
        { number: "11", date: "4-5 diciembre", title: "Clase Práctica y Evaluación Final", text: "Lecturas, evaluación final y entrega de certificados." },
      ],
    },
    practice: {
      eyebrow: "Método S.A.R.I.T.A.",
      title: "Sistema de Astrología Relacional Integrada y Transformación Arquetípica.",
      text:
        "Cada fin de semana alterna teoría y práctica: sábado por la mañana teoría, sábado por la tarde y domingo por la mañana práctica grupal guiada.",
      items: [
        "Sábado 9:00-13:00 teoría.",
        "Sábado 14:30-17:30 práctica grupal.",
        "Domingo 9:00-12:30 práctica grupal.",
        "Docente: Sarita Shakti, con más de 15 años de experiencia en el sector.",
      ],
    },
    contact: {
      eyebrow: "Inscripciones",
      title: "Información y reservas",
      text:
        "La formación se realiza en Alma Matters Milano. Para detalles actualizados, inscripción y disponibilidad, contacta directamente con la sede.",
      emailLabel: "info@almamattersmilano.it",
      phoneLabel: "349.4487760",
      webLabel: "www.almamattersmilano.com",
    },
  },
  en: {
    eyebrow: "Professional training | Milan 2027",
    title: "School of Psychological Astrology in Milan",
    intro:
      "An 11-weekend in-person training to learn how to read the natal chart as a map of the soul, integrating psychological astrology, depth psychology, and group practice.",
    primaryCta: "Ask for details",
    secondaryCta: "See calendar",
    facts: [
      { label: "Duration", value: "11 weekends, January-December 2027" },
      { label: "Format", value: "Always in person" },
      { label: "Location", value: "Alma Matters, Via Stradella 5, Milan" },
      { label: "Certificate", value: "Final certificate of completion" },
    ],
    positioning: {
      eyebrow: "The training",
      title: "Psychological astrology as a path of inner transformation.",
      text:
        "This training does not use astrology to predict the future. It uses the natal chart to understand identity, deep needs, wounds, resources, and evolutionary direction. The chart becomes a practical map for self-knowledge and for accompanying others with more listening.",
    },
    audience: {
      eyebrow: "Who it is for",
      title: "For study, integration, or accompaniment.",
      items: [
        {
          title: "Curious students and astrology lovers",
          text: "For those who want to deepen astrology as a system of self-knowledge and personal growth.",
        },
        {
          title: "Holistic practitioners",
          text: "For integrating psychological astrology into accompaniment and wellbeing work.",
        },
        {
          title: "Psychologists and relational professionals",
          text: "For accessing symbolic and unconscious material without reducing the person to a label.",
        },
      ],
    },
    calendar: {
      eyebrow: "2027 calendar",
      title: "Eleven weekends, January to December.",
      text:
        "The training progresses from natal chart foundations to personal, social, and transpersonal planets, evolutionary points, and final practice.",
      weekends: [
        { number: "01", date: "January 16-17", title: "The Natal Chart", text: "Foundations, symbolism, planets, signs, houses, and rulerships." },
        { number: "02", date: "February 20-21", title: "Sun and Moon", text: "Conscious identity, emotional world, and deep needs." },
        { number: "03", date: "March 13-14", title: "Planetary Aspects and Mercury", text: "Relationships between psychic functions, mind, communication, and language." },
        { number: "04", date: "April 3-4", title: "Venus and Mars", text: "Love, self-worth, values, desire, and self-assertion." },
        { number: "05", date: "May 8-9", title: "Jupiter and Saturn", text: "Expansion, structure, limits, maturation, and evolutionary cycles." },
        { number: "06", date: "June 12-13", title: "Uranus and Neptune", text: "Revolution, freedom, high sensitivity, and transcendence." },
        { number: "07", date: "July 3-4", title: "Pluto and Lilith", text: "Deep transformation, power, wild feminine, and shadow." },
        { number: "08", date: "September 11-12", title: "Ascendant and Chiron", text: "Evolutionary direction, wound, gift, and House 4-8-12 reading." },
        { number: "09", date: "October 9-10", title: "Lunar Nodes", text: "South Node, North Node, and evolutionary axis by sign and house." },
        { number: "10", date: "November 13-14", title: "Practice Class", text: "Integrated natal chart readings and application of the S.A.R.I.T.A. method." },
        { number: "11", date: "December 4-5", title: "Practice Class and Final Assessment", text: "Readings, final assessment, and certificate delivery." },
      ],
    },
    practice: {
      eyebrow: "S.A.R.I.T.A. method",
      title: "Integrated Relational Astrology and Archetypal Transformation System.",
      text:
        "Each weekend alternates theory and practice: Saturday morning theory, Saturday afternoon and Sunday morning guided group practice.",
      items: [
        "Saturday 9:00-13:00 theory.",
        "Saturday 14:30-17:30 group practice.",
        "Sunday 9:00-12:30 group practice.",
        "Teacher: Sarita Shakti, with more than 15 years of experience in the field.",
      ],
    },
    contact: {
      eyebrow: "Enrollment",
      title: "Information and booking",
      text:
        "The training takes place at Alma Matters Milano. For updated details, enrollment, and availability, contact the venue directly.",
      emailLabel: "info@almamattersmilano.it",
      phoneLabel: "349.4487760",
      webLabel: "www.almamattersmilano.com",
    },
  },
};
