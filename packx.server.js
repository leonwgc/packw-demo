const express = require('express');
const app = express();
const path = require('path');
const { h5, pc } = require('./ssr-lib/index');
app.disable('x-powered-by');
app.enable('trust proxy');

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, 'dist'));

const distRoot = path.resolve(__dirname, 'dist');

app.get(/\.html?/, (req, res, next) => {
  res.redirect('/');
});

app.use(express.static(distRoot));

app.get(/\/h5/, (req, res, next) => {
  // h5() get h5 ssr content
  res.render('h5', { html: h5(), delimiter: '?' }, (err, str) => {
    if (err) {
      throw err;
    }
    res.send(str);
  });
});

app.get(/\//, (req, res, next) => {
  // pc() get pc ssr content
  res.render('pc', { html: pc(), delimiter: '?' }, (err, str) => {
    if (err) {
      throw err;
    }
    res.send(str);
  });
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
