import { createApp, h } from 'vue';

import store from './store'
import SearchTable from '../index';
import ColumnResizeTable from './ColumnResizeTable';

import '../index.less';
import './index.less';

const { SearchTableImplementFactory } = SearchTable;

createApp({
  render() {
    return h(SearchTableImplementFactory(ColumnResizeTable));
  },
})
  .use(store)
  .use(SearchTable)
  .mount('#app');
