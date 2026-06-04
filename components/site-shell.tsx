import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { NavMenu } from "@/components/nav-menu";
import { SocialLinks } from "@/components/social-links";
import { Locale } from "@/lib/locales";
import { getLocalizedPagePath } from "@/lib/page-routes";

type NavItem =
  | {
      href: string;
      route?: never;
      label: Record<Locale, string>;
    }
  | {
      href?: never;
      route: "reviews";
      label: Record<Locale, string>;
    };

const navItems: NavItem[] = [
  { href: "", label: { it: "Home", es: "Inicio", en: "Home" } },
  { href: "coaching", label: { it: "Servizi", es: "Servicios", en: "Services" } },
  {
    href: "training",
    label: {
      it: "Formazione",
      es: "Formación",
      en: "Training",
    },
  },
  {
    route: "reviews" as const,
    label: { it: "Recensioni", es: "Reseñas", en: "Reviews" },
  },
  { href: "blog", label: { it: "Blog", es: "Blog", en: "Blog" } },
  { href: "about", label: { it: "Contatto", es: "Contacto", en: "Contact" } },
];

const skipLabels: Record<Locale, string> = {
  it: "Salta al contenuto",
  es: "Saltar al contenido",
  en: "Skip to content",
};

const faqLabels: Record<Locale, string> = {
  it: "FAQ",
  es: "Preguntas frecuentes",
  en: "FAQ",
};

const footerCopy: Record<
  Locale,
  {
    text: string;
    booking: string;
    services: string;
    training: string;
    blog: string;
  }
> = {
  it: {
    text: "Astrologia psicologica, yoga terapeutico e formazione con Sarita Shakti.",
    booking: "Prenota",
    services: "Servizi",
    training: "Formazione",
    blog: "Blog",
  },
  es: {
    text: "Astrología psicológica, yoga terapéutico y formación con Sarita Shakti.",
    booking: "Reservar",
    services: "Servicios",
    training: "Formación",
    blog: "Blog",
  },
  en: {
    text: "Psychological astrology, therapeutic yoga, and training with Sarita Shakti.",
    booking: "Book",
    services: "Services",
    training: "Training",
    blog: "Blog",
  },
};

const copyrightYear = new Date().getFullYear();

type SiteShellProps = {
  children: React.ReactNode;
  locale: Locale;
};

export function SiteShell({ children, locale }: SiteShellProps) {
  return (
    <div className="site-background min-h-screen text-ivory">
      <a className="skip-link" href="#main">
        {skipLabels[locale]}
      </a>
      <header className="site-header">
        <Link className="brand-mark" href={`/${locale}`} aria-label="Sarita Shakti home">
          <Image
            className="brand-logo-image"
            src="/brand/sarita-logo-transparent.png"
            alt=""
            width={240}
            height={234}
            priority
          />
          <span className="brand-wordmark">
            <span>Sarita Shakti</span>
            <small>Yoga & Astrology</small>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={"route" in item ? item.route : item.href}
              href={
                item.route
                  ? `/${locale}/${getLocalizedPagePath(locale, item.route)}`
                  : `/${locale}${item.href ? `/${item.href}` : ""}`
              }
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="header-end">
          <LanguageSwitcher locale={locale} />
          <NavMenu locale={locale} />
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="site-footer-cta">
          <p>{footerCopy[locale].text}</p>
          <Link className="ghost-gold-button" href={`/${locale}/booking`}>
            {footerCopy[locale].booking}
          </Link>
        </div>
        <nav className="site-footer-links" aria-label="Footer navigation">
          <Link href={`/${locale}/coaching`}>{footerCopy[locale].services}</Link>
          <Link href={`/${locale}/training`}>{footerCopy[locale].training}</Link>
          <Link href={`/${locale}/blog`}>{footerCopy[locale].blog}</Link>
          <Link href={`/${locale}/${getLocalizedPagePath(locale, "faq")}`}>
            {faqLabels[locale]}
          </Link>
        </nav>
        <SocialLinks className="footer-social-links" />
        <p className="site-footer-meta">© {copyrightYear} Sarita Shakti</p>
      </footer>
    </div>
  );
}
