const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "js/[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "js/[name].[contenthash:8].js",
  },
  // optimization:{
  //   minimizer: [
  //     new OptimizeCssAssetsWebpackPlugin()
  //   ]
  // },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: '"/"',
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
});
