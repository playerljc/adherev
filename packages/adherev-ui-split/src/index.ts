import Split, { SplitGroup } from './split';

import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(Split);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);

  Vue.use(Component.Group);

  withVue(Vue, 'Split', Component);
};

Component.Group = withInstall(SplitGroup);

export default Component;
