import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import styles from "@/components/formacion-barcelona.module.css";
import { astrologyTrainingContent } from "@/lib/astrology-training-content";
import { getGoogleReviews } from "@/lib/google-reviews";
import { Locale } from "@/lib/locales";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const featureCopy: Record<
  Locale,
  {
    audienceTitle: string;
    calendarAside: string;
    practicalTitle: string;
    venueEyebrow: string;
    venueTitle: string;
    venueText: string;
    venueCta: string;
    features: Array<{ title: string; text: string }>;
  }
> = {
  it: {
    audienceTitle: "Questa formazione è per te se vuoi imparare l'astrologia davvero, non solo consumare contenuti.",
    calendarAside: "Un tema principale ogni mese. Tutto il programma è costruito perché ogni incontro prepari il successivo.",
    practicalTitle: "Informazioni pratiche",
    venueEyebrow: "La sede · Alma Matters Milano",
    venueTitle: "Si studia da Alma Matters, centro olistico vicino a Milano Centrale.",
    venueText:
      "La formazione si svolge in presenza presso Alma Matters, in Via Stradella 5 a Milano: uno spazio dedicato a discipline olistiche dove Sarita guida la scuola di astrologia psicologica.",
    venueCta: "Vedi il corso su Alma Matters",
    features: [
      { title: "Impara dalla base", text: "Costruiamo i concetti passo dopo passo perché tu capisca cosa stai leggendo e perché." },
      { title: "Pratica, non solo ascolto", text: "Ogni incontro unisce spiegazione, esercizi e pratica di interpretazione." },
      { title: "Gruppi ridotti", text: "Potrai chiedere, partecipare e ricevere accompagnamento durante l'apprendimento." },
      { title: "In presenza a Milano", text: "Un weekend al mese da Alma Matters, per imparare con continuità senza trasformarlo in un corso intensivo impossibile da integrare." },
    ],
  },
  es: {
    audienceTitle: "Esta formación es para ti si quieres aprender astrología de verdad, no solo consumir contenido sobre ella.",
    calendarAside: "Un tema principal cada mes. Todo el programa está construido para que cada encuentro prepare el siguiente.",
    practicalTitle: "Información práctica",
    venueEyebrow: "La sede · Alma Matters Milano",
    venueTitle: "Se estudia en Alma Matters, centro holístico junto a Milano Centrale.",
    venueText:
      "La formación se imparte presencialmente en Alma Matters, en Via Stradella 5, Milán: un espacio dedicado a disciplinas holísticas donde Sarita dirige la escuela de astrología psicológica.",
    venueCta: "Ver el curso en Alma Matters",
    features: [
      { title: "Aprende desde la base", text: "Construimos los conceptos paso a paso para que entiendas qué estás leyendo y por qué." },
      { title: "Practica, no solo escuches", text: "Cada encuentro combina explicación, ejercicios y práctica de interpretación." },
      { title: "Grupos reducidos", text: "Podrás preguntar, participar y recibir acompañamiento durante el aprendizaje." },
      { title: "Presencial en Milán", text: "Un fin de semana al mes en Alma Matters, para aprender con continuidad sin convertirlo en una formación intensiva imposible de integrar." },
    ],
  },
  en: {
    audienceTitle: "This training is for you if you want to truly learn astrology, not just consume content about it.",
    calendarAside: "One main theme each month. The whole program is built so each meeting prepares the next.",
    practicalTitle: "Practical information",
    venueEyebrow: "The venue · Alma Matters Milano",
    venueTitle: "Classes are held at Alma Matters, a holistic center near Milano Centrale.",
    venueText:
      "The training takes place in person at Alma Matters, Via Stradella 5, Milan: a space dedicated to holistic disciplines where Sarita leads the psychological astrology school.",
    venueCta: "See the course on Alma Matters",
    features: [
      { title: "Learn from the ground up", text: "We build the concepts step by step so you understand what you are reading and why." },
      { title: "Practice, not just listening", text: "Each meeting combines explanation, exercises, and interpretation practice." },
      { title: "Small groups", text: "You can ask, participate, and receive guidance throughout the learning." },
      { title: "In person in Milan", text: "One weekend a month at Alma Matters, learning with continuity without turning it into an impossible intensive." },
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
        text: "Nonostante avessi già fatto il quadro astrale in altre occasioni, la sua spiegazione mi ha aiutato a comprendere chi sono, con una ricchezza di contributi unica. Una grande professionalità e conoscenza della materia.",
        author: "Laura De Chiara",
      },
    ],
  },
  es: {
    eyebrow: "Reseñas verificadas de Google",
    title: "Aprender con alguien durante un año exige confianza.",
    countLabel: "reseñas en Google",
    translatedNote: "Traducida del italiano",
    items: [
      {
        text: "Estoy siguiendo el curso de astrología psicológica de Sarita y lo considero una experiencia significativa, no solo por los contenidos ricos y estimulantes, sino sobre todo porque representa un importante camino de autoconocimiento.",
        author: "Rosalba C.",
        translated: true,
      },
      {
        text: "Me ha hecho descubrir la astrología psicológica como herramienta de consciencia, ayudándome a comprenderme mejor a mí misma y las dinámicas de la vida. Tiene una grandísima competencia y experiencia.",
        author: "Ilaria Veronesi",
        translated: true,
      },
      {
        text: "Aunque ya me habían hecho la carta astral en otras ocasiones, su explicación me ayudó a comprender quién soy, con una riqueza de matices única. Una gran profesionalidad y conocimiento de la materia.",
        author: "Laura De Chiara",
        translated: true,
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
        text: "I am following Sarita's psychological astrology course and I consider it a meaningful experience — not only for the rich, stimulating content, but above all because it is an important path of self-knowledge.",
        author: "Rosalba C.",
        translated: true,
      },
      {
        text: "She introduced me to psychological astrology as a tool for awareness, helping me understand myself and the dynamics of life. She has enormous competence and experience.",
        author: "Ilaria Veronesi",
        translated: true,
      },
      {
        text: "Although I had had my chart read on other occasions, her explanation helped me understand who I am, with a unique richness of nuance. Great professionalism and knowledge of the subject.",
        author: "Laura De Chiara",
        translated: true,
      },
    ],
  },
};

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function buildCourseSchema(locale: Locale) {
  const content = astrologyTrainingContent[locale];

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
      location: {
        "@type": "Place",
        name: "Alma Matters Milano",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Via Stradella 5",
          addressLocality: "Milano",
          addressCountry: "IT",
        },
      },
      instructor: {
        "@type": "Person",
        name: "Sarita Shakti",
      },
    },
  };
}

export async function AstrologyTrainingPage({ locale }: { locale: Locale }) {
  const content = astrologyTrainingContent[locale];
  const extra = featureCopy[locale];
  const reviews = reviewsCopy[locale];
  const googleSummary = await getGoogleReviews(locale);
  const whatsappHref = buildWhatsAppLink(
    locale === "it"
      ? "Ciao Sarita, vorrei informazioni sulla Scuola di Astrologia Psicologica a Milano."
      : locale === "en"
        ? "Hi Sarita, I would like information about the Milan psychological astrology school."
        : "Hola Sarita, quiero información sobre la Escuela de Astrología Psicológica en Milán.",
  );

  return (
    <div className={styles.root}>
      <JsonLd data={buildCourseSchema(locale)} />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCol}>
              <div className={styles.eyebrow}>{content.eyebrow}</div>
              <h1 className={styles.serif}>{content.title}</h1>
              <p className={styles.heroCopy}>{content.intro}</p>
              <div className={styles.heroActions}>
                <a className={`${styles.btn} ${styles.btnPrimary}`} href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={15} />
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
                src="/images/formacion/collage-group.jpg"
                alt={content.title}
                width={1264}
                height={848}
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
              <Image src="/images/formacion/collage-flatlay.jpg" alt="" width={600} height={600} sizes="(max-width: 1100px) 50vw, 22vw" />
            </div>
            <div className={`${styles.visual} ${styles.visualTall}`}>
              <Image src="/images/formacion/collage-hand.jpg" alt="" width={600} height={800} sizes="(max-width: 1100px) 50vw, 24vw" />
            </div>
            <div className={styles.visual}>
              <Image src="/images/servicios/carta-natal-hero.jpg" alt="" width={640} height={478} sizes="(max-width: 1100px) 50vw, 22vw" />
            </div>
          </div>

          <div>
            <div className={styles.eyebrow}>{content.positioning.eyebrow}</div>
            <h2 className={`${styles.serif} ${styles.sectionTitle}`}>{content.positioning.title}</h2>
            <p className={styles.sectionCopy}>{content.positioning.text}</p>

            <div className={styles.featureGrid}>
              {extra.features.map((feature) => (
                <article className={styles.feature} key={feature.title}>
                  <b>{feature.title}</b>
                  <span>{feature.text}</span>
                </article>
              ))}
            </div>
            <div style={{ marginTop: "26px" }}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href={whatsappHref} target="_blank" rel="noopener noreferrer">
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
            <a className={`${styles.btn} ${styles.btnPrimary}`} href={whatsappHref} target="_blank" rel="noopener noreferrer">
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
        </div>
      </section>

      <section className={styles.section} id="info">
        <div className={`${styles.wrap} ${styles.practicalGrid}`}>
          <div className={styles.venue}>
            <Image
              src="/images/formacion/espacio.jpg"
              alt={extra.venueTitle}
              width={1200}
              height={896}
              sizes="(max-width: 1100px) 100vw, 38vw"
            />
            <div className={styles.venueCard}>{extra.venueTitle}</div>
          </div>

          <article className={styles.infoCard}>
            <div className={styles.eyebrow}>{extra.venueEyebrow}</div>
            <h2 className={styles.serif}>{extra.practicalTitle}</h2>
            <p className={styles.infoText}>{extra.venueText}</p>
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
            <div style={{ marginTop: "20px" }}>
              <a
                className={`${styles.btn} ${styles.btnSecondary}`}
                href={content.contact.webUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {extra.venueCta} →
              </a>
            </div>
          </article>

          <article className={styles.infoCard} id="contacto">
            <div className={styles.eyebrow}>{content.contact.eyebrow}</div>
            <h3 className={styles.serif}>{content.contact.title}</h3>
            <p className={styles.infoText}>{content.contact.text}</p>
            <div className={styles.contactLines}>
              <a href={`mailto:${content.contact.emailLabel}`}>{content.contact.emailLabel}</a>
              <a href="tel:+34665259859">{content.contact.phoneLabel}</a>
            </div>
            <a className={styles.whatsapp} href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} />
              {content.primaryCta}
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
