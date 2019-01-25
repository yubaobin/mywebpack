const megre = require('webpack-merge');
const common = require('./webpack.common');

module.exports = megre(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
})