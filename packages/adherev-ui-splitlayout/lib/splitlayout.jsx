"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adherev_ui_flexlayout_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-flexlayout"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var flexlayoutSelectorPrefix = adherev_ui_flexlayout_1.default.selectorPrefix;
var selectorPrefix = 'adherev-ui-splitlayout';
var directionProp = {
    horizontal: {
        page: 'pageX',
        dimension: 'width',
        offset: 'offsetWidth',
    },
    vertical: {
        page: 'pageY',
        dimension: 'height',
        offset: 'offsetHeight',
    },
};
/**
 * toPoint - 百分数转化为小数
 * @param percent
 */
function toPoint(percent) {
    var str = percent.replace('%', '');
    return Number.parseInt(str) / 100;
}
var splitLayoutProps = {
    maxSize: (0, vue_types_1.oneOfType)([(0, vue_types_1.string)(), (0, vue_types_1.number)()]).def('100%'),
    minSize: (0, vue_types_1.oneOfType)([(0, vue_types_1.string)(), (0, vue_types_1.number)()]).def(10),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-splitlayout',
    emits: ['canDrag', 'dragStarted', 'dragFinished', 'change'],
    props: splitLayoutProps,
    setup: function (props, _a) {
        var emit = _a.emit;
        var root = (0, vue_1.ref)();
        var direction = (0, vue_1.inject)('direction');
        var fixedEl = null;
        var autoEl = null;
        var containerEl = null;
        var isEnter = false;
        var isOut = false;
        var isDown = false;
        var isMove = false;
        var startVal = 0;
        var changeVal = 0;
        var changeBaseVal = 0;
        var fixedValue = 0;
        var maxDimension = 0;
        var situation = new Map([
            ["".concat(flexlayoutSelectorPrefix, "-fixed_").concat(flexlayoutSelectorPrefix, "-auto"), true],
            ["".concat(flexlayoutSelectorPrefix, "-auto_").concat(flexlayoutSelectorPrefix, "-fixed"), true],
        ]);
        var initEvents = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            // @ts-ignore
            (_a = root.value) === null || _a === void 0 ? void 0 : _a.removeEventListener('mouseenter', onMouseenter);
            // @ts-ignore
            (_b = root.value) === null || _b === void 0 ? void 0 : _b.removeEventListener('mousedown', onMousedown);
            // @ts-ignore
            (_c = root.value) === null || _c === void 0 ? void 0 : _c.removeEventListener('mouseout', onMouseout);
            // @ts-ignore
            (_d = root.value) === null || _d === void 0 ? void 0 : _d.removeEventListener('mousemove', onMousemove);
            // @ts-ignore
            (_e = root.value) === null || _e === void 0 ? void 0 : _e.removeEventListener('mouseup', onMouseup);
            // @ts-ignore
            fixedEl === null || fixedEl === void 0 ? void 0 : fixedEl.removeEventListener('mousemove', onMousemove);
            // @ts-ignore
            fixedEl === null || fixedEl === void 0 ? void 0 : fixedEl.removeEventListener('mouseout', onMouseout);
            // @ts-ignore
            fixedEl === null || fixedEl === void 0 ? void 0 : fixedEl.removeEventListener('mouseup', onMouseup);
            // @ts-ignore
            autoEl === null || autoEl === void 0 ? void 0 : autoEl.removeEventListener('mouseout', onMouseout);
            // @ts-ignore
            autoEl === null || autoEl === void 0 ? void 0 : autoEl.removeEventListener('mousemove', onMousemove);
            // @ts-ignore
            autoEl === null || autoEl === void 0 ? void 0 : autoEl.removeEventListener('mouseup', onMouseup);
            // @ts-ignore
            containerEl === null || containerEl === void 0 ? void 0 : containerEl.removeEventListener('mouseleave', onMouseleave);
            // @ts-ignore
            (_f = root.value) === null || _f === void 0 ? void 0 : _f.addEventListener('mouseenter', onMouseenter);
            // @ts-ignore
            (_g = root.value) === null || _g === void 0 ? void 0 : _g.addEventListener('mousedown', onMousedown);
            // @ts-ignore
            (_h = root.value) === null || _h === void 0 ? void 0 : _h.addEventListener('mousemove', onMousemove);
            // @ts-ignore
            (_j = root.value) === null || _j === void 0 ? void 0 : _j.addEventListener('mouseout', onMouseout);
            // @ts-ignore
            (_k = root.value) === null || _k === void 0 ? void 0 : _k.addEventListener('mouseup', onMouseup);
            // @ts-ignore
            fixedEl === null || fixedEl === void 0 ? void 0 : fixedEl.addEventListener('mousemove', onMousemove);
            // @ts-ignore
            fixedEl === null || fixedEl === void 0 ? void 0 : fixedEl.addEventListener('mouseout', onMouseout);
            // @ts-ignore
            fixedEl === null || fixedEl === void 0 ? void 0 : fixedEl.addEventListener('mouseup', onMouseup);
            // @ts-ignore
            autoEl === null || autoEl === void 0 ? void 0 : autoEl.addEventListener('mousemove', onMousemove);
            // @ts-ignore
            autoEl === null || autoEl === void 0 ? void 0 : autoEl.addEventListener('mouseout', onMouseout);
            // @ts-ignore
            autoEl === null || autoEl === void 0 ? void 0 : autoEl.addEventListener('mouseup', onMouseup);
            // @ts-ignore
            containerEl === null || containerEl === void 0 ? void 0 : containerEl.addEventListener('mouseleave', onMouseleave);
        };
        var checked = function () {
            var _a = root.value, previousElementSibling = _a.previousElementSibling, nextElementSibling = _a.nextElementSibling;
            var keys = Array.from(situation.keys());
            return keys.some(function (key) {
                var arr = key.split('_');
                var prevKey = arr[0];
                var nextKey = arr[1];
                return ((previousElementSibling === null || previousElementSibling === void 0 ? void 0 : previousElementSibling.classList.contains(prevKey)) &&
                    (nextElementSibling === null || nextElementSibling === void 0 ? void 0 : nextElementSibling.classList.contains(nextKey)));
            });
        };
        var getFixedEl = function () {
            var _a, _b;
            var _c = root.value, previousElementSibling = _c.previousElementSibling, nextElementSibling = _c.nextElementSibling;
            return ((_b = (_a = previousElementSibling === null || previousElementSibling === void 0 ? void 0 : previousElementSibling.classList) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, "".concat(flexlayoutSelectorPrefix, "-fixed")))
                ? previousElementSibling
                : nextElementSibling;
        };
        var getAutoEl = function () {
            var _a, _b;
            var _c = root.value, previousElementSibling = _c.previousElementSibling, nextElementSibling = _c.nextElementSibling;
            return ((_b = (_a = previousElementSibling === null || previousElementSibling === void 0 ? void 0 : previousElementSibling.classList) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, "".concat(flexlayoutSelectorPrefix, "-auto")))
                ? previousElementSibling
                : nextElementSibling;
        };
        /**
         * getFixedElPosition
         */
        var getFixedElPosition = function () {
            var _a, _b;
            var previousElementSibling = root.value.previousElementSibling;
            return ((_b = (_a = previousElementSibling === null || previousElementSibling === void 0 ? void 0 : previousElementSibling.classList) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, "".concat(flexlayoutSelectorPrefix, "-fixed")))
                ? 'prev'
                : 'next';
        };
        /**
         * getMaxDimension
         */
        var getMaxDimension = function () {
            if (maxDimension) {
                return maxDimension;
            }
            var fixedEl = getFixedEl();
            console.log('fixedEl', fixedEl);
            var autoEl = getAutoEl();
            console.log('autoEl', autoEl);
            var offset = getProps().offset;
            // @ts-ignore
            maxDimension = fixedEl[offset] + autoEl[offset];
            console.log('offset', offset);
            console.log('fixedEl[offset]', fixedEl[offset]);
            console.log('autoEl[offset]', autoEl[offset]);
            console.log('maxDimension', maxDimension);
            return maxDimension;
        };
        /**
         * getResizeClass
         */
        var getResizeClass = function () {
            return direction === 'vertical' ? 'rowResize' : 'colResize';
        };
        /**
         * getProps
         */
        // @ts-ignore
        var getProps = function () { return directionProp[direction]; };
        /**
         * getMaxSize
         */
        var getMaxSize = function () {
            var resultVal = 0;
            var maxDimension = getMaxDimension();
            if (typeof props.maxSize === 'string') {
                resultVal = maxDimension * toPoint(props.maxSize);
            }
            else if (typeof props.maxSize === 'number') {
                resultVal = props.maxSize;
            }
            return resultVal > maxDimension ? maxDimension : resultVal;
        };
        /**
         * getMinSize
         */
        var getMinSize = function () {
            var resultVal = 0;
            var maxDimension = getMaxDimension();
            var offset = getProps().offset;
            // @ts-ignore
            var elSize = root.value[offset];
            if (typeof props.minSize === 'string') {
                resultVal = maxDimension * toPoint(props.minSize);
            }
            else if (typeof props.minSize === 'number') {
                resultVal = props.minSize;
            }
            return resultVal < elSize ? elSize : resultVal;
        };
        var onMouseenter = function (e) {
            var _a;
            (_a = root.value) === null || _a === void 0 ? void 0 : _a.classList.add("".concat(selectorPrefix, "-").concat(getResizeClass()));
            isOut = false;
            isEnter = true;
            emit('canDrag', e);
        };
        var onMousedown = function (e) {
            var _a;
            (_a = root.value) === null || _a === void 0 ? void 0 : _a.classList.remove("".concat(selectorPrefix, "-").concat(getResizeClass()));
            if (isEnter) {
                isDown = true;
                startVal = e[getProps === null || getProps === void 0 ? void 0 : getProps().page];
                // @ts-ignore
                fixedValue = fixedEl === null || fixedEl === void 0 ? void 0 : fixedEl[getProps === null || getProps === void 0 ? void 0 : getProps().offset];
                emit('dragStarted', e);
            }
        };
        var onMouseup = function (e) {
            var _a;
            (_a = root.value) === null || _a === void 0 ? void 0 : _a.classList.add("".concat(selectorPrefix, "-").concat(getResizeClass()));
            if (isDown) {
                isDown = false;
                isMove = false;
                isEnter = !isOut;
                startVal = 0;
                changeBaseVal += changeVal;
                emit('dragFinished', e);
            }
        };
        var onMouseleave = function (e) {
            if (isDown) {
                isDown = false;
                isMove = false;
                isEnter = false;
                startVal = 0;
                changeBaseVal += changeVal;
                emit('dragFinished', e);
            }
        };
        var onMousemove = function (e) {
            if (isEnter && isDown) {
                isMove = true;
                // @ts-ignore
                var end = e[getProps().page];
                // console.log('end', end);
                changeVal = end - startVal;
                // console.log('startVal', startVal);
                // console.log('changeVal', changeVal);
                var position = getFixedElPosition();
                // console.log('position', position);
                var computedValue = position === 'prev' ? fixedValue + changeVal : fixedValue - changeVal;
                // console.log('computedValue', computedValue);
                var targetValue = void 0;
                var maxSize = getMaxSize();
                var minSize = getMinSize();
                // console.log('maxSize', maxSize);
                // console.log('minSize', minSize);
                if (computedValue >= maxSize || computedValue <= minSize) {
                    if (computedValue >= maxSize) {
                        targetValue = maxSize;
                    }
                    else {
                        if (computedValue <= minSize) {
                            targetValue = minSize;
                        }
                    }
                }
                else {
                    targetValue = computedValue;
                }
                // console.log('targetValue', targetValue);
                fixedEl.style[getProps().dimension] = "".concat(targetValue, "px");
                emit('change', e);
            }
        };
        var onMouseout = function (e) {
            isOut = true;
            if (!isDown) {
                isEnter = false;
                emit('change', e);
            }
        };
        (0, vue_1.onMounted)(function () {
            var _a;
            if (checked()) {
                fixedEl = getFixedEl();
                autoEl = getAutoEl();
                containerEl = (_a = root === null || root === void 0 ? void 0 : root.value) === null || _a === void 0 ? void 0 : _a.parentElement;
                containerEl === null || containerEl === void 0 ? void 0 : containerEl.classList.add("".concat(selectorPrefix, "-noSelect"));
                initEvents();
            }
        });
        (0, vue_1.onUpdated)(function () {
            if (checked()) {
                isEnter = false;
                isOut = false;
                isDown = false;
                isMove = false;
                startVal = 0;
                changeVal = 0;
                changeBaseVal = 0;
                fixedValue = 0;
                maxDimension = 0;
                fixedEl = getFixedEl();
                autoEl = getAutoEl();
                initEvents();
            }
        });
        return function () {
            return (<div 
            // @ts-ignore
            ref={root} class={(0, classnames_1.default)(selectorPrefix, "".concat(selectorPrefix, "-").concat(direction))}/>);
        };
    },
});
//# sourceMappingURL=splitlayout.jsx.map