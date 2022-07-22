const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.module.json');
  },
  getBabelConfig(defaultBabelConfig) {
    defaultBabelConfig.presets[0][1].modules = false;
  },
};
