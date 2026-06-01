import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "@/components/about-page";
import { AstrologyTrainingPage } from "@/components/astrology-training-page";
import { BlogPage } from "@/components/blog-page";
import { BookingPage } from "@/components/booking-page";
import { CoachingPage } from "@/components/coaching-page";
import { FaqPage } from "@/components/faq-page";
import { PsychologicalAstrologyMilanPage } from "@/components/psychological-astrology-milan-page";
import { ReviewsPage } from "@/components/reviews-page";
import { TrainingPage } from "@/components/training-page";
import { isLocale, Locale } from "@/lib/locales";
import { pageContent, PageSlug } from "@/lib/page-content";
import { getLocalizedPagePath, getPageStaticParams, resolvePageRoute } from "@/lib/page-routes";
import { getRequestOrigin } from "@/lib/request-origin";
import { sanityClient } from "@/lib/sanity/client";
import { trainingOffersQuery } from "@/lib/sanity/queries";
import { buildPageMetadata } from "@/lib/site";
import { TrainingOffer } from "@/lib/training-content";

type BasicPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
  searchParams?: Promise<{
    page?: string;
  }>;
};

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

const specialPageSeo = {
  reviews: {
    it: {
      title: "Recensioni e Testimonianze — Sarita Shakti",
      description:
        "Recensioni di Sarita Shakti, astrologa psicologica a Barcellona con oltre 170 recensioni a 5 stelle su Google.",
    },
    es: {
      title: "Reseñas y Testimonios — Sarita Shakti",
      description:
        "Reseñas de Sarita Shakti, astróloga psicológica en Barcelona con más de 170 reseñas de 5 estrellas en Google.",
    },
    en: {
      title: "Reviews and Testimonials — Sarita Shakti",
      description:
        "Reviews for Sarita Shakti, psychological astrologer in Barcelona with more than 170 five-star Google reviews.",
    },
  },
  faq: {
    it: {
      title: "Domande frequenti su astrologia psicologica",
      description:
        "Domande frequenti su astrologia psicologica, carta natale, coaching astrologico e yoga terapeutico.",
    },
    es: {
      title: "Preguntas frecuentes sobre astrología psicológica Barcelona",
      description:
        "Preguntas frecuentes sobre astrología psicológica Barcelona, carta natal, coaching astrológico y yoga terapéutico.",
    },
    en: {
      title: "FAQ about psychological astrology",
      description:
        "FAQ about psychological astrology, natal charts, astrological coaching, and therapeutic yoga.",
    },
  },
  astrologyTraining: {
    it: {
      title: "Corso astrologia psicologica Milano 2027 | Sarita Shakti",
      description:
        "Formazione professionale in astrologia psicologica a Milano: 11 weekend in presenza ad Alma Matters con Sarita Shakti e attestato finale.",
    },
    es: {
      title: "Formación astrología psicológica Milán 2027 | Sarita Shakti",
      description:
        "Formación profesional en astrología psicológica en Milán: 11 fines de semana presenciales en Alma Matters con Sarita Shakti y certificado final.",
    },
    en: {
      title: "Psychological astrology training Milan 2027 | Sarita Shakti",
      description:
        "Professional psychological astrology training in Milan: 11 in-person weekends at Alma Matters with Sarita Shakti and final certificate.",
    },
  },
  psychologicalAstrologyMilan: {
    it: {
      title: "Astrologia psicologica Milano | Sarita Shakti",
      description:
        "Astrologia psicologica a Milano e online: carta natale, sinastria, rivoluzione solare e coaching astrologico con Sarita Shakti.",
    },
    es: {
      title: "Astrologia psicologica Milan | Sarita Shakti",
      description:
        "Astrologia psicologica en Milan y online con Sarita Shakti, manteniendo Barcelona como referencia principal en espanol.",
    },
    en: {
      title: "Psychological astrology Milan | Sarita Shakti",
      description:
        "Psychological astrology in Milan and online with Sarita Shakti: natal chart readings, synastry, solar revolution, and coaching.",
    },
  },
} satisfies Record<
  "reviews" | "faq" | "astrologyTraining" | "psychologicalAstrologyMilan",
  Record<Locale, { title: string; description: string }>
>;

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
  return getPageStaticParams();
}

export async function generateMetadata({
  params,
}: BasicPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const route = resolvePageRoute(locale, slug);

  if (!route) {
    return {};
  }

  const seo =
    route === "reviews" ||
    route === "faq" ||
    route === "astrologyTraining" ||
    route === "psychologicalAstrologyMilan"
      ? specialPageSeo[route][locale]
      : {
          title: pageContent[route][locale].title,
          description: pageContent[route][locale].intro,
        };

  return buildPageMetadata(
    locale,
    {
      title: seo.title,
      description: seo.description,
      path: slug,
    },
    {
      origin: await getRequestOrigin(),
      languages:
        route === "reviews" ||
        route === "faq" ||
        route === "astrologyTraining" ||
        route === "psychologicalAstrologyMilan"
          ? {
              it: `/it/${getLocalizedPagePath("it", route)}`,
              es: `/es/${getLocalizedPagePath("es", route)}`,
              en: `/en/${getLocalizedPagePath("en", route)}`,
            }
          : undefined,
    },
  );
}

export default async function BasicPage({ params, searchParams }: BasicPageProps) {
  const { locale, slug } = await params;
  const query = await searchParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const route = resolvePageRoute(locale, slug);

  if (!route) {
    notFound();
  }

  if (route === "reviews") {
    return <ReviewsPage locale={locale} />;
  }

  if (route === "faq") {
    return <FaqPage locale={locale} />;
  }

  if (route === "astrologyTraining") {
    return <AstrologyTrainingPage locale={locale} />;
  }

  if (route === "psychologicalAstrologyMilan") {
    return <PsychologicalAstrologyMilanPage locale={locale} />;
  }

  const content = pageContent[route as PageSlug][locale];

  if (route === "about") {
    return <AboutPage locale={locale} />;
  }

  if (route === "booking") {
    return <BookingPage locale={locale} />;
  }

  if (route === "coaching") {
    return <CoachingPage locale={locale} />;
  }

  if (route === "training") {
    const sanityOffers = await sanityClient.fetch<SanityTrainingOffer[]>(
      trainingOffersQuery,
      { locale },
      { next: { revalidate: 60 } },
    );

    return <TrainingPage locale={locale} offers={mapTrainingOffers(locale, sanityOffers)} />;
  }

  if (route === "blog") {
    const page = Number.parseInt(query?.page ?? "1", 10);

    return <BlogPage locale={locale} page={Number.isFinite(page) ? page : 1} />;
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
