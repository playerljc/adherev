import FormItemComponents from './FormItemGeneratorToDict';
declare const OtherFormItemComponents: {
    CheckAllMulitSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: ArrayConstructor;
                default: () => never[];
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        emits: string[];
        data(): {
            checked: boolean;
        };
        watch: {
            value(val: any): void;
            dataSource(dataSource: any): void;
        };
        methods: {
            $onCheckAllChange(e: any): void;
            $onChange(values: any): void;
            $dropdownRender(h: any, menu: any): JSX.Element;
        };
        render(h: any): any;
    };
    CheckBoxCheckAllSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: ArrayConstructor;
                default: () => never[];
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        data(): {
            inputValue: string;
            checkAll: boolean;
        };
        watch: {
            value(value: any): void;
            dataSource(dataSource: any): void;
        };
        methods: {
            $renderDropdownRender(h: any): JSX.Element;
        };
        render(h: any): any;
    };
    CheckBoxSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: ArrayConstructor;
                default: () => never[];
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        data(): {
            inputValue: string;
        };
        methods: {
            $renderDropdownRender(h: any): JSX.Element;
        };
        render(h: any): any;
    };
    MulitSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: ArrayConstructor;
                default: () => never[];
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        render(h: any): JSX.Element;
    };
    RadioSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        data(): {
            inputValue: string;
        };
        methods: {
            $renderDropdownRender(h: any): JSX.Element;
        };
        render(h: any): any;
    };
    SelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        render(h: any): JSX.Element;
    };
    TransferSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            transferProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: ArrayConstructor;
                default: () => never[];
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        emits: string[];
        data(): {
            selectedKeys: never[];
        };
        methods: {
            $renderDropdownRender(h: any): JSX.Element;
        };
        render(h: any): any;
    };
    TreeMulitSelectFormItem: {
        name: string;
        mixins: {
            name: string;
            props: {
                treeSelectProps: {
                    type: ObjectConstructor;
                    default: () => {};
                };
                value: {
                    type: StringConstructor;
                    default: () => string;
                };
                dataSource: {
                    type: ArrayConstructor;
                    default: () => never[];
                };
            };
            render(h: any): JSX.Element;
        }[];
        props: {
            value: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        render(h: any): JSX.Element;
    };
    TreeSelectFormItem: {
        name: string;
        props: {
            treeSelectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: StringConstructor;
                default: () => string;
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        render(h: any): JSX.Element;
    };
    default: any;
};
export { FormItemComponents, OtherFormItemComponents };
declare const _default: {
    install: (Vue: any) => void;
};
export default _default;
