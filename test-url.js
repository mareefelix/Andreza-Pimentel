import https from 'https';

https.get('https://drive.google.com/thumbnail?id=1YwWXqMGVem8vs8YLsfOabGR6gypbs6zX&sz=w1000', (res) => {
  console.log('thumbnail:', res.statusCode);
});

https.get('https://drive.google.com/uc?export=download&id=1YwWXqMGVem8vs8YLsfOabGR6gypbs6zX', (res) => {
  console.log('uc download:', res.statusCode);
});

https.get('https://lh3.googleusercontent.com/d/1YwWXqMGVem8vs8YLsfOabGR6gypbs6zX', (res) => {
  console.log('lh3:', res.statusCode);
});
