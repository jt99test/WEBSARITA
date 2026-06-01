import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { Locale } from "@/lib/locales";
import { psychologicalAstrologyMilanContent } from "@/lib/psychological-astrology-milan-content";
import { siteConfig } from "@/lib/site";

type PsychologicalAstrologyMilanPageProps = {
  locale: Locale;
};

export function PsychologicalAstrologyMilanPage({
  locale,
}: PsychologicalAstrologyMilanPageProps) {
  const content = psychologicalAstrologyMilanContent[locale];
  const pageUrl = `${siteConfig.url}/${locale}/${
    locale === "it"
      ? "astrologia-psicologica-milano"
      : locale === "es"
        ? "astrologia-psicologica-milan"
        : "psychological-astrology-milan"
  }`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    description: content.intro,
    provider: {
      "@type": "Person",
      name: "Sarita Shakti",
    },
    areaServed: ["Milano", "Online"],
    serviceType: "Psychological astrology",
    inLanguage: locale,
    url: pageUrl,
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="coaching-hero">
        <div className="coaching-hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="section-title">{content.title}</h1>
          <p className="page-intro">{content.intro}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={`/${locale}/booking`}>
              {content.primaryCta}
            </Link>
            <Link className="ghost-gold-button" href={`/${locale}/coaching`}>
              {content.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="coaching-hero-image-wrap">
          <Image
            className="coaching-hero-image"
            src="/images/explicacion.jpeg"
            alt=""
            width={573}
            height={860}
            priority
            sizes="(max-width: 820px) 100vw, 34vw"
          />
        </div>
      </section>

      <section className="services-section">
        <div className="service-grid">
          {content.highlights.map((highlight) => (
            <article className="panel service-card" key={highlight.title}>
              <div className="service-card-top">
                <h2>{highlight.title}</h2>
              </div>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="coaching-process">
        <Image
          className="coaching-process-image"
          src="/images/SaritaSpol_MedRes_M59C0425.jpg"
          alt=""
          fill
          sizes="100vw"
        />
        <div className="coaching-process-overlay" />
        <div className="coaching-process-copy panel">
          <p className="eyebrow">{content.method.eyebrow}</p>
          <h2>{content.method.title}</h2>
          <p>{content.method.text}</p>
          <ul>
            {content.method.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
