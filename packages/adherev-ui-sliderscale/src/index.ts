import BfdUtil from '@baifendian/adherev-util';

import SliderScale from './sliderscale';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component: IComponent = withInstall(SliderScale);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'SliderScale', Component);
};

export default Component;
