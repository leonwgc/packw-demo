const path = require('path');
const chalk = require('chalk');
const { default: packw } = require('packw');

packw(
  false,
  {
    entry: {
      h5: './src/h5/index',
      pc: './src/pc/index',
      route: './src/route/index',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
    },
  },
  () => {
    console.log(chalk.yellowBright('static assets build successfully'));
  },
);
