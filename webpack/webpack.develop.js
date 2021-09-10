const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
    open: true,
    hot: true,
    compress: true,
    overlay: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      filename: "./index.html",
      template: "./src/index.html",
      title: "[Local] Courier App Landing ",
      inject: true,
      minify: false,
    }),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("develop"),
    }),
  ],
};
