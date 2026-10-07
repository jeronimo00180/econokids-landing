import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Users, Globe } from "lucide-react";

export function HeroB2B() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-b from-primary-50 to-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-primary-100 text-primary border-primary-200 mb-6">
            Pour les mairies et écoles
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Formez les{" "}
            <span className="text-primary">citoyens de demain</span>{" "}
            à gérer leur argent
          </h1>

          <p className="text-lg text-muted-foreground md:text-xl mb-6 max-w-2xl mx-auto">
            L&apos;EDUCFI encourage l&apos;apprentissage des notions budgétaires dès l&apos;école.
            Econo&apos;kids propose aux élèves du cycle 3 (CM1, CM2 et 6ème) un support
            pratique et ludique pour les mettre en situation.
          </p>

          {/* Badges rassurants */}
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
              <span className="text-blue-600 font-medium text-sm">🎓 Inspiré des recommandations EDUCFI</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
              <span className="text-green-600 font-medium text-sm">💰 Tarification par classe sur devis</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-lg px-4 py-2">
              <Globe className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 font-medium text-sm">Web App sans installation serveur</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Tutoriel</div>
              <div className="text-sm text-muted-foreground">de prise en main intégré</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Suivi</div>
              <div className="text-sm text-muted-foreground">par l&apos;enseignant</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Navigateur</div>
              <div className="text-sm text-muted-foreground">web récent requis</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:flex-row justify-center mb-8">
            <Button size="xl" asChild>
              <a href="/contact/">Demander une démo gratuite</a>
            </Button>
          </div>

          {/* Target audience */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>Mairies</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Directeurs d&apos;école</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Enseignants</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
