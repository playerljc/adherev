const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.stylelint,
  "customSyntax": "postcss-html"
};
