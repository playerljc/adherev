import ConditionalRender from './conditionalrender';
import { withInstall } from '../../_util';

const Component = withInstall(ConditionalRender);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
