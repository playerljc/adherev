/**
 * Emitter
 */
declare const _default: {
    /**
     * on
     * @param {string} type
     * @param {Function} handler
     */
    on(type: string, handler: Function): void;
    /**
     * remove
     * @param {type} type
     * @param {Function} handler
     */
    remove(type: string, handler: Function): void;
    /**
     * trigger
     * @param {string} type
     * @param {Object} params
     */
    trigger(type: string, ...params: any[]): any;
};
export default _default;
