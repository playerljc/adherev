import { CSSProperties, ExtractPropTypes } from 'vue';
declare const pullRefreshProps: {
    scrollClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    scrollStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    pullHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    isShowUpdateTime: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    updateTime: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    updateTimeFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadingAnimation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
};
export declare type PullRefreshProps = Partial<ExtractPropTypes<typeof pullRefreshProps>>;
declare const _default: import("vue").DefineComponent<{
    scrollClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    scrollStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    pullHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    isShowUpdateTime: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    updateTime: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    updateTimeFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadingAnimation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pull-start" | "pull-can-refresh" | "pull-bottom" | "pull-rebound" | "pull-refresh")[], "pull-start" | "pull-can-refresh" | "pull-bottom" | "pull-rebound" | "pull-refresh", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    scrollClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    scrollStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    pullHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    isShowUpdateTime: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    updateTime: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    updateTimeFormat: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    loadingAnimation: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>> & {
    "onPull-start"?: ((...args: any[]) => any) | undefined;
    "onPull-can-refresh"?: ((...args: any[]) => any) | undefined;
    "onPull-bottom"?: ((...args: any[]) => any) | undefined;
    "onPull-rebound"?: ((...args: any[]) => any) | undefined;
    "onPull-refresh"?: ((...args: any[]) => any) | undefined;
}, {
    scrollClassName: string;
    scrollStyle: CSSProperties;
    pullHeight: number;
    isShowUpdateTime: boolean;
    updateTime: number;
    updateTimeFormat: string;
    loadingAnimation: string;
}>;
export default _default;
