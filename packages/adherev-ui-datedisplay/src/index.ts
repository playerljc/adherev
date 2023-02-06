import { App, Plugin } from 'vue';

import Util from '@baifendian/adherev-util';

import DateDisplay from './datedisplay';

const {
  _util: { withVue },
} = Util;

const Component = {
  name: 'adv-datedisplay',
  ...DateDisplay,
  install: (app: App) => {
    Object.keys(DateDisplay).forEach((key) => {
      if (key === 'dayjs') return;

      app.component(DateDisplay[key].name, DateDisplay[key]);
    });

    withVue(app, 'DateDisplay', DateDisplay);

    return app;
  },
};

export default Component as typeof Component & Plugin;
