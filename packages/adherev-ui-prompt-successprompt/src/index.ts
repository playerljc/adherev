import SuccessPrompt from './successprompt';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = BfdUtil;

SuccessPrompt.isUse = () => true;
SuccessPrompt.use = (Vue) => {
  withVue(Vue, 'SuccessPrompt', SuccessPrompt);
};

export default SuccessPrompt;
