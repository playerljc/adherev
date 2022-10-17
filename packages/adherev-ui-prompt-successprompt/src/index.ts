import { message } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import SuccessPrompt from './successprompt';
import { IComponent } from './types';

const {
  _util: { withVue },
} = BfdUtil;

(SuccessPrompt as IComponent).isUse = () => true;
(SuccessPrompt as IComponent).use = (Vue: any) => {
  Intl.isUse() && Intl.use(Vue);
  Vue.use(message);
  withVue(Vue, 'SuccessPrompt', SuccessPrompt);
};

export default SuccessPrompt;
