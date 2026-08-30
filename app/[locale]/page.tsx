import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import styles from "@/components/home-v4.module.css";
import { getGoogleReviews } from "@/lib/google-reviews";
import { homeV4Content } from "@/lib/home-v4-content";
import { isLocale } from "@/lib/locales";
import { getLocalizedPagePath } from "@/lib/page-routes";
import { getRequestOrigin } from "@/lib/request-origin";
import { buildPageMetadata, getHomeSeo } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { serviceKeys } from "@/lib/service-pages-content";
import {
  buildFaqStructuredData,
  buildHomeStructuredData,
} from "@/lib/structured-data";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildPageMetadata(locale, getHomeSeo(locale), {
    origin: await getRequestOrigin(),
  });
}

function ProofIcon({ kind }: { kind: "people" | "star" | "google" }) {
  if (kind === "google") {
    return (
      <span className={styles.proofIco} aria-hidden="true">
        G
      </span>
    );
  }
  if (kind === "star") {
    return (
      <span className={styles.proofIco} aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3.6l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.2 6.9 19l1.1-5.6-4.2-3.9 5.7-.7z" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className={styles.proofIco} aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

const allReviewsLabels = {
  es: "Leer todas las reseñas en Google",
  it: "Vedi tutte le recensioni su Google",
  en: "See all reviews on Google",
} as const;

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = homeV4Content[locale];
  const reviews = await getGoogleReviews(locale);
  const proofIconKinds: Array<"people" | "star" | "google"> = ["people", "star", "google"];
  const servicesPath = `/${locale}/coaching`;
  const trainingPath = `/${locale}/${getLocalizedPagePath(
    locale,
    locale === "it" ? "astrologyTraining" : "astrologyTrainingBarcelona",
  )}`;

  return (
    <>
      <JsonLd data={buildHomeStructuredData(locale)} />
      <JsonLd data={buildFaqStructuredData(locale)} />

      <section className={styles.hero} id="inicio">
        <div className={styles.heroCopy}>
          <h1>{content.hero.title}</h1>
          <p className={styles.lead}>{content.hero.lead}</p>
          {content.hero.text ? <p className={styles.heroText}>{content.hero.text}</p> : null}
          <div className={styles.actions}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href={buildWhatsAppLink(content.whatsappMessages.consult)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              {content.hero.primaryCta}
            </a>
            <a className={`${styles.btn} ${styles.btnSecondary}`} href="#servicios">
              {content.hero.secondaryCta}
            </a>
          </div>
          <div className={styles.freeNote}>{content.hero.freeNote}</div>
          <div className={styles.proof}>
            {content.hero.proof.map((item, index) => (
              <div key={item.strong}>
                <ProofIcon kind={proofIconKinds[index]} />
                <span>
                  <b>{item.strong}</b>
                  <span>
                    {index === 2 && reviews.reviewCount
                      ? item.label.replace(/^\d+/, String(reviews.reviewCount))
                      : item.label}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src="/images/home/sarita-risa.jpg"
            alt={content.hero.imageAlt}
            width={1200}
            height={1600}
            priority
            sizes="(max-width: 900px) 100vw, 56vw"
          />
        </div>
      </section>

      <section className={styles.section} id="servicios">
        <div className={styles.wrap}>
          <div className={styles.sectionTitle}>
            <h2>{content.services.title}</h2>
            {content.services.sub ? <p>{content.services.sub}</p> : null}
          </div>
          <div className={styles.services}>
            {content.services.cards.map((card, index) => (
              <article className={styles.card} key={card.title}>
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
                  {card.tag ? <span className={styles.cardTag}>{card.tag}</span> : null}
                  <Link
                    className={styles.cardLink}
                    href={`/${locale}/${getLocalizedPagePath(locale, serviceKeys[index])}`}
                  >
                    <span>{card.cta ?? content.services.moreLabel}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.reviews}`} id="reviews">
        {content.reviews.bandTitle ? (
          <div className={`${styles.wrap} ${styles.sectionTitle}`} style={{ marginBottom: "30px" }}>
            <div className={styles.eyebrow} style={{ marginBottom: "8px" }}>
              {reviews.reviewCount} {content.reviews.verifiedLabel}
            </div>
            <h2 style={{ maxWidth: "760px", marginInline: "auto" }}>{content.reviews.bandTitle}</h2>
          </div>
        ) : null}
        <div className={`${styles.wrap} ${styles.reviewsWrap}`}>
          <div className={styles.gscore}>
            <div className={styles.gicon}>G</div>
            <div className={styles.num}>
              {reviews.rating.toLocaleString(locale === "en" ? "en-US" : "es-ES", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}
            </div>
            <div className={styles.stars} aria-hidden="true">
              ★★★★★
            </div>
            <p>{reviews.reviewCount} {content.reviews.verifiedLabel}</p>
            <a
              className={`${styles.btn} ${styles.btnSecondary}`}
              style={{ marginTop: "14px" }}
              href={reviews.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {allReviewsLabels[locale]}
            </a>
          </div>
          <div className={styles.reviewGrid}>
            {reviews.reviews.length > 0
              ? reviews.reviews.slice(0, 3).map((review) => (
                  <div className={styles.reviewCard} key={review.author}>
                    <div className={styles.rhead}>
                      <div className={styles.avatar} />
                      <div style={{ flex: 1 }}>
                        <div className={styles.reviewName}>{review.author}</div>
                        <div className={`${styles.stars} ${styles.reviewStars}`} aria-hidden="true">
                          ★★★★★
                        </div>
                      </div>
                    </div>
                    <p className={styles.reviewText}>{review.text}</p>
                  </div>
                ))
              : [0, 1, 2].map((index) => (
                  <div className={styles.reviewCard} key={index} aria-hidden="true">
                    <div className={styles.rhead}>
                      <div className={styles.avatar} />
                      <div style={{ flex: 1 }}>
                        <div className={`${styles.line} ${styles.lineS}`} />
                        <div className={`${styles.stars} ${styles.reviewStars}`}>★★★★★</div>
                      </div>
                    </div>
                    <div className={styles.line} />
                    <div className={`${styles.line} ${styles.lineM}`} />
                    <div className={`${styles.line} ${styles.lineS}`} />
                  </div>
                ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="formacion">
        <div className={`${styles.wrap} ${styles.training}`}>
          <div className={styles.trainingCopy}>
            <div className={styles.eyebrow}>{content.training.eyebrow}</div>
            <h2>{content.training.title}</h2>
            <div className={styles.trainingMeta}>{content.training.meta}</div>
            {content.training.year ? (
              <div className={styles.trainingYear}>{content.training.year}</div>
            ) : null}
            <p>{content.training.text}</p>
            <Link className={`${styles.btn} ${styles.btnPrimary}`} href={trainingPath}>
              {content.training.cta}
            </Link>
          </div>
          <div className={styles.trainingMedia}>
            <Image
              src="/images/formacion/grupo-ancho.jpg"
              alt={content.training.imageAlt}
              width={1800}
              height={1012}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.section} id="sobre-mi">
        <div className={`${styles.wrap} ${styles.about}`}>
          <div className={styles.aboutMedia}>
            <Image
              src="/images/home/sobre-mi-sarita.jpg"
              alt={content.about.imageAlt}
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 38vw"
            />
          </div>
          <div>
            <h2>{content.about.title}</h2>
            <p>{content.about.text}</p>
            <div className={styles.facts}>
              {content.about.facts.map((fact) => (
                <div className={styles.fact} key={fact}>
                  {fact}
                </div>
              ))}
            </div>
            <Link className={`${styles.btn} ${styles.btnText}`} href={`/${locale}/about`}>
              {content.about.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} id="faq">
        <div className={`${styles.wrap} ${styles.faqWrap}`}>
          <div className={styles.sectionTitle}>
            <h2>{content.faq.title}</h2>
          </div>
          <div className={styles.faqGrid}>
            {content.faq.items.map((item, index) => (
              <details key={item.question} name="faq" open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whatsappStrip}>
        <div className={`${styles.wrap} ${styles.wsInner}`}>
          <div className={styles.wsCopy}>
            <div className={styles.wsIco} aria-hidden="true">
              <WhatsAppIcon size={20} />
            </div>
            <div>
              <b>{content.whatsappStrip.title}</b>
              <span>{content.whatsappStrip.text}</span>
            </div>
          </div>
          <a
            className={`${styles.btn} ${styles.btnPrimary}`}
            href={buildWhatsAppLink(content.whatsappMessages.doubt)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={15} />
            {content.whatsappStrip.cta}
          </a>
        </div>
      </section>
    </>
  );
}
