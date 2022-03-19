"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var constant_1 = (0, tslib_1.__importDefault)(require("./constant"));
var PlayGround_1 = (0, tslib_1.__importDefault)(require("./PlayGround"));
var PlayGroundMulit_1 = (0, tslib_1.__importDefault)(require("./PlayGroundMulit"));
var PlayGroundTab_1 = (0, tslib_1.__importDefault)(require("./PlayGroundTab"));
var selectPrefix = 'adherev-ui-playground-code-box';
var codeBoxPanelProps = {
    title: (0, vue_types_1.oneOfType)([(0, vue_types_1.string)(), (0, vue_types_1.object)()]),
    extra: (0, vue_types_1.object)(),
    isShowExpandAllBtn: (0, vue_types_1.bool)().def(true),
    columnCount: (0, vue_types_1.number)().def(1),
    defaultExpandAll: (0, vue_types_1.bool)().def(false),
    config: (0, vue_types_1.array)().def([]),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-code-box-panel',
    props: codeBoxPanelProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        var activeAnchor = (0, vue_1.ref)('');
        var expandAll = (0, vue_1.ref)(props.defaultExpandAll);
        var expandLock = false;
        var column = (0, vue_1.computed)(function () {
            var column = [];
            if (props.columnCount != null) {
                column.length = props.columnCount;
            }
            column.fill(0);
            return column;
        });
        var onHashChange = function () {
            activeAnchor.value = window.location.hash.substring(1);
        };
        var renderPlayGround = function (columnIndex, index) {
            var _a;
            var _b = props.config[index], type = _b.type, childrenSlot = _b.childrenSlot, wrapSlot = _b.wrapSlot, id = _b.id, playGroundProps = (0, tslib_1.__rest)(_b, ["type", "childrenSlot", "wrapSlot", "id"]);
            var children = (
            // @ts-ignore
            <PlayGround_1.default {...playGroundProps} id={id} isActive={activeAnchor.value === id} defaultExpand={expandAll.value}>
          {/*@ts-ignore*/}
          <adherev_ui_conditionalrender_1.default conditional={!!slots[childrenSlot]}>
            {(_a = slots[childrenSlot]) === null || _a === void 0 ? void 0 : _a.call(slots, {
                    columnIndex: columnIndex,
                    index: index,
                    config: props.config,
                })}
          </adherev_ui_conditionalrender_1.default>
        </PlayGround_1.default>);
            return (
            // @ts-ignore
            <adherev_ui_conditionalrender_1.default conditional={!!slots[wrapSlot]}>
          {{
                    default: function () { var _a; return (_a = slots[wrapSlot]) === null || _a === void 0 ? void 0 : _a.call(slots, { columnIndex: columnIndex, index: index, config: props.config, children: children }); },
                    noMatch: function () { return children; },
                }}
        </adherev_ui_conditionalrender_1.default>);
        };
        var renderPlayGroundTab = function (columnIndex, index) {
            var _a;
            var _b = props.config[index], type = _b.type, childrenSlot = _b.childrenSlot, wrapSlot = _b.wrapSlot, id = _b.id, playGroundTabProps = (0, tslib_1.__rest)(_b, ["type", "childrenSlot", "wrapSlot", "id"]);
            var children = (
            // @ts-ignore
            <PlayGroundTab_1.default {...playGroundTabProps} id={id} isActive={activeAnchor.value === id} defaultExpand={expandAll.value}>
          {/*@ts-ignore*/}
          <adherev_ui_conditionalrender_1.default conditional={!!slots[childrenSlot]}>
            {(_a = slots[childrenSlot]) === null || _a === void 0 ? void 0 : _a.call(slots, {
                    columnIndex: columnIndex,
                    index: index,
                    config: props.config,
                })}
          </adherev_ui_conditionalrender_1.default>
        </PlayGroundTab_1.default>);
            return (
            // @ts-ignore
            <adherev_ui_conditionalrender_1.default conditional={!!slots[wrapSlot]}>
          {{
                    default: function () { var _a; return (_a = slots[wrapSlot]) === null || _a === void 0 ? void 0 : _a.call(slots, { columnIndex: columnIndex, index: index, config: props.config, children: children }); },
                    noMatch: function () { return children; },
                }}
        </adherev_ui_conditionalrender_1.default>);
        };
        var renderPlayGroundMulit = function (columnIndex, index) {
            var _a;
            var _b = props.config[index], type = _b.type, childrenSlot = _b.childrenSlot, wrapSlot = _b.wrapSlot, id = _b.id, playGroundProps = (0, tslib_1.__rest)(_b, ["type", "childrenSlot", "wrapSlot", "id"]);
            var children = (
            // @ts-ignore
            <PlayGroundMulit_1.default {...playGroundProps} id={id} isActive={activeAnchor.value === id} defaultExpand={expandAll.value}>
          {/*@ts-ignore*/}
          <adherev_ui_conditionalrender_1.default conditional={!!slots[childrenSlot]}>
            {(_a = slots[childrenSlot]) === null || _a === void 0 ? void 0 : _a.call(slots, {
                    columnIndex: columnIndex,
                    index: index,
                    config: props.config,
                })}
          </adherev_ui_conditionalrender_1.default>
        </PlayGroundMulit_1.default>);
            return (
            // @ts-ignore
            <adherev_ui_conditionalrender_1.default conditional={!!slots[wrapSlot]}>
          {{
                    default: function () { var _a; return (_a = slots[wrapSlot]) === null || _a === void 0 ? void 0 : _a.call(slots, { columnIndex: columnIndex, index: index, config: props.config, children: children }); },
                    noMatch: function () { return children; },
                }}
        </adherev_ui_conditionalrender_1.default>);
        };
        var renderMap = new Map([
            ['PlayGround', renderPlayGround],
            ['PlayGroundMulit', renderPlayGroundMulit],
            ['PlayGroundTab', renderPlayGroundTab],
        ]);
        (0, vue_1.watch)(expandAll, function () {
            expandLock = false;
        });
        (0, vue_1.watch)(function () { return props.defaultExpandAll; }, function (newValue) { return (expandAll.value = newValue); });
        (0, vue_1.onMounted)(function () {
            if (typeof window === 'undefined')
                return;
            window.addEventListener('hashchange', onHashChange);
        });
        (0, vue_1.onBeforeMount)(function () {
            if (typeof window === 'undefined')
                return;
            window.removeEventListener('hashchange', onHashChange);
        });
        return function () { return (<div 
        // @ts-ignore
        class={selectPrefix}>
        <div 
        // @ts-ignore
        class={"".concat(selectPrefix, "-header")}>
          {/*@ts-ignore*/}
          <adherev_ui_conditionalrender_1.default conditional={!!props.title}>
            <div 
        // @ts-ignore
        class={"".concat(selectPrefix, "-header-title")}>
              {props.title}
            </div>
          </adherev_ui_conditionalrender_1.default>

          <div 
        // @ts-ignore
        class={"".concat(selectPrefix, "-header-extra")}>
            {/*@ts-ignore*/}
            <adherev_ui_conditionalrender_1.default conditional={props.isShowExpandAllBtn}>
              {/*@ts-ignore**/}
              <adherev_ui_conditionalrender_1.default conditional={expandAll.value}>
                {{
                default: function () { return (<img 
                // @ts-ignore
                class={"".concat(selectPrefix, "-expand-code")} src={constant_1.default.CloseCodeAll} alt="" onClick={function () {
                        if (expandLock)
                            return;
                        expandLock = true;
                        expandAll.value = false;
                    }}/>); },
                noMatch: function () { return (<img 
                // @ts-ignore
                class={"".concat(selectPrefix, "-expand-code")} src={constant_1.default.ExpandCodeAll} alt="" onClick={function () {
                        if (expandLock)
                            return;
                        expandLock = true;
                        expandAll.value = true;
                    }}/>); },
            }}
              </adherev_ui_conditionalrender_1.default>
            </adherev_ui_conditionalrender_1.default>

            {/*@ts-ignore*/}
            <adherev_ui_conditionalrender_1.default conditional={!!props.extra}>{props.extra}</adherev_ui_conditionalrender_1.default>
          </div>
        </div>

        <div 
        // @ts-ignore
        class={"".concat(selectPrefix, "-main")}>
          {column.value.map(function (_, columnIndex) { return (<div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-column")}>
              {props.config.map(function (item, index) {
                    var _a;
                    if (index % props.columnCount === columnIndex) {
                        return (<div 
                        // @ts-ignore
                        class={"".concat(selectPrefix, "-item")} key={item.id}>
                      {(_a = renderMap === null || renderMap === void 0 ? void 0 : renderMap.get(item.type)) === null || _a === void 0 ? void 0 : _a(columnIndex, index)}
                    </div>);
                    }
                    return null;
                })}
            </div>); })}
        </div>
      </div>); };
    },
});
//# sourceMappingURL=CodeBoxPanel.jsx.map