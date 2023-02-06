import { ExtractPropTypes, Plugin } from 'vue';
import { Label, Value, getRenderDetail, renderGridSearchFormGroup } from './tablegridlayout';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            className: string;
            style: import("vue").CSSProperties;
            innerClassName: string;
            innerStyle: import("vue").CSSProperties;
            bordered: boolean;
            data: import("./types").DataItem[];
            layout: string;
            density: string;
            parity: boolean;
        }> & Omit<Readonly<ExtractPropTypes<{
            className: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            style: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            innerClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            bordered: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            data: import("vue-types").VueTypeValidableDef<import("./types").DataItem[]> & {
                default: () => import("./types").DataItem[];
            };
            layout: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            density: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            parity: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "className" | "style" | "innerClassName" | "innerStyle" | "bordered" | "data" | "layout" | "density" | "parity">;
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
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            className: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            style: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            innerClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            bordered: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            data: import("vue-types").VueTypeValidableDef<import("./types").DataItem[]> & {
                default: () => import("./types").DataItem[];
            };
            layout: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            density: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            parity: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            className: string;
            style: import("vue").CSSProperties;
            innerClassName: string;
            innerStyle: import("vue").CSSProperties;
            bordered: boolean;
            data: import("./types").DataItem[];
            layout: string;
            density: string;
            parity: boolean;
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
    } & Readonly<ExtractPropTypes<{
        className: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        style: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        innerClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        bordered: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        data: import("vue-types").VueTypeValidableDef<import("./types").DataItem[]> & {
            default: () => import("./types").DataItem[];
        };
        layout: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        density: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        parity: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    innerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    innerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    bordered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    data: import("vue-types").VueTypeValidableDef<import("./types").DataItem[]> & {
        default: () => import("./types").DataItem[];
    };
    layout: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    density: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    parity: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    className: string;
    style: import("vue").CSSProperties;
    innerClassName: string;
    innerStyle: import("vue").CSSProperties;
    bordered: boolean;
    data: import("./types").DataItem[];
    layout: string;
    density: string;
    parity: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Label: typeof Label;
    readonly Value: typeof Value;
    readonly getRenderDetail: Partial<ExtractPropTypes<ReturnType<typeof getRenderDetail>>>;
    readonly renderGridSearchFormGroup: Partial<ExtractPropTypes<ReturnType<typeof renderGridSearchFormGroup>>>;
};
export default _default;
