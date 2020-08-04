const path = require('path');
const express = require('express');
const renderer = require('express-art-template');

const app = express();

app.use('/public', express.static('./public'));
app.engine('html', renderer);
app.set('views', './public');

app.get('/', (req, res) => {
  // express 提供的 send 方法，可以为响应自动添加编码，不会出现乱码
  res.send('hello 测试中文字符');
});

app.get('/page', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Hello page 测试中文字符</h1>
    </body>
  </html>`);
});

app.get('/index', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.get('/ssr', (req, res) => {
  res.render('index.html', {
    title: 'public/index.html',
  });
});

app.listen(4000, () => {
  console.log('server is running...');
});
