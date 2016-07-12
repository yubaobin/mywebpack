var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		main: './js/main.js'
	},
	output: {
		path: __dirname + '/dist',
		publicpath: './dist',
		filename: '[name].bundle.js'
	},

	//插件
	plugins:[
		new uglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
	    new HtmlwebpackPlugin({
	      title: 'Webpack-demos',
	      filename: 'index.html'
	    }),
	    new OpenBrowserPlugin({
	      url: 'http://localhost:8080'
	    })
	],
	module: {
		loaders:[

		]
	}
}