import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "@/components/about-page";
import { CoachingPage } from "@/components/coaching-page";
import { RetreatsPage } from "@/components/retreats-page";
import { isLocale } from "@/lib/locales";
import { pageContent, pageSlugs, PageSlug } from "@/lib/page-content";
import { buildPageMetadata } from "@/lib/site";

type BasicPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

function isPageSlug(value: string): value is PageSlug {
  return pageSlugs.includes(value as PageSlug);
}

export function generateStaticParams() {
  return pageSlugs.flatMap((slug) =>
    ["it", "es", "en"].map((locale) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: BasicPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isPageSlug(slug)) {
    return {};
  }

  const content = pageContent[slug][locale];

  return buildPageMetadata(locale, {
    title: content.title,
    description: content.intro,
    path: slug,
  });
}

export default async function BasicPage({ params }: BasicPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isPageSlug(slug)) {
    notFound();
  }

  const content = pageContent[slug][locale];

  if (slug === "about") {
    return <AboutPage locale={locale} />;
  }

  if (slug === "coaching") {
    return <CoachingPage locale={locale} />;
  }

  if (slug === "retreats") {
    return <RetreatsPage locale={locale} />;
  }

  return (
    <section className="page-section">
      <div className="page-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="section-title">{content.title}</h1>
        <p className="page-intro">{content.intro}</p>
        {content.note ? <p className="status-note">{content.note}</p> : null}
      </div>
    </section>
  );
}
