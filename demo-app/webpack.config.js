var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: './dist/scripts.js'
  },
  devServer: {
    port: 8080,
    contentBase: __dirname
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['es2015', {modules: false}],
            'react'
          ]
        }
      }, {
        test: /\.css$/,
        loader:'style-loader!css-loader'
      }, {
        test: /\.scss$/,
        exclude: /components/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dist/styles.css')
  ]
};
