import Util from '@baifendian/adherev-util';

import Notification from './notification';

const {
  _util: { withVue },
} = Util;

// @ts-ignore
Notification.isUse = () => true;
// @ts-ignore
Notification.use = (Vue) => {
  withVue(Vue, 'Notification', Notification);
};

export default Notification;
