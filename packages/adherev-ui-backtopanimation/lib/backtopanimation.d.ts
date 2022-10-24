declare const _default: import("vue").DefineComponent<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    zIndex: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    duration: import("vue-types").VueTypeDef<number> & {
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("trigger" | "scrollTop" | "target")[], "trigger" | "scrollTop" | "target", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    zIndex: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    duration: import("vue-types").VueTypeDef<number> & {
        default: number;
    };
}>> & {
    onTrigger?: ((...args: any[]) => any) | undefined;
    onScrollTop?: ((...args: any[]) => any) | undefined;
    onTarget?: ((...args: any[]) => any) | undefined;
}, {
    className: string;
    zIndex: string | number;
    duration: number;
}>;
export default _default;
