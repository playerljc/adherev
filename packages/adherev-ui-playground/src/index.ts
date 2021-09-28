import 'vue-highlight.js/lib/allLanguages';
import VueHighlightJS from 'vue-highlight.js';
import PlayGround from './PlayGround';
import PlayGroundMulit from './PlayGroundMulit';
import Props from './Props';
import FunctionProps from './FunctionProps';

import { withInstall } from '../../_util';

const Component = withInstall(PlayGround);

Component.PlayGroundMulit = withInstall(PlayGroundMulit);
Component.FunctionProps = withInstall(FunctionProps);
Component.Props = withInstall(Props);

Component.isUse = () => true;

Component.use = (Vue) => {
  Vue.use(Component);
  Vue.use(Component.PlayGroundMulit);
  Vue.use(Component.FunctionProps);
  Vue.use(Component.Props);
  Vue.use(VueHighlightJS);
};

export default Component;
