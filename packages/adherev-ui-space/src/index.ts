import BfdUtil from '@baifendian/adherev-util';

import Space, { SpaceGroup } from './space';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component: IComponent = withInstall(Space);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);

  Vue.use(Component.Group);

  withVue(Vue, 'Space', Component);
};

Component.Group = withInstall(SpaceGroup);

export default Component;
