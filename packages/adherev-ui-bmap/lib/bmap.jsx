"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-ignore
var adherev_ui_conditionalrender_1 = (0, tslib_1.__importDefault)(require("@baifendian/adherev-ui-conditionalrender"));
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var selectorPrefix = 'adhere-ui-bmap';
var loadGridIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUdJREFUeNrs2sENwyAQRcE4ckf0RBv04Z7ck30wFXBi/4wU5bScXhQk9hhj9B+xzu/7WjijvZ/b/Jbz/e83kE0AAkAACAABIAAEgAAQAAJAAAgAAVDYfA5ui+eY33R+BuA9PXO++QtwB0AACAABIAAEgAAQAAJAAAgAASAAqrIPED5vH8A+AO4ACAABIAAEgAAQAAJAAAgAASAABEBJ9gHC5+0D2AfAHQABIAAEgAAQAAJAAAgAASAABIAAKMk+QPi8fQD7ALgDIAAEgAAQAAJAAAgAASAABIAAEAAl2QcIn7cPYB8AdwAEgAAQAAJAAAgAASAABIAAEAACoCT7AOHz9gHsA+AOgAAQAAJAAAgAASAABIAAEAACQACUZB8gfN4+gH0A3AEQAAJAAAgAASAABIAAEAACQABUNV8D++I5nmM3nX8EGADa0U/2xPbBVwAAAABJRU5ErkJggg==';
var props = {
    ak: (0, vue_types_1.string)().def('bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp'),
    zoom: (0, vue_types_1.number)().def(5),
    center: (0, vue_types_1.object)().def(function () { return ({
        lon: 116.404,
        lat: 39.915,
    }); }).isRequired,
    config: (0, vue_types_1.object)().def(function () { return ({
        minZoom: 2,
        maxZoom: 20,
        enableHighResolution: true,
        enableAutoResize: true,
        enableMapClick: false,
    }); }),
    externalImportBMapScript: (0, vue_types_1.bool)().def(false),
};
exports.default = (0, vue_1.defineComponent)({
    name: 'adv-bmap',
    props: props,
    emits: ['onBMapInitReady', 'onBMapScriptReady'],
    setup: function (props, _a) {
        var emit = _a.emit, expose = _a.expose;
        var root = (0, vue_1.ref)(null);
        var isReady = false;
        var BMap;
        var map;
        var isLoad = false;
        (0, vue_1.onMounted)(function () {
            // 外部载入bmap.js
            if (props.externalImportBMapScript) {
                BMap = window.BMap;
                isReady = true;
                (0, vue_1.nextTick)(function () {
                    initMap();
                });
            }
            // 内部引入bmap.js
            else {
                importBMapJS().then(function (BMap) {
                    BMap = BMap;
                    window.BMap = BMap;
                    emit('onBMapScriptReady');
                    isReady = true;
                    (0, vue_1.nextTick)(function () {
                        initMap();
                    });
                });
            }
        });
        var importBMapJS = function () {
            function importReal(src) {
                return new Promise(function (resolve) {
                    var _a;
                    var script = document.createElement('script');
                    script.onload = function () {
                        resolve(window.BMap);
                    };
                    if (typeof src === 'string') {
                        script.src = src;
                    }
                    if (document) {
                        (_a = document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.appendChild(script);
                    }
                });
            }
            return new Promise(function (resolve) {
                var _a;
                var preWrite = document.write;
                document.write = function (html) {
                    var _a;
                    var el = document.createElement('div');
                    el.innerHTML = html;
                    var first = el.firstElementChild;
                    if ((first === null || first === void 0 ? void 0 : first.tagName.toLowerCase()) === 'script' &&
                        ((_a = first === null || first === void 0 ? void 0 : first.getAttribute('src')) === null || _a === void 0 ? void 0 : _a.indexOf('http://api.map.baidu.com')) !== -1) {
                        importReal(first.getAttribute('src')).then(function (res) {
                            resolve(res);
                        });
                    }
                    else {
                        preWrite(html);
                    }
                };
                var script = document.createElement('script');
                script.src = "http://api.map.baidu.com/api?v=3.0&ak=".concat(props.ak);
                (_a = document === null || document === void 0 ? void 0 : document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.appendChild(script);
            });
        };
        var initMap = function () {
            var _a, _b;
            map = new BMap.Map(root.value, (0, tslib_1.__assign)((0, tslib_1.__assign)({}, props.config), { enableMapClick: false }));
            initMapControl();
            map.centerAndZoom(new BMap.Point((_a = props.center) === null || _a === void 0 ? void 0 : _a.lon, (_b = props.center) === null || _b === void 0 ? void 0 : _b.lat), props.zoom);
            map.addEventListener('tilesloaded', function () {
                var _a;
                if (isLoad)
                    return;
                isLoad = true;
                var logoEl = document.querySelector('.anchorBL');
                logoEl && ((_a = logoEl === null || logoEl === void 0 ? void 0 : logoEl.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(logoEl));
                setTimeout(function () {
                    root.value.style.background = "url(\"".concat(loadGridIcon, "\") repeat #fff;");
                }, 2000);
            });
            emit('onBMapInitReady');
        };
        var initMapControl = function () {
            // 添加比例尺控件
            map.addControl(new BMap.NavigationControl());
            //开启鼠标滚轮缩放
            map.enableScrollWheelZoom(true);
            // this.map.disableScrollWheelZoom();
            // this.map.disableDoubleClickZoom();
            // this.map.disableKeyboard();
            // this.map.disableContinuousZoom();
            // this.map.disableAutoResize();
        };
        var getMap = function () { return map; };
        expose({
            getMap: getMap,
        });
        return function () { return (
        // @ts-ignore
        <adherev_ui_conditionalrender_1.default conditional={isReady}>
        {{
                // @ts-ignore
                default: function () { return <div class={selectorPrefix} ref={root}/>; },
                noMatch: function () { return <div>loading</div>; },
            }}
      </adherev_ui_conditionalrender_1.default>); };
    },
});
//# sourceMappingURL=bmap.jsx.map