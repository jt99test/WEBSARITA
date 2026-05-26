import { Locale } from "./locales";
import { siteConfig } from "./site";
import { socialLinks } from "./social-links";

const businessId = `${siteConfig.url}/#localbusiness`;
const personId = `${siteConfig.url}/#sarita-shakti`;

export function buildHomeStructuredData(locale: Locale) {
  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: "Sarita Shakti — Astrología Psicológica Barcelona",
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
    areaServed: "Barcelona",
    priceRange: "€€",
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
    jobTitle: "Astróloga Psicológica y Profesora de Yoga Terapéutico",
    worksFor: { "@id": businessId },
    sameAs: [socialLinks.instagram, socialLinks.youtube],
  };

  const services = [
    "Astrología Psicológica",
    "Carta Natal",
    "Coaching Astrológico",
    "Yoga Terapéutico",
    "Formación",
  ].map((name) => ({
    "@type": "Service",
    name,
    provider: { "@id": businessId },
    areaServed: "Barcelona",
    inLanguage: locale,
    url: `${siteConfig.url}/${locale}/coaching`,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, person, ...services],
  };
}
