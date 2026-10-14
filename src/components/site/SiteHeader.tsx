import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/site/CtaLink";
import { LIENS } from "@/lib/site-content";

const NAVIGATION = [
  { href: "/#ville", libelle: "Le jeu" },
  { href: "/#parents", libelle: "Pour les parents" },
  { href: "/ecoles/", libelle: "Écoles et mairies" },
  { href: "/#tarifs", libelle: "Tarifs" },
  { href: "/#questions", libelle: "Questions" },
];

export function SiteHeader() {
  return (
    <header className="ek-entete">
      <div className="ek-contenu ek-entete-in">
        <Link className="ek-logo" href="/" aria-label="Econo'kids, accueil">
          <Image src="/images/site/icone.png" alt="" width={27} height={34} priority />
          <Image src="/images/site/wordmark-A-light.svg" alt="Econo'kids" width={150} height={34} priority />
        </Link>
        <nav className="ek-nav" aria-label="Navigation principale">
          {NAVIGATION.map((lien) => (
            <Link key={lien.href} href={lien.href}>
              {lien.libelle}
            </Link>
          ))}
        </nav>
        <CtaLink href={LIENS.inscription} nom="essai_gratuit" emplacement="entete" className="ek-bouton ek-plein">
          <span className="ek-long">Essayer gratuitement</span>
          <span className="ek-court">Essayer</span>
        </CtaLink>
      </div>
    </header>
  );
}
