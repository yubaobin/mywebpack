const webpackServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.dev');

// webpack-dev-serve 配置
const options = {
  contentBase: './dist',
  hot: true,
  compress: true,
  host: 'localhost',
  publicPath: '/'
};

webpackServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config)
const server = new webpackServer(compiler, options);
server.listen(5000, 'localhost', () => {
  console.log('可以打开浏览器浏览，localhost:5000');
})

