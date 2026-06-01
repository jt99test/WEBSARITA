import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/locales";
import { TrainingOffer, trainingContent } from "@/lib/training-content";

type TrainingPageProps = {
  locale: Locale;
  offers?: TrainingOffer[];
};

export function TrainingPage({ locale, offers }: TrainingPageProps) {
  const content = trainingContent[locale];
  const trainingOffers = offers?.length ? offers : content.offers;

  return (
    <>
      <section className="training-hero">
        <div className="training-hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="section-title">{content.title}</h1>
          <p className="page-intro">{content.intro}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={`/${locale}/about#contact`}>
              {content.primaryCta}
            </Link>
            <a className="ghost-gold-button" href="#milan-program">
              {content.secondaryCta}
            </a>
          </div>
        </div>
        <div className="training-hero-image-wrap">
          <Image
            className="training-hero-image"
            src="/images/meditation-course-still-life.jpeg"
            alt={content.imageAlt.hero}
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 820px) 100vw, 36vw"
          />
        </div>
      </section>

      <section className="training-offers" aria-label="Training options">
        {trainingOffers.map((offer, index) => (
          <article className="panel training-offer-card" key={offer.title}>
            <div className="training-offer-visual" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div>
              <p className="eyebrow">{offer.eyebrow}</p>
              <h2>{offer.title}</h2>
              <p>{offer.text}</p>
            </div>
            <dl className="training-facts">
              <div>
                <dt>{offer.place}</dt>
                <dd>{offer.date}</dd>
              </div>
              {offer.price ? (
                <div>
                  <dt>{offer.price}</dt>
                  <dd>{content.priceNote}</dd>
                </div>
              ) : null}
            </dl>
            {offer.details.length ? (
              <ul>
                {offer.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : null}
            {offer.ctaLabel ? (
              <Link
                className="ghost-gold-button"
                href={offer.ctaUrl ?? `/${locale}/about#contact`}
                target={offer.ctaUrl?.startsWith("http") ? "_blank" : undefined}
                rel={offer.ctaUrl?.startsWith("http") ? "noreferrer" : undefined}
              >
                {offer.ctaLabel}
              </Link>
            ) : null}
          </article>
        ))}
      </section>

      <section className="training-method">
        <Image
          className="training-method-image"
          src="/images/meditation-course-seated.jpeg"
          alt={content.imageAlt.portrait}
          fill
          sizes="100vw"
        />
        <div className="training-method-overlay" />
        <div className="training-method-copy panel">
          <p className="eyebrow">{content.practice.eyebrow}</p>
          <h2>{content.practice.title}</h2>
          <p>{content.practice.text}</p>
          <ul>
            {content.practice.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="curriculum-section" id="milan-program">
        <div className="curriculum-heading">
          <p className="eyebrow">{content.curriculum.eyebrow}</p>
          <h2 className="section-title">{content.curriculum.title}</h2>
          <p>{content.curriculum.text}</p>
        </div>
        <div className="module-grid">
          {content.curriculum.modules.map((module) => (
            <article className="panel module-card" key={module.label}>
              <p>{module.label}</p>
              <h3>{module.title}</h3>
              <span>{module.text}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
