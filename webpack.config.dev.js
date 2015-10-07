var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.config');

module.exports = {
  contet: base.context,
  entry: base.entry,
  output: base.output,
  resolve: base.resolve,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: base.module,
  devtool: 'eval',
  debug: true
}
