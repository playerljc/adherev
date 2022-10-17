import { message } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import { IComponent } from './types';
import WarnPrompt from './warnprompt';

const {
  _util: { withVue },
} = BfdUtil;

(WarnPrompt as IComponent).isUse = () => true;
(WarnPrompt as IComponent).use = (Vue: any) => {
  Intl.isUse() && Intl.use(Vue);
  Vue.use(message);
  withVue(Vue, 'WarnPrompt', WarnPrompt);
};

export default WarnPrompt;
