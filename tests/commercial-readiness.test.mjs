import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = new URL("../", import.meta.url);

function read(relativePath) {
  return readFileSync(new URL(relativePath, root), "utf8");
}

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return statSync(path).isFile() && /\.(ts|tsx)$/.test(entry.name) ? [path] : [];
  });
}

test("les pages juridiques publient l'identité légale réelle et une date de version fixe", () => {
  const legalFiles = [
    "src/app/cgu/page.tsx",
    "src/app/confidentialite/page.tsx",
    "src/app/mentions-legales/page.tsx",
  ];

  for (const file of legalFiles) {
    const content = read(file);
    assert.match(content, /Jérôme Rembert EI/);
    assert.match(content, /102 279 643 00013/);
    assert.match(content, /61 rue de Lyon, 75012 Paris/);
    assert.doesNotMatch(content, /\bXXX\b/);
    assert.doesNotMatch(content, /new Date\(\)\.toLocaleDateString/);
  }

  const cgu = read("src/app/cgu/page.tsx");
  assert.match(cgu, /Formulaire type de rétractation/);
  assert.doesNotMatch(cgu, /L221-28/);
});

test("le discours public ne contient plus de promesse absolue ou de chiffre non défendable", () => {
  const contents = sourceFiles(fileURLToPath(new URL("src/", root)))
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");

  const forbiddenClaims = [
    "800 000",
    "0 heure d'éducation financière",
    "0 heure d&apos;éducation financière",
    "1 Français sur 2",
    "première application française",
    "100% France",
    "100% sécurisée",
    "RGPD strict",
    "à la lettre",
    "données anonymisées",
    "7 thèmes",
    "fierté garanties",
    "ROI moyen",
    "34,50€",
    "satisfait ou remboursé",
    "Contrat 3 ans : -10% supplémentaire",
    "remise de 10% pour les engagements sur 3 ans",
    "Sous 48h ouvrées",
    "nous vous recontacterons sous 48h",
    "Formation enseignants (2h visio)",
    "13 000€",
  ];

  for (const claim of forbiddenClaims) {
    assert.equal(contents.includes(claim), false, `Formulation interdite encore présente : ${claim}`);
  }

  assert.match(read("src/components/landing/features.tsx"), /6 thèmes/);
});

test("le SEO utilise le domaine canonique www et des routes Next générées", () => {
  const layout = read("src/app/layout.tsx");
  assert.match(layout, /https:\/\/www\.econokids\.fr/);
  assert.match(layout, /alternates:/);
  assert.equal(existsSync(new URL("src/app/sitemap.ts", root)), true);
  assert.equal(existsSync(new URL("src/app/robots.ts", root)), true);
  assert.equal(existsSync(new URL("public/sitemap.xml", root)), false);
  assert.equal(existsSync(new URL("public/robots.txt", root)), false);
  assert.doesNotMatch(read("src/app/page.tsx"), /https:\/\/econokids\.fr/);
});
