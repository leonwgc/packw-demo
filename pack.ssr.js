const { getNodeLib } = require('packw');
const chalk = require('chalk');

getNodeLib({ index: './src/index.ssr.jsx' }, () => {
  console.log(chalk.yellowBright('node库构建成功!'));
  console.log();
  console.log(chalk.green('启动node服务...'));
  console.log();
});
