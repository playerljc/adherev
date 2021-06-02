const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      ...externals,
      '@baifendian/adherev-util-intl': 'commonjs2 @baifendian/adherev-util-intl',
    };
  },
};
