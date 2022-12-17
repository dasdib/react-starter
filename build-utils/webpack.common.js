const path = require("path");
const commonPaths = require("./common-paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  target: "web", // default target
  /*  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]semantic-ui-([\S]+)[\\/]/,
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  */
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
      title: "My React App",
    }),
    new BundleAnalyzerPlugin({ generateStatsFile: true }),
  ],
};

module.exports = config;
