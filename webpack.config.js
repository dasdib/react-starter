const buildValidations = require("./build-utils/build-validations");
const commonConfig = require("./build-utils/webpack.common");
const { merge } = require("webpack-merge");

const isProduction = process.env.NODE_ENV === "production";
const env = process.env.NODE_ENV || "development";

// const addons = (/* string | string[] */ addonsArg) => {
//   let addons = Array.isArray(addonsArg)
//     ? addonsArg.filter((item) => item !== true)
//     : [addonsArg].filter(Boolean);

//   return addons.map((addonName) =>
//     require(`./build-utils/addons/webpack.${addonName}.js`)
//   );
// };

module.exports = () => {
  //const { env, addons: addonsArg } = argv;
  // if (!isProduction) {
  //   throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  // }
  console.log("ENV", env);
  const envConfig = require(`./build-utils/webpack.${env}.js`);
  //const mergedConfig = merge(commonConfig, envConfig, ...addons(addonsArg));
  const mergedConfig = merge(commonConfig, envConfig);
  return mergedConfig;
};
