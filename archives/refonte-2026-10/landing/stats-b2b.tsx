import { AlertTriangle } from "lucide-react";

const stats = [
  {
    value: "Dès l'école",
    label: "des ressources EDUCFI existent pour aborder le budget et les moyens de paiement",
  },
  {
    value: "148 013",
    label: "dossiers de surendettement déposés en France en 2025 selon la Banque de France",
  },
  {
    value: "40 modules",
    label: "répartis en 6 thèmes et 3 niveaux dans Econo'kids",
  },
];

export function StatsB2B() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Le constat est alarmant.{" "}
            <span className="text-primary">Vous pouvez agir.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 text-left">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              Econo&apos;kids est un outil pédagogique indépendant, inspiré des
              principes EDUCFI. Il complète le travail des équipes éducatives
              sans se substituer aux programmes officiels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
