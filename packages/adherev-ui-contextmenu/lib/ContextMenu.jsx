"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var vue_types_1 = require("vue-types");
var Menu_1 = (0, tslib_1.__importDefault)(require("./Menu"));
var selectorPrefix = 'adherev-ui-contextmenu';
var props = {
    data: (0, vue_types_1.array)().def([]),
    config: (0, vue_types_1.object)().def(),
    el: (0, vue_types_1.object)().def(),
};
/**
 * ContextMenuComponent
 * @class ContextMenuComponent
 * @classdesc ContextMenuComponent
 */
var ContextMenuComponent = (0, vue_1.defineComponent)({
    props: props,
    setup: function (props, _a) {
        var expose = _a.expose;
        var menuIns = (0, vue_1.ref)(null);
        var context = (0, vue_1.reactive)({
            config: props.config,
            el: props.el,
        });
        var getStyle = (0, vue_1.computed)(function () { return ({
            zIndex: 9999 * 2,
        }); });
        (0, vue_1.onMounted)(function () { return mount(); });
        var onClick = function (e) {
            var _a, _b, _c;
            e.stopPropagation();
            (_c = (_b = (_a = props.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild) === null || _c === void 0 ? void 0 : _c.call(_b, props.el);
        };
        var onContextMenu = function (e) {
            var _a, _b, _c;
            e.preventDefault();
            (_c = (_b = (_a = props.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild) === null || _c === void 0 ? void 0 : _c.call(_b, props.el);
        };
        var mount = function () { return menuIns.value.mount(); };
        (0, vue_1.provide)('context', context);
        expose({
            mount: mount,
        });
        return function () { return (<div class={selectorPrefix} style={getStyle.value} 
        // @ts-ignore
        onClick={onClick} 
        // @ts-ignore
        onContextMenu={onContextMenu}>
        {/*@ts-ignore*/}
        <Menu_1.default data={props.data} className={props.config.className} style={props.config.style} ref={menuIns}/>
      </div>); };
    },
});
var ContextMenu = {
    /**
     * config
     * {
     *   name - {String} 名字
     *   icon - {String} 图标
     *   id - {String} 唯一的id
     *   disabled - {Boolean} 不可用
     *   separation - {Bolean} 分割线
     *   attribute - {Object} 自定义属性
     *   children - {Array<Object> 孩子
     * }
     *{
     *   width - {Number} 宽度
     *   x - {Number} 显示的x坐标 相对于body
     *   y - {Number} 现实的y坐标 相对于body
     *   maskClosable - {Boolean} 点击其他位置是否关闭菜单
     *   handler - {Function} 点击的事件句柄
     * }
     * @return {HTMLDivElement}
     * @param data
     * @param defaultConfig
     */
    open: function (data, defaultConfig) {
        var config = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, defaultConfig), { width: 200, maskClosable: true });
        var parentEl = document.createElement('div');
        document.body.appendChild(parentEl);
        var app = (0, vue_1.createApp)({
            setup: function () {
                var root = (0, vue_1.ref)(null);
                (0, vue_1.onMounted)(function () {
                    root.value.mount();
                });
                (0, vue_1.provide)('root', {
                    unmount: function () {
                        var _a, _b;
                        console.log('app', app, parentEl);
                        try {
                            // @ts-ignore
                            app.unmount();
                        }
                        catch (err) {
                            (_b = (_a = parentEl) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(parentEl);
                        }
                    },
                });
                // @ts-ignore
                return function () { return <ContextMenuComponent ref={root} data={data} config={config} el={parentEl}/>; };
            },
        }).mount(parentEl);
        return {
            vm: app,
            el: parentEl,
        };
    },
    /**
     * close
     * @param vm
     * @param el
     */
    close: function (_a) {
        var _b, _c;
        var vm = _a.vm, el = _a.el;
        try {
            vm.unmount();
        }
        catch (err) {
            (_c = (_b = el) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.removeChild(el);
        }
    },
};
exports.default = ContextMenu;
//# sourceMappingURL=ContextMenu.jsx.map