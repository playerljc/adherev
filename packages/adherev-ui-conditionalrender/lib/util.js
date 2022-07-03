"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deal = void 0;
function deal(_a) {
    var _b;
    var conditional = _a.conditional, rule = _a.rule, ruleVisibleValue = _a.ruleVisibleValue, ruleHideValue = _a.ruleHideValue, slots = _a.slots;
    var defaultVNodes = (_b = slots === null || slots === void 0 ? void 0 : slots.default) === null || _b === void 0 ? void 0 : _b.call(slots).map(function (vNode) {
        if (!vNode.props) {
            vNode.props = {
                style: {},
            };
        }
        else if (!('style' in vNode.props)) {
            vNode.props.style = {};
        }
        vNode.props.style[rule] = conditional ? ruleVisibleValue : ruleHideValue;
        return vNode;
    });
    var noMatchVNodes = null;
    if (slots.noMatch) {
        noMatchVNodes = slots.noMatch().map(function (vNode) {
            if (!vNode.props) {
                vNode.props = {
                    style: {},
                };
            }
            else if (!('style' in vNode.props)) {
                vNode.props.style = {};
            }
            vNode.props.style[rule] = conditional ? ruleHideValue : ruleVisibleValue;
            return vNode;
        });
    }
    return {
        defaultVNodes: defaultVNodes,
        noMatchVNodes: noMatchVNodes,
    };
}
exports.deal = deal;
//# sourceMappingURL=util.js.map