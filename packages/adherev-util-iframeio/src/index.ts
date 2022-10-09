import IframeIO from '@baifendian/adhere-util-iframeio';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = IframeIO;

Component.isUse = () => true;

Component.use = (Vue) => {
  withVue(Vue, 'IframeIO', Component);
};

export default Component;
