const { getSsrLib } = require('packw');
const chalk = require('chalk');

getSsrLib({ index: './src/index.ssr.js' }, () => {
  console.log(chalk.yellowBright('ssr commonjs lib build successfully'));
});
