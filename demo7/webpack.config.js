var webpack = require('webpack');
module.exports = {
	entry: {
		app: './js/main.js',
		main: './js/main2.js'
	},

	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$:'jquery'
		})
	],
	module: {
		loaders:[
    		{ test: /\.js[x]?$/, loaders: ['jsx?harmony'] }
    	]
	},
	//全局变量
	externals: {
    // require('data') is external and available
    //  on the global var data
    	'data': 'data'
  	}
}