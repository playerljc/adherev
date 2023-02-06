import { VNode } from 'vue';
export declare const suspenseProps: {
    reset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
};
/**
 * Suspense
 * @overview showLoading: boolean
 * @overview renderInner: VNode | null
 * @overview fetchData(): void
 */
declare const _default: import("vue").DefineComponent<{
    reset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}, unknown, {
    isFirst: boolean;
    isFirstLoading: boolean;
}, {}, {
    /**
     * renderNormalFirstLoading
     */
    $renderNormalFirstLoading(): JSX.Element;
    /**
     * renderFirstLoading
     * @param h
     */
    $renderFirstLoading(): JSX.Element;
    /**
     * renderNormal
     * @param h
     */
    $renderNormal(): JSX.Element;
    /**
     * renderDispatch
     * @param h
     */
    $renderDispatch(): JSX.Element;
    /**
     * renderSuspense
     * @description - renderSuspense
     * @param h
     */
    $renderSuspense(): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    reset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}>>, {
    reset: boolean;
}>;
export default _default;
