"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = {};
/**
 * Emitter
 */
exports.default = {
    /**
     * on
     * @param {string} type
     * @param {Function} handler
     */
    on: function (type, handler) {
        if (!events[type]) {
            events[type] = {
                handlers: [],
            };
        }
        events[type].handlers.push(handler);
    },
    /**
     * remove
     * @param {type} type
     * @param {Function} handler
     */
    remove: function (type, handler) {
        if (events[type]) {
            var index = events[type].handlers.findIndex(function (item) {
                return item === handler;
            });
            if (index !== -1) {
                events[type].handlers.splice(index, 1);
            }
        }
    },
    /**
     * trigger
     * @param {string} type
     * @param {Object} params
     */
    trigger: function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var result;
        if (events[type]) {
            events[type].handlers.forEach(function (handler) {
                result = handler.apply(void 0, params);
            });
        }
        return result;
    },
};
//# sourceMappingURL=emitter.js.map