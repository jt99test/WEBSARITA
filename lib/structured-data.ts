import { faqContent } from "./faq-content";
import { Locale } from "./locales";
import { siteConfig } from "./site";
import { socialLinks } from "./social-links";

const businessId = `${siteConfig.url}/#localbusiness`;
const personId = `${siteConfig.url}/#sarita-shakti`;

const localizedBusiness: Record<
  Locale,
  { name: string; jobTitle: string; services: string[] }
> = {
  es: {
    name: "Sarita Shakti - Astrología Psicológica Barcelona",
    jobTitle: "Astróloga psicológica y profesora de yoga terapéutico",
    services: [
      "Astrología psicológica",
      "Carta natal",
      "Coaching astrológico",
      "Yoga terapéutico",
      "Formación",
    ],
  },
  it: {
    name: "Sarita Shakti - Astrologia psicologica Milano e Barcellona",
    jobTitle: "Astrologa psicologica e insegnante di yoga terapeutico",
    services: [
      "Astrologia psicologica",
      "Carta natale",
      "Coaching astrologico",
      "Yoga terapeutico",
      "Formazione",
    ],
  },
  en: {
    name: "Sarita Shakti - Psychological Astrology Barcelona and Milan",
    jobTitle: "Psychological astrologer and therapeutic yoga teacher",
    services: [
      "Psychological astrology",
      "Natal chart reading",
      "Astrological coaching",
      "Therapeutic yoga",
      "Training",
    ],
  },
};

export function buildHomeStructuredData(locale: Locale) {
  const localized = localizedBusiness[locale];
  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: localized.name,
    url: siteConfig.url,
    telephone: "+34 665 25 98 59",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer de Salomó ben Adret 4",
      addressLocality: "Barcelona",
      addressRegion: "Catalunya",
      postalCode: "08001",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3825,
      longitude: 2.1769,
    },
    areaServed: ["Barcelona", "Milano", "Online"],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      reviewCount: 170,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [socialLinks.instagram, socialLinks.youtube],
  };

  const person = {
    "@type": "Person",
    "@id": personId,
    name: "Sarita Shakti",
    jobTitle: localized.jobTitle,
    worksFor: { "@id": businessId },
    sameAs: [socialLinks.instagram, socialLinks.youtube],
  };

  const services = localized.services.map((name) => ({
    "@type": "Service",
    name,
    provider: { "@id": businessId },
    areaServed: ["Barcelona", "Milano", "Online"],
    inLanguage: locale,
    url: `${siteConfig.url}/${locale}/coaching`,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, person, ...services],
  };
}

export function buildFaqStructuredData(locale: Locale) {
  const faq = faqContent[locale];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
