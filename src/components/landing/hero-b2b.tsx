import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Users } from "lucide-react";

export function HeroB2B() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[var(--primary-50)] to-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-[var(--primary-100)] text-[var(--primary)] border-[var(--primary-200)] mb-6">
            Pour les mairies et écoles
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Formez les{" "}
            <span className="text-[var(--primary)]">citoyens de demain</span>{" "}
            à gérer leur argent
          </h1>

          <p className="text-lg text-[var(--muted-foreground)] md:text-xl mb-8 max-w-2xl mx-auto">
            0 heure d&apos;éducation financière au programme scolaire. Pourtant,
            gérer un budget est une compétence essentielle pour la vie. Econo&apos;kids
            permet à vos élèves du 3ème cycle (CM1/CM2/6ème) d&apos;apprendre en s&apos;amusant.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary)]">200+</div>
              <div className="text-sm text-[var(--muted-foreground)]">calculs pédagogiques</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary)]">40</div>
              <div className="text-sm text-[var(--muted-foreground)]">cours structurés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary)]">30 min</div>
              <div className="text-sm text-[var(--muted-foreground)]">par session</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:flex-row justify-center mb-8">
            <Button size="xl" asChild>
              <a href="/contact">Demander une démo gratuite</a>
            </Button>
          </div>

          {/* Target audience */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--muted-foreground)]">
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
