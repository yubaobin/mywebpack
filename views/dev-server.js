const path = require('path')
const webpackServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.dev.conf')

const options = {
  contentBase: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  hot: true,
  compress: true,
  host: 'localhost',
  open: true
}

const compiler = webpack(config)
const server = new webpackServer(compiler, options)
server.listen(5000, '', () => {
})