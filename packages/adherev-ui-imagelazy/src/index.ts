import Util from '@baifendian/adherev-util';

import ImageLazy from './imagelazy';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(ImageLazy);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'ImageLazy', Component);
};

export default Component;
