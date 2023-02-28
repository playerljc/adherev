import { VNode } from 'vue';
export declare const suspenseSyncProps: {
    data: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }>;
    isEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => boolean>;
    renderEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => VNode | null>;
};
/**
 * SuspenseSync
 * @description 传数据
 */
declare const SuspenseSync: import("vue").DefineComponent<{
    data: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }>;
    isEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => boolean>;
    renderEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => VNode | null>;
}, unknown, {
    loading: boolean;
    $isLoading: boolean;
}, {}, {
    showLoading(): any;
    renderInner(): any;
    resetSync(): Promise<void>;
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
    data: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }>;
    isEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => boolean>;
    renderEmpty: import("vue-types").VueTypeValidableDef<(params?: any) => VNode | null>;
}>>, {}>;
export default SuspenseSync;
