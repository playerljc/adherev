import 'highlight.js/lib/common';
import { Plugin } from 'vue';
import AnchorNavigation from './AnchorNavigation';
import CodeBoxPanel from './CodeBoxPanel';
import CodePanel from './CodePanel';
import CodeTabPanel from './CodeTabPanel';
import FunctionProps from './FunctionProps';
import PlayGroundMulit from './PlayGroundMulit';
import PlayGroundPage from './PlayGroundPage';
import CodeBoxSection from './PlayGroundPage/CodeBoxSection';
import FunctionPropsSection from './PlayGroundPage/FunctionPropsSection';
import PropsSection from './PlayGroundPage/PropsSection';
import Section from './PlayGroundPage/Section';
import PlayGroundTab from './PlayGroundTab';
import Props from './Props';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            lang: string;
            codeText: string;
            cardProps: Partial<import("vue").ExtractPropTypes<{
                headerClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                actionClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                actions: import("vue-types").VueTypeValidableDef<any[]> & {
                    default: () => any[];
                };
                description: import("vue-types").VueTypeValidableDef<{
                    title: string;
                    info: string;
                }>;
            }>>;
            isActive: boolean;
            defaultExpand: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            codeText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            cardProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
                headerClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                actionClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                actions: import("vue-types").VueTypeValidableDef<any[]> & {
                    default: () => any[];
                };
                description: import("vue-types").VueTypeValidableDef<{
                    title: string;
                    info: string;
                }>;
            }>>> & {
                default: () => Partial<import("vue").ExtractPropTypes<{
                    headerClassName: import("vue-types").VueTypeValidableDef<string> & {
                        default: string;
                    };
                    headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                        default: () => import("vue").CSSProperties;
                    };
                    bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
                        default: string;
                    };
                    bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                        default: () => import("vue").CSSProperties;
                    };
                    actionClassName: import("vue-types").VueTypeValidableDef<string> & {
                        default: string;
                    };
                    actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                        default: () => import("vue").CSSProperties;
                    };
                    title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>>;
                    extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>>;
                    actions: import("vue-types").VueTypeValidableDef<any[]> & {
                        default: () => any[];
                    };
                    description: import("vue-types").VueTypeValidableDef<{
                        title: string;
                        info: string;
                    }>;
                }>>;
            };
            isActive: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            defaultExpand: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            getClipboardText: import("vue-types").VueTypeValidableDef<(e?: any) => Promise<string>>;
            lang: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "lang" | "codeText" | "cardProps" | "isActive" | "defaultExpand">;
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
            codeText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            cardProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
                headerClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                actionClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                actions: import("vue-types").VueTypeValidableDef<any[]> & {
                    default: () => any[];
                };
                description: import("vue-types").VueTypeValidableDef<{
                    title: string;
                    info: string;
                }>;
            }>>> & {
                default: () => Partial<import("vue").ExtractPropTypes<{
                    headerClassName: import("vue-types").VueTypeValidableDef<string> & {
                        default: string;
                    };
                    headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                        default: () => import("vue").CSSProperties;
                    };
                    bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
                        default: string;
                    };
                    bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                        default: () => import("vue").CSSProperties;
                    };
                    actionClassName: import("vue-types").VueTypeValidableDef<string> & {
                        default: string;
                    };
                    actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                        default: () => import("vue").CSSProperties;
                    };
                    title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>>;
                    extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>>;
                    actions: import("vue-types").VueTypeValidableDef<any[]> & {
                        default: () => any[];
                    };
                    description: import("vue-types").VueTypeValidableDef<{
                        title: string;
                        info: string;
                    }>;
                }>>;
            };
            isActive: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            defaultExpand: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            getClipboardText: import("vue-types").VueTypeValidableDef<(e?: any) => Promise<string>>;
            lang: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            lang: string;
            codeText: string;
            cardProps: Partial<import("vue").ExtractPropTypes<{
                headerClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                actionClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                actions: import("vue-types").VueTypeValidableDef<any[]> & {
                    default: () => any[];
                };
                description: import("vue-types").VueTypeValidableDef<{
                    title: string;
                    info: string;
                }>;
            }>>;
            isActive: boolean;
            defaultExpand: boolean;
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
        codeText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        cardProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
            headerClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            actionClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            actions: import("vue-types").VueTypeValidableDef<any[]> & {
                default: () => any[];
            };
            description: import("vue-types").VueTypeValidableDef<{
                title: string;
                info: string;
            }>;
        }>>> & {
            default: () => Partial<import("vue").ExtractPropTypes<{
                headerClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                actionClassName: import("vue-types").VueTypeValidableDef<string> & {
                    default: string;
                };
                actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                    default: () => import("vue").CSSProperties;
                };
                title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>>;
                actions: import("vue-types").VueTypeValidableDef<any[]> & {
                    default: () => any[];
                };
                description: import("vue-types").VueTypeValidableDef<{
                    title: string;
                    info: string;
                }>;
            }>>;
        };
        isActive: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        defaultExpand: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        getClipboardText: import("vue-types").VueTypeValidableDef<(e?: any) => Promise<string>>;
        lang: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    codeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    cardProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        headerClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        actionClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        actions: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        description: import("vue-types").VueTypeValidableDef<{
            title: string;
            info: string;
        }>;
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            headerClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            actionClassName: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
                default: () => import("vue").CSSProperties;
            };
            title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            actions: import("vue-types").VueTypeValidableDef<any[]> & {
                default: () => any[];
            };
            description: import("vue-types").VueTypeValidableDef<{
                title: string;
                info: string;
            }>;
        }>>;
    };
    isActive: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    defaultExpand: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    getClipboardText: import("vue-types").VueTypeValidableDef<(e?: any) => Promise<string>>;
    lang: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    lang: string;
    codeText: string;
    cardProps: Partial<import("vue").ExtractPropTypes<{
        headerClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        headerStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        bodyStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        actionClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        actionStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        title: import("vue-types").VueTypeDef<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        extra: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        actions: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        description: import("vue-types").VueTypeValidableDef<{
            title: string;
            info: string;
        }>;
    }>>;
    isActive: boolean;
    defaultExpand: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin & {
    readonly FunctionProps: typeof FunctionProps;
    readonly Props: typeof Props;
    readonly CodePanel: typeof CodePanel;
    readonly CodeTabPanel: typeof CodeTabPanel;
    readonly CodeBoxPanel: typeof CodeBoxPanel;
    readonly PlayGroundTab: typeof PlayGroundTab;
    readonly PlayGroundMulit: typeof PlayGroundMulit;
    readonly AnchorNavigation: typeof AnchorNavigation;
    readonly PlayGroundPage: typeof PlayGroundPage & {
        readonly CodeBoxSection: typeof CodeBoxSection;
        readonly FunctionPropsSection: typeof FunctionPropsSection;
        readonly PropsSection: typeof PropsSection;
        readonly Section: typeof Section;
    };
};
export default _default;
