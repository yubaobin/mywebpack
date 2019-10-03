const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackConfigBase = require('./webpack.base.conf')
const config = require('./env-conf').prod
const webpackConfigDev = {
  mode: 'production',
  output: {
    publicPath: config.publicPath,
    path: path.resolve(__dirname, config.publicPath || 'dist' ),
    filename: 'js/[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_URL': '\"' + process.env.BASE_URL + '\"'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].min.css'
    }),
    //压缩css
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new CleanWebpackPlugin({
      dry: true,
    })
  ],
  devtool: false
}
module.exports = merge(webpackConfigBase, webpackConfigDev)
