import BfdUtil from '@baifendian/adherev-util';

import SuccessPrompt from './successprompt';
import { IComponent } from './types';

const {
  _util: { withVue },
} = BfdUtil;

(SuccessPrompt as IComponent).isUse = () => true;
(SuccessPrompt as IComponent).use = (Vue: any) => {
  withVue(Vue, 'SuccessPrompt', SuccessPrompt);
};

export default SuccessPrompt;
