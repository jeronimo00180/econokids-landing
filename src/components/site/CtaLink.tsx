"use client";

import { usePostHog } from "posthog-js/react";
import type { MouseEvent, ReactNode } from "react";
import {
  COOKIE_PREFERENCES_KEY,
  captureConsentedEvent,
  forwardStoredAttribution,
} from "@/lib/analytics-consent.mjs";

type Props = {
  href: string;
  nom: string;
  emplacement: string;
  className?: string;
  children: ReactNode;
};

// Lien d'appel à l'action : mesure le clic (seulement avec consentement) et transmet l'origine
// de la visite (UTM) vers l'application.
export function CtaLink({ href, nom, emplacement, className, children }: Props) {
  const posthog = usePostHog();

  const suivre = (event: MouseEvent<HTMLAnchorElement>) => {
    try {
      captureConsentedEvent(posthog, window.localStorage.getItem(COOKIE_PREFERENCES_KEY), "cta_clicked", {
        cta_name: nom,
        cta_location: emplacement,
      });
      if (href.startsWith("https://app.econokids.fr")) {
        forwardStoredAttribution(event.currentTarget, window.localStorage);
      }
    } catch (erreur) {
      // La mesure ne doit jamais empêcher la navigation.
      console.warn("Mesure du clic impossible", erreur);
    }
  };

  return (
    <a href={href} className={className} onClick={suivre}>
      {children}
    </a>
  );
}
