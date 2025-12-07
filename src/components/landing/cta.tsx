import { Button } from "@/components/ui/button";
import { Shield, Clock, CreditCard } from "lucide-react";

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-700)] px-6 py-16 text-center text-white">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Votre enfant mérite d&apos;être préparé.
            <br />
            Commencez aujourd&apos;hui.
          </h2>

          <p className="mx-auto max-w-[600px] text-white/80 md:text-lg mb-8">
            Dans 10 ans, votre enfant vous remerciera. Pas pour les jouets, pas
            pour les vacances. Pour lui avoir appris à gérer son argent. Cette
            compétence changera sa vie.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row justify-center mb-8">
            <Button
              size="xl"
              variant="secondary"
              className="bg-white text-[var(--primary)] hover:bg-white/90"
              asChild
            >
              <a href="https://app.econokids.fr/inscription">
                Commencer maintenant - 9,90€/mois
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
              <span>Satisfait ou remboursé 30 jours</span>
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
