import fs from 'fs';
import https from 'https';

https.get('https://harvestam.webflow.io', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // Find text near Landing-banner
    const idx = data.indexOf('Landing-banner');
    if (idx !== -1) {
      console.log('Near Landing-banner:', data.slice(Math.max(0, idx - 400), idx + 400));
    }
    const idx2 = data.indexOf('Sustainable farming for better');
    if (idx2 !== -1) {
      console.log('Near Sustainable farming text:', data.slice(Math.max(0, idx2 - 500), idx2 + 800));
    }
  });
});
