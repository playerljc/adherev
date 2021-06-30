import ImageLazy from './imagelazy';
import { withInstall } from '../../_util/index';

const Component = withInstall(ImageLazy);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
