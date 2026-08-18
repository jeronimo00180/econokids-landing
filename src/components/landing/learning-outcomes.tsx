import { Check } from "lucide-react";

const outcomes = [
  {
    title: "Construire et tenir un budget",
    description: "salaire, factures, dépenses : il fait ses comptes comme un grand",
  },
  {
    title: "Épargner pour un objectif",
    description:
      "il apprend à attendre et à choisir, au lieu de tout vouloir tout de suite",
  },
  {
    title: "Comprendre salaire et impôts",
    description: "d'où vient l'argent, où il va, et pourquoi",
  },
  {
    title: "Faire travailler son argent",
    description: "il voit ses intérêts grandir mois après mois",
  },
  {
    title: "Faire face aux imprévus",
    description: "une dépense surprise ne le met plus en panique",
  },
  {
    title: "Partager et donner",
    description:
      "il soutient des causes qui lui ressemblent : animaux, environnement, lutte contre le harcèlement",
  },
];

const legitimacyBadges = [
  { className: "bg-blue-50 border-blue-200 text-blue-600", label: "🎓 Inspiré des recommandations EDUCFI" },
  { className: "bg-green-50 border-green-200 text-green-600", label: "🇫🇷 Application hébergée en France" },
  { className: "bg-purple-50 border-purple-200 text-purple-600", label: "🔒 Données enfants chiffrées" },
  { className: "bg-amber-50 border-amber-200 text-amber-600", label: "📵 Sans publicité, sans achat intégré" },
];

export function LearningOutcomes() {
  return (
    <section className="py-10 md:py-14 bg-emerald-50">
      <div className="container">
        {/* Partie A — Acquis pédagogiques */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Au fil de la simulation,{" "}
            <span className="text-primary">votre enfant s&apos;entraîne à :</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {outcomes.map((outcome) => (
            <div key={outcome.title} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  {outcome.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-2xl mx-auto text-center text-base md:text-lg text-muted-foreground">
          Ces activités donnent des points de repère concrets pour parler
          d&apos;argent en famille, sans promettre un résultat identique pour chaque enfant.
        </p>

        {/* Partie B — Bande de légitimité */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-emerald-200 bg-white shadow-sm p-5 sm:p-6 text-center">
            <h3 className="text-lg font-bold sm:text-xl mb-2">
              Une méthode pensée pour l&apos;école
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-4">
              Econo&apos;kids s&apos;appuie sur les recommandations EDUCFI et propose
              un parcours pédagogique également utilisable dans un cadre scolaire
              ou municipal. À la maison, votre enfant en profite à son rythme.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {legitimacyBadges.map((badge) => (
                <div
                  key={badge.label}
                  className={`inline-flex items-center rounded-lg border px-3 py-1.5 ${badge.className}`}
                >
                  <span className="font-medium text-xs sm:text-sm">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
