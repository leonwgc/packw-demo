module.exports = (ctx) => {
  if (!/node_modules/.test(ctx.file)) {
    ctx.options.plugins.push([
      'postcss-px-to-viewport', {
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
      }
    ]);
  }
};
