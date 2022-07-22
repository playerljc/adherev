const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
    webpackConfig.externals = {
      ...externals.defaultExternals,
      ...externals.externals([
        '@baifendian/adhere-ui-bmap',
        '@baifendian/adherev-ui-conditionalrender',
      ]),
    };
  },
};
