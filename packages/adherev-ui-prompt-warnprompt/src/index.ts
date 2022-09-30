import BfdUtil from '@baifendian/adherev-util';

import WarnPrompt from './warnprompt';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
WarnPrompt.isUse = () => true;
// @ts-ignore
WarnPrompt.use = (Vue) => {
  withVue(Vue, 'WarnPrompt', WarnPrompt);
};

export default WarnPrompt;
