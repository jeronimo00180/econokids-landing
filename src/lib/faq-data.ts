export interface FaqItem {
  question: string;
  answer: string;
}

// Questions de la page d'accueil (refonte d'octobre 2026). Chaque réponse décrit ce que fait vraiment l'application.
export const faqs: FaqItem[] = [
  {
    question: "Pour quel âge ?",
    answer:
      "Le jeu est pensé pour les 9 à 13 ans. La ville Horizon, plus « ado », accueille les plus grands aux niveaux avancés.",
  },
  {
    question: "Est-ce que mon enfant manipule de l'argent réel ?",
    answer: "Non. Tout l'argent du jeu est fictif, et il n'y a aucun achat possible dans le jeu.",
  },
  {
    question: "Comment avance la partie ?",
    answer:
      "Votre enfant avance à son rythme : il reçoit un salaire chaque mois de jeu, paie ses dépenses, fait ses choix, puis passe lui-même à la semaine suivante. Les niveaux plus avancés se débloquent au fil des vraies semaines et de ses progrès.",
  },
  {
    question: "Qu'est-ce que je vois, en tant que parent ?",
    answer:
      "Dans votre espace, protégé par votre mot de passe : sa progression, ses cours, ses exercices, ses projets, ses badges, et les fiches métiers et cours à télécharger.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "4,99 € par mois ou 49 € par an, pour jusqu'à 3 enfants. L'essai de 14 jours est gratuit et ne demande pas de carte bancaire.",
  },
  {
    question: "Et les données de mon enfant ?",
    answer:
      "Nous ne demandons que le prénom, et il est chiffré. Pas d'adresse, pas de date de naissance, pas de publicité ni de mesure d'audience dans l'espace enfant. L'application est hébergée en France et vous pouvez supprimer votre compte à tout moment.",
  },
  {
    question: "Sur quel appareil ?",
    answer: "Dans le navigateur, sur ordinateur, tablette ou téléphone. Rien à installer.",
  },
  {
    question: "Et après l'essai ?",
    answer: "Vous choisissez de vous abonner ou non. Sans abonnement, le jeu se met en pause.",
  },
];
