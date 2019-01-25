const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '', dir)
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/main.js',
    app: './src/js/app'
  },
  output: {
    path: resolve('/dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json'
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'demo2',
      template: resolve('index.html')
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader'
      }]
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