/**
 * open
 * @param success
 * @param params
 */
export declare function open({ success, ...params }: {
    [x: string]: any;
    success: any;
}): void;
export declare const delCConfirmProps: {
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    success: import("vue-types").VueTypeValidableDef<() => Promise<void>>;
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    text: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    success: import("vue-types").VueTypeValidableDef<() => Promise<void>>;
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    text: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    success: import("vue-types").VueTypeValidableDef<() => Promise<void>>;
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    text: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>>, {
    title: string;
    text: string;
    zIndex: number;
}>;
export default _default;
