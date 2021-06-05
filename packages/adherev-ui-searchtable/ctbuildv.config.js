const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      ...externals,
      '@baifendian/adherev-ui-conditionalrender':
        'commonjs @baifendian/adherev-ui-conditionalrender',
      '@baifendian/adherev-ui-css': 'commonjs @baifendian/adherev-ui-css',
      '@baifendian/adherev-ui-flexlayout': 'commonjs @baifendian/adherev-ui-flexlayout',
      '@baifendian/adherev-ui-suspense': 'commonjs @baifendian/adherev-ui-suspense',
      '@baifendian/adherev-util-intl': 'commonjs @baifendian/adherev-util-intl',
    };

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
