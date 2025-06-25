import { createCanvas, registerFont } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Register the Kablammo font
try {
  registerFont('./public/fonts/Kablammo-Regular.woff', { family: 'Kablammo' });
  console.log('✓ Kablammo font registered successfully');
} catch (error) {
  console.log('Note: WOFF registration failed, trying WOFF2...');
  try {
    registerFont('./public/fonts/Kablammo-Regular.woff2', { family: 'Kablammo' });
    console.log('✓ Kablammo WOFF2 font registered successfully');
  } catch (error2) {
    console.log('Warning: Could not register Kablammo font, using fallback');
  }
}

// Colors from the site theme
const PINK_COLOR = '#F396E5';

// Function to generate favicon at specific size with transparent background
function generateFavicon(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Leave background transparent (don't fill)

  // Set up text properties
  ctx.fillStyle = PINK_COLOR;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Calculate font size based on canvas size - make it bigger and bolder
  const fontSize = Math.floor(size * 0.8); // 80% of canvas size for better visibility

  // Use the Kablammo font (the fun font from the header)
  ctx.font = `${fontSize}px Kablammo, cursive`;

  // Draw just the filled text (no stroke/outline)
  ctx.fillText('AC', size / 2, size / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  const outputPath = path.join('./public/favicon', filename);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated: ${filename} (${size}x${size}) with transparent background`);
}

// Generate all required favicon sizes
console.log('Generating custom "AC" favicons with transparent background...');

// Ensure favicon directory exists
if (!fs.existsSync('./public/favicon')) {
  fs.mkdirSync('./public/favicon', { recursive: true });
}

// Generate various sizes
generateFavicon(16, 'favicon-16x16.png');
generateFavicon(32, 'favicon-32x32.png');
generateFavicon(180, 'apple-touch-icon.png');
generateFavicon(192, 'android-chrome-192x192.png');
generateFavicon(512, 'android-chrome-512x512.png');

// For the .ico file, use the 32x32 version
const canvas32 = createCanvas(32, 32);
const ctx32 = canvas32.getContext('2d');
ctx32.fillStyle = PINK_COLOR;
ctx32.textAlign = 'center';
ctx32.textBaseline = 'middle';
ctx32.font = '26px Kablammo, cursive';
ctx32.fillText('AC', 16, 16);
const buffer32 = canvas32.toBuffer('image/png');
fs.writeFileSync('./public/favicon/favicon.ico', buffer32);
console.log('Generated: favicon.ico (32x32) with transparent background');

console.log('\n✅ All transparent favicon files generated successfully!');
console.log('The favicons now display "AC" in pink with transparent background.');
console.log('Clear your browser cache to see the changes!');
