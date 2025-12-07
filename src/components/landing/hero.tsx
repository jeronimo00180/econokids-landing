import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--primary-50)] to-white py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Contenu texte */}
          <div className="flex flex-col justify-center space-y-6">
            <Badge variant="secondary" className="w-fit">
              Première application française
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              À 10 ans, il peut déjà apprendre{" "}
              <span className="text-[var(--primary)]">
                ce que vous avez mis 20 ans à comprendre.
              </span>
            </h1>

            <p className="max-w-[600px] text-lg text-[var(--muted-foreground)] md:text-xl">
              Econo&apos;kids apprend aux enfants du CM1 à la 6ème à gérer un budget,
              épargner et faire des choix financiers intelligents. En jouant.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[var(--success)]" />
                <span>Conforme RGPD</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[var(--success)]" />
                <span>Hébergement France</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[var(--success)]" />
                <span>Sans publicité</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="xl" asChild>
                <a href="https://app.econokids.fr/inscription">
                  Commencer maintenant
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#fonctionnalites">Voir comment ça marche</a>
              </Button>
            </div>

            <p className="text-sm text-[var(--muted-foreground)]">
              14 jours d&apos;essai gratuit · Satisfait ou remboursé 30 jours · Sans engagement
            </p>
          </div>

          {/* Image/Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Screenshot du dashboard */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)]">
                <Image
                  src="/images/dashboard-preview-.png"
                  alt="Dashboard Econo'kids - Interface de simulation budgétaire pour enfants"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-200)] flex items-center justify-center text-xs">👧</div>
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-300)] flex items-center justify-center text-xs">👦</div>
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-400)] flex items-center justify-center text-xs">👧</div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">CM1 / CM2 / 6ème</p>
                    <p className="text-xs text-[var(--muted-foreground)]">9-12 ans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
