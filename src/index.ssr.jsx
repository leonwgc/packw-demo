import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'react-uni-comps';
import { Provider, configureStore } from 'simple-redux-store';
import App from './App';

export const indexRender = (location, context) => {
  const sheet = new ServerStyleSheet();
  const store = configureStore({ env: 'server' });

  try {
    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <Provider store={store}>
          <App location={location} context={context} />
        </Provider>,
      ),
    );
    const styleTags = sheet.getStyleTags();

    return { html, styleTags };
  } catch (ex) {
    console.log(ex);
  } finally {
    sheet.seal();
  }

  return { html, style };
};
