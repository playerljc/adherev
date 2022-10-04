import Util from '@baifendian/adherev-util';

import WritingBoard from './writingboard';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(WritingBoard);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'WritingBoard', Component);
};

export default Component;
