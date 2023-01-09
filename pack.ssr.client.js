const path = require('path');
const chalk = require('chalk');
const { default: packw } = require('packw');

packw(
  false,
  {
    entry: {
      index: './src/index/index.jsx',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
    },
  },
  () => {
    console.log(chalk.yellowBright('static assets build successfully'));
  },
);
