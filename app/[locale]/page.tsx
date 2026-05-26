import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GoogleReviewsSection } from "@/components/google-reviews-section";
import { JsonLd } from "@/components/json-ld";
import { getGoogleReviews } from "@/lib/google-reviews";
import { homeContent } from "@/lib/home-content";
import { isLocale } from "@/lib/locales";
import { getLocalizedPagePath } from "@/lib/page-routes";
import { getRequestOrigin } from "@/lib/request-origin";
import { socialLinks } from "@/lib/social-links";
import { buildPageMetadata, getHomeSeo } from "@/lib/site";
import { buildHomeStructuredData } from "@/lib/structured-data";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const faqTeaser = {
  it: {
    eyebrow: "Domande frequenti",
    title: "Hai dubbi prima di prenotare?",
    text: "Leggi le risposte su astrologia psicologica, carta natale, coaching e yoga terapeutico.",
    cta: "FAQ astrologia psicologica",
  },
  es: {
    eyebrow: "Preguntas frecuentes",
    title: "¿Tienes dudas antes de reservar?",
    text: "Lee respuestas sobre astrología psicológica Barcelona, carta natal, coaching astrológico y yoga terapéutico.",
    cta: "FAQ astrología psicológica",
  },
  en: {
    eyebrow: "FAQ",
    title: "Questions before booking?",
    text: "Read answers about psychological astrology, natal charts, astrological coaching, and therapeutic yoga.",
    cta: "Psychological astrology FAQ",
  },
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

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = homeContent[locale];
  const googleReviews = await getGoogleReviews(locale);

  return (
    <>
      <JsonLd data={buildHomeStructuredData(locale)} />
      <section className="hero-section">
        <Image
          className="hero-background-image"
          src="/images/SaritaSpol_MedRes_M59C0305.jpg"
          alt={content.imageAlt.hero}
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-image-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="hero-title">{content.title}</h1>
          <p className="hero-intro">{content.intro}</p>
          <p className="hero-location">{content.serviceLine}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={`/${locale}/coaching`}>
              {content.primaryCta}
            </Link>
            <Link className="ghost-gold-button" href={`/${locale}/booking`}>
              {content.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band" aria-label="Practice areas">
        <div className="pillar-grid">
          {content.pillars.map((pillar) => (
            <article className="panel pillar-card" key={pillar.title}>
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <GoogleReviewsSection
        locale={locale}
        summary={googleReviews}
        eyebrow={content.reviews.eyebrow}
        title={content.reviews.title}
        text={content.reviews.text}
        cta={content.reviews.cta}
        emptyLabel={content.reviews.countLabel}
      />

      <section className="feature-section">
        <div className="feature-image-wrap">
          <Image
            className="feature-image"
            src="/images/explicacion.jpeg"
            alt={content.imageAlt.portrait}
            width={573}
            height={860}
            sizes="(max-width: 820px) 100vw, 34vw"
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">{content.feature.eyebrow}</p>
          <h2 className="section-title">{content.feature.title}</h2>
          <p>{content.feature.text}</p>
          <Link className="ghost-gold-button" href={`/${locale}/about`}>
            {content.feature.cta}
          </Link>
        </div>
      </section>

      <section className="astrology-signal">
        <div className="panel astrology-signal-panel">
          <p className="eyebrow">{content.astrology.eyebrow}</p>
          <h2>{content.astrology.title}</h2>
          <p>{content.astrology.text}</p>
          <Link
            className="ghost-gold-button"
            href={socialLinks.astrology}
            target="_blank"
            rel="noreferrer"
          >
            {content.astrology.cta}
          </Link>
        </div>
      </section>

      <section className="astrology-signal">
        <div className="panel astrology-signal-panel">
          <p className="eyebrow">{faqTeaser[locale].eyebrow}</p>
          <h2>{faqTeaser[locale].title}</h2>
          <p>{faqTeaser[locale].text}</p>
          <Link
            className="ghost-gold-button"
            href={`/${locale}/${getLocalizedPagePath(locale, "faq")}`}
          >
            {faqTeaser[locale].cta}
          </Link>
        </div>
      </section>

    </>
  );
}
