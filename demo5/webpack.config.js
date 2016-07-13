var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
	entry: {
		main1: './js/main1.js',
		main2: './js/main2.js'
	},
	output: {
		path: __dirname + '/dist',
		publicpath: './dist',
		filename: '[name].bundle.js'
	},
	module: {
		loaders:[
    		{ test: /\.js[x]?$/, loaders: ['jsx?harmony'] }
    	]
	},
	plugins: [
	    new CommonsChunkPlugin('init.js')
	  ]
}