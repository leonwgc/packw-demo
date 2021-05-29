### packx-demo

##### 开发
- packx start h5
- packx start pc

#### 构建
- packx build h5
- packx build pc

### ssr 

1.  构建ssr commonjs2 lib 
定义入口 index.ssr.js

```js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import H5App from './h5/App';
import PcApp from './pc/App';

export const h5 = () => {
  return ReactDOMServer.renderToString(<H5App />);
};

export const pc = () => {
  return ReactDOMServer.renderToString(<PcApp />);
};

```
2. 定义html模板 （注意 -html用?为了避免和html-webpack-plugin冲突） 

```js
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui,viewport-fit=cover"
    />
    <meta name="format-detection" content="telephone=no, email=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-touch-fullscreen" content="yes" />
    <title></title>
  </head>
  <body style="font-size: 14px">
    <div id="root"><?-html?></div>
  </body>
</html>

```
3.  构建mpa
 packx.config.js

```js
const path = require('path');

module.exports = {
  entry: {
    h5: './src/h5/index',
    pc: './src/pc/index',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
};

```
运行 npx packx run --build 生成dist目录

![ssr.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32a42d9addeb4ceeb8c23ffa07f0ec04~tplv-k3u1fbpfcp-watermark.image)

4. 定义node webserver, 下面以express为例
packx.server.js
```js
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

```
5. 启动server node pack.server.js

6. 访问截图， 包括ssr的html源码

![pc.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cbef3ba6fe146d0a68357a250728d72~tplv-k3u1fbpfcp-watermark.image)


![h5.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/637e32653d704cedb4d4bf1217c3555a~tplv-k3u1fbpfcp-watermark.image)


![h5.src.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15313a2172c549889cbd61e60e15fc74~tplv-k3u1fbpfcp-watermark.image)


![pc.src.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee89111ca952483c8a4b239b147e5a5c~tplv-k3u1fbpfcp-watermark.image)