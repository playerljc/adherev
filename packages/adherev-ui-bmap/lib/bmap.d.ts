import { IConfig, IPoint } from './types';
declare const _default: import("vue").DefineComponent<{
    ak: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    zoom: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    center: import("vue-types").VueTypeValidableDef<IPoint> & {
        default: () => IPoint;
    } & {
        required: true;
    };
    config: import("vue-types").VueTypeValidableDef<IConfig> & {
        default: () => IConfig;
    };
    externalImportBMapScript: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onBMapInitReady" | "onBMapScriptReady")[], "onBMapInitReady" | "onBMapScriptReady", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ak: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    zoom: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    center: import("vue-types").VueTypeValidableDef<IPoint> & {
        default: () => IPoint;
    } & {
        required: true;
    };
    config: import("vue-types").VueTypeValidableDef<IConfig> & {
        default: () => IConfig;
    };
    externalImportBMapScript: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}>> & {
    onOnBMapInitReady?: ((...args: any[]) => any) | undefined;
    onOnBMapScriptReady?: ((...args: any[]) => any) | undefined;
}, {
    ak: string;
    zoom: number;
    center: IPoint;
    config: IConfig;
    externalImportBMapScript: boolean;
}>;
export default _default;
