const path = require('path');
const modifyVars = require('./themes/default/vars');

module.exports = {
  getTheme() {
    return modifyVars;
  },
  getConfig({ webpackConfig, webpack, plugins }) {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      vue$: 'vue/dist/vue.esm.js',
      vue: path.join(__dirname, 'node_modules', 'vue'),
      'ant-design-vue': path.join(__dirname, 'node_modules', 'ant-design-vue'),
    };
  },
};
