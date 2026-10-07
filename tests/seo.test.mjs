import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const root = new URL("../", import.meta.url);

function readBuffer(relativePath) {
  return readFileSync(new URL(relativePath, root));
}

function read(relativePath) {
  return readBuffer(relativePath).toString("utf8");
}

const PAGES_WITH_METADATA = [
  "src/app/layout.tsx",
  "src/app/mairies/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/cgu/page.tsx",
  "src/app/confidentialite/page.tsx",
  "src/app/mentions-legales/page.tsx",
];

// Lit largeur, hauteur et type de couleur dans l'en-tête IHDR d'un PNG.
function pngHeader(relativePath) {
  const buffer = readBuffer(relativePath);
  assert.equal(buffer.toString("ascii", 1, 4), "PNG", `${relativePath} n'est pas un PNG`);
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
    colorType: buffer.readUInt8(25),
  };
}

test("les icônes du site sont légères et aux tailles attendues", () => {
  const MAX_BYTES = 50 * 1024;
  const PNG_RGBA = 6;

  const icon = pngHeader("src/app/icon.png");
  assert.equal(icon.width, 192);
  assert.equal(icon.height, 192);
  assert.equal(icon.colorType, PNG_RGBA, "l'icône doit avoir de vrais coins transparents");
  assert.ok(statSync(new URL("src/app/icon.png", root)).size < MAX_BYTES);

  const appleIcon = pngHeader("public/apple-touch-icon.png");
  assert.equal(appleIcon.width, 180);
  assert.equal(appleIcon.height, 180);
  assert.ok(statSync(new URL("public/apple-touch-icon.png", root)).size < MAX_BYTES);
});

test("l'image de partage annonce la même tranche d'âge que le site (9 à 13 ans)", () => {
  const generator = read("scripts/generate-og-image.js");

  assert.doesNotMatch(generator, /\b8\s*(?:-|–|à)\s*13\s*ans\b/i);
  assert.match(generator, /\b9 à 13 ans\b/);
});

test("chaque page publie l'image de partage et ses propres balises Open Graph et Twitter", () => {
  const seo = read("src/lib/seo.ts");
  assert.match(seo, /images:\s*\[OG_IMAGE\]/);
  assert.match(seo, /twitter:/);

  for (const file of PAGES_WITH_METADATA) {
    assert.match(read(file), /socialMetadata\(/, `${file} doit utiliser socialMetadata()`);
  }
});

test("la page Mairies publie en données structurées les FAQ qu'elle affiche", () => {
  const page = read("src/app/mairies/page.tsx");
  assert.match(page, /application\/ld\+json/);
  assert.match(page, /faqPageJsonLd\(\[\.\.\.faqsB2B, \.\.\.faqsMairies\]\)/);

  for (const component of [
    "src/components/landing/faq-b2b.tsx",
    "src/components/landing/faq-mairies.tsx",
  ]) {
    const content = read(component);
    assert.match(content, /@\/lib\/faq-mairies-data/);
    assert.doesNotMatch(content, /question:\s*"/, `${component} ne doit plus contenir ses questions en dur`);
  }
});
