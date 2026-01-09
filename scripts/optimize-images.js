#!/usr/bin/env node

/**
 * Script d'optimisation des images pour le carrousel
 *
 * Usage:
 *   node scripts/optimize-images.js
 *
 * Ce script:
 * - Prend toutes les images PNG/JPG du dossier public/images/carousel/originals/
 * - Les redimensionne à 1600x1200 (ratio 4:3, qualité Retina)
 * - Les convertit en WebP optimisé
 * - Les sauvegarde dans public/images/carousel/
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/images/carousel/originals');
const OUTPUT_DIR = path.join(__dirname, '../public/images/carousel');

const CONFIG = {
  width: 1600,
  height: 1200,
  quality: 85, // Qualité WebP (0-100)
  fit: 'cover', // cover, contain, fill, inside, outside
};

async function optimizeImage(inputPath, outputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const outputFile = path.join(outputPath, `${filename}.webp`);

  try {
    await sharp(inputPath)
      .resize(CONFIG.width, CONFIG.height, {
        fit: CONFIG.fit,
        position: 'center',
      })
      .webp({ quality: CONFIG.quality })
      .toFile(outputFile);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputFile);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✓ ${filename}`);
    console.log(`  ${(inputStats.size / 1024).toFixed(0)} KB → ${(outputStats.size / 1024).toFixed(0)} KB (-${reduction}%)`);

    return { success: true, filename };
  } catch (error) {
    console.error(`✗ ${filename}: ${error.message}`);
    return { success: false, filename, error: error.message };
  }
}

async function main() {
  console.log('\n🖼️  Optimisation des images du carrousel\n');
  console.log(`Config: ${CONFIG.width}x${CONFIG.height}px, WebP qualité ${CONFIG.quality}\n`);

  // Créer les dossiers si nécessaire
  if (!fs.existsSync(INPUT_DIR)) {
    fs.mkdirSync(INPUT_DIR, { recursive: true });
    console.log(`📁 Dossier créé: ${INPUT_DIR}`);
    console.log('\n⚠️  Placez vos images originales dans ce dossier puis relancez le script.\n');
    console.log('Formats acceptés: .png, .jpg, .jpeg\n');
    return;
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Lister les images
  const files = fs.readdirSync(INPUT_DIR)
    .filter(file => /\.(png|jpg|jpeg)$/i.test(file));

  if (files.length === 0) {
    console.log('⚠️  Aucune image trouvée dans', INPUT_DIR);
    console.log('Formats acceptés: .png, .jpg, .jpeg\n');
    return;
  }

  console.log(`📷 ${files.length} image(s) à optimiser:\n`);

  // Optimiser chaque image
  const results = await Promise.all(
    files.map(file => optimizeImage(path.join(INPUT_DIR, file), OUTPUT_DIR))
  );

  // Résumé
  const success = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log('\n' + '─'.repeat(40));
  console.log(`\n✅ ${success} image(s) optimisée(s)`);
  if (failed > 0) {
    console.log(`❌ ${failed} erreur(s)`);
  }
  console.log(`\n📂 Images sauvegardées dans: ${OUTPUT_DIR}\n`);
}

main().catch(console.error);
