import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/images";
const outputDir = "public/images-optimized";

fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter(f =>
  /\.(png|jpg|jpeg)$/i.test(f)
);

let ok = 0;
let bad = 0;

for (const file of files) {
  const inPath = path.join(inputDir, file);
  const base = file.replace(/\.(png|jpg|jpeg)$/i, "");
  const outPath = path.join(outputDir, `${base}.webp`);

  try {
    const img = sharp(inPath);
    const meta = await img.metadata();

    const maxWidth = 1600;
    const resized =
      meta.width && meta.width > maxWidth
        ? img.resize({ width: maxWidth })
        : img;

    await resized.webp({ quality: 75 }).toFile(outPath);
    console.log(`✓ Optimized: ${file}`);
    ok++;
  } catch (err) {
    console.log(`✗ Skipped (unsupported/corrupt): ${file}`);
    bad++;
  }
}

console.log(`Done. Optimized: ${ok}, Skipped: ${bad}`);
console.log("Output folder: public/images-optimized");
