const { getSsrLib } = require('packx');
const chalk = require('chalk');

getSsrLib({ index: './src/index.ssr.js' }, () => {
  console.log(chalk.yellowBright('lib is ready'));
});
