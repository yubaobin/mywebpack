module.exports = {
    entry: './dist/js/main.jsx',
    output: {
        filename: './build/js/bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            { test: /\.css$/, 
            	loader: 'style-loader!css-loader' 
            },
            { test: /\.less$/, loader: "style!css!less" }
        ]
    }
}
