import { ExtractPropTypes } from 'vue';
declare const playGroundProps: {
    codeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    cardProps: import("vue-types").VueTypeValidableDef<Partial<ExtractPropTypes<{
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
        title: import("vue-types").VueTypeDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue-types").VueTypeValidableDef<string>>;
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
        default: () => Partial<ExtractPropTypes<{
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
            title: import("vue-types").VueTypeDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue-types").VueTypeValidableDef<string>>;
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
};
export declare type PlayGroundProps = Partial<ExtractPropTypes<typeof playGroundProps>>;
declare const _default: import("vue").DefineComponent<{
    codeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    cardProps: import("vue-types").VueTypeValidableDef<Partial<ExtractPropTypes<{
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
        title: import("vue-types").VueTypeDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue-types").VueTypeValidableDef<string>>;
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
        default: () => Partial<ExtractPropTypes<{
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
            title: import("vue-types").VueTypeDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue-types").VueTypeValidableDef<string>>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    codeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    cardProps: import("vue-types").VueTypeValidableDef<Partial<ExtractPropTypes<{
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
        title: import("vue-types").VueTypeDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue-types").VueTypeValidableDef<string>>;
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
        default: () => Partial<ExtractPropTypes<{
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
            title: import("vue-types").VueTypeDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue-types").VueTypeValidableDef<string>>;
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
}>>, {
    codeText: string;
    lang: string;
    cardProps: Partial<ExtractPropTypes<{
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
        title: import("vue-types").VueTypeDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue-types").VueTypeValidableDef<string>>;
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
}>;
export default _default;
