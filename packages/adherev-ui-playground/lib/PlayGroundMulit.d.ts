import { CodePanelProps, CodeTabPanelProps } from './types';
declare enum codeType {
    CodePanel = "CodePanel",
    CodeTabPanel = "CodeTabPanel"
}
declare type ConfigItem = (CodePanelProps | CodeTabPanelProps) & {
    type: codeType;
    title: string;
};
export declare const playGroundMulitProps: {
    defaultConfig: import("vue-types").VueTypeValidableDef<ConfigItem[]> & {
        default: () => ConfigItem[];
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
};
declare const _default: import("vue").DefineComponent<{
    defaultConfig: import("vue-types").VueTypeValidableDef<ConfigItem[]> & {
        default: () => ConfigItem[];
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultConfig: import("vue-types").VueTypeValidableDef<ConfigItem[]> & {
        default: () => ConfigItem[];
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
}>>, {
    defaultConfig: ConfigItem[];
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
}>;
export default _default;
