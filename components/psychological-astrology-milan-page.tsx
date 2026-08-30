import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { ZodiacWheel } from "@/components/zodiac-wheel";
import styles from "@/components/home-v4.module.css";
import formStyles from "@/components/formacion-barcelona.module.css";
import { getGoogleReviews } from "@/lib/google-reviews";
import { homeV4Content } from "@/lib/home-v4-content";
import { Locale } from "@/lib/locales";
import { getLocalizedPagePath } from "@/lib/page-routes";
import { psychologicalAstrologyMilanContent } from "@/lib/psychological-astrology-milan-content";
import { milanOverrides, milanServiceKeys, milanToBaseKey } from "@/lib/service-milan-overrides";
import { servicePagesContent } from "@/lib/service-pages-content";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const pageCopy: Record<
  Locale,
  {
    trainingEyebrow: string;
    trainingTitle: string;
    trainingText: string;
    trainingCta: string;
    videoNote: string;
    reviewsEyebrow: string;
    reviewsTitle: string;
    reviewsCount: string;
    reviewsAll: string;
    translatedNote: string;
    methodImageAlt: string;
  }
> = {
  it: {
    trainingEyebrow: "Formazione in presenza · Milano",
    trainingTitle: "Impara l'astrologia psicologica a Milano",
    trainingText:
      "Undici incontri di fine settimana per imparare a leggere una carta natale dalla base. Qui puoi ascoltare Sarita presentarsi in italiano.",
    trainingCta: "Scopri la formazione a Milano",
    videoNote: "Sarita in italiano",
    reviewsEyebrow: "Recensioni verificate di Google",
    reviewsTitle: "Cosa dice chi ha già lavorato con Sarita.",
    reviewsCount: "recensioni su Google",
    reviewsAll: "Vedi tutte le recensioni",
    translatedNote: "Tradotta",
    methodImageAlt: "Spazio caldo preparato per una sessione",
  },
  es: {
    trainingEyebrow: "Formación presencial · Milán",
    trainingTitle: "Aprende astrología psicológica en Milán",
    trainingText:
      "Once encuentros de fin de semana para aprender a leer una carta natal desde la base. Aquí puedes escuchar a Sarita presentarse en italiano.",
    trainingCta: "Descubre la formación en Milán",
    videoNote: "Sarita en italiano",
    reviewsEyebrow: "Reseñas verificadas de Google",
    reviewsTitle: "Lo que cuentan quienes ya han trabajado con Sarita.",
    reviewsCount: "reseñas en Google",
    reviewsAll: "Ver todas las reseñas",
    translatedNote: "Traducida del italiano",
    methodImageAlt: "Espacio cálido preparado para una sesión",
  },
  en: {
    trainingEyebrow: "In-person training · Milan",
    trainingTitle: "Learn psychological astrology in Milan",
    trainingText:
      "Eleven weekend meetings to learn to read a birth chart from the ground up. Here you can hear Sarita introduce herself in Italian.",
    trainingCta: "Discover the Milan training",
    videoNote: "Sarita in Italian",
    reviewsEyebrow: "Verified Google reviews",
    reviewsTitle: "What people who have worked with Sarita say.",
    reviewsCount: "Google reviews",
    reviewsAll: "See all reviews",
    translatedNote: "Translated",
    methodImageAlt: "Warm space prepared for a session",
  },
};

const milanFaq: Record<
  Locale,
  {
    title: string;
    items: Array<{ question: string; answer: string; linkLabel?: string }>;
  }
> = {
  it: {
    title: "Domande frequenti",
    items: [
      {
        question: "Le sessioni a Milano sono in italiano?",
        answer:
          "Sì. Sarita lavora in italiano, spagnolo e inglese. A Milano le sessioni in presenza si svolgono normalmente in italiano.",
      },
      {
        question: "Quando è possibile vedersi in presenza a Milano?",
        answer:
          "Le sessioni in presenza si coordinano secondo la disponibilità di Sarita a Milano. Scrivile su WhatsApp e ti confermerà le prossime date disponibili.",
      },
      {
        question: "Posso fare la sessione online invece che in presenza?",
        answer:
          "Sì. Tutte le sessioni — carta natale, sinastria, rivoluzione solare e coaching — sono disponibili online in videochiamata, ovunque tu viva.",
      },
      {
        question: "C'è una formazione in presenza a Milano?",
        answer:
          "Sì: una formazione in astrologia psicologica di undici incontri di fine settimana.",
        linkLabel: "Vedi il programma completo →",
      },
    ],
  },
  es: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Las sesiones en Milán son en italiano?",
        answer:
          "Sarita trabaja en italiano, español e inglés. En Milán las sesiones presenciales suelen ser en italiano, y online puedes elegir el idioma.",
      },
      {
        question: "¿Cuándo hay sesiones presenciales en Milán?",
        answer:
          "Las sesiones presenciales se coordinan según la disponibilidad de Sarita en Milán. Escríbele por WhatsApp y te confirmará las próximas fechas.",
      },
      {
        question: "¿Puedo hacer la sesión online en lugar de presencial?",
        answer:
          "Sí. Todas las sesiones — carta natal, sinastría, revolución solar y coaching — están disponibles online por videollamada, vivas donde vivas.",
      },
      {
        question: "¿Hay una formación presencial en Milán?",
        answer:
          "Sí: una formación en astrología psicológica de once encuentros de fin de semana.",
        linkLabel: "Ver el programa completo →",
      },
    ],
  },
  en: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Are Milan sessions in Italian?",
        answer:
          "Sarita works in Italian, Spanish, and English. In-person sessions in Milan are usually in Italian; online you can choose the language.",
      },
      {
        question: "When are in-person sessions available in Milan?",
        answer:
          "In-person sessions are arranged according to Sarita's availability in Milan. Message her on WhatsApp and she will confirm the next available dates.",
      },
      {
        question: "Can I have my session online instead?",
        answer:
          "Yes. All sessions — birth chart, synastry, solar return, and coaching — are available online by video call, wherever you live.",
      },
      {
        question: "Is there an in-person training in Milan?",
        answer:
          "Yes: a psychological astrology training of eleven weekend meetings.",
        linkLabel: "See the full program →",
      },
    ],
  },
};

const milanReviews: Record<
  Locale,
  Array<{ text: string; author: string; translated?: boolean }>
> = {
  it: [
    {
      text: "Sto seguendo il corso di astrologia psicologica di Sarita e lo considero una esperienza significativa, non solo per i contenuti ricchi e stimolanti, ma soprattutto perché rappresenta un importante percorso di autoconoscenza.",
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
  es: [
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
  en: [
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
};

export async function PsychologicalAstrologyMilanPage({ locale }: { locale: Locale }) {
  const content = psychologicalAstrologyMilanContent[locale];
  const home = homeV4Content[locale];
  const copy = pageCopy[locale];
  const reviews = milanReviews[locale];
  const faq = milanFaq[locale];
  const summary = await getGoogleReviews(locale);
  const trainingPath = `/${locale}/${getLocalizedPagePath(locale, "astrologyTraining")}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      {/* 1. Hero */}
      <section className={styles.subHero}>
        <div className={styles.wrap}>
          <div className={styles.subHeroGrid} style={{ marginTop: "26px" }}>
            <div>
              <div className={styles.eyebrow}>{content.eyebrow}</div>
              <h1 className={styles.subTitle}>{content.title}</h1>
              <p className={styles.subIntro}>{content.intro}</p>
              <div className={styles.actions}>
                <a
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  href={buildWhatsAppLink(home.whatsappMessages.consult)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={15} />
                  {content.primaryCta}
                </a>
                <a className={`${styles.btn} ${styles.btnSecondary}`} href="#servizi">
                  {content.secondaryCta}
                </a>
              </div>
            </div>
            <div className={styles.subHeroMedia}>
              <Image
                src="/images/home/hero-v3.jpg"
                alt="Sarita Shakti"
                width={1122}
                height={1122}
                priority
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectPosition: "50% 12%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Reviews (moved up, replaces the old pillar cards) */}
      <section className={`${styles.section} ${styles.reviews}`}>
        <div className={styles.wrap}>
          <div className={formStyles.reviewsHead}>
            <div>
              <div className={styles.eyebrow}>{copy.reviewsEyebrow}</div>
              <h2
                className={formStyles.serif}
                style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.05, marginTop: "6px" }}
              >
                {copy.reviewsTitle}
              </h2>
            </div>
            <div className={formStyles.scoreChip}>
              <b>
                {summary.rating.toLocaleString(locale === "en" ? "en-US" : "es-ES", {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </b>
              <span className={formStyles.scoreStars} aria-hidden="true">
                ★★★★★
              </span>
              <small>
                {summary.reviewCount} {copy.reviewsCount}
              </small>
            </div>
          </div>
          <div className={formStyles.reviewCards}>
            {reviews.map((review) => (
              <article className={formStyles.reviewCard} key={review.author}>
                <span className={formStyles.scoreStars} aria-hidden="true">
                  ★★★★★
                </span>
                <p>{review.text}</p>
                <span className={formStyles.reviewAuthor}>{review.author}</span>
                {review.translated ? (
                  <span className={formStyles.reviewNote}>{copy.translatedNote}</span>
                ) : null}
              </article>
            ))}
          </div>
          <div className={styles.ctaCenter}>
            <a
              className={`${styles.btn} ${styles.btnSecondary}`}
              href={summary.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.reviewsAll}
            </a>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className={styles.section} id="servizi">
        <div className={styles.wrap}>
          <div className={styles.sectionTitle}>
            <h2>{home.services.title}</h2>
            {home.services.sub ? <p>{home.services.sub}</p> : null}
          </div>
          <div className={styles.services}>
            {milanServiceKeys.map((milanKey, index) => {
              const baseKey = milanToBaseKey[milanKey];
              const card = home.services.cards[index];
              const override = milanOverrides[baseKey][locale];
              const service = servicePagesContent[baseKey][locale];

              return (
                <article className={styles.card} key={milanKey}>
                  <Image
                    className={styles.cardImage}
                    src={card.image}
                    alt={card.alt}
                    width={430}
                    height={236}
                    sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 25vw"
                  />
                  <div className={styles.cardBody}>
                    <h3>{card.outcome ?? card.title}</h3>
                    <p>{card.text}</p>
                    <span className={styles.cardTag}>
                      {(override?.title ?? service.title).split(":")[0]}
                    </span>
                    <Link
                      className={styles.cardLink}
                      href={`/${locale}/${getLocalizedPagePath(locale, milanKey)}`}
                    >
                      <span>{card.cta ?? home.services.moreLabel}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Formación (clean card, both videos inside) */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={`${styles.wrap} ${styles.training}`}>
          <div className={styles.trainingCopy}>
            <div className={styles.eyebrow}>{copy.trainingEyebrow}</div>
            <h2>{copy.trainingTitle}</h2>
            <p>{copy.trainingText}</p>
            <Link className={`${styles.btn} ${styles.btnPrimary}`} href={trainingPath}>
              {copy.trainingCta}
            </Link>
          </div>
          <div className={styles.trainingVideos}>
            <video controls preload="none" poster="/videos/sarita-it-1-poster.jpg" aria-label={copy.videoNote}>
              <source src="/videos/sarita-it-1.mp4" type="video/mp4" />
            </video>
            <video controls preload="none" poster="/videos/sarita-it-2-poster.jpg" aria-label={copy.videoNote}>
              <source src="/videos/sarita-it-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* 5. Method — compact, with photo */}
      <section className={`${styles.section} ${styles.reviews}`}>
        <div className={`${styles.wrap} ${styles.methodGrid}`}>
          <div className={styles.methodImage}>
            <Image
              src="/images/formacion/espacio.jpg"
              alt={copy.methodImageAlt}
              width={1200}
              height={896}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div>
            <div className={styles.eyebrow}>{content.method.eyebrow}</div>
            <h2 className={styles.subTitle} style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
              {content.method.title}
            </h2>
            <p className={styles.subIntro}>{content.method.text}</p>
            <div className={styles.methodPoints}>
              {content.method.points.map((point, index) => (
                <div className={styles.checkItem} key={point}>
                  <span className={styles.methodNum} aria-hidden="true">
                    0{index + 1}
                  </span>
                  {point}
                </div>
              ))}
            </div>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              style={{ marginTop: "20px" }}
              href={buildWhatsAppLink(home.whatsappMessages.consult)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={15} />
              {content.primaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.wrap} ${styles.faqWrap}`}>
          <div className={styles.sectionTitle}>
            <h2>{faq.title}</h2>
          </div>
          <div className={styles.faqGrid}>
            {faq.items.map((item, index) => (
              <details key={item.question} name="milan-faq" open={index === 0}>
                <summary>{item.question}</summary>
                <p>
                  {item.answer}
                  {item.linkLabel ? (
                    <>
                      {" "}
                      <Link
                        href={trainingPath}
                        style={{ color: "var(--wine2)", fontWeight: 700, textDecoration: "underline" }}
                      >
                        {item.linkLabel}
                      </Link>
                    </>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
