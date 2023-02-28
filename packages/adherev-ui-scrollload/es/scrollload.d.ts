import { CSSProperties, VNode } from 'vue';
export declare const EMPTY = "empty";
export declare const ERROR = "error";
export declare const NORMAL = "normal";
export declare const scrollLoadProps: {
    loadClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    emptyClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emptyStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    errorClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    errorStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    distance: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    getScrollContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    renderLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderEmpty: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderError: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
};
declare const _default: import("vue").DefineComponent<{
    loadClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    emptyClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emptyStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    errorClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    errorStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    distance: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    getScrollContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    renderLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderEmpty: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderError: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scrollBottom" | "emptyClick" | "errorClick")[], "scrollBottom" | "emptyClick" | "errorClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    loadClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    emptyClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emptyStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    errorClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    errorStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    distance: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    getScrollContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    renderLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderEmpty: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderError: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}>> & {
    onScrollBottom?: ((...args: any[]) => any) | undefined;
    onEmptyClick?: ((...args: any[]) => any) | undefined;
    onErrorClick?: ((...args: any[]) => any) | undefined;
}, {
    loadClassName: string;
    loadStyle: CSSProperties;
    emptyClassName: string;
    emptyStyle: CSSProperties;
    errorClassName: string;
    errorStyle: CSSProperties;
    distance: number;
}>;
export default _default;
