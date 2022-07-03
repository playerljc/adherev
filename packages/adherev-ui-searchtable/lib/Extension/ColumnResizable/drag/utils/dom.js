"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEvent = exports.addEvent = exports.getComputedSize = exports.matchesSelectorToParentElements = void 0;
var fns_1 = require("./fns");
function matchesSelectorToParentElements(el, selector, baseNode) {
    var node = el;
    var matchesSelectorFunc = [
        'matches',
        'webkitMatchesSelector',
        'mozMatchesSelector',
        'msMatchesSelector',
        'oMatchesSelector',
    ].find(function (func) { return (0, fns_1.isFunction)(node[func]); });
    // @ts-ignore
    if (!(0, fns_1.isFunction)(node[matchesSelectorFunc]))
        return false;
    do {
        // @ts-ignore
        if (node[matchesSelectorFunc](selector))
            return true;
        if (node === baseNode)
            return false;
        node = node.parentNode;
    } while (node);
    return false;
}
exports.matchesSelectorToParentElements = matchesSelectorToParentElements;
function getComputedSize($el) {
    var style = window.getComputedStyle($el);
    return [
        // @ts-ignore
        parseFloat(style.getPropertyValue('width'), 10),
        // @ts-ignore
        parseFloat(style.getPropertyValue('height'), 10),
    ];
}
exports.getComputedSize = getComputedSize;
function addEvent(el, event, handler) {
    if (!el) {
        return;
    }
    if (el.attachEvent) {
        el.attachEvent('on' + event, handler);
    }
    else if (el.addEventListener) {
        el.addEventListener(event, handler, true);
    }
    else {
        el['on' + event] = handler;
    }
}
exports.addEvent = addEvent;
function removeEvent(el, event, handler) {
    if (!el) {
        return;
    }
    if (el.detachEvent) {
        el.detachEvent('on' + event, handler);
    }
    else if (el.removeEventListener) {
        el.removeEventListener(event, handler, true);
    }
    else {
        el['on' + event] = null;
    }
}
exports.removeEvent = removeEvent;
//# sourceMappingURL=dom.js.map