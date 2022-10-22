import { VNode } from 'vue';
import { FlexLayoutProps, ListProps } from '../../types';
declare type dataKey = {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
};
declare const _default: import("vue").DefineComponent<{
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    flexLayoutProps: import("vue-types").VueTypeValidableDef<FlexLayoutProps> & {
        default: () => FlexLayoutProps;
    };
    listProps: import("vue-types").VueTypeValidableDef<ListProps> & {
        default: () => ListProps;
    };
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    fetchData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    dataKeys: import("vue-types").VueTypeValidableDef<dataKey> & {
        default: () => dataKey;
    };
    renderEmpty: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderList: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    flexLayoutProps: import("vue-types").VueTypeValidableDef<FlexLayoutProps> & {
        default: () => FlexLayoutProps;
    };
    listProps: import("vue-types").VueTypeValidableDef<ListProps> & {
        default: () => ListProps;
    };
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    fetchData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    dataKeys: import("vue-types").VueTypeValidableDef<dataKey> & {
        default: () => dataKey;
    };
    renderEmpty: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderList: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
}>>, {
    dataKeys: dataKey;
    limit: number;
    flexLayoutProps: FlexLayoutProps;
    listProps: ListProps;
}>;
export default _default;
