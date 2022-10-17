import { CSSProperties } from 'vue';
declare enum directionType {
    vertical = "vertical",
    horizontal = "horizontal"
}
/**
 * Space
 */
declare const Space: import("vue").DefineComponent<{
    direction: import("vue-types").VueTypeValidableDef<directionType> & {
        default: directionType;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
 * SpaceGroup
 */
export declare const SpaceGroup: import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
export default Space;
