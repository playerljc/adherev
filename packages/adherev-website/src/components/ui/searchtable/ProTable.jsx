import { DateDisplay, Dict, SearchTable, Util } from '@baifendian/adherev';

const {
  _util: { extend },
} = Util;

const { SearchTableImplementFactory, ProSearchTable, OptionsWrap, DisabledOption } = SearchTable;

export default SearchTableImplementFactory(
  extend({
    className: 'ProTableImpl',
    mixins: [ProSearchTable('user')],
    methods: {
      getComponentId() {
        return 'ProTableImpl';
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
                { val: value, record },
              )}
            </OptionsWrap>
          );
        }
      },
      getColumns() {
        return this.$getColumnsProSearchTable([
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
  }),
);
