const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelConfig = require('../babel.config.js');

const PATH = {
  ROOT: path.join(__dirname, '..'),
  SRC: path.join(__dirname, '..', 'src'),
};

module.exports = {
  entry: [
    path.join(PATH.SRC, 'react-leaflet-markercluster.js'),
    path.join(PATH.SRC, 'styles.scss'),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(PATH.ROOT, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: babelConfig,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.min.css',
    }),
  ],
};
