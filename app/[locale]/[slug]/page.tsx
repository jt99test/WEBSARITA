import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "@/components/about-page";
import { BlogPage } from "@/components/blog-page";
import { BookingPage } from "@/components/booking-page";
import { CoachingPage } from "@/components/coaching-page";
import { TrainingPage } from "@/components/training-page";
import { isLocale, Locale } from "@/lib/locales";
import { pageContent, pageSlugs, PageSlug } from "@/lib/page-content";
import { sanityClient } from "@/lib/sanity/client";
import { trainingOffersQuery } from "@/lib/sanity/queries";
import { buildPageMetadata } from "@/lib/site";
import { TrainingOffer } from "@/lib/training-content";

type BasicPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

function isPageSlug(value: string): value is PageSlug {
  return pageSlugs.includes(value as PageSlug);
}

type SanityTrainingOffer = {
  _id: string;
  title: string;
  status?: "upcoming" | "open" | "soldOut";
  location: string;
  dateLabel: string;
  price?: string;
  summary: string;
  details?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
};

const trainingStatusLabels: Record<
  Locale,
  Record<NonNullable<SanityTrainingOffer["status"]>, string>
> = {
  it: {
    upcoming: "Prossimamente",
    open: "Iscrizioni aperte",
    soldOut: "Completo",
  },
  es: {
    upcoming: "Próximamente",
    open: "Inscripciones abiertas",
    soldOut: "Completo",
  },
  en: {
    upcoming: "Upcoming",
    open: "Open for booking",
    soldOut: "Sold out",
  },
};

function mapTrainingOffers(locale: Locale, offers: SanityTrainingOffer[]): TrainingOffer[] {
  return offers.map((offer) => ({
    eyebrow: trainingStatusLabels[locale][offer.status ?? "upcoming"],
    title: offer.title,
    place: offer.location,
    date: offer.dateLabel,
    price: offer.price ?? "",
    text: offer.summary,
    details: offer.details ?? [],
    ctaLabel: offer.ctaLabel,
    ctaUrl: offer.ctaUrl,
  }));
}

export function generateStaticParams() {
  return pageSlugs.flatMap((slug) =>
    ["it", "es", "en"].map((locale) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: BasicPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isPageSlug(slug)) {
    return {};
  }

  const content = pageContent[slug][locale];

  return buildPageMetadata(locale, {
    title: content.title,
    description: content.intro,
    path: slug,
  });
}

export default async function BasicPage({ params }: BasicPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isPageSlug(slug)) {
    notFound();
  }

  const content = pageContent[slug][locale];

  if (slug === "about") {
    return <AboutPage locale={locale} />;
  }

  if (slug === "booking") {
    return <BookingPage locale={locale} />;
  }

  if (slug === "coaching") {
    return <CoachingPage locale={locale} />;
  }

  if (slug === "training") {
    const sanityOffers = await sanityClient.fetch<SanityTrainingOffer[]>(
      trainingOffersQuery,
      { locale },
      { next: { revalidate: 60 } },
    );

    return <TrainingPage locale={locale} offers={mapTrainingOffers(locale, sanityOffers)} />;
  }

  if (slug === "blog") {
    return <BlogPage locale={locale} />;
  }

  return (
    <section className="page-section">
      <div className="page-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="section-title">{content.title}</h1>
        <p className="page-intro">{content.intro}</p>
        {content.note ? <p className="status-note">{content.note}</p> : null}
      </div>
    </section>
  );
}
