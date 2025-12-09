import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Econo'kids",
  description: "Conditions générales d'utilisation et de vente d'Econo'kids",
};

export default function CGUPage() {
  return (
    <>
      <Navbar />
      <main className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Conditions Générales d&apos;Utilisation</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-[var(--muted-foreground)] mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 1 - Objet</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès
              et l&apos;utilisation du service Econo&apos;kids, une application web éducative
              d&apos;éducation financière destinée aux enfants de 9 à 12 ans.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 2 - Éditeur</h2>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Nom :</strong> XXX (Auto-entrepreneur)</li>
              <li><strong>SIRET :</strong> XXX</li>
              <li><strong>Adresse :</strong> XXX</li>
              <li><strong>Email :</strong> support@econokids.fr</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 3 - Description du service</h2>
            <p>
              Econo&apos;kids est une application web éducative permettant aux enfants
              d&apos;apprendre les bases de la gestion budgétaire à travers une simulation
              ludique. Le service comprend :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Une simulation de budget sur 12 mois virtuels</li>
              <li>40 cours pédagogiques structurés</li>
              <li>Plus de 200 exercices de calcul</li>
              <li>Un système de badges et de progression</li>
              <li>Un dashboard de suivi pour les parents</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 4 - Accès au service</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">4.1 Inscription</h3>
            <p>
              L&apos;accès au service nécessite la création d&apos;un compte parent. Le parent
              est responsable de la création des profils enfants associés à son compte.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">4.2 Conditions d&apos;âge</h3>
            <p>
              Le service est destiné aux enfants de 9 à 12 ans (CM1/CM2/6ème), sous la
              supervision d&apos;un parent ou tuteur légal. L&apos;inscription en tant que parent
              requiert d&apos;avoir au moins 18 ans.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">4.3 Matériel requis</h3>
            <p>
              L&apos;utilisation du service nécessite :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Un ordinateur, tablette ou smartphone</li>
              <li>Une connexion internet</li>
              <li>Un navigateur web récent (Chrome, Firefox, Safari, Edge)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 5 - Tarifs et paiement</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">5.1 Prix</h3>
            <p>
              Les prix sont indiqués en euros (€) toutes taxes comprises (TTC).
              L&apos;offre actuelle comprend :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Abonnement mensuel : 4,99€/mois</li>
              <li>Abonnement annuel : 49€/an</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">5.2 Paiement</h3>
            <p>
              Le paiement est effectué par carte bancaire via notre prestataire
              sécurisé Stripe. Les données de paiement ne sont pas stockées sur nos serveurs.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">5.3 Renouvellement</h3>
            <p>
              Les abonnements sont renouvelés automatiquement à leur date d&apos;échéance.
              Vous pouvez annuler à tout moment depuis votre espace parent.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 6 - Droit de rétractation</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">6.1 Délai</h3>
            <p>
              Conformément à l&apos;article L221-18 du Code de la consommation, vous disposez
              d&apos;un délai de 14 jours à compter de la souscription pour exercer votre
              droit de rétractation.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.2 Exception pour contenus numériques</h3>
            <p>
              Conformément à l&apos;article L221-28 du Code de la consommation, le droit de
              rétractation ne peut être exercé pour les contenus numériques dont
              l&apos;exécution a commencé avec votre accord exprès et renoncement au droit
              de rétractation.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.3 Garantie satisfait ou remboursé</h3>
            <p>
              Indépendamment du droit de rétractation légal, nous offrons une garantie
              satisfait ou remboursé de 30 jours. Si le service ne vous convient pas,
              contactez-nous à support@econokids.fr pour obtenir un remboursement.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 7 - Licence d&apos;utilisation</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">7.1 Licence accordée</h3>
            <p>
              Econo&apos;kids vous accorde une licence personnelle, non-exclusive,
              non-transférable et révocable d&apos;utilisation du service pour un usage
              familial privé.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">7.2 Utilisations interdites</h3>
            <p>Il est interdit de :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Partager son compte avec des tiers</li>
              <li>Reproduire ou redistribuer le contenu</li>
              <li>Utiliser le service à des fins commerciales</li>
              <li>Tenter de contourner les mesures de sécurité</li>
              <li>Extraire automatiquement le contenu (scraping)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 8 - Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu du service (textes, images, cours, exercices,
              code source, interface) est la propriété exclusive d&apos;Econo&apos;kids ou de
              ses concédants de licence. Toute reproduction non autorisée est interdite.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 9 - Responsabilités</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">9.1 Contenu éducatif</h3>
            <p>
              Le service a une vocation pédagogique et ludique. Il ne constitue pas un
              conseil financier professionnel et ne garantit aucun résultat particulier.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">9.2 Disponibilité</h3>
            <p>
              Nous nous efforçons d&apos;assurer une disponibilité maximale du service.
              Cependant, nous ne pouvons garantir un accès ininterrompu et déclinons
              toute responsabilité en cas d&apos;indisponibilité temporaire.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">9.3 Limitation de responsabilité</h3>
            <p>
              Notre responsabilité est limitée au montant des sommes versées par
              l&apos;utilisateur au cours des 12 derniers mois. Nous ne sommes pas
              responsables des dommages indirects.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 10 - Résiliation</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">10.1 Par l&apos;utilisateur</h3>
            <p>
              Vous pouvez résilier votre abonnement à tout moment depuis votre espace
              parent. L&apos;accès reste actif jusqu&apos;à la fin de la période payée.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">10.2 Par Econo&apos;kids</h3>
            <p>
              Nous nous réservons le droit de suspendre ou résilier un compte en cas de :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violation des présentes CGU</li>
              <li>Non-paiement</li>
              <li>Comportement abusif ou frauduleux</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 11 - Données personnelles</h2>
            <p>
              Le traitement des données personnelles est régi par notre{" "}
              <a href="/confidentialite" className="text-[var(--primary)] hover:underline">
                Politique de confidentialité
              </a>, conforme au RGPD.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 12 - Modifications</h2>
            <p>
              Nous pouvons modifier ces CGU à tout moment. Les modifications entrent
              en vigueur dès leur publication. En cas de modification substantielle,
              nous vous informerons par email.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 13 - Droit applicable et litiges</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">13.1 Droit applicable</h3>
            <p>
              Les présentes CGU sont régies par le droit français.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">13.2 Médiation</h3>
            <p>
              En cas de litige, vous pouvez recourir gratuitement à un médiateur de la
              consommation. Les coordonnées du médiateur seront communiquées sur demande.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">13.3 Tribunal compétent</h3>
            <p>
              À défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Article 14 - Contact</h2>
            <p>
              Pour toute question concernant ces CGU, contactez-nous à :{" "}
              <a href="mailto:support@econokids.fr" className="text-[var(--primary)] hover:underline">
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
