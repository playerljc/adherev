declare const _default: import("vue").DefineComponent<{
    value: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
}, unknown, unknown, {}, {}, import("vue").DefineComponent<{
    transferProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        id: StringConstructor;
        prefixCls: StringConstructor;
        dataSource: {
            type: import("vue").PropType<import("ant-design-vue/es/transfer").TransferItem[]>;
            default: any[];
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        targetKeys: {
            type: import("vue").PropType<string[]>;
            default: any;
        };
        selectedKeys: {
            type: import("vue").PropType<string[]>;
            default: any;
        };
        render: {
            type: import("vue").PropType<(item: import("ant-design-vue/es/transfer").TransferItem) => import("ant-design-vue/es/transfer").RenderResult>;
        };
        listStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((style: import("ant-design-vue/es/transfer").ListStyle) => import("vue").CSSProperties)>;
            default: () => {};
        };
        operationStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        titles: {
            type: import("vue").PropType<string[]>;
        };
        operations: {
            type: import("vue").PropType<string[]>;
        };
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterOption: {
            type: import("vue").PropType<(inputValue: string, item: import("ant-design-vue/es/transfer").TransferItem) => boolean>;
        };
        searchPlaceholder: StringConstructor;
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        locale: {
            type: import("vue").PropType<Partial<import("ant-design-vue/es/transfer").TransferLocale>>;
            default: () => {};
        };
        rowKey: {
            type: import("vue").PropType<(record: import("ant-design-vue/es/transfer").TransferItem) => string>;
        };
        showSelectAll: {
            type: BooleanConstructor;
            default: any;
        };
        selectAllLabels: {
            type: import("vue").PropType<import("ant-design-vue/es/transfer").SelectAllLabel[]>;
        };
        children: {
            type: import("vue").PropType<(props: Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                } & {
                    default: () => unknown[];
                };
                selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                showRemove: {
                    type: BooleanConstructor;
                    default: any;
                };
                pagination: import("vue-types").VueTypeValidableDef<any>;
                onItemSelect: FunctionConstructor;
                onScroll: FunctionConstructor;
                onItemRemove: FunctionConstructor;
            }>>) => import("ant-design-vue/es/_util/type").VueNode>;
        };
        oneWay: {
            type: BooleanConstructor;
            default: any;
        };
        pagination: {
            type: import("vue").PropType<import("ant-design-vue/es/transfer/interface").PaginationType>;
            default: any;
        };
        onChange: import("vue").PropType<(targetKeys: string[], direction: import("ant-design-vue/es/transfer").TransferDirection, moveKeys: string[]) => void>;
        onSelectChange: import("vue").PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
        onSearch: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, value: string) => void>;
        onScroll: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, e: UIEvent) => void>;
        'onUpdate:targetKeys': import("vue").PropType<(keys: string[]) => void>;
        'onUpdate:selectedKeys': import("vue").PropType<(keys: string[]) => void>;
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            dataSource: {
                type: import("vue").PropType<import("ant-design-vue/es/transfer").TransferItem[]>;
                default: any[];
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            targetKeys: {
                type: import("vue").PropType<string[]>;
                default: any;
            };
            selectedKeys: {
                type: import("vue").PropType<string[]>;
                default: any;
            };
            render: {
                type: import("vue").PropType<(item: import("ant-design-vue/es/transfer").TransferItem) => import("ant-design-vue/es/transfer").RenderResult>;
            };
            listStyle: {
                type: import("vue").PropType<import("vue").CSSProperties | ((style: import("ant-design-vue/es/transfer").ListStyle) => import("vue").CSSProperties)>;
                default: () => {};
            };
            operationStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            titles: {
                type: import("vue").PropType<string[]>;
            };
            operations: {
                type: import("vue").PropType<string[]>;
            };
            showSearch: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterOption: {
                type: import("vue").PropType<(inputValue: string, item: import("ant-design-vue/es/transfer").TransferItem) => boolean>;
            };
            searchPlaceholder: StringConstructor;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<Partial<import("ant-design-vue/es/transfer").TransferLocale>>;
                default: () => {};
            };
            rowKey: {
                type: import("vue").PropType<(record: import("ant-design-vue/es/transfer").TransferItem) => string>;
            };
            showSelectAll: {
                type: BooleanConstructor;
                default: any;
            };
            selectAllLabels: {
                type: import("vue").PropType<import("ant-design-vue/es/transfer").SelectAllLabel[]>;
            };
            children: {
                type: import("vue").PropType<(props: Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                    } & {
                        default: () => unknown[];
                    };
                    selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showRemove: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pagination: import("vue-types").VueTypeValidableDef<any>;
                    onItemSelect: FunctionConstructor;
                    onScroll: FunctionConstructor;
                    onItemRemove: FunctionConstructor;
                }>>) => import("ant-design-vue/es/_util/type").VueNode>;
            };
            oneWay: {
                type: BooleanConstructor;
                default: any;
            };
            pagination: {
                type: import("vue").PropType<import("ant-design-vue/es/transfer/interface").PaginationType>;
                default: any;
            };
            onChange: import("vue").PropType<(targetKeys: string[], direction: import("ant-design-vue/es/transfer").TransferDirection, moveKeys: string[]) => void>;
            onSelectChange: import("vue").PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
            onSearch: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, value: string) => void>;
            onScroll: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, e: UIEvent) => void>;
            'onUpdate:targetKeys': import("vue").PropType<(keys: string[]) => void>;
            'onUpdate:selectedKeys': import("vue").PropType<(keys: string[]) => void>;
        }>>;
    };
    value: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
        default: () => any[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    transferProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        id: StringConstructor;
        prefixCls: StringConstructor;
        dataSource: {
            type: import("vue").PropType<import("ant-design-vue/es/transfer").TransferItem[]>;
            default: any[];
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        targetKeys: {
            type: import("vue").PropType<string[]>;
            default: any;
        };
        selectedKeys: {
            type: import("vue").PropType<string[]>;
            default: any;
        };
        render: {
            type: import("vue").PropType<(item: import("ant-design-vue/es/transfer").TransferItem) => import("ant-design-vue/es/transfer").RenderResult>;
        };
        listStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((style: import("ant-design-vue/es/transfer").ListStyle) => import("vue").CSSProperties)>;
            default: () => {};
        };
        operationStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        titles: {
            type: import("vue").PropType<string[]>;
        };
        operations: {
            type: import("vue").PropType<string[]>;
        };
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterOption: {
            type: import("vue").PropType<(inputValue: string, item: import("ant-design-vue/es/transfer").TransferItem) => boolean>;
        };
        searchPlaceholder: StringConstructor;
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        locale: {
            type: import("vue").PropType<Partial<import("ant-design-vue/es/transfer").TransferLocale>>;
            default: () => {};
        };
        rowKey: {
            type: import("vue").PropType<(record: import("ant-design-vue/es/transfer").TransferItem) => string>;
        };
        showSelectAll: {
            type: BooleanConstructor;
            default: any;
        };
        selectAllLabels: {
            type: import("vue").PropType<import("ant-design-vue/es/transfer").SelectAllLabel[]>;
        };
        children: {
            type: import("vue").PropType<(props: Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                } & {
                    default: () => unknown[];
                };
                selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                showRemove: {
                    type: BooleanConstructor;
                    default: any;
                };
                pagination: import("vue-types").VueTypeValidableDef<any>;
                onItemSelect: FunctionConstructor;
                onScroll: FunctionConstructor;
                onItemRemove: FunctionConstructor;
            }>>) => import("ant-design-vue/es/_util/type").VueNode>;
        };
        oneWay: {
            type: BooleanConstructor;
            default: any;
        };
        pagination: {
            type: import("vue").PropType<import("ant-design-vue/es/transfer/interface").PaginationType>;
            default: any;
        };
        onChange: import("vue").PropType<(targetKeys: string[], direction: import("ant-design-vue/es/transfer").TransferDirection, moveKeys: string[]) => void>;
        onSelectChange: import("vue").PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
        onSearch: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, value: string) => void>;
        onScroll: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, e: UIEvent) => void>;
        'onUpdate:targetKeys': import("vue").PropType<(keys: string[]) => void>;
        'onUpdate:selectedKeys': import("vue").PropType<(keys: string[]) => void>;
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            dataSource: {
                type: import("vue").PropType<import("ant-design-vue/es/transfer").TransferItem[]>;
                default: any[];
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            targetKeys: {
                type: import("vue").PropType<string[]>;
                default: any;
            };
            selectedKeys: {
                type: import("vue").PropType<string[]>;
                default: any;
            };
            render: {
                type: import("vue").PropType<(item: import("ant-design-vue/es/transfer").TransferItem) => import("ant-design-vue/es/transfer").RenderResult>;
            };
            listStyle: {
                type: import("vue").PropType<import("vue").CSSProperties | ((style: import("ant-design-vue/es/transfer").ListStyle) => import("vue").CSSProperties)>;
                default: () => {};
            };
            operationStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            titles: {
                type: import("vue").PropType<string[]>;
            };
            operations: {
                type: import("vue").PropType<string[]>;
            };
            showSearch: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterOption: {
                type: import("vue").PropType<(inputValue: string, item: import("ant-design-vue/es/transfer").TransferItem) => boolean>;
            };
            searchPlaceholder: StringConstructor;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<Partial<import("ant-design-vue/es/transfer").TransferLocale>>;
                default: () => {};
            };
            rowKey: {
                type: import("vue").PropType<(record: import("ant-design-vue/es/transfer").TransferItem) => string>;
            };
            showSelectAll: {
                type: BooleanConstructor;
                default: any;
            };
            selectAllLabels: {
                type: import("vue").PropType<import("ant-design-vue/es/transfer").SelectAllLabel[]>;
            };
            children: {
                type: import("vue").PropType<(props: Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                    } & {
                        default: () => unknown[];
                    };
                    selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
                        default: () => unknown[];
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showRemove: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pagination: import("vue-types").VueTypeValidableDef<any>;
                    onItemSelect: FunctionConstructor;
                    onScroll: FunctionConstructor;
                    onItemRemove: FunctionConstructor;
                }>>) => import("ant-design-vue/es/_util/type").VueNode>;
            };
            oneWay: {
                type: BooleanConstructor;
                default: any;
            };
            pagination: {
                type: import("vue").PropType<import("ant-design-vue/es/transfer/interface").PaginationType>;
                default: any;
            };
            onChange: import("vue").PropType<(targetKeys: string[], direction: import("ant-design-vue/es/transfer").TransferDirection, moveKeys: string[]) => void>;
            onSelectChange: import("vue").PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
            onSearch: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, value: string) => void>;
            onScroll: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, e: UIEvent) => void>;
            'onUpdate:targetKeys': import("vue").PropType<(keys: string[]) => void>;
            'onUpdate:selectedKeys': import("vue").PropType<(keys: string[]) => void>;
        }>>;
    };
    value: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
        default: () => any[];
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    dataSource: any[];
    value: unknown[];
    transferProps: Partial<import("vue").ExtractPropTypes<{
        id: StringConstructor;
        prefixCls: StringConstructor;
        dataSource: {
            type: import("vue").PropType<import("ant-design-vue/es/transfer").TransferItem[]>;
            default: any[];
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        targetKeys: {
            type: import("vue").PropType<string[]>;
            default: any;
        };
        selectedKeys: {
            type: import("vue").PropType<string[]>;
            default: any;
        };
        render: {
            type: import("vue").PropType<(item: import("ant-design-vue/es/transfer").TransferItem) => import("ant-design-vue/es/transfer").RenderResult>;
        };
        listStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((style: import("ant-design-vue/es/transfer").ListStyle) => import("vue").CSSProperties)>;
            default: () => {};
        };
        operationStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        titles: {
            type: import("vue").PropType<string[]>;
        };
        operations: {
            type: import("vue").PropType<string[]>;
        };
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterOption: {
            type: import("vue").PropType<(inputValue: string, item: import("ant-design-vue/es/transfer").TransferItem) => boolean>;
        };
        searchPlaceholder: StringConstructor;
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        locale: {
            type: import("vue").PropType<Partial<import("ant-design-vue/es/transfer").TransferLocale>>;
            default: () => {};
        };
        rowKey: {
            type: import("vue").PropType<(record: import("ant-design-vue/es/transfer").TransferItem) => string>;
        };
        showSelectAll: {
            type: BooleanConstructor;
            default: any;
        };
        selectAllLabels: {
            type: import("vue").PropType<import("ant-design-vue/es/transfer").SelectAllLabel[]>;
        };
        children: {
            type: import("vue").PropType<(props: Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                } & {
                    default: () => unknown[];
                };
                selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                showRemove: {
                    type: BooleanConstructor;
                    default: any;
                };
                pagination: import("vue-types").VueTypeValidableDef<any>;
                onItemSelect: FunctionConstructor;
                onScroll: FunctionConstructor;
                onItemRemove: FunctionConstructor;
            }>>) => import("ant-design-vue/es/_util/type").VueNode>;
        };
        oneWay: {
            type: BooleanConstructor;
            default: any;
        };
        pagination: {
            type: import("vue").PropType<import("ant-design-vue/es/transfer/interface").PaginationType>;
            default: any;
        };
        onChange: import("vue").PropType<(targetKeys: string[], direction: import("ant-design-vue/es/transfer").TransferDirection, moveKeys: string[]) => void>;
        onSelectChange: import("vue").PropType<(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void>;
        onSearch: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, value: string) => void>;
        onScroll: import("vue").PropType<(direction: import("ant-design-vue/es/transfer").TransferDirection, e: UIEvent) => void>;
        'onUpdate:targetKeys': import("vue").PropType<(keys: string[]) => void>;
        'onUpdate:selectedKeys': import("vue").PropType<(keys: string[]) => void>;
    }>>;
}>, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    value: unknown[];
}>;
export default _default;
