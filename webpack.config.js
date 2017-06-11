const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  assets: path.join(__dirname, 'assets'),
};

module.exports = {
  entry: `${PATHS.source}/index.js`,
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack app',
      template: `${PATHS.source}/index.html`,
    }),
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
        test: /\.js?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    stats: 'errors-only',
  },
};
