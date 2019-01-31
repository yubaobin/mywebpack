const megre = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = megre(common, {
  mode: 'production',
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
})