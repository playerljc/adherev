import SuccessPrompt from './successprompt';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
SuccessPrompt.isUse = () => true;
// @ts-ignore
SuccessPrompt.use = (Vue) => {
  withVue(Vue, 'SuccessPrompt', SuccessPrompt);
};

export default SuccessPrompt;
