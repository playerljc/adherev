'use strict';
var _vue = require('vue');
function _isSlot(e) {
  return (
    'function' == typeof e ||
    ('[object Object]' === Object.prototype.toString.call(e) && !(0, _vue.isVNode)(e))
  );
}
require('core-js/modules/es.object.define-property.js'),
  require('core-js/modules/es.symbol.js'),
  require('core-js/modules/es.symbol.description.js'),
  require('core-js/modules/es.object.to-string.js'),
  require('core-js/modules/es.array.map.js'),
  require('core-js/modules/es.regexp.to-string.js'),
  require('core-js/modules/es.array.find.js'),
  require('core-js/modules/es.promise.js'),
  require('core-js/modules/es.array.filter.js'),
  require('core-js/modules/es.array.concat.js'),
  require('core-js/modules/es.array.sort.js'),
  require('core-js/modules/es.string.starts-with.js'),
  Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ROW_SELECTION_CONTINUOUS_MODE =
    exports.ROW_SELECTION_NORMAL_MODE =
    exports.NUMBER_GENERATOR_RULE_CONTINUITY =
    exports.NUMBER_GENERATOR_RULE_ALONE =
    exports.selectorPrefix =
      void 0);
var tslib_1 = require('tslib'),
  ant_design_vue_1 = require('ant-design-vue'),
  classnames_1 = tslib_1.__importDefault(require('classnames')),
  vue_1 = require('vue'),
  adherev_ui_conditionalrender_1 = tslib_1.__importDefault(
    require('@baifendian/adherev-ui-conditionalrender'),
  ),
  adherev_ui_flexlayout_1 = tslib_1.__importDefault(require('@baifendian/adherev-ui-flexlayout')),
  adherev_ui_suspense_1 = tslib_1.__importDefault(require('@baifendian/adherev-ui-suspense')),
  adherev_util_1 = tslib_1.__importDefault(require('@baifendian/adherev-util')),
  adherev_util_intl_1 = tslib_1.__importDefault(require('@baifendian/adherev-util-intl')),
  adherev_util_mixins_1 = tslib_1.__importDefault(require('@baifendian/adherev-util-mixins')),
  ColumnResizable_1 = tslib_1.__importStar(require('./Extension/ColumnResizable')),
  ColumnSetting_1 = tslib_1.__importDefault(require('./Extension/ColumnSetting')),
  TableDensitySetting_1 = tslib_1.__importDefault(require('./Extension/TableDensitySetting')),
  types_1 = require('./types'),
  updatedEx =
    ((exports.selectorPrefix = 'adherev-ui-searchtable'), adherev_util_mixins_1.default.updatedEx),
  watchEffect = adherev_util_mixins_1.default.watchEffect,
  Fixed = adherev_ui_flexlayout_1.default.Fixed,
  Auto = adherev_ui_flexlayout_1.default.Auto,
  extend = adherev_util_1.default._util.extend;
(exports.NUMBER_GENERATOR_RULE_ALONE = Symbol()),
  (exports.NUMBER_GENERATOR_RULE_CONTINUITY = Symbol()),
  (exports.ROW_SELECTION_NORMAL_MODE = Symbol()),
  (exports.ROW_SELECTION_CONTINUOUS_MODE = Symbol()),
  (exports.default = (0, vue_1.defineComponent)(
    extend({
      className: 'SearchTable',
      mixins: [adherev_ui_suspense_1.default, updatedEx, watchEffect],
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
          tableDensity: types_1.TableDensity.DEFAULT,
          $columnResizable: new ColumnResizable_1.default(),
          $columnObserver: null,
        };
      },
      computed: {
        components: function () {
          return {
            header: {
              cell: (0, ColumnResizable_1.SearchTableResizableTitle)(this.getTableColumns()),
            },
          };
        },
      },
      provide: function () {
        return { getContext: this.getContext };
      },
      created: function () {
        (this.columnSetting = this.getTableColumns().map(function (e, t) {
          return tslib_1.__assign(tslib_1.__assign({}, e), { sort: t, display: !0 });
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
            (this.$data.$columnObserver = (0, ColumnResizable_1.SearchTableResizableObserver)(
              this,
            ));
        },
        fixedHeaderAutoTableEffectLayout: function (e) {
          var t = this,
            n = t.$refs,
            r = t.scrollY,
            i = t.expand;
          t.fixedHeaderAutoTable &&
            (t = this.getData()) &&
            t.length &&
            ((0 === e.scrollY && 0 === r) || e.scrollY !== r || e.expand !== i) &&
            ((t = n.tableWrapRef),
            (r = this.getScrollBodyEl()) &&
              (r.removeEventListener('scroll', this.onScrollBodyScroll),
              r.addEventListener('scroll', this.onScrollBodyScroll)),
            (i =
              (null == (e = t.querySelector('.ant-table-thead')) ? void 0 : e.offsetHeight) || 0),
            (r =
              (null == (n = t.querySelector('.ant-table-pagination')) ? void 0 : n.offsetHeight) ||
              0),
            (this.scrollY = t.clientHeight - (i + (r ? r + 32 : 0))));
        },
        columnSettingEffect: function () {
          var e,
            t,
            n,
            r = this,
            i = this.columnSetting || [],
            l = this.getTableColumns(this.$createElement).map(function (e, t) {
              return tslib_1.__assign(tslib_1.__assign({}, e), { sort: t, display: !0 });
            });
          (null == i ? void 0 : i.length) !== l.length
            ? (this.columnSetting = l)
            : ((e =
                null == (e = null == i ? void 0 : i.map)
                  ? void 0
                  : e.call(i, function (e) {
                      return e[r.getRowKey()];
                    })),
              (t =
                null == (t = null == l ? void 0 : l.map)
                  ? void 0
                  : t.call(l, function (e) {
                      return e[r.getRowKey()];
                    })),
              (null == e ? void 0 : e.toString()) !== t.toString() &&
                ((n = this.getRowKey() || 'id'),
                (this.columnSetting =
                  null == l
                    ? void 0
                    : l.map(function (t) {
                        var e =
                          null == i
                            ? void 0
                            : i.find(function (e) {
                                return e[n] === t[n];
                              });
                        return tslib_1.__assign(tslib_1.__assign({}, t), {
                          display: !e || e.display,
                        });
                      }))));
        },
        onSearchPanelCollapseBefore: function () {},
        onSearchPanelCollapseAfter: function () {},
        onTableChange: function (t, n, r) {
          (this[this.getOrderFieldProp()] = r.field || this.getOrderFieldValue()),
            (this[this.getOrderProp()] = r.order || this.getOrderPropValue()),
            this.$nextTick(function () {
              var e;
              r.order &&
                (this.fetchData(), null != (e = this.onSubTableChange) && e.call(this, t, n, r));
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
              return adherev_util_intl_1.default.tv('当前 {page}-{pageSize}/共 {total}条', {
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
          return types_1.TableDensity.DEFAULT;
        },
        getTableColumns: function () {
          var n = this,
            e = this.isShowNumber(),
            t = this.getTableNumberColumnWidth(),
            r = this.getColumns()
              .filter(function (e) {
                return !('authorized' in e) || e.authorized();
              })
              .map(function (e, t) {
                return 'resize' in e && e.resize
                  ? n.$data.$columnResizable.searchTableResizableColumnItem(n, t, e)
                  : e;
              });
          return e
            ? [
                {
                  title: adherev_util_intl_1.default.tv('序号'),
                  key: '_number',
                  align: 'center',
                  width: t || 80,
                },
              ].concat(r)
            : r;
        },
        getSortColumnSetting: function () {
          var e = tslib_1.__spreadArray([], this.columnSetting, !0);
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
            r,
            i = this,
            l = e.record,
            a = e.index;
          return '_number' === e.column.key
            ? ((t = (0, this.getNumberGeneratorRule)() || exports.NUMBER_GENERATOR_RULE_ALONE),
              (n = this.page),
              (r = this.limit),
              (0, _vue.createVNode)(
                adherev_ui_conditionalrender_1.default,
                { conditional: t === exports.NUMBER_GENERATOR_RULE_ALONE },
                {
                  default: function () {
                    return (0, _vue.createVNode)('span', null, [
                      i.renderTableNumberColumn(a + 1, { record: e, index: a }),
                    ]);
                  },
                  noMatch: function () {
                    return (0, _vue.createVNode)('span', null, [
                      i.renderTableNumberColumn((n - 1) * r + (a + 1), { record: l, index: a }),
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
              return adherev_util_intl_1.default.tv('当前 {page}-{pageSize}/共 {total}条', {
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
          var n, r;
          return (
            void 0 === e && (e = ''),
            (null == (r = null == (n = this.$scopedSlots) ? void 0 : n.tableNumberColumn)
              ? void 0
              : r.call(n, { context: this.getContext(), number: e })) ||
              (0, _vue.createVNode)('span', null, [e])
          );
        },
        renderColumnSetting: function () {
          var e,
            t,
            r = this,
            n = tslib_1.__spreadArray([], this.columnSetting, !0);
          return (
            n.sort(function (e, t) {
              return e.sort > t.sort ? 1 : e.sort < t.sort ? -1 : 0;
            }),
            (null == (t = null == (e = this.$scopedSlots) ? void 0 : e.columnSetting)
              ? void 0
              : t.call(e, { context: this.getContext(), columns: n })) ||
              (0, _vue.createVNode)(
                ColumnSetting_1.default,
                {
                  columns: n,
                  onShowColumns: function (t) {
                    var e;
                    r.columnSetting =
                      null == (e = r.columnSetting || [])
                        ? void 0
                        : e.map(function (e) {
                            return tslib_1.__assign(tslib_1.__assign({}, e), { display: t });
                          });
                  },
                  onReset: function () {
                    r.columnSetting = r.getTableColumns().map(function (e, t) {
                      return tslib_1.__assign(tslib_1.__assign({}, e), { display: !0, sort: t });
                    });
                  },
                  onDisplayColumn: function (t, n) {
                    var e;
                    r.columnSetting =
                      null == (e = r.columnSetting || [])
                        ? void 0
                        : e.map(function (e) {
                            return tslib_1.__assign(tslib_1.__assign({}, e), {
                              display: e.key === t.key ? n : e.display,
                            });
                          });
                  },
                  onSortEnd: function (t) {
                    var e;
                    r.columnSetting =
                      null == (e = r.columnSetting || [])
                        ? void 0
                        : e.map(function (e) {
                            return tslib_1.__assign(tslib_1.__assign({}, e), {
                              sort: t.get(e.key),
                            });
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
            (0, _vue.createVNode)(
              TableDensitySetting_1.default,
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
            r = this.isShowExpandSearch,
            i = [
              (0, _vue.createVNode)(
                ant_design_vue_1.Button,
                {
                  class: ''.concat(exports.selectorPrefix, '-searchfooteritem'),
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
                      (0, _vue.createVNode)(
                        'i',
                        {
                          class: (0, classnames_1.default)(
                            ''.concat(exports.selectorPrefix, '-searchfooteritem-search-btn-icon'),
                            'iconfont iconsousuo',
                          ),
                        },
                        null,
                      ),
                      adherev_util_intl_1.default.tv('查询'),
                    ];
                  },
                },
              ),
              (0, _vue.createVNode)(
                ant_design_vue_1.Button,
                {
                  class: ''.concat(exports.selectorPrefix, '-searchfooteritem'),
                  key: 'reset',
                  onClick: this.onClear,
                },
                _isSlot((e = adherev_util_intl_1.default.tv('重置')))
                  ? e
                  : {
                      default: function () {
                        return [e];
                      },
                    },
              ),
            ],
            r =
              (r &&
                i.push(
                  (0, _vue.createVNode)(
                    adherev_ui_conditionalrender_1.default,
                    { conditional: this.expand },
                    {
                      default: function () {
                        return (0, _vue.createVNode)(
                          'a',
                          {
                            key: 'hide',
                            class: ''.concat(
                              exports.selectorPrefix,
                              '-searchfooteritem-expand-search-down-btn',
                            ),
                            onClick: function () {
                              return (n.expand = !1);
                            },
                          },
                          [
                            (0, _vue.createVNode)('span', null, [
                              adherev_util_intl_1.default.tv('关闭'),
                            ]),
                            (0, _vue.createVNode)('i', { class: 'iconfont icondownarrow' }, null),
                          ],
                        );
                      },
                      noMatch: function () {
                        return (0, _vue.createVNode)(
                          'a',
                          {
                            key: 'expand',
                            class: ''.concat(
                              exports.selectorPrefix,
                              '-searchfooteritem-expand-search-up-btn',
                            ),
                            onClick: function () {
                              return (n.expand = !0);
                            },
                          },
                          [
                            (0, _vue.createVNode)('span', null, [
                              adherev_util_intl_1.default.tv('展开'),
                            ]),
                            (0, _vue.createVNode)('i', { class: 'iconfont iconup' }, null),
                          ],
                        );
                      },
                    },
                  ),
                ),
              this.renderSearchFooterItems(i) || tslib_1.__spreadArray([], i, !0));
          return (0, _vue.createVNode)(
            'div',
            { class: ''.concat(exports.selectorPrefix, '-searchfooterwrapper') },
            [
              (null == (t = null == (i = this.$slots) ? void 0 : i.searchFooter)
                ? void 0
                : t.call(i, { context: this.getContext(), items: r })) ||
                r.map(function (e, t) {
                  return (0,
                  _vue.createVNode)('div', { key: t, class: ''.concat(exports.selectorPrefix, '-searchfooteritem') }, [e]);
                }),
            ],
          );
        },
        renderTable: function () {
          if (null != (r = this.$slots) && r.table)
            return null == (t = null == (r = this.$slots) ? void 0 : r.table)
              ? void 0
              : t.call(r, this.getContext());
          var e,
            t = this,
            n = t.getScopedSlotsInner,
            r = t.antdTableProps,
            i = t.fixedHeaderAutoTable,
            l = t.getRowKey,
            a = t.getData,
            t = t.getRowSelection,
            o = {},
            s = {},
            u = r || {};
          for (e in u)
            e.startsWith('on') ? (s[e.substring(2).toLowerCase()] = u[e]) : (o[e] = u[e]);
          var c = this.columnSetting,
            r = this.getTableColumns()
              .map(function (e, t) {
                return tslib_1.__assign(tslib_1.__assign({}, c[t]), e);
              })
              .filter(function (e) {
                return e.display;
              }),
            l =
              (r.sort(function (e, t) {
                return e.sort > t.sort ? 1 : e.sort < t.sort ? -1 : 0;
              }),
              tslib_1.__assign(
                tslib_1.__assign(
                  tslib_1.__assign(
                    {
                      rowKey: l(),
                      dataSource: a(),
                      columns: r,
                      size: this.tableDensity,
                      pagination: this.getPagination(),
                      rowSelection: t(),
                      components: this.components,
                    },
                    o || {},
                  ),
                  { onChange: this.onTableChange },
                ),
                s || {},
              ));
          return (
            i && ((a = this.scrollY), o && o.scroll ? (l.scroll.y = a) : (l.scroll = { y: a })),
            (0, _vue.createVNode)(ant_design_vue_1.Table, l, {
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
            r,
            i,
            l,
            a,
            o,
            s,
            u,
            c,
            d,
            f,
            _,
            h = this,
            p = this;
          return null != (r = this.$slots) && r.inner
            ? null == (n = null == (r = this.$slots) ? void 0 : r.inner)
              ? void 0
              : n.call(r, this.getContext())
            : ((r = (n = this).wrapStyle),
              (i = n.className),
              (l = n.tableClassName),
              (a = n.tableStyle),
              (o = n.searchStyle),
              (s = n.searchClassName),
              (u = n.fitSearch),
              (c = n.fitTable),
              (d = n.autoFixed),
              (f = n.fixedTableSpaceBetween),
              (_ = n.$slots),
              (0, _vue.createVNode)(
                adherev_ui_flexlayout_1.default,
                {
                  direction: 'vertical',
                  style: r || '',
                  class: (0, classnames_1.default)(
                    exports.selectorPrefix,
                    f ? 'fixedtablespacebetween' : '',
                    i || '',
                  ),
                },
                {
                  default: function () {
                    return [
                      (0, _vue.createVNode)(
                        Fixed,
                        {
                          class: (0, classnames_1.default)(
                            ''.concat(exports.selectorPrefix, '-searchwrapper'),
                            s || '',
                          ),
                          style: o || '',
                          fit: u,
                        },
                        {
                          default: function () {
                            return [
                              (0, _vue.createVNode)(
                                adherev_ui_flexlayout_1.default,
                                { direction: 'vertical' },
                                {
                                  default: function () {
                                    return [
                                      (0, _vue.createVNode)(
                                        adherev_ui_conditionalrender_1.default,
                                        {
                                          conditional:
                                            _.searchFormBefore || !!h.renderSearchFormBefore,
                                        },
                                        {
                                          default: function () {
                                            var e;
                                            return (0, _vue.createVNode)(Fixed, null, {
                                              default: function () {
                                                return [
                                                  (null ==
                                                  (e = null == _ ? void 0 : _.searchFormBefore)
                                                    ? void 0
                                                    : e.call(_, p.getContext())) ||
                                                    p.renderSearchFormBefore(),
                                                ];
                                              },
                                            });
                                          },
                                        },
                                      ),
                                      (0, _vue.createVNode)(Fixed, null, {
                                        default: function () {
                                          return [
                                            (0, _vue.createVNode)(
                                              adherev_ui_conditionalrender_1.default,
                                              { conditional: h.expand },
                                              {
                                                default: function () {
                                                  return [
                                                    (null == (t = null == _ ? void 0 : _.searchForm)
                                                      ? void 0
                                                      : t.call(_, h.getContext())) ||
                                                      h.renderSearchForm(),
                                                  ];
                                                },
                                              },
                                            ),
                                          ];
                                        },
                                      }),
                                      (0, _vue.createVNode)(
                                        Fixed,
                                        null,
                                        _isSlot((e = h.renderSearchFooter()))
                                          ? e
                                          : {
                                              default: function () {
                                                return [e];
                                              },
                                            },
                                      ),
                                      (0, _vue.createVNode)(
                                        adherev_ui_conditionalrender_1.default,
                                        {
                                          conditional:
                                            _.searchFormAfter || !!h.renderSearchFormAfter,
                                        },
                                        {
                                          default: function () {
                                            var e;
                                            return (0, _vue.createVNode)(Fixed, null, {
                                              default: function () {
                                                return [
                                                  (null ==
                                                  (e = null == _ ? void 0 : _.searchFormAfter)
                                                    ? void 0
                                                    : e.call(_, p.getContext())) ||
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
                      (0, _vue.createVNode)(
                        adherev_ui_conditionalrender_1.default,
                        { conditional: !!_.tableHeader || !!h.renderTableHeader },
                        {
                          default: function () {
                            var e;
                            return (0, _vue.createVNode)(Fixed, null, {
                              default: function () {
                                return [
                                  (null == (e = null == _ ? void 0 : _.tableHeader)
                                    ? void 0
                                    : e.call(_, p.getContext())) || p.renderTableHeader(),
                                ];
                              },
                            });
                          },
                        },
                      ),
                      (0, _vue.createVNode)(
                        Auto,
                        {
                          class: (0, classnames_1.default)(
                            ''.concat(exports.selectorPrefix, '-autowrapper'),
                            l || '',
                            d ? 'autofixed' : '',
                          ),
                          style: a || '',
                          fit: c,
                          autoFixed: d,
                        },
                        {
                          default: function () {
                            return [
                              (0, _vue.createVNode)(
                                'div',
                                {
                                  ref: 'tableWrapRef',
                                  class: ''.concat(exports.selectorPrefix, '-tablewrapper'),
                                },
                                [h.renderTable()],
                              ),
                            ];
                          },
                        },
                      ),
                      (0, _vue.createVNode)(
                        adherev_ui_conditionalrender_1.default,
                        { conditional: !!_.tableFooter || !!h.renderTableFooter },
                        {
                          default: function () {
                            var e;
                            return (0, _vue.createVNode)(Fixed, null, {
                              default: function () {
                                return [
                                  (null == (e = null == _ ? void 0 : _.tableFooter)
                                    ? void 0
                                    : e.call(_, p.getContext())) || p.renderTableFooter(),
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
            (0, _vue.createVNode)('div', { class: ''.concat(exports.selectorPrefix, '-wrap') }, [
              this.$renderSuspense(),
            ])
          );
        },
      },
      render: function () {
        return this.renderSearchTable();
      },
    }),
  ));
//# sourceMappingURL=searchtable.js.map
