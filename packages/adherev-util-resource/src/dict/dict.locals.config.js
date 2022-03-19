import dayjs from 'dayjs';
import Dict from '@baifendian/adherev-util-dict';

import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';
import ptPT from 'ant-design-vue/es/locale/pt_PT';

import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en-ca';
import 'dayjs/locale/pt';

export default {
  initStatic() {
    // 国际化
    Dict.handlers.Locals = () => ({
      zh_CN: 'zh_CN',
      pt_PT: 'pt_PT',
      en_US: 'en_US',
    });

    // antd的国际化资源
    Dict.handlers.LocalsAntd = () => ({
      zh_CN: zhCN,
      pt_PT: ptPT,
      en_US: enUS,
    });

    // moment国际化
    Dict.handlers.LocalsMoment = () => ({
      zh_CN: () => {
        dayjs.locale('zh-cn');
      },
      en_US: () => {
        dayjs.locale('en-ca');
      },
      pt_PT: () => {
        dayjs.locale('pt');
      },
    });
  },
  initRemote() {},
};
