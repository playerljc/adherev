const path = require('path');
const fs = require('fs');

const args = require('./commandArgs');
const packageJSON = require('../package.json');

const { dependencies } = packageJSON;

const contextPath = path.join(__dirname, '../', 'src');

const excludes = ['@baifendian/adherev-ui-css'];

const indexLessContent = [];
const indexJsContent = ["import {App} from 'vue';"];
const indexJsExportContent = ['export { \r\n'];
const indexJsExportDefaultContent = ['export default {\r\n\tinstall:function (app:App){\r\n\t'];

const type = args.getArg('module');

const namedMap = new Map([
  ['@baifendian/adherev-ui-conditionalrender', 'ConditionalRender'],
  ['@baifendian/adherev-ui-confirm-delconfirm', 'DelConfirm'],
  ['@baifendian/adherev-ui-confirm-importantconfirm', 'ImportantConfirm'],
  ['@baifendian/adherev-ui-globalindicator', 'GlobalIndicator'],
  ['@baifendian/adherev-ui-historyback', 'HistoryBack'],
  ['@baifendian/adherev-ui-messagedialog', 'MessageDialog'],
  ['@baifendian/adherev-ui-permission', 'Permission'],
  ['@baifendian/adherev-ui-prompt-errorprompt', 'ErrorPrompt'],
  ['@baifendian/adherev-ui-prompt-successprompt', 'SuccessPrompt'],
  ['@baifendian/adherev-ui-prompt-warnprompt', 'WarnPrompt'],
  ['@baifendian/adherev-ui-space', 'Space'],
  ['@baifendian/adherev-ui-spin', 'Spin'],
  ['@baifendian/adherev-ui-split', 'Split'],
  ['@baifendian/adherev-ui-suspense', 'Suspense'],
  ['@baifendian/adherev-ui-flexlayout', 'FlexLayout'],
  ['@baifendian/adherev-ui-searchtable', 'SearchTable'],
  ['@baifendian/adherev-ui-olmap', 'OLMap'],
  ['@baifendian/adherev-ui-backtopanimation', 'BackTopAnimation'],
  ['@baifendian/adherev-ui-splitlayout', 'SplitLayout'],
  ['@baifendian/adherev-ui-scrollload', 'ScrollLoad'],
  ['@baifendian/adherev-ui-slidelayout', 'SlideLayout'],
  ['@baifendian/adherev-ui-contextmenu', 'ContextMenu'],
  ['@baifendian/adherev-ui-pullrefresh', 'PullRefresh'],
  ['@baifendian/adherev-ui-revolving', 'Revolving'],
  ['@baifendian/adherev-ui-popup', 'Popup'],
  ['@baifendian/adherev-ui-sliderscale', 'SliderScale'],
  ['@baifendian/adherev-ui-stickuplayout', 'StickupLayout'],
  ['@baifendian/adherev-ui-surnames', 'Surnames'],
  ['@baifendian/adherev-ui-notification', 'Notification'],
  ['@baifendian/adherev-ui-fontsizesetting', 'FontSizeSetting'],
  ['@baifendian/adherev-ui-cascadecompared', 'CascadeCompared'],
  ['@baifendian/adherev-ui-swipeout', 'SwipeOut'],
  ['@baifendian/adherev-ui-jdcategorytab', 'JdCategoryTab'],
  ['@baifendian/adherev-ui-imagelazy', 'ImageLazy'],
  ['@baifendian/adherev-ui-polygonselection', 'PolygonSelection'],
  // ['@baifendian/adherev-ui-bmap', 'BMap'],
  ['@baifendian/adherev-ui-playground', 'PlayGround'],
  ['@baifendian/adherev-ui-comment', 'Comment'],
  ['@baifendian/adherev-ui-configprovider', 'ConfigProvider'],
  ['@baifendian/adherev-ui-contourblock', 'ContourBlock'],
  ['@baifendian/adherev-ui-datedisplay', 'DateDisplay'],
  ['@baifendian/adherev-ui-tablegridlayout', 'TableGridLayout'],
  ['@baifendian/adherev-ui-writingboard', 'WritingBoard'],
  ['@baifendian/adherev-ui-hooks', 'Hooks'],
  ['@baifendian/adherev-ui-vuequill-sandbox', 'VueQuillSandBox'],
  ['@baifendian/adherev-ui-antdvformitem', 'AntdvFormItem'],
  ['@baifendian/adherev-util', 'Util'],
  ['@baifendian/adherev-util-communication-ajax', 'Ajax'],
  ['@baifendian/adherev-util-dict', 'Dict'],
  ['@baifendian/adherev-util-emitter', 'Emitter'],
  ['@baifendian/adherev-util-intl', 'Intl'],
  ['@baifendian/adherev-util-notnull', 'NotNull'],
  ['@baifendian/adherev-util-preferences', 'Preferences'],
  ['@baifendian/adherev-util-resource', 'Resource'],
  ['@baifendian/adherev-util-adapterscreen', 'AdapterScreen'],
  ['@baifendian/adherev-util-watchmemoized', 'WatchMemoized'],
  ['@baifendian/adherev-util-mixins', 'Mixins'],
  ['@baifendian/adherev-util-domain', 'Domain'],
  ['@baifendian/adherev-util-browsersniff', 'Browsersniff'],
  ['@baifendian/adherev-util-validator', 'Validator'],
  ['@baifendian/adherev-util-iframeio', 'IframeIO'],
]);

/**
 * pascalCaseToKebabCase
 * @param name
 * @return {string}
 */
function pascalCaseToKebabCase(name) {
  const result = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2');
  return (result.startsWith('-') ? result.substring(1) : result).toLowerCase();
}

// let dependenciesAll = {};

// eslint-disable-next-line guard-for-in,no-restricted-syntax
for (const packageName in dependencies) {
  // eslint-disable-next-line no-continue
  if (!packageName.startsWith('@baifendian/adherev-')) continue;

  const packagesPath = path.join(__dirname, '../../');

  const name = packageName.split('/')[1];

  // const json = require(path.join(packagesPath, name, 'package.json'));
  // dependenciesAll = { ...dependenciesAll, ...json.dependencies };

  // 不排除
  if (excludes.indexOf(packageName) === -1) {
    const exportName = namedMap.get(packageName);

    const folderName = pascalCaseToKebabCase(namedMap.get(packageName)); // name.substring(name.lastIndexOf('-') + 1);

    const folderPath = path.join(contextPath, folderName);

    const indexPath = path.join(folderPath, 'index.js');

    const stylePath = path.join(folderPath, 'style');

    const styleIndexPath = path.join(stylePath, 'index.less');

    // 不存在
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // index.js写入文件
    fs.writeFileSync(
      indexPath,
      `import Model from '${packageName}/${type}';\r\nexport default Model;`,
    );

    if (!fs.existsSync(stylePath)) {
      // 不存在
      fs.mkdirSync(stylePath);
    }

    // 查看packages中是否存在index.less
    if (fs.existsSync(path.join(packagesPath, name, 'src', 'index.less'))) {
      // index.less写入文件
      fs.writeFileSync(styleIndexPath, `@import '~${packageName}/${type}/index.less';`);
      indexLessContent.push(`@import '~${packageName}/${type}/index.less';\r\n`);
    } else {
      fs.writeFileSync(styleIndexPath, '');
    }

    indexJsContent.push(`import ${exportName} from '${packageName}';\r\n`);
    indexJsExportContent.push(`  ${exportName},\r\n`);
    indexJsExportDefaultContent.push(
      `if(\r\n\r\n(${exportName} as any)?.install()){ \r\n\r\napp?.use?.(${exportName}); }\r\n\t\t`,
    );
    // 查看packages中是否存在antd.less
    // if (fs.existsSync(path.join(packagesPath, name, 'src', 'antd.less'))) {
    //   // 读取antd.less文件内容
    //   const content = fs.readFileSync(path.join(packagesPath, name, 'src', 'antd.less'));
    //   // 追加到index.less文件中
    //   fs.appendFileSync(styleIndexPath, content);
    // }
  } else {
    // 排除的包
    // eslint-disable-next-line no-lonely-if
    if (packageName === '@baifendian/adherev-ui-css') {
      const cssPackagePath = path.join(packagesPath, name, 'src');

      const result = fs.readdirSync(cssPackagePath);

      result.forEach((fileName) => {
        const stat = fs.statSync(path.join(cssPackagePath, fileName));
        if (stat.isFile()) {
          const content = fs.readFileSync(path.join(cssPackagePath, fileName));
          fs.writeFileSync(path.join(contextPath, fileName), content);
        }
      });
    }
  }
}

const indexLessPath = path.join(__dirname, '../src', 'index.less');
const lessContent = fs.readFileSync(indexLessPath);
fs.writeFileSync(indexLessPath, `${lessContent}\r\n${indexLessContent.join('')}`);

const indexJsPath = path.join(__dirname, '../src', 'index.ts');
indexJsExportContent.push('};\r\n');
indexJsExportDefaultContent.push(`},\r\n};`);
fs.writeFileSync(
  indexJsPath,
  `${indexJsContent.join('')}\r\n${indexJsExportContent.join(
    '',
  )}\r\n${indexJsExportDefaultContent.join('')}`,
);
