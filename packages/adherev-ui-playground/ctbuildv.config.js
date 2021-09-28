const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
    webpackConfig.externals = {
      ...externals.defaultExternals,
      ...externals.externals([
        'highlight.js',
        'vue-highlight.js',
        'copy-to-clipboard',
        '@baifendian/adherev-util-intl',
        '@baifendian/adherev-ui-conditionalrender',
      ]),
    };

    webpackConfig.entry.index = path.join(__dirname, 'src', 'index.ts');
  },
};
