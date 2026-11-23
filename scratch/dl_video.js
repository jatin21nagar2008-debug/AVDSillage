import https from 'https';
import fs from 'fs';
import path from 'path';

const videoUrl = 'https://cdn.prod.website-files.com/69ca70f522188cd4145a7334/69d4f1d47d770a31c4ca3826_168401-839220651_medium_mp4.mp4';
const dir = 'public/videos';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const file = fs.createWriteStream(path.join(dir, 'tractor-hero.mp4'));
https.get(videoUrl, res => {
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved tractor-hero.mp4 successfully! Size:', fs.statSync('public/videos/tractor-hero.mp4').size);
  });
}).on('error', e => console.error(e));
