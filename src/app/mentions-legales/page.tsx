import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Mentions légales | Econo'kids",
  description: "Mentions légales du site Econo'kids",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-muted-foreground mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Éditeur du site</h2>
            <p>
              Le site <strong>econokids.fr</strong> est édité par :
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Nom :</strong> XXX (Auto-entrepreneur)</li>
              <li><strong>SIRET :</strong> XXX</li>
              <li><strong>Adresse :</strong> XXX</li>
              <li><strong>Email :</strong> support@econokids.fr</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication est : <strong>XXX</strong>
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Hébergement</h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Nom :</strong> OVH SAS</li>
              <li><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</li>
              <li><strong>Téléphone :</strong> 1007</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu du site Econo&apos;kids (textes, images, vidéos, logos,
              graphismes, icônes, etc.) est la propriété exclusive de l&apos;éditeur, sauf
              mention contraire. Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site est interdite sans
              autorisation écrite préalable.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Données personnelles</h2>
            <p>
              Les informations concernant la collecte et le traitement des données
              personnelles sont détaillées dans notre{" "}
              <a href="/confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </a>.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD),
              vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et
              de portabilité de vos données. Pour exercer ces droits, contactez-nous à :
              support@econokids.fr
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Cookies</h2>
            <p>
              Le site utilise des cookies essentiels au fonctionnement du service et
              des cookies d&apos;analyse pour améliorer l&apos;expérience utilisateur. Pour plus
              d&apos;informations, consultez notre{" "}
              <a href="/confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </a>.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation de responsabilité</h2>
            <p>
              L&apos;éditeur ne pourra être tenu responsable des dommages directs ou indirects
              causés au matériel de l&apos;utilisateur lors de l&apos;accès au site. L&apos;éditeur
              décline toute responsabilité quant à l&apos;utilisation qui pourrait être faite
              des informations et contenus présents sur le site.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas
              de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous
              contacter à : <a href="mailto:support@econokids.fr" className="text-primary hover:underline">support@econokids.fr</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
