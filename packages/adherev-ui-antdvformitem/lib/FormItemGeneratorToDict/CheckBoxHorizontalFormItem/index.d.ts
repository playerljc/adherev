declare const _default: import("vue").DefineComponent<{
    checkBoxGroupProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
        };
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
        };
        onChange: {
            type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
        };
        name: StringConstructor;
        prefixCls: StringConstructor;
        options: {
            type: import("vue").PropType<(string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[]>;
            default: () => (string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[];
        };
        disabled: BooleanConstructor;
        id: StringConstructor;
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            defaultValue: {
                type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
            };
            value: {
                type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
            };
            onChange: {
                type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
            };
            'onUpdate:value': {
                type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
            };
            name: StringConstructor;
            prefixCls: StringConstructor;
            options: {
                type: import("vue").PropType<(string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[]>;
                default: () => (string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[];
            };
            disabled: BooleanConstructor;
            id: StringConstructor;
        }>>;
    };
    value: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    checkBoxGroupProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
        };
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
        };
        onChange: {
            type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
        };
        name: StringConstructor;
        prefixCls: StringConstructor;
        options: {
            type: import("vue").PropType<(string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[]>;
            default: () => (string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[];
        };
        disabled: BooleanConstructor;
        id: StringConstructor;
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            defaultValue: {
                type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
            };
            value: {
                type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
            };
            onChange: {
                type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
            };
            'onUpdate:value': {
                type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
            };
            name: StringConstructor;
            prefixCls: StringConstructor;
            options: {
                type: import("vue").PropType<(string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[]>;
                default: () => (string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[];
            };
            disabled: BooleanConstructor;
            id: StringConstructor;
        }>>;
    };
    value: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    dataSource: unknown[];
    value: unknown[];
    checkBoxGroupProps: Partial<import("vue").ExtractPropTypes<{
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
        };
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]>;
        };
        onChange: {
            type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(checkedValue: import("ant-design-vue/es/checkbox/interface").CheckboxValueType[]) => void>;
        };
        name: StringConstructor;
        prefixCls: StringConstructor;
        options: {
            type: import("vue").PropType<(string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[]>;
            default: () => (string | number | import("ant-design-vue/es/checkbox").CheckboxOptionType)[];
        };
        disabled: BooleanConstructor;
        id: StringConstructor;
    }>>;
}>;
export default _default;
