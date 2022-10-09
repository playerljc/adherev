import BfdUtil from '@baifendian/adherev-util';

import WarnPrompt from './warnprompt';

const {
  _util: { withVue },
} = BfdUtil;

WarnPrompt.isUse = () => true;

WarnPrompt.use = (Vue) => {
  withVue(Vue, 'WarnPrompt', WarnPrompt);
};

export default WarnPrompt;
