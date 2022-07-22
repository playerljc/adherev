// const externals = require('../../config/externals');
const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    // webpackConfig.externals = {
    //   ...externals.defaultExternals,
    // };
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
