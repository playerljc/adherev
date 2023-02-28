import { Plugin } from 'vue';
import StickupLayoutItem from './item';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            fixedClassName: string;
            fixedStyle: import("vue").CSSProperties;
            innerClassName: string;
            innerStyle: import("vue").CSSProperties;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            fixedClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            fixedStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            innerClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "fixedClassName" | "fixedStyle" | "innerClassName" | "innerStyle">;
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
        $emit: (event: "change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            fixedClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            fixedStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            innerClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], string, {
            fixedClassName: string;
            fixedStyle: import("vue").CSSProperties;
            innerClassName: string;
            innerStyle: import("vue").CSSProperties;
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
        fixedClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        fixedStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        innerClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    fixedClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fixedStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    innerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", {
    fixedClassName: string;
    fixedStyle: import("vue").CSSProperties;
    innerClassName: string;
    innerStyle: import("vue").CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof StickupLayoutItem;
};
export default _default;
