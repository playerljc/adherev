const path = require('path');

module.exports = {
  getTsConfigPath() {
    return path.join(__dirname, 'tsconfig.cjs.json');
  },
  getBabelConfig() {},
};
