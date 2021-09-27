const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.output.libraryExport;

    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));

    webpackConfig.externals = {
      'ant-design-vue': 'antd',
      vue: 'Vue',
      moment: 'moment',
      '@form-create/ant-design-vue': 'formCreate',
    };

    // webpackConfig.resolve.alias.vue = path.join(__dirname, 'node_modules', 'vue');

    webpackConfig.module.rules[0].use[1].query.plugins.push([
      '@babel/plugin-transform-modules-commonjs',
      { strictMode: false },
    ]);

    // if (!webpackConfig.resolve.alias) {
    //   webpackConfig.resolve.alias = {};
    // }
    //
    // webpackConfig.resolve.alias['@baifendian/adhere-util-intl'] = path.join(
    //   __dirname,
    //   'node_modules',
    //   '@baifendian',
    //   'adherev-util-intl',
    // );
  },
};
