const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      filename: "./index.html",
      template: "./src/index.html",
      title: "[Stage] Restaurant Courier Dashboard",
      inject: true,
      minify: false,
    }),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("stage"),
    }),
  ],
};
