import { VNode } from 'vue';
import { PlayGroundMulitProps, PlayGroundProps, PlayGroundTabProps } from './types';
declare type ConfigItemCommonType = {
    type: string;
    childrenSlot: string;
    wrapSlot: string;
};
declare type ConfigItemType = (PlayGroundProps & ConfigItemCommonType & {
    id: string;
}) | (PlayGroundMulitProps & ConfigItemCommonType & {
    id: string;
}) | (PlayGroundTabProps & ConfigItemCommonType & {
    id: string;
});
export declare const codeBoxPanelProps: {
    title: import("vue-types").VueTypeDef<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    extra: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    isShowExpandAllBtn: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    columnCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultExpandAll: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    config: import("vue-types").VueTypeValidableDef<ConfigItemType[]> & {
        default: () => ConfigItemType[];
    };
};
declare const _default: import("vue").DefineComponent<{
    title: import("vue-types").VueTypeDef<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    extra: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    isShowExpandAllBtn: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    columnCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultExpandAll: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    config: import("vue-types").VueTypeValidableDef<ConfigItemType[]> & {
        default: () => ConfigItemType[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: import("vue-types").VueTypeDef<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    extra: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    isShowExpandAllBtn: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    columnCount: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    defaultExpandAll: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    config: import("vue-types").VueTypeValidableDef<ConfigItemType[]> & {
        default: () => ConfigItemType[];
    };
}>>, {
    config: ConfigItemType[];
    columnCount: number;
    isShowExpandAllBtn: boolean;
    defaultExpandAll: boolean;
}>;
export default _default;
