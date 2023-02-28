import enUS from 'ant-design-vue/es/locale/en_US';
import ptPT from 'ant-design-vue/es/locale/pt_PT';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/en-ca';
import 'moment/locale/pt';
import 'moment/locale/zh-cn';

import Dict from '@baifendian/adherev-util-dict';

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
        moment.locale('zh-cn');
      },
      en_US: () => {
        moment.locale('en-ca');
      },
      pt_PT: () => {
        moment.locale('pt');
      },
    });
  },
  initRemote() {},
};
