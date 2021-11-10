import Space, { SpaceGroup } from './space';

import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(Space);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);

  Vue.use(Component.Group);

  withVue(Vue, 'Space', Component);
};

Component.Group = withInstall(SpaceGroup);

export default Component;
