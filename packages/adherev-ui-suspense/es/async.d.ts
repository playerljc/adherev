import { VNode } from 'vue';
export declare const suspenseAsyncProps: {
    isEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => boolean>;
    renderEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => VNode | null>;
    fetchAsyncData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
};
/**
 * SuspenseAsync
 * @description 调用接口
 */
declare const SuspenseAsync: import("vue").DefineComponent<{
    isEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => boolean>;
    renderEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => VNode | null>;
    fetchAsyncData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
}, unknown, {
    loading: boolean;
}, {}, {
    showLoading(): any;
    renderInner(): any;
    resetAsync(): Promise<void>;
    fetchData(): Promise<void>;
}, import("vue").DefineComponent<{
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
    $renderNormalFirstLoading(): JSX.Element;
    $renderFirstLoading(): JSX.Element;
    $renderNormal(): JSX.Element;
    $renderDispatch(): JSX.Element;
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
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => boolean>;
    renderEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => VNode | null>;
    fetchAsyncData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
}>>, {}>;
export default SuspenseAsync;
