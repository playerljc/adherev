// import 'ant-design-vue/dist/antd.less'
import NProgress from 'nprogress';
import Vue from 'vue';
import 'vue-highlight.js/lib/allLanguages';
import VueI18n from 'vue-i18n';

import { Intl, Resource, Util } from '@baifendian/adherev';

import '@/config/component.register.config.js';

import Router from './lib/Router';
import en_US from './locales/en_US';
import pt_PT from './locales/pt_PT';
import zh_CN from './locales/zh_CN';

import 'font-awesome/less/font-awesome.less';
import 'highlight.js/styles/agate.css';
import 'nprogress/nprogress.css';

// TODO:umd umd需要注释掉
import '@baifendian/adherev/lib/css.less';

import './index.less';

// 获取当前语言
const lang = Util.getLang();

// MessageDialog.setConfig({
//   messages: {
//     en_US,
//     zh_CN,
//     pt_PT,
//   },
// });

Intl.init(
  {
    currentLocale: lang,
    locales: {
      en_US,
      zh_CN,
      pt_PT,
    },
  },
  false,
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

    return new Vue({
      el: '#container',
      i18n: new VueI18n({
        locale: lang, // 设置地区
      }),
      /*Intl({
        // @ts-ignore
        I18nOptions: {
          messages: {
            // @ts-ignore
            en_US,
            // @ts-ignore
            zh_CN,
            // @ts-ignore
            pt_PT,
          },
          locale: lang,
        },
        prefix: 'local',
      })*/
      router,
      data() {
        return {
          locale: Resource.Dict.value.LocalsAntd.value[lang],
        };
      },
      render: Vue.compile(
        `
        <a-config-provider :locale="locale">
          <div id="app">
            <keep-alive>
              <router-view />
            </keep-alive>
          </div>
        </a-config-provider>`,
      ).render,
    });
  });
});
