const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      ...externals,
      '@baifendian/adherev-util-intl': 'AdherevIntl',
      '@baifendian/adherev-util-resource': 'AdherevResource',
      '@baifendian/adherev-util': 'AdherevUtil',
    };

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
