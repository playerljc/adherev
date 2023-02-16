// import 'ant-design-vue/dist/antd.less'
import NProgress from 'nprogress';
import { createApp } from 'vue';
import store from './components/ui/searchtable/store';

import {
  AntdvFormItem,
  ContextMenu,
  MessageDialog,
  Notification,
  Popup,
} from '@baifendian/adherev';

import ComponentRegisterConfig from '@/config/component.register.config.js';
import DictConfig from '@/config/dict/dict.config';

import Router from './lib/Router';
import Main from './main';

import 'font-awesome/less/font-awesome.less';
import 'highlight.js/styles/agate.css';
import 'nprogress/nprogress.css';

// TODO:umd umd需要注释掉
import '@baifendian/adherev/lib/css.less';

import './index.less';

// 配置字典
DictConfig();

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

  // 初始化字典组件
  AntdvFormItem.FormItemGeneratorToDict.init(app);

  app.use(store).use(router);

  ComponentRegisterConfig(app);

  app.mount('#app');
});
