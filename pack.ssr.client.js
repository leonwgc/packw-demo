const path = require('path');
const chalk = require('chalk');
const { default: packw } = require('packw');

packw(
  false,
  {
    entry: {
      index: './src/index.jsx',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
    },
  },
  () => {
    console.log(chalk.yellowBright('静态资源构建成功'));
  },
);
