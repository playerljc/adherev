import BfdUtil from '@baifendian/adherev-util';

import ErrorPrompt from './errorprompt';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
ErrorPrompt.isUse = () => true;
// @ts-ignore
ErrorPrompt.use = (Vue) => {
  withVue(Vue, 'ErrorPrompt', ErrorPrompt);
};

export default ErrorPrompt;
