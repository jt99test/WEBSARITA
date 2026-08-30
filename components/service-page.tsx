import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { ZodiacWheel } from "@/components/zodiac-wheel";
import styles from "@/components/service-v4.module.css";
import { Locale } from "@/lib/locales";
import { getLocalizedPagePath } from "@/lib/page-routes";
import {
  serviceExtrasLabels,
  servicePageExtras,
} from "@/lib/service-page-extras";
import {
  milanOverrides,
  milanServiceKeys,
  milanToBaseKey,
  MilanServiceKey,
} from "@/lib/service-milan-overrides";
import {
  ServiceKey,
  servicePagesContent,
  serviceSharedLabels,
} from "@/lib/service-pages-content";
import { siteConfig } from "@/lib/site";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const serviceImageSlug: Record<ServiceKey, string> = {
  cartaNatal: "carta-natal",
  sinastria: "sinastria",
  revolucionSolar: "revolucion",
  coachingAstrologico: "coaching",
};

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Saritashakti%20Astrolog%C3%ADa%20Psicol%C3%B3gica%20Barcelona&output=embed";

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function splitBenefit(item: string): { title: string; text: string | null } {
  const index = item.indexOf(":");
  if (index > 6 && index < 70) {
    return { title: item.slice(0, index).trim(), text: item.slice(index + 1).trim() };
  }
  return { title: item, text: null };
}

export function ServicePage({
  locale,
  serviceKey,
  milan = false,
}: {
  locale: Locale;
  serviceKey: ServiceKey;
  milan?: boolean;
}) {
  const override = milan ? milanOverrides[serviceKey][locale] : undefined;
  const baseContent = servicePagesContent[serviceKey][locale];
  const baseExtras = servicePageExtras[serviceKey][locale];
  const content = override
    ? {
        ...baseContent,
        title: override.title,
        eyebrow: override.eyebrow,
        mode: override.mode,
        seoTitle: override.seoTitle,
        seoDescription: override.seoDescription,
      }
    : baseContent;
  const extras = override
    ? {
        ...baseExtras,
        heroNote: override.heroNote,
        location: { ...baseExtras.location, ...override.location, showAddress: false, cta: undefined },
        cta: { ...baseExtras.cta, title: override.ctaTitle },
      }
    : baseExtras;
  const labels = serviceSharedLabels[locale];
  const extraLabels = serviceExtrasLabels[locale];
  const slug = serviceImageSlug[serviceKey];
  const routeKey = milan
    ? (Object.keys(milanToBaseKey) as MilanServiceKey[]).find(
        (key) => milanToBaseKey[key] === serviceKey,
      )!
    : serviceKey;
  const path = `/${locale}/${getLocalizedPagePath(locale, routeKey)}`;
  const whatsappHref = buildWhatsAppLink(content.whatsappMessage);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    description: content.seoDescription,
    url: new URL(path, siteConfig.url).toString(),
    provider: {
      "@type": "Person",
      name: "Sarita Shakti",
      url: siteConfig.url,
    },
    areaServed: locale === "it" ? ["Milano", "Online"] : ["Barcelona", "Online"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className={styles.root}>
      <JsonLd
        data={buildBreadcrumbStructuredData(locale, [
          { name: "Sarita Shakti", path: `/${locale}` },
          { name: content.title, path },
        ])}
      />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <div className={`${styles.wrap} ${styles.breadcrumb}`}>
        <Link href={`/${locale}`}>{labels.breadcrumbHome}</Link>
        <span aria-hidden="true">/</span>
        <Link
          href={
            milan
              ? `/${locale}/${getLocalizedPagePath(locale, "psychologicalAstrologyMilan")}`
              : `/${locale}/coaching`
          }
        >
          {milan ? (locale === "en" ? "Milan" : locale === "it" ? "Milano" : "Milán") : labels.allServices}
        </Link>
        <span aria-hidden="true">/</span>
        <span>{content.title}</span>
      </div>

      <section className={styles.hero}>
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div>
            <div className={styles.eyebrow}>{content.eyebrow}</div>
            <h1 className={styles.serif}>{content.title}</h1>
            <p className={styles.heroSub}>{content.lead}</p>
            <p className={styles.heroCopy}>{content.intro}</p>

            <div className={styles.meta}>
              <div className={styles.pill}>
                <small>{labels.durationLabel}</small>
                <b>{content.duration}</b>
              </div>
              <div className={styles.pill}>
                <small>{labels.modeLabel}</small>
                <b>{content.mode}</b>
              </div>
            </div>

            <div className={styles.heroActions}>
              <a
                className={`${styles.btn} ${styles.btnPrimary}`}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={15} />
                {extras.heroCta ?? labels.bookCta}
              </a>
              <a className={`${styles.btn} ${styles.btnSecondary}`} href="#que-es">
                {extras.seo.h2}
              </a>
            </div>
            {extras.heroNote ? (
              <p className={styles.heroCopy} style={{ marginTop: "14px", fontSize: "13px" }}>
                {extras.heroNote}
              </p>
            ) : null}
          </div>

          <div className={styles.chartStage}>
            <Image
              src={`/images/servicios/${slug}-hero.jpg`}
              alt={content.imageAlt}
              width={1200}
              height={896}
              priority
              sizes="(max-width: 980px) 100vw, 45vw"
            />
            <div className={styles.chartNote}>
              <b>{extraLabels.heroImageBadgeTitle}</b>
              <span>{extraLabels.heroImageBadgeText}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quick}>
        <div className={`${styles.wrap} ${styles.quickGrid}`}>
          {extras.quick.map((card) => (
            <article className={`${styles.quickCard} ${styles.card}`} key={card.tag}>
              <span className={styles.num}>{card.tag}</span>
              <h3 className={styles.serif}>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`}>
        <div className={styles.wrap}>
          <div className={styles.benefitHead}>
            <div>
              <div className={styles.eyebrow}>{content.explore.title}</div>
              <h2 className={`${styles.serif} ${styles.title}`}>{extras.benefitTitle}</h2>
            </div>
          </div>
          <div className={styles.benefitGrid}>
            {content.explore.items.map((item) => {
              const benefit = splitBenefit(item);
              return (
                <div className={styles.benefit} key={item}>
                  <span className={styles.tick}>
                    <CheckIcon />
                  </span>
                  <div>
                    <b>{benefit.title}</b>
                    {benefit.text ? <span>{benefit.text}</span> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section} id="que-es">
        <div className={`${styles.wrap} ${styles.seoGrid}`}>
          <div className={styles.stickyCol}>
            <aside className={styles.stickyBox}>
              <div className={styles.eyebrow}>{extras.sticky.eyebrow}</div>
              <h3 className={styles.serif}>{extras.sticky.title}</h3>
              <p>{extras.sticky.text}</p>
            </aside>
            <div className={styles.detailImage}>
              <Image
                src={`/images/servicios/${slug}-detail.jpg`}
                alt={content.imageAlt}
                width={896}
                height={1200}
                sizes="(max-width: 980px) 100vw, 36vw"
              />
            </div>
          </div>

          <div className={styles.seoCopy}>
            <div className={styles.eyebrow}>{extras.seo.eyebrow}</div>
            <h2 className={styles.serif}>{extras.seo.h2}</h2>
            {extras.seo.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            {extras.seo.subs.map((sub) => (
              <div key={sub.h3}>
                <h3 className={styles.serif}>{sub.h3}</h3>
                <p>{sub.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft} ${styles.steps}`}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>{extraLabels.stepsEyebrow}</div>
          <h2 className={`${styles.serif} ${styles.title}`}>{content.how.title}</h2>
          <div className={styles.stepGrid}>
            {content.how.steps.map((step, index) => (
              <article className={`${styles.step} ${styles.card}`} key={step.title}>
                <span className={styles.n}>0{index + 1}</span>
                <h3 className={styles.serif}>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.location} motif-host`}>
        <div className="motif motif--light" style={{ left: "-150px", bottom: "-180px" }}>
          <ZodiacWheel size={500} />
        </div>
        <div className={`${styles.wrap} ${styles.locationGrid}`}>
          <div>
            <div className={styles.eyebrow}>{extraLabels.locationEyebrow}</div>
            <h2 className={`${styles.serif} ${styles.title}`}>{extras.location.title}</h2>
            <p className={styles.lead}>{extras.location.lead}</p>
            {extras.location.showAddress ? <p>{extraLabels.locationAddressText}</p> : null}
            <div className={styles.heroActions}>
              <a
                className={`${styles.btn} ${styles.btnLight}`}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={15} />
                {extras.location.cta ?? extraLabels.locationCta}
              </a>
            </div>
          </div>
          {extras.location.showAddress ? (
            <div className={styles.mapFrame}>
              <iframe
                title="Google Maps"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <div className={styles.mapFrame}>
              <Image
                src={`/images/servicios/${slug}-card.jpg`}
                alt={content.imageAlt}
                width={1264}
                height={848}
                sizes="(max-width: 980px) 100vw, 45vw"
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "390px" }}
              />
            </div>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>{extraLabels.audienceEyebrow}</div>
          <h2 className={`${styles.serif} ${styles.title}`}>
            {extras.audienceTitle ?? content.forWho.title}
          </h2>
          <div className={styles.audienceGrid}>
            {extras.audience.map((card) => (
              <article className={`${styles.audienceCard} ${styles.card}`} key={card.title}>
                <h3 className={styles.serif}>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`} id="reservar">
        <div className={styles.wrap}>
          <div className={styles.ctaBox}>
            <div>
              <div className={styles.eyebrow}>{extraLabels.ctaEyebrow}</div>
              <h2 className={styles.serif}>{extras.cta.title}</h2>
              <p className={styles.lead}>{extras.cta.lead}</p>
              <div className={styles.heroActions}>
                <a
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={15} />
                  {extras.cta.label ?? labels.bookCta}
                </a>
                <a className={`${styles.btn} ${styles.btnSecondary}`} href="tel:+34665259859">
                  {extraLabels.callLabel}
                </a>
              </div>
              {extras.cta.support ? (
                <p className={styles.heroCopy} style={{ marginTop: "14px", fontSize: "13px" }}>
                  {extras.cta.support}
                </p>
              ) : null}
            </div>
            <div className={styles.ctaPhoto}>
              <Image
                src="/images/home/sarita-laugh.jpg"
                alt="Sarita Shakti"
                width={460}
                height={613}
                sizes="(max-width: 980px) 60vw, 230px"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.wrap} ${styles.faq}`}>
          <div className={`${styles.eyebrow} ${styles.faqEyebrow}`}>{extraLabels.faqEyebrow}</div>
          <h2 className={`${styles.serif} ${styles.faqTitle}`}>FAQ</h2>
          {content.faqs.map((faq, index) => (
            <details key={faq.question} name="service-faq" open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`} style={{ paddingTop: "58px" }}>
        <div className={styles.wrap}>
          <div className={`${styles.eyebrow} ${styles.moreEyebrow}`}>{extraLabels.moreEyebrow}</div>
          <h2 className={`${styles.serif} ${styles.moreTitle}`}>{labels.relatedTitle}</h2>
          <div className={styles.moreGrid}>
            {content.related.map((key) => (
              <Link
                className={`${styles.moreCard} ${styles.card}`}
                key={key}
                href={`/${locale}/${getLocalizedPagePath(
                  locale,
                  milan
                    ? ((Object.keys(milanToBaseKey) as MilanServiceKey[]).find(
                        (mk) => milanToBaseKey[mk] === key,
                      ) ?? key)
                    : key,
                )}`}
              >
                <Image
                  src={`/images/servicios/${serviceImageSlug[key]}-card.jpg`}
                  alt={servicePagesContent[key][locale].imageAlt}
                  width={632}
                  height={424}
                  sizes="(max-width: 980px) 100vw, 30vw"
                />
                <span className={styles.moreCardBody}>
                  <span>{servicePagesContent[key][locale].title}</span>
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
