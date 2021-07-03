import SwipeOut from './swipeout';
import { withInstall } from '../../_util/index';

const Component = withInstall(SwipeOut);
Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Component);
};


export default Component;
