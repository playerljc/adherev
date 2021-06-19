const path = require('path');

module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: path.join(__dirname, 'tsconfig.json'),
  },
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    '@vue/standard',
  ],
  globals: {
    page: true,
    APP_ENV: true,
    NO_MOCK: true,
  },
  rules: {
    'import/no-unresolved': 0,
    'no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'vue/max-attributes-per-line': [
      2,
      {
        'singleline': 5,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
  },
};
