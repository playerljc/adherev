const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      ...externals.defaultExternals,
      ...externals.externals(['@baifendian/adherev-util-intl']),
    };
  },
};
