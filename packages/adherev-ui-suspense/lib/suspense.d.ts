import Vue, { VNode } from 'vue';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    isFirst: boolean;
    isFirstLoading: boolean;
}, {
    /**
     * renderNormalFirstLoading
     */
    renderNormalFirstLoading(h: any): VNode | null;
    /**
     * renderFirstLoading
     * @param h
     */
    renderFirstLoading(h: any): VNode | null;
    /**
     * renderNormal
     * @param h
     */
    renderNormal(h: VNode | null): any;
    /**
     * renderDispatch
     * @param h
     */
    renderDispatch(h: any): any;
    /**
     * renderSuspense
     * @description - renderSuspense
     * @param h
     */
    renderSuspense(h: any): any;
}, unknown, {
    reset: boolean;
}>;
/**
 * Suspense
 * @overview showLoading: boolean
 * @overview renderInner: VNode | null
 * @overview fetchData(): void
 */
export default _default;
