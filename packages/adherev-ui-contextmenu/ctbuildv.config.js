const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
    webpackConfig.externals = {
      ...externals.defaultExternals,
      "@baifendian/adherev-ui-conditionalrender": "commonjs2 @baifendian/adherev-ui-conditionalrender",
      "@baifendian/adherev-util":"commonjs2 @baifendian/adherev-util",
      "@baifendian/adherev-ui-css": "commonjs2 @baifendian/adherev-ui-css",
    };
  },
};
