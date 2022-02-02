exports.defaultExternals = {
  vue: 'commonjs2 vue',
  'ant-design-vue': 'commonjs2 ant-design-vue',
  classnames: 'commonjs2 classnames',
  'omit.js': 'commonjs omit.js',
  'vue-fragment': 'commonjs2 vue-fragment',
  'load-awesome': 'commonjs2 load-awesome',
  moment: 'commonjs2 moment',
  swiper: 'commonjs2 swiper',
  iscroll: 'commonjs2 iscroll',
  uuid: 'commonjs2 uuid',
  '@baifendian/adherev-util': 'commonjs2 @baifendian/adherev-util',
  '@baifendian/adherev-ui-css': 'commonjs2 @baifendian/adherev-ui-css',
  '@baifendian/adherev-util-intl': 'commonjs2 @baifendian/adherev-util-intl',
  '@baifendian/adherev-ui-conditionalrender': 'commonjs2 adherev-ui-conditionalrender',
  '@baifendian/adherev-util-resource': 'commonjs2 adherev-util-resource',
};

exports.externals = function (externals) {
  const result = {};

  externals.forEach((external) => {
    result[external] = `commonjs2 ${external}`;
  });

  return result;
};

exports.umdExternals = {
  'ant-design-vue': 'antd',
  vue: 'Vue',
  moment: 'moment',
  '@form-create/ant-design-vue': 'formCreate',
};
