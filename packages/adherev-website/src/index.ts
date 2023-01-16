// import 'ant-design-vue/dist/antd.less'
import NProgress from 'nprogress';
import Vue from 'vue';
import 'vue-highlight.js/lib/allLanguages';
import VueI18n from 'vue-i18n';

import {
  AntdvFormItem,
  ContextMenu,
  MessageDialog,
  Notification,
  Popup,
  Util,
} from '@baifendian/adherev';

import '@/config/component.register.config.js';
import DictConfig from '@/config/dict/dict.config';

import App from './app.vue';
import Router from './lib/Router';

import 'font-awesome/less/font-awesome.less';
import 'highlight.js/styles/agate.css';
import 'nprogress/nprogress.css';

// TODO:umd umd需要注释掉
import '@baifendian/adherev/lib/css.less';

import './index.less';

// 配置字典
DictConfig();

// 初始化字典组件
AntdvFormItem.FormItemGeneratorToDict.init(Vue);

// 获取当前语言
const lang = Util.getLang();

ContextMenu.setConfig({});
MessageDialog.setConfig({});
Notification.setConfig({});
Popup.setConfig({});

Router().then((router) => {
  router.beforeEach((_to, _from, next) => {
    NProgress.inc();
    next();
  });

  router.afterEach(() => NProgress.done());

  return new Vue({
    el: '#container',
    i18n: new VueI18n({
      locale: lang, // 设置地区
    }),
    router,
    render(h) {
      return h(App);
    },
  });
});
