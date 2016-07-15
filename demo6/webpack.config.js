var webpack = require('webpack');
module.exports = {
	entry: {
		app: './js/main.js',
		vendor: ['jquery']
	},

	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js')
	]

}