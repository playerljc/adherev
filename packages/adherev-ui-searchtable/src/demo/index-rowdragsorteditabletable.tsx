import Vue from 'vue';

import { createStore } from './store';
import SearchTable from '../index';
import ProRowDragSortEditableTable from './ProRowDragSortEditableTable';

import '../index.less';
import './index.less';

SearchTable.use(Vue);

const { SearchTableImplementFactory } = SearchTable;

new Vue({
  el: '#app',
  store: createStore(),
  render(h) {
    return h(SearchTableImplementFactory(ProRowDragSortEditableTable));
  },
});
