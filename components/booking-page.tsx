import Link from "next/link";
import { Locale } from "@/lib/locales";

type BookingContent = {
  eyebrow: string;
  title: string;
  intro: string;
  embedTitle: string;
  pendingTitle: string;
  pendingText: string;
  openCalendly: string;
  contactFallback: string;
  sideNote: string;
};

const content: Record<Locale, BookingContent> = {
  it: {
    eyebrow: "Booking",
    title: "Prenota astrologia psicologica online",
    intro:
      "Scegli l'orario più adatto e prenota direttamente da Calendly. Se non trovi disponibilità, puoi scrivere a Sarita per coordinare un'alternativa.",
    embedTitle: "Calendly booking",
    pendingTitle: "Calendly è quasi pronto.",
    pendingText:
      "Aggiungi il link dell'evento Calendly nelle variabili del sito per attivare il calendario incorporato.",
    openCalendly: "Apri Calendly",
    contactFallback: "Contatta Sarita",
    sideNote: "Se preferisci, scrivi direttamente a Sarita per coordinare orario e formato della sessione.",
  },
  es: {
    eyebrow: "Booking",
    title: "Reserva astrología psicológica en Barcelona",
    intro:
      "Elige el horario que mejor te encaje y reserva directamente desde Calendly. Si no encuentras disponibilidad, puedes escribir a Sarita para coordinar una alternativa.",
    embedTitle: "Reservas Calendly",
    pendingTitle: "Calendly está casi listo.",
    pendingText:
      "Añade el enlace del evento de Calendly en las variables del sitio para activar el calendario integrado.",
    openCalendly: "Abrir Calendly",
    contactFallback: "Contactar a Sarita",
    sideNote: "Si prefieres, escríbele directamente a Sarita para coordinar horario y formato de la sesión.",
  },
  en: {
    eyebrow: "Booking",
    title: "Book psychological astrology in Barcelona",
    intro:
      "Choose the time that works best and book directly through Calendly. If you do not find availability, you can contact Sarita to coordinate another option.",
    embedTitle: "Calendly booking",
    pendingTitle: "Calendly is almost ready.",
    pendingText:
      "Add the Calendly event link to the site environment variables to activate the embedded calendar.",
    openCalendly: "Open Calendly",
    contactFallback: "Contact Sarita",
    sideNote: "If you prefer, write directly to Sarita to coordinate the time and format of your session.",
  },
};

function getCalendlyUrl() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  if (!calendlyUrl) {
    return null;
  }

  let url: URL;

  try {
    url = new URL(calendlyUrl);
  } catch {
    return null;
  }

  if (!url.searchParams.has("hide_gdpr_banner")) {
    url.searchParams.set("hide_gdpr_banner", "1");
  }
  if (!url.searchParams.has("background_color")) {
    url.searchParams.set("background_color", "080d1a");
  }
  if (!url.searchParams.has("text_color")) {
    url.searchParams.set("text_color", "f5f0e8");
  }
  if (!url.searchParams.has("primary_color")) {
    url.searchParams.set("primary_color", "c9a96e");
  }

  return url.toString();
}

export function BookingPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const calendlyUrl = getCalendlyUrl();

  return (
    <section className="booking-section">
      <div className="booking-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="section-title">{copy.title}</h1>
        <p>{copy.intro}</p>
      </div>

      <div className="booking-layout">
        <div className="panel booking-embed-panel">
          {calendlyUrl ? (
            <iframe
              title={copy.embedTitle}
              src={calendlyUrl}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="booking-pending">
              <p className="eyebrow">{copy.eyebrow}</p>
              <h2>{copy.pendingTitle}</h2>
              <p>{copy.pendingText}</p>
            </div>
          )}
        </div>

        <aside className="booking-side-note">
          <div>
            <span>01</span>
            <p>{copy.sideNote}</p>
          </div>
          <div className="booking-side-actions">
            {calendlyUrl ? (
              <Link className="ghost-gold-button" href={calendlyUrl} target="_blank" rel="noreferrer">
                {copy.openCalendly}
              </Link>
            ) : null}
            <Link className="ghost-gold-button" href={`/${locale}/about`}>
              {copy.contactFallback}
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
