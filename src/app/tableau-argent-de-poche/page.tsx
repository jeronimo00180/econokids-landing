import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/site/CtaLink";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { socialMetadata } from "@/lib/seo";
import { LIENS } from "@/lib/site-content";
import { TABLEAU } from "@/lib/tableau-content";

const title = "Tableau d'argent de poche à imprimer (PDF gratuit) | Econo'kids";
const description =
  "Tableau d'argent de poche gratuit à imprimer : un bocal à colorier pour son projet, ses semaines, et au dos des repères de montants pour les parents.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tableau-argent-de-poche/" },
  ...socialMetadata({ title, description, path: "/tableau-argent-de-poche/" }),
};

function BoutonTelecharger({ emplacement }: { emplacement: string }) {
  return (
    <CtaLink href="/documents/econokids-tableau-argent-de-poche.pdf" nom="telecharger_tableau" emplacement={emplacement} className="ek-bouton ek-plein">
      Télécharger le tableau (PDF)
    </CtaLink>
  );
}

export default function TableauArgentDePochePage() {
  return (
    <div className="ek">
      <SiteHeader />
      <main>
        <div className="ek-contenu ek-heros">
          <div className="ek-heros-texte">
            <p className="ek-surtitre">Gratuit · à imprimer</p>
            <h1 className="ek-h1-page">Le tableau d&apos;argent de poche à imprimer</h1>
            <p className="ek-lead">
              Pour que votre enfant suive son argent de poche et avance vers son projet, case par case. Au dos, un mode
              d&apos;emploi pour vous : des repères de montants et cinq questions à poser à table.
            </p>
            <div className="ek-actions">
              <BoutonTelecharger emplacement="tableau_haut" />
            </div>
            <p className="ek-note">{TABLEAU.poids}. Sans inscription, sans adresse mail.</p>
          </div>
          <div className="ek-apercus">
            <Image
              className="ek-apercu-1"
              src="/images/site/tableau-argent-de-poche-page1.webp"
              alt="Page enfant du tableau : son projet, un bocal de 20 cases à colorier, ses semaines et ses trois bocaux"
              width={900}
              height={1273}
              priority
              sizes="(min-width: 980px) 30vw, 54vw"
            />
            <Image
              className="ek-apercu-2"
              src="/images/site/tableau-argent-de-poche-page2.webp"
              alt="Page parents : repères de montants, trois repères qui aident et cinq questions à poser à table"
              width={900}
              height={1274}
              sizes="(min-width: 980px) 30vw, 54vw"
            />
          </div>
        </div>

        <section className="ek-section">
          <div className="ek-contenu ek-deux">
            <div className="ek-bloc">
              <p className="ek-surtitre">Page 1</p>
              <h2>Pour votre enfant</h2>
              <ul>{TABLEAU.pourEnfant.map((ligne) => <li key={ligne}>{ligne}</li>)}</ul>
            </div>
            <div className="ek-bloc">
              <p className="ek-surtitre">Page 2</p>
              <h2>Pour vous</h2>
              <ul>{TABLEAU.pourParents.map((ligne) => <li key={ligne}>{ligne}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="ek-section">
          <div className="ek-contenu">
            <div className="ek-titre-section">
              <p className="ek-surtitre">Mode d&apos;emploi</p>
              <h2>Comment s&apos;en servir</h2>
            </div>
            <ol className="ek-etapes">
              {TABLEAU.etapes.map((etape) => (
                <li key={etape.titre} className="ek-etape">
                  <h3>{etape.titre}</h3>
                  <p>{etape.texte}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="combien" className="ek-section">
          <div className="ek-contenu">
            <div className="ek-titre-section">
              <p className="ek-surtitre">Combien donner ?</p>
              <h2>Des repères, pas une règle</h2>
              <p className="ek-lead">Le bon montant est celui qui convient à votre famille. L&apos;important, c&apos;est qu&apos;il soit clair et régulier.</p>
            </div>
            <div className="ek-deux">
              <div className="ek-bloc">
                <h3>Par semaine, selon l&apos;âge</h3>
                <div className="ek-reperes">
                  {TABLEAU.reperesHebdo.map((repere) => (
                    <p key={repere.age}><span>{repere.age}</span><b>{repere.montant}</b></p>
                  ))}
                </div>
                <p className="ek-source">{TABLEAU.sourceReperes}</p>
                <h3>Ce qu&apos;ils reçoivent en moyenne, par mois</h3>
                <div className="ek-reperes">
                  {TABLEAU.moyennesMensuelles.map((moyenne) => (
                    <p key={moyenne.age}><span>{moyenne.age}</span><b>{moyenne.montant}</b></p>
                  ))}
                </div>
                <p className="ek-source">{TABLEAU.sourceMoyennes}</p>
              </div>
              <div className="ek-bloc">
                <h3>Trois repères qui aident</h3>
                <ol className="ek-conseils">
                  {TABLEAU.conseils.map((conseil) => (
                    <li key={conseil.fort}><b>{conseil.fort}</b>{conseil.suite}</li>
                  ))}
                </ol>
                <p className="ek-source">{TABLEAU.sourceConseils}</p>
                <div className="ek-actions">
                  <BoutonTelecharger emplacement="tableau_reperes" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ek-section">
          <div className="ek-contenu">
            <div className="ek-encart">
              <div className="ek-encart-img">
                <Image src="/images/site/ville-decouverte-automne.webp" alt="La ville d'Econo'kids en automne" fill sizes="(min-width: 980px) 50vw, 100vw" />
              </div>
              <div className="ek-encart-txt">
                <p className="ek-surtitre">Pour aller plus loin, en jouant</p>
                <h2>Une ville pour s&apos;entraîner</h2>
                <p>
                  Dans la ville d&apos;Econo&apos;kids, votre enfant de 9 à 13 ans reçoit un salaire fictif, paie ses dépenses et
                  met de côté pour ses projets. Vous suivez sa progression.
                </p>
                <div className="ek-actions">
                  <CtaLink href={LIENS.inscription} nom="essai_gratuit" emplacement="tableau_encart" className="ek-bouton ek-plein">
                    Essai gratuit de 14 jours
                  </CtaLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
