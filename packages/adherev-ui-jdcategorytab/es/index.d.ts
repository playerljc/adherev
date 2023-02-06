import { Plugin } from 'vue';
import JdCategoryTabItem from './item';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            className: string;
            menuClassName: string;
            menuStyle: import("vue").CSSProperties;
            menuInnerClassName: string;
            menuInnerStyle: import("vue").CSSProperties;
            tabClassName: string;
            tabStyle: import("vue").CSSProperties;
            menuItemClassName: string;
            menuItemStyle: import("vue").CSSProperties;
            menuData: import("./types").IMenuDataItem[];
            defaultActiveKey: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            className: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            menuClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            menuStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            menuInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            menuInnerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            tabClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            tabStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            menuItemClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            menuItemStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            menuData: import("vue-types").VueTypeValidableDef<import("./types").IMenuDataItem[]> & {
                default: () => import("./types").IMenuDataItem[];
            };
            defaultActiveKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            onBeforeChange: import("vue-types").VueTypeValidableDef<(activeKey: string, key: string) => boolean>;
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "className" | "menuClassName" | "menuStyle" | "menuInnerClassName" | "menuInnerStyle" | "tabClassName" | "tabStyle" | "menuItemClassName" | "menuItemStyle" | "menuData" | "defaultActiveKey">;
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
            className: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            menuClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            menuStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            menuInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            menuInnerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            tabClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            tabStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            menuItemClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            menuItemStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            menuData: import("vue-types").VueTypeValidableDef<import("./types").IMenuDataItem[]> & {
                default: () => import("./types").IMenuDataItem[];
            };
            defaultActiveKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            onBeforeChange: import("vue-types").VueTypeValidableDef<(activeKey: string, key: string) => boolean>;
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], string, {
            className: string;
            menuClassName: string;
            menuStyle: import("vue").CSSProperties;
            menuInnerClassName: string;
            menuInnerStyle: import("vue").CSSProperties;
            tabClassName: string;
            tabStyle: import("vue").CSSProperties;
            menuItemClassName: string;
            menuItemStyle: import("vue").CSSProperties;
            menuData: import("./types").IMenuDataItem[];
            defaultActiveKey: string;
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
        className: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        menuClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        menuStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        menuInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        menuInnerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        tabClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        tabStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        menuItemClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        menuItemStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        menuData: import("vue-types").VueTypeValidableDef<import("./types").IMenuDataItem[]> & {
            default: () => import("./types").IMenuDataItem[];
        };
        defaultActiveKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        onBeforeChange: import("vue-types").VueTypeValidableDef<(activeKey: string, key: string) => boolean>;
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    menuInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuInnerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    tabClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tabStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    menuItemClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuItemStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
        default: () => import("vue").CSSProperties;
    };
    menuData: import("vue-types").VueTypeValidableDef<import("./types").IMenuDataItem[]> & {
        default: () => import("./types").IMenuDataItem[];
    };
    defaultActiveKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onBeforeChange: import("vue-types").VueTypeValidableDef<(activeKey: string, key: string) => boolean>;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", {
    className: string;
    menuClassName: string;
    menuStyle: import("vue").CSSProperties;
    menuInnerClassName: string;
    menuInnerStyle: import("vue").CSSProperties;
    tabClassName: string;
    tabStyle: import("vue").CSSProperties;
    menuItemClassName: string;
    menuItemStyle: import("vue").CSSProperties;
    menuData: import("./types").IMenuDataItem[];
    defaultActiveKey: string;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly Item: typeof JdCategoryTabItem;
};
export default _default;
