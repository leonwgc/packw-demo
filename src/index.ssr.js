import React from 'react';
import ReactDOMServer from 'react-dom/server';
import H5App from './h5/App';
import PcApp from './pc/App';
import App from './route/App';
import { Provider, configureStore } from 'simple-redux-store';

export const h5 = () => {
  return ReactDOMServer.renderToString(<H5App />);
};

export const pc = () => {
  return ReactDOMServer.renderToString(<PcApp />);
};

// use route
export const route = (location) => {
  const store = configureStore({ name: 'wgc' });
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <App location={location} />
    </Provider>,
  );
};
