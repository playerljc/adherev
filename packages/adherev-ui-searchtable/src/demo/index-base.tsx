import Vue from 'vue';

import SearchTable from '../index';
// import { createStore } from './store';
import Table from './table';

import '../index.less';

SearchTable.use(Vue);

new Vue({
  el: '#app',
  // store: createStore(),
  render(h) {
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
});
