// @ts-ignore
import ImportantConfirm, { open } from './importantconfirm';
import { withInstall } from '../../_util';

ImportantConfirm.open = open;

const Component = withInstall(ImportantConfirm);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

export default Component;
