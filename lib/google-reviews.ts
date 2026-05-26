import { Locale } from "./locales";

const DEFAULT_PLACE_ID = "ChIJcWydOkE5uxIRROCa9fEWRts";

type GooglePlaceDetails = {
  displayName?: {
    text?: string;
  };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    name?: string;
    rating?: number;
    relativePublishTimeDescription?: string;
    publishTime?: string;
    text?: {
      text?: string;
    };
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
};

export type GoogleReview = {
  author: string;
  authorUrl?: string;
  rating: number;
  text: string;
  dateLabel?: string;
};

export type GoogleReviewsSummary = {
  placeName: string;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  reviews: GoogleReview[];
  isLive: boolean;
};

const fallbackSummary: GoogleReviewsSummary = {
  placeName: "Saritashakti Yoga Terapéutico y Astrología Psicológica",
  rating: 5,
  reviewCount: 170,
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${DEFAULT_PLACE_ID}`,
  reviews: [],
  isLive: false,
};

function toReview(review: NonNullable<GooglePlaceDetails["reviews"]>[number]): GoogleReview | null {
  const text = review.text?.text?.trim();

  if (!text) {
    return null;
  }

  return {
    author: review.authorAttribution?.displayName ?? "Google reviewer",
    authorUrl: review.authorAttribution?.uri,
    rating: review.rating ?? 5,
    text,
    dateLabel: review.relativePublishTimeDescription,
  };
}

export async function getGoogleReviews(locale: Locale): Promise<GoogleReviewsSummary> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID ?? DEFAULT_PLACE_ID;

  if (!apiKey) {
    return fallbackSummary;
  }

  const url = new URL(`https://places.googleapis.com/v1/places/${placeId}`);
  url.searchParams.set("languageCode", locale);

  try {
    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,googleMapsUri,reviews.rating,reviews.text,reviews.authorAttribution,reviews.relativePublishTimeDescription",
      },
      next: { revalidate: 60 * 60 * 12 },
    });

    if (!response.ok) {
      return fallbackSummary;
    }

    const place = (await response.json()) as GooglePlaceDetails;
    const reviews = place.reviews?.map(toReview).filter((review): review is GoogleReview => Boolean(review)) ?? [];

    return {
      placeName: place.displayName?.text ?? fallbackSummary.placeName,
      rating: place.rating ?? fallbackSummary.rating,
      reviewCount: place.userRatingCount ?? fallbackSummary.reviewCount,
      googleMapsUrl: place.googleMapsUri ?? fallbackSummary.googleMapsUrl,
      reviews: reviews.slice(0, 5),
      isLive: true,
    };
  } catch {
    return fallbackSummary;
  }
}
