import { Button } from 'ant-design-vue'

import Util from '@baifendian/adherev-util';
import Resource from '@baifendian/adherev-util-resource';
import Intl from '@baifendian/adherev-util-intl';
import DateDisplay from '@baifendian/adherev-ui-datedisplay';

import { SystemBaseSearchTableImpl } from '../../SystemBaseSearchTable';

import SearchTable from '../../../../index';

const {
  _util: { extend },
} = Util

const { OptionsWrap } = SearchTable

function createTableFactory(className, serviceName) {
  return extend({
    className,
    mixins: [SystemBaseSearchTableImpl(serviceName)],
    methods: {
      getFetchListPropName() {
        return 'fetchList'
      },
      getOrderFieldValue() {
        return 'height'
      },
      getScopedSlots(h) {
        const superScopedSlots = this.$getScopedSlotsProSearchTable(h)

        return {
          ...superScopedSlots,
          sex: val => Resource.Dict.value.ResourceNormalSexMap.value.get(val).label,
          birthDay: val => <DateDisplay.DateDisplay10 value={val} />,
        }
      },
      getColumns() {
        return this.$getColumnsProSearchTable([
          {
            title: Intl.tv('姓名'),
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: 150,
            $search: {
              type: 'input',
              visible: true,
            },
          },
          {
            title: Intl.tv('性别'),
            dataIndex: 'sex',
            key: 'sex',
            align: 'center',
            scopedSlots: { customRender: 'sex' },
            width: 150,
            $search: {
              type: 'select',
              visible: true,
              dictName: 'SystemTestSexSelect',
            },
          },
          {
            title: Intl.tv('出生年月'),
            dataIndex: 'birthDay',
            key: 'birthDay',
            align: 'center',
            width: 200,
            sorter: true,
            sortOrder: this.sortOrder('birthDay'),
            scopedSlots: { customRender: 'birthDay' },
            $search: {
              type: 'rangePicker',
              visible: true,
              startName: 'birthDayStart',
              endName: 'birthDayEnd',
            },
          },
          {
            title: Intl.tv('身高'),
            dataIndex: 'height',
            key: 'height',
            align: 'center',
            width: 150,
            sorter: true,
            sortOrder: this.sortOrder('height'),
            $search: {
              type: 'inputNumberDecimal2',
              visible: true,
            },
          },
          {
            title: Intl.tv('体重'),
            dataIndex: 'width',
            key: 'width',
            align: 'center',
            width: 150,
            sorter: true,
            sortOrder: this.sortOrder('width'),
            $search: {
              type: 'inputNumberDecimal2',
              visible: true,
            },
          },
          {
            title: Intl.tv('籍贯'),
            dataIndex: 'hometown',
            key: 'hometown',
            align: 'center',
            width: 200,
            $search: {
              type: 'input',
              visible: true,
            },
          },
          {
            title: Intl.tv('现居住地'),
            dataIndex: 'address',
            key: 'address',
            width: 300,
            $search: {
              type: 'input',
              visible: true,
            },
          },
        ])
      },
      renderSearchFooterItems(defaultItems) {
        return [
          <Button
              key="add"
              icon="user-add"
              type="primary"
              onClick={() => {

              }}
          >
            新增
          </Button>,
          ...defaultItems,
        ]
      },
    },
  })
}

export const Table = extend({
  className: 'UserManagerList',
  mixins: [createTableFactory('UserManagerBaseList', 'user')],
  methods: {
    getComponentId() {
      return 'UserManagerList'
    },
    getScopedSlots(h) {
      return {
        ...this.$getScopedSlotsUserManagerBaseList(h),
        options: (val, record) => (
          <OptionsWrap>
            {this.renderOptionColumn(
              [
                {
                  key: 'view',
                  value: (
                    <a
                      onClick={() => {
                      }}
                    >
                      查看
                    </a>
                  ),
                },
              ],
              { val, record },
            )}
          </OptionsWrap>
        ),
      }
    },
    getColumns() {
      return [
        ...this.$getColumnsUserManagerBaseList(),
        {
          title: Intl.tv('操作'),
          dataIndex: '_options',
          key: '_options',
          align: 'center',
          scopedSlots: { customRender: 'options' },
          width: 500,
        },
      ]
    },
  },
})
