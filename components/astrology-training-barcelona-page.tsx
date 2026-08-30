import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import styles from "@/components/formacion-barcelona.module.css";
import {
  astrologyTrainingBarcelonaContent,
  saritaContactEmail,
} from "@/lib/astrology-training-barcelona-content";
import { getGoogleReviews } from "@/lib/google-reviews";
import { Locale } from "@/lib/locales";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const featureCopy: Record<
  Locale,
  { audienceTitle: string; calendarAside: string; practicalTitle: string; features: Array<{ title: string; text: string }> }
> = {
  es: {
    audienceTitle: "Esta formación es para ti si quieres aprender astrología de verdad, no solo consumir contenido sobre ella.",
    practicalTitle: "Información práctica",
    calendarAside:
      "Un tema principal cada mes. Todo el programa está construido para que cada encuentro prepare el siguiente.",
    features: [
      { title: "Aprende desde la base", text: "Construimos los conceptos paso a paso para que entiendas qué estás leyendo y por qué." },
      { title: "Practica, no solo escuches", text: "Cada encuentro combina explicación, ejercicios y práctica de interpretación." },
      { title: "Grupos reducidos", text: "Podrás preguntar, participar y recibir acompañamiento durante el aprendizaje." },
      { title: "Presencial en Barcelona", text: "Un encuentro de fin de semana al mes para aprender con continuidad, sin convertirlo en una formación intensiva imposible de integrar." },
    ],
  },
  it: {
    audienceTitle: "Questa formazione è per te se vuoi imparare l'astrologia davvero, non solo consumare contenuti.",
    practicalTitle: "Informazioni pratiche",
    calendarAside:
      "Un tema principale ogni mese. Tutto il programma è costruito perché ogni incontro prepari il successivo.",
    features: [
      { title: "Impara dalla base", text: "Costruiamo i concetti passo dopo passo perché tu capisca cosa stai leggendo e perché." },
      { title: "Pratica, non solo ascolto", text: "Ogni incontro unisce spiegazione, esercizi e pratica di interpretazione." },
      { title: "Gruppi ridotti", text: "Potrai chiedere, partecipare e ricevere accompagnamento durante l'apprendimento." },
      { title: "In presenza a Barcellona", text: "Un weekend al mese, per imparare con continuità senza trasformarlo in un corso intensivo impossibile da integrare." },
    ],
  },
  en: {
    audienceTitle: "This training is for you if you want to truly learn astrology, not just consume content about it.",
    practicalTitle: "Practical information",
    calendarAside:
      "One main theme each month. The whole program is built so each meeting prepares the next.",
    features: [
      { title: "Learn from the ground up", text: "We build the concepts step by step so you understand what you are reading and why." },
      { title: "Practice, not just listening", text: "Each meeting combines explanation, exercises, and interpretation practice." },
      { title: "Small groups", text: "You can ask, participate, and receive guidance throughout the learning." },
      { title: "In person in Barcelona", text: "One weekend a month, learning with continuity without turning it into an impossible intensive." },
    ],
  },
};

const reviewsCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    countLabel: string;
    translatedNote: string;
    items: Array<{ text: string; author: string; translated?: boolean }>;
  }
> = {
  es: {
    eyebrow: "Reseñas verificadas de Google",
    title: "Aprender con alguien durante un año exige confianza.",
    countLabel: "reseñas en Google",
    translatedNote: "Traducida del italiano",
    items: [
      {
        text: "Estoy siguiendo el curso de astrología psicológica de Sarita y lo considero una experiencia significativa, no solo por los contenidos ricos y estimulantes, sino sobre todo porque representa un importante camino de autoconocimiento. Una experiencia que ayuda a comprenderse más a fondo y a crecer interiormente.",
        author: "Rosalba C.",
        translated: true,
      },
      {
        text: "Hay un antes y un después de Sarita, ¿qué más puedo decir? El descubrimiento de la astrología ha sido enriquecedor y sorprendente. Muchas gracias por tu paciencia y por tu gran labor.",
        author: "Montse Mas Esquerra",
      },
      {
        text: "Me ha hecho descubrir la astrología psicológica como herramienta de consciencia, ayudándome a comprenderme mejor a mí misma y las dinámicas de la vida a través del fascinante lenguaje de los planetas. Tiene una grandísima competencia y experiencia.",
        author: "Ilaria Veronesi",
        translated: true,
      },
    ],
  },
  it: {
    eyebrow: "Recensioni verificate di Google",
    title: "Imparare con qualcuno per un anno richiede fiducia.",
    countLabel: "recensioni su Google",
    translatedNote: "Tradotta",
    items: [
      {
        text: "Sto seguendo il corso di astrologia psicologica di Sarita e lo considero una esperienza significativa, non solo per i contenuti ricchi e stimolanti, ma soprattutto perché rappresenta un importante percorso di autoconoscenza. Un'esperienza che aiuta a comprendersi più a fondo e a crescere interiormente.",
        author: "Rosalba C.",
      },
      {
        text: "Mi ha fatto scoprire l'astrologia psicologica come strumento di consapevolezza, aiutandomi a comprendere meglio me stessa e le dinamiche della vita attraverso il linguaggio affascinante dei pianeti. Ha una grandissima competenza ed esperienza.",
        author: "Ilaria Veronesi",
      },
      {
        text: "Nonostante avessi già fatto il quadro astrale in altre occasioni, la sua spiegazione mi ha aiutato a comprendere chi sono, con una ricchezza di contributi unica. Un regalo bellissimo. Una grande professionalità e conoscenza della materia.",
        author: "Laura De Chiara",
      },
    ],
  },
  en: {
    eyebrow: "Verified Google reviews",
    title: "Learning with someone for a year requires trust.",
    countLabel: "Google reviews",
    translatedNote: "Translated",
    items: [
      {
        text: "I am following Sarita's psychological astrology course and I consider it a meaningful experience — not only for the rich, stimulating content, but above all because it is an important path of self-knowledge. An experience that helps you understand yourself more deeply and grow inwardly.",
        author: "Rosalba C.",
        translated: true,
      },
      {
        text: "The teachings on astrology were eye opening and brought forth many realizations, and helped to begin processing emotions around certain areas of life — career, relationships, and more.",
        author: "Elizabeth S.",
      },
      {
        text: "She introduced me to psychological astrology as a tool for awareness, helping me understand myself and the dynamics of life through the fascinating language of the planets. She has enormous competence and experience.",
        author: "Ilaria Veronesi",
        translated: true,
      },
    ],
  },
};

const imageAlts: Record<Locale, { hero: string; flatlay: string; hand: string; group: string; venue: string }> = {
  es: {
    hero: "Sarita Shakti enseñando una carta natal a un grupo reducido en Barcelona",
    flatlay: "Carta natal impresa junto a un café y flores secas",
    hand: "Mano dibujando una carta natal en un cuaderno",
    group: "Grupo de estudiantes conversando en círculo",
    venue: "Sala cálida preparada para un encuentro presencial",
  },
  it: {
    hero: "Sarita Shakti insegna un tema natale a un piccolo gruppo a Barcellona",
    flatlay: "Carta natale stampata accanto a un caffè e fiori secchi",
    hand: "Mano che disegna una carta natale su un quaderno",
    group: "Gruppo di studenti in cerchio",
    venue: "Sala calda preparata per un incontro in presenza",
  },
  en: {
    hero: "Sarita Shakti teaching a natal chart to a small group in Barcelona",
    flatlay: "Printed natal chart next to a coffee and dried flowers",
    hand: "Hand drawing a natal chart in a notebook",
    group: "Group of students in a circle",
    venue: "Warm room prepared for an in-person meeting",
  },
};

const featureIcons = [
  <svg key="book" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21z" /><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" /></svg>,
  <svg key="group" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6" /><circle cx="17" cy="9.5" r="2.4" /><path d="M15.8 14.6c2.3.2 4 1.5 4.6 3.9" /></svg>,
  <svg key="pin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21z" /><circle cx="12" cy="10.8" r="2.3" /></svg>,
  <svg key="lens" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /><path d="M11 8v6M8 11h6" /></svg>,
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function buildCourseSchema(locale: Locale) {
  const content = astrologyTrainingBarcelonaContent[locale];

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: content.title,
    description: content.intro,
    inLanguage: locale,
    provider: {
      "@type": "Organization",
      name: "Istituto S.A.R.I.T.A. | Sarita Shakti",
      url: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      startDate: "2027-01-23",
      endDate: "2027-12-11",
      location: {
        "@type": "Place",
        name: "Barcelona",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Barcelona",
          addressCountry: "ES",
        },
      },
      instructor: {
        "@type": "Person",
        name: "Sarita Shakti",
      },
    },
  };
}

export async function AstrologyTrainingBarcelonaPage({ locale }: { locale: Locale }) {
  const content = astrologyTrainingBarcelonaContent[locale];
  const extra = featureCopy[locale];
  const alts = imageAlts[locale];
  const reviews = reviewsCopy[locale];
  const googleSummary = await getGoogleReviews(locale);
  const whatsappHref = buildWhatsAppLink(
    locale === "it"
      ? "Ciao Sarita, vorrei informazioni sulla formazione a Barcellona 2027."
      : locale === "en"
        ? "Hi Sarita, I would like information about the Barcelona 2027 training."
        : "Hola Sarita, quiero información sobre la formación en Barcelona 2027.",
  );

  return (
    <div className={styles.root}>
      <JsonLd data={buildCourseSchema(locale)} />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.eyebrow}>{content.eyebrow}</div>
              <h1 className={styles.serif}>{content.title}</h1>
              <p className={styles.heroCopy}>{content.intro}</p>
              <div className={styles.heroActions}>
                <a className={`${styles.btn} ${styles.btnPrimary}`} href="#contacto">
                  {content.primaryCta}
                </a>
                <a className={`${styles.btn} ${styles.btnSecondary}`} href="#calendario">
                  {content.secondaryCta}
                </a>
              </div>
              <div className={styles.facts}>
                {content.facts.map((fact) => (
                  <div className={styles.fact} key={fact.label}>
                    <small>{fact.label}</small>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.photo}>
              <Image
                src="/images/formacion/hero.jpg"
                alt={alts.hero}
                width={1200}
                height={896}
                priority
                sizes="(max-width: 1100px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="programa">
        <div className={`${styles.wrap} ${styles.introGrid}`}>
          <div className={styles.collage}>
            <div className={styles.visual}>
              <Image src="/images/formacion/collage-flatlay.jpg" alt={alts.flatlay} width={600} height={600} sizes="(max-width: 1100px) 50vw, 22vw" />
            </div>
            <div className={`${styles.visual} ${styles.visualTall}`}>
              <Image src="/images/formacion/collage-hand.jpg" alt={alts.hand} width={600} height={800} sizes="(max-width: 1100px) 50vw, 24vw" />
            </div>
            <div className={styles.visual}>
              <Image src="/images/formacion/collage-group.jpg" alt={alts.group} width={640} height={430} sizes="(max-width: 1100px) 50vw, 22vw" />
            </div>
          </div>

          <div>
            <div className={styles.eyebrow}>{content.positioning.eyebrow}</div>
            <h2 className={`${styles.serif} ${styles.sectionTitle}`}>{content.positioning.title}</h2>
            <p className={styles.sectionCopy}>{content.positioning.text}</p>

            <div className={styles.featureGrid}>
              {extra.features.map((feature, index) => (
                <article className={styles.feature} key={feature.title}>
                  <div className={styles.icon}>{featureIcons[index]}</div>
                  <b>{feature.title}</b>
                  <span>{feature.text}</span>
                </article>
              ))}
            </div>
            <div style={{ marginTop: "26px" }}>
              <a
                className={`${styles.btn} ${styles.btnPrimary}`}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={15} />
                {content.primaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="para-quien" style={{ paddingTop: 0 }}>
        <div className={styles.wrap}>
          <div className={styles.audienceHead}>
            <div className={styles.eyebrow}>{content.audience.eyebrow}</div>
            <h2 className={`${styles.serif} ${styles.sectionTitle}`}>{extra.audienceTitle}</h2>
          </div>
          <div className={styles.audienceGrid}>
            {content.audience.items.map((item, index) => (
              <article className={styles.audienceCard} key={item.title}>
                <div className={styles.audienceArt}>
                  <Image
                    src={`/images/formacion/audience-${index + 1}.jpg`}
                    alt=""
                    width={192}
                    height={192}
                    sizes="96px"
                  />
                </div>
                <div>
                  <h3 className={styles.serif}>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.calendar}`} id="calendario">
        <div className={styles.wrap}>
          <div className={styles.calendarHead}>
            <div>
              <div className={styles.eyebrow}>{content.calendar.eyebrow}</div>
              <h2 className={`${styles.serif} ${styles.sectionTitle}`}>{content.calendar.title}</h2>
            </div>
            <p>{extra.calendarAside}</p>
          </div>
          <div className={styles.calendarGrid}>
            {content.calendar.weekends.map((weekend) => (
              <article className={styles.session} key={weekend.number}>
                <div className={styles.sessionTop}>
                  <span className={styles.sessionNo}>{weekend.number}</span>
                  <span className={styles.date}>{weekend.date}</span>
                </div>
                <h3 className={styles.serif}>{weekend.title}</h3>
                <p>{weekend.text}</p>
                <span className={styles.dateBanner}>{weekend.date} 2027</span>
              </article>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={15} />
              {content.primaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="resenas" style={{ paddingBottom: 0 }}>
        <div className={styles.wrap}>
          <div className={styles.reviewsHead}>
            <div>
              <div className={styles.eyebrow}>{reviews.eyebrow}</div>
              <h2 className={`${styles.serif} ${styles.sectionTitle}`}>{reviews.title}</h2>
            </div>
            <div className={styles.scoreChip}>
              <b>
                {googleSummary.rating.toLocaleString(locale === "en" ? "en-US" : "es-ES", {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </b>
              <span className={styles.scoreStars} aria-hidden="true">
                ★★★★★
              </span>
              <small>
                {googleSummary.reviewCount} {reviews.countLabel}
              </small>
            </div>
          </div>
          <div className={styles.reviewCards}>
            {reviews.items.map((review) => (
              <article className={styles.reviewCard} key={review.author}>
                <span className={styles.scoreStars} aria-hidden="true">
                  ★★★★★
                </span>
                <p>{review.text}</p>
                <span className={styles.reviewAuthor}>{review.author}</span>
                {review.translated ? (
                  <span className={styles.reviewNote}>{reviews.translatedNote}</span>
                ) : null}
              </article>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={15} />
              {content.primaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="info">
        <div className={`${styles.wrap} ${styles.practicalGrid}`}>
          <div className={styles.venue}>
            <Image
              src="/images/formacion/espacio.jpg"
              alt={alts.venue}
              width={1200}
              height={896}
              sizes="(max-width: 1100px) 100vw, 38vw"
            />
            <div className={styles.venueCard}>{content.practice.title}</div>
          </div>

          <article className={styles.infoCard}>
            <div className={styles.eyebrow}>{content.practice.eyebrow}</div>
            <h2 className={styles.serif}>{extra.practicalTitle}</h2>
            <ul className={styles.checklist}>
              {content.practice.items.map((item) => (
                <li key={item}>
                  <span className={styles.check}>
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.infoCard} id="contacto">
            <div className={styles.eyebrow}>{content.contact.eyebrow}</div>
            <h3 className={styles.serif}>{content.contact.title}</h3>
            <p className={styles.infoText}>{content.contact.text}</p>
            <div className={styles.contactLines}>
              <a href={`mailto:${saritaContactEmail}`}>{saritaContactEmail}</a>
              <a href="tel:+34665259859">+34 665 25 98 59</a>
            </div>
            <a className={styles.whatsapp} href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} />
              {content.contact.webLabel}
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
