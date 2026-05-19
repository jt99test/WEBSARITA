export const locales = ["it", "es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export const localeLabels: Record<Locale, string> = {
  it: "Italiano",
  es: "Español",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
