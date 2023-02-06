import { Plugin } from 'vue';
import { EMPTY, ERROR, NORMAL } from './scrollload';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            loadClassName: string;
            loadStyle: import("vue").CSSProperties;
            emptyClassName: string;
            emptyStyle: import("vue").CSSProperties;
            errorClassName: string;
            errorStyle: import("vue").CSSProperties;
            distance: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            loadClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            loadStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            emptyClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            emptyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            errorClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            errorStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            distance: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            getScrollContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
            renderLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderEmpty: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderError: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
        }>> & {
            onScrollBottom?: ((...args: any[]) => any) | undefined;
            onEmptyClick?: ((...args: any[]) => any) | undefined;
            onErrorClick?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "loadClassName" | "loadStyle" | "emptyClassName" | "emptyStyle" | "errorClassName" | "errorStyle" | "distance">;
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
        $emit: (event: "scrollBottom" | "emptyClick" | "errorClick", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            loadClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            loadStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            emptyClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            emptyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            errorClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            errorStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            distance: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            getScrollContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
            renderLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderEmpty: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderError: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
        }>> & {
            onScrollBottom?: ((...args: any[]) => any) | undefined;
            onEmptyClick?: ((...args: any[]) => any) | undefined;
            onErrorClick?: ((...args: any[]) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scrollBottom" | "emptyClick" | "errorClick")[], string, {
            loadClassName: string;
            loadStyle: import("vue").CSSProperties;
            emptyClassName: string;
            emptyStyle: import("vue").CSSProperties;
            errorClassName: string;
            errorStyle: import("vue").CSSProperties;
            distance: number;
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
        loadClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        loadStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        emptyClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        emptyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        errorClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        errorStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        distance: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        getScrollContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
        renderLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        renderEmpty: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        renderError: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    }>> & {
        onScrollBottom?: ((...args: any[]) => any) | undefined;
        onEmptyClick?: ((...args: any[]) => any) | undefined;
        onErrorClick?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    loadClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    emptyClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emptyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    errorClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    errorStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    distance: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    getScrollContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    renderLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderEmpty: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderError: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}>> & {
    onScrollBottom?: ((...args: any[]) => any) | undefined;
    onEmptyClick?: ((...args: any[]) => any) | undefined;
    onErrorClick?: ((...args: any[]) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scrollBottom" | "emptyClick" | "errorClick")[], "scrollBottom" | "emptyClick" | "errorClick", {
    loadClassName: string;
    loadStyle: import("vue").CSSProperties;
    emptyClassName: string;
    emptyStyle: import("vue").CSSProperties;
    errorClassName: string;
    errorStyle: import("vue").CSSProperties;
    distance: number;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly NORMAL: typeof NORMAL;
    readonly EMPTY: typeof EMPTY;
    readonly ERROR: typeof ERROR;
};
export default _default;
