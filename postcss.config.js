module.exports = (ctx) => {

  const plugins = {
    'postcss-preset-env': {
      autoprefixer: {},
      flexbox: 'no-2009',
      stage: 3,
    },
  };


  if (!/node_modules/.test(ctx.file)) {
    plugins['postcss-px-to-viewport'] = {
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['ignore'],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
    };
  }

 

  return {
    // You can specify any options from https://postcss.org/ctx/#processoptions here
    plugins,
  };
};
