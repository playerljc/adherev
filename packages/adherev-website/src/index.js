// import 'ant-design-vue/dist/antd.less'
import './index.less';
import Router from './lib/Router';
import en_US from './locales/en_US';
import pt_PT from './locales/pt_PT';
import zh_CN from './locales/zh_CN';
import Main from './main';
import ComponentRegisterConfig from '@/config/component.register.config.js';
import { Intl, Util, Resource, MessageDialog } from '@baifendian/adherev';
// TODO:umd umd需要注释掉
import '@baifendian/adherev/lib/css.less';
import 'font-awesome/less/font-awesome.less';
import 'highlight.js/styles/agate.css';
// import { Result } from 'ant-design-vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createApp } from 'vue';

// 获取当前语言
const lang = Util.getLang?.();

// moment的国际化
Resource.Dict.value.LocalsMoment.value[lang]();

MessageDialog.setConfig({
  messages: {
    en_US,
    zh_CN,
    pt_PT,
  },
  beforeMount(app) {
    ComponentRegisterConfig(app);
  },
});

Router().then((router) => {
  router.beforeEach((_to, _from, next) => {
    NProgress.inc();
    next();
  });

  router.afterEach(() => {
    NProgress.done();
  });

  const app = createApp(Main);

  const i18n = Intl({
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
  });

  app.use(router).use(i18n);

  ComponentRegisterConfig(app);

  app.mount('#app');
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
