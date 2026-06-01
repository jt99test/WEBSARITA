import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { astrologyTrainingContent } from "@/lib/astrology-training-content";
import { Locale } from "@/lib/locales";
import { siteConfig } from "@/lib/site";

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
      startDate: "2027-01-16",
      endDate: "2027-12-05",
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

export function AstrologyTrainingPage({ locale }: { locale: Locale }) {
  const content = astrologyTrainingContent[locale];

  return (
    <>
      <JsonLd data={buildCourseSchema(locale)} />
      <section className="course-hero">
        <div className="course-hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="section-title">{content.title}</h1>
          <p className="page-intro">{content.intro}</p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:info@almamattersmilano.it">
              {content.primaryCta}
            </a>
            <a className="ghost-gold-button" href="#calendar">
              {content.secondaryCta}
            </a>
          </div>
        </div>
        <div className="course-fact-grid">
          {content.facts.map((fact) => (
            <article className="panel course-fact-card" key={fact.label}>
              <p>{fact.label}</p>
              <span>{fact.value}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="course-split-section">
        <div className="course-copy-block">
          <p className="eyebrow">{content.positioning.eyebrow}</p>
          <h2 className="section-title">{content.positioning.title}</h2>
          <p>{content.positioning.text}</p>
        </div>
        <div className="course-audience-grid">
          {content.audience.items.map((item) => (
            <article className="panel course-audience-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="course-calendar-section" id="calendar">
        <div className="curriculum-heading">
          <p className="eyebrow">{content.calendar.eyebrow}</p>
          <h2 className="section-title">{content.calendar.title}</h2>
          <p>{content.calendar.text}</p>
        </div>
        <div className="course-weekend-grid">
          {content.calendar.weekends.map((weekend) => (
            <article className="panel course-weekend-card" key={weekend.number}>
              <div>
                <span>{weekend.number}</span>
                <p>{weekend.date}</p>
              </div>
              <h3>{weekend.title}</h3>
              <p>{weekend.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="course-method-section">
        <div className="panel course-method-card">
          <p className="eyebrow">{content.practice.eyebrow}</p>
          <h2>{content.practice.title}</h2>
          <p>{content.practice.text}</p>
          <ul>
            {content.practice.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="panel course-contact-card">
          <p className="eyebrow">{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.text}</p>
          <div className="course-contact-links">
            <a href="mailto:info@almamattersmilano.it">{content.contact.emailLabel}</a>
            <a href="tel:+393494487760">{content.contact.phoneLabel}</a>
            <Link href="https://www.almamattersmilano.com" target="_blank" rel="noreferrer">
              {content.contact.webLabel}
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
