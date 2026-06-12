import Link from "next/link";
import { GoogleReviewsSummary } from "@/lib/google-reviews";
import { Locale } from "@/lib/locales";

type GoogleReviewsSectionProps = {
  locale: Locale;
  summary: GoogleReviewsSummary;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  emptyLabel: string;
};

const numberFormatters: Record<Locale, Intl.NumberFormat> = {
  it: new Intl.NumberFormat("it-IT", { maximumFractionDigits: 1, minimumFractionDigits: 1 }),
  es: new Intl.NumberFormat("es-ES", { maximumFractionDigits: 1, minimumFractionDigits: 1 }),
  en: new Intl.NumberFormat("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 }),
};

const countFormatters: Record<Locale, Intl.NumberFormat> = {
  it: new Intl.NumberFormat("it-IT"),
  es: new Intl.NumberFormat("es-ES"),
  en: new Intl.NumberFormat("en-US"),
};

const reviewCardCta: Record<Locale, { title: string; text: string }> = {
  it: {
    title: "Leggi tutte le recensioni",
    text: "Google Places mostra solo una selezione limitata. Apri la scheda Google per vedere il profilo completo.",
  },
  es: {
    title: "Ver todas las reseñas",
    text: "Google Places muestra solo una selección limitada. Abre la ficha de Google para ver el perfil completo.",
  },
  en: {
    title: "Read all reviews",
    text: "Google Places only shows a limited selection. Open the Google listing to see the full profile.",
  },
};

function Stars({ rating }: { rating: number }) {
  const filledStars = Math.round(rating);

  return (
    <span className="review-stars" aria-label={`${rating} / 5`}>
      {"★".repeat(filledStars)}
      {"☆".repeat(Math.max(0, 5 - filledStars))}
    </span>
  );
}

export function GoogleReviewsSection({
  locale,
  summary,
  eyebrow,
  title,
  text,
  cta,
  emptyLabel,
}: GoogleReviewsSectionProps) {
  return (
    <section className="reviews-signal" aria-label={eyebrow}>
      <div className="reviews-signal-inner">
        <div className="reviews-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="reviews-score-panel" aria-label={summary.placeName}>
          <div className="reviews-score-top">
            <span className="reviews-score">
              {numberFormatters[locale].format(summary.rating)}
            </span>
            <Stars rating={summary.rating} />
          </div>
          <p>
            {countFormatters[locale].format(summary.reviewCount)} {emptyLabel}
          </p>
          <Link
            className="ghost-gold-button"
            href={summary.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {cta}
          </Link>
        </div>

        {summary.reviews.length ? (
          <div className="reviews-list-area">
            <div className="review-card-grid">
              {summary.reviews.map((review) => (
                <article className="review-card" key={`${review.author}-${review.text.slice(0, 18)}`}>
                  <Stars rating={review.rating} />
                  <p>{review.text}</p>
                  <footer>
                    {review.authorUrl ? (
                      <Link href={review.authorUrl} target="_blank" rel="noreferrer">
                        {review.author}
                      </Link>
                    ) : (
                      <span>{review.author}</span>
                    )}
                    {review.dateLabel ? <span>{review.dateLabel}</span> : null}
                  </footer>
                </article>
              ))}
            </div>
            <div className="review-card-cta-wrap">
              <article className="review-card review-card-cta">
                <span className="review-stars" aria-hidden="true">
                  Google
                </span>
                <h3>{reviewCardCta[locale].title}</h3>
                <p>{reviewCardCta[locale].text}</p>
                <Link href={summary.googleMapsUrl} target="_blank" rel="noreferrer">
                  {cta}
                </Link>
              </article>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
