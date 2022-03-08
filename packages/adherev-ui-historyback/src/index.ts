import HistoryBack from '@baifendian/adhere-ui-historyback';
import Util from '@baifendian/adherev-util';

import { IComponent } from './types';

const {
  _util: { withVue },
} = Util;

(HistoryBack as IComponent).isUse = () => true;

(HistoryBack as IComponent).use = (Vue: any) => {
  withVue(Vue, 'HistoryBack', HistoryBack);
};

export default HistoryBack;
