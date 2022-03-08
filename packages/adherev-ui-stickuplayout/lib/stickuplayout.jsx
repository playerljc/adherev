"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-stickuplayout';
var stickupLayoutProps = {
    fixedClassName: (0, vue_types_1.string)().def(''),
    fixedStyle: (0, vue_types_1.object)().def({}),
    innerClassName: (0, vue_types_1.string)().def(''),
    innerStyle: (0, vue_types_1.object)().def({}),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-stickuplayout',
    props: stickupLayoutProps,
    setup: function (props, _a) {
        var slots = _a.slots, emit = _a.emit, expose = _a.expose;
        var root = (0, vue_1.ref)();
        var fixedEl = (0, vue_1.ref)();
        var innerEl = (0, vue_1.ref)();
        var key = false;
        var maskEl = null;
        var index = [];
        var headerEls;
        var preScrollObj = null;
        var initial = function () {
            var _a, _b, _c;
            key = false;
            index = [];
            headerEls = (_a = root.value) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".".concat(selectorPrefix, "-item-header"));
            createIndex();
            position();
            (_b = innerEl.value) === null || _b === void 0 ? void 0 : _b.removeEventListener('scroll', onScroll);
            (_c = innerEl.value) === null || _c === void 0 ? void 0 : _c.addEventListener('scroll', onScroll);
        };
        var createIndex = function () {
            var _a, _b, _c;
            var pre = 0;
            index = [];
            preScrollObj = null;
            for (var i = 0, len = headerEls.length; i < len; i++) {
                var header = headerEls[i];
                var rangeStart = pre;
                var rangeEnd = void 0;
                if (i !== len - 1) {
                    rangeEnd = headerEls[i + 1].offsetTop - header.offsetHeight;
                }
                else {
                    rangeEnd = (_a = innerEl.value) === null || _a === void 0 ? void 0 : _a.scrollHeight;
                }
                index.push({
                    start: rangeStart,
                    end: rangeEnd,
                    dom: header,
                    index: i,
                });
                pre = rangeEnd;
                if (pre >
                    ((_b = innerEl.value) === null || _b === void 0 ? void 0 : _b.scrollHeight) - ((_c = innerEl.value) === null || _c === void 0 ? void 0 : _c.offsetHeight)) {
                    break;
                }
            }
        };
        var position = function () {
            var _a;
            var val = (_a = innerEl.value) === null || _a === void 0 ? void 0 : _a.scrollTop;
            var low = 0, high = index.length - 1, middle, target;
            while (low <= high && low <= index.length - 1 && high <= index.length - 1) {
                middle = (high + low) >> 1;
                var targetVal = index[middle];
                if (val >= targetVal.start && val < targetVal.end) {
                    target = targetVal;
                    break;
                }
                else if (val < targetVal.start) {
                    high = middle - 1;
                }
                else {
                    low = middle + 1;
                }
            }
            if (target) {
                if (preScrollObj && preScrollObj.index === target.index) {
                    return false;
                }
                else {
                    preScrollObj = target;
                    fixedEl.value.innerHTML = target.dom.outerHTML;
                    emit('change', target.index);
                }
            }
        };
        var onScroll = function () { return position(); };
        var scrollAnimationTo = function (targetTop, duration) {
            var _a, _b, _c, _d;
            if (targetTop === void 0) { targetTop = 0; }
            if (duration === void 0) { duration = 300; }
            if (key)
                return;
            initMask();
            key = true;
            maskEl.style.display = 'block';
            var srcTop = (_a = innerEl.value) === null || _a === void 0 ? void 0 : _a.scrollTop;
            var scrollVal = srcTop;
            /**
             * 一次滚动的步进
             * @type {number}
             */
            var setp = ((_b = innerEl.value) === null || _b === void 0 ? void 0 : _b.scrollHeight) /
                // @ts-ignore
                (duration / (((_c = window.screen) === null || _c === void 0 ? void 0 : _c.updateInterval) || 16.7) +
                    // @ts-ignore
                    (duration % (((_d = window.screen) === null || _d === void 0 ? void 0 : _d.updateInterval) || 16.7) !== 0 ? 1 : 0));
            /** *
             * 动画的滚动
             */
            function scrollAnimation() {
                if (srcTop < targetTop) {
                    if (scrollVal + setp > targetTop) {
                        scrollVal = targetTop;
                    }
                    else {
                        scrollVal += setp;
                    }
                }
                else if (scrollVal - setp < targetTop) {
                    scrollVal = targetTop;
                }
                else {
                    scrollVal -= setp;
                }
                innerEl.value.scrollTop = scrollVal;
                if (srcTop < targetTop) {
                    if (scrollVal >= targetTop) {
                        clear();
                    }
                    else {
                        if (typeof window !== 'undefined')
                            window.requestAnimationFrame(scrollAnimation);
                    }
                }
                else if (scrollVal <= targetTop) {
                    clear();
                }
                else {
                    if (typeof window !== 'undefined')
                        window.requestAnimationFrame(scrollAnimation);
                }
                function clear() {
                    key = false;
                    maskEl.style.display = 'none';
                }
            }
            /** *
             * 滚动core
             */
            window.requestAnimationFrame(scrollAnimation);
        };
        var scrollTo = function (item, duration) {
            if (duration === void 0) { duration = 300; }
            var targetTop = item.start + headerEls[item.index].offsetHeight;
            if (duration === 0) {
                innerEl.value.scrollTop = targetTop;
            }
            else {
                scrollAnimationTo(targetTop, duration);
            }
        };
        var initMask = function () {
            if (!maskEl) {
                maskEl = document.createElement('div');
                maskEl.className = "".concat(selectorPrefix, "-mask");
                window.document.body.appendChild(maskEl);
            }
        };
        var refresh = function () { return initial(); };
        /**
         * scrollToByIndex
         * @param {number} _index
         * @param {number} duration
         * @return {boolean}
         */
        var scrollToByIndex = function (_index, duration) {
            if (duration === void 0) { duration = 300; }
            var i = 0, item;
            for (; i < index.length; i++) {
                if (index[i].index === _index) {
                    item = index[i];
                    break;
                }
            }
            if (!item)
                return false;
            scrollTo(item, duration);
        };
        /**
         * scrollToByHeaderEl
         * @param {HtmlElement} headerEl
         * @param {number} duration
         * @return {boolean}
         */
        var scrollToByHeaderEl = function (headerEl, duration) {
            if (duration === void 0) { duration = 300; }
            var i = 0, item, _index = -1;
            for (; i < index.length; i++) {
                if (index[i].dom === headerEl) {
                    item = index[i];
                    _index = i;
                    break;
                }
            }
            if (!item)
                return false;
            scrollTo(item, duration);
        };
        expose({
            refresh: refresh,
            scrollToByIndex: scrollToByIndex,
            scrollToByHeaderEl: scrollToByHeaderEl,
        });
        (0, vue_1.onMounted)(function () {
            initial();
        });
        (0, vue_1.onUpdated)(function () {
            initial();
        });
        (0, vue_1.onBeforeMount)(function () {
            var _a, _b;
            if (maskEl) {
                (_b = (_a = maskEl === null || maskEl === void 0 ? void 0 : maskEl.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild) === null || _b === void 0 ? void 0 : _b.call(_a, maskEl);
            }
        });
        return function () {
            var _a;
            return (<div class={selectorPrefix} 
            // @ts-ignore
            ref={root}>
        <div class={(0, classnames_1.default)("".concat(selectorPrefix, "-fixed"), props.fixedClassName.split(/\s+/))} style={props.fixedStyle} 
            // @ts-ignore
            ref={fixedEl}/>
        <div class={(0, classnames_1.default)("".concat(selectorPrefix, "-inner"), props.innerClassName.split(/\s+/))} style={props.innerStyle} 
            // @ts-ignore
            ref={innerEl}>
          {(_a = slots === null || slots === void 0 ? void 0 : slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)}
        </div>
      </div>);
        };
    },
});
//# sourceMappingURL=stickuplayout.jsx.map