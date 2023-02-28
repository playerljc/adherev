declare const _default: import("vue").DefineComponent<{
    autoCompleteProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        dataSource: import("vue").PropType<string[] | {
            value: any;
            text: any;
        }[]>;
        dropdownMenuStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        dropdownMatchSelectWidth: {
            type: (BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        prefixCls: StringConstructor;
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: StringConstructor;
            default: string;
        };
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        backfill: {
            type: BooleanConstructor;
            default: any;
        };
        filterOption: {
            type: (BooleanConstructor | FunctionConstructor)[];
            default: boolean;
        };
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: boolean;
        };
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
        onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
        size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
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
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
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
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
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
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
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
        onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
        filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
        optionFilterProp: StringConstructor;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            dataSource: import("vue").PropType<string[] | {
                value: any;
                text: any;
            }[]>;
            dropdownMenuStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            dropdownMatchSelectWidth: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            prefixCls: StringConstructor;
            showSearch: {
                type: BooleanConstructor;
                default: any;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: StringConstructor;
                default: string;
            };
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            backfill: {
                type: BooleanConstructor;
                default: any;
            };
            filterOption: {
                type: (BooleanConstructor | FunctionConstructor)[];
                default: boolean;
            };
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: boolean;
            };
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
            size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
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
            value: {
                type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
            };
            virtual: {
                type: BooleanConstructor;
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
            defaultValue: {
                type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
            };
            'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
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
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
            filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
            optionFilterProp: StringConstructor;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>;
    };
    value: import("vue-types").VueTypeValidableDef<{
        inputValue: string;
        selectValue: string | number;
    }> & {
        default: () => {
            inputValue: string;
            selectValue: string | number;
        };
    };
    dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
        default: () => any[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    autoCompleteProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        dataSource: import("vue").PropType<string[] | {
            value: any;
            text: any;
        }[]>;
        dropdownMenuStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        dropdownMatchSelectWidth: {
            type: (BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        prefixCls: StringConstructor;
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: StringConstructor;
            default: string;
        };
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        backfill: {
            type: BooleanConstructor;
            default: any;
        };
        filterOption: {
            type: (BooleanConstructor | FunctionConstructor)[];
            default: boolean;
        };
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: boolean;
        };
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
        onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
        size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
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
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
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
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
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
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
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
        onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
        filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
        optionFilterProp: StringConstructor;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            dataSource: import("vue").PropType<string[] | {
                value: any;
                text: any;
            }[]>;
            dropdownMenuStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            dropdownMatchSelectWidth: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            prefixCls: StringConstructor;
            showSearch: {
                type: BooleanConstructor;
                default: any;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: StringConstructor;
                default: string;
            };
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            backfill: {
                type: BooleanConstructor;
                default: any;
            };
            filterOption: {
                type: (BooleanConstructor | FunctionConstructor)[];
                default: boolean;
            };
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: boolean;
            };
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
            size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
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
            value: {
                type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
            };
            virtual: {
                type: BooleanConstructor;
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
            defaultValue: {
                type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
            };
            'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
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
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
            filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
            optionFilterProp: StringConstructor;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>;
    };
    value: import("vue-types").VueTypeValidableDef<{
        inputValue: string;
        selectValue: string | number;
    }> & {
        default: () => {
            inputValue: string;
            selectValue: string | number;
        };
    };
    dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
        default: () => any[];
    };
}>>, {
    dataSource: any[];
    value: {
        inputValue: string;
        selectValue: string | number;
    };
    autoCompleteProps: Partial<import("vue").ExtractPropTypes<{
        dataSource: import("vue").PropType<string[] | {
            value: any;
            text: any;
        }[]>;
        dropdownMenuStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        dropdownMatchSelectWidth: {
            type: (BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        prefixCls: StringConstructor;
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: StringConstructor;
            default: string;
        };
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        backfill: {
            type: BooleanConstructor;
            default: any;
        };
        filterOption: {
            type: (BooleanConstructor | FunctionConstructor)[];
            default: boolean;
        };
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: boolean;
        };
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
        onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
        size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
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
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
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
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/select").SelectValue>;
        };
        'onUpdate:value': import("vue").PropType<(val: import("ant-design-vue/es/select").SelectValue) => void>;
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
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
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
        onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<string | number | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
        filterSort: import("vue").PropType<(optionA: import("ant-design-vue/es/select").DefaultOptionType, optionB: import("ant-design-vue/es/select").DefaultOptionType) => number>;
        optionFilterProp: StringConstructor;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>;
}>;
export default _default;
