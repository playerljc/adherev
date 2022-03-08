import BfdUtil from '@baifendian/adherev-util';

import Spin from './spin';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component: IComponent = withInstall(Spin);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'Spin', Component);
};

export default Component;
