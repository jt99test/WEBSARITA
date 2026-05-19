import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { homeContent } from "@/lib/home-content";
import { isLocale } from "@/lib/locales";
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
        <div className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="hero-title">{content.title}</h1>
          <p className="hero-intro">{content.intro}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={`/${locale}/booking`}>
              {content.primaryCta}
            </Link>
            <Link className="ghost-gold-button" href={`/${locale}/coaching`}>
              {content.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring" />
          <div className="orbit-core">SS</div>
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
    </>
  );
}
