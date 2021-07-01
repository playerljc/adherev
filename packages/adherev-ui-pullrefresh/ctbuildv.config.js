const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.module.rules[2].include;
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
    webpackConfig.externals = {
      ...externals.defaultExternals,
      '@baifendian/adherev-ui-css': 'commonjs2 @baifendian/adherev-ui-css',
      '@baifendian/adherev-util-intl': 'commonjs2 @baifendian/adherev-util-intl',
      '@baifendian/adherev-util-resource': 'commonjs2 @baifendian/adherev-util-resource',
    };
  },
};
