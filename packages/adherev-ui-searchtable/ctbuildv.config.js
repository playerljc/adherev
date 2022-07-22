const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.module.rules[2].include;

    webpackConfig.externals = {
      ...externals.defaultExternals,
      ...externals.externals([
        '@baifendian/adherev-ui-conditionalrender',
        '@baifendian/adherev-ui-css',
        '@baifendian/adherev-ui-flexlayout',
        '@baifendian/adherev-ui-suspense',
        '@baifendian/adherev-util-intl',
        '@baifendian/adherev-util-mixins',
        '@ctsj/vuexgenerator',
      ]),
    };

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
