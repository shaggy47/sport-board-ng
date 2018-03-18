var path = require("path");
var webpack = require('webpack'); 
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts'
    }, 
    output: {
        path: path.resolve( __dirname + '/dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
  },
    resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
      rules: [
                {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: path.resolve(__dirname + '/tsconfig.json') }
          } , 'angular2-template-loader'
        ]
      },
            {
        test: /\.html$/,
        loader: 'html-loader'

      },
            {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
    template: 'src/index.html'
  })

  ],
  
}