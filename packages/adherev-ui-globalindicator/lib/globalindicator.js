"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var adherev_util_resource_1 = __importDefault(require("@baifendian/adherev-util-resource"));
var selectorPrefix = 'adherev-ui-globalindicator';
var MAX_ZINDEX = adherev_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value;
exports.default = {
    /**
     * show
     * @return {HTMLElement}
     * @param parent
     * @param text
     * @param zIndex
     */
    show: function (parent, text, zIndex) {
        if (parent === void 0) { parent = document.body; }
        if (text === void 0) { text = ''; }
        if (zIndex === void 0) { zIndex = MAX_ZINDEX; }
        var el = document.createElement('div');
        el.innerHTML = "\n      <div class=\"" + selectorPrefix + "\" style=\"z-index: " + (zIndex || MAX_ZINDEX) + "\">\n       <span class=\"" + selectorPrefix + "-dot\"><i></i><i></i><i></i><i></i></span>\n       <div class=\"" + selectorPrefix + "-text\">" + text + "</div>\n      </div>";
        var indicatorDom = el.firstElementChild;
        if (parent === document.body) {
            indicatorDom.style.position = 'fixed';
        }
        parent.appendChild(indicatorDom);
        return indicatorDom;
    },
    /**
     * hide
     * @param indicatorDom
     */
    hide: function (indicatorDom) {
        if (indicatorDom) {
            indicatorDom.parentElement.removeChild(indicatorDom);
        }
    },
};
