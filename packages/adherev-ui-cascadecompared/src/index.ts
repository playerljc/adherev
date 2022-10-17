import StickUpLayout from '@baifendian/adherev-ui-stickuplayout';
import Util from '@baifendian/adherev-util';

import CascadeCompared from './cascadecompared';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(CascadeCompared);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  StickUpLayout.isUse() && StickUpLayout.use(Vue);
  Vue.use(Component);
  withVue(Vue, 'CascadeCompared', Component);
};

export default Component;
