module.exports = {
  entry: './components/main.js',
  output: {
    path: __dirname,
    filename: './dist/scripts.js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          ['es2015', { modules: false }],
          'react',
        ],
      }
    }]
  }
};
