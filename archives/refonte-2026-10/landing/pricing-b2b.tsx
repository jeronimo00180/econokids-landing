import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const inclus = [
  "Parcours pédagogiques pour les élèves",
  "Tableaux de bord enseignant et collectivité",
  "Accès depuis un navigateur récent",
  "Support par email",
  "Mesures de protection des données documentées",
  "Import des listes d'élèves",
];

export function PricingB2B() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Une offre définie selon votre projet
          </h2>
          <p className="text-lg text-muted-foreground">
            Le nombre de classes, la durée et l&apos;accompagnement sont précisés
            dans un devis avant tout engagement.
          </p>
        </div>

        {/* Inclus */}
        <div className="max-w-3xl mx-auto rounded-xl border border-border bg-white p-6 shadow-sm">
          <h3 className="font-semibold mb-4 text-center">Le périmètre disponible :</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inclus.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <a href="/contact">Demander un devis personnalisé</a>
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          La tarification B2B n&apos;est engagée qu&apos;après acceptation d&apos;un devis
          détaillant le coût total et les services retenus.
        </p>
      </div>
    </section>
  );
}
