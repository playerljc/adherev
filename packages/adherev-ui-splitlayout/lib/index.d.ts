import { Plugin } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            maxSize: string | number;
            minSize: string | number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            maxSize: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            minSize: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
        }>> & {
            onCanDrag?: ((...args: any[]) => any) | undefined;
            onDragStarted?: ((...args: any[]) => any) | undefined;
            onDragFinished?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "maxSize" | "minSize">;
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
        $emit: (event: "canDrag" | "dragStarted" | "dragFinished" | "change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            maxSize: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
            minSize: import("vue-types").VueTypeDef<string | number> & {
                default: string | number;
            };
        }>> & {
            onCanDrag?: ((...args: any[]) => any) | undefined;
            onDragStarted?: ((...args: any[]) => any) | undefined;
            onDragFinished?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("canDrag" | "dragStarted" | "dragFinished" | "change")[], string, {
            maxSize: string | number;
            minSize: string | number;
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
        maxSize: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        minSize: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
    }>> & {
        onCanDrag?: ((...args: any[]) => any) | undefined;
        onDragStarted?: ((...args: any[]) => any) | undefined;
        onDragFinished?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    maxSize: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    minSize: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
}>> & {
    onCanDrag?: ((...args: any[]) => any) | undefined;
    onDragStarted?: ((...args: any[]) => any) | undefined;
    onDragFinished?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("canDrag" | "dragStarted" | "dragFinished" | "change")[], "canDrag" | "dragStarted" | "dragFinished" | "change", {
    maxSize: string | number;
    minSize: string | number;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
