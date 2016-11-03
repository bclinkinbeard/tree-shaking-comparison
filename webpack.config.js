const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.webpack.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: true,
      sourceMap: false
    })
  ]
};
