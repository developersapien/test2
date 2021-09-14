const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".svg", ".jsx"],
    alias: {
      "@src": path.resolve(__dirname, "../src"),
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@shared": path.resolve(__dirname, "../src/shared"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        use: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: `[name]-[fullhash].js`,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "./assets" }],
    }),
  ],
};
