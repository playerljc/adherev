import { createApp, h } from 'vue';

import SearchTable from '../index';
// import { createStore } from './store';
import Table from './Table';

import '../index.less';

createApp({
  // store: createStore(),
  render() {
    return h(
      Table /*{
      props: {
        wrapStyle: 'height:100%',
        isShowExpandSearch: true,
        defaultExpandSearchCollapse: false,
        fixedHeaderAutoTable: true,
        fixedTableSpaceBetween: true,
      },
    }*/,
    );
  },
})
  .use(SearchTable)
  .mount('#app');
