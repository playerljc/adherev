const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.externals = {
      ...externals.defaultExternals,
    };

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
