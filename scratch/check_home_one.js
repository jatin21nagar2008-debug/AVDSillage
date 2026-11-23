import https from 'https';

https.get('https://harvestam.webflow.io/home-one', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('home-one status:', res.statusCode);
    const heroSection = d.match(/<section[^>]*hero[^>]*>[\s\S]{1,5000}<\/section>/i) || d.match(/class="[^"]*hero[^"]*"[\s\S]{1,3000}/i);
    if (heroSection) {
      console.log('Hero section:', heroSection[0].slice(0, 1500));
    }
    const allImgs = [...new Set(d.match(/https?:\/\/[^"'\s)]+\.(?:jpg|jpeg|png|webp)/gi) || [])];
    console.log('home-one images (first 10):', allImgs.slice(0, 10));
  });
});
