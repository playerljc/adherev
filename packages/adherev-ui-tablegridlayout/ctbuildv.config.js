const path = require('path');
// const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    // webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
    // webpackConfig.externals = {
    //   ...externals.defaultExternals,
    //   ...externals.externals([
    //   ]),
    // };

    webpackConfig.entry = {
      // 判断入口文件是.js,.jsx,.tsx
      index: path.join(__dirname, 'src', 'demo', 'index.ts'),
    };
  },
};
