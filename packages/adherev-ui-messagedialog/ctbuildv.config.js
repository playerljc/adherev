const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      ...externals,
      '@baifendian/adherev-util-intl': 'commonjs2 @baifendian/adherev-util-intl',
      '@baifendian/adherev-util-resource': 'commonjs2 @baifendian/adherev-util-resource',
      '@baifendian/adherev-util': 'commonjs2 @baifendian/adherev-util',
      '@form-create/ant-design-vue': 'commonjs2 @form-create/ant-design-vue',
    };

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
