import { createApp, h } from 'vue';
import store from './store'
import SearchTable from '../index';
import ProEditableCellUseKeepEditTable from './ProEditableCellUseKeepEditTable';

import '../index.less';
import './index.less';

const { SearchTableImplementFactory } = SearchTable;

createApp({
  render() {
    return h(SearchTableImplementFactory(ProEditableCellUseKeepEditTable));
  },
})
  .use(store)
  .use(SearchTable)
  .mount('#app');
