import './index.less'; import { Slider } from 'ant-design-vue';
import FontSizeSetting from './fontsizesetting';
import { withInstall } from '../../_util/index';

const Component = withInstall(FontSizeSetting);
Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Slider);
  Vue.use(Component);
};

export default Component;
