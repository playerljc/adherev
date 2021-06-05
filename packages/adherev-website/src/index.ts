import Vue from 'vue';
import 'vue-highlight.js/lib/allLanguages';
import {
  Intl,
  Util,
  Resource,
  // @ts-ignore
} from '@baifendian/adherev';

import Router from './lib/Router';
import '@/config/component.register.config.js';

import 'highlight.js/styles/default.css';
import '@baifendian/adherev/lib/css.less';
import './index.less';

// 获取当前语言
const lang = Util.getLang();

// moment的国际化
Resource.Dict.value.LocalsMoment.value[lang]();

new Vue({
  el: '#container',
  // @ts-ignore
  i18n: Intl({
    locale: lang,
  }),
  // @ts-ignore
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
