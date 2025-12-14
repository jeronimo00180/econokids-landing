import { Clock, Rocket, BarChart3, Shield, GraduationCap, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: GraduationCap,
    title: "Inspiré des recommandations EDUCFI",
    description:
      "Econo'kids s'inscrit dans l'esprit de l'éducation budgétaire et financière prônée dès le plus jeune âge. Compétences développées : comprendre un budget, épargner, faire des choix financiers réfléchis.",
    highlight: "Éducation financière dès l'enfance",
  },
  {
    icon: Clock,
    title: "Clé en main pour vos enseignants",
    description:
      "Tout est prêt : 40 cours structurés, 200+ exercices, dashboard de suivi. Les enseignants supervisent des sessions de 30 minutes. Ils ne préparent rien, tout est dans l'app.",
    highlight: "Gain de temps considérable",
  },
  {
    icon: Users,
    title: "Déploiement simple et sécurisé",
    description:
      "Licence multi-élèves, gestion centralisée des comptes, suivi par classe. Interface d'administration pour les responsables éducation. Formation enseignants incluse.",
    highlight: "Intégration facile",
  },
  {
    icon: Rocket,
    title: "Soyez pionnier dans votre région",
    description:
      "Econo'kids est la première application française d'éducation financière pour le 3ème cycle. Votre commune sera parmi les premières à l'adopter. Une image moderne, innovante, tournée vers l'avenir.",
    highlight: "Différenciation politique",
  },
  {
    icon: BarChart3,
    title: "Des résultats concrets",
    description:
      "Dashboard enseignant complet : badges obtenus, calculs réussis (avec détail des aides utilisées), cours terminés. Vous pouvez mesurer l'impact sur vos élèves et communiquer des résultats chiffrés.",
    highlight: "Impact mesurable",
  },
  {
    icon: Shield,
    title: "Conformité RGPD stricte",
    description:
      "Données enfants chiffrées. Hébergement 100% France. Suppression automatique fin d'année scolaire. Export et suppression sur demande. Nous respectons le RGPD à la lettre.",
    highlight: "Zéro risque juridique",
  },
];

export function BenefitsB2B() {
  return (
    <section id="avantages" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">
            Econo&apos;kids : l&apos;outil pédagogique{" "}
            <span className="text-primary">qui manquait à vos écoles</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Une application web utilisable sur les tablettes et ordinateurs de
            vos écoles. En sessions de 30 minutes, vos élèves du 3ème cycle (CM1/CM2/6ème)
            vivent une année de simulation budgétaire.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {benefit.description}
                </p>
                <span className="inline-block text-xs font-medium text-success bg-green-50 px-2 py-1 rounded">
                  ✓ {benefit.highlight}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
