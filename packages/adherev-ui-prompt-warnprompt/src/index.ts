import WarnPrompt from './warnprompt';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = BfdUtil;

WarnPrompt.isUse = () => true;
WarnPrompt.use = (Vue) => {
  withVue(Vue, 'WarnPrompt', WarnPrompt);
};

export default WarnPrompt;
