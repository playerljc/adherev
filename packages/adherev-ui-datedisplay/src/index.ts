import Util from '@baifendian/adherev-util';

import DateDisplay from './datedisplay';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall({
  name: 'adv-datedisplay',
  ...DateDisplay,
});

Object.keys(DateDisplay).forEach((key) => {
  if (key === 'dayjs') return;

  withInstall(DateDisplay[key]);
});

Component.isUse = () => true;

Component.use = (Vue) => {
  Object.keys(DateDisplay).forEach((key) => {
    if (key === 'dayjs') return;

    Vue.use(DateDisplay[key]);
  });

  withVue(Vue, 'DateDisplay', DateDisplay);
};

export default Component;
