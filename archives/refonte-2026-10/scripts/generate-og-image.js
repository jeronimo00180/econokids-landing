#!/usr/bin/env node

/**
 * Génération de l'image Open Graph (partages sociaux)
 *
 * Usage:
 *   node scripts/generate-og-image.js
 *
 * Produit public/images/og-image.png en 1200x630 :
 * - Fond dégradé subtil #eff6ff -> #ffffff
 * - Accent bleu primary #3b82f6 (barre décorative)
 * - Logo Econo'kids composité en haut
 * - Titre principal + sous-titre + mention du domaine
 *
 * Le texte est rendu via SVG (font-family Arial/sans-serif pour
 * la compatibilité Windows, qui ne dispose pas d'Inter par défaut).
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const WIDTH = 1200;
const HEIGHT = 630;

const LOGO_PATH = path.join(__dirname, "../public/images/logo.png");
const OUTPUT_PATH = path.join(__dirname, "../public/images/og-image.png");

// Largeur du logo composité (ratio d'origine 600x186 préservé)
const LOGO_WIDTH = 360;
const LOGO_HEIGHT = Math.round((LOGO_WIDTH * 186) / 600); // ~112

// Couleurs du design system
const COLOR_GRADIENT_TOP = "#eff6ff"; // primary-50
const COLOR_GRADIENT_BOTTOM = "#ffffff";
const COLOR_PRIMARY = "#3b82f6";
const COLOR_TEXT_DARK = "#0f172a";
const COLOR_TEXT_MUTED = "#64748b";

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildBackgroundSvg() {
  // Fond dégradé + barre d'accent verticale gauche + forme décorative douce
  return `
  <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${COLOR_GRADIENT_TOP}" />
        <stop offset="100%" stop-color="${COLOR_GRADIENT_BOTTOM}" />
      </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
    <!-- Barre d'accent primary à gauche -->
    <rect x="0" y="0" width="14" height="${HEIGHT}" fill="${COLOR_PRIMARY}" />
    <!-- Cercles décoratifs subtils en bas à droite -->
    <circle cx="1120" cy="560" r="200" fill="${COLOR_PRIMARY}" opacity="0.06" />
    <circle cx="1180" cy="120" r="120" fill="${COLOR_PRIMARY}" opacity="0.05" />
    <!-- Filet d'accent sous le bloc texte -->
    <rect x="80" y="380" width="120" height="8" rx="4" fill="${COLOR_PRIMARY}" />
  </svg>`;
}

function buildTextSvg() {
  const title = escapeXml("L'éducation financière, en jouant");
  const subtitle = escapeXml(
    "Pour les 8-13 ans · Essai gratuit de 14 jours"
  );
  const domain = escapeXml("econokids.fr");

  return `
  <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .title { font-family: Arial, 'Helvetica Neue', sans-serif; font-weight: 800; fill: ${COLOR_TEXT_DARK}; }
      .subtitle { font-family: Arial, 'Helvetica Neue', sans-serif; font-weight: 600; fill: ${COLOR_TEXT_MUTED}; }
      .domain { font-family: Arial, 'Helvetica Neue', sans-serif; font-weight: 700; fill: ${COLOR_PRIMARY}; }
    </style>
    <text x="80" y="320" class="title" font-size="64">${title}</text>
    <text x="80" y="440" class="subtitle" font-size="34">${subtitle}</text>
    <text x="80" y="560" class="domain" font-size="28">${domain}</text>
  </svg>`;
}

async function main() {
  console.log("\n🖼️  Génération de l'image Open Graph\n");

  if (!fs.existsSync(LOGO_PATH)) {
    console.error(`✗ Logo introuvable : ${LOGO_PATH}`);
    process.exitCode = 1;
    return;
  }

  try {
    // Logo redimensionné. Le PNG d'origine a un fond quasi-blanc sans
    // transparence : on l'aplatit sur la couleur du haut du dégradé
    // (#eff6ff) pour que le logo se fonde dans le fond, sans rectangle visible.
    const logoBuffer = await sharp(LOGO_PATH)
      .resize(LOGO_WIDTH, LOGO_HEIGHT, {
        fit: "contain",
        background: { r: 0xef, g: 0xf6, b: 0xff, alpha: 1 },
      })
      .flatten({ background: { r: 0xef, g: 0xf6, b: 0xff } })
      .png()
      .toBuffer();

    const backgroundSvg = Buffer.from(buildBackgroundSvg());
    const textSvg = Buffer.from(buildTextSvg());

    await sharp({
      create: {
        width: WIDTH,
        height: HEIGHT,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      },
    })
      .composite([
        { input: backgroundSvg, top: 0, left: 0 },
        { input: logoBuffer, top: 80, left: 80 },
        { input: textSvg, top: 0, left: 0 },
      ])
      .png()
      .toFile(OUTPUT_PATH);

    const stats = fs.statSync(OUTPUT_PATH);
    console.log(`✓ Image générée : ${OUTPUT_PATH}`);
    console.log(`  ${WIDTH}x${HEIGHT} · ${(stats.size / 1024).toFixed(0)} KB\n`);
  } catch (error) {
    console.error("✗ Échec de la génération :", error.message);
    process.exitCode = 1;
  }
}

main();
