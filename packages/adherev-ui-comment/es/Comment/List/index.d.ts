import { VNode } from 'vue';
import { ScrollLoadProps } from '../../types';
declare const _default: import("vue").DefineComponent<{
    isLoading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    hasMore: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    scrollLoadProps: import("vue-types").VueTypeValidableDef<ScrollLoadProps> & {
        default: () => ScrollLoadProps;
    };
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "loadMore"[], "loadMore", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isLoading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    hasMore: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    scrollLoadProps: import("vue-types").VueTypeValidableDef<ScrollLoadProps> & {
        default: () => ScrollLoadProps;
    };
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}>> & {
    onLoadMore?: ((...args: any[]) => any) | undefined;
}, {
    isLoading: boolean;
    hasMore: boolean;
    scrollLoadProps: ScrollLoadProps;
}>;
export default _default;
