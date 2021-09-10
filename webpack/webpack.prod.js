const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: './index.html',
      template: './src/index.html',
      title: 'Courier App Landing',
      inject: true,
      minify: true,
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('prod'),
    }),
  ],
};
