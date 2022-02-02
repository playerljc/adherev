import HistoryBack from '@baifendian/adhere-ui-historyback';
import Util from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = Util;

HistoryBack.isUse = () => true;

HistoryBack.use = (Vue) => {
  withVue(Vue, 'HistoryBack', HistoryBack);
};

export default HistoryBack;
