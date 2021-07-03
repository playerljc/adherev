import DelConform, { open } from './delconfirm';
import { withInstall } from '../../_util';

const Component = withInstall(DelConform);
Component.open = open;
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
