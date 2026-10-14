"use client";

import Image from "next/image";
import Link from "next/link";
import { openCookieSettings } from "@/components/cookie-consent";
import { CtaLink } from "@/components/site/CtaLink";
import { LIENS, SIGNATURE } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="ek-pied">
      <div className="ek-contenu ek-pied-grille">
        <div style={{ display: "grid", gap: 10, alignContent: "start" }}>
          <Image src="/images/site/wordmark-A-dark.svg" alt="Econo'kids" width={170} height={38} />
          <p className="ek-signature">{SIGNATURE}</p>
          <p style={{ fontSize: "0.9rem" }}>{LIENS.support}</p>
        </div>
        <div>
          <h3>Le jeu</h3>
          <Link href="/#ville">La ville</Link>
          <Link href="/#apprend">Ce qu&apos;il apprend</Link>
          <Link href="/#film">Le film</Link>
          <Link href="/#tarifs">Tarifs</Link>
          <CtaLink href={LIENS.connexion} nom="connexion" emplacement="pied">Se connecter</CtaLink>
        </div>
        <div>
          <h3>Écoles et mairies</h3>
          <Link href="/ecoles/">Le programme</Link>
          <Link href="/ecoles/#contact">Demander une présentation</Link>
        </div>
        <div>
          <h3>Nous suivre</h3>
          <a href={LIENS.instagram} rel="noopener" target="_blank">Instagram</a>
          <a href={LIENS.facebook} rel="noopener" target="_blank">Facebook</a>
          <a href={LIENS.pinterest} rel="noopener" target="_blank">Pinterest</a>
          <Link href="/mentions-legales/">Mentions légales</Link>
          <Link href="/confidentialite/">Confidentialité</Link>
          <Link href="/cgu/">CGU et CGV</Link>
          <button type="button" onClick={openCookieSettings}>Gestion des cookies</button>
        </div>
      </div>
    </footer>
  );
}
