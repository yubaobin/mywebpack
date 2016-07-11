module.exports = {
    entry: { 
    	main: './main.js', 
    	click: ['./click.js','./click2.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    }
}
