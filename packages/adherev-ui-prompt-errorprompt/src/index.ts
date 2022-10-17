import { message } from 'ant-design-vue';

import BfdUtil from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';

import ErrorPrompt from './errorprompt';
import { IComponent } from './types';

const {
  _util: { withVue },
} = BfdUtil;

(ErrorPrompt as IComponent).isUse = () => true;
(ErrorPrompt as IComponent).use = (Vue: any) => {
  Intl.isUse() && Intl.use(Vue);
  Vue.use(message);
  withVue(Vue, 'ErrorPrompt', ErrorPrompt);
};

export default ErrorPrompt;
