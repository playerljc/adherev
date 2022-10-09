import BfdUtil from '@baifendian/adherev-util';

import ErrorPrompt from './errorprompt';

const {
  _util: { withVue },
} = BfdUtil;

ErrorPrompt.isUse = () => true;

ErrorPrompt.use = (Vue) => {
  withVue(Vue, 'ErrorPrompt', ErrorPrompt);
};

export default ErrorPrompt;
