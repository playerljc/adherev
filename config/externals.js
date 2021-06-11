exports.defaultExternals = {
  vue: 'commonjs2 vue',
  'ant-design-vue': 'commonjs2 ant-design-vue',
  classnames: 'commonjs2 classnames',
  'omit.js': 'commonjs omit.js',
  'vue-fragment': 'commonjs2 vue-fragment',
};

exports.externals = function (externals) {
  const result = {};

  externals.forEach((external) => {
    result[external] = `commonjs2 ${external}`;
  });

  return result;
};
