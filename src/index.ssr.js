import React from 'react';
import ReactDOMServer from 'react-dom/server';
import H5App from './h5/App';
import PcApp from './pc/App';
import App from './demo/App';

export const h5 = () => {
  return ReactDOMServer.renderToString(<H5App />);
};

export const pc = () => {
  return ReactDOMServer.renderToString(<PcApp />);
};

// use route
export const demo = (location) => {
  return ReactDOMServer.renderToString(<App location={location} />);
};
