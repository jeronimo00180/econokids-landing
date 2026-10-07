# Econo'kids — conception de la préparation commerciale

## Objectif

Rendre le site B2C et l'application commercialisables avec un discours exact, un socle SEO cohérent, un suivi marketing utile et une séparation stricte entre les parcours adultes et l'espace enfant.

## Principes validés

- La priorité commerciale est le B2C.
- Econo'kids est une initiative indépendante, seulement inspirée des principes EDUCFI.
- Le site public est déployé via Vercel, l'application via OVH en France et la base Neon à Francfort.
- Les formulations absolues ou non prouvées sont retirées.
- PostHog suit le site public, le parcours parent et les conversions confirmées côté serveur.
- L'espace enfant ne charge aucun SDK analytics et n'envoie aucun événement PostHog.
- Aucune donnée personnelle, identité enfant, adresse email ou texte libre ne doit être envoyé aux outils analytics.

## Architecture de mesure

Le site conserve les paramètres UTM autorisés lors de la première visite puis les transmet à l'application lors du passage vers l'inscription. L'application associe ces paramètres à un identifiant d'attribution non personnel. Les étapes du parcours parent sont capturées avec un vocabulaire stable : inscription commencée, inscription terminée, essai démarré, premier profil enfant créé, tarification consultée et paiement commencé.

Les événements de revenu ne sont jamais validés par une redirection navigateur. Ils sont émis côté serveur après traitement idempotent d'un événement Stripe signé : abonnement activé, paiement réussi, paiement échoué et abonnement résilié. Les propriétés se limitent au plan, à la périodicité, à la devise, au montant et à la campagne.

## Limites de conformité

Le consentement analytics est refusé par défaut et peut être retiré. PostHog reste désactivé dans l'espace enfant, même si le parent a accepté la mesure d'audience sur le site. Le replay et l'autocapture sont désactivés. Les pages juridiques décrivent les prestataires et traitements réels sans revendiquer une anonymisation ou une conformité absolue.

## Critères de commercialisation

- Les promesses publiques correspondent au produit et sont sourcées lorsqu'elles contiennent un chiffre externe.
- Les mentions légales identifient Jérôme Rembert EI et le directeur de publication.
- Les pages indexables ont une URL canonique cohérente et figurent correctement dans le sitemap.
- Le consentement et l'attribution fonctionnent après acceptation, refus et changement d'avis.
- Les événements de conversion sont testés, idempotents et exempts de données personnelles.
- Les builds, le typage, le lint et les suites de tests ciblées passent.
- Les dépendances externes de production sont vérifiées séparément ; aucune validation de code ne remplace la vérification Stripe, Vercel, OVH, Neon ou PostHog.
