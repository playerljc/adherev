"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var ant_design_vue_1 = require("ant-design-vue");
var vuedraggable_1 = (0, tslib_1.__importDefault)(require("vuedraggable"));
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var searchtable_1 = require("../../searchtable");
exports.default = (0, vue_1.defineComponent)({
    props: {
        columns: {
            type: Array,
            default: function () { return []; },
        },
    },
    emits: ['showColumns', 'reset', 'sortEnd', 'displayColumn'],
    computed: {
        showColumns: function () {
            return this.columns.every(function (column) { return column.display; });
        },
    },
    methods: {
        onShowColumns: function (e) {
            this.$emit('showColumns', e.target.checked);
        },
        onReset: function () {
            this.$emit('reset');
        },
        onEnd: function () {
            var map = new Map();
            this.columns.forEach(function (column, index) {
                map.set(column.key, index);
            });
            this.$emit('sortEnd', map);
        },
        onChange: function (column, e) {
            this.$emit('displayColumn', { column: column, checked: e.target.checked });
        },
    },
    render: function () {
        var _this = this;
        return (
        // @ts-ignore
        <div class={"".concat(searchtable_1.selectorPrefix, "-column-setting")}>
        {/*@ts-ignore*/}
        <div class={"".concat(searchtable_1.selectorPrefix, "-column-setting-header")}>
          <div>
            {/*@ts-ignore*/}
            <ant_design_vue_1.Checkbox checked={this.showColumns} onChange={this.onShowColumns}>
              {adherev_util_intl_1.default.tv('列展示')}
            </ant_design_vue_1.Checkbox>
          </div>

          <div>
            <a onClick={this.onReset}>{adherev_util_intl_1.default.tv('重置')}</a>
          </div>
        </div>

        {/*@ts-ignore*/}
        <div class={"".concat(searchtable_1.selectorPrefix, "-column-setting-body")}>
          {/*@ts-ignore*/}
          <vuedraggable_1.default tag="ul" list={this.columns} itemKey={function (item) { return item.dataIndex || item.key; }} handle={".".concat(searchtable_1.selectorPrefix, "-column-setting-handle")} onEnd={this.onEnd} v-slots={{
                item: function (_a) {
                    var column = _a.element;
                    return (<li key={column.dataIndex || column.key}>
                  <img 
                    // @ts-ignore
                    class={"".concat(searchtable_1.selectorPrefix, "-column-setting-handle")} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1pYyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik0xMSAxOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJzLjktMiAyLTJzMiAuOSAyIDJ6bS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6bTYgNGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTJzLTIgLjktMiAycy45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6Ij48L3BhdGg+PC9zdmc+DQo=" alt=""/>
                  {/*@ts-ignore*/}
                  <ant_design_vue_1.Checkbox checked={column.display} onChange={function (e) {
                            _this.onChange(column, e);
                        }}>
                    {column.title}
                  </ant_design_vue_1.Checkbox>
                </li>);
                },
            }}/>
        </div>
      </div>);
    },
});
//# sourceMappingURL=setting.jsx.map