import { Plugin } from 'vue';
import RevolvingItem from './item';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            classNameWrapper: string;
            wrapperStyle: import("vue").CSSProperties;
            speed: number;
            delay: number;
            direction: string;
            loop: boolean;
            stopOnLastSlide: boolean;
            listeners: object;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            classNameWrapper: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            wrapperStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            speed: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            delay: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            direction: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            loop: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            stopOnLastSlide: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            listeners: import("vue-types").VueTypeValidableDef<object> & {
                default: () => object;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "classNameWrapper" | "wrapperStyle" | "speed" | "delay" | "direction" | "loop" | "stopOnLastSlide" | "listeners">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            classNameWrapper: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            wrapperStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            speed: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            delay: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            direction: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            loop: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            stopOnLastSlide: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            listeners: import("vue-types").VueTypeValidableDef<object> & {
                default: () => object;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            classNameWrapper: string;
            wrapperStyle: import("vue").CSSProperties;
            speed: number;
            delay: number;
            direction: string;
            loop: boolean;
            stopOnLastSlide: boolean;
            listeners: object;
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
        classNameWrapper: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        wrapperStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        speed: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        delay: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        loop: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        stopOnLastSlide: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        listeners: import("vue-types").VueTypeValidableDef<object> & {
            default: () => object;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    classNameWrapper: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapperStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    speed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    delay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loop: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    stopOnLastSlide: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    listeners: import("vue-types").VueTypeValidableDef<object> & {
        default: () => object;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    classNameWrapper: string;
    wrapperStyle: import("vue").CSSProperties;
    speed: number;
    delay: number;
    direction: string;
    loop: boolean;
    stopOnLastSlide: boolean;
    listeners: object;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof RevolvingItem;
};
export default _default;
