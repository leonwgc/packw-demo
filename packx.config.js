const path = require('path');

module.exports = {
  entry: {
    h5: './src/h5/index',
    pc: './src/pc/index',
  },
  devServer: {
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
};
