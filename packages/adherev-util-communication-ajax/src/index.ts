import { notification } from 'ant-design-vue';

import GlobalIndicator from '@baifendian/adherev-ui-globalindicator';
import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import Ajax from './ajax';

const {
  _util: { withVue },
} = BfdUtil;

Ajax.isUse = () => true;

Ajax.use = (Vue) => {
  (GlobalIndicator as any).isUse() && (GlobalIndicator as any).use(Vue);
  Intl.isUse() && Intl.use(Vue);
  Vue.use(notification);
  withVue(Vue, 'Ajax', Ajax);
};

export default Ajax;
