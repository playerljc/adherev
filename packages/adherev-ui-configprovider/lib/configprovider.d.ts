import { IntlProps } from './types';
export declare const configProviderProps: {
    intl: import("vue-types").VueTypeValidableDef<IntlProps> & {
        default: () => IntlProps;
    };
};
declare const ConfigProvider: import("vue").DefineComponent<{
    intl: import("vue-types").VueTypeValidableDef<IntlProps> & {
        default: () => IntlProps;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | null | undefined, unknown, {}, {}, {
    methods: {
        _$forceUpdate(): void;
    };
}, import("vue").ComponentOptionsMixin, ("intlInit" | "propsChange")[], "intlInit" | "propsChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    intl: import("vue-types").VueTypeValidableDef<IntlProps> & {
        default: () => IntlProps;
    };
}>> & {
    onIntlInit?: ((...args: any[]) => any) | undefined;
    onPropsChange?: ((...args: any[]) => any) | undefined;
}, {
    intl: IntlProps;
}>;
export default ConfigProvider;
