const resolve = require('path').resolve;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SRC_PATH = resolve('./src');
const DIST_PATH = resolve('./dist');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: resolve(`${SRC_PATH}/app.ts`)
  },
  output: {
    filename: 'main.js',
    path: DIST_PATH
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [/node_modules/, /dist/]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: resolve(`${SRC_PATH}/index.html`), to: resolve(`${DIST_PATH}/index.html`) },
      { from: resolve(`${SRC_PATH}/favicon.ico`), to: resolve(`${DIST_PATH}/favicon.ico`) }
    ])
  ],
  devServer: {
    port: 3000,
    contentBase: DIST_PATH
  }
};