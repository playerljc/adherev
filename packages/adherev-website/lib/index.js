import Vue from 'vue';
import NProgress from 'nprogress';
import 'vue-highlight.js/lib/allLanguages';
import { Intl, Util, Resource, MessageDialog } from '@baifendian/adherev';
import '@/config/component.register.config.js';
import Router from './lib/Router';
import en_US from './locales/en_US';
import zh_CN from './locales/zh_CN';
import pt_PT from './locales/pt_PT';
import 'font-awesome/less/font-awesome.less';
import 'highlight.js/styles/agate.css';
import 'nprogress/nprogress.css';
// TODO:umd umd需要注释掉
import '@baifendian/adherev/lib/css.less';
// import 'ant-design-vue/dist/antd.less'
import './index.less';
// 获取当前语言
const lang = Util.getLang();
// moment的国际化
Resource.Dict.value.LocalsMoment.value[lang]();
MessageDialog.setConfig({
    messages: {
        en_US,
        zh_CN,
        pt_PT,
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
    return new Vue({
        el: '#container',
        i18n: Intl({
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
        }),
        router,
        data() {
            return {
                locale: Resource.Dict.value.LocalsAntd.value[lang],
            };
        },
        render: Vue.compile(`
        <a-config-provider :locale="locale">
          <div id="app">
            <keep-alive>
              <router-view />
            </keep-alive>
          </div>
        </a-config-provider>`).render,
    });
});
//# sourceMappingURL=index.js.map