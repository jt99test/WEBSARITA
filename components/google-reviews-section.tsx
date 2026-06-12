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

const reviewCardCta: Record<Locale, string> = {
  it: "Leggi tutte le recensioni",
  es: "Ver todas las reseñas",
  en: "Read all reviews",
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
              <Link
                className="ghost-gold-button"
                href={summary.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                {reviewCardCta[locale]}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
