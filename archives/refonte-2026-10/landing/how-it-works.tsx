import { Clock } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Il démarre dans la vie",
    description:
      "Il choisit son métier de rêve et reçoit son premier salaire : 2 000 € virtuels. Première surprise : l'État prélève 10 % d'impôts. Première leçon.",
  },
  {
    number: 2,
    title: "Il gère son budget chaque semaine",
    description:
      "Loyer, courses, électricité… Il paie ses factures et répartit son argent entre 3 comptes : courant, sécurité et projets. Et quand le lave-linge tombe en panne, il apprend à faire face.",
  },
  {
    number: 3,
    title: "Il réalise ses projets et vous suivez tout",
    description:
      "Il épargne pour un objectif qui lui tient à cœur, découvre les intérêts, et savoure sa première grande fierté. De votre côté, vous suivez ses progrès depuis votre espace parent.",
  },
];

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-10 md:py-14 bg-primary-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-3">
            Une année de vie adulte,{" "}
            <span className="text-primary">en miniature</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Pas de leçons à réciter : votre enfant apprend en vivant. Voici son
            aventure.
          </p>
        </div>

        {/* Étapes */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary mb-3">
                {step.number}
              </div>
              <h3 className="text-base font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bandeau rythme de jeu */}
        <div className="mt-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 sm:gap-4 rounded-xl bg-white border border-primary-100 shadow-sm p-4 sm:p-5">
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              <strong>
                Une semaine dans le jeu = une semaine dans la vraie vie.
              </strong>{" "}
              Quelques minutes par semaine suffisent : Econo&apos;kids est conçu
              pour apprendre, pas pour capter son temps d&apos;écran.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
