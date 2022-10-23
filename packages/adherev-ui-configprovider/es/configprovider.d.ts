import { IntlProps } from './types';
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
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    intl: import("vue-types").VueTypeValidableDef<IntlProps> & {
        default: () => IntlProps;
    };
}>>, {
    intl: IntlProps;
}>;
export default ConfigProvider;
