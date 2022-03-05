import ErrorPrompt from './errorprompt';
import BfdUtil from '@baifendian/adherev-util';
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
