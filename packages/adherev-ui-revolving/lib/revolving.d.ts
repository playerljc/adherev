import { CSSProperties } from 'vue';
declare enum direction {
    top = "top",
    right = "right",
    bottom = "bottom",
    left = "left"
}
declare const _default: import("vue").DefineComponent<{
    classNameWrapper: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapperStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    speed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    delay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    direction: import("vue-types").VueTypeValidableDef<direction> & {
        default: direction;
    };
    loop: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    stopOnLastSlide: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    listeners: import("vue-types").VueTypeValidableDef<object> & {
        default: () => object;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    classNameWrapper: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    wrapperStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    speed: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    delay: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    direction: import("vue-types").VueTypeValidableDef<direction> & {
        default: direction;
    };
    loop: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    stopOnLastSlide: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    listeners: import("vue-types").VueTypeValidableDef<object> & {
        default: () => object;
    };
}>>, {
    classNameWrapper: string;
    wrapperStyle: CSSProperties;
    speed: number;
    delay: number;
    direction: direction;
    loop: boolean;
    stopOnLastSlide: boolean;
    listeners: object;
}>;
export default _default;
