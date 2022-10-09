import AdapterScreen from '@baifendian/adhere-util-adapterscreen';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

const Component: any = AdapterScreen;

Component.isUse = () => true;
Component.use = (Vue) => {
  withVue(Vue, 'AdapterScreen', Component);
};

export default Component;
