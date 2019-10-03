const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TransferWebpackPlugin = require('transfer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./utils')
const devMode = process.env.NODE_ENV === 'development'
const config = devMode ? require('./env-conf').dev : require('./env-conf').prod
module.exports = {
  entry: utils.getEntry(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'styles': path.resolve(__dirname, 'styles'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.json', '.wasm'],
    modules: ['node_modules']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new TransferWebpackPlugin([{ from: 'assets', to: 'assets' }], path.resolve(__dirname, 'src'))
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use:[{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.(sass|scss|css)$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: devMode
        }
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2,
          modules: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          data: '@import "~styles/variables.scss";'
        }
      }]
    }, {
      test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              publicPath: config.publicPath ? `${publicPath}/images` : '../images',
              outputPath: 'images',
              name: '[name].[hash:8].[ext]'
            }
          }
        }
      }]
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              publicPath: config.publicPath ? `${publicPath}/fonts` : '../fonts',
              outputPath: 'fonts',
              name: '[name].[hash:8].[ext]'
            }
          }
        }
      }]
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'img:data-src', 'audio:src'],
          minimize: true
        }
      }
    }]
  }
}
//配置页面
const entryObj = utils.getEntry()
let htmlArray = Object.keys(entryObj).map((element) => Object.assign({}, {
  _html: element,
  title:'',
  chunks: ['vendor', element]
}))
//自动生成html模板
htmlArray.forEach((element) => {
  module.exports.plugins.push(new HtmlWebpackPlugin(getHtmlConfig(element._html,element.chunks)));
})
