import Util from '@baifendian/adherev-util';

import SearchTable from '../index';

const {
  _util: { extend },
} = Util;

const { ProDragSortEditableSearchTable, EditableTableControl } = SearchTable;

export default extend({
  className: 'ProRowDragSortEditableTable',
  mixins: [ProDragSortEditableSearchTable('user')],
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
      return this.$getColumnsProDragSortEditableSearchTable([
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
          $editable: {
            editable: true,
            type: 'input',
            rules: [
              {
                required: true,
                message: '请输入姓名',
              },
            ],
          },
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
          align: 'center',
          width: 200,
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
          $editable: {
            editable: true,
            type: 'input',
            rules: [
              {
                required: true,
                message: '请输入姓名',
              },
            ],
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
          $search: {
            type: 'rangePicker',
            visible: true,
            startName: 'birthDayStart',
            endName: 'birthDayEnd',
          },
          $editable: {
            editable: true,
            type: 'datePicker',
            rules: [
              {
                required: true,
                message: '请选择',
              },
            ],
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
          $editable: {
            editable: true,
            type: 'inputNumberDecimal2',
            rules: [
              {
                required: true,
                message: '请输入体重',
              },
            ],
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
          $editable: {
            editable: true,
            type: 'inputNumberDecimal2',
            rules: [
              {
                required: true,
                message: '请输入体重',
              },
            ],
          },
        },
      ]);
    },
    /**
     * renderSearchFooterItems
     * 渲染表格的工具栏
     * @override
     */
    renderSearchFooterItems(defaultItems) {
      return [<EditableTableControl />, ...defaultItems];
    },
  },
});
