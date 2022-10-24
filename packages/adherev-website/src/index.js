// import 'ant-design-vue/dist/antd.less'
// import { Result } from 'ant-design-vue';
import NProgress from 'nprogress';
import { createApp } from 'vue';

import { ContextMenu, MessageDialog, Notification, Popup } from '@baifendian/adherev';

import ComponentRegisterConfig from '@/config/component.register.config.js';

import Router from './lib/Router';
import Main from './main';

import 'font-awesome/less/font-awesome.less';
import 'highlight.js/styles/agate.css';
import 'nprogress/nprogress.css';

// TODO:umd umd需要注释掉
import '@baifendian/adherev/lib/css.less';

import './index.less';

MessageDialog.setConfig({
  beforeMount(app) {
    ComponentRegisterConfig(app);
  },
});

ContextMenu.setConfig({
  beforeMount(app) {
    ComponentRegisterConfig(app);
  },
});

Notification.setConfig({
  beforeMount(app) {
    ComponentRegisterConfig(app);
  },
});

Popup.setConfig({
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
