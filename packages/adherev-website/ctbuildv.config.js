const path = require('path');
const modifyVars = require('./themes/default/vars');

module.exports = {
  getTheme() {
    return modifyVars;
  },
  getConfig({ webpackConfig, webpack, plugins }) {
    // TODO:umd  umd时候需要打开
    webpackConfig.externals = {
      '@baifendian/adherev': 'adherev',
      'ant-design-vue': 'antd',
      vue: 'Vue',
      moment: 'moment',
      '@form-create/ant-design-vue': 'formCreate',
    };

    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      vue$: 'vue/dist/vue.esm.js',
      // TODO:umd umd的时候需要注释掉
      vue: path.join(__dirname, 'node_modules', 'vue'),
      'ant-design-vue': path.join(__dirname, 'node_modules', 'ant-design-vue'),
      '@form-create/ant-design-vue': path.join(
        __dirname,
        'node_modules',
        '@baifendian',
        'adherev',
        'node_modules',
        '@form-create',
        'ant-design-vue',
      ),
      ol: path.join(
        __dirname,
        'node_modules/@baifendian/adherev/node_modules/@baifendian/adherev-ui-olmap/node_modules/ol',
      ),

      // swiper: path.join(
      //   __dirname,
      //   'node_modules/@baifendian/adherev/node_modules/@baifendian/adherev-ui-revolving/node_modules/swiper',
      // ),
    };

    // 第三方库的引用是从文件当前目录开始搜索
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));

    // 这个文件不在src里也不在node_modules里，只在link的时候才会遇到这个问题(原因是node_modules里的包是link过来的)
    webpackConfig.module.rules[webpackConfig.module.rules.length - 1].include.push(
      /packages[\\/]adherev[\\/]lib[\\/].*[\\/]style[\\/]index.less/,
      /packages[\\/]adherev[\\/]lib[\\/].*.less/,
    );

    webpackConfig.module.rules[3].include.push(/ol.css/, /swiper.css/);

    // TODO:umd umd的时候需要注释掉
    // babel-plugin-import的配置
    const { use } = webpackConfig.module.rules[1];
    const babelLoaderConfig = use.find((loaderConfig) => {
      if (typeof loaderConfig === 'string') return false;

      if (typeof loaderConfig === 'object' && 'loader' in loaderConfig) {
        return loaderConfig.loader === 'babel-loader';
      }

      return false;
    });
    if (babelLoaderConfig) {
      babelLoaderConfig.query.plugins.push(
        [
          'import',
          {
            libraryName: '@baifendian/adherev',
            transformToDefaultImport: true,
            style: true,
          },
          'adherev',
        ],
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            style: true,
          },
          'ant-design-vue',
        ],
      );
    }

    if (webpackConfig.mode === 'production') {
      webpackConfig.optimization.splitChunks = {
        // chunks: 'all',
        // minSize: 30000,
        // maxSize: 0,
        // minChunks: 1,
        // maxAsyncRequests: 5,
        // maxInitialRequests: 3,
        // automaticNameDelimiter: '~',
        // automaticNameMaxLength: 30,
        // name: true,
        chunks: 'all',
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          antdesigncompatible: {
            test: /[\\/]node_modules[\\/](@ant-design[\\/]compatible|_@ant-design_compatible)/,
            priority: 1,
            enforce: true,
          },
          antdesignicons: {
            test: /[\\/]node_modules[\\/](@ant-design[\\/]icons|_@ant-design_icons)/,
            priority: 1,
            enforce: true,
          },
          echart: {
            test: /[\\/]node_modules[\\/](echarts-for-react|_echarts-for-react|echarts|_echarts)/,
            priority: 4,
            enforce: true,
          },
          ol: {
            test: /[\\/]node_modules[\\/](ol|_ol|ol-ext|_ol-ext)/,
            priority: 1,
            enforce: true,
          },
          ctsj: {
            test: /[\\/]node_modules[\\/](@ctsj)/,
            priority: 1,
            enforce: true,
          },
          react: {
            test: /[\\/]node_modules[\\/](react-intl-universal|_react-intl-universal|react|_react|react-dom|_react-dom|react-router|_react-router|prop-types|_prop-types|history|_history)/,
            priority: 1,
            enforce: true,
          },
          faker: {
            test: /[\\/]node_modules[\\/](faker|_faker)/,
            priority: 1,
            enforce: true,
          },
          antd: {
            test: /[\\/]node_modules[\\/](antd|_antd|rc|_rc)/,
            priority: 1,
            enforce: true,
          },
          static: {
            test: /[\\/]node_modules[\\/](lodash|_lodash|js-md5|_js-md5|classnames|_classnames|uuid|_uuid|qs|_qs|moment|axios|_axios|_cookie_js|_moment|swiper|_swiper)/,
            priority: 1,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: -1,
            enforce: true,
          },
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -1,
            reuseExistingChunk: true,
          },
          common: {
            minChunks: 2,
            priority: -1,
            reuseExistingChunk: true,
          },
          utilities: {
            priority: -1,
            minChunks: 2,
            test: /[\\/]src[\\/]components[\\/]/,
            minSize: 0,
          },
          vendors: false,
          default: false,
        },
      };
    }
  },
};
