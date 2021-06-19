import Space, { SpaceGroup } from './space';

import { withInstall } from '../../_util';

const Component = withInstall(Space);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);

  Vue.use(Component.Group);
};

Component.Group = withInstall(SpaceGroup);

export default Component;
