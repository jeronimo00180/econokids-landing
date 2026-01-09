"use client";

import { Carousel, CarouselSlide } from "@/components/ui/carousel";

// Images du carrousel (WebP optimisées via npm run optimize-images)
const previewSlides: CarouselSlide[] = [
  {
    src: "/images/carousel/dashboard.webp",
    alt: "Dashboard élève Econo'kids",
    legend: "Un tableau de bord clair et intuitif",
    subtext: "L'élève visualise son argent, ses projets, sa progression",
  },
  {
    src: "/images/carousel/calcul.webp",
    alt: "Calcul avec aide dans Econo'kids",
    legend: "Des calculs concrets, jamais bloquants",
    subtext: "Système d'aide intégré : l'élève progresse toujours",
  },
  {
    src: "/images/carousel/exercice.webp",
    alt: "Exercice pratique dans Econo'kids",
    legend: "Émotions et argent : apprendre à faire les bons choix",
    subtext: "Des situations du quotidien pour développer l'esprit critique",
  },
  {
    src: "/images/carousel/epargne.webp",
    alt: "Conseils d'épargne dans Econo'kids",
    legend: "L'épargne expliquée et accompagnée",
    subtext: "Conseils personnalisés et montants préconisés pour chaque élève",
  },
  {
    src: "/images/carousel/association.webp",
    alt: "Don à une association dans Econo'kids",
    legend: "Sensibilisation au cyber-harcèlement",
    subtext: "Des messages positifs et éducatifs intégrés à l'expérience",
  },
  {
    src: "/images/carousel/dashboard-enseignant.webp",
    alt: "Dashboard enseignant Econo'kids",
    legend: "Tableau de bord enseignant complet",
    subtext: "Statistiques globales, progression par élève et par classe",
  },
];

export function AppPreviewB2B() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Texte */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-6">
              Découvrez l&apos;application{" "}
              <span className="text-primary">en images</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Une simulation de vie économique adaptée aux 9-12 ans. Vos élèves
              vivent une année complète : ils choisissent un métier, reçoivent
              un salaire, paient leurs charges et épargnent pour leurs projets.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium">Choisir un métier</p>
                  <p className="text-sm text-muted-foreground">
                    L&apos;élève découvre les salaires et signe son contrat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium">Gérer son budget</p>
                  <p className="text-sm text-muted-foreground">
                    Payer le loyer, les courses, les factures... avec des calculs réels
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium">Épargner et réaliser ses projets</p>
                  <p className="text-sm text-muted-foreground">
                    Se fixer un objectif et économiser pour l&apos;atteindre
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carrousel */}
          <div className="order-1 lg:order-2">
            <Carousel
              slides={previewSlides}
              autoPlay={true}
              autoPlayInterval={5000}
              showArrows={true}
              showDots={true}
              className="max-w-lg mx-auto lg:mx-0 lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
