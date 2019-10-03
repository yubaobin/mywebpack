const path = require('path')
const webpackServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.dev.conf')

const options = {
  contentBase: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  hot: true,
  compress: true,
  host: '0.0.0.0',
  port: 5000
}

const compiler = webpack(config)
const server = new webpackServer(compiler, options)
server.listen(5001, 'localhost', () => {
})