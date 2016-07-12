module.exports = {
  entry: './js/main.js',
  output: {
  	path: __dirname + './dist',
  	publicpath: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders:[
    {test: /\.js[x]?$/, exclude: /node_modules/,loader: 'babel-loader?presets[]=es2015&presets[]=react'},
    {test: /\.css$/, loader: 'style-loader!css-loader?modules'}, //css
    {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]'}
    ]
  }
};