import Split, { SplitGroup } from './split';

import { withInstall } from '../../_util';

const Component = withInstall(Split);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);

  Vue.use(Component.Group);
};

Component.Group = withInstall(SplitGroup);

export default Component;
