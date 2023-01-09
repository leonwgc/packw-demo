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
