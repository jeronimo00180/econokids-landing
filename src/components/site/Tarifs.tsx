"use client";

import { useState } from "react";
import { CtaLink } from "@/components/site/CtaLink";
import { LIENS, TARIFS } from "@/lib/site-content";

export function Tarifs() {
  const [formule, setFormule] = useState<"mois" | "an">("an");
  const offre = TARIFS[formule];

  return (
    <section id="tarifs" className="ek-section">
      <div className="ek-contenu">
        <div className="ek-titre-section">
          <p className="ek-surtitre">Tarifs</p>
          <h2>Un prix simple, pour toute la famille</h2>
        </div>
        <div className="ek-bascule" role="group" aria-label="Choisir la formule">
          <button type="button" aria-pressed={formule === "mois"} onClick={() => setFormule("mois")}>
            Au mois
          </button>
          <button type="button" aria-pressed={formule === "an"} onClick={() => setFormule("an")}>
            À l&apos;année · {TARIFS.an.remise}
          </button>
        </div>
        <div className="ek-offre">
          <p className="ek-prix">
            {offre.prix} <small>{offre.periode}</small>
          </p>
          <ul>
            {TARIFS.avantages.map((avantage) => (
              <li key={avantage}>{avantage}</li>
            ))}
          </ul>
          <CtaLink href={LIENS.inscription} nom="essai_gratuit" emplacement="tarifs" className="ek-bouton ek-plein">
            Démarrer l&apos;essai gratuit
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
