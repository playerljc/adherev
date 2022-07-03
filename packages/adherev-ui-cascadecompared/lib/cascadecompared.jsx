"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_ui_stickuplayout_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-stickuplayout"));
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var iscroll_probe_1 = (0, tslib_1.__importDefault)(require("iscroll/build/iscroll-probe"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-cascadecompared';
var defaultCellWidth = 120;
/**
 * initTouch
 */
function initTouch() {
    function isPassive() {
        var supportsPassiveOption = false;
        try {
            // @ts-ignore
            addEventListener('test', null, Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassiveOption = true;
                },
            }));
        }
        catch (e) { }
        return supportsPassiveOption;
    }
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, isPassive()
        ? {
            capture: false,
            passive: false,
        }
        : false);
}
initTouch();
var props = {
    className: (0, vue_types_1.string)().def(''),
    indicatorClassName: (0, vue_types_1.string)().def(''),
    indicatorStyle: (0, vue_types_1.object)().def({}),
    indicatorFixedWrapClassName: (0, vue_types_1.string)().def(''),
    indicatorFixedWrapStyle: (0, vue_types_1.object)().def({}),
    indicatorAutoWrapClassName: (0, vue_types_1.string)().def(''),
    indicatorAutoWrapStyle: (0, vue_types_1.object)().def({}),
    masterClassName: (0, vue_types_1.string)().def(''),
    masterStyle: (0, vue_types_1.object)().def({}),
    masterInnerClassName: (0, vue_types_1.string)().def(''),
    masterInnerStyle: (0, vue_types_1.object)().def({}),
    masterStickFixedClassName: (0, vue_types_1.string)().def(''),
    masterStickFixedStyle: (0, vue_types_1.object)().def({}),
    masterStickInnerClassName: (0, vue_types_1.string)().def(''),
    masterStickInnerStyle: (0, vue_types_1.object)().def({}),
    indicator: (0, vue_types_1.object)().def(function () { return ({
        columns: [],
        dataSource: [],
    }); }),
    master: (0, vue_types_1.array)().def(function () { return []; }),
    defaultCellWidth: (0, vue_types_1.oneOfType)([(0, vue_types_1.number)(), (0, vue_types_1.string)()]).def(defaultCellWidth),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-cascadecompared',
    props: props,
    slots: ['title'],
    emits: ['stick-change'],
    setup: function (props, _a) {
        var emit = _a.emit, expose = _a.expose;
        var el = (0, vue_1.ref)(null);
        var stickup = (0, vue_1.ref)(null);
        var scrolls = [];
        var getIndicatorClassName = (0, vue_1.computed)(function () {
            return (0, classnames_1.default)("".concat(selectorPrefix, "-indicator"), (props.indicatorClassName || '').split(/\s+/));
        });
        var getFixedWrapClassName = (0, vue_1.computed)(function () { return function (className) {
            return (0, classnames_1.default)("".concat(selectorPrefix, "-fixedWrap"), (className || '').split(/\s+/));
        }; });
        var getFixedWrapStyle = (0, vue_1.computed)(function () { return function (style, width) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, style), { width: "".concat(width || defaultCellWidth, "px") })); }; });
        var getCellClassName = (0, vue_1.computed)(function () { return function (column) {
            return (0, classnames_1.default)("".concat(selectorPrefix, "-cell"), ((column === null || column === void 0 ? void 0 : column.className) || '').split(/\s+/));
        }; });
        var getAutoWrapClassName = (0, vue_1.computed)(function () { return function (className) {
            return (0, classnames_1.default)("".concat(selectorPrefix, "-autoWrap"), (className || '').split(/\s+/));
        }; });
        var getAutoInnerClassName = (0, vue_1.computed)(function () { return function (className) {
            return (0, classnames_1.default)("".concat(selectorPrefix, "-autoInner"), (className || '').split(/\s+/));
        }; });
        var getMasterClassName = (0, vue_1.computed)(function () {
            return (0, classnames_1.default)("".concat(selectorPrefix, "-master"), (props.masterClassName || '').split(/\s+/));
        });
        var getMasterInnerClassName = (0, vue_1.computed)(function () {
            return (0, classnames_1.default)("".concat(selectorPrefix, "-master-inner"), (props.masterInnerClassName || '').split(/\s+/));
        });
        var getFixedClassName = (0, vue_1.computed)(function () {
            return (0, classnames_1.default)((props.masterStickFixedClassName || '').split(/\s+/));
        });
        var getInnerClassName = (0, vue_1.computed)(function () {
            return (0, classnames_1.default)((props.masterStickInnerClassName || '').split(/\s+/));
        });
        var initScroll = function () {
            var wrapEls = el.value.querySelectorAll(".".concat(selectorPrefix, "-autoWrap"));
            for (var i = 0; i < scrolls.length; i++) {
                scrolls[i].destroy();
            }
            scrolls = [];
            var _loop_1 = function (i) {
                var scroll_1 = new iscroll_probe_1.default(wrapEls[i], {
                    probeType: 3,
                    eventPassthrough: true,
                    scrollX: true,
                    scrollY: false,
                    preventDefault: false,
                });
                scrolls.push(scroll_1);
                scroll_1.on('scroll', function () {
                    for (var j = 0; j < scrolls.length; j++) {
                        if (scrolls[j] !== scroll_1) {
                            scrolls[j].scrollTo(scroll_1.x, scroll_1.y);
                        }
                    }
                });
            };
            for (var i = 0; i < wrapEls.length; i++) {
                _loop_1(i);
            }
        };
        var getFixedColumnConfig = function (columns) {
            var config = columns.find(function (t) { return t.isFixed; });
            if (config)
                return config;
            return columns.length ? columns[0] : null;
        };
        var renderCell = function (config, dataSource) {
            if (config.render) {
                return config.render(dataSource[config.dataIndex], dataSource);
            }
            return dataSource[config.dataIndex];
        };
        var renderMasterGroupTitle = function (title) {
            var _a, _b;
            return ((_a = adherev_util_1.default.isObject) === null || _a === void 0 ? void 0 : _a.call(adherev_util_1.default, title)) ? (<div>{(0, vue_1.h)(title)}</div>) : ((_b = adherev_util_1.default.isFunction) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, title)) ? (<div>{title()}</div>) : (<span>{title}</span>);
        };
        var renderMasterGroupContent = function (masterItem) {
            var _a = masterItem.dataSource, dataSource = _a === void 0 ? [] : _a, _b = masterItem.columns, columns = _b === void 0 ? [] : _b, _c = masterItem.fixedWrapClassName, fixedWrapClassName = _c === void 0 ? '' : _c, _d = masterItem.fixedWrapStyle, fixedWrapStyle = _d === void 0 ? {} : _d, _e = masterItem.autoWrapClassName, autoWrapClassName = _e === void 0 ? '' : _e, _f = masterItem.autoWrapStyle, autoWrapStyle = _f === void 0 ? {} : _f, _g = masterItem.autoInnerClassName, autoInnerClassName = _g === void 0 ? '' : _g, _h = masterItem.autoInnerStyle, autoInnerStyle = _h === void 0 ? {} : _h;
            var fixedColumnConfig = getFixedColumnConfig(columns);
            return (<>
          <div 
            // @ts-ignore
            class={getFixedWrapClassName.value(fixedWrapClassName)} style={getFixedWrapStyle.value(fixedWrapStyle, fixedColumnConfig ? fixedColumnConfig === null || fixedColumnConfig === void 0 ? void 0 : fixedColumnConfig.width : 0)}>
            {dataSource.map(function (record, index) { return (<div key={index} 
                // @ts-ignore
                class={"".concat(selectorPrefix, "-item")}>
                <div 
                // @ts-ignore
                class={getCellClassName.value(fixedColumnConfig)} style={fixedColumnConfig === null || fixedColumnConfig === void 0 ? void 0 : fixedColumnConfig.style}>
                  {renderCell(fixedColumnConfig, record)}
                </div>
              </div>); })}
          </div>
          <div 
            // @ts-ignore
            class={getAutoWrapClassName.value(autoWrapClassName)} style={autoWrapStyle}>
            <div 
            // @ts-ignore
            class={getAutoInnerClassName.value(autoInnerClassName)} style={autoInnerStyle}>
              {dataSource.map(function (record, index) { return (<div key={index} 
                // @ts-ignore
                class={"".concat(selectorPrefix, "-item")}>
                  {columns
                        .filter(function (column) { return column !== fixedColumnConfig; })
                        .map(function (column) { return (<div key={column.dataIndex} 
                    // @ts-ignore
                    class={getCellClassName.value(column)} style={getFixedWrapStyle.value(column.style, column === null || column === void 0 ? void 0 : column.width)}>
                        {renderCell(column, record)}
                      </div>); })}
                </div>); })}
            </div>
          </div>
        </>);
        };
        var renderMasterGroup = function (config, index) {
            var title = config.title, _a = config.className, className = _a === void 0 ? '' : _a, _b = config.style, style = _b === void 0 ? '' : _b;
            return (<adherev_ui_stickuplayout_1.default.Item key={index} class={(0, classnames_1.default)((className || '').split(/\s+/))} style={style}>
          {{
                    default: function () { return renderMasterGroupContent(config); },
                    title: function () { return renderMasterGroupTitle(title); },
                }}
        </adherev_ui_stickuplayout_1.default.Item>);
        };
        var renderIndicator = function () {
            var fixedColumnConfig = getFixedColumnConfig(props.indicator.columns);
            return (<div 
            // @ts-ignore
            class={getIndicatorClassName.value} style={props.indicatorStyle}>
          <div 
            // @ts-ignore
            class={getFixedWrapClassName.value(props.indicatorFixedWrapClassName)} style={getFixedWrapStyle.value(props.indicatorFixedWrapStyle, fixedColumnConfig ? fixedColumnConfig === null || fixedColumnConfig === void 0 ? void 0 : fixedColumnConfig.width : 0)}>
            <div 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-item")}>
              <div 
            // @ts-ignore
            class={getCellClassName.value(fixedColumnConfig)} style={fixedColumnConfig === null || fixedColumnConfig === void 0 ? void 0 : fixedColumnConfig.style}>
                {renderCell(fixedColumnConfig, props.indicator.dataSource)}
              </div>
            </div>
          </div>
          <div 
            // @ts-ignore
            class={getAutoWrapClassName.value(props.indicatorAutoWrapClassName)} style={props.indicatorAutoWrapStyle}>
            <div 
            // @ts-ignore
            class={"".concat(selectorPrefix, "-item")}>
              {props.indicator.columns
                    .filter(function (column) { return column !== fixedColumnConfig; })
                    .map(function (column) { return (<div key={column.dataIndex} 
                // @ts-ignore
                class={getCellClassName.value(column)} style={getFixedWrapStyle.value(column.style, column.width)}>
                    {renderCell(column, props.indicator.dataSource)}
                  </div>); })}
            </div>
          </div>
        </div>);
        };
        var renderMaster = function () {
            return (
            // @ts-ignore
            <div class={getMasterClassName.value} style={props.masterStyle}>
          {/*@ts-ignore*/}
          <adherev_ui_stickuplayout_1.default ref={stickup} class={getMasterInnerClassName.value} style={props.masterInnerStyle} fixedClassName={getFixedClassName.value} fixedStyle={props.masterStickFixedStyle} innerClassName={getInnerClassName.value} innerStyle={props.masterStickInnerStyle} onChange={function () {
                    emit('stick-change');
                }}>
            {props.master.map(function (config, index) { return renderMasterGroup(config, index); })}
          </adherev_ui_stickuplayout_1.default>
        </div>);
        };
        /**
         * scrollToByIndex
         * @param {number} index
         * @param {number} duration
         * @return {boolean}
         */
        var scrollToByIndex = function (index, duration) {
            if (duration === void 0) { duration = 300; }
            stickup.value.scrollToByIndex(index, duration);
        };
        /**
         * scrollToByHeaderEl
         * @param {HtmlElement} headerEl
         * @param {number} duration
         * @return {boolean}
         */
        var scrollToByHeaderEl = function (headerEl, duration) {
            if (duration === void 0) { duration = 300; }
            stickup.value.scrollToByHeaderEl(headerEl, duration);
        };
        /**
         * scrollToByColumn
         * @param {number} columnIndex
         */
        var scrollToByColumn = function (columnIndex) {
            var scroll = scrolls[0];
            var el = scroll.wrapper.querySelector(".".concat(selectorPrefix, "-item .").concat(selectorPrefix, "-cell:nth-of-type(").concat(columnIndex, ")"));
            scroll.scrollToElement(el);
        };
        (0, vue_1.onMounted)(function () {
            stickup.value.refresh();
            initScroll();
        });
        (0, vue_1.onUpdated)(function () {
            stickup.value.refresh();
            initScroll();
        });
        expose({
            scrollToByIndex: scrollToByIndex,
            scrollToByColumn: scrollToByColumn,
            scrollToByHeaderEl: scrollToByHeaderEl,
        });
        return function () { return (
        // @ts-ignore
        <div class={selectorPrefix} ref={el}>
        {renderIndicator()}
        {renderMaster()}
      </div>); };
    },
});
//# sourceMappingURL=cascadecompared.jsx.map