"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { usePostHog } from "posthog-js/react";

const features = [
  "Jusqu'à 3 enfants",
  "Simulation budgétaire complète (12 mois virtuels)",
  "40 cours pédagogiques",
  "200+ calculs avec système d'aide",
  "9 badges à débloquer",
  "Dashboard parent",
  "Mises à jour incluses",
  "Support par email",
  "Données sécurisées (RGPD strict)",
];

export function Pricing() {
  const posthog = usePostHog();

  const trackCTA = () => {
    posthog?.capture("cta_clicked", {
      cta_name: "essai_gratuit_pricing",
      cta_location: "pricing_section",
    });
  };

  return (
    <section id="tarifs" className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Un investissement pour toute sa vie
          </h2>
          <p className="text-lg text-muted-foreground">
            Moins qu&apos;un café par semaine pour des compétences qui dureront toute sa vie.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-lg mx-auto">
          <Card className="border-2 border-primary">
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl">Abonnement Famille</CardTitle>
              <CardDescription>
                Accès complet pour toute la famille
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              {/* Prix */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold">4,99€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  ou <strong>49€/an</strong> (économisez 2 mois)
                </p>
              </div>

              {/* Features list */}
              <ul className="space-y-3 text-left">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button size="xl" className="w-full" asChild>
                <a
                  href="https://app.econokids.fr/inscription"
                  onClick={trackCTA}
                >
                  Essayer 14 jours gratuitement
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                14 jours d&apos;essai gratuit · Satisfait ou remboursé 30 jours · Annulable à tout moment
              </p>
            </CardFooter>
          </Card>
        </div>

      </div>
    </section>
  );
}
