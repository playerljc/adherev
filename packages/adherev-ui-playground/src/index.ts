// import 'vue3-highlightjs/lib/allLanguages';
import 'highlight.js/lib/common';

// @ts-ignore
import BfdUtil from '@baifendian/adherev-util';
import hljsVuePlugin from '@highlightjs/vue-plugin';

import AnchorNavigation from './AnchorNavigation';
import CodeBoxPanel from './CodeBoxPanel';
import CodePanel from './CodePanel';
import CodeTabPanel from './CodeTabPanel';
import FunctionProps from './FunctionProps';
import PlayGround from './PlayGround';
import PlayGroundMulit from './PlayGroundMulit';
import PlayGroundPage from './PlayGroundPage';
import CodeBoxSection from './PlayGroundPage/CodeBoxSection';
import FunctionPropsSection from './PlayGroundPage/FunctionPropsSection';
import PropsSection from './PlayGroundPage/PropsSection';
import Section from './PlayGroundPage/Section';
import PlayGroundTab from './PlayGroundTab';
import Props from './Props';

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
Component.PlayGroundPage.CodeBoxSection = withInstall(CodeBoxSection);
Component.PlayGroundPage.FunctionPropsSection = withInstall(FunctionPropsSection);
Component.PlayGroundPage.PropsSection = withInstall(PropsSection);
Component.PlayGroundPage.Section = withInstall(Section);

Component.isUse = () => true;

Component.use = (Vue: any) => {
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
  Vue.use(Component.PlayGroundPage.CodeBoxSection);
  Vue.use(Component.PlayGroundPage.FunctionPropsSection);
  Vue.use(Component.PlayGroundPage.PropsSection);
  Vue.use(Component.PlayGroundPage.Section);
  Vue.use(hljsVuePlugin);

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
  withVue(Vue, 'PlayGroundPage.CodeBoxSection', CodeBoxSection);
  withVue(Vue, 'PlayGroundPage.FunctionPropsSection', FunctionPropsSection);
  withVue(Vue, 'PlayGroundPage.PropsSection', PropsSection);
  withVue(Vue, 'PlayGroundPage.Section', Section);
};

export default Component;
