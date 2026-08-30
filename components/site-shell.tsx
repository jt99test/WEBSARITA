import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LocationAwareNavLink } from "@/components/location-aware-nav";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { homeV4Content } from "@/lib/home-v4-content";
import { Locale } from "@/lib/locales";
import { getLocalizedPagePath } from "@/lib/page-routes";
import { serviceKeys } from "@/lib/service-pages-content";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import styles from "./home-v4.module.css";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sarita+Shakti&query_place_id=ChIJcWydOkE5uxIRROCa9fEWRts";
const PHONE_DISPLAY = "+34 665 25 98 59";
const PHONE_TEL = "+34665259859";

const skipLabels: Record<Locale, string> = {
  it: "Salta al contenuto",
  es: "Saltar al contenido",
  en: "Skip to content",
};

const locationLabels: Record<
  Locale,
  { menu: string; barcelona: string; milan: string }
> = {
  es: { menu: "Ubicaciones", barcelona: "Barcelona", milan: "Milán" },
  it: { menu: "Sedi", barcelona: "Barcellona", milan: "Milano" },
  en: { menu: "Locations", barcelona: "Barcelona", milan: "Milan" },
};

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const content = homeV4Content[locale];

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        {skipLabels[locale]}
      </a>

      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.nav}`}>
          <Link href={`/${locale}`} className={styles.brand} aria-label="Sarita Shakti home">
            <span>
              <b>Sarita Shakti</b>
              <small>Astrología psicológica</small>
            </span>
          </Link>
          <nav className={styles.navlinks} aria-label="Primary navigation">
            <div className={styles.navDrop}>
              <Link href={`/${locale}/coaching`} className={styles.navDropTrigger}>
                {content.nav.sessions}
                <span className={styles.caret} aria-hidden="true" />
              </Link>
              <div className={styles.navMenu}>
                <div className={styles.navMenuInner}>
                  {content.services.cards.map((card, index) => (
                    <Link
                      key={card.title}
                      href={`/${locale}/${getLocalizedPagePath(locale, serviceKeys[index])}`}
                    >
                      {card.title}
                    </Link>
                  ))}
                  <Link className={styles.navMenuAll} href={`/${locale}/coaching`}>
                    {content.nav.allServices}
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.navDrop}>
              <span className={styles.navDropTrigger} tabIndex={0}>
                {locationLabels[locale].menu}
                <span className={styles.caret} aria-hidden="true" />
              </span>
              <div className={styles.navMenu}>
                <div className={styles.navMenuInner}>
                  <Link href={`/${locale}`}>{locationLabels[locale].barcelona}</Link>
                  <Link
                    href={`/${locale}/${getLocalizedPagePath(locale, "psychologicalAstrologyMilan")}`}
                  >
                    {locationLabels[locale].milan}
                  </Link>
                </div>
              </div>
            </div>
            <LocationAwareNavLink
              locale={locale}
              barcelonaHref={`/${locale}/${getLocalizedPagePath(locale, "astrologyTrainingBarcelona")}`}
              milanHref={`/${locale}/${getLocalizedPagePath(locale, "astrologyTraining")}`}
              label={content.nav.training}
            />
            <Link href={`/${locale}/about`}>{content.nav.about}</Link>
            <Link href={`/${locale}/blog`}>{content.footer.blog}</Link>
            <LanguageSwitcher locale={locale} />
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href={buildWhatsAppLink(content.whatsappMessages.consult)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={15} />
              {content.nav.whatsappCta}
            </a>
          </nav>
        </div>
        <a
          className={styles.notice}
          href={buildWhatsAppLink(content.whatsappMessages.consult)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={14} />
          {content.notice}
        </a>
      </header>

      <main id="main">{children}</main>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerGrid}`}>
          <div className={styles.footerCol}>
            <div className={styles.footerBrand}>Sarita Shakti</div>
            <p className={styles.footerTagline}>{content.footer.tagline}</p>
            <address className={styles.footerAddress}>
              Carrer de Salomó ben Adret 4
              <br />
              08001 Barcelona, España
            </address>
            <a className={styles.footerContactLink} href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            <a
              className={styles.footerContactLink}
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.footer.maps}
            </a>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerTitle}>{content.footer.servicesTitle}</div>
            {content.services.cards.map((card, index) => (
              <Link
                key={card.title}
                href={`/${locale}/${getLocalizedPagePath(locale, serviceKeys[index])}`}
              >
                {card.title}
              </Link>
            ))}
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerTitle}>{content.footer.linksTitle}</div>
            <LocationAwareNavLink
              locale={locale}
              barcelonaHref={`/${locale}/${getLocalizedPagePath(locale, "astrologyTrainingBarcelona")}`}
              milanHref={`/${locale}/${getLocalizedPagePath(locale, "astrologyTraining")}`}
              label={content.nav.training}
            />
            <Link href={`/${locale}/about`}>{content.nav.about}</Link>
            <Link href={`/${locale}/${getLocalizedPagePath(locale, "reviews")}`}>
              {content.footer.reviews}
            </Link>
            <Link href={`/${locale}/blog`}>{content.footer.blog}</Link>
            <Link href={`/${locale}/${getLocalizedPagePath(locale, "faq")}`}>
              {content.nav.faq}
            </Link>
          </div>
        </div>
        <div className={`${styles.wrap} ${styles.footerRow}`}>
          <span>{content.footer.left}</span>
          <span>{content.footer.right}</span>
        </div>
      </footer>

      <a
        className={styles.waFloat}
        href={buildWhatsAppLink(content.whatsappMessages.consult)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={content.mobileCta}
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  );
}
