import https from 'https';

https.get('https://harvestam.webflow.io', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const links = [...new Set(d.match(/href="([^"]+)"/g) || [])];
    console.log('All links on /:');
    links.forEach(l => console.log(l));
  });
});
