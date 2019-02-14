const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '', dir)
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    demoBabel: './src/js/demoBabel.js',
    book: './src/js/book.js',
    shop: './src/js/shop.js',
    app: './src/js/app.js'
  },
  output: {
    path: resolve('/dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json'
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'demo2',
      template: resolve('index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.[hash].css'
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.(sass|scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        }
      }],
      exclude: [path.resolve(__dirname, 'src/font')]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      include: [path.resolve(__dirname, 'src/font')],
      use: [{
        loader: 'file-loader',
        options: {
          limit: 4096,
          name: 'fonts/[name].[hash:8].[ext]'
        }
      }]
    }]
  }
}