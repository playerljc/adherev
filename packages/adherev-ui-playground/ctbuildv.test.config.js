const path = require('path');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));

    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      // TODO: 能编译template部分模板
      vue$: 'vue/dist/vue.esm.js',
      vue: path.join(__dirname, 'node_modules', 'vue'),
    };

    const tsModuleRuleUse = webpackConfig.module.rules[2].use;
    tsModuleRuleUse[1].options.configFile = path.join(__dirname, 'tsconfig.test.json');
  },
};
