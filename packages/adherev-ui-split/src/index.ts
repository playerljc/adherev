// @ts-ignore
import Split, { SplitGroup } from './split';
// @ts-ignore
import { withInstall } from '../../_util';

const Component = withInstall(Split);
// @ts-ignore
Component.isUse = () => true;
// @ts-ignore
Component.use = (Vue) => {
  Vue.use(Component);
  // @ts-ignore
  Vue.use(Component.Group);
};

// @ts-ignore
Component.Group = withInstall(SplitGroup);

export default Component;
