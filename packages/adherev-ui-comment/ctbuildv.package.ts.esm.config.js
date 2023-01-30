const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.esm.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.presets[0][1].modules = false;
    defaultBabelConfig.plugins.push([
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
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
