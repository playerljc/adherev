import { CSSProperties } from 'vue';
export declare const EMPTY = "empty";
export declare const ERROR = "error";
export declare const NORMAL = "normal";
declare const _default: import("vue").DefineComponent<{
    loadClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    emptyClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emptyStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    errorClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    errorStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    distance: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll-bottom" | "empty-click" | "error-click")[], "scroll-bottom" | "empty-click" | "error-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    loadClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    emptyClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emptyStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    errorClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    errorStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    distance: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
}>> & {
    "onScroll-bottom"?: ((...args: any[]) => any) | undefined;
    "onEmpty-click"?: ((...args: any[]) => any) | undefined;
    "onError-click"?: ((...args: any[]) => any) | undefined;
}, {
    loadClassName: string;
    loadStyle: CSSProperties;
    emptyClassName: string;
    emptyStyle: CSSProperties;
    errorClassName: string;
    errorStyle: CSSProperties;
    distance: number;
}>;
export default _default;
