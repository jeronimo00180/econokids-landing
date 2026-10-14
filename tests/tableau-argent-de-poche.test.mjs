import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";

// Page du tableau d'argent de poche à imprimer, annoncée par le premier carrousel
// (« Gratuit, lien dans la bio »). Téléchargement libre, sans adresse mail (15/10/2026).
const root = new URL("../", import.meta.url);
const PAGE = "src/app/tableau-argent-de-poche/page.tsx";
const PDF = "/documents/econokids-tableau-argent-de-poche.pdf";

function read(relativePath) {
  return readFileSync(new URL(relativePath, root), "utf8");
}

test("la page du tableau existe avec son adresse canonique", () => {
  assert.equal(existsSync(new URL(PAGE, root)), true);
  const page = read(PAGE);
  assert.match(page, /canonical:\s*"\/tableau-argent-de-poche\/"/);
  assert.match(page, /socialMetadata\(/);
});

test("le PDF est servi par le site, léger pour un téléphone", () => {
  const fichier = new URL(`public${PDF}`, root);
  assert.equal(existsSync(fichier), true, "PDF absent de public/documents");
  assert.equal(readFileSync(fichier).subarray(0, 4).toString(), "%PDF");
  assert.ok(statSync(fichier).size < 1_000_000, "le PDF doit peser moins de 1 Mo");
});

test("le téléchargement est libre et mesuré seulement avec consentement", () => {
  const page = read(PAGE);
  assert.ok(page.includes(PDF), "la page ne pointe pas vers le PDF");
  assert.match(page, /<CtaLink[^>]*nom="telecharger_tableau"/);
  assert.doesNotMatch(page, /<form|type="email"/, "aucune adresse mail ne doit être demandée");
});

test("les repères de montants citent leurs sources", () => {
  const page = (read(PAGE) + read("src/lib/tableau-content.ts")).replaceAll("&apos;", "'");
  assert.match(page, /Clés de la Banque/);
  assert.match(page, /FBF/);
  assert.match(page, /3 à 6 €/);
  assert.match(page, /6 à 12 €/);
});

test("la page est reliée au reste du site", () => {
  assert.match(read("src/app/sitemap.ts"), /\/tableau-argent-de-poche\//);
  assert.match(read("src/components/site/SiteFooter.tsx"), /href="\/tableau-argent-de-poche\/"/);
});
