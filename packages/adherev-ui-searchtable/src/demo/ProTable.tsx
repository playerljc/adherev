import DateDisplay from '@baifendian/adherev-ui-datedisplay';
import Util from '@baifendian/adherev-util';
import Dict from '@baifendian/adherev-util-dict';

import SearchTable from '../index';

const {
  _util: { extend },
} = Util;

const { ProSearchTable, OptionsWrap, DisabledOption } = SearchTable;

export default extend({
  className: 'ProTableImpl',
  mixins: [ProSearchTable('user')],
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
      const superScopedSlots = this.$getScopedSlotsProSearchTable(h);

      return {
        ...superScopedSlots,
        sex: (val) => Dict.value.SystemTestSexSelect.value.find((t) => t.value == val).label,
        birthday: (val) => <DateDisplay.DateDisplay10 value={val} />,
        options: (val, record) => (
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
              { val, record },
            )}
          </OptionsWrap>
        ),
      };
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
          fixed: 'left',
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
