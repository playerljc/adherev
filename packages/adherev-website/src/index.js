// import 'ant-design-vue/dist/antd.less'
// import { Result } from 'ant-design-vue';
import NProgress from 'nprogress';
import { createApp } from 'vue';

import { Intl, Resource, Util } from '@baifendian/adherev';

import ComponentRegisterConfig from '@/config/component.register.config.js';

import Router from './lib/Router';
import en_US from './locales/en_US';
import pt_PT from './locales/pt_PT';
import zh_CN from './locales/zh_CN';
import Main from './main';

import 'font-awesome/less/font-awesome.less';
import 'highlight.js/styles/agate.css';
import 'nprogress/nprogress.css';

// TODO:umd umd需要注释掉
import '@baifendian/adherev/lib/css.less';

import './index.less';

// 获取当前语言
const lang = Util.getLang?.();

// MessageDialog.setConfig({
//   messages: {
//     en_US,
//     zh_CN,
//     pt_PT,
//   },
//   beforeMount(app) {
//     ComponentRegisterConfig(app);
//   },
// });

Intl.init(
  {
    prefix: 'local',
    currentLocale: lang,
    locales: {
      en_US,
      zh_CN,
      pt_PT,
    },
  },
  Intl.isInit(),
).then(() => {
  // moment的国际化
  Resource.Dict.value.LocalsMoment.value[lang]();

  Router().then((router) => {
    router.beforeEach((_to, _from, next) => {
      NProgress.inc();
      next();
    });

    router.afterEach(() => {
      NProgress.done();
    });

    const app = createApp(Main);

    /*const i18n = Intl({
      I18nOptions: {
        messages: {
          en_US,
          zh_CN,
          pt_PT,
        },
        locale: lang,
        globalInjection: true,
        legacy: false,
      },
      prefix: 'local',
    });*/

    app.use(router); //.use(i18n);

    ComponentRegisterConfig(app);

    app.mount('#app');
  });
});

// import { createApp } from 'vue';
//
// import ComponentRegisterConfig from '@/config/component.register.config.js';
//
// import Main from './main';
//
// const app = createApp(Main);
//
// ComponentRegisterConfig(app);
//
// app.mount('#container');
