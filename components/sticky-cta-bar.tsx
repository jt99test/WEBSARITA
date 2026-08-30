"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

/**
 * Mobile-only bottom bar with the primary WhatsApp CTA. Slides in once the
 * visitor scrolls past the hero so it never doubles the hero buttons.
 */
export function StickyCtaBar({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mobile-cta-bar" data-visible={visible}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={18} />
        {label}
      </a>
    </div>
  );
}
