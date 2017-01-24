var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
  entry: {
    index: [
      './source/stylesheets/application.scss',
      './source/javascripts/index.js'
    ]
  },

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },

  module: {
    loaders: [{
      test: /source\/javascripts\/.*\.js$/,
      exclude: /node_modules|\.tmp|vendor/,
      loaders: ['babel'],
    },
    {
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract(["css?sourceMap", "sass?sourceMap"]),
      include: __dirname
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "node_modules/bulma")
    ]
  },
  plugins: [
    new ExtractTextPlugin("stylesheets/app.css")
  ]
};
