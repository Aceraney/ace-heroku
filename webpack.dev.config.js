const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
      
      { test: /\.(eot|woff|woff2|ttf|svg|png|jpg|pdf)$/,
    loader: 'url-loader?limit=30000',
    include: path.join(__dirname, 'src') }
    ]
  }
}
