declare const _default: import("vue").DefineComponent<{
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    mask: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    time: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    direction: import("vue-types").VueTypeValidableDef<import("./slide").direction> & {
        default: import("./slide").direction;
    };
    defaultCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("after-show" | "after-close")[], "after-show" | "after-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    mask: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    time: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    direction: import("vue-types").VueTypeValidableDef<import("./slide").direction> & {
        default: import("./slide").direction;
    };
    defaultCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}>> & {
    "onAfter-show"?: ((...args: any[]) => any) | undefined;
    "onAfter-close"?: ((...args: any[]) => any) | undefined;
}, {
    width: string | number;
    height: string | number;
    mask: boolean;
    zIndex: number;
    time: number;
    direction: import("./slide").direction;
    defaultCollapse: boolean;
}>;
export default _default;
