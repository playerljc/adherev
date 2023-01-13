import Util from '@baifendian/adherev-util';

import SearchTable from '../index';

const {
  _util: { extend },
} = Util;

const { ProEditableRowSearchTable, EditableRowControl, OptionsWrap, DisabledOption } = SearchTable;

export default extend({
  className: 'ProEditableRowTable',
  mixins: [ProEditableRowSearchTable('user')],
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
    getScopedSlots(h) {
      const superScopedSlots = this.$getScopedSlotsProEditableRowSearchTable(h);

      return {
        ...superScopedSlots,
        options: (val, record) => (
          /*<OptionsWrap>
            {this.renderOptionColumn(
              [
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
              ],
              { val, record },
            )}
          </OptionsWrap>*/
          <EditableRowControl
            record={record}
            rowKey={this.getRowKey()}
            editorRowId={this.editorRowId}
          />
        ),
      };
    },
    getColumns() {
      return this.$getColumnsProEditableRowSearchTable([
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
          scopedSlots: { customRender: 'birthday' },
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
          scopedSlots: { customRender: 'options' },
          width: 200,
        },
      ]);
    },
  },
});
