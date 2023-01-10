const { getSsrLib } = require('packw');
const chalk = require('chalk');

getSsrLib({ index: './src/index.ssr.jsx' }, () => {
  console.log(chalk.yellowBright('ssr node构建成功'));
});
