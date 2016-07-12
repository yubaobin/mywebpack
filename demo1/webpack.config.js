module.exports = {
    entry: { 
    	main: './main.js', 
    	click: ['./click.js','./click2.js'],
    	react: './js/react.jsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
    	loaders:[
    		{ test: /\.js[x]?$/, loaders: ['jsx?harmony'] }
    	]
    }
}
