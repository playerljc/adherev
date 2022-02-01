import 'vue-highlight.js/lib/allLanguages';
import VueHighlightJS from 'vue-highlight.js';
import BfdUtil from '@baifendian/adherev-util';

import Props from './Props';
import FunctionProps from './FunctionProps';
import CodePanel from './CodePanel';
import CodeTabPanel from './CodeTabPanel';
import CodeBoxPanel from './CodeBoxPanel';
import PlayGround from './PlayGround';
import PlayGroundTab from './PlayGroundTab';
import PlayGroundMulit from './PlayGroundMulit';
import PlayGroundPage from './PlayGroundPage';
import AnchorNavigation from './AnchorNavigation';

const {
  _util: { withInstall, withVue },
} = BfdUtil;

const Component = withInstall(PlayGround);

Component.FunctionProps = withInstall(FunctionProps);
Component.Props = withInstall(Props);
Component.CodePanel = withInstall(CodePanel);
Component.CodeTabPanel = withInstall(CodeTabPanel);
Component.CodeBoxPanel = withInstall(CodeBoxPanel);
Component.PlayGroundTab = withInstall(PlayGroundTab);
Component.PlayGroundMulit = withInstall(PlayGroundMulit);
Component.PlayGroundPage = withInstall(PlayGroundPage);
Component.AnchorNavigation = withInstall(AnchorNavigation);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);

  Vue.use(Component.FunctionProps);
  Vue.use(Component.Props);
  Vue.use(Component.CodePanel);
  Vue.use(Component.CodeTabPanel);
  Vue.use(Component.CodeBoxPanel);
  Vue.use(Component.PlayGroundTab);
  Vue.use(Component.PlayGroundMulit);
  Vue.use(Component.PlayGroundPage);
  Vue.use(Component.AnchorNavigation);
  Vue.use(VueHighlightJS);

  withVue(Vue, 'PlayGround', Component);
  withVue(Vue, 'FunctionProps', FunctionProps);
  withVue(Vue, 'Props', Props);
  withVue(Vue, 'CodePanel', CodePanel);
  withVue(Vue, 'CodeTabPanel', CodeTabPanel);
  withVue(Vue, 'CodeBoxPanel', CodeBoxPanel);
  withVue(Vue, 'PlayGroundTab', PlayGroundTab);
  withVue(Vue, 'PlayGroundMulit', PlayGroundMulit);
  withVue(Vue, 'PlayGroundPage', PlayGroundPage);
  withVue(Vue, 'AnchorNavigation', AnchorNavigation);
};

export default Component;
