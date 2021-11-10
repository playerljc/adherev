import Vue from 'vue';
import 'vue-highlight.js/lib/allLanguages';
import { Intl, Util, Resource } from '@baifendian/adherev';

import Router from './lib/Router';
import '@/config/component.register.config.js';

import en_US from './locales/en_US';
import zh_CN from './locales/zh_CN';
import pt_PT from './locales/pt_PT';

import 'font-awesome/less/font-awesome.less';
import 'highlight.js/styles/agate.css';
// TODO:umd umd需要注释掉
import '@baifendian/adherev/lib/css.less';
// import 'ant-design-vue/dist/antd.less'
import './index.less';

// 获取当前语言
const lang = Util.getLang();

// moment的国际化
Resource.Dict.value.LocalsMoment.value[lang]();

new Vue({
  el: '#container',
  i18n: Intl({
    // @ts-ignore
    I18nOptions: {
      messages: {
        en_US,
        zh_CN,
        pt_PT,
      },
      locale: lang,
    },
    prefix: 'local',
  }),
  router: Router(),
  data() {
    return {
      local: Resource.Dict.value.LocalsAntd.value[lang],
    };
  },
  render: Vue.compile(
    `
        <a-config-provider :local="local">
          <div id="app">
            <keep-alive>
              <router-view />
            </keep-alive>
          </div>
        </a-config-provider>`,
  ).render,
});
