import BfdUtil from '@baifendian/adherev-util';

import { IComponent } from './types';
import WarnPrompt from './warnprompt';

const {
  _util: { withVue },
} = BfdUtil;

(WarnPrompt as IComponent).isUse = () => true;
(WarnPrompt as IComponent).use = (Vue: any) => {
  withVue(Vue, 'WarnPrompt', WarnPrompt);
};

export default WarnPrompt;
