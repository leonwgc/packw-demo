const path = require('path');
const chalk = require('chalk');
const { default: packx } = require('packx');

packx(
  false,
  {
    entry: {
      h5: './src/h5/index',
      pc: './src/pc/index',
      index: './src/demo/index',
    },
    devServer: {
      port: 3000,
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '',
    },
  },
  () => {
    console.log(chalk.yellowBright('static assets build successfully'));
  },
);
