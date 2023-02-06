import { CSSProperties } from 'vue';
export declare const splitProps: {
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
};
/**
 * Split
 */
declare const Split: import("vue").DefineComponent<{
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}>>, {
    direction: string;
    size: number;
}>;
export declare const splitGroupProps: {
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
};
/**
 * SplitGroup
 */
export declare const SplitGroup: import("vue").DefineComponent<{
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
}, () => JSX.Element | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
}>>, {
    direction: string;
    size: number;
    className: string;
    style: CSSProperties;
}>;
export default Split;
