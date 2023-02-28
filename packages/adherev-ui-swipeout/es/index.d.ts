import { Plugin } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            beforeClassName: string;
            beforeStyle: import("vue").CSSProperties;
            afterClassName: string;
            afterStyle: import("vue").CSSProperties;
            contentClassName: string;
            contentStyle: import("vue").CSSProperties;
            beforeShow: boolean;
            afterShow: boolean;
            direction: string;
            duration: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            beforeClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            beforeStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            afterClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            afterStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            contentClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            contentStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            beforeShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            afterShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            direction: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            duration: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            renderBefore: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderAfter: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
        }>> & {
            onInit?: ((...args: any[]) => any) | undefined;
            "onSlide-change-transition-start"?: ((...args: any[]) => any) | undefined;
            "onSlide-change-transition-end"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "beforeClassName" | "beforeStyle" | "afterClassName" | "afterStyle" | "contentClassName" | "contentStyle" | "beforeShow" | "afterShow" | "direction" | "duration">;
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
        $emit: (event: "init" | "slide-change-transition-start" | "slide-change-transition-end", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            beforeClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            beforeStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            afterClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            afterStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            contentClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            contentStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            beforeShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            afterShow: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            direction: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            duration: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            renderBefore: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderAfter: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
        }>> & {
            onInit?: ((...args: any[]) => any) | undefined;
            "onSlide-change-transition-start"?: ((...args: any[]) => any) | undefined;
            "onSlide-change-transition-end"?: ((...args: any[]) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("init" | "slide-change-transition-start" | "slide-change-transition-end")[], string, {
            beforeClassName: string;
            beforeStyle: import("vue").CSSProperties;
            afterClassName: string;
            afterStyle: import("vue").CSSProperties;
            contentClassName: string;
            contentStyle: import("vue").CSSProperties;
            beforeShow: boolean;
            afterShow: boolean;
            direction: string;
            duration: number;
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
        beforeClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        beforeStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        afterClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        afterStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        contentClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        contentStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        beforeShow: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        afterShow: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        duration: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        renderBefore: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        renderAfter: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    }>> & {
        onInit?: ((...args: any[]) => any) | undefined;
        "onSlide-change-transition-start"?: ((...args: any[]) => any) | undefined;
        "onSlide-change-transition-end"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    beforeClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    beforeStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    afterClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    afterStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    contentClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    contentStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    beforeShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    afterShow: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    duration: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    renderBefore: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderAfter: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
}>> & {
    onInit?: ((...args: any[]) => any) | undefined;
    "onSlide-change-transition-start"?: ((...args: any[]) => any) | undefined;
    "onSlide-change-transition-end"?: ((...args: any[]) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("init" | "slide-change-transition-start" | "slide-change-transition-end")[], "init" | "slide-change-transition-start" | "slide-change-transition-end", {
    beforeClassName: string;
    beforeStyle: import("vue").CSSProperties;
    afterClassName: string;
    afterStyle: import("vue").CSSProperties;
    contentClassName: string;
    contentStyle: import("vue").CSSProperties;
    beforeShow: boolean;
    afterShow: boolean;
    direction: string;
    duration: number;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
