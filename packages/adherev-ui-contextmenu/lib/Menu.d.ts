import { CSSProperties } from 'vue';
import { IData } from './types';
export declare const menuProps: {
    data: import("vue-types").VueTypeValidableDef<IData[]> & {
        default: () => IData[];
    };
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
};
declare const _default: import("vue").DefineComponent<{
    data: import("vue-types").VueTypeValidableDef<IData[]> & {
        default: () => IData[];
    };
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: import("vue-types").VueTypeValidableDef<IData[]> & {
        default: () => IData[];
    };
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    style: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
}>>, {
    data: IData[];
    className: string;
    style: CSSProperties;
}>;
export default _default;
