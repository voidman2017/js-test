const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //to access built-in plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app')
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'es6',
      template: path.resolve(__dirname, './src/index.html')
    }),
    // new CleanWebpackPlugin(['dist'])
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    // filename: '[name].bundle.[hash:8].js'
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          query:
            {
              presets: ['es2015']
            }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port:9999,
    host:'127.0.0.1'
  },
};