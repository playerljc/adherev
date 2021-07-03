import StickupLayout from './stickuplayout';
import StickupLayoutItem from './item';
import { withInstall } from '../../_util/index';

withInstall(StickupLayout);
withInstall(StickupLayoutItem);

StickupLayout.isUse = () => true;
StickupLayout.use = (Vue) => {
  Vue.use(StickupLayout);
  Vue.use(StickupLayoutItem);
};

StickupLayout.Item = StickupLayoutItem;

export default StickupLayout;
