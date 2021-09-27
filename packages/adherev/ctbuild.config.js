const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    // // babel-plugin-import的配置
    // const { use } = webpackConfig.module.rules[0];
    //
    // const babelLoaderConfig = use.find((loaderConfig) => {
    //   if ('loader' in loaderConfig) {
    //     return loaderConfig.loader === 'babel-loader';
    //   }
    //
    //   return false;
    // });
    //
    // if (babelLoaderConfig) {
    //   babelLoaderConfig.query.plugins.push([
    //     'import',
    //     {
    //       libraryName: '@baifendian/adhere',
    //       transformToDefaultImport: true,
    //       style: true,
    //     },
    //     'adhere',
    //   ]);
    // }
    // webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
    //
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
