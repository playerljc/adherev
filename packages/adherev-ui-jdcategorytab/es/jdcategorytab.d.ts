import { CSSProperties } from 'vue';
import { IMenuDataItem } from './types';
export declare const jdCategoryTabProps: {
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    menuInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuInnerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    tabClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tabStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    menuItemClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuItemStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    menuData: import("vue-types").VueTypeValidableDef<IMenuDataItem[]> & {
        default: () => IMenuDataItem[];
    };
    defaultActiveKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onBeforeChange: import("vue-types").VueTypeValidableDef<(activeKey: string, key: string) => boolean>;
};
declare const _default: import("vue").DefineComponent<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    menuInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuInnerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    tabClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tabStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    menuItemClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuItemStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    menuData: import("vue-types").VueTypeValidableDef<IMenuDataItem[]> & {
        default: () => IMenuDataItem[];
    };
    defaultActiveKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onBeforeChange: import("vue-types").VueTypeValidableDef<(activeKey: string, key: string) => boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    className: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    menuInnerClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuInnerStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    tabClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    tabStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    menuItemClassName: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    menuItemStyle: import("vue-types").VueTypeValidableDef<CSSProperties> & {
        default: () => CSSProperties;
    };
    menuData: import("vue-types").VueTypeValidableDef<IMenuDataItem[]> & {
        default: () => IMenuDataItem[];
    };
    defaultActiveKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    onBeforeChange: import("vue-types").VueTypeValidableDef<(activeKey: string, key: string) => boolean>;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    className: string;
    menuClassName: string;
    menuStyle: CSSProperties;
    menuInnerClassName: string;
    menuInnerStyle: CSSProperties;
    tabClassName: string;
    tabStyle: CSSProperties;
    menuItemClassName: string;
    menuItemStyle: CSSProperties;
    menuData: IMenuDataItem[];
    defaultActiveKey: string;
}>;
export default _default;
