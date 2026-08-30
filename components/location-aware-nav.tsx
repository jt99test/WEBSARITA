"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/locales";

const MILAN_PATTERN = /milan|milano/i;

/**
 * Nav link whose target depends on the visitor's location context:
 * inside the Milan tree (any URL containing "milan"/"milano"), it points to
 * the Milan variant; elsewhere, to the Barcelona variant.
 * The IT locale is Milan-first by design, so it always gets the Milan target.
 */
export function LocationAwareNavLink({
  locale,
  barcelonaHref,
  milanHref,
  label,
}: {
  locale: Locale;
  barcelonaHref: string;
  milanHref: string;
  label: string;
}) {
  const pathname = usePathname() ?? "";
  const inMilanTree = locale === "it" || MILAN_PATTERN.test(pathname);

  return <Link href={inMilanTree ? milanHref : barcelonaHref}>{label}</Link>;
}
