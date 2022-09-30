import Util from '@baifendian/adherev-util';

import ImageLazy from './imagelazy';
import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(ImageLazy);

Component.isUse = () => true;

Component.use = (Vue: any) => {
  Vue.use(Component);
  withVue(Vue, 'ImageLazy', Component);
};

export default Component;
