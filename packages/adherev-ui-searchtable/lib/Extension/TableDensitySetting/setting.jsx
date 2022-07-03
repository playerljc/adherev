"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var searchtable_1 = require("../../searchtable");
var types_1 = require("../../types");
exports.default = (0, vue_1.defineComponent)({
    props: {
        density: {
            type: String,
            default: types_1.TableDensity.DEFAULT,
        },
    },
    emits: ['reset', 'change'],
    data: function () {
        return {
            $config: [
                {
                    label: adherev_util_intl_1.default.tv('缺省'),
                    value: types_1.TableDensity.DEFAULT,
                },
                {
                    label: adherev_util_intl_1.default.tv('中等'),
                    value: types_1.TableDensity.MIDDLE,
                },
                {
                    label: adherev_util_intl_1.default.tv('紧凑'),
                    value: types_1.TableDensity.SMALL,
                },
            ],
        };
    },
    render: function () {
        var _this = this;
        return (
        // @ts-ignore
        <div class={"".concat(searchtable_1.selectorPrefix, "-table-density-setting")}>
        {/*@ts-ignore*/}
        <div class={"".concat(searchtable_1.selectorPrefix, "-table-density-setting-header")}>
          <a onClick={function () {
                _this.$emit('reset');
            }}>
            {adherev_util_intl_1.default.tv('重置')}
          </a>
        </div>

        {/*@ts-ignore*/}
        <div class={"".concat(searchtable_1.selectorPrefix, "-table-density-setting-body")}>
          <ul>
            {this.$data.$config.map(function (t) { return (<li key={t.value} 
            // @ts-ignore
            class={_this.density === t.value ? 'active' : ''} onClick={function () {
                    _this.$emit('change', t.value);
                }}>
                {t.label}
              </li>); })}
          </ul>
        </div>
      </div>);
    },
});
//# sourceMappingURL=setting.jsx.map