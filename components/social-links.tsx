import Link from "next/link";
import { socialLinks } from "@/lib/social-links";

type SocialLinksProps = {
  className?: string;
  showAstrology?: boolean;
};

const iconProps = {
  "aria-hidden": true,
  focusable: false,
  viewBox: "0 0 24 24",
} as const;

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.5 12a31 31 0 0 0 .5 3.8 3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-3.8 31 31 0 0 0-.5-3.8Z" />
      <path d="m10 15 5-3-5-3v6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4.8 19.2 6 15.7a7.7 7.7 0 1 1 2.6 2.4l-3.8 1.1Z" />
      <path d="M9.2 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.4.5c-.1.1-.2.3-.1.5.4.9 1.2 1.8 2.3 2.3.2.1.4 0 .5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.3.3.6-.1.6-.5 1.5-1.2 1.8-.8.4-2.6.1-4.4-1.4-1.9-1.5-3.4-3.8-3.3-5.1 0-.5.4-1.2.7-1.3Z" />
    </svg>
  );
}

function AstrologyIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5v17M3.5 12h17M6 6l12 12M18 6 6 18" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function SocialLinks({ className = "", showAstrology = true }: SocialLinksProps) {
  const links = [
    {
      href: socialLinks.instagram,
      label: "Instagram",
      icon: <InstagramIcon />,
    },
    {
      href: socialLinks.youtube,
      label: "YouTube",
      icon: <YouTubeIcon />,
    },
    {
      href: socialLinks.whatsapp,
      label: "WhatsApp",
      icon: <WhatsAppIcon />,
    },
    ...(showAstrology
      ? [
          {
            href: socialLinks.astrology,
            label: "Sarita Astrology",
            icon: <AstrologyIcon />,
          },
        ]
      : []),
  ];

  return (
    <div className={`social-links ${className}`}>
      {links.map((link) => (
        <Link
          key={link.label}
          className="social-link"
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          title={link.label}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
