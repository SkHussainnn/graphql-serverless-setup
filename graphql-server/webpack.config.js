const path = require('path');

module.exports = {
  entry: './src/handler.ts',
  target: 'node',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, '.webpack'),
    filename: 'handler.graphql.js',  // Ensure this matches your handler path
    libraryTarget: 'commonjs2',
  },
};
