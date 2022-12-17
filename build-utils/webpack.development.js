const commonPaths = require("./common-paths");
const path = require("path");
const port = process.env.PORT || 3000;
const config = {
  mode: "development",
  entry: {
    app: `${commonPaths.appEntry}/index.jsx`,
  },
  output: {
    filename: "[name].[fullhash].js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: port,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              esModule: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                mode: "local",
                exportLocalsConvention: "camelCaseOnly",
                namedExport: true,
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
