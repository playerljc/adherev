"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var ant_design_vue_1 = require("ant-design-vue");
var setting_1 = (0, tslib_1.__importDefault)(require("./setting"));
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-searchtable-column-setting',
    inject: ['getContext'],
    render: function () {
        var _this = this;
        var _a, _b, _c;
        return (
        // @ts-ignore
        <ant_design_vue_1.Popover content={
            // @ts-ignore
            <setting_1.default columns={((_c = (_b = (_a = this.getContext) === null || _a === void 0 ? void 0 : _a.call(this)) === null || _b === void 0 ? void 0 : _b.getSortColumnSetting) === null || _c === void 0 ? void 0 : _c.call(_b)) || []} onShowColumns={function (checked) {
                    var _a;
                    var columnSetting = ((_a = _this.getContext) === null || _a === void 0 ? void 0 : _a.call(_this)).columnSetting;
                    _this.getContext().columnSetting = columnSetting.map(function (column) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, column), { display: checked })); });
                }} onReset={function () {
                    _this.getContext().columnSetting = _this.getContext()
                        .getTableColumns()
                        .map(function (column, index) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, column), { display: true, sort: index })); });
                }} onDisplayColumn={function (_a) {
                    var _b;
                    var column = _a.column, checked = _a.checked;
                    var columnSetting = ((_b = _this.getContext) === null || _b === void 0 ? void 0 : _b.call(_this)).columnSetting;
                    _this.getContext().columnSetting = columnSetting.map(function (_column) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, _column), { display: _column.key === column.key ? checked : _column.display })); });
                }} onSortEnd={function (map) {
                    var _a;
                    var columnSetting = ((_a = _this.getContext) === null || _a === void 0 ? void 0 : _a.call(_this)).columnSetting;
                    _this.getContext().columnSetting = columnSetting.map(function (column) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, column), { sort: map.get(column.key) })); });
                }}/>} placement="bottomRight" trigger="click" getPopupContainer={function (el) { return el.parentElement; }}>
        <a>
          <img alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1yaSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Ik0yLjIxMyAxNC4wNmE5Ljk0NSA5Ljk0NSAwIDAgMSAwLTQuMTJjMS4xMS4xMyAyLjA4LS4yMzcgMi4zOTYtMS4wMDFjLjMxNy0uNzY1LS4xMDgtMS43MS0uOTg2LTIuNDAzYTkuOTQ1IDkuOTQ1IDAgMCAxIDIuOTEzLTIuOTEzYy42OTIuODc3IDEuNjM4IDEuMzAzIDIuNDAzLjk4NmMuNzY1LS4zMTcgMS4xMzItMS4yODYgMS4wMDEtMi4zOTZhOS45NDUgOS45NDUgMCAwIDEgNC4xMiAwYy0uMTMgMS4xMS4yMzcgMi4wOCAxLjAwMSAyLjM5NmMuNzY1LjMxNyAxLjcxLS4xMDggMi40MDMtLjk4NmE5Ljk0NSA5Ljk0NSAwIDAgMSAyLjkxMyAyLjkxM2MtLjg3Ny42OTItMS4zMDMgMS42MzgtLjk4NiAyLjQwM2MuMzE3Ljc2NSAxLjI4NiAxLjEzMiAyLjM5NiAxLjAwMWE5Ljk0NSA5Ljk0NSAwIDAgMSAwIDQuMTJjLTEuMTEtLjEzLTIuMDguMjM3LTIuMzk2IDEuMDAxYy0uMzE3Ljc2NS4xMDggMS43MS45ODYgMi40MDNhOS45NDUgOS45NDUgMCAwIDEtMi45MTMgMi45MTNjLS42OTItLjg3Ny0xLjYzOC0xLjMwMy0yLjQwMy0uOTg2Yy0uNzY1LjMxNy0xLjEzMiAxLjI4Ni0xLjAwMSAyLjM5NmE5Ljk0NSA5Ljk0NSAwIDAgMS00LjEyIDBjLjEzLTEuMTEtLjIzNy0yLjA4LTEuMDAxLTIuMzk2Yy0uNzY1LS4zMTctMS43MS4xMDgtMi40MDMuOTg2YTkuOTQ1IDkuOTQ1IDAgMCAxLTIuOTEzLTIuOTEzYy44NzctLjY5MiAxLjMwMy0xLjYzOC45ODYtMi40MDNjLS4zMTctLjc2NS0xLjI4Ni0xLjEzMi0yLjM5Ni0xLjAwMXpNNCAxMi4yMWMxLjEuMzA1IDIuMDA3IDEuMDAyIDIuNDU3IDIuMDg2Yy40NDkgMS4wODUuMyAyLjIyLS4yNjIgMy4yMTJjLjA5Ni4xMDIuMTk1LjIwMS4yOTcuMjk3Yy45OTMtLjU2MiAyLjEyNy0uNzEgMy4yMTItLjI2MmMxLjA4NC40NSAxLjc4MSAxLjM1NyAyLjA4NiAyLjQ1N2MuMTQuMDA0LjI4LjAwNC40MiAwYy4zMDUtMS4xIDEuMDAyLTIuMDA3IDIuMDg2LTIuNDU3YzEuMDg1LS40NDkgMi4yMi0uMyAzLjIxMi4yNjJjLjEwMi0uMDk2LjIwMS0uMTk1LjI5Ny0uMjk3Yy0uNTYyLS45OTMtLjcxLTIuMTI3LS4yNjItMy4yMTJjLjQ1LTEuMDg0IDEuMzU3LTEuNzgxIDIuNDU3LTIuMDg2Yy4wMDQtLjE0LjAwNC0uMjggMC0uNDJjLTEuMS0uMzA1LTIuMDA3LTEuMDAyLTIuNDU3LTIuMDg2Yy0uNDQ5LTEuMDg1LS4zLTIuMjIuMjYyLTMuMjEyYTcuOTM1IDcuOTM1IDAgMCAwLS4yOTctLjI5N2MtLjk5My41NjItMi4xMjcuNzEtMy4yMTIuMjYyQzEzLjIxMiA2LjAwNyAxMi41MTUgNS4xIDEyLjIxIDRhNy45MzUgNy45MzUgMCAwIDAtLjQyIDBjLS4zMDUgMS4xLTEuMDAyIDIuMDA3LTIuMDg2IDIuNDU3Yy0xLjA4NS40NDktMi4yMi4zLTMuMjEyLS4yNjJhNi45MzIgNi45MzIgMCAwIDAtLjI5Ny4yOTdjLjU2Mi45OTMuNzEgMi4xMjcuMjYyIDMuMjEyQzYuMDA3IDEwLjc4OCA1LjEgMTEuNDg1IDQgMTEuNzljLS4wMDQuMTQtLjAwNC4yOCAwIC40MnpNMTIgMTVhMyAzIDAgMSAxIDAtNmEzIDMgMCAwIDEgMCA2em0wLTJhMSAxIDAgMSAwIDAtMmExIDEgMCAwIDAgMCAyeiI+PC9wYXRoPjwvc3ZnPg=="/>
        </a>
      </ant_design_vue_1.Popover>);
    },
});
//# sourceMappingURL=index.jsx.map