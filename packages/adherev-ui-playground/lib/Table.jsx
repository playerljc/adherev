"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-playground-table';
var tableProps = {
    tableClassName: (0, vue_types_1.string)().def(''),
    tableStyle: (0, vue_types_1.object)().def({}),
    columns: (0, vue_types_1.array)().def([]),
    dataSource: (0, vue_types_1.array)().def([]),
    rowKey: (0, vue_types_1.string)().def(''),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-table',
    props: tableProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        var renderHeader = function () { return (<thead>
        <tr 
        // @ts-ignore
        class={"".concat(selectorPrefix, "-header")}>
          {props.columns.map(function (column) {
                var className = column.className, style = column.style, align = column.align;
                var defaultProps = {
                    key: column.key,
                };
                column.width && (defaultProps.width = column.width);
                return (<th {...defaultProps} class={(0, classnames_1.default)("".concat(selectorPrefix, "-header-column"), (className || '').split(/\s+/))} style={(0, tslib_1.__assign)((0, tslib_1.__assign)({}, style), { 
                        // @ts-ignore
                        textAlign: align || 'left' })}>
                {column.title || '-'}
              </th>);
            })}
        </tr>
      </thead>); };
        var renderBody = function () { return (<tbody>
        {props.dataSource.map(function (record, rowIndex) {
                return (<tr 
                // @ts-ignore
                class={"".concat(selectorPrefix, "-row")} key={record[props.rowKey]}>
              {props.columns.map(function (column, columnIndex) {
                        var dataIndex = column.dataIndex, slot = column.slot, align = column.align, valign = column.valign;
                        return (<td class={"".concat(selectorPrefix, "-cell")} key={column.key} 
                        // @ts-ignore
                        valign={valign || 'top'} style={{
                                // @ts-ignore
                                textAlign: align || 'left',
                            }}>
                    {/*@ts-ignore*/}
                    <adherev_ui_conditionalrender_1.default conditional={!!slot}>
                      {{
                                default: function () {
                                    return slot && slots[slot]
                                        ? // @ts-ignore
                                            slots[slot]({
                                                value: record[dataIndex],
                                                record: record,
                                                rowIndex: rowIndex,
                                                columnIndex: columnIndex,
                                            })
                                        : null;
                                },
                                noMatch: function () { return <span>{record[dataIndex] || '-'}</span>; },
                            }}
                    </adherev_ui_conditionalrender_1.default>
                  </td>);
                    })}
            </tr>);
            })}
      </tbody>); };
        return function () { return (<div 
        // @ts-ignore
        class={selectorPrefix}>
        <table 
        // @ts-ignore
        class={(0, classnames_1.default)("".concat(selectorPrefix, "-inner"), (props.tableClassName || '').split(/\s+/))} style={props.tableStyle}>
          {renderHeader()}
          {renderBody()}
        </table>
      </div>); };
    },
});
//# sourceMappingURL=Table.jsx.map