import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Econo'kids",
  description: "Politique de confidentialité et protection des données personnelles d'Econo'kids",
};

export default function ConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-muted-foreground mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>

            <p className="mb-6">
              Econo&apos;kids s&apos;engage à protéger la vie privée de ses utilisateurs,
              en particulier les données des enfants mineurs. Cette politique explique
              comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Responsable du traitement</h2>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Nom :</strong> XXX (Auto-entrepreneur)</li>
              <li><strong>SIRET :</strong> XXX</li>
              <li><strong>Adresse :</strong> XXX</li>
              <li><strong>Email :</strong> support@econokids.fr</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Données collectées</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">Pour les parents (compte payant)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email</li>
              <li>Mot de passe (chiffré)</li>
              <li>Informations de paiement (traitées par Stripe, non stockées chez nous)</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">Pour les enfants</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prénom (chiffré)</li>
              <li>Progression dans le jeu</li>
              <li>Résultats des calculs et cours</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Important :</strong> Nous ne collectons pas le nom de famille,
              l&apos;adresse, la date de naissance, ni aucune autre donnée sensible des enfants.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">Données collectées automatiquement</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Adresse IP (pour la sécurité)</li>
              <li>Type de navigateur et appareil</li>
              <li>Pages visitées et temps de session</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fournir l&apos;accès au service Econo&apos;kids</li>
              <li>Gérer votre compte et vos abonnements</li>
              <li>Envoyer les emails transactionnels (confirmation, accès)</li>
              <li>Améliorer le service et corriger les bugs</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Base légale du traitement</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Exécution du contrat :</strong> pour fournir le service</li>
              <li><strong>Intérêt légitime :</strong> pour améliorer et sécuriser le service</li>
              <li><strong>Consentement :</strong> pour les communications marketing (opt-in)</li>
              <li><strong>Obligation légale :</strong> conservation comptable</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Partage des données</h2>
            <p>Nous partageons vos données uniquement avec :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Stripe :</strong> traitement des paiements</li>
              <li><strong>OVH :</strong> hébergement (France)</li>
              <li><strong>Plausible :</strong> analytics respectueux de la vie privée</li>
            </ul>
            <p className="mt-2 font-semibold">
              Nous ne vendons jamais vos données personnelles.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Sécurité des données</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Chiffrement des données sensibles (prénom des enfants)</li>
              <li>Connexions HTTPS uniquement</li>
              <li>Hébergement 100% en France</li>
              <li>Accès restreint aux données</li>
              <li>Mots de passe hashés (non réversibles)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Conservation des données</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Comptes actifs :</strong> durée de l&apos;abonnement</li>
              <li><strong>Après résiliation :</strong> suppression sous 30 jours</li>
              <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Rectification :</strong> corriger vos données</li>
              <li><strong>Effacement :</strong> supprimer vos données</li>
              <li><strong>Portabilité :</strong> exporter vos données</li>
              <li><strong>Opposition :</strong> vous opposer au traitement</li>
              <li><strong>Limitation :</strong> limiter le traitement</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:support@econokids.fr" className="text-primary hover:underline">
                support@econokids.fr
              </a>
            </p>
            <p className="mt-2">
              Délai de réponse : 30 jours maximum.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Cookies</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">Cookies essentiels</h3>
            <p>
              Nécessaires au fonctionnement du site (session, authentification).
              Ils ne peuvent pas être désactivés.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">Cookies d&apos;analyse</h3>
            <p>
              Nous utilisons Plausible Analytics, une solution respectueuse de la vie
              privée qui ne dépose pas de cookies et ne collecte pas de données personnelles.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Protection des mineurs</h2>
            <p>
              Econo&apos;kids est destiné aux enfants de 9 à 12 ans, sous la supervision
              de leurs parents. Nous appliquons des mesures renforcées :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Collecte minimale de données (prénom uniquement)</li>
              <li>Chiffrement des données des enfants</li>
              <li>Pas de publicité ni de tracking</li>
              <li>Contrôle parental via le compte parent</li>
              <li>Suppression des données sur demande du parent</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Transferts internationaux</h2>
            <p>
              Vos données sont hébergées en France (OVH). Nous ne transférons pas vos
              données en dehors de l&apos;Union Européenne.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">12. Modifications</h2>
            <p>
              Cette politique peut être mise à jour. En cas de modification substantielle,
              nous vous informerons par email. La date de mise à jour est indiquée en
              haut de cette page.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">13. Réclamation</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer
              une réclamation auprès de la CNIL :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.cnil.fr
              </a>
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">14. Contact</h2>
            <p>
              Pour toute question concernant cette politique, contactez-nous à :{" "}
              <a href="mailto:support@econokids.fr" className="text-primary hover:underline">
                support@econokids.fr
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
