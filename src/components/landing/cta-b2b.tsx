import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CTAB2B() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-linear-to-br from-primary to-primary-600 px-6 py-12 md:px-12 md:py-16 text-center text-white">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
              Prêt à former les citoyens de demain ?
            </h2>

            <p className="text-white/90 md:text-lg mb-8 max-w-xl mx-auto">
              Chaque année scolaire sans éducation financière est une génération
              d&apos;élèves non préparée. Prenez 30 minutes pour découvrir
              Econo&apos;kids.
            </p>

            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="/contact">Demander une démo gratuite</a>
            </Button>

            {/* Contact direct */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-4">
                Vous préférez nous contacter directement ?
              </p>
              <a
                href="mailto:support@econokids.fr"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                support@econokids.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
