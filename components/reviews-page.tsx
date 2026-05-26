import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { getGoogleReviews } from "@/lib/google-reviews";
import { Locale } from "@/lib/locales";
import { siteConfig } from "@/lib/site";

const copy = {
  es: {
    eyebrow: "Google Reviews",
    title: "Reseñas y Testimonios — Sarita Shakti",
    intro:
      "Sarita Shakti es astróloga psicológica en Barcelona con más de 170 reseñas de 5 estrellas en Google. Sus clientes describen sus sesiones como espacios claros, humanos y transformadores para comprender la carta natal, los procesos internos y el cuerpo.",
    cta: "Dejar una reseña en Google",
    empty:
      "Las reseñas verificadas se mostrarán aquí cuando la conexión con Google Places esté activa.",
  },
  it: {
    eyebrow: "Google Reviews",
    title: "Recensioni e Testimonianze — Sarita Shakti",
    intro:
      "Sarita Shakti è astrologa psicologica a Barcellona con oltre 170 recensioni a 5 stelle su Google. Le persone descrivono le sue sessioni come spazi chiari, umani e trasformativi per comprendere carta natale, processi interiori e corpo.",
    cta: "Lascia una recensione su Google",
    empty:
      "Le recensioni verificate saranno mostrate qui quando la connessione con Google Places sarà attiva.",
  },
  en: {
    eyebrow: "Google Reviews",
    title: "Reviews and Testimonials — Sarita Shakti",
    intro:
      "Sarita Shakti is a psychological astrologer in Barcelona with more than 170 five-star Google reviews. Clients describe her sessions as clear, human, and transformative spaces for understanding the natal chart, inner processes, and the body.",
    cta: "Leave a Google review",
    empty:
      "Verified reviews will appear here when the Google Places connection is active.",
  },
} satisfies Record<Locale, { eyebrow: string; title: string; intro: string; cta: string; empty: string }>;

function buildReviewsSchema(locale: Locale, summary: Awaited<ReturnType<typeof getGoogleReviews>>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: "Sarita Shakti — Astrología Psicológica Barcelona",
    url: `${siteConfig.url}/${locale}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: summary.reviewCount,
      bestRating: "5",
    },
    review: summary.reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
      },
      reviewBody: review.text,
    })),
  };
}

export async function ReviewsPage({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const summary = await getGoogleReviews(locale);

  return (
    <>
      <JsonLd data={buildReviewsSchema(locale, summary)} />
      <section className="page-section">
        <div className="page-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="section-title">{content.title}</h1>
          <p className="page-intro">{content.intro}</p>
          <Link
            className="primary-button"
            href={summary.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {content.cta}
          </Link>
        </div>

        <div className="review-card-grid">
          {summary.reviews.length ? (
            summary.reviews.map((review) => (
              <article className="review-card" key={`${review.author}-${review.text.slice(0, 18)}`}>
                <span className="review-stars" aria-label={`${review.rating} / 5`}>
                  {"★".repeat(Math.round(review.rating))}
                </span>
                <p>{review.text}</p>
                <footer>
                  <span>{review.author}</span>
                  {review.dateLabel ? <span>{review.dateLabel}</span> : null}
                </footer>
              </article>
            ))
          ) : (
            <article className="panel review-card">
              <p>{content.empty}</p>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
