import { ExtractPropTypes } from 'vue';
export declare const codePanelProps: {
    lang: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    codeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare type CodePanelProps = Partial<ExtractPropTypes<typeof codePanelProps>>;
declare const _default: import("vue").DefineComponent<{
    lang: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    codeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    lang: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    codeText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>>, {
    codeText: string;
    lang: string;
}>;
export default _default;
