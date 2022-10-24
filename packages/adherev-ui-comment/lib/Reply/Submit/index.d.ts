export declare const LOCAL_MAP: Map<string, any>;
declare const _default: import("vue").DefineComponent<{
    local: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emojiPickerProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("result" | "cancel")[], "result" | "cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    local: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emojiPickerProps: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
}>> & {
    onResult?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
}, {
    local: string;
    emojiPickerProps: {
        [key: string]: any;
    };
}>;
export default _default;
