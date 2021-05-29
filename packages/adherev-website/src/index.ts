import Vue from 'vue';
import Antd from 'ant-design-vue';
import Adherev, { Resource, Util, Intl } from '@baifendian/adherev';

import Router from './lib/Router';

import 'ant-design-vue/dist/antd.css';
import './index.less';

Vue.use(Antd);
Vue.use(Adherev);

// 获取当前语言
const lang = Util.getLang();
console.log(lang);

// moment的国际化
Resource.Dict.value.LocalsMoment.value[lang]();

var vm = new Vue({
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
  // template: '<div>111</div>',
});

console.log(11111111111111);
