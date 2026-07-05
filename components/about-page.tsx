import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { aboutContent } from "@/lib/about-content";
import { Locale } from "@/lib/locales";

type AboutPageProps = {
  locale: Locale;
};

const bookingLabels: Record<Locale, string> = {
  it: "Prenotazioni",
  es: "Reservas",
  en: "Booking",
};

export function AboutPage({ locale }: AboutPageProps) {
  const content = aboutContent[locale];

  return (
    <>
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="section-title">{content.title}</h1>
          <p className="page-intro">{content.intro}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              {content.primaryCta}
            </a>
            <a className="ghost-gold-button" href="#path">
              {content.secondaryCta}
            </a>
          </div>
        </div>
        <div className="about-portrait-wrap">
          <Image
            className="about-portrait"
            src="/images/explicacion.jpeg"
            alt={content.imageAlt.portrait}
            width={573}
            height={860}
            priority
            sizes="(max-width: 820px) 100vw, 34vw"
          />
        </div>
      </section>

      <section className="about-authority-section" aria-label={content.credentials.eyebrow}>
        <div className="about-stat-grid">
          {content.stats.map((stat) => (
            <article className="panel about-stat-card" key={stat.value}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-path" id="path">
        <div className="about-path-image-wrap">
          <Image
            className="about-path-image"
            src="/images/Camelo Saritashakti.jpg"
            alt={content.imageAlt.practice}
            width={2048}
            height={1024}
            sizes="(max-width: 820px) 100vw, 42vw"
          />
        </div>
        <div className="about-path-copy">
          <p className="eyebrow">{content.bio.eyebrow}</p>
          <h2 className="section-title">{content.bio.title}</h2>
          {content.bio.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="about-credentials-section">
        <div className="about-section-heading">
          <p className="eyebrow">{content.credentials.eyebrow}</p>
          <h2>{content.credentials.title}</h2>
          <p>{content.credentials.text}</p>
        </div>
        <div className="about-credential-grid">
          {content.credentials.cards.map((card, index) => (
            <article className="panel about-credential-card" key={card.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-method-section">
        <div className="about-section-heading">
          <p className="eyebrow">{content.method.eyebrow}</p>
          <h2>{content.method.title}</h2>
          <p>{content.method.text}</p>
        </div>
        <div className="about-method-grid">
          {content.method.pillars.map((pillar) => (
            <article className="panel about-method-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-heading">
          <p className="eyebrow">{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.text}</p>
        </div>
        <div className="contact-card-grid">
          {content.contact.cards.map((card, index) => (
            <article className="panel contact-card" key={card.title}>
              <span className="contact-card-mark" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className="contact-actions">
          <SocialLinks />
          <Link className="ghost-gold-button" href={`/${locale}/booking`}>
            {bookingLabels[locale]}
          </Link>
        </div>
      </section>
    </>
  );
}
