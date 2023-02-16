const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    // delete webpackConfig.module.rules[2].include;
    //
    // webpackConfig.externals = {
    //   ...externals.defaultExternals,
    //   ...externals.externals([
    //     '@baifendian/adherev-ui-conditionalrender',
    //     '@baifendian/adherev-ui-css',
    //     '@baifendian/adherev-ui-flexlayout',
    //     '@baifendian/adherev-ui-suspense',
    //     '@baifendian/adherev-util-intl',
    //     '@baifendian/adherev-util-mixins',
    //     '@ctsj/vuexgenerator',
    //   ]),
    // };
    //
    // webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));

    // delete webpackConfig.module.rules[0].exclude;
    // webpackConfig.module.rules[0].include = [
    //   /vue-draggable-resizable.vue/
    // ];
    //
    // webpackConfig.module.rules[3].include.push(
    //   /Vue3DraggableResizable.css/,
    // );
    //
    // webpackConfig.module.rules[4].include.push(
    //   path.join(__dirname, '../../')
    // );

    webpackConfig.entry = {
      // 判断入口文件是.js,.jsx,.tsx
      index: path.join(__dirname, 'src', 'demo', 'index-rowdragsorteditabletable.tsx'),
    };
  },
};
