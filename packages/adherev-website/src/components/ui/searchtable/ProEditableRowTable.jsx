import { SearchTable, Util } from '@baifendian/adherev';

const {
  _util: { extend },
} = Util;

const { SearchTableImplementFactory, ProEditableRowSearchTable, EditableRowControl } = SearchTable;

export default SearchTableImplementFactory(
  extend({
    className: 'ProEditableRowTable',
    mixins: [ProEditableRowSearchTable('user')],
    methods: {
      getComponentId() {
        return 'ProEditableRowTable';
      },
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
          options: (val, record, index) => (
            <EditableRowControl
              record={record}
              rowKey={this.getRowKey()}
              editorRowId={this.editorRowId}
              rowIndex={index}
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
            $editable: {
              editable: true,
              type: 'input',
              rules: [
                {
                  required: true,
                  message: '请输入所在部门',
                },
              ],
            },
          },
          {
            title: '身高',
            dataIndex: 'height',
            key: 'height',
            align: 'center',
            width: 300,
            sorter: true,
            sortOrder: this.sortOrder('height'),
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
            width: 300,
            sorter: true,
            sortOrder: this.sortOrder('width'),
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
  }),
);
