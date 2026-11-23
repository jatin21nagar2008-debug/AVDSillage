import https from 'https';

const pages = ['/', '/home-1', '/home-2', '/home-3', '/home-v1', '/home-v2', '/home-v3'];

pages.forEach(p => {
  https.get(`https://harvestam.webflow.io${p}`, res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      console.log(`Page: ${p} - Status: ${res.statusCode} - Length: ${d.length}`);
      const bgMatch = d.match(/(https:\/\/[^"'\s)]+\.(?:jpg|jpeg|png|webp))/gi);
      if (bgMatch) {
        console.log(`First 5 images on ${p}:`, bgMatch.slice(0, 5));
      }
    });
  });
});
