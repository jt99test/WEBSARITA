"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "@/components/home-v4.module.css";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { homeV4Content } from "@/lib/home-v4-content";
import { Locale } from "@/lib/locales";
import { getLocalizedPagePath } from "@/lib/page-routes";
import { serviceKeys } from "@/lib/service-pages-content";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const locationLabels: Record<Locale, { menu: string; barcelona: string; milan: string }> = {
  es: { menu: "Ubicaciones", barcelona: "Barcelona", milan: "Milán" },
  it: { menu: "Sedi", barcelona: "Barcellona", milan: "Milano" },
  en: { menu: "Locations", barcelona: "Barcelona", milan: "Milan" },
};

export function MobileNav({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const pathname = usePathname() ?? "";
  const content = homeV4Content[locale];
  const locations = locationLabels[locale];
  const inMilanTree = locale === "it" || /milan|milano/i.test(pathname);
  const trainingHref = `/${locale}/${getLocalizedPagePath(
    locale,
    inMilanTree ? "astrologyTraining" : "astrologyTrainingBarcelona",
  )}`;
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={styles.burger}
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? (
            <>
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </>
          ) : (
            <>
              <line x1="3.5" y1="6.5" x2="20.5" y2="6.5" />
              <line x1="3.5" y1="12" x2="20.5" y2="12" />
              <line x1="3.5" y1="17.5" x2="20.5" y2="17.5" />
            </>
          )}
        </svg>
      </button>

      {open && mounted
        ? createPortal(
            <div className={styles.mobilePanel}>
          <div className={styles.mobileGroup}>
            <span className={styles.mobileGroupTitle}>{content.nav.sessions}</span>
            {content.services.cards.map((card, index) => (
              <Link
                key={card.title}
                href={`/${locale}/${getLocalizedPagePath(locale, serviceKeys[index])}`}
                onClick={close}
              >
                {card.title}
              </Link>
            ))}
            <Link href={`/${locale}/coaching`} onClick={close}>
              {content.nav.allServices}
            </Link>
          </div>
          <div className={styles.mobileGroup}>
            <span className={styles.mobileGroupTitle}>{locations.menu}</span>
            <Link href={`/${locale}`} onClick={close}>
              {locations.barcelona}
            </Link>
            <Link
              href={`/${locale}/${getLocalizedPagePath(locale, "psychologicalAstrologyMilan")}`}
              onClick={close}
            >
              {locations.milan}
            </Link>
          </div>
          <div className={styles.mobileGroup}>
            <Link href={trainingHref} onClick={close}>
              {content.nav.training}
            </Link>
            <Link href={`/${locale}/about`} onClick={close}>
              {content.nav.about}
            </Link>
            <Link href={`/${locale}/blog`} onClick={close}>
              {content.footer.blog}
            </Link>
            <Link href={`/${locale}/${getLocalizedPagePath(locale, "faq")}`} onClick={close}>
              {content.nav.faq}
            </Link>
          </div>
          <a
            className={`${styles.btn} ${styles.btnPrimary}`}
            href={buildWhatsAppLink(content.whatsappMessages.consult)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} />
            {content.whatsappStrip.cta}
          </a>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
