const OSS = require('ali-oss');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const bucket = 'demo-bucket';
const pkg = require('../package.json');
const ossDir = 'ossDir';
const envs = ['prd', 'test'];
const os = require('os');
require('draftlog').into(console);

// upload to ali oss bucket
module.exports = (env) => {
  const key = '9vApxLk5G3PAsJXM';
  const iv = 'FnJL7EDzjqWjcaX9';
  const map = {
    test: 't-dist',
    prd: 'dist',
  };

  if (!env) {
    exit('env is required');
  }

  if (envs.indexOf(env) === -1) {
    exit('env must be ' + envs);
  }

  let client = new OSS({
    region: 'region',
    accessKeyId: 'accessKeyId',
    accessKeySecret: deSign('encryptAccessKeySecret', key, iv),
    bucket: bucket,
  });

  let t = 0;

  async function putOSS(src, dist) {
    try {
      t++;
      await client.put(src, dist);
      t--;
    } catch (e) {
      exit(e);
    }
  }

  // put all files/dirs under dist to ossPath
  function putFolderToOSS(dist, ossPath) {
    fs.readdirSync(dist).forEach((file) => {
      var fileLocaton = path.join(dist, file);
      var stats = fs.lstatSync(fileLocaton);
      if (stats.isFile()) {
        putOSS(`${ossPath}${file}`, fileLocaton);
      } else if (stats.isDirectory()) {
        putFolderToOSS(fileLocaton, `${ossPath}${file}/`);
      }
    });
  }

  const now = getNow();
  mark(path.resolve(__dirname, `../${map[env]}/${pkg.name}/m${now}.txt`));
  let distDir = path.resolve(__dirname, `../${map[env]}/`);

  putFolderToOSS(distDir, `${env}/${ossDir}/`);

  let frame = 0;
  const frames = ['-', '\\', '|', '/'];
  const draft = console.draft();

  function Loading(text) {
    frame = (frame + 1) % frames.length;
    return chalk.green(frames[frame]) + ' ' + chalk.green(text);
  }

  const doneCheck = () => {
    if (t === 0) {
      console.log(chalk.green(`${env === 'prd' ? '生产' : '测试'}发布完成`));
      cleanup();
    } else {
      draft(Loading('发布中...'));
      setTimeout(doneCheck, 60);
    }
  };

  doneCheck();

  function exit(error) {
    console.log(chalk.red(error));
    process.exit(9);
  }

  function genSign(src, key, iv) {
    let sign = '';
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    sign += cipher.update(src, 'utf8', 'hex');
    sign += cipher.final('hex');
    return sign;
  }

  function deSign(sign, key, iv) {
    let src = '';
    const cipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    src += cipher.update(sign, 'hex', 'utf8');
    src += cipher.final('utf8');
    return src;
  }

  function mark(file) {
    const {
      homedir,
      type,
      platform,
      userInfo,
      hostname,
      release,
      networkInterfaces,
    } = os;
    const user = userInfo();

    function getIPAdress() {
      let interfaces = networkInterfaces();
      for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
          let alias = iface[i];
          if (
            alias.family === 'IPv4' &&
            alias.address !== '127.0.0.1' &&
            !alias.internal
          ) {
            return alias.address;
          }
        }
      }
    }

    const me = {
      username: user.username,
      homedir: homedir(),
      platform: platform(),
      hostname: hostname(),
      release: release(),
      ip: getIPAdress(),
      type: type(),
      date: getNow(),
    };

    try {
      fs.writeFileSync(file, JSON.stringify(me, null, 2));
    } catch (ex) {}
  }

  function cleanup() {
    // cleanup
    fs.rmdirSync(path.resolve(__dirname, `../${map[env]}`), {
      recursive: true,
    });
  }

  function getNow() {
    const d = new Date();

    const now = `${d.getFullYear()}-${
      d.getMonth() + 1
    }-${d.getDate()}-${d.getHours()}-${d.getMinutes()}`;

    return now;
  }
};
