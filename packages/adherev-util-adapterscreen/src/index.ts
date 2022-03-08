import AdapterScreen from '@baifendian/adhere-util-adapterscreen';
import BfdUtil from '@baifendian/adherev-util';

const {
  _util: { withVue },
} = BfdUtil;

// @ts-ignore
AdapterScreen.isUse = () => true;
// @ts-ignore
AdapterScreen.use = (Vue: any) => {
  withVue(Vue, 'AdapterScreen', AdapterScreen);
};

export default AdapterScreen;
