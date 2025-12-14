import {
  Gamepad2,
  Calculator,
  Heart,
  BarChart3,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Gamepad2,
    title: "Un jeu, pas un cours",
    description:
      "Votre enfant ne révise pas, il vit une aventure. Il choisit son métier, reçoit son salaire, paie son loyer. Chaque décision a des conséquences.",
    highlight: "12 mois virtuels de simulation",
  },
  {
    icon: Calculator,
    title: "Les maths prennent du sens",
    description:
      "Fini les problèmes abstraits. Ici, on calcule 10% d'impôts sur 2000€, on soustrait le loyer de 600€, on additionne les intérêts de son épargne.",
    highlight: "200+ calculs contextualisés",
  },
  {
    icon: Heart,
    title: "Patience et Valeur de l'Argent",
    description:
      "Finie l'impatience ! L'enfant apprend à épargner pour un objectif (un vélo, un jeu) et à comprendre la valeur de chaque euro. Il découvre aussi la générosité avec 3 associations dans le jeu.",
    highlight: "Des valeurs pour la vie",
  },
  {
    icon: BarChart3,
    title: "Vous voyez ses progrès",
    description:
      "Dashboard parent simple : badges obtenus, projets réalisés, calculs réussis. De quoi engager la conversation et célébrer ses réussites.",
    highlight: "Suivi en temps réel",
  },
  {
    icon: BookOpen,
    title: "40 cours pédagogiques",
    description:
      "7 thèmes essentiels, 3 niveaux de difficulté. L'argent au quotidien, le travail, l'inflation, l'économie circulaire, les pièges de la pub.",
    highlight: "Conforme aux programmes scolaires",
  },
  {
    icon: Trophy,
    title: "9 badges à débloquer",
    description:
      "Apprentissage, Calculateur, Économe, Généreux, Investisseur... Chaque badge récompense un accomplissement. Collection et fierté garanties.",
    highlight: "Motivation et progression",
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Econo&apos;kids : Une simulation de vie ludique{" "}
            <span className="text-primary">pour maîtriser le budget.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Econo&apos;kids plonge votre enfant dans une simulation de vie réaliste.
            En toute sécurité. En s&apos;amusant. Et en apprenant des leçons qui
            dureront toute sa vie.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-3">
                  {feature.description}
                </CardDescription>
                <span className="inline-block text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded">
                  {feature.highlight}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
