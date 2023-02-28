import { App, Plugin } from 'vue';
import { Overlay, Push, Revolving } from './slidelayout';
declare const _default: {
    Push: import("vue").DefineComponent<{
        className: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        style: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        slaveClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        slaveStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
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
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        defaultCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("after-show" | "after-close")[], "after-show" | "after-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        className: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        style: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        slaveClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        slaveStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
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
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
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
        direction: string;
        defaultCollapse: boolean;
        style: import("vue").CSSProperties;
        className: string;
        slaveClassName: string;
        slaveStyle: import("vue").CSSProperties;
    }>;
    Overlay: import("vue").DefineComponent<{
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
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
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
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
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
        direction: string;
        defaultCollapse: boolean;
    }>;
    Revolving: import("vue").DefineComponent<{
        masterClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        masterStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        slaveClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        slaveStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
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
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        defaultCollapse: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("after-show" | "after-close")[], "after-show" | "after-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        masterClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        masterStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
        };
        slaveClassName: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        slaveStyle: import("vue-types").VueTypeValidableDef<import("vue").CSSProperties> & {
            default: () => import("vue").CSSProperties;
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
        direction: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
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
        direction: string;
        defaultCollapse: boolean;
        slaveClassName: string;
        slaveStyle: import("vue").CSSProperties;
        masterClassName: string;
        masterStyle: import("vue").CSSProperties;
    }>;
    install: (app: App<any>) => App<any>;
} & Plugin & {
    readonly Push: typeof Push;
    readonly Overlay: typeof Overlay;
    readonly Revolving: typeof Revolving;
};
export default _default;
