import { App, Plugin } from 'vue';

import HistoryBack from '@baifendian/adhere-ui-historyback';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const HistoryBackWrap = {
  ...HistoryBack,
  install: function (app: App) {
    withVue(app, 'HistoryBack', HistoryBack);

    return app;
  },
};
export default HistoryBackWrap as typeof HistoryBackWrap & Plugin;
