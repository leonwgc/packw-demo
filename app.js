const express = require('express');
const app = express();
const path = require('path');
const ssrRenderer = require('./ssr-lib/index'); // pack.ssr.js 构建的commonjs模块， 导出了一个对象， 包含
app.disable('x-powered-by');
app.enable('trust proxy');

app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'dist')); // specify the views directory
app.engine('html', require('ejs').renderFile);

const distRoot = path.resolve(__dirname, 'dist');

app.use(express.static(distRoot));

app.get(/\/*/, (req, res) => {
  const context = {};

  res.render(
    'index',
    { html: ssrRenderer.indexRender(req.url, context), delimiter: '?' },
    (err, str) => {
      if (err) {
        throw err;
      }
      res.send(str);
    },
  );
});

app.use((req, res) => {
  res.status(404).send('page not found');
});

app.use(function (err, req, res, next) {
  if (err) {
    res.status(500).send('server is down.');
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.info(`==> 🍺  Express server running at localhost: ${PORT}`);
});
