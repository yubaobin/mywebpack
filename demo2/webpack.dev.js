const megre = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = megre(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map ',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
})