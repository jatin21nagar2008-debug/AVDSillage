import https from 'https';
import fs from 'fs';

const posterUrl = 'https://cdn.prod.website-files.com/69ca70f522188cd4145a7334/69d4f1d47d770a31c4ca3826_168401-839220651_medium_poster.0000000.jpg';
const videoUrl = 'https://cdn.prod.website-files.com/69ca70f522188cd4145a7334/69d4f1d47d770a31c4ca3826_168401-839220651_medium_mp4.mp4';

function dl(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      console.log(dest, 'Status:', res.statusCode, 'Content-Length:', res.headers['content-length']);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Saved', dest, fs.statSync(dest).size, 'bytes');
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  await dl(posterUrl, 'public/images/tractor-hero.jpg');
  // Also check if video can be downloaded or used
  console.log('Done downloading poster');
})();
