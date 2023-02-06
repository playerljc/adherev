import { VNode } from 'vue';
import { IDataItemType } from './types';
export declare const propsProps: {
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    defaultCollapse: boolean;
    border: boolean;
    scrollY: boolean;
    fixedHeaderScrollBody: boolean;
}>;
export default _default;
