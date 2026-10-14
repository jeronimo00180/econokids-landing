"use client";

import Image from "next/image";
import { useState } from "react";
import { LIEUX } from "@/lib/site-content";

// Carte de la ville : on touche un bâtiment (point numéroté ou bouton) pour voir ce que l'enfant y fait.
export function CarteVille() {
  const [actif, setActif] = useState("banque");
  const lieu = LIEUX.find((element) => element.cle === actif) ?? LIEUX[0];

  return (
    <div className="ek-ville">
      <div className="ek-carte">
        <Image
          src="/images/site/ville-decouverte-automne.webp"
          alt="La ville d'Econo'kids en automne, avec ses neuf bâtiments"
          width={1536}
          height={1024}
          sizes="(min-width: 980px) 60vw, 100vw"
        />
        {LIEUX.map((element, index) => (
          <button
            key={element.cle}
            type="button"
            className="ek-point"
            style={{ left: `${element.position.x}%`, top: `${element.position.y}%` }}
            aria-label={element.nom}
            aria-pressed={element.cle === actif}
            onClick={() => setActif(element.cle)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="ek-fiche-lieu">
        <div aria-live="polite">
          {lieu.perso ? <Image className="ek-perso" src={lieu.perso} alt="" width={96} height={96} /> : null}
          <h3>{lieu.nom}</h3>
          <ul>
            {lieu.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="ek-lieux" role="group" aria-label="Choisir un bâtiment">
          {LIEUX.map((element) => (
            <button key={element.cle} type="button" aria-pressed={element.cle === actif} onClick={() => setActif(element.cle)}>
              {element.court}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
