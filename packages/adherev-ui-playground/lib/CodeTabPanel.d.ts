import { VNode, ExtractPropTypes } from 'vue';
export interface ICodeTabPanelItemProps {
    key: string;
    title: string | VNode;
    codeText: string;
    lang: string;
}
export declare const codeTabPanelProps: {
    active: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    config: import("vue-types").VueTypeValidableDef<ICodeTabPanelItemProps[]> & {
        default: () => ICodeTabPanelItemProps[];
    };
};
export declare type CodeTabPanelProps = Partial<ExtractPropTypes<typeof codeTabPanelProps>>;
declare const _default: import("vue").DefineComponent<{
    active: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    config: import("vue-types").VueTypeValidableDef<ICodeTabPanelItemProps[]> & {
        default: () => ICodeTabPanelItemProps[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    active: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    config: import("vue-types").VueTypeValidableDef<ICodeTabPanelItemProps[]> & {
        default: () => ICodeTabPanelItemProps[];
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    active: string;
    config: ICodeTabPanelItemProps[];
}>;
export default _default;
