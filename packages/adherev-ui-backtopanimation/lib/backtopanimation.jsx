"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_util_resource_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-util-resource"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adherev-ui-backtopanimation';
var props = {
    className: (0, vue_types_1.string)().def(''),
    zIndex: (0, vue_types_1.oneOfType)([vue_types_1.string, vue_types_1.number]).def(adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value),
    duration: (0, vue_types_1.integer)().def(300),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-backtopanimation',
    props: props,
    emits: ['trigger', 'scrollTop', 'target'],
    setup: function (props, _a) {
        var emit = _a.emit;
        var root = (0, vue_1.ref)();
        var scrollEl = null;
        var maskEl = null;
        var key = false;
        (0, vue_1.onMounted)(function () {
            renderMask();
            initScrollEvent();
        });
        (0, vue_1.onBeforeUnmount)(function () {
            var _a;
            if (maskEl) {
                try {
                    (_a = maskEl === null || maskEl === void 0 ? void 0 : maskEl.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(maskEl);
                }
                catch (e) { }
            }
        });
        var initScrollEvent = function () {
            emit('target', function (target) {
                scrollEl = target;
                if (!maskEl || !scrollEl)
                    return;
                scrollEl.addEventListener('scroll', function () {
                    if (!maskEl || !scrollEl || !root.value)
                        return;
                    if (scrollEl.scrollTop !== 0) {
                        root.value && (root.value.style.display = 'block');
                    }
                    else {
                        root.value && (root.value.style.display = 'none');
                    }
                }, false);
            });
        };
        var renderMask = function () {
            maskEl = document.body.querySelector(".".concat(selectorPrefix, "-mask"));
            if (!maskEl) {
                maskEl = document.createElement('div');
                maskEl.className = "".concat(selectorPrefix, "-mask");
                document.body.appendChild(maskEl);
            }
        };
        var trigger = function () {
            if (key)
                return;
            emit('trigger', function () {
                if (!maskEl || !scrollEl)
                    return;
                key = true;
                maskEl.style.display = 'block';
                var scrollVal = scrollEl.scrollTop;
                var targetTop = 0;
                // 一次滚动的步进
                var step = scrollEl.scrollHeight /
                    (props.duration / (screen.updateInterval || 16.7) +
                        (props.duration % (screen.updateInterval || 16.7) !== 0 ? 1 : 0));
                /**
                 * 动画的滚动
                 */
                function scrollAnimation() {
                    if (!maskEl || !scrollEl)
                        return;
                    if (scrollEl && scrollEl.scrollTop < targetTop) {
                        if (scrollVal + step > targetTop) {
                            scrollVal = targetTop;
                        }
                        else {
                            scrollVal += step;
                        }
                    }
                    else if (scrollVal - step < targetTop) {
                        scrollVal = targetTop;
                    }
                    else {
                        scrollVal -= step;
                    }
                    if (scrollEl) {
                        scrollEl.scrollTop = scrollVal;
                    }
                    emit('scrollTop', scrollVal);
                    if (scrollEl.scrollTop < targetTop) {
                        if (scrollVal >= targetTop) {
                            clear();
                        }
                        else {
                            window.requestAnimationFrame(scrollAnimation);
                        }
                    }
                    else if (scrollVal <= targetTop) {
                        clear();
                    }
                    else {
                        window.requestAnimationFrame(scrollAnimation);
                    }
                    function clear() {
                        if (!maskEl || !scrollEl)
                            return;
                        maskEl.style.display = 'none';
                        key = false;
                    }
                }
                window.requestAnimationFrame(scrollAnimation);
            });
        };
        return function () { return (<div 
        // @ts-ignore
        ref={root} class={selectorPrefix} onClick={function () {
                trigger();
            }}/>); };
    },
});
//# sourceMappingURL=backtopanimation.jsx.map