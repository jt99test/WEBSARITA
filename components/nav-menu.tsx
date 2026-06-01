"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Locale, localeLabels, locales } from "@/lib/locales";
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

export function NavMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className="nav-hamburger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`hamburger-bar ${open ? "bar-open-1" : ""}`} />
        <span className={`hamburger-bar ${open ? "bar-open-2" : ""}`} />
        <span className={`hamburger-bar ${open ? "bar-open-3" : ""}`} />
      </button>

      {open && (
        <>
          <div
            className="nav-backdrop"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav className="nav-drawer" aria-label="Mobile navigation">
            <div className="nav-drawer-head">
              <span className="nav-drawer-logo-mark" aria-label="Sarita Shakti">
                S
              </span>
              <button
                className="nav-drawer-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <ul className="nav-drawer-links">
              {navItems.map((item) => (
                <li key={"route" in item ? item.route : item.href}>
                  <Link
                    href={
                      item.route
                        ? `/${locale}/${getLocalizedPagePath(locale, item.route)}`
                        : `/${locale}${item.href ? `/${item.href}` : ""}`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-drawer-langs">
              {locales.map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}`}
                  aria-current={lang === locale ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {localeLabels[lang].slice(0, 2)}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
}
