export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "À quel âge peut-on commencer ?",
    answer:
      "Econo'kids est conçu pour les enfants de 8 à 13 ans, avec des activités adaptées à la lecture, aux opérations de base et à la découverte de la valeur des choses.",
  },
  {
    question: "Mon enfant est plus jeune ou plus âgé, est-ce adapté ?",
    answer:
      "Le cœur du programme est pensé pour les 8-13 ans. Pour un enfant plus jeune, un accompagnement renforcé peut être nécessaire. Au-delà de 13 ans, nous vous conseillons de vérifier pendant l'essai si le niveau et le format lui conviennent.",
  },
  {
    question: "Combien de temps par session ?",
    answer:
      "Econo'kids suit le rythme de la vraie vie : une semaine dans le jeu = une semaine réelle. Votre enfant se connecte quelques minutes par semaine pour gérer son budget, payer ses factures et faire ses choix. C'est idéal pour apprendre sans excès de temps d'écran ! Et s'il ne joue pas pendant quelques semaines ? Pas de souci, il pourra rattraper les semaines manquées à son retour.",
  },
  {
    question: "Mon enfant va-t-il se décourager s'il fait des erreurs ?",
    answer:
      "Le système d'aide est conçu pour limiter le blocage. Après 3 erreurs, une partie du résultat est affichée ; après 5 erreurs, la solution complète est proposée avec un message d'encouragement. Le parent peut suivre les aides utilisées.",
  },
  {
    question: "Puis-je suivre les progrès de mon enfant ?",
    answer:
      "Absolument. Votre espace parent vous montre : les badges obtenus, les projets d'épargne réalisés, les calculs réussis (avec ou sans aide), les cours terminés. C'est un excellent point de départ pour discuter avec votre enfant.",
  },
  {
    question: "Les données de mon enfant sont-elles sécurisées ?",
    answer:
      "Nous limitons les données collectées et chiffrons le prénom de l'enfant. L'application est hébergée chez OVH en France et la base de données chez Neon à Francfort. Il n'y a ni publicité ni outil analytics dans l'espace enfant. Le parent peut demander l'export ou la suppression des données depuis son espace.",
  },
  {
    question: "Puis-je ajouter plusieurs enfants ?",
    answer:
      "Oui, jusqu'à 3 enfants par compte. Chacun a sa propre progression, son propre métier, ses propres projets. Le prix reste le même.",
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer:
      "Oui, sans engagement de durée au-delà de la période souscrite. Vous pouvez annuler depuis votre espace parent et gardez l'accès jusqu'à la fin de la période payée.",
  },
  {
    question: "Je suis enseignant, comment utiliser Econo'kids en classe ?",
    answer:
      "Econo'kids propose également une offre dédiée aux collectivités et établissements scolaires. Contactez-nous à support@econokids.fr pour découvrir le parcours, le tableau de bord de classe et définir l'accompagnement souhaité dans un devis.",
  },
];
