import Vue from 'vue';

import { createStore } from './store';
import SearchTable from '../index';
// @ts-ignore
import Index from './UserManager/List/index';

import '../index.less';
import './index.less';

SearchTable.use(Vue);

new Vue({
  el: '#app',
  store: createStore(),
  render(h) {
    return h(Index);
  },
});
