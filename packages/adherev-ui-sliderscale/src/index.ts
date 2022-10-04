import BfdUtil from '@baifendian/adherev-util';

import SliderScale from './sliderscale';

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
