const { default: packw } = require('packw');
const argv = require('yargs').argv;
const pkg = require('./package.json');
const chalk = require('chalk');
const path = require('path');
const process = require('process');

const isDev = !!argv.dev;
const cfg = argv.cfg;
const env = argv.env;
const publicPath = isDev ? '' : `/`;

function getPath(_path) {
  return path.resolve(__dirname, _path);
}

function exit(error) {
  console.log(error);
  process.exit(9);
}

function getDist(env) {
  if (env === 'prd') {
    return getPath(`./dist/${pkg.name}/`);
  } else if (env === 'test') {
    return getPath(`./t-dist/${pkg.name}/`);
  }
}

if (!isDev && !['prd', 'test'].includes(env)) {
  exit('params: env must be prd/test');
}

packw(
  isDev,
  {
    entry: {
      [cfg]: `./src/${cfg}/index`,
    },
    devServer: {
      port: 3000,
    },
    output: {
      path: getDist(env),
      publicPath,
    },
  },
  () => {
    // build mode
    console.log(chalk.yellowBright('构建完成,准备发布'));
  },
);
