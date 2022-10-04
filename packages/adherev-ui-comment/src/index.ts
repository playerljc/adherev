import Util from '@baifendian/adherev-util';

import Comment from './Comment/index';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(Comment);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'Comment', Component);
};

export default Component;
