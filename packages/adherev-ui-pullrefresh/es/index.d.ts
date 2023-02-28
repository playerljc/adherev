import { Plugin } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            loadingAnimation: string;
            scrollClassName: string;
            pullHeight: number;
            isShowUpdateTime: boolean;
            updateTime: number;
            updateTimeFormat: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
            renderIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderCanLabel: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderLabel: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderLoadingAnimation: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
        }>> & {
            "onPull-start"?: ((...args: any[]) => any) | undefined;
            "onPull-can-refresh"?: ((...args: any[]) => any) | undefined;
            "onPull-bottom"?: ((...args: any[]) => any) | undefined;
            "onPull-rebound"?: ((...args: any[]) => any) | undefined;
            "onPull-refresh"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "loadingAnimation" | "scrollClassName" | "pullHeight" | "isShowUpdateTime" | "updateTime" | "updateTimeFormat">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: "pull-start" | "pull-can-refresh" | "pull-bottom" | "pull-rebound" | "pull-refresh", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            renderIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderCanLabel: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderLabel: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderLoadingAnimation: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
        }>> & {
            "onPull-start"?: ((...args: any[]) => any) | undefined;
            "onPull-can-refresh"?: ((...args: any[]) => any) | undefined;
            "onPull-bottom"?: ((...args: any[]) => any) | undefined;
            "onPull-rebound"?: ((...args: any[]) => any) | undefined;
            "onPull-refresh"?: ((...args: any[]) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pull-start" | "pull-can-refresh" | "pull-bottom" | "pull-rebound" | "pull-refresh")[], string, {
            loadingAnimation: string;
            scrollClassName: string;
            pullHeight: number;
            isShowUpdateTime: boolean;
            updateTime: number;
            updateTimeFormat: string;
        }, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
        renderIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        renderCanLabel: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        renderLabel: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        renderLoadingAnimation: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    }>> & {
        "onPull-start"?: ((...args: any[]) => any) | undefined;
        "onPull-can-refresh"?: ((...args: any[]) => any) | undefined;
        "onPull-bottom"?: ((...args: any[]) => any) | undefined;
        "onPull-rebound"?: ((...args: any[]) => any) | undefined;
        "onPull-refresh"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    renderIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCanLabel: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderLabel: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderLoadingAnimation: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}>> & {
    "onPull-start"?: ((...args: any[]) => any) | undefined;
    "onPull-can-refresh"?: ((...args: any[]) => any) | undefined;
    "onPull-bottom"?: ((...args: any[]) => any) | undefined;
    "onPull-rebound"?: ((...args: any[]) => any) | undefined;
    "onPull-refresh"?: ((...args: any[]) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pull-start" | "pull-can-refresh" | "pull-bottom" | "pull-rebound" | "pull-refresh")[], "pull-start" | "pull-can-refresh" | "pull-bottom" | "pull-rebound" | "pull-refresh", {
    loadingAnimation: string;
    scrollClassName: string;
    pullHeight: number;
    isShowUpdateTime: boolean;
    updateTime: number;
    updateTimeFormat: string;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
