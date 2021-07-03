import SliderScale from './sliderscale';
import { withInstall } from '../../_util';

const Component = withInstall(SliderScale);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
