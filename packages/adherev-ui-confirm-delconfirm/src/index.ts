// @ts-ignore
import DelConform, { open } from './delconfirm';
import { withInstall } from '../../_util';

DelConform.open = open;

const Component = withInstall(DelConform);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
