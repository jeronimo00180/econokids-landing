// Contenu du site (refonte d'octobre 2026, maquette validée par Jérôme le 14/10/2026).
// Chaque chiffre et chaque fonction ci-dessous existent dans l'application (vérifiés le 14/10/2026).
// Ton : on vouvoie les parents, on parle d'apprendre à son âge, l'argent est un outil (formules interdites : tests/refonte-site.test.mjs).

export const SIGNATURE = "Apprendre à se servir de l'argent, en jouant.";

export const LIENS = {
  inscription: "https://app.econokids.fr/inscription",
  connexion: "https://app.econokids.fr/login?tab=parent",
  support: "support@econokids.fr",
  instagram: "https://www.instagram.com/econokids.fr/",
  facebook: "https://www.facebook.com/econokids.fr",
  pinterest: "https://fr.pinterest.com/econokids/",
} as const;

export const HEROS = {
  surTitre: "Le jeu de la ville · 9 à 13 ans",
  texte:
    "Dans la ville d'Econo'kids, votre enfant reçoit un salaire, paie ses dépenses, met de côté pour ses projets et apprend à faire des choix. Avec de l'argent fictif, à son rythme. Et vous suivez sa progression.",
  garanties: ["Argent fictif", "Sans publicité", "Sans carte bancaire pour l'essai"],
};

export type Lieu = {
  cle: string;
  nom: string;
  court: string;
  perso?: string;
  position: { x: number; y: number };
  points: string[];
};

// Positions en pourcentage sur l'image /images/site/ville-decouverte-automne.webp (1536 x 1024).
export const LIEUX: Lieu[] = [
  { cle: "ecole", nom: "L'École", court: "École", position: { x: 28, y: 14 }, points: ["41 cours en 6 thèmes, racontés par de petites histoires", "Des mini-jeux pour s'entraîner", "Deux bonnes réponses pour terminer un cours"] },
  { cle: "entreprise", nom: "L'Entreprise", court: "Entreprise", perso: "/images/site/margaux.webp", position: { x: 50, y: 11 }, points: ["Sa fiche de paie : brut, impôts, net", "Son métier, parmi 18 à découvrir", "Des petits boulots aux niveaux suivants"] },
  { cle: "supermarche", nom: "Le Supermarché", court: "Supermarché", perso: "/images/site/capucine.webp", position: { x: 74, y: 17 }, points: ["Les courses de la semaine", "Comparer deux prix, besoin ou envie", "Ne pas acheter sur un coup de tête"] },
  { cle: "maison", nom: "Ma Maison", court: "Maison", position: { x: 24, y: 37 }, points: ["Sa chambre, qu'il décore au fil du jeu", "Son arbre d'épargne, à arroser chaque semaine", "Ses cartes et ses trophées"] },
  { cle: "association", nom: "L'Association", court: "Association", perso: "/images/site/nour.webp", position: { x: 50, y: 31 }, points: ["Trois causes : animaux, environnement, cyber-harcèlement", "Il choisit s'il donne, et combien", "Le thermomètre des dons"] },
  { cle: "banque", nom: "La Banque", court: "Banque", perso: "/images/site/basile.webp", position: { x: 77, y: 38 }, points: ["Un compte pour les imprévus, un autre pour ses projets", "Les intérêts, expliqués simplement", "Le bocal qui se remplit"] },
  { cle: "boutique", nom: "La Boutique", court: "Boutique", position: { x: 24, y: 61 }, points: ["Acheter avec ce qu'il a vraiment", "Neuf ou occasion ?", "Des objets pour sa chambre"] },
  { cle: "evenements", nom: "Les Événements", court: "Événements", position: { x: 50, y: 57 }, points: ["Les moments de l'année : Noël, soldes, vacances, rentrée", "Les imprévus, à prévoir", "Les dépenses de saison"] },
  { cle: "investissements", nom: "Les Investissements", court: "Investissements", perso: "/images/site/iris.webp", position: { x: 76, y: 62 }, points: ["Aux niveaux avancés seulement", "Des placements fictifs qui poussent comme des plantes", "Comprendre que ça prend du temps"] },
];

export const APPRENTISSAGES = [
  { titre: "Comprendre un salaire", texte: "Brut, impôts, net : chaque mois de jeu, il lit sa fiche de paie et fait le calcul lui-même.", visuel: "salaire" },
  { titre: "Comprendre les dépenses", texte: "Loyer, courses, électricité, internet : il paie ses factures avant de passer à la semaine suivante.", visuel: "depenses" },
  { titre: "Apprendre à mettre de côté", texte: "À la banque, avec Basile, il ouvre un projet d'épargne et regarde son bocal se remplir.", visuel: "epargne" },
  { titre: "Distinguer besoin et envie", texte: "Des mini-jeux courts pour trier, comparer deux prix, attendre avant d'acheter.", visuel: "choix" },
  { titre: "Donner, s'il le souhaite", texte: "Trois associations du jeu (animaux, environnement, lutte contre le cyber-harcèlement) : il choisit s'il donne et combien.", visuel: "dons" },
  { titre: "L'argent et les émotions", texte: "Envie, patience, fierté, moqueries : six cours en parlent avec des histoires, sans jamais faire la leçon.", visuel: "emotions" },
] as const;

export const CHIFFRES = [
  { valeur: "41", libelle: "cours en 6 thèmes" },
  { valeur: "23", libelle: "mini-jeux" },
  { valeur: "18", libelle: "métiers à découvrir" },
  { valeur: "3", libelle: "villes, 4 saisons" },
  { valeur: "15", libelle: "cartes à collectionner, sans hasard" },
];

export const ETAPES = [
  { titre: "Vous créez son profil", texte: "En quelques minutes, depuis votre espace parent. Jusqu'à 3 enfants par compte." },
  { titre: "Il joue quand il veut", texte: "Il reçoit son salaire chaque mois de jeu, paie ses dépenses, fait ses choix, puis passe lui-même à la semaine suivante." },
  { titre: "Il progresse au fil des semaines", texte: "De nouveaux bâtiments et de nouvelles notions se débloquent avec ses progrès et les vraies semaines qui passent." },
];

export const PARENTS = [
  { fort: "Un espace parent protégé par votre mot de passe", suite: " : votre enfant n'y entre pas seul." },
  { fort: "Sa progression", suite: " : cours terminés, exercices, projets, badges." },
  { fort: "Le niveau de départ", suite: " que vous choisissez : débutant, intermédiaire ou avancé." },
  { fort: "Les fiches métiers et les cours en PDF", suite: ", à lire ensemble." },
  { fort: "Des missions de la vraie vie", suite: " que vous lui proposez et validez", bientot: true },
];

export const GARANTIES = [
  { fort: "Argent fictif.", suite: " Aucun achat dans le jeu, aucun lien avec un vrai compte." },
  { fort: "Aucune publicité,", suite: " et aucune mesure d'audience dans l'espace enfant." },
  { fort: "Le minimum de données :", suite: " le prénom de l'enfant est chiffré, ni adresse ni date de naissance." },
  { fort: "Hébergé en France,", suite: " base de données dans l'Union européenne. Vous pouvez tout supprimer." },
  { fort: "Pas de hasard ni de casino :", suite: " les placements poussent comme des plantes, les cartes se gagnent par des efforts." },
];

export const TARIFS = {
  mois: { prix: "4,99 €", periode: "par mois" },
  an: { prix: "49 €", periode: "par an", remise: "2 mois offerts" },
  avantages: ["Jusqu'à 3 enfants, au même prix", "Essai gratuit de 14 jours, sans carte bancaire", "Sans engagement, résiliable en quelques clics"],
};

export const ECOLES = {
  surTitre: "Écoles et mairies · CM1, CM2, 6e",
  texte:
    "Un programme clé en main : six séances de 30 minutes dans la ville d'Econo'kids. Les élèves comprennent un salaire, des dépenses, l'épargne et le partage, en jouant.",
  seances: ["Découverte", "Sécurité", "Projets", "Imprévus", "Partage", "Bilan"],
  modes: [
    { titre: "Chacun sur son poste", texte: "Chaque élève a sa partie, sur ordinateur ou tablette." },
    { titre: "En petits groupes", texte: "Un profil pour plusieurs élèves, qui décident ensemble." },
    { titre: "En classe entière", texte: "L'enseignant pilote une partie commune au tableau, avec toute la classe." },
  ],
  enseignant: [
    "Un guide de l'enseignant pour mener les six séances.",
    "Les listes d'élèves importées en une fois.",
    "La fiche de la classe et les cartes de connexion des élèves, à imprimer.",
    "Les cours, les mini-jeux et les métiers du jeu, dans une ville adaptée à l'école.",
  ],
  mairie: [
    "Les classes de la commune réunies dans un même espace.",
    "Les données des élèves effacées chaque année après le 1er août.",
    "Un tarif sur devis, selon le nombre de classes.",
  ],
  donnees: [
    { fort: "Pas d'adresse email d'élève :", suite: " ils se connectent avec le code de la classe et un code personnel." },
    { fort: "Aucune publicité,", suite: " aucune mesure d'audience dans l'espace élève." },
    { fort: "Argent fictif", suite: " uniquement." },
    { fort: "Hébergé en France,", suite: " base de données dans l'Union européenne." },
  ],
  presentation: "Nous vous montrons le jeu et le programme en 20 minutes, en visio ou dans votre école.",
};
