"use client";

import { Carousel, CarouselSlide } from "@/components/ui/carousel";

// TODO: Remplacer par vos vraies captures d'écran
const previewSlides: CarouselSlide[] = [
  {
    src: "/images/dashboard-preview.png",
    alt: "Dashboard élève Econo'kids",
    legend: "Un tableau de bord ludique et intuitif",
    subtext: "L'élève visualise son argent, ses projets, sa progression",
  },
  {
    src: "/images/carousel/choix-metier.png",
    alt: "Choix du métier dans Econo'kids",
    legend: "Chaque élève choisit son métier",
    subtext: "Vétérinaire, pompier, boulanger... chaque métier a son salaire réaliste",
  },
  {
    src: "/images/carousel/facture.png",
    alt: "Calcul de facture dans Econo'kids",
    legend: "Des calculs concrets : loyer, courses, factures",
    subtext: "L'élève découvre les charges de la vie quotidienne",
  },
  {
    src: "/images/carousel/epargne.png",
    alt: "Projets d'épargne dans Econo'kids",
    legend: "Épargner pour un objectif",
    subtext: "Vélo, console, voyage... apprendre à se fixer des objectifs",
  },
  {
    src: "/images/carousel/evenement.png",
    alt: "Événement surprise dans Econo'kids",
    legend: "Des événements surprises",
    subtext: "Bonus, imprévus... la vie réserve des surprises !",
  },
  {
    src: "/images/carousel/dashboard-enseignant.png",
    alt: "Dashboard enseignant Econo'kids",
    legend: "Un tableau de bord enseignant complet",
    subtext: "Suivi par élève, par classe, progression détaillée",
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
