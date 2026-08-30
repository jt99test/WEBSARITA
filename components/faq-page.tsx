import { JsonLd } from "@/components/json-ld";
import styles from "@/components/home-v4.module.css";
import { faqContent } from "@/lib/faq-content";
import { Locale } from "@/lib/locales";

function buildFaqSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent[locale].items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function FaqPage({ locale }: { locale: Locale }) {
  const content = faqContent[locale];

  return (
    <>
      <JsonLd data={buildFaqSchema(locale)} />
      <section className={styles.subHero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow} style={{ marginTop: "18px" }}>
            FAQ
          </div>
          <h1 className={styles.subTitle} style={{ maxWidth: "22ch" }}>
            {content.title}
          </h1>
          <p className={styles.subIntro}>{content.intro}</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.wrap} ${styles.faqWrap}`}>
          <div className={styles.faqGrid}>
            {content.items.map((item, index) => (
              <details key={item.question} name="faq-page" open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
