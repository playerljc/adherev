import { ConfigProvider } from 'ant-design-vue';
import Vue from 'vue';
import { createStore } from './store';

import AntdvFormItem from '@baifendian/adherev-ui-antdvformitem';
import AdherevConfigProvider from '@baifendian/adherev-ui-configprovider';
import Util from '@baifendian/adherev-util';
import Dict from '@baifendian/adherev-util-dict';
import Resource from '@baifendian/adherev-util-resource';

import SearchTable from '../index';
import ProTable from './ProTable';
import TestDist from './dict.test.config';

import '../index.less';
import './index.less';

AntdvFormItem.use(Vue);
Dict.use(Vue);
SearchTable.use(Vue);

// 配置字典
Dict.init([TestDist], { isFunMemo: false });
AntdvFormItem.FormItemGeneratorToDict.init(Vue);

const { SearchTableImplementFactory } = SearchTable;

const lang = Util.getLang();

new Vue({
  el: '#app',
  store: createStore(),
  data() {
    return {
      hasIntlInit: false,
    };
  },
  render(h) {
    return (
      <ConfigProvider locale={Resource.Dict.value.LocalsAntd.value[lang]}>
        <AdherevConfigProvider
          intl={{
            lang,
            locales: {
              en_US: {},
              zh_CN: {},
              pt_PT: {},
            },
          }}
          onIntlInit={() => {
            this.hasIntlInit = true;
          }}
        >
          {this.hasIntlInit ? h(SearchTableImplementFactory(ProTable)) : null}
        </AdherevConfigProvider>
      </ConfigProvider>
    );
  },
});
