import Util from '@baifendian/adherev-util';

import SearchTable from '../index';

const {
  _util: { extend },
} = Util;

const { ProRowDragSortSearchTable } = SearchTable;

export default extend({
  className: 'ProRowDragSortTable',
  mixins: [ProRowDragSortSearchTable('user')],
  methods: {
    getFetchListPropName() {
      return 'fetchList';
    },
    getOrderFieldValue() {
      return 'height';
    },
    getDataKey() {
      return 'records';
    },
    getTotalKey() {
      return 'total';
    },
    getColumns() {
      return this.$getColumnsProRowDragSortSearchTable([
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          align: 'center',
          width: 200,
          $search: {
            type: 'input',
            visible: true,
          },
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
          align: 'center',
          width: 200,
          scopedSlots: { customRender: 'sex' },
          $search: {
            type: 'select',
            visible: true,
            dictName: 'SystemTestSexSelect',
          },
        },
        {
          title: '籍贯',
          dataIndex: 'homeTown',
          key: 'homeTown',
          align: 'center',
          width: 200,
          $search: {
            type: 'input',
            visible: true,
          },
        },
        {
          title: '出生年月',
          dataIndex: 'birthday',
          key: 'birthday',
          align: 'center',
          sorter: true,
          width: 200,
          sortOrder: this.sortOrder('birthday'),
          scopedSlots: { customRender: 'birthday' },
          $search: {
            type: 'rangePicker',
            visible: true,
            startName: 'birthDayStart',
            endName: 'birthDayEnd',
          },
        },
        {
          title: '所在部门',
          dataIndex: 'deptName',
          key: 'deptName',
          align: 'center',
          width: 200,
          $search: {
            type: 'input',
            visible: true,
          },
        },
        {
          title: '身高',
          dataIndex: 'height',
          key: 'height',
          align: 'center',
          sorter: true,
          sortOrder: this.sortOrder('height'),
          width: 300,
          $search: {
            type: 'inputNumberDecimal2',
            visible: true,
          },
        },
        {
          title: '体重',
          dataIndex: 'width',
          key: 'width',
          align: 'center',
          sorter: true,
          sortOrder: this.sortOrder('width'),
          width: 300,
          $search: {
            type: 'inputNumberDecimal2',
            visible: true,
          },
        },
      ]);
    },
  },
});
