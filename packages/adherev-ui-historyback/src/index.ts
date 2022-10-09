import _HistoryBack from '@baifendian/adhere-ui-historyback';
import Util from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = Util;

const HistoryBack: {
  isUse?: () => boolean;
  use?: (Vue: any) => void;
  (history: any, routePath?: string): void;
} = _HistoryBack;

HistoryBack.isUse = () => true;

HistoryBack.use = (Vue) => {
  withVue(Vue, 'HistoryBack', HistoryBack);
};

export default HistoryBack;
