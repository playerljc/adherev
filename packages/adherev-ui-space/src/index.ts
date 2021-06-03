// @ts-ignore
import Space, { SpaceGroup } from './space';
// @ts-ignore
import { withInstall } from '../../_util';

const Component = withInstall(Space);
// @ts-ignore
Component.isUse = () => true;
// @ts-ignore
Component.use = (Vue) => {
  Vue.use(Component);
  // @ts-ignore
  Vue.use(Component.Group);
};

// @ts-ignore
Component.Group = withInstall(SpaceGroup);

export default Component;
