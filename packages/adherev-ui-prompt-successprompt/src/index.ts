import BfdUtil from '@baifendian/adherev-util';

import SuccessPrompt from './successprompt';

const {
  _util: { withVue },
} = BfdUtil;

SuccessPrompt.isUse = () => true;
SuccessPrompt.use = (Vue) => {
  withVue(Vue, 'SuccessPrompt', SuccessPrompt);
};

export default SuccessPrompt;
