import { CSSProperties, ExtractPropTypes, VNode } from 'vue';
export declare const cardProps: {
    headerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    headerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    actionClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    actionStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    title: import("vue-types").VueTypeDef<import("vue-types").VueTypeValidableDef<string> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    extra: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    actions: import("vue-types").VueTypeValidableDef<any[]> & {
        default: () => any[];
    };
    description: import("vue-types").VueTypeValidableDef<{
        title: string;
        info: string;
    }>;
};
export declare type CardProps = Partial<ExtractPropTypes<typeof cardProps>>;
declare const _default: import("vue").DefineComponent<{
    headerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    headerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    actionClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    actionStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    title: import("vue-types").VueTypeDef<import("vue-types").VueTypeValidableDef<string> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    extra: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    actions: import("vue-types").VueTypeValidableDef<any[]> & {
        default: () => any[];
    };
    description: import("vue-types").VueTypeValidableDef<{
        title: string;
        info: string;
    }>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    headerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    headerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    bodyClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    bodyStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    actionClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    actionStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    title: import("vue-types").VueTypeDef<import("vue-types").VueTypeValidableDef<string> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    extra: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    actions: import("vue-types").VueTypeValidableDef<any[]> & {
        default: () => any[];
    };
    description: import("vue-types").VueTypeValidableDef<{
        title: string;
        info: string;
    }>;
}>>, {
    headerClassName: string;
    headerStyle: CSSProperties;
    bodyClassName: string;
    bodyStyle: CSSProperties;
    actionClassName: string;
    actionStyle: CSSProperties;
    actions: any[];
}>;
export default _default;
