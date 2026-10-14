"use client";

import { useState, type FormEvent } from "react";
import { LIENS } from "@/lib/site-content";

const ROLES = ["Enseignant ou enseignante", "Directeur ou directrice d'école", "Élu ou service municipal", "Autre"];
const LIMITE = 1000;

// Le site n'a pas de serveur d'envoi : le formulaire prépare un email vers l'adresse support,
// que la personne envoie depuis sa propre messagerie.
export function ContactEcoles() {
  const [envoye, setEnvoye] = useState(false);

  const preparer = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const donnees = new FormData(event.currentTarget);
    const champ = (nom: string) => String(donnees.get(nom) ?? "").trim().slice(0, LIMITE);
    const corps = [
      `Nom : ${champ("nom")}`,
      `Fonction : ${champ("role")}`,
      `Commune : ${champ("commune")}`,
      "",
      champ("message") || "Je souhaite une présentation d'Econo'kids pour mon école.",
    ].join("\n");
    const lien = `mailto:${LIENS.support}?subject=${encodeURIComponent("Demande de présentation Econo'kids")}&body=${encodeURIComponent(corps)}`;
    window.location.href = lien;
    setEnvoye(true);
  };

  return (
    <form className="ek-formulaire" onSubmit={preparer}>
      <div className="ek-ligne2">
        <label htmlFor="c-nom">
          Votre nom
          <input id="c-nom" name="nom" type="text" autoComplete="name" maxLength={120} required />
        </label>
        <label htmlFor="c-role">
          Vous êtes
          <select id="c-role" name="role" defaultValue={ROLES[0]}>
            {ROLES.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </label>
      </div>
      <label htmlFor="c-commune">
        Commune
        <input id="c-commune" name="commune" type="text" autoComplete="address-level2" maxLength={120} />
      </label>
      <label htmlFor="c-message">
        Votre message (facultatif)
        <textarea id="c-message" name="message" rows={4} maxLength={LIMITE} />
      </label>
      <button className="ek-bouton ek-plein" type="submit" style={{ justifySelf: "start" }}>
        Préparer l&apos;email de demande
      </button>
      <p className="ek-aide">
        Votre messagerie s&apos;ouvre avec la demande prête à envoyer. Vous pouvez aussi écrire directement à {LIENS.support}.
      </p>
      {envoye ? <p className="ek-aide" role="status">Si rien ne s&apos;est ouvert, copiez l&apos;adresse ci-dessus.</p> : null}
    </form>
  );
}
