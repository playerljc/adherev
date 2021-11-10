import ConditionalRender from './conditionalrender';
import Util from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(ConditionalRender);
Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'ConditionalRender', ConditionalRender);
};

export default Component;
