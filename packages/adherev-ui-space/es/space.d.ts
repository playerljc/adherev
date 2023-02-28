import { CSSProperties } from 'vue';
export declare const spaceProps: {
    direction: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
};
/**
 * Space
 */
declare const Space: import("vue").DefineComponent<{
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
export declare const spaceGroupProps: {
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
 * SpaceGroup
 */
export declare const SpaceGroup: import("vue").DefineComponent<{
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
export default Space;
