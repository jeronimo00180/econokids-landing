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
      "L'application réunit mini-cours thématiques, exercices pratiques et tableau de suivi. L'enseignant conserve la maîtrise du rythme et de l'organisation des séances.",
    highlight: "Supports regroupés dans l'application",
  },
  {
    icon: Users,
    title: "Mise en route légère",
    description:
      "Econo'kids fonctionne directement via un navigateur web récent. Une connexion internet et la création des accès restent nécessaires ; aucune installation sur les serveurs de la mairie n'est demandée.",
    highlight: "Web App prête à l'emploi",
  },
  {
    icon: Rocket,
    title: "Soyez pionnier dans votre région",
    description:
      "Econo'kids propose une approche française, ludique et progressive de l'éducation budgétaire pour le cycle 3. Un pilote permet d'en mesurer l'intérêt avant un déploiement plus large.",
    highlight: "Différenciation politique",
  },
  {
    icon: BarChart3,
    title: "Des résultats concrets",
    description:
      "Le tableau de bord enseignant présente les badges obtenus, les calculs réussis avec le niveau d'aide utilisé et les cours terminés. Il permet de suivre l'activité et la progression dans l'application.",
    highlight: "Suivi d'usage visible",
  },
  {
    icon: Shield,
    title: "Protection des données documentée",
    description:
      "Les données d'identité des enfants sont chiffrées. L'application est hébergée en France, la base dans l'Union européenne, et des fonctions d'export, d'anonymisation et de suppression sont prévues.",
    highlight: "Collecte limitée et contrôles d'accès",
  },
];

export function BenefitsB2B() {
  return (
    <section id="avantages" className="py-12 md:py-16">
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

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
