import { createApp, h } from 'vue';
import store from './store'
import SearchTable from '../index';
// @ts-ignore
import Index from './UserManager/List/index';

import '../index.less';
import './index.less';

createApp({
  render() {
    return h(Index);
  },
})
  .use(store)
  .use(SearchTable)
  .mount('#app');
