import https from 'https';

const videoUrl = 'https://cdn.prod.website-files.com/69ca70f522188cd4145a7334/69d4f1d47d770a31c4ca3826_168401-839220651_medium_mp4.mp4';

https.get(videoUrl, res => {
  console.log('Video status:', res.statusCode);
  console.log('Video Content-Length:', res.headers['content-length'], 'bytes (~', Math.round(res.headers['content-length']/1024/1024 * 10)/10, 'MB)');
});
