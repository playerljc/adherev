import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    masterClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    slaveClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    slaveStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
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
    masterClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    slaveClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    slaveStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
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
    slaveClassName: string;
    slaveStyle: CSSProperties;
    masterClassName: string;
    masterStyle: CSSProperties;
}>;
export default _default;
