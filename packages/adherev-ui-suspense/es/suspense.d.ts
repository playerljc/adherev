declare const _default: import("vue").DefineComponent<{
    reset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean; /**
         * renderDispatch
         * @param h
         */
    };
}, unknown, {
    isFirst: boolean;
    isFirstLoading: boolean;
}, {}, {
    /**
     * renderNormalFirstLoading
     */
    renderNormalFirstLoading(): JSX.Element;
    /**
     * renderFirstLoading
     * @param h
     */
    renderFirstLoading(): JSX.Element;
    /**
     * renderNormal
     * @param h
     */
    renderNormal(): JSX.Element;
    /**
     * renderDispatch
     * @param h
     */
    renderDispatch(): JSX.Element;
    /**
     * renderSuspense
     * @description - renderSuspense
     * @param h
     */
    renderSuspense(): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    reset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean; /**
         * renderDispatch
         * @param h
         */
    };
}>>, {
    reset: boolean;
}>;
/**
 * Suspense
 * @overview showLoading: boolean
 * @overview renderInner: VNode | null
 * @overview fetchData(): void
 */
export default _default;
