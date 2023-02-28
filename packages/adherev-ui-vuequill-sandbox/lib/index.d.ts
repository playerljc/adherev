declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            wrapClassName: string;
            wrapStyle: CSSProperties;
            quillStyle: string;
            className: string;
            formats: string[];
            style: CSSProperties;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            wrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
                default: any;
            };
            quillStyle: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            bounds: import("vue-types").VueTypeDef<string | HTMLElement>;
            className: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            defaultValue: {
                type: import("vue").PropType<import("react-quill").Value>;
            };
            formats: import("vue-types").VueTypeValidableDef<string[]> & {
                default: () => string[];
            };
            id: import("vue-types").VueTypeValidableDef<string>;
            modules: import("vue-types").VueTypeValidableDef<import("quill").StringMap>;
            placeholder: import("vue-types").VueTypeValidableDef<string>;
            preserveWhitespace: import("vue-types").VueTypeValidableDef<boolean>;
            readOnly: import("vue-types").VueTypeValidableDef<boolean>;
            scrollingContainer: import("vue-types").VueTypeDef<string | number>;
            style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
                default: any;
            };
            tabIndex: import("vue-types").VueTypeValidableDef<number>;
            theme: import("vue-types").VueTypeValidableDef<string>;
            value: {
                type: import("vue").PropType<import("react-quill").Value>;
            };
            onChange: import("vue-types").VueTypeValidableDef<(value: string, delta: import("quill").DeltaStatic, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
            onChangeSelection: import("vue-types").VueTypeValidableDef<(selection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
            onFocus: import("vue-types").VueTypeValidableDef<(selection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
            onBlur: import("vue-types").VueTypeValidableDef<(previousSelection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
            onKeyDown: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
            onKeyPress: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
            onKeyUp: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "wrapClassName" | "wrapStyle" | "quillStyle" | "className" | "formats" | "style">;
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
            wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            wrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
                default: any;
            };
            quillStyle: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            bounds: import("vue-types").VueTypeDef<string | HTMLElement>;
            className: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            defaultValue: {
                type: import("vue").PropType<import("react-quill").Value>;
            };
            formats: import("vue-types").VueTypeValidableDef<string[]> & {
                default: () => string[];
            };
            id: import("vue-types").VueTypeValidableDef<string>;
            modules: import("vue-types").VueTypeValidableDef<import("quill").StringMap>;
            placeholder: import("vue-types").VueTypeValidableDef<string>;
            preserveWhitespace: import("vue-types").VueTypeValidableDef<boolean>;
            readOnly: import("vue-types").VueTypeValidableDef<boolean>;
            scrollingContainer: import("vue-types").VueTypeDef<string | number>;
            style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
                default: any;
            };
            tabIndex: import("vue-types").VueTypeValidableDef<number>;
            theme: import("vue-types").VueTypeValidableDef<string>;
            value: {
                type: import("vue").PropType<import("react-quill").Value>;
            };
            onChange: import("vue-types").VueTypeValidableDef<(value: string, delta: import("quill").DeltaStatic, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
            onChangeSelection: import("vue-types").VueTypeValidableDef<(selection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
            onFocus: import("vue-types").VueTypeValidableDef<(selection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
            onBlur: import("vue-types").VueTypeValidableDef<(previousSelection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
            onKeyDown: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
            onKeyPress: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
            onKeyUp: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            wrapClassName: string;
            wrapStyle: CSSProperties;
            quillStyle: string;
            className: string;
            formats: string[];
            style: CSSProperties;
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
        wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        wrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
            default: any;
        };
        quillStyle: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        bounds: import("vue-types").VueTypeDef<string | HTMLElement>;
        className: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        defaultValue: {
            type: import("vue").PropType<import("react-quill").Value>;
        };
        formats: import("vue-types").VueTypeValidableDef<string[]> & {
            default: () => string[];
        };
        id: import("vue-types").VueTypeValidableDef<string>;
        modules: import("vue-types").VueTypeValidableDef<import("quill").StringMap>;
        placeholder: import("vue-types").VueTypeValidableDef<string>;
        preserveWhitespace: import("vue-types").VueTypeValidableDef<boolean>;
        readOnly: import("vue-types").VueTypeValidableDef<boolean>;
        scrollingContainer: import("vue-types").VueTypeDef<string | number>;
        style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
            default: any;
        };
        tabIndex: import("vue-types").VueTypeValidableDef<number>;
        theme: import("vue-types").VueTypeValidableDef<string>;
        value: {
            type: import("vue").PropType<import("react-quill").Value>;
        };
        onChange: import("vue-types").VueTypeValidableDef<(value: string, delta: import("quill").DeltaStatic, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
        onChangeSelection: import("vue-types").VueTypeValidableDef<(selection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
        onFocus: import("vue-types").VueTypeValidableDef<(selection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
        onBlur: import("vue-types").VueTypeValidableDef<(previousSelection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
        onKeyDown: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
        onKeyPress: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
        onKeyUp: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    wrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: any;
    };
    quillStyle: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bounds: import("vue-types").VueTypeDef<string | HTMLElement>;
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    defaultValue: {
        type: import("vue").PropType<import("react-quill").Value>;
    };
    formats: import("vue-types").VueTypeValidableDef<string[]> & {
        default: () => string[];
    };
    id: import("vue-types").VueTypeValidableDef<string>;
    modules: import("vue-types").VueTypeValidableDef<import("quill").StringMap>;
    placeholder: import("vue-types").VueTypeValidableDef<string>;
    preserveWhitespace: import("vue-types").VueTypeValidableDef<boolean>;
    readOnly: import("vue-types").VueTypeValidableDef<boolean>;
    scrollingContainer: import("vue-types").VueTypeDef<string | number>;
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: any;
    };
    tabIndex: import("vue-types").VueTypeValidableDef<number>;
    theme: import("vue-types").VueTypeValidableDef<string>;
    value: {
        type: import("vue").PropType<import("react-quill").Value>;
    };
    onChange: import("vue-types").VueTypeValidableDef<(value: string, delta: import("quill").DeltaStatic, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
    onChangeSelection: import("vue-types").VueTypeValidableDef<(selection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
    onFocus: import("vue-types").VueTypeValidableDef<(selection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
    onBlur: import("vue-types").VueTypeValidableDef<(previousSelection: import("react-quill").Range, source: import("quill").Sources, editor: import("react-quill").UnprivilegedEditor) => void>;
    onKeyDown: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
    onKeyPress: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
    onKeyUp: import("vue-types").VueTypeValidableDef<EventHandler<any>>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    wrapClassName: string;
    wrapStyle: CSSProperties;
    quillStyle: string;
    className: string;
    formats: string[];
    style: CSSProperties;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
