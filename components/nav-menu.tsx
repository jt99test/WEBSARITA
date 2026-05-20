"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Locale, localeLabels, locales } from "@/lib/locales";

const navItems = [
  { href: "", label: { it: "Home", es: "Inicio", en: "Home" } },
  { href: "coaching", label: { it: "Coaching", es: "Coaching", en: "Coaching" } },
  { href: "training", label: { it: "Training", es: "Formación", en: "Training" } },
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
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href ? `/${item.href}` : ""}`}
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
