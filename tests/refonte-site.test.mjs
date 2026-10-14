import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

// Règles du site refait en octobre 2026 (maquette validée par Jérôme le 14/10/2026).
const root = new URL("../", import.meta.url);
const SIGNATURE = "Apprendre à se servir de l'argent, en jouant.";

function read(relativePath) {
  return readFileSync(new URL(relativePath, root), "utf8");
}

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return statSync(path).isFile() && /\.(ts|tsx|css)$/.test(entry.name) ? [path] : [];
  });
}

function allSource() {
  return sourceFiles(fileURLToPath(new URL("src/", root)))
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");
}

function unescapeJsx(text) {
  return text.replaceAll("&apos;", "'").replaceAll("&rsquo;", "'");
}

test("la signature de la marque est la même sur le site et dans les métadonnées", () => {
  const contents = unescapeJsx(allSource());
  assert.ok(contents.includes(SIGNATURE), "signature absente du code du site");
  const layout = unescapeJsx(read("src/app/layout.tsx"));
  assert.ok(layout.includes(SIGNATURE), "signature absente des métadonnées");
});

test("aucune formule qui fait grandir l'enfant trop vite ni fausse promesse de rythme", () => {
  const contents = unescapeJsx(allSource()).toLowerCase();
  const interdits = [
    "année d'adulte",
    "vie d'adulte",
    "premier salaire",
    "première carte",
    "ses premières",
    "une semaine dans le jeu",
    "semaine réelle",
    "1 semaine de jeu",
  ];
  for (const formule of interdits) {
    assert.equal(contents.includes(formule), false, `Formulation interdite : ${formule}`);
  }
});

test("la page écoles existe et les anciennes adresses y mènent", () => {
  assert.equal(existsSync(new URL("src/app/ecoles/page.tsx", root)), true);
  const config = read("next.config.ts");
  assert.match(config, /source:\s*"\/mairies\/?"/);
  assert.match(config, /source:\s*"\/contact\/?"/);
  assert.match(config, /destination:\s*"\/ecoles\//);
  assert.match(config, /permanent:\s*true/);

  const sitemap = read("src/app/sitemap.ts");
  assert.match(sitemap, /\/ecoles\//);
  assert.doesNotMatch(sitemap, /\/mairies\//);
  assert.doesNotMatch(sitemap, /\/contact\//);
});

test("les liens des réseaux pointent vers les vrais comptes Econo'kids", () => {
  const contents = allSource();
  assert.match(contents, /https:\/\/www\.instagram\.com\/econokids\.fr\//);
  assert.match(contents, /https:\/\/www\.facebook\.com\/econokids\.fr/);
  assert.match(contents, /https:\/\/fr\.pinterest\.com\/econokids\//);
});

test("les chiffres affichés sont ceux de l'application", () => {
  const contenu = unescapeJsx(read("src/lib/site-content.ts"));
  for (const chiffre of ["41", "23", "18", "15"]) {
    assert.ok(contenu.includes(`valeur: "${chiffre}"`), `chiffre manquant : ${chiffre}`);
  }
  assert.match(contenu, /6 thèmes/);
  assert.match(contenu, /4,99 €/);
  assert.match(contenu, /49 €/);
  assert.match(contenu, /3 enfants/);
  assert.match(contenu, /14 jours/);
  assert.match(contenu, /9 à 13 ans/);
});

test("chaque image et vidéo utilisée par le site existe dans public", () => {
  const contents = allSource();
  const medias = new Set(contents.match(/\/(?:images|videos)\/[\w./-]+\.(?:webp|png|svg|mp4|jpg)/g) ?? []);
  assert.ok(medias.size > 10, "trop peu de médias trouvés : le test ne lit pas les bons fichiers");
  for (const media of medias) {
    assert.equal(existsSync(new URL(`public${media}`, root)), true, `média introuvable : ${media}`);
  }
});

test("la page d'accueil n'annonce aucune fonction qui n'existe pas encore sans le dire", () => {
  const contenu = unescapeJsx(read("src/lib/site-content.ts"));
  const missions = contenu.split("\n").filter((ligne) => /missions de la vraie vie/i.test(ligne));
  assert.ok(missions.length > 0, "la ligne des missions a disparu");
  for (const ligne of missions) {
    assert.match(ligne, /bientot:\s*true/, "les missions doivent rester marquées « bientôt »");
  }
});

test("aucun témoignage n'est publié tant qu'il n'y en a pas de vrai", () => {
  assert.match(read("src/lib/testimonials-data.ts"), /=\s*\[\s*\]/);
});
