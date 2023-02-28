declare const _default: import("vue").DefineComponent<{
    selectProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
        mode: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: StringConstructor;
            default: string;
        };
        'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onChange: import("vue").PropType<(value: import("ant-design-vue/es/select").SelectValue, option: import("ant-design-vue/es/select").DefaultOptionType | import("ant-design-vue/es/select").DefaultOptionType[]) => void>;
        onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
        onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
        onClick: import("vue").PropType<(e: MouseEvent) => void>;
        onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
        onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
        prefixCls: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        open: {
            type: BooleanConstructor;
            default: any;
        };
        animation: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        dropdownMatchSelectWidth: {
            type: import("vue").PropType<number | boolean>;
            default: any;
        };
        children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
        showAction: {
            type: import("vue").PropType<("click" | "focus")[]>;
        };
        id: StringConstructor;
        placement: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
        };
        autofocus: BooleanConstructor;
        options: import("vue").PropType<import("ant-design-vue/es/select").DefaultOptionType[]>;
        fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").FieldNames>;
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        dropdownClassName: StringConstructor;
        dropdownRender: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").DropdownRender>;
        };
        dropdownAlign: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        searchValue: StringConstructor;
        onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: import("vue").PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tokenSeparators: {
            type: import("vue").PropType<string[]>;
        };
        tagRender: {
            type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
        };
        optionLabelRender: {
            type: import("vue").PropType<(option: Record<string, any>) => any>;
        };
        onSearch: import("vue").PropType<(value: string) => void>;
        onClear: import("vue").PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
        menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
        listHeight: NumberConstructor;
        listItemHeight: NumberConstructor;
        inputValue: StringConstructor;
        autoClearSearchValue: {
            type: BooleanConstructor;
            default: any;
        };
        onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
        filterOption: {
            type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-select/Select").FilterFunc<import("ant-design-vue/es/select").DefaultOptionType>>;
            default: any;
        };
        filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
        optionFilterProp: StringConstructor;
        optionLabelProp: StringConstructor;
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: any;
        };
        labelInValue: {
            type: BooleanConstructor;
            default: any;
        };
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
            };
            defaultValue: {
                type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
            mode: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: StringConstructor;
                default: string;
            };
            'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
            onFocus: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/select").SelectValue, option: import("ant-design-vue/es/select").DefaultOptionType | import("ant-design-vue/es/select").DefaultOptionType[]) => void>;
            onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
            onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
            onClick: import("vue").PropType<(e: MouseEvent) => void>;
            onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
            onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
            onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
            prefixCls: StringConstructor;
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            animation: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            dropdownMatchSelectWidth: {
                type: import("vue").PropType<number | boolean>;
                default: any;
            };
            children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
            showAction: {
                type: import("vue").PropType<("click" | "focus")[]>;
            };
            id: StringConstructor;
            placement: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
            };
            autofocus: BooleanConstructor;
            options: import("vue").PropType<import("ant-design-vue/es/select").DefaultOptionType[]>;
            fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").FieldNames>;
            dropdownStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            showSearch: {
                type: BooleanConstructor;
                default: any;
            };
            searchValue: StringConstructor;
            onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
            removeIcon: import("vue-types").VueTypeValidableDef<any>;
            maxTagCount: {
                type: import("vue").PropType<number | "responsive">;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
            tokenSeparators: {
                type: import("vue").PropType<string[]>;
            };
            tagRender: {
                type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
            };
            optionLabelRender: {
                type: import("vue").PropType<(option: Record<string, any>) => any>;
            };
            onSearch: import("vue").PropType<(value: string) => void>;
            onClear: import("vue").PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: {
                type: import("vue").PropType<(open: boolean) => void>;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
            menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
            listHeight: NumberConstructor;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
                type: BooleanConstructor;
                default: any;
            };
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
            filterOption: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-select/Select").FilterFunc<import("ant-design-vue/es/select").DefaultOptionType>>;
                default: any;
            };
            filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
            optionFilterProp: StringConstructor;
            optionLabelProp: StringConstructor;
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: any;
            };
            labelInValue: {
                type: BooleanConstructor;
                default: any;
            };
        }>>;
    };
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
}, unknown, {
    inputValue: string;
    selectedKeys: never[];
}, {}, {
    $renderDropdownRender(): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selectProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
        mode: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: StringConstructor;
            default: string;
        };
        'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onChange: import("vue").PropType<(value: import("ant-design-vue/es/select").SelectValue, option: import("ant-design-vue/es/select").DefaultOptionType | import("ant-design-vue/es/select").DefaultOptionType[]) => void>;
        onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
        onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
        onClick: import("vue").PropType<(e: MouseEvent) => void>;
        onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
        onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
        prefixCls: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        open: {
            type: BooleanConstructor;
            default: any;
        };
        animation: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        dropdownMatchSelectWidth: {
            type: import("vue").PropType<number | boolean>;
            default: any;
        };
        children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
        showAction: {
            type: import("vue").PropType<("click" | "focus")[]>;
        };
        id: StringConstructor;
        placement: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
        };
        autofocus: BooleanConstructor;
        options: import("vue").PropType<import("ant-design-vue/es/select").DefaultOptionType[]>;
        fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").FieldNames>;
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        dropdownClassName: StringConstructor;
        dropdownRender: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").DropdownRender>;
        };
        dropdownAlign: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        searchValue: StringConstructor;
        onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: import("vue").PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tokenSeparators: {
            type: import("vue").PropType<string[]>;
        };
        tagRender: {
            type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
        };
        optionLabelRender: {
            type: import("vue").PropType<(option: Record<string, any>) => any>;
        };
        onSearch: import("vue").PropType<(value: string) => void>;
        onClear: import("vue").PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
        menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
        listHeight: NumberConstructor;
        listItemHeight: NumberConstructor;
        inputValue: StringConstructor;
        autoClearSearchValue: {
            type: BooleanConstructor;
            default: any;
        };
        onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
        filterOption: {
            type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-select/Select").FilterFunc<import("ant-design-vue/es/select").DefaultOptionType>>;
            default: any;
        };
        filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
        optionFilterProp: StringConstructor;
        optionLabelProp: StringConstructor;
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: any;
        };
        labelInValue: {
            type: BooleanConstructor;
            default: any;
        };
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
            };
            defaultValue: {
                type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
            mode: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: StringConstructor;
                default: string;
            };
            'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
            onFocus: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/select").SelectValue, option: import("ant-design-vue/es/select").DefaultOptionType | import("ant-design-vue/es/select").DefaultOptionType[]) => void>;
            onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
            onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
            onClick: import("vue").PropType<(e: MouseEvent) => void>;
            onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
            onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
            onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
            prefixCls: StringConstructor;
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            animation: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            dropdownMatchSelectWidth: {
                type: import("vue").PropType<number | boolean>;
                default: any;
            };
            children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
            showAction: {
                type: import("vue").PropType<("click" | "focus")[]>;
            };
            id: StringConstructor;
            placement: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
            };
            autofocus: BooleanConstructor;
            options: import("vue").PropType<import("ant-design-vue/es/select").DefaultOptionType[]>;
            fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").FieldNames>;
            dropdownStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            showSearch: {
                type: BooleanConstructor;
                default: any;
            };
            searchValue: StringConstructor;
            onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
            removeIcon: import("vue-types").VueTypeValidableDef<any>;
            maxTagCount: {
                type: import("vue").PropType<number | "responsive">;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
            tokenSeparators: {
                type: import("vue").PropType<string[]>;
            };
            tagRender: {
                type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
            };
            optionLabelRender: {
                type: import("vue").PropType<(option: Record<string, any>) => any>;
            };
            onSearch: import("vue").PropType<(value: string) => void>;
            onClear: import("vue").PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: {
                type: import("vue").PropType<(open: boolean) => void>;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
            menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
            listHeight: NumberConstructor;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
                type: BooleanConstructor;
                default: any;
            };
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
            filterOption: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-select/Select").FilterFunc<import("ant-design-vue/es/select").DefaultOptionType>>;
                default: any;
            };
            filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
            optionFilterProp: StringConstructor;
            optionLabelProp: StringConstructor;
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: any;
            };
            labelInValue: {
                type: BooleanConstructor;
                default: any;
            };
        }>>;
    };
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
    selectProps: Partial<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
        mode: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: StringConstructor;
            default: string;
        };
        'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onChange: import("vue").PropType<(value: import("ant-design-vue/es/select").SelectValue, option: import("ant-design-vue/es/select").DefaultOptionType | import("ant-design-vue/es/select").DefaultOptionType[]) => void>;
        onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
        onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
        onClick: import("vue").PropType<(e: MouseEvent) => void>;
        onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
        onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
        prefixCls: StringConstructor;
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
        };
        open: {
            type: BooleanConstructor;
            default: any;
        };
        animation: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        dropdownMatchSelectWidth: {
            type: import("vue").PropType<number | boolean>;
            default: any;
        };
        children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
        showAction: {
            type: import("vue").PropType<("click" | "focus")[]>;
        };
        id: StringConstructor;
        placement: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
        };
        autofocus: BooleanConstructor;
        options: import("vue").PropType<import("ant-design-vue/es/select").DefaultOptionType[]>;
        fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").FieldNames>;
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        dropdownClassName: StringConstructor;
        dropdownRender: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").DropdownRender>;
        };
        dropdownAlign: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        searchValue: StringConstructor;
        onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: import("vue").PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tokenSeparators: {
            type: import("vue").PropType<string[]>;
        };
        tagRender: {
            type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
        };
        optionLabelRender: {
            type: import("vue").PropType<(option: Record<string, any>) => any>;
        };
        onSearch: import("vue").PropType<(value: string) => void>;
        onClear: import("vue").PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
        menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
        listHeight: NumberConstructor;
        listItemHeight: NumberConstructor;
        inputValue: StringConstructor;
        autoClearSearchValue: {
            type: BooleanConstructor;
            default: any;
        };
        onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<import("ant-design-vue/es/select").LabeledValue | (string | number), import("ant-design-vue/es/select").DefaultOptionType>>;
        filterOption: {
            type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-select/Select").FilterFunc<import("ant-design-vue/es/select").DefaultOptionType>>;
            default: any;
        };
        filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
        optionFilterProp: StringConstructor;
        optionLabelProp: StringConstructor;
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: any;
        };
        labelInValue: {
            type: BooleanConstructor;
            default: any;
        };
    }>>;
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
}>;
export default _default;
