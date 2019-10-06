const path = require('path')
const webpackServer = require('webpack-dev-server')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
const webpack = require('webpack')
const devConfig = require('./webpack.dev.conf')
const config = require('./env-conf').dev
const port = config.port
const options = {
  contentBase: path.resolve(__dirname, 'dist'),
  publicPath: config.publicPath || '/',
  hot: true,
  compress: true,
  host: config.host,
  open: true,
  after: () => {
    console.log('======', 'after')
  }
}

devConfig.plugins.push(new CleanTerminalPlugin({
  message: `dev server running on http://${config.host}:${port}`,
  onlyInWatchMode: false
}))

const compiler = webpack(devConfig)


const server = new webpackServer(compiler, options)
server.listen(port)

compiler.plugin('done', () => {
})