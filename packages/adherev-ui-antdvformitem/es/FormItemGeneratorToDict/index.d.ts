declare const DictFormItem: {
    init(Vue: any): void;
    getComponents(): any;
};
declare const FunctionComponents: Pick<{
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
    CheckBoxCheckAllCustomFormItem: {
        name: string;
        props: {
            checkBoxGroupProps: {
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
            checkAll: boolean;
        };
        watch: {
            value(value: any): void;
            dataSource(dataSource: any): void;
        };
        render(h: any): JSX.Element;
    };
    CheckBoxCustomFormItem: {
        name: string;
        slots: string[];
        props: {
            checkBoxGroupProps: {
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
        render(h: any): any;
    };
    CheckBoxHorizontalFormItem: {
        name: string;
        props: {
            checkBoxGroupProps: {
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
        render(h: any): any;
    };
    CheckBoxVerticalFormItem: {
        name: string;
        props: {
            checkBoxGroupProps: {
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
        render(h: any): any;
    };
    CheckBoxCheckAllVerticalFormItem: {
        name: string;
        props: {
            checkBoxGroupProps: {
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
            checkAll: boolean;
        };
        watch: {
            value(value: any): void;
            dataSource(dataSource: any): void;
        };
        render(h: any): JSX.Element;
    };
    CheckBoxCheckAllHorizontalFormItem: {
        name: string;
        props: {
            checkBoxGroupProps: {
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
            checkAll: boolean;
        };
        watch: {
            value(value: any): void;
            dataSource(dataSource: any): void;
        };
        render(h: any): JSX.Element;
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
    ListFormItem: {
        name: string;
        props: {
            listProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            rowKey: {
                type: StringConstructor;
                default: string;
            };
        };
        render(h: any): any;
    };
    ListSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            listProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: StringConstructor;
                default: string;
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
            rowKey: {
                type: StringConstructor;
                default: string;
            };
            labelKey: {
                type: StringConstructor;
                default: string;
            };
        };
        emits: string[];
        data(): {
            inputValue: string;
            selectedRowKeys: any[];
            selectedRows: any;
        };
        watch: {
            value(value: any): void;
        };
        methods: {
            RadioWrap(h: any, item: any): JSX.Element;
            $renderDropdownRender(h: any): JSX.Element;
        };
        render(h: any): any;
    };
    ListMulitSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            listProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: ArrayConstructor;
                default: never[];
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
            rowKey: {
                type: StringConstructor;
                default: string;
            };
            labelKey: {
                type: StringConstructor;
                default: string;
            };
        };
        emits: string[];
        data(): {
            inputValue: string;
            selectedRowKeys: any;
            selectedRows: any;
        };
        watch: {
            value(value: any): void;
        };
        methods: {
            CheckWrap(h: any, item: any): JSX.Element;
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
    RadioVerticalFormItem: {
        name: string;
        props: {
            radioGroupProps: {
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
        render(h: any): any;
    };
    RadioButtonFormItem: {
        name: string;
        props: {
            radioGroupProps: {
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
        render(h: any): any;
    };
    RadioCustomFormItem: {
        name: string;
        slots: string[];
        props: {
            radioGroupProps: {
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
        render(h: any): any;
    };
    RadioHorizontalFormItem: {
        name: string;
        props: {
            radioGroupProps: {
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
            inputValue: string;
            selectedKeys: never[];
        };
        methods: {
            $renderDropdownRender(h: any): JSX.Element;
        };
        render(h: any): any;
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
    TreeSelectLeafFormItem: {
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
        computed: {
            targetDataSource(): any;
        };
        render(h: any): any;
    };
    TreeSelectLeafMulitFormItem: {
        name: string;
        props: any;
        computed: {
            targetDataSource(): any;
        };
        render(h: any): any;
    };
    TableFormItem: {
        name: string;
        props: {
            tableProps: {
                type: ObjectConstructor;
                default: () => never[];
            };
            rowKey: {
                type: StringConstructor;
                default: string;
            };
        };
        render(h: any): any;
    };
    TableSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            tableProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: StringConstructor;
                default: string;
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
            rowKey: {
                type: StringConstructor;
                default: string;
            };
            labelKey: {
                type: StringConstructor;
                default: string;
            };
        };
        emits: string[];
        data(): {
            inputValue: string;
            selectedRowKeys: any[];
            selectedRows: any;
        };
        watch: {
            value(value: any): void;
        };
        methods: {
            $renderDropdownRender(h: any): JSX.Element;
        };
        render(h: any): any;
    };
    TableMulitSelectFormItem: {
        name: string;
        props: {
            selectProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            tableProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: ArrayConstructor;
                default: never[];
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
            rowKey: {
                type: StringConstructor;
                default: string;
            };
            labelKey: {
                type: StringConstructor;
                default: string;
            };
        };
        emits: string[];
        data(): {
            inputValue: string;
            selectedRowKeys: any;
            selectedRows: any;
        };
        watch: {
            value(value: any): void;
        };
        methods: {
            $renderDropdownRender(h: any): JSX.Element;
        };
        render(h: any): any;
    };
    TransferFormItem: {
        name: string;
        props: {
            transferProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
            value: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        render(h: any): any;
    };
    CascaderFormItem: {
        name: string;
        props: {
            cascaderProps: {
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
        render(h: any): any;
    };
    CascaderLeafFormItem: {
        name: string;
        props: {
            cascaderProps: {
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
        computed: {
            targetDataSource(): any;
        };
        render(h: any): any;
    };
    default: {
        init(Vue: any): void;
        getComponents(): any;
    };
}, "CascaderFormItem" | "CascaderLeafFormItem" | "MulitSelectFormItem" | "CheckAllMulitSelectFormItem" | "CheckBoxCustomFormItem" | "CheckBoxCheckAllCustomFormItem" | "CheckBoxHorizontalFormItem" | "CheckBoxCheckAllHorizontalFormItem" | "CheckBoxCheckAllSelectFormItem" | "CheckBoxVerticalFormItem" | "CheckBoxCheckAllVerticalFormItem" | "CheckBoxSelectFormItem" | "ListFormItem" | "ListMulitSelectFormItem" | "SelectFormItem" | "ListSelectFormItem" | "RadioButtonFormItem" | "RadioCustomFormItem" | "RadioHorizontalFormItem" | "RadioSelectFormItem" | "RadioVerticalFormItem" | "TableFormItem" | "TableMulitSelectFormItem" | "TableSelectFormItem" | "TransferFormItem" | "TransferSelectFormItem" | "TreeSelectFormItem" | "TreeMulitSelectFormItem" | "TreeSelectLeafFormItem" | "TreeSelectLeafMulitFormItem">;
export { DictFormItem, FunctionComponents };
declare const _default: {
    install: (Vue: any) => void;
};
export default _default;
