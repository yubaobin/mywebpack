const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ],
      exclude: [path.resolve(__dirname, 'src/font')]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      include: [path.resolve(__dirname, 'src/font')],
      use: [
        'file-loader'
      ]
    }]
  }
}