const commonConfig = require('./build-utils/webpack.common');
const { merge } = require('webpack-merge');
const env = process.env.NODE_ENV || 'development';

module.exports = () => {
  const envConfig = require(`./build-utils/webpack.${env}.js`);
  const mergedConfig = merge(commonConfig, envConfig);
  return mergedConfig;
};
