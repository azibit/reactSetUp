var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    APP_DIR + '/index.jsx' // Your appʼs entry point
  ],

  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'public/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.(jsx?|js$)/,
        include : APP_DIR,
        loaders : ["react-hot", "babel-loader"]
      }
    ]
  }
};

module.exports = config;
