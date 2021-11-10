import PullRefresh from './pullrefresh';
import BfdUtil from '@baifendian/adherev-util';
const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(PullRefresh);
Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Component);
  withVue(Vue, 'PullRefresh', Component);
};

export default Component;
