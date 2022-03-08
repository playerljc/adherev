import BfdUtil from '@baifendian/adherev-util';

import Split, { SplitGroup } from './split';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component: IComponent = withInstall(Split);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);

  Vue.use(Component.Group);

  withVue(Vue, 'Split', Component);
};

Component.Group = withInstall(SplitGroup);

export default Component;
