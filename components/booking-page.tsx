import Link from "next/link";
import { Locale } from "@/lib/locales";

type BookingContent = {
  eyebrow: string;
  title: string;
  intro: string;
  embedTitle: string;
  pendingTitle: string;
  pendingText: string;
  openBookingCalendar: string;
  contactFallback: string;
  sideNote: string;
};

const googleCalendarAppointmentUrl =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_APPOINTMENT_URL ??
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0uq8bDwYLyhN860cb5nHzuQxHwA7M_4L0EJJylyJKazghQzP_T021xRUNDCw3VRyJPKsiUoQhy?gv=true";

const content: Record<Locale, BookingContent> = {
  it: {
    eyebrow: "Booking",
    title: "Prenota astrologia psicologica online",
    intro:
      "Scegli l'orario più adatto e prenota direttamente dal calendario di Sarita. Se non trovi disponibilità, puoi scriverle per coordinare un'alternativa.",
    embedTitle: "Calendario prenotazioni Sarita Shakti",
    pendingTitle: "Il calendario prenotazioni è quasi pronto.",
    pendingText:
      "Aggiungi il link di Google Calendar Appointment Schedule nelle variabili del sito per attivare il calendario incorporato.",
    openBookingCalendar: "Apri calendario",
    contactFallback: "Contatta Sarita",
    sideNote: "Se preferisci, scrivi direttamente a Sarita per coordinare orario e formato della sessione.",
  },
  es: {
    eyebrow: "Booking",
    title: "Reserva astrología psicológica en Barcelona",
    intro:
      "Elige el horario que mejor te encaje y reserva directamente desde el calendario de Sarita. Si no encuentras disponibilidad, puedes escribirle para coordinar una alternativa.",
    embedTitle: "Calendario de reservas Sarita Shakti",
    pendingTitle: "El calendario de reservas está casi listo.",
    pendingText:
      "Añade el enlace de Google Calendar Appointment Schedule en las variables del sitio para activar el calendario integrado.",
    openBookingCalendar: "Abrir calendario",
    contactFallback: "Contactar a Sarita",
    sideNote: "Si prefieres, escribe directamente a Sarita para coordinar horario y formato de la sesión.",
  },
  en: {
    eyebrow: "Booking",
    title: "Book psychological astrology in Barcelona",
    intro:
      "Choose the time that works best and book directly through Sarita's calendar. If you do not find availability, you can contact her to coordinate another option.",
    embedTitle: "Sarita Shakti booking calendar",
    pendingTitle: "The booking calendar is almost ready.",
    pendingText:
      "Add the Google Calendar Appointment Schedule link to the site environment variables to activate the embedded calendar.",
    openBookingCalendar: "Open calendar",
    contactFallback: "Contact Sarita",
    sideNote: "If you prefer, write directly to Sarita to coordinate the time and format of your session.",
  },
};

function getGoogleCalendarAppointmentUrl() {
  if (!googleCalendarAppointmentUrl) {
    return null;
  }

  let url: URL;

  try {
    url = new URL(googleCalendarAppointmentUrl);
  } catch {
    return null;
  }

  return url.toString();
}

export function BookingPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const bookingCalendarUrl = getGoogleCalendarAppointmentUrl();

  return (
    <section className="booking-section">
      <div className="booking-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="section-title">{copy.title}</h1>
        <p>{copy.intro}</p>
      </div>

      <div className="booking-layout">
        <div className="panel booking-embed-panel">
          {bookingCalendarUrl ? (
            <iframe
              title={copy.embedTitle}
              src={bookingCalendarUrl}
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
            {bookingCalendarUrl ? (
              <a className="ghost-gold-button" href={bookingCalendarUrl} target="_blank" rel="noreferrer">
                {copy.openBookingCalendar}
              </a>
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
