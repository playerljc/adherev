import DateDisplay from "@baifendian/adherev-ui-datedisplay";
import Util from '@baifendian/adherev-util';
import Dict from "@baifendian/adherev-util-dict";

import SearchTable from '../index';

const {
  _util: { extend },
} = Util;

const { ProEditableCellSearchTable, OptionsWrap, DisabledOption } = SearchTable;

export default extend({
  className: 'ProEditableCellTable',
  mixins: [ProEditableCellSearchTable('user')],
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
    getBodyCellScopedSlots({ value, record, column }) {
      const { dataIndex } = column;

      if (dataIndex === 'sex') {
        return Dict.value.SystemTestSexSelect.value.find((t) => t.value == record.sex).label;
      }

      if (dataIndex === 'birthday') {
        return <DateDisplay.DateDisplay10 value={record.birthday} />;
      }

      if (dataIndex === '_options') {
        return (
          <OptionsWrap>
            {this.renderOptionColumn([
              {
                key: 'view',
                value: <a onClick={() => alert(1)}>查看</a>,
              },
              {
                key: 'edit',
                value: <a onClick={() => alert(2)}>编辑</a>,
              },
              {
                key: 'delete',
                value: <DisabledOption>删除</DisabledOption>,
              },
            ])}
          </OptionsWrap>
        );
      }

      return value;
    },
    getColumns() {
      return this.$getColumnsProEditableCellSearchTable([
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
            onSave: ({ value, record, dataIndex }) =>
              new Promise<void>((resolve) => {
                this.updateEditorCellDate({
                  record,
                  dataIndex,
                  value,
                }).then(() => resolve());
              }),
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
            onSave: ({ value, record, dataIndex }) =>
              new Promise<void>((resolve) => {
                this.updateEditorCellDate({
                  record,
                  dataIndex,
                  value,
                }).then(() => resolve());
              }),
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
            onSave: ({ record, dataIndex, value }) => {
              return new Promise<void>((resolve) => {
                this.updateEditorCellDateData({
                  record,
                  dataIndex,
                  value,
                }).then(() => resolve());
              });
            },
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
            onSave: ({ record, dataIndex, value }) => {
              return new Promise<void>((resolve) => {
                this.updateEditorCellDate({
                  record,
                  dataIndex,
                  value,
                }).then(() => resolve());
              });
            },
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
            onSave: ({ record, dataIndex, value }) => {
              return new Promise<void>((resolve) => {
                this.updateEditorCellDate({
                  record,
                  dataIndex,
                  value,
                }).then(() => resolve());
              });
            },
          },
        },
        {
          title: '操作',
          dataIndex: '_options',
          key: '_options',
          align: 'center',
          width: 200,
        },
      ]);
    },
  },
});
