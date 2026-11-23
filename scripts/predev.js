import fs from 'fs';
import path from 'path';

const devIndex = path.resolve('index.html.dev');
const rootIndex = path.resolve('index.html');

if (fs.existsSync(devIndex)) {
  fs.copyFileSync(devIndex, rootIndex);
  console.log('✓ Restored dev index.html for local development server');
}
