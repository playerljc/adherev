import Util from '@baifendian/adherev-util';

import Notification from './notification';

const {
  _util: { withVue },
} = Util;

Notification.isUse = () => true;

Notification.use = (Vue) => {
  withVue(Vue, 'Notification', Notification);
};

export default Notification;
