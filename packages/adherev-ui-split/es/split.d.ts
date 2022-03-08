import { CSSProperties } from 'vue';
declare enum directionType {
    vertical = "vertical",
    horizontal = "horizontal"
}
/**
 * Split
 */
declare const Split: import("vue").DefineComponent<{
    direction: import("vue-types").VueTypeValidableDef<directionType> & {
        default: directionType;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: import("vue-types").VueTypeValidableDef<directionType> & {
        default: directionType;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}>>, {
    direction: directionType;
    size: number;
}>;
/**
 * SplitGroup
 */
export declare const SplitGroup: import("vue").DefineComponent<{
    direction: import("vue-types").VueTypeValidableDef<directionType> & {
        default: directionType;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: import("vue-types").VueTypeValidableDef<directionType> & {
        default: directionType;
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
    direction: directionType;
    size: number;
    className: string;
    style: CSSProperties;
}>;
export default Split;
