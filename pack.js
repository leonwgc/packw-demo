const { default: packw } = require('packw');
const argv = require('yargs').argv;
const chalk = require('chalk');
const path = require('path');

const isDev = !!argv.dev;

packw(
  isDev,
  {
    entry: {
      index: `./src/index`,
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
    output: {
      path: path.resolve(__dirname, './dist'),
    },
  },
  () => {
    console.log(chalk.green('构建完成，这里可以进行oss上传等操作..'));
  },
);
