
## packw 打包，构建， ssr 示例

##### 开发

- yarn start index

#### 构建

- yarn build index

### ssr

1. node端打包，构建commonjs库, 放在ssr-lib目录, 以动态调用ReactDOMServer.renderToString 生产html

打包命令: node pack.ssr.js, 构建入口 /src/index.ssr.jsx 

```js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider, configureStore } from 'simple-redux-store';
import App from './App';

export const indexRender = (location, context) => {
  const store = configureStore({ name: 'server' });
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <App location={location} context={context} />
    </Provider>,
  );
};

```

2.  web端打包, 执行ReactDOM.hydrate , 打包结果放在dist目录,此时已经构建好css和js bundles , html内容等待node调用ejs注入（埋了一个注入点<?-html?>）

打包命令: node pack.ssr.client.js, 打包入口 /src/index.jsx 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, configureStore } from 'simple-redux-store';
import App from './App';

const store = configureStore({ name: 'client' }, __dev__);

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

```

3. 启动node服务，接受请求， 动态调用commonjs库函数，生产html ,通过ejs 注入到dist模板index.html 文件， 发送给浏览器
    

```js
const express = require('express');
const app = express();
const path = require('path');
const ssrRenderer = require('./ssr-lib/index'); // pack.ssr.js 构建的commonjs模块， 导出了一个对象
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

app.use((req, res, next) => {
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

```
