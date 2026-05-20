import Image from "next/image";
import Link from "next/link";
import { coachingContent } from "@/lib/coaching-content";
import { Locale } from "@/lib/locales";
import { socialLinks } from "@/lib/social-links";

type CoachingPageProps = {
  locale: Locale;
};

export function CoachingPage({ locale }: CoachingPageProps) {
  const content = coachingContent[locale];
  const servicesLabel =
    locale === "it" ? "Percorsi" : locale === "es" ? "Servicios" : "Services";

  return (
    <>
      <section className="coaching-hero">
        <div className="coaching-hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="section-title">{content.title}</h1>
          <p className="page-intro">{content.intro}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={`/${locale}/booking`}>
              {content.primaryCta}
            </Link>
            <a className="ghost-gold-button" href="#services">
              {content.secondaryCta}
            </a>
          </div>
        </div>
        <div className="coaching-hero-image-wrap">
          <Image
            className="coaching-hero-image"
            src="/images/explicacion.jpeg"
            alt={content.imageAlt.hero}
            width={573}
            height={860}
            priority
            sizes="(max-width: 820px) 100vw, 34vw"
          />
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-heading">
          <p className="eyebrow">{servicesLabel}</p>
          <p>{content.servicesIntro}</p>
        </div>
        <div className="service-grid">
          {content.services.map((service) => (
            <article className="panel service-card" key={service.title}>
              <div className="service-card-top">
                <h2>{service.title}</h2>
                <div className="service-price">
                  <span>{service.price}</span>
                  {service.duration ? <small>{service.duration}</small> : null}
                </div>
              </div>
              <p>{service.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="astrology-choice-section">
        <div className="panel astrology-choice-panel">
          <div>
            <p className="eyebrow">{content.astrologySite.eyebrow}</p>
            <h2>{content.astrologySite.title}</h2>
            <p>{content.astrologySite.text}</p>
          </div>
          <div className="astrology-choice-table" aria-label={content.astrologySite.title}>
            <div className="astrology-choice-row">
              <span>{content.astrologySite.directTitle}</span>
              <p>{content.astrologySite.directValue}</p>
            </div>
            <div className="astrology-choice-row">
              <span>{content.astrologySite.websiteTitle}</span>
              <p>{content.astrologySite.websiteValue}</p>
            </div>
          </div>
          <Link
            className="ghost-gold-button"
            href={socialLinks.astrology}
            target="_blank"
            rel="noreferrer"
          >
            {content.astrologySite.cta}
          </Link>
        </div>
      </section>

      <section className="coaching-process">
        <Image
          className="coaching-process-image"
          src="/images/SaritaSpol_MedRes_M59C0425.jpg"
          alt={content.imageAlt.support}
          fill
          sizes="100vw"
        />
        <div className="coaching-process-overlay" />
        <div className="coaching-process-copy panel">
          <p className="eyebrow">{content.process.eyebrow}</p>
          <h2>{content.process.title}</h2>
          <p>{content.process.text}</p>
          <ul>
            {content.process.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
