import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { homeContent } from "@/lib/home-content";
import { isLocale } from "@/lib/locales";
import { socialLinks } from "@/lib/social-links";
import { buildPageMetadata, getHomeSeo } from "@/lib/site";

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

  return buildPageMetadata(locale, getHomeSeo(locale));
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = homeContent[locale];

  return (
    <>
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
          <p className="hero-location">{content.locationLine}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={`/${locale}/booking`}>
              {content.primaryCta}
            </Link>
            <Link className="ghost-gold-button" href={`/${locale}/coaching`}>
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

      <section className="retreat-signal" aria-label="Locations">
        <div className="location-list">
          {content.locations.map((location) => (
            <article key={location.place}>
              <h2>{location.place}</h2>
              <p>{location.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
