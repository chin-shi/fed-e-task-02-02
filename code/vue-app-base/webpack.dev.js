const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "/",
    chunkFilename: "js/[name].js",
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: '"/"',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
