const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      { test: /\.css$/,
  loader: "style-loader!css-loader",
        include: path.join(__dirname, 'src', 'styles') },
      
      { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
    loader: 'url-loader?limit=30000',
    include: path.join(__dirname, 'src') }
    ]
  }
}
