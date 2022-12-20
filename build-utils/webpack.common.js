const path = require('path');
const commonPaths = require('./common-paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  target: 'web', // default target
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
      title: 'My React App',
    }),
  ],
};

module.exports = config;
