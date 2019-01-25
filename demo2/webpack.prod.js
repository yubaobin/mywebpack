const megre = require('webpack-merge');
const common = require('./webpack.common');

module.exports = megre(common, {
  mode: 'production',
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    }
  }
})