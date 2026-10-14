import type { Metadata } from "next";
import Image from "next/image";
import { ContactEcoles } from "@/components/site/ContactEcoles";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { faqsB2B, faqsMairies } from "@/lib/faq-mairies-data";
import { faqPageJsonLd, socialMetadata } from "@/lib/seo";
import { ECOLES } from "@/lib/site-content";

const title = "Éducation financière à l'école, du CM1 à la 6e | Econo'kids";
const description =
  "Apprendre à se servir de l'argent, en classe : six séances de 30 minutes dans la ville d'Econo'kids pour le CM1, le CM2 et la 6e. Guide de l'enseignant, argent fictif, sans email d'élève.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ecoles/" },
  ...socialMetadata({ title, description, path: "/ecoles/" }),
};

const questionsEcoles = [...faqsB2B, ...faqsMairies];
const faqJsonLd = faqPageJsonLd([...faqsB2B, ...faqsMairies]);

export default function EcolesPage() {
  return (
    <div className="ek">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />
      <main>
        <div className="ek-contenu ek-heros">
          <div className="ek-heros-texte">
            <p className="ek-surtitre">{ECOLES.surTitre}</p>
            <h1>Apprendre à se servir de l&apos;argent, en classe.</h1>
            <p className="ek-lead">{ECOLES.texte}</p>
            <div className="ek-actions">
              <a className="ek-bouton ek-plein" href="#contact">Demander une présentation</a>
              <a className="ek-bouton ek-clair" href="#programme">Voir le programme</a>
            </div>
          </div>
          <Image
            src="/images/site/ville-ecole-printemps.webp"
            alt="La ville d'Econo'kids en version école, au printemps, avec un jardin"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 980px) 55vw, 100vw"
            style={{ width: "100%", height: "auto", borderRadius: 28, boxShadow: "var(--ombre)" }}
          />
        </div>

        <section id="programme" className="ek-section">
          <div className="ek-contenu">
            <div className="ek-titre-section">
              <p className="ek-surtitre">Le programme</p>
              <h2>Six séances, une progression</h2>
              <p className="ek-lead">Chaque séance dure 30 minutes. Le déroulé, les questions d&apos;échange et les corrections sont dans le guide de l&apos;enseignant.</p>
            </div>
            <ol className="ek-seances">
              {ECOLES.seances.map((seance) => (
                <li key={seance} className="ek-seance"><h3>{seance}</h3></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ek-section">
          <div className="ek-contenu">
            <div className="ek-titre-section">
              <p className="ek-surtitre">En classe</p>
              <h2>Trois façons de jouer</h2>
            </div>
            <div className="ek-trois">
              {ECOLES.modes.map((mode) => (
                <div key={mode.titre} className="ek-carte-texte">
                  <h3>{mode.titre}</h3>
                  <p>{mode.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ek-section">
          <div className="ek-contenu ek-deux">
            <div className="ek-bloc">
              <p className="ek-surtitre">Pour l&apos;enseignant</p>
              <h2>Tout est prêt</h2>
              <ul>{ECOLES.enseignant.map((ligne) => <li key={ligne}>{ligne}</li>)}</ul>
            </div>
            <div className="ek-bloc">
              <p className="ek-surtitre">Pour la mairie</p>
              <h2>Une vue sur toutes les écoles</h2>
              <ul>{ECOLES.mairie.map((ligne) => <li key={ligne}>{ligne}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="ek-section">
          <div className="ek-contenu">
            <div className="ek-donnees">
              <p className="ek-surtitre">Données des élèves</p>
              <h2>Le minimum, et bien protégé</h2>
              <ul>
                {ECOLES.donnees.map((ligne) => (
                  <li key={ligne.fort}><b>{ligne.fort}</b>{ligne.suite}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="questions" className="ek-section">
          <div className="ek-contenu">
            <div className="ek-titre-section">
              <p className="ek-surtitre">Questions</p>
              <h2>Ce que les écoles et les mairies nous demandent</h2>
            </div>
            <div className="ek-faq">
              {questionsEcoles.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="ek-section">
          <div className="ek-contenu">
            <div className="ek-titre-section">
              <p className="ek-surtitre">Contact</p>
              <h2>Demander une présentation</h2>
              <p className="ek-lead">{ECOLES.presentation}</p>
            </div>
            <ContactEcoles />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
