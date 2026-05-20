import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "@/components/nav-menu";
import { SocialLinks } from "@/components/social-links";
import { Locale, localeLabels, locales } from "@/lib/locales";

const navItems = [
  { href: "", label: { it: "Home", es: "Inicio", en: "Home" } },
  { href: "coaching", label: { it: "Servizi", es: "Servicios", en: "Services" } },
  {
    href: "training",
    label: {
      it: "Formazione in presenza",
      es: "Formación presencial",
      en: "In-person training",
    },
  },
  { href: "blog", label: { it: "Blog", es: "Blog", en: "Blog" } },
  { href: "about", label: { it: "Contatto", es: "Contacto", en: "Contact" } },
];

const skipLabels: Record<Locale, string> = {
  it: "Salta al contenuto",
  es: "Saltar al contenido",
  en: "Skip to content",
};

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
            <Link key={item.href} href={`/${locale}${item.href ? `/${item.href}` : ""}`}>
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="header-end">
          <SocialLinks className="header-social-links" compact />
          <nav className="language-nav" aria-label="Language navigation">
            {locales.map((language) => (
              <Link
                key={language}
                aria-current={language === locale ? "page" : undefined}
                href={`/${language}`}
              >
                {localeLabels[language].slice(0, 2)}
              </Link>
            ))}
          </nav>
          <NavMenu locale={locale} />
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <SocialLinks className="footer-social-links" />
        <p>© Sarita Shakti</p>
      </footer>
    </div>
  );
}
