import https from 'https';
import fs from 'fs';
import path from 'path';

const candidates = [
  'https://cdn.prod.website-files.com/69ca70f522188cd4145a7334/69e7013e139ac5ddbe53c1f7_Landing-banner.webp',
  'https://cdn.prod.website-files.com/69ca70f522188cd4145a7334/69e70389b313c176d232d34c_Landing-hero-v1.webp',
  'https://cdn.prod.website-files.com/69ca70f522188cd4145a7334/69e7038950be5b4a677798b3_Landing-hero-v2.webp',
  'https://cdn.prod.website-files.com/69ca70f522188cd4145a7334/69e703898535ff5f52900b30_Landing-hero-v3.webp',
  'https://cdn.prod.website-files.com/69ca70f522188cd4145a7334/69e703899ee98015bd7ed94c_Landing-hero-v4.webp'
];

async function download(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved ${filename} (${fs.statSync(filename).size} bytes)`);
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  for (let i = 0; i < candidates.length; i++) {
    await download(candidates[i], `scratch/candidate_${i+1}.webp`);
  }
})();
