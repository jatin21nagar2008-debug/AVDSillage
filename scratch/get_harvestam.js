import https from 'https';

https.get('https://harvestam.webflow.io', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // Find all urls ending in jpg/png/webp
    const allImgs = [...new Set(data.match(/https?:\/\/[^"'\s)]+\.(?:jpg|jpeg|png|webp)/gi) || [])];
    console.log('All image URLs:', allImgs);
  });
}).on('error', err => console.error(err.message));
