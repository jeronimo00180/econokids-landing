"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { Carousel, CarouselSlide } from "@/components/ui/carousel";

// Images du carrousel (WebP optimisées via npm run optimize-images)
const heroSlides: CarouselSlide[] = [
  {
    src: "/images/carousel/dashboard.webp",
    alt: "Dashboard Econo'kids - Vue principale",
    legend: "Son tableau de bord personnel",
    subtext: "Argent disponible, projets en cours, progression... tout en un coup d'oeil",
  },
  {
    src: "/images/carousel/calcul.webp",
    alt: "Calcul des impôts dans Econo'kids",
    legend: "Les impôts ? Comme dans la vraie vie !",
    subtext: "Il découvre que l'État prélève une partie du salaire",
  },
  {
    src: "/images/carousel/exercice.webp",
    alt: "Exercice pratique dans Econo'kids",
    legend: "Comprendre le lien entre émotions et argent",
    subtext: "Des situations du quotidien pour apprendre à faire les bons choix",
  },
  {
    src: "/images/carousel/epargne.webp",
    alt: "Conseils d'épargne dans Econo'kids",
    legend: "On l'aide à épargner intelligemment",
    subtext: "Des conseils personnalisés et des montants préconisés",
  },
  {
    src: "/images/carousel/evenement.webp",
    alt: "Événement surprise dans Econo'kids",
    legend: "La vie réserve des surprises !",
    subtext: "Bonnes ou mauvaises... il apprend à s'adapter",
  },
  {
    src: "/images/carousel/dashboard-parent.webp",
    alt: "Dashboard parent Econo'kids",
    legend: "Vous suivez tout depuis votre espace",
    subtext: "Progression, badges obtenus, calculs réussis... en temps réel",
  },
];

export function Hero() {
  const posthog = usePostHog();

  const trackCTA = (ctaName: string) => {
    posthog?.capture("cta_clicked", {
      cta_name: ctaName,
      cta_location: "hero",
    });
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary-50 to-white py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Contenu texte */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              À 10 ans, apprenez-lui à gérer son argent{" "}
              <span className="text-primary">
                en s&apos;amusant
              </span>
            </h1>

            <p className="text-lg font-medium text-foreground">
              Ce que vous avez mis 20 ans à comprendre, il l&apos;apprendra en jouant.
            </p>

            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              Econo&apos;kids transforme l&apos;argent de poche en jeu : une simulation de vie 100% sécurisée pour les 9-12 ans. Sans carte bancaire réelle.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-success" />
                <span>Conforme RGPD</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-success" />
                <span>Hébergement France</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-success" />
                <span>Sans publicité</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="xl" asChild>
                <a
                  href="https://app.econokids.fr/inscription"
                  onClick={() => trackCTA("essai_gratuit_hero")}
                >
                  Démarrer l&apos;Essai Gratuit de 14 Jours
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a
                  href="#fonctionnalites"
                  onClick={() => trackCTA("voir_fonctionnalites")}
                >
                  Voir comment ça marche
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Satisfait ou remboursé 30 jours. Aucun engagement. <strong className="text-foreground">Aucune carte bancaire requise pour l&apos;essai.</strong>
            </p>
          </div>

          {/* Carrousel d'images */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <Carousel
                slides={heroSlides}
                autoPlay={true}
                autoPlayInterval={5000}
                showArrows={true}
                showDots={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
