import { ConfigProvider } from 'ant-design-vue';
import { createApp, h } from 'vue';

import store from './store';
import AntdvFormItem from '@baifendian/adherev-ui-antdvformitem';
import AdherevConfigProvider from '@baifendian/adherev-ui-configprovider';
import Util from '@baifendian/adherev-util';
import Dict from '@baifendian/adherev-util-dict';

import Resource from '@baifendian/adherev-util-resource';
import SearchTable from '../index';
import ProRowDragSortEditableRowTable from './ProRowDragSortEditableRowTable';
import TestDist from './dict.test.config';

import 'ant-design-vue/dist/antd.less';

import '../index.less';
import './index.less';

// 配置字典
// @ts-ignore
Dict.init([TestDist], { isFunMemo: false });

const { SearchTableImplementFactory } = SearchTable;

const lang = Util.getLang();

const app = createApp({
  data() {
    return {
      hasIntlInit: false,
    };
  },
  render() {
    return (
      <ConfigProvider locale={Resource.Dict.value.LocalsAntd.value[lang]}>
        <AdherevConfigProvider
          intl={{
            // @ts-ignore
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
          {this.hasIntlInit ? h(SearchTableImplementFactory(ProRowDragSortEditableRowTable)) : null}
        </AdherevConfigProvider>
      </ConfigProvider>
    );
  },
});

AntdvFormItem.FormItemGeneratorToDict.init(app);

app
  .use(store)
  .use(AdherevConfigProvider)
  .use(Dict)
  .use(AntdvFormItem)
  .use(SearchTable)
  .mount('#app');



