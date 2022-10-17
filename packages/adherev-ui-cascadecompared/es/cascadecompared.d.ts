import { CSSProperties } from 'vue';
import { IIndicatorTableConfig, IMasterItem } from './types';
declare const _default: import("vue").DefineComponent<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    indicatorClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    indicatorStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    indicatorFixedWrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    indicatorFixedWrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    indicatorAutoWrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    indicatorAutoWrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    masterClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    masterInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterInnerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    masterStickFixedClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterStickFixedStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    masterStickInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterStickInnerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    indicator: import("vue-types").VueTypeValidableDef<IIndicatorTableConfig> & {
        default: () => IIndicatorTableConfig;
    };
    master: import("vue-types").VueTypeValidableDef<IMasterItem[]> & {
        default: () => IMasterItem[];
    };
    defaultCellWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "stickChange"[], "stickChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    indicatorClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    indicatorStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    indicatorFixedWrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    indicatorFixedWrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    indicatorAutoWrapClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    indicatorAutoWrapStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    masterClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    masterInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterInnerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    masterStickFixedClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterStickFixedStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    masterStickInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    masterStickInnerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    indicator: import("vue-types").VueTypeValidableDef<IIndicatorTableConfig> & {
        default: () => IIndicatorTableConfig;
    };
    master: import("vue-types").VueTypeValidableDef<IMasterItem[]> & {
        default: () => IMasterItem[];
    };
    defaultCellWidth: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
}>> & {
    onStickChange?: ((...args: any[]) => any) | undefined;
}, {
    className: string;
    indicatorClassName: string;
    indicatorStyle: CSSProperties;
    indicatorFixedWrapClassName: string;
    indicatorFixedWrapStyle: CSSProperties;
    indicatorAutoWrapClassName: string;
    indicatorAutoWrapStyle: CSSProperties;
    masterClassName: string;
    masterStyle: CSSProperties;
    masterInnerClassName: string;
    masterInnerStyle: CSSProperties;
    masterStickFixedClassName: string;
    masterStickFixedStyle: CSSProperties;
    masterStickInnerClassName: string;
    masterStickInnerStyle: CSSProperties;
    indicator: IIndicatorTableConfig;
    master: IMasterItem[];
    defaultCellWidth: string | number;
}>;
export default _default;
