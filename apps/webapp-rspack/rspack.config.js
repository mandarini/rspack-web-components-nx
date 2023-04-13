const { composePlugins, withNx, withWeb } = require('@nrwl/rspack');

module.exports = composePlugins(withNx(), withWeb(), (config) => {
  return config;
});
