const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.module.rules[2].include;

    webpackConfig.externals = {
      ...externals.defaultExternals,
      ...externals.externals([
        '@baifendian/adherev-util-resource',
        '@baifendian/adherev-ui-conditionalrender',
        '@baifendian/adherev-util',
        'dayjs',
        'vue-fragment',
        'vue-hoc',
      ]),
    };

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
