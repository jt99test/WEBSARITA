import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/locales";
import { retreatsContent } from "@/lib/retreats-content";

type RetreatsPageProps = {
  locale: Locale;
};

export function RetreatsPage({ locale }: RetreatsPageProps) {
  const content = retreatsContent[locale];

  return (
    <>
      <section className="retreats-hero">
        <Image
          className="retreats-hero-image"
          src="/images/Yoga playa.jpg"
          alt={content.imageAlt.hero}
          fill
          priority
          sizes="100vw"
        />
        <div className="retreats-hero-overlay" />
        <div className="retreats-hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="section-title">{content.title}</h1>
          <p className="page-intro">{content.intro}</p>
          <div className="hero-actions">
            <Link className="primary-button" href={`/${locale}/about`}>
              {content.primaryCta}
            </Link>
            <a className="ghost-gold-button" href="#includes">
              {content.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="retreat-pillars" id="includes">
        {content.pillars.map((pillar) => (
          <article className="panel retreat-pillar" key={pillar.title}>
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="nourishment-section">
        <div className="nourishment-copy">
          <p className="eyebrow">{content.nourishment.eyebrow}</p>
          <h2 className="section-title">{content.nourishment.title}</h2>
          <p>{content.nourishment.text}</p>
        </div>
        <div className="nourishment-gallery">
          <Image
            className="nourishment-image"
            src="/images/Desayuno retiro_.jpg"
            alt={content.imageAlt.breakfast}
            width={2048}
            height={1152}
            sizes="(max-width: 820px) 100vw, 42vw"
          />
          <Image
            className="nourishment-image"
            src="/images/ensalada.JPG"
            alt={content.imageAlt.food}
            width={1125}
            height={2000}
            sizes="(max-width: 820px) 100vw, 22vw"
          />
        </div>
      </section>

      <section className="practical-section">
        <Image
          className="practical-image"
          src="/images/padel vista.jpg"
          alt={content.imageAlt.sea}
          fill
          sizes="100vw"
        />
        <div className="practical-overlay" />
        <div className="practical-copy panel">
          <p className="eyebrow">{content.practical.eyebrow}</p>
          <h2>{content.practical.title}</h2>
          <p>{content.practical.text}</p>
          <div className="practical-list">
            {content.practical.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
