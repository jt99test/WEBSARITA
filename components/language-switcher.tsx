"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, localeLabels, locales } from "@/lib/locales";
import { getLocalizedPagePath, resolvePageRoute } from "@/lib/page-routes";

type LanguageSwitcherProps = {
  locale: Locale;
};

function getLanguageHref(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0];
  const firstPathSegment = segments[1];

  if (!locales.includes(currentLocale as Locale) || !firstPathSegment) {
    return `/${targetLocale}`;
  }

  if (firstPathSegment === "blog") {
    return segments[2] ? `/${targetLocale}/blog` : `/${targetLocale}/blog`;
  }

  const route = resolvePageRoute(currentLocale as Locale, firstPathSegment);

  if (!route) {
    return `/${targetLocale}`;
  }

  return `/${targetLocale}/${getLocalizedPagePath(targetLocale, route)}`;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? `/${locale}`;

  return (
    <nav className="language-nav" aria-label="Language navigation">
      {locales.map((language) => (
        <Link
          key={language}
          aria-current={language === locale ? "page" : undefined}
          href={getLanguageHref(pathname, language)}
        >
          {localeLabels[language].slice(0, 2)}
        </Link>
      ))}
    </nav>
  );
}
