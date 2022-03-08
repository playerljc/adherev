import BfdUtil from '@baifendian/adherev-util';

import WarnPrompt from './warnprompt';
import { IComponent } from './types';

const {
  _util: { withVue },
} = BfdUtil;

(WarnPrompt as IComponent).isUse = () => true;
(WarnPrompt as IComponent).use = (Vue: any) => {
  withVue(Vue, 'WarnPrompt', WarnPrompt);
};

export default WarnPrompt;
