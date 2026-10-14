import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/site/CtaLink";
import { faqs } from "@/lib/faq-data";
import { APPRENTISSAGES, CHIFFRES, ETAPES, GARANTIES, HEROS, LIENS, PARENTS, SIGNATURE } from "@/lib/site-content";

export function Heros() {
  return (
    <div className="ek-contenu ek-heros">
      <div className="ek-heros-texte">
        <p className="ek-surtitre">{HEROS.surTitre}</p>
        <h1>{SIGNATURE}</h1>
        <p className="ek-lead">{HEROS.texte}</p>
        <div className="ek-actions">
          <CtaLink href={LIENS.inscription} nom="essai_gratuit" emplacement="heros" className="ek-bouton ek-plein">
            Démarrer l&apos;essai gratuit de 14 jours
          </CtaLink>
          <a className="ek-bouton ek-clair" href="#film">Voir le film (39 s)</a>
        </div>
        <ul className="ek-garanties">
          {HEROS.garanties.map((garantie) => (
            <li key={garantie}>{garantie}</li>
          ))}
        </ul>
      </div>
      <div className="ek-heros-visuel">
        <Image
          className="ek-heros-image"
          src="/images/site/ville-decouverte-automne.webp"
          alt="La ville d'Econo'kids en automne"
          fill
          priority
          sizes="(min-width: 980px) 55vw, 100vw"
        />
        <video
          src="/videos/ville-boucle.mp4"
          poster="/images/site/ville-decouverte-automne.webp"
          autoPlay
          muted
          loop
          playsInline
          aria-label="La ville d'Econo'kids en automne, animée"
        />
        <a className="ek-pastille" href="#film">Voir le film</a>
      </div>
    </div>
  );
}

function VisuelApprentissage({ type }: { type: (typeof APPRENTISSAGES)[number]["visuel"] }) {
  switch (type) {
    case "salaire":
      return (
        <>
          <Image className="ek-fond" src="/images/site/entreprise-decouverte-automne.webp" alt="" fill sizes="(min-width: 980px) 33vw, 100vw" />
          <div className="ek-fiche-paie" aria-hidden="true">
            <div><span>Salaire brut</span><span>2 000 €</span></div>
            <div><span>Impôts (10 %)</span><span>- 200 €</span></div>
            <div className="ek-net"><span>Net</span><span>1 800 €</span></div>
          </div>
          <Image src="/images/site/margaux.webp" alt="" width={1024} height={1024} style={{ width: "38%", right: "6%", bottom: "4%" }} />
        </>
      );
    case "depenses":
      return <Image className="ek-fond" src="/images/site/maison-decouverte-automne.webp" alt="" fill sizes="(min-width: 980px) 33vw, 100vw" />;
    case "epargne":
      return (
        <>
          <Image className="ek-fond" src="/images/site/banque-decouverte-automne.webp" alt="" fill sizes="(min-width: 980px) 33vw, 100vw" />
          <Image src="/images/site/objet-bocal-plein.webp" alt="" width={1024} height={1024} style={{ width: "34%", right: "8%", bottom: "10%" }} />
        </>
      );
    case "choix":
      return (
        <>
          <Image src="/images/site/objet-panier-besoin.webp" alt="" width={1024} height={1024} style={{ width: "36%", left: "10%", bottom: "8%" }} />
          <Image src="/images/site/objet-panier-envie.webp" alt="" width={1024} height={1024} style={{ width: "36%", right: "10%", bottom: "8%" }} />
          <Image src="/images/site/objet-pomme.webp" alt="" width={1024} height={1024} style={{ width: "18%", left: "19%", top: "10%" }} />
          <Image src="/images/site/objet-console.webp" alt="" width={1024} height={1024} style={{ width: "20%", right: "18%", top: "10%" }} />
        </>
      );
    case "dons":
      return <Image src="/images/site/nour.webp" alt="" width={345} height={760} style={{ height: "96%", width: "auto", left: "50%", bottom: 0, transform: "translateX(-50%)" }} />;
    case "emotions":
      return (
        <>
          <Image src="/images/site/arbre.webp" alt="" width={640} height={640} style={{ height: "90%", width: "auto", left: "30%", bottom: "4%", transform: "translateX(-50%)" }} />
          <Image src="/images/site/plante.webp" alt="" width={640} height={640} style={{ height: "60%", width: "auto", right: "12%", bottom: "6%" }} />
        </>
      );
  }
}

export function Apprentissages() {
  return (
    <section id="apprend" className="ek-section">
      <div className="ek-contenu">
        <div className="ek-titre-section">
          <p className="ek-surtitre">Ce qu&apos;il apprend</p>
          <h2>Comprendre, puis choisir</h2>
        </div>
        <div className="ek-apprentissages">
          {APPRENTISSAGES.map((element) => (
            <article key={element.titre} className="ek-app">
              <div className="ek-app-visuel">
                <VisuelApprentissage type={element.visuel} />
              </div>
              <div className="ek-app-corps">
                <h3>{element.titre}</h3>
                <p>{element.texte}</p>
              </div>
            </article>
          ))}
        </div>
        <ul className="ek-chiffres">
          {CHIFFRES.map((chiffre) => (
            <li key={chiffre.libelle}>
              <b>{chiffre.valeur}</b>
              <span>{chiffre.libelle}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Film() {
  return (
    <section id="film" className="ek-section">
      <div className="ek-contenu">
        <div className="ek-titre-section">
          <p className="ek-surtitre">Le film</p>
          <h2>39 secondes dans la ville</h2>
        </div>
        <video className="ek-film" src="/videos/film-econokids.mp4" poster="/images/site/ville-decouverte-automne.webp" controls playsInline preload="none" />
      </div>
    </section>
  );
}

export function Rythme() {
  return (
    <section id="rythme" className="ek-section">
      <div className="ek-contenu">
        <div className="ek-titre-section">
          <p className="ek-surtitre">À son âge, à son rythme</p>
          <h2>Comment ça se passe</h2>
        </div>
        <ol className="ek-etapes">
          {ETAPES.map((etape) => (
            <li key={etape.titre} className="ek-etape">
              <h3>{etape.titre}</h3>
              <p>{etape.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Parents() {
  return (
    <section id="parents" className="ek-section">
      <div className="ek-contenu ek-parents">
        <div className="ek-parents-visuel" aria-hidden="true">
          <Image src="/images/site/basile.webp" alt="" width={1024} height={1024} style={{ width: "46%", left: "4%", bottom: 0 }} />
          <Image src="/images/site/objet-bocal-plein.webp" alt="" width={1024} height={1024} style={{ width: "34%", right: "28%", bottom: "8%" }} />
          <Image src="/images/site/arbre.webp" alt="" width={640} height={640} style={{ width: "30%", right: "2%", bottom: "6%" }} />
        </div>
        <div className="ek-titre-section" style={{ margin: 0 }}>
          <p className="ek-surtitre">Pour les parents</p>
          <h2>Vous gardez la main</h2>
          <ul className="ek-liste-parents">
            {PARENTS.map((ligne) => (
              <li key={ligne.fort}>
                <span>
                  <b>{ligne.fort}</b>
                  {ligne.suite}
                  {ligne.bientot ? <span className="ek-bientot">bientôt</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Confiance() {
  return (
    <section className="ek-section">
      <div className="ek-contenu">
        <div className="ek-confiance">
          <div className="ek-confiance-img">
            <Image src="/images/site/ville-horizon-hiver.webp" alt="La ville Horizon, de nuit sous la neige" fill sizes="(min-width: 980px) 50vw, 100vw" />
          </div>
          <div className="ek-confiance-txt">
            <p className="ek-surtitre">Confiance</p>
            <h2>Pensé pour des enfants, dès le départ</h2>
            <ul>
              {GARANTIES.map((garantie) => (
                <li key={garantie.fort}>
                  <span>
                    <b>{garantie.fort}</b>
                    {garantie.suite}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Questions() {
  return (
    <section id="questions" className="ek-section">
      <div className="ek-contenu">
        <div className="ek-titre-section">
          <p className="ek-surtitre">Questions</p>
          <h2>Ce que les parents nous demandent</h2>
        </div>
        <div className="ek-faq">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reseaux() {
  return (
    <section className="ek-section">
      <div className="ek-contenu">
        <div className="ek-encart">
          <div className="ek-encart-txt">
            <p className="ek-surtitre">Nous suivre</p>
            <h2>Des idées pour parler d&apos;argent en famille</h2>
            <p>Chaque semaine, une activité, une notion expliquée simplement ou un moment de la ville.</p>
            <div className="ek-reseaux">
              <a className="ek-bouton ek-clair" href={LIENS.instagram} rel="noopener" target="_blank">Instagram</a>
              <a className="ek-bouton ek-clair" href={LIENS.facebook} rel="noopener" target="_blank">Facebook</a>
              <a className="ek-bouton ek-clair" href={LIENS.pinterest} rel="noopener" target="_blank">Pinterest</a>
            </div>
          </div>
          <div className="ek-encart-img">
            <Image src="/images/site/ville-horizon-hiver.webp" alt="" fill sizes="(min-width: 980px) 50vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function EncartEcoles() {
  return (
    <section id="ecoles" className="ek-section">
      <div className="ek-contenu">
        <div className="ek-encart">
          <div className="ek-encart-img">
            <Image src="/images/site/ville-atelier-printemps.webp" alt="La ville Atelier au printemps" fill sizes="(min-width: 980px) 50vw, 100vw" />
          </div>
          <div className="ek-encart-txt">
            <p className="ek-surtitre">Écoles et mairies</p>
            <h2>Le même jeu, en classe</h2>
            <p>Six séances de 30 minutes pour le CM1, le CM2 et la 6e, en individuel, en groupe ou en classe entière au tableau. Les élèves se connectent avec un code de classe, sans adresse email.</p>
            <Link className="ek-bouton ek-clair" href="/ecoles/" style={{ justifySelf: "start" }}>
              Découvrir le programme pour les écoles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
