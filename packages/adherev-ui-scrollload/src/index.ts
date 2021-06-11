// @ts-ignore
import ScrollLoad, { ERROR, EMPTY, NORMAL } from './scrollload';
import { withInstall } from '../../_util/index';

const Component = withInstall(ScrollLoad);
Component.isUse = () => true;
Component.use = (Vue) => Vue.use(Component);

ScrollLoad.ERROR = ERROR;
ScrollLoad.EMPTY = EMPTY;
ScrollLoad.NORMAL = NORMAL;

export default Component;
