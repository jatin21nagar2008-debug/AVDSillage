const https = require('https');

const queries = ['tractor field', 'green tractor agriculture', 'tractor silage harvest'];

async function searchUnsplash(q) {
  return new Promise((resolve) => {
    const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(q)}&per_page=10`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.results) {
            resolve(parsed.results.map(r => ({
              id: r.id,
              desc: r.description || r.alt_description,
              url: r.urls.raw,
              width: r.width,
              height: r.height
            })));
          } else {
            resolve([]);
          }
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function main() {
  for (const q of queries) {
    const items = await searchUnsplash(q);
    console.log(`=== Query: ${q} (${items.length} results) ===`);
    items.forEach(it => {
      console.log(`- ID: ${it.id} | Desc: ${it.desc} | URL: ${it.url}`);
    });
  }
}

main();
