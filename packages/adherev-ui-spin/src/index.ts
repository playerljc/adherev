// @ts-ignore
import Spin from './spin';
// @ts-ignore
import { withInstall } from '../../_util';

const Component = withInstall(Spin);
// @ts-ignore
Component.isUse = () => true;

// @ts-ignore
Component.use = (Vue) => {
  Vue.use(Component);
};

export default Component;
