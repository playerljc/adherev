const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.module.rules[2].include;
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
  },
};
