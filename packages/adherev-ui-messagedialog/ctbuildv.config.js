const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      ...externals.defaultExternals,
      ...externals.externals([
        '@baifendian/adherev-util-intl',
        '@baifendian/adherev-util-resource',
        '@baifendian/adherev-util',
        '@form-create/ant-design-vue',
      ]),
    };

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
