const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: './dist',
    compress: true,
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
