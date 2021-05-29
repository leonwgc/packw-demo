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
