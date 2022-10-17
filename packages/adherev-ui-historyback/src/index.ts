import HistoryBack from '@baifendian/adhere-ui-historyback';
import BfdUtil from '@baifendian/adherev-util';

import { IComponent } from './types';

const {
  _util: { withVue },
} = BfdUtil;

(HistoryBack as IComponent).isUse = () => true;

(HistoryBack as IComponent).use = (Vue: any) => {
  withVue(Vue, 'HistoryBack', HistoryBack);
};

export default HistoryBack;
