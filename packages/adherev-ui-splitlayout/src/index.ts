import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import SplitLayout from './splitlayout';
import { withInstall } from '../../_util/index';

const Component = withInstall(SplitLayout);
Component.isUse = () => true;
Component.use = (Vue) => {
  FlexLayout.use(Vue);
  Vue.use(Component);
};

export default Component;
