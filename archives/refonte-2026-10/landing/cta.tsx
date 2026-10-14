"use client";

import { Button } from "@/components/ui/button";
import { Shield, Clock, CreditCard } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import {
  COOKIE_PREFERENCES_KEY,
  captureConsentedEvent,
  forwardStoredAttribution,
} from "@/lib/analytics-consent.mjs";
import type { MouseEvent } from "react";

export function CTA() {
  const posthog = usePostHog();

  const trackCTA = (event: MouseEvent<HTMLAnchorElement>) => {
    captureConsentedEvent(posthog, localStorage.getItem(COOKIE_PREFERENCES_KEY), "cta_clicked", {
      cta_name: "essai_gratuit_bottom",
      cta_location: "cta_section",
    });
    forwardStoredAttribution(event.currentTarget, window.localStorage);
  };

  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div className="rounded-2xl bg-linear-to-br from-primary to-primary-700 px-6 py-10 md:py-12 text-center text-white">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Prêt à lui donner un avantage pour la vie ?
          </h2>

          <p className="mx-auto max-w-[600px] text-white/80 md:text-lg mb-8">
            Votre enfant pourra s&apos;entraîner à budgéter, épargner et comparer ses
            choix dans un environnement ludique. Vous suivrez sa progression
            depuis votre espace parent.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row justify-center mb-8">
            <Button
              size="xl"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a
                href="https://app.econokids.fr/inscription"
                onClick={trackCTA}
              >
                Démarrer l&apos;essai gratuit de 14 jours
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>14 jours d&apos;essai sans carte</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Annulable à tout moment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
