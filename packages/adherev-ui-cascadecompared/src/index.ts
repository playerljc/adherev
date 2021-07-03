import CascadeCompared from './cascadecompared';
import { withInstall } from '../../_util/index';

const Component = withInstall(CascadeCompared);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
