import { Button, Icon, Input, InputNumber, Rate, Slider, Switch } from 'ant-design-vue';
import merge from 'lodash.merge';
import moment from 'moment/moment';
import omit from 'omit.js';
import qs from 'qs';
import { VNode } from 'vue';

import AntdFormItem from '@baifendian/adherev-ui-antdformitem';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import TableGridLayout from '@baifendian/adherev-ui-tablegridlayout';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';
import Validator from '@baifendian/adherev-util-validator';

import AdvancedSearchPanel from './Extension/AdvancedSearchPanel';
import { selectorPrefix } from './SearchTable';
import { AdvancedSearchPanelGroupData, ColumnSearchConfig } from './types';

const {
  _util: { extend },
} = Util;

const {
  FormItemGeneratorToDict,
  AntFormItemNormalize: {
    DatePicker,
    InputNumberDecimal1,
    InputNumberDecimal2,
    InputNumberInteger,
    RangePicker,
    TimePicker,
  },
} = AntdFormItem;
const { renderGridSearchFormGroup, Label, Value } = TableGridLayout;

const _selectorPrefix = `${selectorPrefix}-protable`;

export default ({ className, superClass }, searchAndPaginParamsMemo) =>
  extend({
    className,
    mixins: [superClass],
    props: {
      openSearchParamsMemory: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        $pathname: typeof window !== 'undefined' ? this.getPathName() : '',
        // 是否有高级搜索面板
        $hasAdvancedSearchPanel: false,
        // 高级搜索设置
        $advancedSearchConfig: {
          // 显示少行 'auto' | number
          // auto - 为自动
          // number - 指定行数 超出行会在高级筛选中显示
          rowCount: 'auto',
          // 剩余的条件的显示方式 'all' | 'remaining'
          // all - 全部显示
          // remaining - 显示剩余
          showStrategy: 'remaining',
          // 渲染高级查询面板的标题
          // renderTitleLabel: null,
          // // 渲染高级查询面板的Collapse
          // renderCollapse: null,
          // // 渲染高级查询面板显示的按钮
          // renderSearchButton: null,
          // 高级查询面板查询按钮的插入位置 (defaultItems) => {}
          insertSearchButton: null,
          // 高级搜索
          advancedSearch: {
            // 外围样式
            className: '',
            // 外围style
            style: {},
            // 宽度
            width: '60%',
            // 是否有遮罩
            mask: true,
            // 层级
            zIndex: 1000,
            // 过度时间
            time: 300,
            // 方向
            direction: 'right',
            // 默认不展开
            collapse: true,
            onBeforeShow: () => {},
            onBeforeClose: () => {},
            onAfterShow: () => {},
            onAfterClose: () => {
              this.advancedSearchPanelCollapse = false;
            },
            getPopupContainer: () => document.body,
          },
        },
        // 高级搜索面板是否显示
        advancedSearchPanelCollapse: false,
        search: {},
        searchParams: {},
        page: 1,
        limit: 10,
      };
    },
    created() {
      // 获取浏览器地址栏上默认的searchQuery和分页参数
      let defaultSearchAndPaginParams = {
        search: {},
        page: 1,
        limit: this.getLimit() || 10,
      };

      if (
        !('openSearchParamsMemory' in this) ||
        ('openSearchParamsMemory' in this && this.openSearchParamsMemory)
      ) {
        defaultSearchAndPaginParams = this.initSearchAndPaginParams();
      }

      for (const p in defaultSearchAndPaginParams.search)
        this[p] = defaultSearchAndPaginParams.search[p];
      this.page = defaultSearchAndPaginParams.page;
      this.limit = defaultSearchAndPaginParams.limit;

      this.searchParams = {
        ...this.searchParams,
        ...defaultSearchAndPaginParams.search,
      };

      const dataState = this.getDateState(omit(this.$data, ['searchParams']));
      for (const p in dataState) this[p] = dataState[p];

      this.searchParams = {
        ...this.searchParams,
        ...this.getDateState(this.searchParams),
      };

      // 是否有高级搜索面板
      this.$data.$hasAdvancedSearchPanel = false;

      // 高级搜索设置
      // this.$data.$advancedSearchConfig = null;
    },
    beforeDestroy() {
      if (
        !('openSearchParamsMemory' in this) ||
        ('openSearchParamsMemory' in this && this.openSearchParamsMemory)
      ) {
        // 卸载的时候处理查询和分页参数的缓存
        this.unMountSearchAndPaginParamsDeal();
      }
    },
    methods: {
      /**
       * onSearchPanelCollapseBefore
       * @description 查询面板Collapse之前
       */
      onSearchPanelCollapseBefore() {
        if (this.$data.$hasAdvancedSearchPanel && this.expand)
          this.advancedSearchPanelCollapse = false;
      },

      /**
       * unMountSearchAndPaginParamsDeal
       * @description - 卸载的时候处理查询和分页参数的缓存
       */
      unMountSearchAndPaginParamsDeal() {
        // 查询条件
        const searchParams = this.searchParams || {};

        const pathname = this.$data.$pathname;

        const componentId = this.getComponentId();

        if (searchAndPaginParamsMemo.isEmpty()) {
          searchAndPaginParamsMemo.add(pathname, {
            [componentId]: {
              search: searchParams,
              page: this.page,
              limit: this.limit,
            },
          });
        } else {
          const item = searchAndPaginParamsMemo.findByPath(pathname); // searchAndPaginParamsMemo.find((t) => t.path === pathname);

          if (item) {
            item.components[componentId].search = searchParams;
            item.components[componentId].page = this.page;
            item.components[componentId].limit = this.limit;
          } else {
            searchAndPaginParamsMemo.add(pathname, {
              [componentId]: {
                search: searchParams,
                page: this.page,
                limit: this.limit,
              },
            });
          }
        }

        // {
        // key: adhere-ui-searchtable
        // value: [
        //   {
        //     path: 路由
        //     components: {
        //       com1: {
        //         search: {
        //           a:1,
        //           b:2,
        //           c:3,
        //         }
        //       }
        //     }
        //   }
        // ]
        // }
      },

      /**
       * initSearchAndPaginParams
       * @description - 初始化组件的查询和分页参数
       * @param queryReduce 查询参数的处理
       */
      initSearchAndPaginParams(queryReduce?: (key: string, v: any) => any) {
        const query = qs.parse(this.getSearch(), { ignoreQueryPrefix: true });

        const queryParams = {};

        Object.keys(query).forEach((key) => {
          queryParams[key] = queryReduce ? queryReduce(key, query[key]) : query[key];
        });

        if (searchAndPaginParamsMemo.isEmpty()) {
          return {
            search: { ...queryParams },
            page: 1,
            limit: this.getLimit(),
          };
        }

        const item = searchAndPaginParamsMemo.findByPath(this.$data.$pathname);

        const componentId = this.getComponentId();

        if (item && item.components[componentId]) {
          return {
            ...queryParams,
            ...item.components[componentId],
          };
        }

        return {
          search: { ...queryParams },
          page: 1,
          limit: this.getLimit(),
        };
      },

      /**
       * hasAdvancedSearchPanel
       * @description 是否开启高级搜索
       * @returns {boolean}
       */
      hasAdvancedSearch() {
        return true;
      },

      /**
       * hasNumberColumnFixed
       * @description 序号列是否固定
       * @returns {boolean}
       */
      hasNumberColumnFixed() {
        return true;
      },

      /**
       * hasOptionColumnFixed
       * @description 操作列是否固定
       * @returns {boolean}
       */
      hasOptionColumnFixed() {
        return true;
      },

      /**
       * getPathName
       * @description 不同路由模式下获取pathname的方法
       */
      getPathName() {
        return window.location.pathname;
      },

      /**
       * getSearch
       * @description 不同路由模式下获取search的方法
       */
      getSearch() {
        return window.location.search;
      },

      /**
       * getFilterDropdown
       */
      getFilterDropdownSlot() {
        return 'filterDropdown';
      },

      /**
       * getFilterIcon
       */
      getFilterIconSlot() {
        return 'filterIcon';
      },

      /**
       * getParams
       * @description 根据列设置返回查询参数
       * @default params
       */
      getParams() {
        const params = {};

        const loop = (columns) => {
          columns.reduce((params, column) => {
            const { $search, children } = column;
            const searchConfig = $search || {};
            const dataIndex = searchConfig.dataIndex || column.dataIndex;

            if (
              [this.getOptionsColumnDataIndex(), this.getLinkColumnDataIndex(), '_number'].includes(
                dataIndex,
              )
            ) {
              return params;
            }

            if (searchConfig.type === 'rangePicker') {
              if (searchConfig.startName) params[searchConfig.startName] = null;
              if (searchConfig.endName) params[searchConfig.endName] = null;
            } else if (['datePicker', 'timePicker'].includes(searchConfig.type)) {
              params[dataIndex] = null;
            } else {
              params[dataIndex] = undefined;
            }

            if (children && Array.isArray(children)) {
              loop(children);
            }

            return params;
          }, params);
        };

        loop(this.getTableColumns());

        return params;
      },

      /**
       * getDateState
       * @description 获取时间查询字段，将默认值修改为null或moment对象
       * @param state
       * @return {{}}
       */
      getDateState(state) {
        // null | null字符串 | 时间字符串
        const dateKeys = Object.keys(state).filter(
          (key) =>
            state[key] === null ||
            state[key] === 'null' ||
            Validator.isDate(state[key], {
              format: 'YYYY-MM-DD',
            }),
        );

        const dateObj = {};

        dateKeys.forEach((key) => {
          dateObj[key] = state[key] === null || state[key] === 'null' ? null : moment(state[key]);
        });

        return dateObj;
      },

      /**
       * getDataKey
       * @description - 获取数据的key
       * @protected
       */
      getDataKey() {
        return 'records';
      },

      /**
       * getTotalKey
       * @description - 获取total的key
       * @protected
       */
      getTotalKey() {
        return 'total';
      },

      /**
       * getLimit
       * @return {number}
       */
      getLimit() {
        return 10;
      },

      /**
       * getFetchDataParams
       * @description 获取列表接口查询参数
       */
      getFetchDataParams() {
        const dateSearchParams = {};

        const rangeDateKeys = Object.keys(this.searchParams).filter(
          (key) =>
            ['start', 'Start'].some((t) => key.indexOf(t) !== -1) ||
            ['end', 'End'].some((t) => key.indexOf(t) !== -1),
        );

        rangeDateKeys.forEach((key) => {
          dateSearchParams[key] = this.searchParams[key]
            ? `${this.searchParams[key].format(
                Resource.Dict.value.ResourceMomentFormat10.value(),
              )} ${
                ['start', 'Start'].some((t) => key.indexOf(t) !== -1)
                  ? '00:00:00'
                  : ['end', 'End'].some((t) => key.indexOf(t) !== -1)
                  ? '23:59:59'
                  : ''
              }`.trim()
            : null;
        });

        const dateKeys = Object.keys(this.searchParams).filter(
          (key) => !(key in dateSearchParams) && this.searchParams[key] instanceof moment,
        );

        dateKeys.forEach((key) => {
          dateSearchParams[key] = this.searchParams[key]
            ? this.searchParams[key]
                .format(Resource.Dict.value.ResourceMomentFormat10.value())
                .trim()
            : null;
        });

        return dateSearchParams;
      },

      /**
       * getColumns
       * @param columns
       * @return {*}
       */
      getColumns(columns) {
        return (columns || this.$getColumnsSearchTableImpl()).map((t) => ({
          ...t,
        }));
      },

      /**
       * getTableColumns
       * @param h
       * @param columns
       * @return {*}
       */
      getTableColumns(h) {
        // return (columns || this.$getTableColumnsSearchTable(h)).map((t) => ({
        //   ellipsis: true,
        //   ...t,
        // }));
        const columns = this.$getTableColumnsSearchTable(h);

        if (this.hasOptionColumnFixed()) {
          const options = columns.find(
            (t) => t.dataIndex === (this.getOptionsColumnDataIndex() || '_options'),
          );
          if (options && !('fixed' in options) && !options.fixed) {
            options.fixed = 'right';
          }
        }

        if (this.hasNumberColumnFixed()) {
          const number = columns.find((t) => t.dataIndex === '_number');
          if (number && !('fixed' in number) && !number.fixed) {
            number.fixed = 'left';
          }
        }

        const linkColumn = columns.find(
          (t) => t.dataIndex === (this.getLinkColumnDataIndex() || '_linkColumn'),
        );

        if (linkColumn) {
          if (!('ellipsis' in linkColumn)) {
            linkColumn.ellipsis = false;
          }

          if (!('align' in linkColumn)) {
            linkColumn.align = 'left';
          }
        }

        const res = columns
          // 处理align
          .map((t) => ({
            ...t,
            align: ![this.getLinkColumnDataIndex() || '_linkColumn'].includes(t.dataIndex)
              ? 'center'
              : 'align' in t && t.align
              ? t.align
              : 'center',
          }))
          // 处理search
          .map((_t) => {
            const loop = (t) => {
              const { $search, ...columnConfig } = t;
              const searchConfig = this.assignSearchConfig($search, columnConfig);
              const showColumnHeader = searchConfig.showColumnHeader;

              let column = {
                ...t,
              };

              const dataIndex = searchConfig.dataIndex || t.dataIndex;

              if (
                !['_number', this.getOptionsColumnDataIndex()].includes(dataIndex) &&
                showColumnHeader
              ) {
                column = {
                  ...column,
                  scopedSlots: {
                    filterDropdown: this.getFilterDropdownSlot(),
                    filterIcon: this.getFilterIconSlot(),
                  },
                };
              }

              if (t.children && Array.isArray(t.children)) {
                t.children.forEach((item, _index) => {
                  t.children[_index] = loop(item);
                });
              }

              return column;
            };

            return loop(_t);
          });

        return res;
      },

      /**
       * getOptionsColumnDataIndex
       * @description 操作列的索引名
       * @returns {string}
       */
      getOptionsColumnDataIndex() {
        return '_options';
      },

      /**
       * getLinkColumnDataIndex
       * @description 可以跳转列的索引
       * @returns {string}
       */
      getLinkColumnDataIndex() {
        return '_linkColumn';
      },

      /**
       * getPagination
       */
      getPagination() {
        return {
          ...this.$getPaginationSearchTable(),
          showTotal: (total) => {
            const start = (this.page - 1) * this.limit + 1;
            let end = this.page * this.limit;
            end = total > end ? end : total;

            return Intl.tv('当前 {page}-{pageSize}/共 {total}条', {
              page: start,
              pageSize: end,
              total,
            });
          },
        };
      },

      /**
       * getGridSearchFormGroupParams
       */
      getGridSearchFormGroupParams() {
        return [
          [
            {
              name: 'g1',
              columnCount: 3,
              colgroup: [, 'auto', , 'auto', , 'auto'],
              data: this.getGridSearchFormGroupDataByColumnConfig(),
            },
          ],
          {},
          {
            rowCount: 1,
          },
        ];
      },

      /**
       * getGridSearchFormGroupDataByColumnConfig
       * @description 通过列设置获取gridSearchFormGroup的Data数据
       * @return Array
       */
      getGridSearchFormGroupDataByColumnConfig() {
        let searchFormGroupData: {
          key: number;
          label: VNode;
          value: VNode | null;
        }[] = [];

        const loop = (columns) => {
          columns
            .filter((t) => '$search' in t && !!t.$search.visible)
            .forEach((t) => {
              const { $search, ...column } = t;

              const searchConfig = this.assignSearchConfig($search, column);
              const type = searchConfig?.type || 'input';
              const dataIndex = searchConfig.dataIndex || t.dataIndex;
              const title = $search.title || t.title;

              searchFormGroupData.push({
                key: dataIndex,
                label: <Label {...($search.labelAttrs || {})}>{title}：</Label>,
                value: ConditionalRender.conditionalRender({
                  conditional: this.hasAuthority
                    ? this.hasAuthority?.(searchConfig.authority)
                    : true,
                  match: (
                    <Value {...($search.valueAttrs || {})}>
                      {this.renderGridSearchFormGroupDataItem(type, {
                        searchConfig,
                        column,
                        dataIndex,
                      })}
                    </Value>
                  ),
                  noMatch: $search.renderNoAuthority ? (
                    <Value {...($search.valueAttrs || {})}>
                      {this.$scopedSlots?.[$search?.renderNoAuthority]?.() ||
                        $search?.renderNoAuthority?.()}
                    </Value>
                  ) : null,
                }),
              });

              if (t.children && Array.isArray(t.children)) {
                loop(t.children);
              }
            });
        };

        loop(this.getColumns(this.$getColumnsSearchTableImpl()));

        return searchFormGroupData.filter((t) => !!t.value);
      },

      /**
       * getScopedSlots
       * @description 获取ProSearchTable的ScopedSlots
       */
      getScopedSlots(h) {
        return {
          // header查询
          [this.getFilterDropdownSlot()]: ({ confirm, column }) => {
            const searchConfig = column.$search;
            const dataIndex = column.dataIndex;
            const type = searchConfig.type;

            return (
              <div class={`${_selectorPrefix}-headersearchwrap`}>
                <div class={`${_selectorPrefix}-headersearchwrap-main`}>
                  {this.renderGridSearchFormGroupDataItem(type, {
                    searchConfig,
                    column,
                    dataIndex,
                  })}
                </div>

                <div class={`${_selectorPrefix}-headersearchwrap-footer`}>
                  <Button
                    size="small"
                    onClick={() => {
                      if (type === 'rangePicker') {
                        if (searchConfig.startName) this[searchConfig.startName] = null;
                        if (searchConfig.endName) this[searchConfig.endName] = null;
                      } else {
                        this[dataIndex] = undefined;
                      }

                      this.$nextTick(() => this.onSearch().then(() => confirm()));
                    }}
                  >
                    {Intl.tv('重置')}
                  </Button>

                  <Button
                    size="small"
                    type="primary"
                    onClick={() => this.onSearch().then(() => confirm())}
                  >
                    {Intl.tv('确定')}
                  </Button>
                </div>
              </div>
            );
          },
          // header查询的图标
          [this.getFilterIconSlot()]: () => {
            return <Icon type="search" />;
          },
        };
      },

      /**
       * assignSearchConfig
       * @description assign searchConfig
       * @param searchConfig
       * @param column
       */
      assignSearchConfig(searchConfig, column) {
        const defaultSearchConfig: ColumnSearchConfig = {
          type: 'input',
          // 是否显示
          visible: true,
          // 是否显示在列头上
          showColumnHeader: true,
          // 控件的props
          props: {},
          // TableGridLayout的Label的attrs
          labelAttrs: {},
          // TableGridLayout的Value的attrs
          valueAttrs: {},
          // 权限码
          authority: [],
          // 渲染无权限的UI
          renderNoAuthority: () => null,
          // 如果有此属性，则不用column的dataIndex
          dataIndex: column.dataIndex,
          // 如果有此属性则不用column的title
          title: column.title,
          // dist渲染的组件
          dictName: '',
          // children自定义的渲染
          renderChildren: () => null,
          // 自定义组件的渲染
          render: () => null,
          // 时间区域控件
          startName: '',
          endName: '',
        };

        return {
          ...defaultSearchConfig,
          ...(searchConfig || {}),
        };
      },

      /**
       * renderSearchForm
       * 渲染Table查询的表单
       * @override
       */
      renderSearchForm(h /*columnCount, data*/) {
        return this.renderGridSearchFormGroup(
          h,
          ...this.getGridSearchFormGroupParams(/*columnCount, data*/),
        );
      },

      /***
       * renderSearchFooterItems
       * @param h
       * @param _defaultItems
       * @return {*}
       */
      renderSearchFooterItems(h, _defaultItems) {
        const defaultItems = [...(_defaultItems || [])];

        if (this.$data.$hasAdvancedSearchPanel && this.expand) {
          const SearchButtonComponent = (
            <Button
              slot="default"
              icon="filter"
              type="primary"
              onClick={() => {
                this.advancedSearchPanelCollapse = true;
              }}
            >
              {Intl.v('高级搜索')}
            </Button>
          );

          if (this.$data.$advancedSearchConfig.insertSearchButton) {
            this.$data.$advancedSearchConfig.insertSearchButton(
              defaultItems,
              SearchButtonComponent,
            );
          } else {
            const resetIndex = defaultItems.findIndex(
              (t) =>
                'tag' in t &&
                t.tag &&
                t.tag.startsWith('vue-component-') &&
                'key' in t &&
                t.key === 'reset',
            );

            if (resetIndex !== -1) defaultItems.splice(resetIndex + 1, 0, SearchButtonComponent);
          }
        }

        return this.renderSearchFooterItemsImpl(h, defaultItems).map((t) =>
          'tag' in t && t.tag && t.tag.startsWith('vue-component-') ? t : t.value,
        );
      },

      /**
       * renderSearchFooterItemsImpl
       * @param h
       * @param defaultItems
       * @return {*}
       */
      renderSearchFooterItemsImpl(h, defaultItems) {
        const tableDensitySetting = this.renderTableDensitySetting(this.$createElement);
        const columnSetting = this.renderColumnSetting(this.$createElement);

        return [
          ...defaultItems,
          {
            value: <div class={`${_selectorPrefix}-headeritem`}>{tableDensitySetting}</div>,
          },
          {
            value: <div class={`${_selectorPrefix}-headeritem`}>{columnSetting}</div>,
          },
        ];
      },

      /**
       * renderGridSearchFormGroupDataItem
       * @description 渲染GridSearchForm的查询项
       * @param type
       * @param searchConfig
       * @param column
       * @param dataIndex
       */
      renderGridSearchFormGroupDataItem(type, { searchConfig, column, dataIndex }) {
        const renderInput = ({ searchConfig, dataIndex }) => {
          return (
            <Input
              value={this[dataIndex]}
              onChange={(e) => this.onInputChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderTextArea = ({ searchConfig, dataIndex }) => {
          return (
            <Input.TextArea
              value={this[dataIndex]}
              onChange={(e) => this.onInputChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderInputNumber = ({ searchConfig, dataIndex }) => {
          return (
            <InputNumber
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderInputNumberDecimal1 = ({ searchConfig, dataIndex }) => {
          return (
            <InputNumberDecimal1
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderInputNumberDecimal2 = ({ searchConfig, dataIndex }) => {
          return (
            <InputNumberDecimal2
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderInputNumberInteger = ({ searchConfig, dataIndex }) => {
          return (
            <InputNumberInteger
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}FormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderMultiSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderCheckAllMultiSelect = ({ searchConfig, dataIndex }) => {
          const Component =
            FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllMulitFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderAutoCompleteSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}FormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderAutoCompleteSelectMulti = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderAutoCompleteSelectCheckAllMulti = ({ searchConfig, dataIndex }) => {
          const Component =
            FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllMulitFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderRadioHorizontal = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}HorizontalFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderRadioButton = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}ButtonFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderRadioSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderRadioCustom = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}CustomFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            >
              {(data) =>
                this.$scopedSlots?.[searchConfig?.renderChildren]?.(data) ||
                searchConfig?.renderChildren?.(data)
              }
            </Component>
          );
        };

        const renderCheckBoxHorizontal = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}HorizontalFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderCheckBoxCheckAllHorizontal = ({ searchConfig, dataIndex }) => {
          const Component =
            FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllHorizontalFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderCheckboxSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderCheckBoxCheckAllSelect = ({ searchConfig, dataIndex }) => {
          const Component =
            FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllSelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderCheckBoxCustom = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}CustomFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            >
              {(dataSource) =>
                this.$scopedSlots?.[searchConfig?.renderChildren]?.(dataSource) ||
                searchConfig?.renderChildren?.(dataSource)
              }
            </Component>
          );
        };
        const renderCheckBoxCheckAllCustom = ({ searchConfig, dataIndex }) => {
          const Component =
            FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllCustomFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            >
              {(dataSource) =>
                this.$scopedSlots?.[searchConfig?.renderChildren]?.(dataSource) ||
                searchConfig?.renderChildren?.(dataSource)
              }
            </Component>
          );
        };

        const renderTransferSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderTableSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderTableMultiSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitSelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderTablePagingSelect = ({ searchConfig, dataIndex }) => {
          const Component =
            FormItemGeneratorToDict[`${searchConfig.dictName}PaginationSelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderTablePagingMultiSelect = ({ searchConfig, dataIndex }) => {
          const Component =
            FormItemGeneratorToDict[`${searchConfig.dictName}PaginationMulitSelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderListSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderListMultiSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitSelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderListPagingSelect = ({ searchConfig, dataIndex }) => {
          const Component =
            FormItemGeneratorToDict[`${searchConfig.dictName}PaginationSelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderListPagingMultiSelect = ({ searchConfig, dataIndex }) => {
          const Component =
            FormItemGeneratorToDict[`${searchConfig.dictName}PaginationMulitSelectFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderTreeSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}FormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderTreeMultiSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderTreeSelectLeaf = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}LeafFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderTreeMultiSelectLeaf = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}LeafMulitFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderCascaderSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}FormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderCascaderMultiSelect = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderCascaderSelectLeaf = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}LeafFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderCascaderMultiSelectLeaf = ({ searchConfig, dataIndex }) => {
          const Component = FormItemGeneratorToDict[`${searchConfig.dictName}LeafMulitFormItem`];

          return (
            <Component
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderDatePicker = ({ searchConfig, dataIndex }) => {
          return (
            <DatePicker
              value={this[dataIndex]}
              onChange={(moment) => {
                this.setState({
                  [dataIndex]: moment ? moment : null,
                });
              }}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderTimePicker = ({ searchConfig, dataIndex }) => {
          return (
            <TimePicker
              value={this[dataIndex]}
              onChange={(moment) => {
                this.setState({
                  [dataIndex]: moment ? moment : null,
                });
              }}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderRangePicker = ({ searchConfig }) => {
          const { startName, endName } = searchConfig;

          return (
            <RangePicker
              value={[this[startName], this[endName]]}
              onChange={(moments) => {
                this.onDateTimeRangeChange([startName, endName], moments);
              }}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderSlider = ({ searchConfig, dataIndex }) => {
          return (
            <Slider
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderSliderRange = ({ searchConfig }) => {
          return (
            <Slider
              range
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderRate = ({ searchConfig }) => {
          return (
            <Rate
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };
        const renderSwitch = ({ searchConfig }) => {
          return (
            <Switch
              value={this[dataIndex]}
              onChange={(e) => this.onSelectChange(dataIndex, e)}
              {...{
                props: {
                  ...(searchConfig.props || {}),
                },
              }}
            />
          );
        };

        const renderCustom = ({ searchConfig, column, dataIndex }) => {
          return (
            this.$scopedSlots?.[searchConfig?.render]?.({ searchConfig, column, dataIndex }) ||
            searchConfig?.render?.({ searchConfig, column, dataIndex })
          );
        };

        const typeMap = new Map<string, (params: any) => VNode>([
          ['input', renderInput],
          ['textArea', renderTextArea],

          ['inputNumber', renderInputNumber],
          ['inputNumberDecimal1', renderInputNumberDecimal1],
          ['inputNumberDecimal2', renderInputNumberDecimal2],
          ['inputNumberInteger', renderInputNumberInteger],

          ['select', renderSelect],
          ['multiSelect', renderMultiSelect],
          ['checkAllMultiSelect', renderCheckAllMultiSelect],

          ['autoCompleteSelect', renderAutoCompleteSelect],
          ['autoCompleteSelectMulti', renderAutoCompleteSelectMulti],
          ['autoCompleteSelectCheckAllMulti', renderAutoCompleteSelectCheckAllMulti],

          ['radioHorizontal', renderRadioHorizontal],
          ['radioButton', renderRadioButton],
          ['radioSelect', renderRadioSelect],
          ['radioCustom', renderRadioCustom],

          ['checkBoxHorizontal', renderCheckBoxHorizontal],
          ['checkBoxCheckAllHorizontal', renderCheckBoxCheckAllHorizontal],
          ['checkboxSelect', renderCheckboxSelect],
          ['checkBoxCheckAllSelect', renderCheckBoxCheckAllSelect],
          ['checkBoxCustom', renderCheckBoxCustom],
          ['checkBoxCheckAllCustom', renderCheckBoxCheckAllCustom],

          ['transferSelect', renderTransferSelect],

          ['tableSelect', renderTableSelect],
          ['tableMultiSelect', renderTableMultiSelect],
          ['tablePagingSelect', renderTablePagingSelect],
          ['tablePagingMultiSelect', renderTablePagingMultiSelect],

          ['listSelect', renderListSelect],
          ['listMultiSelect', renderListMultiSelect],
          ['listPagingSelect', renderListPagingSelect],
          ['listPagingMultiSelect', renderListPagingMultiSelect],

          ['treeSelect', renderTreeSelect],
          ['treeMultiSelect', renderTreeMultiSelect],
          ['treeSelectLeaf', renderTreeSelectLeaf],
          ['treeMultiSelectLeaf', renderTreeMultiSelectLeaf],

          ['cascaderSelect', renderCascaderSelect],
          ['cascaderMultiSelect', renderCascaderMultiSelect],
          ['cascaderSelectLeaf', renderCascaderSelectLeaf],
          ['cascaderMultiSelectLeaf', renderCascaderMultiSelectLeaf],

          ['datePicker', renderDatePicker],
          ['timePicker', renderTimePicker],
          ['rangePicker', renderRangePicker],

          ['slider', renderSlider],
          ['sliderRange', renderSliderRange],
          ['rate', renderRate],
          ['switch', renderSwitch],

          ['custom', renderCustom],
        ]);

        return typeMap.get(type)?.({
          searchConfig,
          column,
          dataIndex,
        });
      },

      /**
       * renderGridSearchFormGroup
       * @param h
       * @param group - TableGridLayout的分组数据
       * @param props - TableGridLayout配置
       * @param advancedSearchConfig - 高级搜索条件
       * @return {JSX.Element}
       */
      renderGridSearchFormGroup(h, group, props, advancedSearchConfig) {
        const defaultProps = merge(
          {
            layout: 'horizontal',
            density: 'middle',
          },
          props || {},
        );

        // 如果用户实现了onAfterClose这个方法
        if (advancedSearchConfig?.advancedSearch?.onAfterClose) {
          const onAfterClose = advancedSearchConfig.advancedSearch.onAfterClose;

          advancedSearchConfig.advancedSearch.onAfterClose = () => {
            onAfterClose();

            this.advancedSearchPanelCollapse = false;
          };
        }

        // 配置
        this.$data.$advancedSearchConfig = merge(
          this.$data.$advancedSearchConfig,
          advancedSearchConfig || {},
        );

        // 标准的查询面板
        const StandardSearchPanel = renderGridSearchFormGroup(h, this, group, defaultProps);

        if (this.$data.$advancedSearchConfig.rowCount !== 'auto') {
          const { rowCount, detail } = TableGridLayout.getRenderDetail(
            h,
            this,
            group,
            defaultProps,
          );

          if (rowCount > this.$data.$advancedSearchConfig.rowCount) {
            // 显示的组数据
            const gData: AdvancedSearchPanelGroupData[] = [];

            // 剩余的组数据
            const remainingGData: AdvancedSearchPanelGroupData[] = [];

            // 需要的行数
            let needRowCount = this.$data.$advancedSearchConfig.rowCount;

            let _gIndex = 0;

            // needCount 5
            // g1 2
            // g2 2
            // g3 10
            while (needRowCount !== 0) {
              const groupData = group[_gIndex];
              const groupDetail = detail[_gIndex];

              if (groupDetail.rowCount <= needRowCount) {
                gData.push({ ...groupData });

                needRowCount = needRowCount - groupDetail.rowCount;
              } else {
                // 截取
                const details = groupDetail.detail.slice(0, needRowCount);

                gData.push({
                  ...groupData,
                  data: groupData.data.slice(
                    details[0].startIndex,
                    details[details.length - 1].endIndex + 1,
                  ),
                });

                remainingGData.push({
                  ...groupData,
                  data: groupData.data.slice(details[details.length - 1].endIndex + 1),
                });

                needRowCount = 0;
              }

              _gIndex = _gIndex + 1;
            }

            for (let i = _gIndex; i < group.length; i++) remainingGData.push({ ...group[i] });

            this.$data.$hasAdvancedSearchPanel = true;
            this.$data.$advancedSearchConfig.advancedSearch.collapse =
              this.advancedSearchPanelCollapse;

            return (
              <div class={`${_selectorPrefix}-gridsearchformgroupwrap`}>
                {renderGridSearchFormGroup(h, this, gData, defaultProps)}
                {/*@ts-ignore*/}
                <AdvancedSearchPanel
                  groupData={group}
                  tableGridLayoutConfig={defaultProps}
                  remainingGroupData={remainingGData}
                  advancedSearchConfig={this.$data.$advancedSearchConfig}
                  searchFn={() =>
                    new Promise<void>((resolve) => {
                      this.page = 1;

                      this.$nextTick(function () {
                        this.onSearch().then(() => resolve());
                      });
                    })
                  }
                  resetFn={() => this.onClear()}
                  collapseFn={(collapse) => {
                    this.advancedSearchPanelCollapse = collapse;
                  }}
                />
              </div>
            );
          }
        }

        this.$data.$hasAdvancedSearchPanel = false;

        return (
          <div class={`${_selectorPrefix}-gridsearchformgroupwrap`}>{StandardSearchPanel}</div>
        );
      },

      /**
       * renderOptionColumn
       * @param defaultItems
       * @return {*}
       */
      renderOptionColumn(defaultItems) {
        return defaultItems.map((t) => t.value).filter((t) => !!t);
      },
    },
  });
