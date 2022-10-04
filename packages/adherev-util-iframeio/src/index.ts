import IframeIO from '@baifendian/adhere-util-iframeio';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
IframeIO.isUse = () => true;
// @ts-ignore
IframeIO.use = (Vue) => {
  withVue(Vue, 'IframeIO', IframeIO);
};

export default IframeIO;
