const { getSsrLib } = require('packw');
const chalk = require('chalk');

getSsrLib({ index: './src/index/index.ssr.jsx' }, () => {
  console.log(chalk.yellowBright('ssr commonjs lib build successfully'));
});
