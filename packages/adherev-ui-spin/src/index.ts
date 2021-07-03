import Spin from './spin';

import { withInstall } from '../../_util';

const Component = withInstall(Spin);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
};

export default Component;
