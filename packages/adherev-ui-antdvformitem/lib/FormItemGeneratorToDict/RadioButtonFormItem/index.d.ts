declare const _default: import("vue").DefineComponent<{
    radioGroupProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        value: import("vue-types").VueTypeValidableDef<any>;
        size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
        options: {
            type: import("vue").PropType<(string | number | import("ant-design-vue/es/radio/Group").RadioGroupChildOption)[]>;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        name: StringConstructor;
        buttonStyle: {
            type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupButtonStyle>;
            default: string;
        };
        id: StringConstructor;
        optionType: {
            type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupOptionType>;
            default: string;
        };
        onChange: import("vue").PropType<(e: import("ant-design-vue/es/radio").RadioChangeEvent) => void>;
        'onUpdate:value': import("vue").PropType<(val: any) => void>;
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            value: import("vue-types").VueTypeValidableDef<any>;
            size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
            options: {
                type: import("vue").PropType<(string | number | import("ant-design-vue/es/radio/Group").RadioGroupChildOption)[]>;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            name: StringConstructor;
            buttonStyle: {
                type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupButtonStyle>;
                default: string;
            };
            id: StringConstructor;
            optionType: {
                type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupOptionType>;
                default: string;
            };
            onChange: import("vue").PropType<(e: import("ant-design-vue/es/radio").RadioChangeEvent) => void>;
            'onUpdate:value': import("vue").PropType<(val: any) => void>;
        }>>;
    };
    value: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
        default: () => any[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    radioGroupProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        value: import("vue-types").VueTypeValidableDef<any>;
        size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
        options: {
            type: import("vue").PropType<(string | number | import("ant-design-vue/es/radio/Group").RadioGroupChildOption)[]>;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        name: StringConstructor;
        buttonStyle: {
            type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupButtonStyle>;
            default: string;
        };
        id: StringConstructor;
        optionType: {
            type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupOptionType>;
            default: string;
        };
        onChange: import("vue").PropType<(e: import("ant-design-vue/es/radio").RadioChangeEvent) => void>;
        'onUpdate:value': import("vue").PropType<(val: any) => void>;
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            value: import("vue-types").VueTypeValidableDef<any>;
            size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
            options: {
                type: import("vue").PropType<(string | number | import("ant-design-vue/es/radio/Group").RadioGroupChildOption)[]>;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            name: StringConstructor;
            buttonStyle: {
                type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupButtonStyle>;
                default: string;
            };
            id: StringConstructor;
            optionType: {
                type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupOptionType>;
                default: string;
            };
            onChange: import("vue").PropType<(e: import("ant-design-vue/es/radio").RadioChangeEvent) => void>;
            'onUpdate:value': import("vue").PropType<(val: any) => void>;
        }>>;
    };
    value: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
        default: () => any[];
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    dataSource: any[];
    value: string | number;
    radioGroupProps: Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        value: import("vue-types").VueTypeValidableDef<any>;
        size: import("vue-types").VueTypeDef<"default" | "small" | "large">;
        options: {
            type: import("vue").PropType<(string | number | import("ant-design-vue/es/radio/Group").RadioGroupChildOption)[]>;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        name: StringConstructor;
        buttonStyle: {
            type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupButtonStyle>;
            default: string;
        };
        id: StringConstructor;
        optionType: {
            type: import("vue").PropType<import("ant-design-vue/es/radio/interface").RadioGroupOptionType>;
            default: string;
        };
        onChange: import("vue").PropType<(e: import("ant-design-vue/es/radio").RadioChangeEvent) => void>;
        'onUpdate:value': import("vue").PropType<(val: any) => void>;
    }>>;
}>;
export default _default;
