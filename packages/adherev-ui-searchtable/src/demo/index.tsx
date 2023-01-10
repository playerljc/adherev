import Vue from 'vue';

import { createStore } from './store';
import SearchTable from '../index';
import ProTable from './ProTable';
import './index.less';
import '../index.less';

SearchTable.use(Vue);

new Vue({
  el: '#app',
  store: createStore(),
  render(h) {
    return h(ProTable, {
      props: {
        wrapStyle: 'height:100%',
        isShowExpandSearch: true,
        defaultExpandSearchCollapse: false,
        fixedHeaderAutoTable: true,
        fixedTableSpaceBetween: true,
      },
    });
  },
});
