import type { FaqItem } from "@/lib/faq-data";

// FAQ affichées sur /mairies/. Partagées entre les composants (affichage)
// et la page (données structurées FAQPage), pour rester identiques.

// « Questions fréquentes » (FAQB2B)
export const faqsB2B: FaqItem[] = [
  {
    question: "Comment les enseignants sont-ils accompagnés ?",
    answer:
      "Un tutoriel intégré guide l'enseignant et les élèves au premier lancement. Le niveau d'accompagnement souhaité peut être précisé dans le devis, et le support reste disponible par email.",
  },
  {
    question: "Quels équipements sont nécessaires ?",
    answer:
      "Econo'kids fonctionne sur vos PC et tablettes existants, via un simple navigateur web. Une connexion internet est requise. Pas d'installation, pas de téléchargement. Chaque élève dispose de son propre compte et progresse à son rythme. Alternative possible : utilisation en groupe ou classe entière sur écran partagé.",
  },
  {
    question: "Comment est gérée la conformité RGPD ?",
    answer:
      "Les données d'identité sont chiffrées, l'application est hébergée chez OVH en France et la base de données chez Neon à Francfort. Des fonctions d'export, d'anonymisation annuelle et de suppression sont prévues. Les modalités exactes sont détaillées dans la politique de confidentialité.",
  },
  {
    question: "Peut-on tester avant de s'engager ?",
    answer:
      "Oui. Vous pouvez demander une démonstration gratuite afin de voir l'application et poser vos questions avant toute décision.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Contactez-nous par email à support@econokids.fr. Nous reviendrons vers vous pour préciser le nombre de classes, le périmètre d'accompagnement et préparer un devis.",
  },
];

// « FAQ Mairies & Collectivités » (FAQMairies)
export const faqsMairies: FaqItem[] = [
  {
    question: "Comment se passe le processus d'achat pour une mairie ?",
    answer:
      "Nous nous adaptons aux procédures indiquées par la collectivité. Le devis et les documents contractuels précisent le périmètre proposé avant toute décision.",
  },
  {
    question: "Peut-on intégrer Econo'kids dans le budget 'numérique éducatif' ?",
    answer:
      "Selon les règles de votre collectivité, Econo'kids peut être étudié dans les dépenses de numérique éducatif ou de ressources pédagogiques. Un devis par classe permet de connaître le coût exact avant décision.",
  },
  {
    question: "Qui gère les comptes des élèves ?",
    answer:
      "Vous avez le choix : soit la mairie centralise la gestion via un responsable éducation, soit chaque directeur d'école gère ses classes. Dans les deux cas, vous disposez d'un tableau de bord avec une vue globale sur toutes les écoles de la commune.",
  },
  {
    question: "Que se passe-t-il en cas de changement d'enseignant ou d'élève en cours d'année ?",
    answer:
      "L'interface d'administration permet d'ajouter ou retirer des élèves à tout moment. Les données sont liées à l'élève, pas à l'enseignant. Si un élève change de classe, sa progression est conservée.",
  },
  {
    question: "Les données sont-elles supprimées en fin d'année scolaire ?",
    answer:
      "Le nettoyage annuel traite les anciens comptes élèves et enseignants après le 1er août, sous réserve que la tâche programmée soit active. Les établissements peuvent exporter leurs statistiques avant l'anonymisation.",
  },
  {
    question: "Peut-on tester avec une seule école avant de déployer sur toute la commune ?",
    answer:
      "Oui. Un pilote sur une ou deux classes peut être défini dans le devis afin d'évaluer l'usage avant un éventuel déploiement plus large.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "La durée, les conditions de renouvellement et de résiliation sont précisées dans le devis et le contrat soumis à la collectivité.",
  },
];
