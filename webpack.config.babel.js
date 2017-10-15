import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './demo-app/main.js',
  output: {
    path: __dirname,
    filename: './demo-app/dist/scripts.js',
  },
  devServer: {
    port: 8080,
    contentBase: __dirname,
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['es2015', { modules: false }],
            'react',
          ],
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.scss$/,
        exclude: /components/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('./demo-app/dist/styles.css'),
    new HtmlWebpackPlugin({ template: './demo-app/index.template.html' }),
  ],
};
