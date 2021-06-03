import Vue from 'vue';

import {
  Menu,
  Button,
  Card,
  Table,
  Breadcrumb,
  Empty,
  Tooltip,
  Icon,
  Modal,
  Result,
  Form,
  FormModel,
  Input,
  InputNumber,
  Slider,
  DatePicker,
  Row,
  Col,
  ConfigProvider,
} from 'ant-design-vue';

import VueHighlightJS from 'vue-highlight.js';
import 'vue-highlight.js/lib/allLanguages';

import {
  ConditionalRender,
  DelConfirm,
  ImportantConfirm,
  Permission,
  Intl,
  Util,
  Resource,
  MessageDialog,
  Space,
  Spin,
} from '@baifendian/adherev';

import Router from './lib/Router';
import Playground from './lib/Playground';
import FunctionProps from './lib/FunctionProps';
import Props from './lib/Props';

import 'highlight.js/styles/default.css';
import './index.less';

Vue.use(Menu);
Vue.use(Button);
Vue.use(Card);
Vue.use(Table);
Vue.use(Breadcrumb);
Vue.use(Empty);
Vue.use(Tooltip);
Vue.use(Icon);
Vue.use(Modal);
Vue.use(Result);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Slider);
Vue.use(DatePicker);
Vue.use(Row);
Vue.use(Col);
Vue.use(ConfigProvider);

Vue.use(VueHighlightJS);

ConditionalRender.use(Vue);
DelConfirm.use(Vue);
ImportantConfirm.use(Vue);
Permission.use(Vue);
// @ts-ignore
Intl.use(Vue);
MessageDialog.use(Vue);
Space.use(Vue);
Spin.use(Vue);

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
