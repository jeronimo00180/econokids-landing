import { HelpCircle, BookX, TrendingDown, ShoppingCart } from "lucide-react";

const problems = [
  {
    icon: BookX,
    title: "L'école fait l'impasse",
    stat: "0h au programme",
    description:
      "0 heure d'éducation financière au programme scolaire français. Vos enfants apprennent les fractions, mais pas comment faire un budget.",
  },
  {
    icon: TrendingDown,
    title: "Des adultes en difficulté",
    stat: "1 adulte sur 2",
    description:
      "1 Français sur 2 n'a aucune épargne de précaution. 800 000 dossiers de surendettement chaque année.",
  },
  {
    icon: HelpCircle,
    title: "Seul face au défi",
    stat: "Où commencer ?",
    description:
      "Vous voulez leur apprendre, mais par où commencer ? Quels mots utiliser pour un enfant de 10 ans ?",
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
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            L&apos;école leur apprend les maths.{" "}
            <span className="text-primary">Pas à gérer leur argent.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white dark:bg-slate-800 rounded-xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <problem.icon className="h-10 w-10 text-primary mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">
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
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Chaque jour qui passe sans éducation financière, votre enfant prend
            des habitudes. La gratification instantanée. L&apos;envie de tout
            avoir. L&apos;incompréhension de l&apos;effort derrière l&apos;argent.{" "}
            <strong className="text-foreground">
              Ce n&apos;est pas une fatalité. Mais ça commence maintenant.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
