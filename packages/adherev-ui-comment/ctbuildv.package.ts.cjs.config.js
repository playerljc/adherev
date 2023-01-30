const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.cjs.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.plugins.push([
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'lib',
        style: false,
      },
      'ant-design-vue',
    ]);
    defaultBabelConfig.plugins.push([
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: 'lib/icons',
        camel2DashComponentName: false,
        style: false,
      },
      '@ant-design/icons',
    ]);
  },
};
