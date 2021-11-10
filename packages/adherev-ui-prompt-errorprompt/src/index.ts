import ErrorPrompt from './errorprompt';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withVue },
} = BfdUtil;

ErrorPrompt.isUse = () => true;
ErrorPrompt.use = (Vue) => {
  withVue(Vue, 'ErrorPrompt', ErrorPrompt);
};

export default ErrorPrompt;
