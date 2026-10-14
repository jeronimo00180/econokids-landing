import { HelpCircle, BookX, TrendingDown, ShoppingCart } from "lucide-react";

const problems = [
  {
    icon: BookX,
    title: "Des repères dès l'école",
    stat: "EDUCFI",
    description:
      "Le dispositif public EDUCFI propose des ressources dès l'école. Econo'kids offre un terrain d'entraînement complémentaire à la maison.",
  },
  {
    icon: TrendingDown,
    title: "Un enjeu très concret",
    stat: "148 013 dossiers",
    description:
      "148 013 dossiers de surendettement ont été déposés en France en 2025, selon la Banque de France.",
  },
  {
    icon: HelpCircle,
    title: "Seul face au défi",
    stat: "Où commencer ?",
    description:
      "Vous voulez leur apprendre, mais par où commencer ? Quels mots utiliser pour un enfant de 9 à 13 ans ?",
  },
  {
    icon: ShoppingCart,
    title: "La tentation immédiate",
    stat: "Tout, maintenant",
    description:
      'Votre enfant ne comprend pas pourquoi il faut attendre, économiser, choisir.',
  },
];

export function Problem() {
  return (
    <section className="py-10 md:py-14 bg-amber-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Les maths donnent les outils.{" "}
            <span className="text-primary">La pratique donne les bons réflexes.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <problem.icon className="h-8 w-8 text-primary mb-3" />
              <div className="text-xl font-bold text-primary mb-1.5">
                {problem.stat}
              </div>
              <h3 className="font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Agitation paragraph */}
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Parler de budget, d&apos;épargne et de choix permet de relier les calculs
            à des situations concrètes du quotidien.{" "}
            <strong className="text-foreground">
              Econo&apos;kids propose un cadre ludique pour s&apos;entraîner en famille.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
