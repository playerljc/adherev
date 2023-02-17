<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="SearchTable">
      <p>一种查询表格的通用模式(如果 UI 没有明确给出查询表格的 UI，就可以用这个默认模式)</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <Table
          :isShowExpandSearch="true"
          :defaultExpandSearchCollapse="false"
          :fixedTableSpaceBetween="true"
        />
      </template>

      <template #p2>
        <fragment>
          <a-switch
            checked-children="分页"
            :checked="pagination1"
            @change="pagination1 = !pagination1"
          />

          <adv-space />

          <div style="display: flex; height: 400px">
            <Table
              :wrapStyle="'height: 100%;'"
              :isShowExpandSearch="true"
              :defaultExpandSearchCollapse="false"
              :autoFixed="true"
              :pagination="pagination1"
            />
          </div>
        </fragment>
      </template>

      <template #p3>
        <fragment>
          <a-switch
            checked-children="分页"
            :checked="pagination2"
            @change="pagination2 = !pagination2"
          />

          <adv-space />

          <div style="display: flex; height: 500px">
            <Table
              :wrapStyle="'height: 100%;'"
              :isShowExpandSearch="true"
              :defaultExpandSearchCollapse="false"
              :fixedHeaderAutoTable="true"
              :fixedTableSpaceBetween="true"
              :pagination="pagination2"
            />
          </div>
        </fragment>
      </template>

      <template #p4>
        <fragment>
          <a-switch
            checked-children="分页"
            :checked="pagination3"
            @change="pagination3 = !pagination3"
          />

          <adv-space />

          <div style="display: flex; height: 800px">
            <Table
              :wrapStyle="'height: 100%'"
              :isShowExpandSearch="true"
              :defaultExpandSearchCollapse="false"
              :fixedHeaderAutoTable="true"
              :fixedTableSpaceBetween="true"
              :pagination="pagination3"
            >
              <template v-slot:tableHeader>
                <div :class="$style.Header">
                  <h3>查询表格</h3>
                  <div>
                    <a-button type="primary">新建</a-button>
                  </div>
                </div>
              </template>
              <template v-slot:tableFooter>
                <div :class="$style.Footer">renderTableFooter</div>
              </template>
            </Table>
          </div>
        </fragment>
      </template>

      <template #p5>
        <fragment>
          <a-switch
            checked-children="分页"
            :checked="pagination4"
            @change="pagination4 = !pagination4"
          />

          <adv-space />

          <div style="display: flex; height: 700px">
            <FewTable
              :wrapStyle="'height: 100%'"
              :isShowExpandSearch="true"
              :defaultExpandSearchCollapse="false"
              :fixedHeaderAutoTable="true"
              :fixedTableSpaceBetween="true"
              :pagination="pagination4"
            />
          </div>
        </fragment>
      </template>

      <template #p7>
        <div style="display: flex; height: 700px">
          <RowSelectedNormal
            :wrapStyle="'height: 100%'"
            :isShowExpandSearch="true"
            :defaultExpandSearchCollapse="false"
          />
        </div>
      </template>

      <template #p8>
        <div style="display: flex; height: 700px">
          <RowSelectedContinuous
            :wrapStyle="'height: 100%'"
            :isShowExpandSearch="true"
            :defaultExpandSearchCollapse="false"
          />
        </div>
      </template>

      <template #p9>
        <div style="display: flex; height: 700px">
          <ColumnResizableTable
            :wrapStyle="'height: 100%'"
            :isShowExpandSearch="true"
            :defaultExpandSearchCollapse="false"
            :fixedHeaderAutoTable="true"
          />
        </div>
      </template>

      <template #p10>
        <div style="display: flex; height: 700px">
          <ColumnSettingTable
            :wrapStyle="'height: 100%'"
            :isShowExpandSearch="true"
            :defaultExpandSearchCollapse="false"
          >
            <template v-slot:tableHeader>
              <div :class="$style.Header">
                <h3>查询表格</h3>
                <div>
                  <adv-searchtable-column-setting />
                </div>
              </div>
            </template>
          </ColumnSettingTable>
        </div>
      </template>

      <template #p11>
        <div style="display: flex; height: 700px">
          <TableDensitySetting
            :wrapStyle="'height: 100%'"
            :isShowExpandSearch="true"
            :defaultExpandSearchCollapse="false"
          >
            <template v-slot:tableHeader="context">
              <div :class="$style.Header">
                <h3>查询表格</h3>
                <div>
                  <adv-searchtable-tabledensity />
                </div>
              </div>
            </template>
          </TableDensitySetting>
        </div>
      </template>

      <template #p12>
        <div style="display: flex; height: 700px">
          <TableSearchBetweenTable
            :wrapStyle="'height: 100%'"
            :isShowExpandSearch="true"
            :defaultExpandSearchCollapse="false"
          >
            <template v-slot:searchFormBefore="context">
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-statistic title="Active Users" :value="112893" />
                </a-col>
                <a-col :span="12">
                  <a-statistic title="Account Balance (CNY)" :value="112893" :precision="2" />
                  <a-button style="margin-top: 16px" type="primary">Recharge</a-button>
                </a-col>
                <a-col :span="12">
                  <a-statistic title="Active Users" value="112893" :loading="true" />
                </a-col>
              </a-row>
            </template>

            <template v-slot:searchFormAfter="context">
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-statistic title="Active Users" :value="112893" />
                </a-col>
                <a-col :span="12">
                  <a-statistic title="Account Balance (CNY)" :value="112893" :precision="2" />
                  <a-button style="margin-top: 16px" type="primary">Recharge</a-button>
                </a-col>
                <a-col :span="12">
                  <a-statistic title="Active Users" :value="112893" :loading="true" />
                </a-col>
              </a-row>
            </template>
          </TableSearchBetweenTable>
        </div>
      </template>

      <template #p13>
        <div style="display: flex; height: 700px">
          <ProTable />
        </div>
      </template>

      <template #p14>
        <div style="display: flex; height: 700px">
          <ProEditableCellTable />
        </div>
      </template>

      <template #p15>
        <div style="display: flex; height: 700px">
          <ProEditableRowTable />
        </div>
      </template>

      <template #p16>
        <div style="display: flex; height: 700px">
          <ProEditableTable />
        </div>
      </template>

      <template #p17>
        <div style="display: flex; height: 700px">
          <ProEditableCellUseKeepEditTable />
        </div>
      </template>

      <template #p18>
        <div style="display: flex; height: 700px">
          <ProEditableCellRenderTriggerTable />
        </div>
      </template>

      <template #p19>
        <div style="display: flex; height: 700px">
          <ProRowDragSortTable />
        </div>
      </template>

      <template #p20>
        <div style="display: flex; height: 700px">
          <ProRowDragSortEditableCellTable />
        </div>
      </template>

      <template #p21>
        <div style="display: flex; height: 700px">
          <ProRowDragSortEditableRowTable />
        </div>
      </template>

      <template #p22>
        <div style="display: flex; height: 700px">
          <ProRowDragSortEditableTable />
        </div>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import ProEditableCellRenderTriggerTable from './ProEditableCellRenderTriggerTable';
import ProEditableCellTable from './ProEditableCellTable';
import ProEditableCellUseKeepEditTable from './ProEditableCellUseKeepEditTable';
import ProEditableRowTable from './ProEditableRowTable';
import ProEditableTable from './ProEditableTable';
import ProRowDragSortEditableCellTable from './ProRowDragSortEditableCellTable';
import ProRowDragSortEditableRowTable from './ProRowDragSortEditableRowTable';
import ProRowDragSortEditableTable from './ProRowDragSortEditableTable';
import ProRowDragSortTable from './ProRowDragSortTable';
import ProTable from './ProTable';
import ColumnResizableTable from './columnResizeTable';
import ColumnSettingTable from './columnSettingTable';
import FewTable from './fewTable';
import TableSearchBetweenTable from './renderSearchBetweenTable';
import RowSelectedContinuous from './rowSelectedContinuous';
import RowSelectedNormal from './rowSelectedNormal';
import Table from './table';
import TableDensitySetting from './tableDensitySetting';

export default {
  components: {
    Table,
    FewTable,
    RowSelectedNormal,
    RowSelectedContinuous,
    ColumnResizableTable,
    ColumnSettingTable,
    TableDensitySetting,
    TableSearchBetweenTable,
    ProEditableCellTable,
    ProEditableRowTable,
    ProEditableTable,
    ProEditableCellRenderTriggerTable,
    ProEditableCellUseKeepEditTable,
    ProRowDragSortEditableCellTable,
    ProRowDragSortEditableRowTable,
    ProRowDragSortEditableTable,
    ProRowDragSortTable,
    ProTable,
  },
  data() {
    return {
      pagination1: false,
      pagination2: false,
      pagination3: false,
      pagination4: false,
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <Table :isShowExpandSearch="true" :defaultExpandSearchCollapse="false" />
        </template>
            `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '表格体可以滚动',
          cardProps: {
            description: {
              title: '表格体可以滚动',
              info: '表格体可以滚动',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <div style="display: flex; height: 400px">
            <Table
              :wrapStyle="'height: 100%;'"
              :isShowExpandSearch="true"
              :defaultExpandSearchCollapse="false"
              :autoFixed="true"
            />
          </div>
        </template>
            `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '固定列头',
          cardProps: {
            description: {
              title: '固定列头',
              info: '固定列头',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <div style="display: flex; height: 500px">
            <Table
              :wrapStyle="'height: 100%;'"
              :isShowExpandSearch="true"
              :defaultExpandSearchCollapse="false"
              :fixedHeaderAutoTable="true"
            />
          </div>
        </template>
            `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: '列表两端的渲染',
          cardProps: {
            description: {
              title: '列表两端的渲染',
              info: '列表两端的渲染',
            },
          },
          type: 'PlayGround',
          codeText: `
        <div style="display: flex; height: 800px">
          <Table
            :wrapStyle="'height: 100%'"
            :isShowExpandSearch="true"
            :defaultExpandSearchCollapse="false"
            :fixedHeaderAutoTable="true"
            :fixedTableSpaceBetween="true"
          >
            <template v-slot:tableHeader>
              <div :class="$style.Header">
                <h3>查询表格</h3>
                <div>
                  <a-button type="primary">新建</a-button>
                </div>
              </div>
            </template>
            <template v-slot:tableFooter>
              <div :class="$style.Footer">renderTableFooter</div>
            </template>
          </Table>
        </div>
            `,
          childrenSlot: 'p4',
        },
        {
          id: 'p5',
          name: '分页始终居底',
          cardProps: {
            description: {
              title: '分页始终居底',
              info: '分页始终居底',
            },
          },
          type: 'PlayGroundTab',
          active: 'fewTable.tsx',
          config: [
            {
              title: 'fewTable.tsx',
              key: 'fewTable.tsx',
              lang: 'javascript',
              codeText: `
        import Table from './table';
        import { oneFew } from './mock';
        import { Ajax } from '@baifendian/adherev';

        const request = new Ajax('');

        export default {
          mixins: [Table],
          methods: {
            fetchDataExecute(searchParams) {
              this.loading = true;

              return request
                .get({
                  mock: true,
                  path: oneFew,
                })
                .then((result) => {
                  this.dataSource = {
                    total: result.total,
                    list: result.list,
                  };

                  this.loading = false;
                });
            },
          },
        };
              `,
            },
            {
              title: 'index.vue',
              key: 'index.vue',
              codeText: `
        <template>
          <div style="display: flex; height: 700px;">
            <FewTable
              :wrapStyle="'height: 100%'"
              :isShowExpandSearch="true"
              :defaultExpandSearchCollapse="false"
              :fixedHeaderAutoTable="true"
              :fixedTableSpaceBetween="true"
            />
          </div>
        </template>
        <script>
          import FewTable from './fewTable';

          export default {
            components: {
              FewTable
            }
          }
        <\/script>
                `,
            },
          ],
          childrenSlot: 'p5',
        },
        {
          id: 'p6',
          name: 'table.tsx',
          cardProps: {
            description: {
              title: 'table.tsx',
              info: 'table.tsx',
            },
          },
          type: 'PlayGround',
          lang: 'javascript',
          codeText: `
  import { DatePicker, Input, InputNumber, Select } from 'ant-design-vue';
  import moment from 'moment';

  import { Ajax, Resource, SearchTable, TableGridLayout } from '@baifendian/adherev';

  const request = new Ajax('');

  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const { Label, Value } = TableGridLayout;
  const {
    SearchTableImplement,
  } = SearchTable;

  const SearchTableImplementMixins = SearchTableImplement();

  export default {
    mixins: [SearchTableImplementMixins],
    data() {
      return {
        loading: false,
        dataSource: {
          total: 0,
          list: [],
        },
      };
    },
    props: {
      pagination: {
        type: Boolean,
        default: true,
      },
    },
    watch: {
      pagination(oldValue, newValue) {
        if (oldValue !== newValue) {
          this.scrollY = 0;
        }
      },
    },
    methods: {
      getParams() {
        return {
          name: '',
          sex: '',
          startTime: null,
          endTime: null,
          deptCode: '',
          homeTown: '',
          width: '',
          height: '',
        };
      },
      getFetchDataParams() {
        const { startTime, endTime } = this.searchParams;

        return {
          startTime: startTime
            ? startTime.format(Resource.Dict.value.ResourceMomentFormat15.value())
            : null,
          endTime: endTime
            ? endTime.format(Resource.Dict.value.ResourceMomentFormat15.value())
            : null,
        };
      },
      getData() {
        return this.dataSource.list;
      },
      getTotal() {
        return this.dataSource.total;
      },
      getColumns() {
        return [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: 200,
          },
          {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            align: 'center',
            width: 200,
            scopedSlots: { customRender: 'sex' },
          },
          {
            title: '籍贯',
            dataIndex: 'homeTown',
            key: 'homeTown',
            align: 'center',
            width: 200,
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
          },
          {
            title: '所在部门',
            dataIndex: 'deptName',
            key: 'deptName',
            align: 'center',
            width: 200,
          },
          {
            title: '身高',
            dataIndex: 'height',
            key: 'height',
            align: 'center',
            sorter: true,
            sortOrder: this.sortOrder('height'),
            width: 300,
          },
          {
            title: '体重',
            dataIndex: 'width',
            key: 'width',
            align: 'center',
            sorter: true,
            sortOrder: this.sortOrder('width'),
            width: 300,
          },
        ];
      },
      getScopedSlots() {
        return {
          sex: (text) => {
            return Resource.Dict.value.ResourceNormalSexMap.value.get(text).label;
          },
          birthday: (text) => {
            return text
              ? moment(text).format(Resource.Dict.value.ResourceMomentFormat10.value())
              : '';
          },
        };
      },
      renderSearchForm(h) {
        return (
          <TableGridLayout
            density="middle"
            data={[
              {
                name: 'g1',
                width: '100%',
                columnCount: 3,
                colgroup: [, 'auto', , 'auto', , 'auto'],
                data: [
                  {
                    key: 'UserName',
                    label: <Label>姓名：</Label>,
                    value: (
                      <Value>
                        <Input
                          style="width: 90%"
                          placeholder="姓名"
                          value={this.name}
                          onChange={(e) => {
                            this.name = e.target.value.trim();
                          }}
                        />
                      </Value>
                    ),
                  },
                  {
                    key: 'sex',
                    label: <Label>性别：</Label>,
                    value: (
                      <Value>
                        <Select
                          style="width: 90%"
                          value={this.sex}
                          getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                          onChange={(v) => {
                            this.sex = v;
                          }}
                        >
                          {Resource.Dict.value.ResourceNormalSex.value.map((t) => (
                            <Option key={t.value} value={t.value}>
                              {t.label}
                            </Option>
                          ))}
                        </Select>
                      </Value>
                    ),
                  },
                  {
                    key: 'birthday',
                    label: <Label>出生年月：</Label>,
                    value: (
                      <Value>
                        <RangePicker
                          style="width: 90%"
                          value={[this.startTime, this.endTime]}
                          getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                          onChange={(moments) => {
                            this.startTime = moments.length ? moments[0] : null;

                            this.endTime = moments.length ? moments[1] : null;
                          }}
                          getCalendarContainer={(el) => el.parentElement}
                        />
                      </Value>
                    ),
                  },
                  {
                    key: 'homeTown',
                    label: <Label>籍贯：</Label>,
                    value: (
                      <Value>
                        <Input
                          style="width: 90%"
                          placeholder="籍贯"
                          value={this.homeTown}
                          onChange={(e) => {
                            this.homeTown = e.target.value.trim();
                          }}
                        />
                      </Value>
                    ),
                  },
                  {
                    key: 'height',
                    label: <Label>身高：</Label>,
                    value: (
                      <Value>
                        <InputNumber
                          style="width: 90%"
                          placeholder="身高"
                          value={this.height}
                          onChange={(v) => {
                            this.height = v;
                          }}
                        />
                      </Value>
                    ),
                  },
                  {
                    key: 'width',
                    label: <Label>体重：</Label>,
                    value: (
                      <Value>
                        <InputNumber
                          style="width: 90%"
                          placeholder="体重"
                          value={this.width}
                          onChange={(v) => {
                            this.width = v;
                          }}
                        />
                      </Value>
                    ),
                  },
                  {
                    key: 'deptCode',
                    label: <Label>所在部门：</Label>,
                    value: (
                      <Value>
                        <Select
                          style="width: 90%"
                          value={this.deptCode}
                          onChange={(v) => {
                            this.deptCode = v;
                          }}
                          getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                        >
                          <Option value="">全部</Option>

                          <Option value="0">产品部</Option>

                          <Option value="1">开发部</Option>

                          <Option value="2">工程部</Option>
                        </Select>
                      </Value>
                    ),
                  },
                ],
              },
            ]}
          />
        );
      },
      renderSearchFooterItems() {
        return null;
      },
      showLoading() {
        return this.loading;
      },
      getOrderFieldValue() {
        return 'height';
      },
      fetchDataExecute(searchParams) {
        this.loading = true;

        return (
          request
            // @ts-ignore
            .get({
              mock: true,
              // @ts-ignore
              path: require('./mock.js').default,
            })
            .then((result: any) => {
              this.dataSource = {
                total: result.total,
                list: result.list,
              };

              this.loading = false;
            })
        );
      },
      getPagination() {
        const { pagination } = this;

        if (pagination) {
          return this.$getPaginationSearchTable();
        }

        return false;
      },
    },
  };

              `,
        },
        {
          id: 'p7',
          name: '标准的RowSelected',
          cardProps: {
            description: {
              title: '标准的RowSelected',
              info: '标准的RowSelected',
            },
          },
          type: 'PlayGround',
          codeText: `
        import Table from './table';
        import { SearchTable } from '@baifendian/adherev';

        export default {
          mixins: [Table],
          methods: {
            getRowSelectionMode() {
              return SearchTable.ROW_SELECTION_NORMAL_MODE;
            },
          },
        };
            `,
          childrenSlot: 'p7',
        },
        {
          id: 'p8',
          name: '可以跨页选择的RowSelected',
          cardProps: {
            description: {
              title: '可以跨页选择的RowSelected',
              info: '可以跨页选择的RowSelected',
            },
          },
          type: 'PlayGround',
          codeText: `
        import Table from './table';
        import { SearchTable } from '@baifendian/adherev';

        export default {
          mixins: [Table],
          methods: {
            getRowSelectionMode() {
              return SearchTable.ROW_SELECTION_CONTINUOUS_MODE;
            },
          },
        };
            `,
          childrenSlot: 'p8',
        },
        {
          id: 'p9',
          name: '可以拖动的列',
          cardProps: {
            description: {
              title: '可以拖动的列',
              info: '可以拖动的列',
            },
          },
          type: 'PlayGround',
          codeText: `
  import Table from './table';

  <div style="display: flex; height: 700px;">
    <ColumnResizableTable
      :wrapStyle="'height: 100%'"
      :isShowExpandSearch="true"
      :defaultExpandSearchCollapse="false"
      :fixedHeaderAutoTable="true"
    />
  </div>

  export default {
    mixins: [Table],
    methods: {
      getColumns() {
        return [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: 200,
          },
          {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            align: 'center',
            width: 200,
            scopedSlots: { customRender: 'sex' },
          },
          {
            title: '籍贯',
            dataIndex: 'homeTown',
            key: 'homeTown',
            align: 'center',
            width: 200,
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
          },
          {
            title: '所在部门',
            dataIndex: 'deptName',
            key: 'deptName',
            align: 'center',
            width: 200,
          },
          {
            title: '身高',
            dataIndex: 'height',
            key: 'height',
            align: 'center',
            sorter: true,
            sortOrder: this.sortOrder('height'),
            width: 300,
          },
          {
            title: '体重',
            dataIndex: 'width',
            key: 'width',
            align: 'center',
            sorter: true,
            sortOrder: this.sortOrder('width'),
            width: 300,
          },
        ].map((column) => ({
          ...column,
          resizable: true,
        }));
      },
    },
  };
          `,
          childrenSlot: 'p9',
        },
        {
          id: 'p10',
          name: '列设置',
          cardProps: {
            description: {
              title: '列设置',
              info: '列设置',
            },
          },
          type: 'PlayGround',
          codeText: `
  import Table from './table';

  <div style="display: flex; height: 700px;">
    <ColumnSettingTable
      :wrapStyle="'height: 100%'"
      :isShowExpandSearch="true"
      :defaultExpandSearchCollapse="false"
    >
      <template v-slot:tableHeader>
        <div :class="$style.Header">
          <h3>查询表格</h3>
          <div>
            <adv-searchtable-column-setting />
          </div>
        </div>
      </template>
    </ColumnSettingTable>
  </div>

  export default {
    mixins: [Table],
  };

          `,
          childrenSlot: 'p10',
        },
        {
          id: 'p11',
          name: '表格密度设置',
          cardProps: {
            description: {
              title: '表格密度设置',
              info: '表格密度设置',
            },
          },
          type: 'PlayGround',
          codeText: `
  import Table from './table';

  <div style="display: flex; height: 700px;">
    <TableDensitySetting
      :wrapStyle="'height: 100%'"
      :isShowExpandSearch="true"
      :defaultExpandSearchCollapse="false"
    >
      <template v-slot:tableHeader>
        <div :class="$style.Header">
          <h3>查询表格</h3>
          <div>
            <adv-searchtable-tabledensity />
          </div>
        </div>
      </template>
    </TableDensitySetting>
  </div>

  export default {
    mixins: [Table],
  };
          `,
          childrenSlot: 'p11',
        },
        {
          id: 'p12',
          name: '查询面板两端的渲染',
          cardProps: {
            description: {
              title: '查询面板两端的渲染',
              info: '查询面板两端的渲染',
            },
          },
          type: 'PlayGround',
          codeText: `
  import TableSearchBetweenTable from './renderSearchBetweenTable';

  <TableSearchBetweenTable
    :wrapStyle="'height: 100%'"
    :isShowExpandSearch="true"
    :defaultExpandSearchCollapse="false"
  >
    <template v-slot:searchFormBefore="context">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-statistic title="Active Users" :value="112893" />
        </a-col>
        <a-col :span="12">
          <a-statistic title="Account Balance (CNY)" :value="112893" :precision="2" />
          <a-button style="margin-top: 16px" type="primary">Recharge</a-button>
        </a-col>
        <a-col :span="12">
          <a-statistic title="Active Users" value="112893" :loading="true" />
        </a-col>
      </a-row>
    </template>

    <template v-slot:searchFormAfter="context">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-statistic title="Active Users" :value="112893" />
        </a-col>
        <a-col span="{12}">
          <a-statistic title="Account Balance (CNY)" :value="112893" :precision="2" />
          <a-button style="margin-top: 16px" type="primary">Recharge</a-button>
        </a-col>
        <a-col :span="{12}">
          <a-statistic title="Active Users" :value="112893" :loading="true" />
        </a-col>
      </a-row>
    </template>
  </TableSearchBetweenTable>

  export default {
    mixins: [Table],
  };
          `,
          childrenSlot: 'p12',
        },
        {
          id: 'p13',
          name: 'ProSearchTable',
          cardProps: {
            description: {
              title: 'ProSearchTable',
              info: 'ProSearchTable',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProTable />
            </div>
          </template>

          <script>
            import ProTable from './ProTable';

            export default {
                components: {
                    ProTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p13',
        },
        {
          id: 'p14',
          name: '可编辑的单元格',
          cardProps: {
            description: {
              title: '可编辑的单元格',
              info: '可编辑的单元格',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProEditableCellTable />
            </div>
          </template>

          <script>
            import ProEditableCellTable from './ProEditableCellTable';

            export default {
                components: {
                    ProEditableCellTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p14',
        },
        {
          id: 'p15',
          name: '可编辑的行',
          cardProps: {
            description: {
              title: '可编辑的行',
              info: '可编辑的行',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProEditableRowTable />
            </div>
          </template>

          <script>
            import ProEditableRowTable from './ProEditableRowTable';

            export default {
                components: {
                    ProEditableRowTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p15',
        },
        {
          id: 'p16',
          name: '可编辑的表格',
          cardProps: {
            description: {
              title: '可编辑的表格',
              info: '可编辑的表格',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProEditableTable />
            </div>
          </template>

          <script>
            import ProEditableTable from './ProEditableTable';

            export default {
                components: {
                    ProEditableTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p16',
        },
        {
          id: 'p17',
          name: '始终处于编辑状态的可编辑单元格',
          cardProps: {
            description: {
              title: '始终处于编辑状态的可编辑单元格',
              info: '始终处于编辑状态的可编辑单元格',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProEditableCellUseKeepEditTable />
            </div>
          </template>

          <script>
            import ProEditableCellUseKeepEditTable from './ProEditableCellUseKeepEditTable';

            export default {
                components: {
                    ProEditableCellUseKeepEditTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p17',
        },
        {
          id: 'p18',
          name: '可编辑的表格自定义trigger',
          cardProps: {
            description: {
              title: '可编辑的表格自定义trigger',
              info: '可编辑的表格自定义trigger',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProEditableCellRenderTriggerTable />
            </div>
          </template>

          <script>
            import ProEditableCellRenderTriggerTable from './ProEditableCellRenderTriggerTable';

            export default {
                components: {
                    ProEditableCellRenderTriggerTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p18',
        },
        {
          id: 'p19',
          name: '拖拽排序',
          cardProps: {
            description: {
              title: '拖拽排序',
              info: '拖拽排序',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProRowDragSortTable />
            </div>
          </template>

          <script>
            import ProRowDragSortTable from './ProRowDragSortTable';

            export default {
                components: {
                    ProRowDragSortTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p19',
        },
        {
          id: 'p20',
          name: '编辑单元格+拖拽',
          cardProps: {
            description: {
              title: '编辑单元格+拖拽',
              info: '编辑单元格+拖拽',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProRowDragSortEditableTable />
            </div>
          </template>

          <script>
            import ProRowDragSortEditableTable from './ProRowDragSortEditableTable';

            export default {
                components: {
                    ProRowDragSortEditableTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p20',
        },
        {
          id: 'p21',
          name: '编辑行+拖拽',
          cardProps: {
            description: {
              title: '编辑行+拖拽',
              info: '编辑行+拖拽',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProRowDragSortEditableRowTable />
            </div>
          </template>

          <script>
            import ProRowDragSortEditableRowTable from './ProRowDragSortEditableRowTable';

            export default {
                components: {
                    ProRowDragSortEditableRowTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p21',
        },
        {
          id: 'p22',
          name: '编辑表格+拖拽',
          cardProps: {
            description: {
              title: '编辑表格+拖拽',
              info: '编辑表格+拖拽',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <div style="display: flex; height: 700px">
              <ProRowDragSortEditableRowTable />
            </div>
          </template>

          <script>
            import ProRowDragSortEditableRowTable from './ProRowDragSortEditableRowTable';

            export default {
                components: {
                    ProRowDragSortEditableRowTable
                }
            }
          <\/script>
          `,
          childrenSlot: 'p22',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '重写的方法',
          data: [
            {
              name: 'isShowNumber',
              desc: '表格是否显示序号',
              modifier: 'public',
              params: [],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'getTableNumberColumnWidth',
              desc: '表格序号列的宽度',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '80',
            },
            {
              name: 'getNumberGeneratorRule',
              desc: '获取符号列的生成规则',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc:
                'NUMBER_GENERATOR_RULE_ALONE(单独模式),NUMBER_GENERATOR_RULE_CONTINUITY(连续模式)',
            },
            {
              name: 'renderTableNumberColumn',
              desc: '渲染序号列',
              modifier: 'public',
              params: [
                {
                  name: 'number',
                  desc: '',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'params',
                  desc: '',
                  type: '{ record: object; index: number }',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'React.ReactElement',
              returnDesc: '',
            },
            {
              name: 'renderTableHeader',
              desc: '渲染表格的头',
              modifier: 'public',
              params: [],
              returnType: 'React.ReactElement | null',
              returnDesc: '',
            },
            {
              name: 'renderTableFooter',
              desc: '渲染表格的脚',
              modifier: 'public',
              params: [],
              returnType: 'React.ReactElement | null',
              returnDesc: '',
            },
            {
              name: 'getRowKey',
              desc: '获取表格的主键属性',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getData',
              desc: '获取表格数据',
              modifier: 'public',
              params: [],
              returnType: 'Array<Object>',
              returnDesc: '',
            },
            {
              name: 'getColumns',
              desc: '获取表格列的信息',
              modifier: 'public',
              params: [],
              returnType: 'Array<object>',
              returnDesc: '',
            },
            {
              name: 'getRowSelection',
              desc: '获取表格行选择对象',
              modifier: 'public',
              params: [],
              returnType: 'TableRowSelection<object>',
              returnDesc: '',
            },
            {
              name: 'renderSearchForm',
              desc: '渲染查询的UI',
              modifier: 'public',
              params: [],
              returnType: 'React.ReactElement | null',
              returnDesc: '',
            },
            {
              name: 'renderTableHeader',
              desc: '渲染表格的头',
              modifier: 'public',
              params: [],
              returnType: 'React.ReactElement | null',
              returnDesc: '',
            },
            {
              name: 'renderTableFooter',
              desc: '渲染表格的脚',
              modifier: 'public',
              params: [],
              returnType: 'React.ReactElement | null',
              returnDesc: '',
            },
            {
              name: 'renderTableNumberColumn',
              desc: '渲染序号列',
              modifier: 'public',
              params: [
                {
                  name: 'number',
                  desc: '',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'React.ReactElement',
              returnDesc: '',
            },
            {
              name: 'getTotal',
              desc: '获取表格数据的总数',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
            {
              name: 'getOrderFieldProp',
              desc: '获取表格的排序字段',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getOrderProp',
              desc: '获取表格的排序属性',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'onSubTableChange',
              desc: '获取表格change句柄',
              modifier: 'public',
              params: [
                {
                  name: 'pagination',
                  desc: '',
                  type: 'TablePaginationConfig',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'filters',
                  desc: '',
                  type: 'Record<string, FilterValue | null>',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'sorter',
                  desc: '',
                  type: 'SorterResult<object> | SorterResult<object>[]',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'extra',
                  desc: '',
                  type: 'TableCurrentDataSource<object>',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'clear',
              desc: '清除操作',
              modifier: 'public',
              params: [],
              returnType: 'Promise<any>',
              returnDesc: '',
            },
            {
              name: 'renderSearchFooterItems',
              desc: '渲染SearchFooter的按钮组',
              modifier: 'public',
              params: [],
              returnType: 'Array<React.ReactElement> | null',
              returnDesc: '',
            },
            {
              name: 'onSearch',
              desc: '进行查询',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'searchtableimplement重写的方法',
          data: [
            {
              name: 'getFetchListPropName',
              desc: '获取调用列表接口的函数名',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getFetchListPropNameToFirstUpper',
              desc: '获取调用列表接口的函数名首字母大写',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'onSelectChange',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'property',
                  desc: '',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'value',
                  desc: '',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'onInputChange',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'property',
                  desc: '',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'e',
                  desc: '',
                  type: 'object',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'onDateTimeRangeChange',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'propertys',
                  desc: '',
                  type: 'Array<string>',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'moments',
                  desc: '',
                  type: 'Array<moment>',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'getParams',
              desc: '获取查询参数对象',
              modifier: 'public',
              params: [],
              returnType: 'Object',
              returnDesc: '',
            },
            {
              name: 'getServiceName',
              desc: '获取接口服务的model名称',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getFetchDataParams',
              desc: '获取调用数据接口的参数',
              modifier: 'public',
              params: [],
              returnType: 'object',
              returnDesc: '',
            },
            {
              name: 'isShowNumber',
              desc: '是否线上序号列',
              modifier: 'public',
              params: [],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'getNumberGeneratorRule',
              desc: '表格序号列的生成规则',
              modifier: 'public',
              params: [],
              returnType: 'Symbol',
              returnDesc: '',
            },
            {
              name: 'getTableNumberColumnWidth',
              desc: '表格序号列的宽度',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
            {
              name: 'getRowKey',
              desc: '数据的主键',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getData',
              desc: 'Table的数据(Table的dataSource字段)',
              modifier: 'public',
              params: [],
              returnType: 'Array<object>',
              returnDesc: '',
            },
            {
              name: 'getDataKey',
              desc: '获取数据的key',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getColumns',
              desc: 'Table的列',
              modifier: 'public',
              params: [],
              returnType: 'Array<ColumnType<object>>',
              returnDesc: '',
            },
            {
              name: 'getRowSelection',
              desc: '获取表格行选择对象',
              modifier: 'public',
              params: [],
              returnType: 'TableRowSelection<object>',
              returnDesc: '',
            },
            {
              name: 'renderSearchForm',
              desc: '渲染Table查询的表单',
              modifier: 'public',
              params: [],
              returnType: 'React.ReactElement | null',
              returnDesc: '',
            },
            {
              name: 'renderInner',
              desc: '渲染主体',
              modifier: 'public',
              params: [],
              returnType: 'React.ReactElement | null',
              returnDesc: '',
            },
            {
              name: 'getTotal',
              desc: 'Table数据的总条数',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
            {
              name: 'getTotalKey',
              desc: '获取total的key',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getOrderFieldProp',
              desc: '获取排序字段',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getOrderFieldValue',
              desc: '获取默认排序字段的值',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getOrderProp',
              desc: '获取排序方式',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'getOrderPropValue',
              desc: '获取默认排序方式',
              modifier: 'public',
              params: [],
              returnType: "'descend' | 'ascend'",
              returnDesc: '',
            },
            {
              name: 'clear',
              desc: '清空查询条件',
              modifier: 'public',
              params: [],
              returnType: 'Promise<any>',
              returnDesc: '',
            },
            {
              name: 'renderSearchFooterItems',
              desc: '渲染表格的工具栏',
              modifier: 'public',
              params: [],
              returnType: 'Array<any>',
              returnDesc: '',
            },
            {
              name: 'showLoading',
              desc: '是否显示遮罩',
              modifier: 'public',
              params: [],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'fetchData',
              desc: '加载数据',
              modifier: 'public',
              params: [],
              returnType: 'Promise<any>',
              returnDesc: '',
            },
            {
              name: 'fetchDataExecute',
              desc: '真正的执行获取列表数据的接口',
              modifier: 'public',
              params: [
                {
                  name: 'searchParams',
                  desc: '',
                  type: 'object',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Promise<any>',
              returnDesc: '',
            },
            {
              name: 'onSearch',
              desc: '点击查询',
              modifier: 'public',
              params: [],
              returnType: 'Promise<any>',
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'Table',
          data: [
            {
              params: 'className',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加样式',
              type: 'object',
              defaultVal: '{}',
            },
            {
              params: 'tableClassName',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'tableStyle',
              desc: '附加样式',
              type: 'object',
              defaultVal: '{}',
            },
            {
              params: 'searchClassName',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'searchStyle',
              desc: '附加样式',
              type: 'object',
              defaultVal: '{}',
            },
            {
              params: 'reset',
              desc: '是否重置',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'firstLoading',
              desc: '是否是第一次加载',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'antdTableProps',
              desc: 'Table的antd配置',
              type: 'object',
              defaultVal: '{}',
            },
            {
              params: 'isShowExpandSearch',
              desc: '是否有展开和收缩的功能',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'defaultExpandSearchCollapse',
              desc: '展开和收缩的默认状态',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'fitSearch',
              desc: '撑开search',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'fitTable',
              desc: '撑开表格',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'autoFixed',
              desc: '是否是查询固定，表格自适应',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'fixedHeaderAutoTable',
              desc: '锁定列头，表格滚动',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'fixedTableSpaceBetween',
              desc: '两端固定(表格的头始终在上方，分页始终在下方)',
              type: 'boolean',
              defaultVal: 'false',
            },
          ],
        },
        {
          border: true,
          title: 'TableImplement',
          data: [
            {
              params: 'getTableWrapperInstance',
              desc: '',
              type: 'Function',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'SearchForm',
          data: [
            {
              params: 'className',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加样式',
              type: 'object',
              defaultVal: '{}',
            },
          ],
        },
        {
          border: true,
          title: 'SearchFormRow',
          data: [
            {
              params: 'className',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加样式',
              type: 'object',
              defaultVal: '{}',
            },
          ],
        },
        {
          border: true,
          title: 'SearchFormLabel',
          data: [
            {
              params: 'className',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加样式',
              type: 'object',
              defaultVal: '{}',
            },
          ],
        },
        {
          border: true,
          title: 'SearchFormValue',
          data: [
            {
              params: 'className',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加样式',
              type: 'object',
              defaultVal: '{}',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>

<style lang="less" module>
.Header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fff;
}

.Footer {
  padding: 0 20px 20px 20px;
  font-size: 16px;
  text-align: center;
  background-color: #fff;
}
</style>
