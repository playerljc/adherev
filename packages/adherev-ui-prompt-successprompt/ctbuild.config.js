// const externals = require('../../config/externals');
const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    // webpackConfig.externals = {
    //   ...externals.defaultExternals,
    //   ...externals.externals(['@baifendian/adherev-util-intl']),
    // };
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
