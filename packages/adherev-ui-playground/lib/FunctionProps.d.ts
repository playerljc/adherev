import { VNode } from 'vue';
export interface IDataItemType {
    name: string | VNode;
    desc: string | VNode;
    modifier: 'static' | 'public' | 'private' | 'protected';
    params: Array<{
        name: string | VNode;
        desc: string | VNode;
        type: string | VNode;
        defaultVal: string | VNode;
        required: string | boolean;
    }>;
    returnType: string | VNode;
    returnDesc: string | VNode;
}
export declare const functionPropsProps: {
    data: import("vue-types").VueTypeValidableDef<IDataItemType[]> & {
        default: () => IDataItemType[];
    };
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
    title: import("vue-types").VueTypeDef<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    extra: import("vue-types").VueTypeDef<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    defaultCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    border: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    scrollY: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    fixedHeaderScrollBody: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    data: import("vue-types").VueTypeValidableDef<IDataItemType[]> & {
        default: () => IDataItemType[];
    };
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
    title: import("vue-types").VueTypeDef<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    extra: import("vue-types").VueTypeDef<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    defaultCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    border: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    scrollY: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    fixedHeaderScrollBody: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: import("vue-types").VueTypeValidableDef<IDataItemType[]> & {
        default: () => IDataItemType[];
    };
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
    title: import("vue-types").VueTypeDef<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    extra: import("vue-types").VueTypeDef<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    defaultCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    border: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    scrollY: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    fixedHeaderScrollBody: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}>>, {
    data: IDataItemType[];
    headerClassName: string;
    headerStyle: import("vue").CSSProperties;
    bodyClassName: string;
    bodyStyle: import("vue").CSSProperties;
    border: boolean;
    defaultCollapse: boolean;
    scrollY: boolean;
    fixedHeaderScrollBody: boolean;
}>;
export default _default;
