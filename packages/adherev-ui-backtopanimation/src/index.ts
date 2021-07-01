import './index.less'; import BackTopAnimation from './backtopanimation';
import { withInstall } from '../../_util/index';

const Component = withInstall(BackTopAnimation);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
