const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  entry: {
    hotMiddle: 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&timeout=20000&reload=true',
    app: './src/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-cheap-source-map',
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'HtmlWebpackPlugin',
      template: path.resolve(__dirname, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ],
      exclude: [path.resolve(__dirname, 'src/font')]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      include: [path.resolve(__dirname, 'src/font')],
      use: [
        'file-loader'
      ]
    }]
  }
}