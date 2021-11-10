import { Slider } from 'ant-design-vue';
import FontSizeSetting from './fontsizesetting';
import Util from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(FontSizeSetting);
Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Slider);
  Vue.use(Component);
  withVue(Vue, 'FontSizeSetting', Component);
};

export default Component;
