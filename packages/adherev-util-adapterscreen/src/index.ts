import AdapterScreen from '@baifendian/adhere-util-adapterscreen';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

AdapterScreen.isUse = () => true;
AdapterScreen.use = (Vue) => {
  withVue(Vue, 'AdapterScreen', AdapterScreen);
};

export default AdapterScreen;
