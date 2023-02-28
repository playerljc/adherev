import { VNode } from 'vue';
export declare const pullRefreshProps: {
    scrollClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    pullHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    isShowUpdateTime: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    updateTime: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    updateTimeFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadingAnimation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    renderIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCanLabel: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderLabel: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderLoadingAnimation: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
};
declare const _default: import("vue").DefineComponent<{
    scrollClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    pullHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    isShowUpdateTime: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    updateTime: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    updateTimeFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadingAnimation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    renderIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCanLabel: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderLabel: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderLoadingAnimation: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pull-start" | "pull-can-refresh" | "pull-bottom" | "pull-rebound" | "pull-refresh")[], "pull-start" | "pull-can-refresh" | "pull-bottom" | "pull-rebound" | "pull-refresh", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    scrollClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    pullHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    isShowUpdateTime: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    updateTime: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    updateTimeFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadingAnimation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    renderIcon: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCanLabel: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderLabel: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderLoadingAnimation: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}>> & {
    "onPull-start"?: ((...args: any[]) => any) | undefined;
    "onPull-can-refresh"?: ((...args: any[]) => any) | undefined;
    "onPull-bottom"?: ((...args: any[]) => any) | undefined;
    "onPull-rebound"?: ((...args: any[]) => any) | undefined;
    "onPull-refresh"?: ((...args: any[]) => any) | undefined;
}, {
    loadingAnimation: string;
    scrollClassName: string;
    pullHeight: number;
    isShowUpdateTime: boolean;
    updateTime: number;
    updateTimeFormat: string;
}>;
export default _default;
