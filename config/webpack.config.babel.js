import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rootPath = path.join(__dirname, '..');
const demoAppPath = path.join(rootPath, 'demo-app');

module.exports = {
  entry: [path.join(demoAppPath, 'main.js'), path.join(demoAppPath, 'main.scss')],
  output: {
    path: demoAppPath,
    filename: './dist/bundle.js',
  },
  devServer: {
    port: 8080,
    contentBase: rootPath,
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
    new ExtractTextPlugin('./dist/styles.css'),
    new HtmlWebpackPlugin({ template: path.join(demoAppPath, 'index.template.html') }),
  ],
};
