import SliderScale from './sliderscale';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(SliderScale);
Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'SliderScale', Component);
};

export default Component;
