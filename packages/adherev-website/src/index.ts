import Vue from 'vue';
import Antd from 'ant-design-vue';
import VueHighlightJS from 'vue-highlight.js';
import 'vue-highlight.js/lib/allLanguages';
import Adherev, { Resource, Util, Intl } from '@baifendian/adherev';

import Router from './lib/Router';
import Playground from './lib/Playground';
import FunctionProps from './lib/FunctionProps';
import Props from './lib/Props';

import 'highlight.js/styles/default.css';
import 'ant-design-vue/dist/antd.css';
import './index.less';

Vue.use(Antd);
Vue.use(VueHighlightJS);
Vue.use(Adherev);
Vue.use(Playground);
Vue.use(FunctionProps);
Vue.use(Props);

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
  template: `
    <div id="app">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>`,
});
