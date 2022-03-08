import BfdUtil from '@baifendian/adherev-util';

import ErrorPrompt from './errorprompt';
import { IComponent } from './types';

const {
  _util: { withVue },
} = BfdUtil;

(ErrorPrompt as IComponent).isUse = () => true;
(ErrorPrompt as IComponent).use = (Vue: any) => {
  withVue(Vue, 'ErrorPrompt', ErrorPrompt);
};

export default ErrorPrompt;
