"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsProps = void 0;
var tslib_1 = require("tslib");
var adherev_util_intl_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-intl"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var Collapse_1 = (0, tslib_1.__importStar)(require("./Collapse"));
var Table_1 = (0, tslib_1.__importDefault)(require("./Table"));
var selectPrefix = 'adherev-ui-playground-props';
exports.propsProps = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, Collapse_1.collapseProps), { data: (0, vue_types_1.array)().def([]) });
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-props',
    props: exports.propsProps,
    setup: function (props, _a) {
        var columns = [
            {
                title: adherev_util_intl_1.default.tv('参数'),
                key: 'params',
                dataIndex: 'params',
                width: '20%',
            },
            {
                title: adherev_util_intl_1.default.tv('说明'),
                key: 'desc',
                dataIndex: 'desc',
                width: '50%',
            },
            {
                title: adherev_util_intl_1.default.tv('类型'),
                key: 'type',
                dataIndex: 'type',
                width: '15%',
            },
            {
                title: adherev_util_intl_1.default.tv('默认值'),
                key: 'defaultVal',
                dataIndex: 'defaultVal',
                width: '15%',
            },
        ];
        return function () {
            var _collapseProps = {};
            for (var p in Collapse_1.collapseProps) {
                _collapseProps[p] = props[p];
            }
            return (
            // @ts-ignore
            <Collapse_1.default {..._collapseProps}>
          <div 
            // @ts-ignore
            class={selectPrefix}>
            {/*@ts-ignore*/}
            <Table_1.default columns={columns} dataSource={props.data.map(function (t, i) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, t), { id: "".concat(i + 1) })); })} rowKey="id">
              {{
                    // @ts-ignore
                    bodyCell: function (_a) {
                        var text = _a.text, column = _a.column;
                        if (column.dataIndex === 'type') {
                            return (<code 
                            // @ts-ignore
                            class={"".concat(selectPrefix, "-highlight")}>
                        {text}
                      </code>);
                        }
                        if (column.dataIndex === 'defaultVal') {
                            return <code>{text || '-'}</code>;
                        }
                        return null;
                    },
                }}
            </Table_1.default>
          </div>
        </Collapse_1.default>);
        };
    },
});
//# sourceMappingURL=Props.jsx.map