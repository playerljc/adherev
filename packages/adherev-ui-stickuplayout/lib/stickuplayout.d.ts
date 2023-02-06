import { CSSProperties } from 'vue';
export declare const stickupLayoutProps: {
    fixedClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fixedStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    innerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    innerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
};
declare const _default: import("vue").DefineComponent<{
    fixedClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fixedStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    innerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    innerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fixedClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fixedStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    innerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    innerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    fixedClassName: string;
    fixedStyle: CSSProperties;
    innerClassName: string;
    innerStyle: CSSProperties;
}>;
export default _default;
