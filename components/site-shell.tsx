import Link from "next/link";
import { Locale, localeLabels, locales } from "@/lib/locales";

const navItems = [
  { href: "", label: { it: "Home", es: "Inicio", en: "Home" } },
  { href: "coaching", label: { it: "Coaching", es: "Coaching", en: "Coaching" } },
  { href: "retreats", label: { it: "Ritiri", es: "Retiros", en: "Retreats" } },
  { href: "training", label: { it: "Training", es: "Formación", en: "Training" } },
  { href: "blog", label: { it: "Blog", es: "Blog", en: "Blog" } },
  { href: "about", label: { it: "Contatto", es: "Contacto", en: "Contact" } },
];

type SiteShellProps = {
  children: React.ReactNode;
  locale: Locale;
};

export function SiteShell({ children, locale }: SiteShellProps) {
  return (
    <div className="site-background min-h-screen text-ivory">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="brand-mark" href={`/${locale}`} aria-label="Sarita Shakti home">
          <span>Sarita</span>
          <span>Shakti</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href ? `/${item.href}` : ""}`}>
              {item.label[locale]}
            </Link>
          ))}
        </nav>

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
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <p>Barcelona | Milano | Sant Pol de Mar</p>
        <p>SEO redirects and final domain mapping remain launch blockers.</p>
      </footer>
    </div>
  );
}
