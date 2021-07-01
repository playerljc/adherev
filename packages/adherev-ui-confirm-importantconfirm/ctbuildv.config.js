const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.module.rules[2].include;

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));

    webpackConfig.externals = {
      '@baifendian/adherev-util-intl': 'commonjs2 @baifendian/adherev-util-intl',
      '@baifendian/adherev-util-resource': 'commonjs2 @baifendian/adherev-util-resource',
      '@baifendian/adherev-ui-messagedialog': 'commonjs2 @baifendian/adherev-ui-messagedialog',
    };
  },
};
