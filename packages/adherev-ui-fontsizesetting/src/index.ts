import Util from '@baifendian/adherev-util';
import { Slider } from 'ant-design-vue';
import FontSizeSetting from './fontsizesetting';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(FontSizeSetting);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Slider);
  Vue.use(Component);
  withVue(Vue, 'FontSizeSetting', Component);
};

export default Component;
