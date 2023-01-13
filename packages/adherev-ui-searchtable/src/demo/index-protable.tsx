// import mergewith from 'lodash.mergewith';
import Vue from 'vue';

import { createStore } from './store';
import SearchTable from '../index';
import ProTable from './ProTable';

import '../index.less';
import './index.less';

SearchTable.use(Vue);

const { SearchTableImplementFactory } = SearchTable;

new Vue({
  el: '#app',
  store: createStore(),
  render(h) {
    // return h(ProTable, {
    //   props: {
    //     wrapStyle: 'height:100%',
    //     isShowExpandSearch: true,
    //     defaultExpandSearchCollapse: false,
    //     fixedHeaderAutoTable: true,
    //     fixedTableSpaceBetween: true,
    //   },
    // });

    return h(
      SearchTableImplementFactory(ProTable) /*{
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

// const mergeDataConfig = Vue.config.optionMergeStrategies.data;
//
// Vue.config.optionMergeStrategies.data = function (toVal, fromVal) {
//   if (fromVal && toVal) {
//     return () => {
//       const fromValue = fromVal();
//       const toValue = toVal();
//
//       return mergewith(fromValue, toValue, (objValue, srcValue) => {
//         if (Array.isArray(objValue)) {
//           return objValue.concat(srcValue);
//         }
//       });
//     };
//   }
//
//   if (fromVal) {
//     return fromVal;
//   }
//
//   if (toVal) {
//     return toVal;
//   }
// };
//
// const Sub = {
//   data() {
//     return {
//       arrValue: [6],
//     };
//   },
//   methods: {
//     foo: function () {
//       console.log('foo');
//     },
//     conflicting: function () {
//       console.log('from mixin');
//     },
//   },
// };
//
// const App = {
//   mixins: [Sub],
//   data() {
//     return {
//       arrValue: [1, 2],
//     };
//   },
//   methods: {
//     bar: function () {
//       console.log('bar');
//     },
//     conflicting: function () {
//       console.log('from self');
//     },
//   },
//   created: function () {
//     console.log(this.arrValue);
//   },
//   template: `
//     <div>
//       {{arrValue.join(',')}}
//     </div>
//   `,
// };
//
// var app = new Vue({
//   el: '#app',
//   render(h) {
//     return h(App);
//   },
// });
