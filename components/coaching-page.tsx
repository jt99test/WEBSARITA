import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { ZodiacWheel } from "@/components/zodiac-wheel";
import styles from "@/components/service-v4.module.css";
import { homeV4Content } from "@/lib/home-v4-content";
import { Locale } from "@/lib/locales";
import { getLocalizedPagePath } from "@/lib/page-routes";
import {
  ServiceKey,
  serviceKeys,
  servicePagesContent,
  serviceSharedLabels,
} from "@/lib/service-pages-content";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const serviceImageSlug: Record<ServiceKey, string> = {
  cartaNatal: "carta-natal",
  sinastria: "sinastria",
  revolucionSolar: "revolucion",
  coachingAstrologico: "coaching",
};

const hubCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    viewService: string;
    helpLine?: string;
    ctaLabel?: string;
    cards?: Partial<Record<ServiceKey, { outcome: string; text: string; cta: string }>>;
    formacion: { eyebrow: string; title: string; text: string; cta: string };
  }
> = {
  es: {
    eyebrow: "Servicios · Barcelona y online",
    title: "Servicios de astrología psicológica en Barcelona",
    intro:
      "Elige la sesión según lo que quieras comprender: tú, una relación, el año que tienes delante o un proceso que quieres trabajar con más profundidad. Todas las sesiones pueden realizarse online o presencialmente en Barcelona.",
    viewService: "Ver servicio",
    ctaLabel: "Ayúdame a elegir por WhatsApp",
    helpLine: "Si no sabes cuál encaja contigo, cuéntame qué estás viviendo. La primera orientación es gratuita.",
    cards: {
      cartaNatal: {
        outcome: "Para entenderte a ti",
        text: "Patrones, talentos, relaciones, necesidades, contradicciones y el momento que estás atravesando.",
        cta: "Descubrir mi Carta Natal",
      },
      sinastria: {
        outcome: "Para entender una relación",
        text: "Qué os une, dónde aparecen los conflictos, qué necesita cada persona y qué dinámicas repetís juntos.",
        cta: "Entender nuestra relación",
      },
      revolucionSolar: {
        outcome: "Para entender tu próximo año",
        text: "Los temas que pueden cobrar más peso desde tu cumpleaños y las áreas de tu vida que pueden pedir atención o decisiones.",
        cta: "Ver mi próximo ciclo",
      },
      coachingAstrologico: {
        outcome: "Para trabajar algo que quieres cambiar",
        text: "Un proceso continuado cuando tienes una decisión, bloqueo o cambio que no quieres limitar a una sola sesión.",
        cta: "Ver el acompañamiento",
      },
    },
    formacion: {
      eyebrow: "Formación · Barcelona 2027",
      title: "Deja de limitarte a leer sobre astrología. Aprende a interpretar una carta de verdad.",
      text: "11 encuentros presenciales para aprender desde la base cómo leer signos, planetas, casas y aspectos hasta poder integrar una Carta Natal completa.",
      cta: "Descubrir la formación",
    },
  },
  it: {
    eyebrow: "Servizi · Milano e online",
    title: "Servizi di astrologia psicologica a Milano",
    intro:
      "Scegli la sessione in base a ciò che vuoi comprendere: te stesso, una relazione, l'anno che hai davanti o un processo che vuoi lavorare con più profondità. Tutte le sessioni possono svolgersi online o in presenza a Milano.",
    viewService: "Vedi servizio",
    ctaLabel: "Aiutami a scegliere su WhatsApp",
    helpLine: "Se non sai quale fa per te, raccontami cosa stai vivendo. Il primo orientamento è gratuito.",
    cards: {
      cartaNatal: {
        outcome: "Per capire te stesso",
        text: "Schemi, talenti, relazioni, bisogni, contraddizioni e il momento che stai attraversando.",
        cta: "Scopri la mia Carta Natale",
      },
      sinastria: {
        outcome: "Per capire una relazione",
        text: "Cosa vi unisce, dove nascono i conflitti, di cosa ha bisogno ciascuno e quali dinamiche ripetete insieme.",
        cta: "Capire la nostra relazione",
      },
      revolucionSolar: {
        outcome: "Per capire il tuo prossimo anno",
        text: "I temi che possono acquistare più peso dal tuo compleanno e le aree della vita che possono chiedere attenzione o decisioni.",
        cta: "Vedi il mio prossimo ciclo",
      },
      coachingAstrologico: {
        outcome: "Per lavorare qualcosa che vuoi cambiare",
        text: "Un processo continuativo quando hai una decisione, un blocco o un cambiamento che non vuoi limitare a una sola sessione.",
        cta: "Vedi l'accompagnamento",
      },
    },
    formacion: {
      eyebrow: "Formazione · Milano",
      title: "Smetti di limitarti a leggere di astrologia. Impara a interpretare una carta davvero.",
      text: "11 incontri in presenza per imparare dalla base a leggere segni, pianeti, case e aspetti fino a integrare una Carta Natale completa.",
      cta: "Scopri la formazione",
    },
  },
  en: {
    eyebrow: "Services · Barcelona and online",
    title: "Psychological astrology services in Barcelona",
    intro:
      "Choose the session according to what you want to understand: yourself, a relationship, the year ahead, or a process you want to work on in more depth. All sessions can take place online or in person in Barcelona.",
    viewService: "View service",
    ctaLabel: "Help me choose on WhatsApp",
    helpLine: "If you don't know which one fits you, tell me what you are living through. The first orientation is free.",
    cards: {
      cartaNatal: {
        outcome: "To understand yourself",
        text: "Patterns, talents, relationships, needs, contradictions, and the moment you are going through.",
        cta: "Discover my Birth Chart",
      },
      sinastria: {
        outcome: "To understand a relationship",
        text: "What unites you, where the conflicts appear, what each person needs, and which dynamics you repeat together.",
        cta: "Understand our relationship",
      },
      revolucionSolar: {
        outcome: "To understand your next year",
        text: "The themes that may gain weight from your birthday and the areas of life that may ask for attention or decisions.",
        cta: "See my next cycle",
      },
      coachingAstrologico: {
        outcome: "To work on something you want to change",
        text: "An ongoing process for when you have a decision, block, or change you don't want to limit to a single session.",
        cta: "See the guidance",
      },
    },
    formacion: {
      eyebrow: "Training · Barcelona 2027",
      title: "Stop just reading about astrology. Learn to actually interpret a chart.",
      text: "11 in-person meetings to learn from the ground up how to read signs, planets, houses, and aspects until you can integrate a complete birth chart.",
      cta: "Discover the training",
    },
  },
};

export function CoachingPage({ locale }: { locale: Locale }) {
  const copy = hubCopy[locale];
  const labels = serviceSharedLabels[locale];
  const home = homeV4Content[locale];
  const whatsappHref = buildWhatsAppLink(home.whatsappMessages.consult);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.title,
    itemListElement: serviceKeys.map((key, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: servicePagesContent[key][locale].title,
      url: new URL(
        `/${locale}/${getLocalizedPagePath(locale, key)}`,
        siteConfig.url,
      ).toString(),
    })),
  };

  return (
    <div className={styles.root}>
      <JsonLd data={itemListSchema} />

      <section className={styles.hero} style={{ paddingTop: "56px" }}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>{copy.eyebrow}</div>
          <h1 className={`${styles.serif} ${styles.title}`}>{copy.title}</h1>
          <p className={styles.lead}>{copy.intro}</p>
          <div className={styles.heroActions}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={15} />
              {copy.ctaLabel ?? labels.bookCta}
            </a>
          </div>
          {copy.helpLine ? (
            <p className={styles.heroCopy} style={{ marginTop: "14px", fontSize: "13.5px" }}>
              {copy.helpLine}
            </p>
          ) : null}
        </div>
      </section>

      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.wrap}>
          <div className={styles.hubList}>
            {serviceKeys.map((key, index) => {
              const service = servicePagesContent[key][locale];
              const href = `/${locale}/${getLocalizedPagePath(locale, key)}`;

              return (
                <article
                  className={`${styles.hubRow} ${index % 2 === 1 ? styles.hubRowFlip : ""}`}
                  key={key}
                >
                  <Link className={styles.hubImage} href={href}>
                    <Image
                      src={`/images/servicios/${serviceImageSlug[key]}-hero.jpg`}
                      alt={service.imageAlt}
                      width={1200}
                      height={896}
                      sizes="(max-width: 980px) 100vw, 46vw"
                      priority={index === 0}
                    />
                  </Link>
                  <div className={styles.hubBody}>
                    <div className={styles.eyebrow}>{service.title}</div>
                    <h2 className={styles.serif}>
                      <Link href={href}>{copy.cards?.[key]?.outcome ?? service.title}</Link>
                    </h2>
                    <p className={styles.hubLead}>{copy.cards?.[key]?.text ?? service.lead}</p>
                    <div className={styles.meta}>
                      <div className={styles.pill}>
                        <small>{labels.durationLabel}</small>
                        <b>{service.duration}</b>
                      </div>
                      <div className={styles.pill}>
                        <small>{labels.modeLabel}</small>
                        <b>{service.mode}</b>
                      </div>
                    </div>
                    <div className={styles.heroActions}>
                      <Link className={`${styles.btn} ${styles.btnPrimary}`} href={href}>
                        {copy.cards?.[key]?.cta ?? copy.viewService}
                      </Link>
                      <a
                        className={`${styles.btn} ${styles.btnSecondary}`}
                        href={buildWhatsAppLink(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon size={15} />
                        {labels.bookCta}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.location} motif-host`}>
        <div className="motif motif--light" style={{ right: "-160px", bottom: "-170px" }}>
          <ZodiacWheel size={500} />
        </div>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>{copy.formacion.eyebrow}</div>
          <h2 className={`${styles.serif} ${styles.title}`}>{copy.formacion.title}</h2>
          <p className={styles.lead}>{copy.formacion.text}</p>
          <div className={styles.heroActions}>
            <Link
              className={`${styles.btn} ${styles.btnLight}`}
              href={`/${locale}/${getLocalizedPagePath(
                locale,
                locale === "it" ? "astrologyTraining" : "astrologyTrainingBarcelona",
              )}`}
            >
              {copy.formacion.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
