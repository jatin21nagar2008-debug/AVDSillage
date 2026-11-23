import fs from 'fs';
import path from 'path';

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

const distIndex = path.resolve('dist', 'index.html');
const dist404 = path.resolve('dist', '404.html');
const root404 = path.resolve('404.html');
const rootIndex = path.resolve('index.html');

if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, dist404);
  fs.copyFileSync(distIndex, root404);
  fs.copyFileSync(distIndex, rootIndex);
  console.log('✓ Successfully updated root index.html and 404.html with production build for GitHub Pages');
}

if (fs.existsSync('dist/assets')) copyDir('dist/assets', 'assets');
if (fs.existsSync('dist/images')) copyDir('dist/images', 'images');
if (fs.existsSync('dist/videos')) copyDir('dist/videos', 'videos');

['favicon.svg', 'robots.txt', 'sitemap.xml'].forEach(f => {
  if (fs.existsSync(`dist/${f}`)) {
    fs.copyFileSync(`dist/${f}`, f);
  }
});

console.log('✓ Successfully synced all assets to root for GitHub Pages direct serving');
