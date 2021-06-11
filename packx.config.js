const path = require('path');

module.exports = {
  entry: {
    h5: './src/h5/index',
    pc: './src/pc/index',
    index: './src/demo/index',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
};
