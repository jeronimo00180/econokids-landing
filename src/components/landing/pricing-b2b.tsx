import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  { name: "Starter", eleves: "50-100", prix: "500€", prixEleve: "5-10€" },
  { name: "Croissance", eleves: "101-250", prix: "1 200€", prixEleve: "4,80-12€" },
  { name: "Établi", eleves: "251-500", prix: "2 500€", prixEleve: "5-10€", popular: true },
  { name: "Avancé", eleves: "501-1 000", prix: "5 000€", prixEleve: "5-10€" },
  { name: "Premium", eleves: "1 001-2 000", prix: "8 000€", prixEleve: "4-8€" },
  { name: "Métropole", eleves: "2 001-5 000", prix: "13 000€", prixEleve: "2,60-6,50€" },
];

const inclus = [
  "Accès illimité tous élèves CM1/CM2",
  "Dashboard enseignant complet",
  "Dashboard admin mairie",
  "Formation enseignants (2h visio)",
  "Support technique prioritaire",
  "Mises à jour incluses",
  "Conformité RGPD stricte",
  "Import CSV élèves",
];

export function PricingB2B() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Tarifs transparents, adaptés à votre taille
          </h2>
          <p className="text-lg text-muted-foreground">
            Plus vous avez d&apos;élèves, moins c&apos;est cher par élève.
            Contrat 3 ans : -10% supplémentaire.
          </p>
        </div>

        {/* Pricing table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full bg-white rounded-xl shadow-sm border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-semibold">Taille</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Élèves primaires</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Prix/an</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Prix/élève</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier, index) => (
                <tr
                  key={tier.name}
                  className={`border-b border-border last:border-b-0 ${
                    tier.popular ? "bg-primary-50" : ""
                  }`}
                >
                  <td className="px-4 py-3">
                    <span className="font-medium">{tier.name}</span>
                    {tier.popular && (
                      <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded">
                        Populaire
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {tier.eleves}
                  </td>
                  <td className="px-4 py-3 font-semibold">{tier.prix}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {tier.prixEleve}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-medium">Enterprise</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">5 001+</td>
                <td colSpan={2} className="px-4 py-3 text-sm">
                  <a href="/contact" className="text-primary hover:underline">
                    Sur devis →
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Inclus */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-semibold mb-4 text-center">Inclus dans tous les tiers :</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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

        {/* ROI */}
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl p-6 border border-border">
          <h3 className="font-semibold mb-4 text-center">Retour sur investissement</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-primary">4.2x</p>
              <p className="text-muted-foreground">ROI moyen (100 élèves)</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-muted-foreground">34,50€</p>
              <p className="text-muted-foreground">Budget numérique moyen/élève</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-primary">5-10€</p>
              <p className="text-muted-foreground">Econo&apos;kids/élève</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            C&apos;est l&apos;équivalent d&apos;un café par élève et par an pour leur apprendre
            à gérer leur argent toute leur vie.
          </p>
        </div>
      </div>
    </section>
  );
}
