import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

const root = new URL("../", import.meta.url);

function readBuffer(relativePath) {
  return readFileSync(new URL(relativePath, root));
}

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
