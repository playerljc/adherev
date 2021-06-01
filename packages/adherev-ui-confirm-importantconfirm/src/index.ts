// @ts-ignore
import ImportantConfirm, { open } from './importantconfirm';
import { withInstall } from '../../_util';

const Component = withInstall(ImportantConfirm);
Component.open = open;
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
