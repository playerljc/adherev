import { Button, Table } from 'ant-design-vue';
import classNames from 'classnames';
import 'core-js/modules/es.array.concat.js';
import 'core-js/modules/es.array.filter.js';
import 'core-js/modules/es.array.find.js';
import 'core-js/modules/es.array.map.js';
import 'core-js/modules/es.array.sort.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.regexp.to-string.js';
import 'core-js/modules/es.string.starts-with.js';
import 'core-js/modules/es.symbol.description.js';
import 'core-js/modules/es.symbol.js';
import { __assign, __spreadArray } from 'tslib';
import {
  createVNode as _createVNode,
  isVNode as _isVNode,
  resolveDirective as _resolveDirective,
} from 'vue';
import { defineComponent } from 'vue';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Suspense from '@baifendian/adherev-ui-suspense';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Mixins from '@baifendian/adherev-util-mixins';

import ColumnResizable, {
  SearchTableResizableObserver,
  SearchTableResizableTitle,
} from './Extension/ColumnResizable';
import ColumnSetting from './Extension/ColumnSetting';
import TableDensitySetting from './Extension/TableDensitySetting';
import { TableDensity } from './types';

import 'core-js/modules/es.symbol.js';
import 'core-js/modules/es.symbol.description.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.array.map.js';
import 'core-js/modules/es.regexp.to-string.js';
import 'core-js/modules/es.array.find.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.array.filter.js';
import 'core-js/modules/es.array.concat.js';
import 'core-js/modules/es.array.sort.js';
import 'core-js/modules/es.string.starts-with.js';
import { __assign, __spreadArray } from 'tslib';
import { Button, Table } from 'ant-design-vue';
import classNames from 'classnames';
import { defineComponent } from 'vue';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import Suspense from '@baifendian/adherev-ui-suspense';
import Util from '@baifendian/adherev-util';
import Intl from '@baifendian/adherev-util-intl';
import Mixins from '@baifendian/adherev-util-mixins';
import ColumnResizable, {
  SearchTableResizableObserver,
  SearchTableResizableTitle,
} from './Extension/ColumnResizable';
import ColumnSetting from './Extension/ColumnSetting';
import TableDensitySetting from './Extension/TableDensitySetting';
import { TableDensity } from './types';
function _isSlot(e) {
  return (
    'function' == typeof e ||
    ('[object Object]' === Object.prototype.toString.call(e) && !_isVNode(e))
  );
}
var selectorPrefix = 'adherev-ui-searchtable',
  updatedEx = Mixins.updatedEx,
  watchEffect = Mixins.watchEffect,
  Fixed = FlexLayout.Fixed,
  Auto = FlexLayout.Auto,
  extend = Util._util.extend,
  NUMBER_GENERATOR_RULE_ALONE = Symbol(),
  NUMBER_GENERATOR_RULE_CONTINUITY = Symbol(),
  ROW_SELECTION_NORMAL_MODE = Symbol(),
  ROW_SELECTION_CONTINUOUS_MODE = Symbol();
export default defineComponent(
  extend({
    className: 'SearchTable',
    mixins: [Suspense, updatedEx, watchEffect],
    props: {
      className: { type: String, default: '' },
      wrapStyle: { type: String, default: '' },
      tableClassName: { type: String, default: '' },
      tableStyle: { type: String, default: '' },
      searchClassName: { type: String, default: '' },
      searchStyle: { type: String, default: '' },
      reset: { type: Boolean, default: !0 },
      antdTableProps: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isShowExpandSearch: { type: Boolean, default: !0 },
      defaultExpandSearchCollapse: { type: Boolean, default: !0 },
      fitSearch: { type: Boolean, default: !0 },
      fitTable: { type: Boolean, default: !0 },
      autoFixed: { type: Boolean, default: !0 },
      fixedHeaderAutoTable: { type: Boolean, default: !1 },
      fixedTableSpaceBetween: { type: Boolean, default: !1 },
      showColumnSetting: { type: Boolean, default: !1 },
    },
    slots: [
      'searchFormBefore',
      'searchFormAfter',
      'searchForm',
      'tableHeader',
      'tableFooter',
      'tableNumberColumn',
      'columnSetting',
      'tableDensitySetting',
      'searchFooter',
      'table',
      'inner',
      'searchTable',
    ],
    data: function () {
      return {
        page: 1,
        limit: 10,
        expand: this.defaultExpandSearchCollapse,
        scrollY: 0,
        columnSetting: [],
        tableDensity: TableDensity.DEFAULT,
        $columnResizable: new ColumnResizable(),
        $columnObserver: null,
      };
    },
    computed: {
      components: function () {
        return { header: { cell: SearchTableResizableTitle(this.getTableColumns()) } };
      },
    },
    provide: function () {
      return { getContext: this.getContext };
    },
    created: function () {
      (this.columnSetting = this.getTableColumns().map(function (e, t) {
        return __assign(__assign({}, e), { sort: t, display: !0 });
      })),
        (this.tableDensity = this.getTableDensity());
    },
    updatedEx: function (e) {
      this.$refs.tableWrapRef &&
        (this.searchTableResizableEffectLayout(), this.fixedHeaderAutoTableEffectLayout(e));
    },
    watchEffect: function () {
      this.columnSettingEffect();
    },
    beforeUnmount: function () {
      var e;
      this.fixedHeaderAutoTable &&
        null != (e = this.getScrollBodyEl()) &&
        e.removeEventListener('scroll', this.onScrollBodyScroll);
    },
    methods: {
      getContext: function () {
        return this;
      },
      searchTableResizableEffectLayout: function () {
        this.$data.$columnObserver ||
          (this.$data.$columnObserver = SearchTableResizableObserver(this));
      },
      fixedHeaderAutoTableEffectLayout: function (e) {
        var t = this,
          n = t.$refs,
          o = t.scrollY,
          r = t.expand;
        t.fixedHeaderAutoTable &&
          (t = this.getData()) &&
          t.length &&
          ((0 === e.scrollY && 0 === o) || e.scrollY !== o || e.expand !== r) &&
          ((t = n.tableWrapRef),
          (o = this.getScrollBodyEl()) &&
            (o.removeEventListener('scroll', this.onScrollBodyScroll),
            o.addEventListener('scroll', this.onScrollBodyScroll)),
          (r = (null == (e = t.querySelector('.ant-table-thead')) ? void 0 : e.offsetHeight) || 0),
          (o =
            (null == (n = t.querySelector('.ant-table-pagination')) ? void 0 : n.offsetHeight) ||
            0),
          (this.scrollY = t.clientHeight - (r + (o ? o + 32 : 0))));
      },
      columnSettingEffect: function () {
        var e,
          t,
          n,
          o = this,
          r = this.columnSetting || [],
          a = this.getTableColumns(this.$createElement).map(function (e, t) {
            return __assign(__assign({}, e), { sort: t, display: !0 });
          });
        (null == r ? void 0 : r.length) !== a.length
          ? (this.columnSetting = a)
          : ((e =
              null == (e = null == r ? void 0 : r.map)
                ? void 0
                : e.call(r, function (e) {
                    return e[o.getRowKey()];
                  })),
            (t =
              null == (t = null == a ? void 0 : a.map)
                ? void 0
                : t.call(a, function (e) {
                    return e[o.getRowKey()];
                  })),
            (null == e ? void 0 : e.toString()) !== t.toString() &&
              ((n = this.getRowKey() || 'id'),
              (this.columnSetting =
                null == a
                  ? void 0
                  : a.map(function (t) {
                      var e =
                        null == r
                          ? void 0
                          : r.find(function (e) {
                              return e[n] === t[n];
                            });
                      return __assign(__assign({}, t), { display: !e || e.display });
                    }))));
      },
      onSearchPanelCollapseBefore: function () {},
      onSearchPanelCollapseAfter: function () {},
      onTableChange: function (t, n, o) {
        (this[this.getOrderFieldProp()] = o.field || this.getOrderFieldValue()),
          (this[this.getOrderProp()] = o.order || this.getOrderPropValue()),
          this.$nextTick(function () {
            var e;
            o.order &&
              (this.fetchData(), null != (e = this.onSubTableChange) && e.call(this, t, n, o));
          });
      },
      onClear: function () {
        var e = this;
        return new Promise(function (t) {
          (e.page = 1),
            (e.limit = e.getLimit()),
            e.$nextTick(function () {
              var e = this;
              this.clear().then(function () {
                e.fetchData(), t();
              });
            });
        });
      },
      onScrollBodyScroll: function () {
        var e = this.getScrollBodyEl();
        this.getScrollHeaderEl().scrollLeft = null == e ? void 0 : e.scrollLeft;
      },
      sortOrder: function (e) {
        return this[this.getOrderFieldProp()] === e ? this[this.getOrderProp()] : '';
      },
      getLimit: function () {
        return 10;
      },
      getPagination: function () {
        var n = this;
        return {
          onChange: function (e, t) {
            (n.page = e),
              (n.limit = t),
              n.$nextTick(function () {
                this.fetchData();
              });
          },
          onShowSizeChange: function (e, t) {
            (n.page = e),
              (n.limit = t),
              n.$nextTick(function () {
                this.fetchData();
              });
          },
          showTotal: function (e) {
            return Intl.tv('当前 {page}-{pageSize}/共 {total}条', {
              page: n.page,
              pageSize: n.limit,
              total: e,
            });
          },
          total: this.getTotal(),
          current: this.page,
          pageSize: this.limit,
          showQuickJumper: !0,
        };
      },
      getTableDensity: function () {
        return TableDensity.DEFAULT;
      },
      getTableColumns: function () {
        var n = this,
          e = this.isShowNumber(),
          t = this.getTableNumberColumnWidth(),
          o = this.getColumns()
            .filter(function (e) {
              return !('authorized' in e) || e.authorized();
            })
            .map(function (e, t) {
              return 'resize' in e && e.resize
                ? n.$data.$columnResizable.searchTableResizableColumnItem(n, t, e)
                : e;
            });
        return e
          ? [{ title: Intl.tv('序号'), key: '_number', align: 'center', width: t || 80 }].concat(o)
          : o;
      },
      getSortColumnSetting: function () {
        var e = __spreadArray([], this.columnSetting, !0);
        return (
          e.sort(function (e, t) {
            return e.sort > t.sort ? 1 : e.sort < t.sort ? -1 : 0;
          }),
          e
        );
      },
      getScrollHeaderEl: function () {
        var e = this.$refs.tableWrapRef;
        return null == e
          ? void 0
          : e.querySelector(
              '.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-header',
            );
      },
      getScrollBodyEl: function () {
        var e = this.$refs.tableWrapRef;
        return null == e
          ? void 0
          : e.querySelector(
              '.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-content > .ant-table-scroll > .ant-table-body',
            );
      },
      getScopedSlotsInner: function (e) {
        var t,
          n,
          o,
          r = this,
          a = e.record,
          i = e.index;
        return '_number' === e.column.key
          ? ((t = (0, this.getNumberGeneratorRule)() || NUMBER_GENERATOR_RULE_ALONE),
            (n = this.page),
            (o = this.limit),
            _createVNode(
              ConditionalRender,
              { conditional: t === NUMBER_GENERATOR_RULE_ALONE },
              {
                default: function () {
                  return _createVNode('span', null, [
                    r.renderTableNumberColumn(i + 1, { record: e, index: i }),
                  ]);
                },
                noMatch: function () {
                  return _createVNode('span', null, [
                    r.renderTableNumberColumn((n - 1) * o + (i + 1), { record: a, index: i }),
                  ]);
                },
              },
            ))
          : this.getScopedSlots(row);
      },
      getSearchTablePagination: function () {
        var n = this;
        return {
          onChange: function (e, t) {
            (n.page = e), (n.limit = t), n.fetchData();
          },
          onShowSizeChange: function (e, t) {
            (n.page = e), (n.limit = t), n.fetchData();
          },
          showTotal: function (e) {
            return Intl.tv('当前 {page}-{pageSize}/共 {total}条', {
              page: n.page,
              pageSize: n.limit,
              total: e,
            });
          },
          total: this.getTotal(),
          current: this.page,
          pageSize: this.limit,
          showQuickJumper: !0,
        };
      },
      renderTableNumberColumn: function (e, t) {
        var n, o;
        return (
          void 0 === e && (e = ''),
          (null == (o = null == (n = this.$scopedSlots) ? void 0 : n.tableNumberColumn)
            ? void 0
            : o.call(n, { context: this.getContext(), number: e })) ||
            _createVNode('span', null, [e])
        );
      },
      renderColumnSetting: function () {
        var e,
          t,
          o = this,
          n = __spreadArray([], this.columnSetting, !0);
        return (
          n.sort(function (e, t) {
            return e.sort > t.sort ? 1 : e.sort < t.sort ? -1 : 0;
          }),
          (null == (t = null == (e = this.$scopedSlots) ? void 0 : e.columnSetting)
            ? void 0
            : t.call(e, { context: this.getContext(), columns: n })) ||
            _createVNode(
              ColumnSetting,
              {
                columns: n,
                onShowColumns: function (t) {
                  var e;
                  o.columnSetting =
                    null == (e = o.columnSetting || [])
                      ? void 0
                      : e.map(function (e) {
                          return __assign(__assign({}, e), { display: t });
                        });
                },
                onReset: function () {
                  o.columnSetting = o.getTableColumns().map(function (e, t) {
                    return __assign(__assign({}, e), { display: !0, sort: t });
                  });
                },
                onDisplayColumn: function (t, n) {
                  var e;
                  o.columnSetting =
                    null == (e = o.columnSetting || [])
                      ? void 0
                      : e.map(function (e) {
                          return __assign(__assign({}, e), {
                            display: e.key === t.key ? n : e.display,
                          });
                        });
                },
                onSortEnd: function (t) {
                  var e;
                  o.columnSetting =
                    null == (e = o.columnSetting || [])
                      ? void 0
                      : e.map(function (e) {
                          return __assign(__assign({}, e), { sort: t.get(e.key) });
                        });
                },
              },
              null,
            )
        );
      },
      renderTableDensitySetting: function () {
        var e,
          t,
          n = this;
        return (
          (null == (t = null == (e = this.$scopedSlots) ? void 0 : e.tableDensitySetting)
            ? void 0
            : t.call(e, this)) ||
          _createVNode(
            TableDensitySetting,
            {
              density: this.tableDensity,
              onChange: function (e) {
                return (n.tableDensity = e);
              },
              onReset: function () {
                return (n.tableDensity = n.getTableDensity());
              },
            },
            null,
          )
        );
      },
      renderSearchFooter: function () {
        var e,
          t,
          n = this,
          o = this.isShowExpandSearch,
          r = [
            _createVNode(
              Button,
              {
                class: ''.concat(selectorPrefix, '-searchfooteritem'),
                type: 'primary',
                key: 'search',
                onClick: function () {
                  (n.page = 1),
                    n.$nextTick(function () {
                      this.onSearch();
                    });
                },
              },
              {
                default: function () {
                  return [
                    _createVNode(
                      'i',
                      {
                        class: classNames(
                          ''.concat(selectorPrefix, '-searchfooteritem-search-btn-icon'),
                          'iconfont iconsousuo',
                        ),
                      },
                      null,
                    ),
                    Intl.tv('查询'),
                  ];
                },
              },
            ),
            _createVNode(
              Button,
              {
                class: ''.concat(selectorPrefix, '-searchfooteritem'),
                key: 'reset',
                onClick: this.onClear,
              },
              _isSlot((e = Intl.tv('重置')))
                ? e
                : {
                    default: function () {
                      return [e];
                    },
                  },
            ),
          ],
          o =
            (o &&
              r.push(
                _createVNode(
                  ConditionalRender,
                  { conditional: this.expand },
                  {
                    default: function () {
                      return _createVNode(
                        'a',
                        {
                          key: 'hide',
                          class: ''.concat(
                            selectorPrefix,
                            '-searchfooteritem-expand-search-down-btn',
                          ),
                          onClick: function () {
                            return (n.expand = !1);
                          },
                        },
                        [
                          _createVNode('span', null, [Intl.tv('关闭')]),
                          _createVNode('i', { class: 'iconfont icondownarrow' }, null),
                        ],
                      );
                    },
                    noMatch: function () {
                      return _createVNode(
                        'a',
                        {
                          key: 'expand',
                          class: ''.concat(
                            selectorPrefix,
                            '-searchfooteritem-expand-search-up-btn',
                          ),
                          onClick: function () {
                            return (n.expand = !0);
                          },
                        },
                        [
                          _createVNode('span', null, [Intl.tv('展开')]),
                          _createVNode('i', { class: 'iconfont iconup' }, null),
                        ],
                      );
                    },
                  },
                ),
              ),
            this.renderSearchFooterItems(r) || __spreadArray([], r, !0));
        return _createVNode('div', { class: ''.concat(selectorPrefix, '-searchfooterwrapper') }, [
          (null == (t = null == (r = this.$slots) ? void 0 : r.searchFooter)
            ? void 0
            : t.call(r, { context: this.getContext(), items: o })) ||
            o.map(function (e, t) {
              return _createVNode(
                'div',
                { key: t, class: ''.concat(selectorPrefix, '-searchfooteritem') },
                [e],
              );
            }),
        ]);
      },
      renderTable: function () {
        if (null != (o = this.$slots) && o.table)
          return null == (t = null == (o = this.$slots) ? void 0 : o.table)
            ? void 0
            : t.call(o, this.getContext());
        var e,
          t = this,
          n = t.getScopedSlotsInner,
          o = t.antdTableProps,
          r = t.fixedHeaderAutoTable,
          a = t.getRowKey,
          i = t.getData,
          t = t.getRowSelection,
          l = {},
          s = {},
          c = o || {};
        for (e in c) e.startsWith('on') ? (s[e.substring(2).toLowerCase()] = c[e]) : (l[e] = c[e]);
        var u = this.columnSetting,
          o = this.getTableColumns()
            .map(function (e, t) {
              return __assign(__assign({}, u[t]), e);
            })
            .filter(function (e) {
              return e.display;
            }),
          a =
            (o.sort(function (e, t) {
              return e.sort > t.sort ? 1 : e.sort < t.sort ? -1 : 0;
            }),
            __assign(
              __assign(
                __assign(
                  {
                    rowKey: a(),
                    dataSource: i(),
                    columns: o,
                    size: this.tableDensity,
                    pagination: this.getPagination(),
                    rowSelection: t(),
                    components: this.components,
                  },
                  l || {},
                ),
                { onChange: this.onTableChange },
              ),
              s || {},
            ));
        return (
          r && ((i = this.scrollY), l && l.scroll ? (a.scroll.y = i) : (a.scroll = { y: i })),
          _createVNode(Table, a, {
            bodyCell: function (e) {
              return n(e);
            },
          })
        );
      },
      renderInner: function () {
        var e,
          t,
          n,
          o,
          r,
          a,
          i,
          l,
          s,
          c,
          u,
          d,
          f,
          h,
          m = this,
          p = this;
        return null != (o = this.$slots) && o.inner
          ? null == (n = null == (o = this.$slots) ? void 0 : o.inner)
            ? void 0
            : n.call(o, this.getContext())
          : ((o = (n = this).wrapStyle),
            (r = n.className),
            (a = n.tableClassName),
            (i = n.tableStyle),
            (l = n.searchStyle),
            (s = n.searchClassName),
            (c = n.fitSearch),
            (u = n.fitTable),
            (d = n.autoFixed),
            (f = n.fixedTableSpaceBetween),
            (h = n.$slots),
            _createVNode(
              FlexLayout,
              {
                direction: 'vertical',
                style: o || '',
                class: classNames(selectorPrefix, f ? 'fixedtablespacebetween' : '', r || ''),
              },
              {
                default: function () {
                  return [
                    _createVNode(
                      Fixed,
                      {
                        class: classNames(''.concat(selectorPrefix, '-searchwrapper'), s || ''),
                        style: l || '',
                        fit: c,
                      },
                      {
                        default: function () {
                          return [
                            _createVNode(
                              FlexLayout,
                              { direction: 'vertical' },
                              {
                                default: function () {
                                  return [
                                    _createVNode(
                                      ConditionalRender,
                                      {
                                        conditional:
                                          h.searchFormBefore || !!m.renderSearchFormBefore,
                                      },
                                      {
                                        default: function () {
                                          var e;
                                          return _createVNode(Fixed, null, {
                                            default: function () {
                                              return [
                                                (null ==
                                                (e = null == h ? void 0 : h.searchFormBefore)
                                                  ? void 0
                                                  : e.call(h, p.getContext())) ||
                                                  p.renderSearchFormBefore(),
                                              ];
                                            },
                                          });
                                        },
                                      },
                                    ),
                                    _createVNode(Fixed, null, {
                                      default: function () {
                                        return [
                                          _createVNode(
                                            ConditionalRender,
                                            { conditional: m.expand },
                                            {
                                              default: function () {
                                                return [
                                                  (null == (t = null == h ? void 0 : h.searchForm)
                                                    ? void 0
                                                    : t.call(h, m.getContext())) ||
                                                    m.renderSearchForm(),
                                                ];
                                              },
                                            },
                                          ),
                                        ];
                                      },
                                    }),
                                    _createVNode(
                                      Fixed,
                                      null,
                                      _isSlot((e = m.renderSearchFooter()))
                                        ? e
                                        : {
                                            default: function () {
                                              return [e];
                                            },
                                          },
                                    ),
                                    _createVNode(
                                      ConditionalRender,
                                      {
                                        conditional: h.searchFormAfter || !!m.renderSearchFormAfter,
                                      },
                                      {
                                        default: function () {
                                          var e;
                                          return _createVNode(Fixed, null, {
                                            default: function () {
                                              return [
                                                (null ==
                                                (e = null == h ? void 0 : h.searchFormAfter)
                                                  ? void 0
                                                  : e.call(h, p.getContext())) ||
                                                  p.renderSearchFormAfter(),
                                              ];
                                            },
                                          });
                                        },
                                      },
                                    ),
                                  ];
                                },
                              },
                            ),
                          ];
                        },
                      },
                    ),
                    _createVNode(
                      ConditionalRender,
                      { conditional: !!h.tableHeader || !!m.renderTableHeader },
                      {
                        default: function () {
                          var e;
                          return _createVNode(Fixed, null, {
                            default: function () {
                              return [
                                (null == (e = null == h ? void 0 : h.tableHeader)
                                  ? void 0
                                  : e.call(h, p.getContext())) || p.renderTableHeader(),
                              ];
                            },
                          });
                        },
                      },
                    ),
                    _createVNode(
                      Auto,
                      {
                        class: classNames(
                          ''.concat(selectorPrefix, '-autowrapper'),
                          a || '',
                          d ? 'autofixed' : '',
                        ),
                        style: i || '',
                        fit: u,
                        autoFixed: d,
                      },
                      {
                        default: function () {
                          return [
                            _createVNode(
                              'div',
                              {
                                ref: 'tableWrapRef',
                                class: ''.concat(selectorPrefix, '-tablewrapper'),
                              },
                              [m.renderTable()],
                            ),
                          ];
                        },
                      },
                    ),
                    _createVNode(
                      ConditionalRender,
                      { conditional: !!h.tableFooter || !!m.renderTableFooter },
                      {
                        default: function () {
                          var e;
                          return _createVNode(Fixed, null, {
                            default: function () {
                              return [
                                (null == (e = null == h ? void 0 : h.tableFooter)
                                  ? void 0
                                  : e.call(h, p.getContext())) || p.renderTableFooter(),
                              ];
                            },
                          });
                        },
                      },
                    ),
                  ];
                },
              },
            ));
      },
      renderSearchTable: function () {
        var e, t;
        return (
          (null == (t = null == (e = this.$slots) ? void 0 : e.searchTable)
            ? void 0
            : t.call(e, this.getContext())) ||
          _createVNode('div', { class: ''.concat(selectorPrefix, '-wrap') }, [
            this.$renderSuspense(),
          ])
        );
      },
    },
    render: function () {
      return this.renderSearchTable();
    },
  }),
);
export {
  selectorPrefix,
  NUMBER_GENERATOR_RULE_ALONE,
  NUMBER_GENERATOR_RULE_CONTINUITY,
  ROW_SELECTION_NORMAL_MODE,
  ROW_SELECTION_CONTINUOUS_MODE,
};
//# sourceMappingURL=searchtable.js.map
