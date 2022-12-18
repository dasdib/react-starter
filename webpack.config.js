// const buildValidations = require("./build-utils/build-validations");
const commonConfig = require('./build-utils/webpack.common');
const { merge } = require('webpack-merge');

//const isProduction = process.env.NODE_ENV === "production";
const env = process.env.NODE_ENV || 'development';

module.exports = args => {
  console.log('arges', args);
  const envConfig = require(`./build-utils/webpack.${env}.js`);
  //const mergedConfig = merge(commonConfig, envConfig, ...addons(addonsArg));
  const mergedConfig = merge(commonConfig, envConfig);
  return mergedConfig;
};
