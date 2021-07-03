import Surnames from './surnames';
import { withInstall } from '../../_util/index';

const Component = withInstall(Surnames);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
