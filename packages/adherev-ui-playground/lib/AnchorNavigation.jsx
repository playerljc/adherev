"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anchorNavigationProps = void 0;
var tslib_1 = require("tslib");
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var adherev_util_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectPrefix = 'adherev-ui-playground-anchor-navigation';
exports.anchorNavigationProps = {
    defaultActiveAnchor: (0, vue_types_1.string)().def(''),
    anchors: (0, vue_types_1.array)().def([]),
    anchorPosition: (0, vue_types_1.object)().def({
        top: 77,
        width: 120,
    }),
    scrollEl: (0, vue_types_1.object)(),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-playground-anchor-navigation',
    props: exports.anchorNavigationProps,
    setup: function (props, _a) {
        var slots = _a.slots;
        var activeAnchor = (0, vue_1.ref)(props.defaultActiveAnchor);
        var anchorRef = (0, vue_1.ref)();
        var anchorDimensionIndex = [];
        var onHashChange = function () {
            activeAnchor.value = window.location.hash.substring(1);
        };
        var onWrapScroll = function () {
            var _a, _b, _c, _d, _e, _f;
            if (!props.scrollEl)
                return;
            var scrollTop = props.scrollEl.scrollTop;
            var anchor = findAnchorByScrollVal(scrollTop);
            if (anchor) {
                activeAnchor.value = anchor.anchor;
            }
            if (!anchorRef.value)
                return;
            if (scrollTop === 0) {
                (_c = (_b = (_a = anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.value) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.remove) === null || _c === void 0 ? void 0 : _c.call(_b, "".concat(selectPrefix, "-affix"));
            }
            else {
                (_f = (_e = (_d = anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.value) === null || _d === void 0 ? void 0 : _d.classList) === null || _e === void 0 ? void 0 : _e.add) === null || _f === void 0 ? void 0 : _f.call(_e, "".concat(selectPrefix, "-affix"));
                anchorRef.value.style.top = "".concat(props.anchorPosition.top, "px");
            }
        };
        var createAnchorDimensionIndex = function () {
            if (!props.scrollEl)
                return;
            var container = props.scrollEl;
            anchorDimensionIndex = [];
            props.anchors.forEach(function (_a, index) {
                var _b;
                var anchor = _a.anchor;
                var el = document.getElementById(anchor);
                if (!el)
                    return;
                var top = (_b = adherev_util_1.default.getTopUntil) === null || _b === void 0 ? void 0 : _b.call(adherev_util_1.default, { el: el, untilEl: container });
                var bottom;
                var entry = {
                    anchor: anchor,
                    range: {
                        top: top,
                        bottom: bottom,
                    },
                };
                anchorDimensionIndex.push(entry);
                if (index !== 0) {
                    anchorDimensionIndex[index - 1].range.bottom = top;
                }
                if (index === anchorDimensionIndex.length - 1) {
                    entry.range.bottom = top + el.offsetHeight;
                }
            });
        };
        var findAnchorByScrollVal = function (scrollVal) {
            return anchorDimensionIndex.find(function (anchorIndexItem) {
                // @ts-ignore
                return scrollVal >= anchorIndexItem.range.top && scrollVal <= anchorIndexItem.range.bottom;
            });
        };
        (0, vue_1.watch)(function () { return props.defaultActiveAnchor; }, function (newVal) { return (activeAnchor.value = newVal); });
        (0, vue_1.watch)(function () { return props.scrollEl; }, function (scrollEl, oldVal) {
            var _a, _b;
            (_a = oldVal === null || oldVal === void 0 ? void 0 : oldVal.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(oldVal, 'scroll', onWrapScroll);
            if (!scrollEl)
                return;
            createAnchorDimensionIndex();
            (_b = scrollEl === null || scrollEl === void 0 ? void 0 : scrollEl.addEventListener) === null || _b === void 0 ? void 0 : _b.call(scrollEl, 'scroll', onWrapScroll);
        });
        (0, vue_1.onMounted)(function () {
            if (typeof window === 'undefined')
                return;
            window.addEventListener('hashchange', onHashChange);
            if (props.scrollEl) {
                createAnchorDimensionIndex();
                props.scrollEl.addEventListener('scroll', onWrapScroll);
            }
        });
        (0, vue_1.onBeforeMount)(function () {
            window.removeEventListener('hashchange', onHashChange);
            if (!props.scrollEl)
                return;
            props.scrollEl.removeEventListener('scroll', onWrapScroll);
        });
        return function () {
            var _a;
            return (<div 
            // @ts-ignore
            class={selectPrefix}>
        <div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-auto")}>
          <div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-inner")}>
            {(_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)}
          </div>
        </div>

        {/*@ts-ignore*/}
        <adherev_ui_conditionalrender_1.default conditional={!!props.anchors.length}>
          <div 
            // @ts-ignore
            class={"".concat(selectPrefix, "-fixed")} style={{ width: "".concat(props.anchorPosition.width, "px") }}>
            <ul class={"".concat(selectPrefix, "-anchor")} 
            // @ts-ignore
            ref={anchorRef}>
              {props.anchors.map(function (anchor) { return (<li 
                // @ts-ignore
                class={anchor.anchor === activeAnchor.value ? "".concat(selectPrefix, "-active") : ''} title={anchor.name}>
                  <a href={"#".concat(anchor.anchor)}>{anchor.name}</a>
                </li>); })}
            </ul>
          </div>
        </adherev_ui_conditionalrender_1.default>
      </div>);
        };
    },
});
//# sourceMappingURL=AnchorNavigation.jsx.map