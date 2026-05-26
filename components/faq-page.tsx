import { JsonLd } from "@/components/json-ld";
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
      <section className="page-section">
        <div className="page-copy">
          <p className="eyebrow">FAQ</p>
          <h1 className="section-title">{content.title}</h1>
          <p className="page-intro">{content.intro}</p>
        </div>
        <div className="faq-list">
          {content.items.map((item) => (
            <article className="panel faq-item" key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
