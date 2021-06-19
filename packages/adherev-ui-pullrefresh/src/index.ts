import PullRefresh from './pullrefresh';
import { withInstall } from '../../_util/index';

const Component = withInstall(PullRefresh);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
