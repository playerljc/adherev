const path = require('path');
// const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    // delete webpackConfig.module.rules[2].include;
    //
    // webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
    //
    // webpackConfig.externals = {
    //   ...externals.defaultExternals,
    //   ...externals.externals(['@baifendian/adherev-util-resource']),
    // };

    webpackConfig.entry = {
      // 判断入口文件是.js,.jsx,.tsx
      index: path.join(__dirname, 'src', 'demo', 'index.ts'),
    };
  },
};
