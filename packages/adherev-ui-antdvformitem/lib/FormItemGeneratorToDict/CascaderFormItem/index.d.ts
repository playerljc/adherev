declare const _default: import("vue").DefineComponent<{
    cascaderProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        placement: {
            type: import("vue").PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
        };
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        options: import("vue").PropType<import("ant-design-vue/es/cascader").CascaderOptionType[]>;
        'onUpdate:value': import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType) => void>;
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[] | import("ant-design-vue/es/cascader").DefaultOptionType[][]) => void>;
        onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
        onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
        onClick: import("vue").PropType<(e: MouseEvent) => void>;
        onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
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
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
        };
        dropdownMatchSelectWidth: {
            type: import("vue").PropType<number | boolean>;
            default: any;
        };
        children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
        transitionName: StringConstructor;
        popupClassName: StringConstructor;
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        popupVisible: {
            type: BooleanConstructor;
            default: any;
        };
        showAction: {
            type: import("vue").PropType<("click" | "focus")[]>;
        };
        popupPlacement: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
        onPopupVisibleChange: import("vue").PropType<(open: boolean) => void>;
        id: StringConstructor;
        autofocus: BooleanConstructor;
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
        };
        fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-cascader").FieldNames>;
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
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
        loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[]) => void>;
        showSearch: {
            type: import("vue").PropType<boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>>;
            default: boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>;
        };
        searchValue: StringConstructor;
        onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: import("vue").PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tagRender: {
            type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
        };
        choiceTransitionName: StringConstructor;
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
        onDropdownVisibleChange: import("vue").PropType<(open: boolean) => void>;
        getInputElement: {
            type: import("vue").PropType<() => any>;
        };
        getRawInputElement: {
            type: import("vue").PropType<() => any>;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        inputIcon: import("vue-types").VueTypeValidableDef<any>;
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
        expandIcon: import("vue-types").VueTypeValidableDef<any>;
        changeOnSelect: {
            type: BooleanConstructor;
            default: any;
        };
        displayRender: import("vue").PropType<(opt: {
            labels: string[];
            selectedOptions?: import("ant-design-vue/es/cascader").DefaultOptionType[] | undefined;
        }) => any>;
        showCheckedStrategy: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ShowCheckedStrategy>;
            default: string;
        };
        expandTrigger: import("vue").PropType<"click" | "hover">;
        dropdownPrefixCls: StringConstructor;
        dropdownMenuColumnStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            placement: {
                type: import("vue").PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
            };
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            options: import("vue").PropType<import("ant-design-vue/es/cascader").CascaderOptionType[]>;
            'onUpdate:value': import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType) => void>;
            onFocus: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[] | import("ant-design-vue/es/cascader").DefaultOptionType[][]) => void>;
            onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
            onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
            onClick: import("vue").PropType<(e: MouseEvent) => void>;
            onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
            onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
            onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
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
            value: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
            };
            dropdownMatchSelectWidth: {
                type: import("vue").PropType<number | boolean>;
                default: any;
            };
            children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
            transitionName: StringConstructor;
            popupClassName: StringConstructor;
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            popupVisible: {
                type: BooleanConstructor;
                default: any;
            };
            showAction: {
                type: import("vue").PropType<("click" | "focus")[]>;
            };
            popupPlacement: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
            onPopupVisibleChange: import("vue").PropType<(open: boolean) => void>;
            id: StringConstructor;
            autofocus: BooleanConstructor;
            defaultValue: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
            };
            fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-cascader").FieldNames>;
            dropdownStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
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
            loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[]) => void>;
            showSearch: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>>;
                default: boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>;
            };
            searchValue: StringConstructor;
            onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
            removeIcon: import("vue-types").VueTypeValidableDef<any>;
            maxTagCount: {
                type: import("vue").PropType<number | "responsive">;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
            tagRender: {
                type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
            };
            choiceTransitionName: StringConstructor;
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
            onDropdownVisibleChange: import("vue").PropType<(open: boolean) => void>;
            getInputElement: {
                type: import("vue").PropType<() => any>;
            };
            getRawInputElement: {
                type: import("vue").PropType<() => any>;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            inputIcon: import("vue-types").VueTypeValidableDef<any>;
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
            expandIcon: import("vue-types").VueTypeValidableDef<any>;
            changeOnSelect: {
                type: BooleanConstructor;
                default: any;
            };
            displayRender: import("vue").PropType<(opt: {
                labels: string[];
                selectedOptions?: import("ant-design-vue/es/cascader").DefaultOptionType[] | undefined;
            }) => any>;
            showCheckedStrategy: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ShowCheckedStrategy>;
                default: string;
            };
            expandTrigger: import("vue").PropType<"click" | "hover">;
            dropdownPrefixCls: StringConstructor;
            dropdownMenuColumnStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            loadingIcon: import("vue-types").VueTypeValidableDef<any>;
        }>>;
    };
    value: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cascaderProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        placement: {
            type: import("vue").PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
        };
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        options: import("vue").PropType<import("ant-design-vue/es/cascader").CascaderOptionType[]>;
        'onUpdate:value': import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType) => void>;
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[] | import("ant-design-vue/es/cascader").DefaultOptionType[][]) => void>;
        onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
        onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
        onClick: import("vue").PropType<(e: MouseEvent) => void>;
        onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
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
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
        };
        dropdownMatchSelectWidth: {
            type: import("vue").PropType<number | boolean>;
            default: any;
        };
        children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
        transitionName: StringConstructor;
        popupClassName: StringConstructor;
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        popupVisible: {
            type: BooleanConstructor;
            default: any;
        };
        showAction: {
            type: import("vue").PropType<("click" | "focus")[]>;
        };
        popupPlacement: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
        onPopupVisibleChange: import("vue").PropType<(open: boolean) => void>;
        id: StringConstructor;
        autofocus: BooleanConstructor;
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
        };
        fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-cascader").FieldNames>;
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
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
        loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[]) => void>;
        showSearch: {
            type: import("vue").PropType<boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>>;
            default: boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>;
        };
        searchValue: StringConstructor;
        onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: import("vue").PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tagRender: {
            type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
        };
        choiceTransitionName: StringConstructor;
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
        onDropdownVisibleChange: import("vue").PropType<(open: boolean) => void>;
        getInputElement: {
            type: import("vue").PropType<() => any>;
        };
        getRawInputElement: {
            type: import("vue").PropType<() => any>;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        inputIcon: import("vue-types").VueTypeValidableDef<any>;
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
        expandIcon: import("vue-types").VueTypeValidableDef<any>;
        changeOnSelect: {
            type: BooleanConstructor;
            default: any;
        };
        displayRender: import("vue").PropType<(opt: {
            labels: string[];
            selectedOptions?: import("ant-design-vue/es/cascader").DefaultOptionType[] | undefined;
        }) => any>;
        showCheckedStrategy: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ShowCheckedStrategy>;
            default: string;
        };
        expandTrigger: import("vue").PropType<"click" | "hover">;
        dropdownPrefixCls: StringConstructor;
        dropdownMenuColumnStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            placement: {
                type: import("vue").PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
            };
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            options: import("vue").PropType<import("ant-design-vue/es/cascader").CascaderOptionType[]>;
            'onUpdate:value': import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType) => void>;
            onFocus: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[] | import("ant-design-vue/es/cascader").DefaultOptionType[][]) => void>;
            onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
            onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
            onClick: import("vue").PropType<(e: MouseEvent) => void>;
            onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
            onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
            onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
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
            value: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
            };
            tabindex: NumberConstructor;
            getPopupContainer: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
            };
            dropdownMatchSelectWidth: {
                type: import("vue").PropType<number | boolean>;
                default: any;
            };
            children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
            transitionName: StringConstructor;
            popupClassName: StringConstructor;
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            popupVisible: {
                type: BooleanConstructor;
                default: any;
            };
            showAction: {
                type: import("vue").PropType<("click" | "focus")[]>;
            };
            popupPlacement: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
            onPopupVisibleChange: import("vue").PropType<(open: boolean) => void>;
            id: StringConstructor;
            autofocus: BooleanConstructor;
            defaultValue: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
            };
            fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-cascader").FieldNames>;
            dropdownStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
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
            loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[]) => void>;
            showSearch: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>>;
                default: boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>;
            };
            searchValue: StringConstructor;
            onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
            removeIcon: import("vue-types").VueTypeValidableDef<any>;
            maxTagCount: {
                type: import("vue").PropType<number | "responsive">;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
            tagRender: {
                type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
            };
            choiceTransitionName: StringConstructor;
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
            onDropdownVisibleChange: import("vue").PropType<(open: boolean) => void>;
            getInputElement: {
                type: import("vue").PropType<() => any>;
            };
            getRawInputElement: {
                type: import("vue").PropType<() => any>;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            inputIcon: import("vue-types").VueTypeValidableDef<any>;
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
            expandIcon: import("vue-types").VueTypeValidableDef<any>;
            changeOnSelect: {
                type: BooleanConstructor;
                default: any;
            };
            displayRender: import("vue").PropType<(opt: {
                labels: string[];
                selectedOptions?: import("ant-design-vue/es/cascader").DefaultOptionType[] | undefined;
            }) => any>;
            showCheckedStrategy: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ShowCheckedStrategy>;
                default: string;
            };
            expandTrigger: import("vue").PropType<"click" | "hover">;
            dropdownPrefixCls: StringConstructor;
            dropdownMenuColumnStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            loadingIcon: import("vue-types").VueTypeValidableDef<any>;
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
    cascaderProps: Partial<import("vue").ExtractPropTypes<{
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        size: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        placement: {
            type: import("vue").PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
        };
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        options: import("vue").PropType<import("ant-design-vue/es/cascader").CascaderOptionType[]>;
        'onUpdate:value': import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType) => void>;
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[] | import("ant-design-vue/es/cascader").DefaultOptionType[][]) => void>;
        onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
        onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
        onClick: import("vue").PropType<(e: MouseEvent) => void>;
        onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
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
        value: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
        };
        tabindex: NumberConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").RenderDOMFunc>;
        };
        dropdownMatchSelectWidth: {
            type: import("vue").PropType<number | boolean>;
            default: any;
        };
        children: import("vue").PropType<import("ant-design-vue/es/_util/type").VueNode[]>;
        transitionName: StringConstructor;
        popupClassName: StringConstructor;
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        popupVisible: {
            type: BooleanConstructor;
            default: any;
        };
        showAction: {
            type: import("vue").PropType<("click" | "focus")[]>;
        };
        popupPlacement: import("vue").PropType<import("ant-design-vue/es/vc-select/BaseSelect").Placement>;
        onPopupVisibleChange: import("vue").PropType<(open: boolean) => void>;
        id: StringConstructor;
        autofocus: BooleanConstructor;
        defaultValue: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ValueType>;
        };
        fieldNames: import("vue").PropType<import("ant-design-vue/es/vc-cascader").FieldNames>;
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
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
        loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/cascader").DefaultOptionType[]) => void>;
        showSearch: {
            type: import("vue").PropType<boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>>;
            default: boolean | import("ant-design-vue/es/cascader").ShowSearchType<import("ant-design-vue/es/cascader").DefaultOptionType>;
        };
        searchValue: StringConstructor;
        onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: import("vue").PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tagRender: {
            type: import("vue").PropType<(props: import("ant-design-vue/es/vc-select/BaseSelect").CustomTagProps) => any>;
        };
        choiceTransitionName: StringConstructor;
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
        onDropdownVisibleChange: import("vue").PropType<(open: boolean) => void>;
        getInputElement: {
            type: import("vue").PropType<() => any>;
        };
        getRawInputElement: {
            type: import("vue").PropType<() => any>;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        inputIcon: import("vue-types").VueTypeValidableDef<any>;
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
        expandIcon: import("vue-types").VueTypeValidableDef<any>;
        changeOnSelect: {
            type: BooleanConstructor;
            default: any;
        };
        displayRender: import("vue").PropType<(opt: {
            labels: string[];
            selectedOptions?: import("ant-design-vue/es/cascader").DefaultOptionType[] | undefined;
        }) => any>;
        showCheckedStrategy: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-cascader/Cascader").ShowCheckedStrategy>;
            default: string;
        };
        expandTrigger: import("vue").PropType<"click" | "hover">;
        dropdownPrefixCls: StringConstructor;
        dropdownMenuColumnStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    }>>;
}>;
export default _default;
