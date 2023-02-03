declare const DictFormItem: {
    init(Vue: any): void;
    getComponents(): any;
};
declare const FunctionComponents: Pick<{
    CheckAllMulitSelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
    }, unknown, {
        checked: boolean;
    }, {}, {
        $onCheckAllChange(e: any): void;
        $onChange(values: any): void;
        $dropdownRender({ menuNode }: {
            menuNode: any;
        }): JSX.Element;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "checkAllChange")[], "change" | "checkAllChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        onCheckAllChange?: ((...args: any[]) => any) | undefined;
    }, {
        dataSource: unknown[];
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
    }>;
    CheckBoxCheckAllSelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
    }, unknown, {
        inputValue: string;
        checkAll: boolean;
    }, {}, {
        $renderDropdownRender(): JSX.Element;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "blur")[], "change" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
    }>> & {
        onBlur?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
    }, {
        dataSource: unknown[];
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
    }>;
    CheckBoxCheckAllCustomFormItem: import("vue").DefineComponent<any, unknown, {
        checkAll: boolean;
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {} | {
        [x: string]: any;
    }>;
    CheckBoxCustomFormItem: import("vue").DefineComponent<{
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
    CheckBoxHorizontalFormItem: import("vue").DefineComponent<{
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
    CheckBoxVerticalFormItem: import("vue").DefineComponent<{
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
    CheckBoxCheckAllVerticalFormItem: import("vue").DefineComponent<any, unknown, {
        checkAll: boolean;
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {} | {
        [x: string]: any;
    }>;
    CheckBoxCheckAllHorizontalFormItem: import("vue").DefineComponent<any, unknown, {
        checkAll: boolean;
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {} | {
        [x: string]: any;
    }>;
    CheckBoxSelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
    }, unknown, {
        inputValue: string;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
    }>;
    ListFormItem: import("vue").DefineComponent<{
        listProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                default: import("ant-design-vue/es/list").ListGridType;
            };
            itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
            loading: {
                type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes)>;
                default: boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
            renderItem: import("vue").PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
            };
        }>>> & {
            default: () => Partial<import("vue").ExtractPropTypes<{
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                extra: import("vue-types").VueTypeValidableDef<any>;
                grid: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                    default: import("ant-design-vue/es/list").ListGridType;
                };
                itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
                loading: {
                    type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes)>;
                    default: boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes);
                };
                loadMore: import("vue-types").VueTypeValidableDef<any>;
                pagination: {
                    type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>>;
                    default: false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>;
                };
                prefixCls: StringConstructor;
                rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
                renderItem: import("vue").PropType<(opt: {
                    item: any;
                    index: number;
                }) => any>;
                size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
                split: {
                    type: BooleanConstructor;
                    default: any;
                };
                header: import("vue-types").VueTypeValidableDef<any>;
                footer: import("vue-types").VueTypeValidableDef<any>;
                locale: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
                };
            }>>;
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        listProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                default: import("ant-design-vue/es/list").ListGridType;
            };
            itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
            loading: {
                type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes)>;
                default: boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
            renderItem: import("vue").PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
            };
        }>>> & {
            default: () => Partial<import("vue").ExtractPropTypes<{
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                extra: import("vue-types").VueTypeValidableDef<any>;
                grid: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                    default: import("ant-design-vue/es/list").ListGridType;
                };
                itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
                loading: {
                    type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes)>;
                    default: boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes);
                };
                loadMore: import("vue-types").VueTypeValidableDef<any>;
                pagination: {
                    type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>>;
                    default: false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>;
                };
                prefixCls: StringConstructor;
                rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
                renderItem: import("vue").PropType<(opt: {
                    item: any;
                    index: number;
                }) => any>;
                size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
                split: {
                    type: BooleanConstructor;
                    default: any;
                };
                header: import("vue-types").VueTypeValidableDef<any>;
                footer: import("vue-types").VueTypeValidableDef<any>;
                locale: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
                };
            }>>;
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {
        rowKey: string;
        listProps: Partial<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                default: import("ant-design-vue/es/list").ListGridType;
            };
            itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
            loading: {
                type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes)>;
                default: boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
            renderItem: import("vue").PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
            };
        }>>;
    }>;
    ListSelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        listProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                default: import("ant-design-vue/es/list").ListGridType;
            };
            itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
            loading: {
                type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes)>;
                default: boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
            renderItem: import("vue").PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
            };
        }>>> & {
            default: () => Partial<import("vue").ExtractPropTypes<{
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                extra: import("vue-types").VueTypeValidableDef<any>;
                grid: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                    default: import("ant-design-vue/es/list").ListGridType;
                };
                itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
                loading: {
                    type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes)>;
                    default: boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes);
                };
                loadMore: import("vue-types").VueTypeValidableDef<any>;
                pagination: {
                    type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>>;
                    default: false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>;
                };
                prefixCls: StringConstructor;
                rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
                renderItem: import("vue").PropType<(opt: {
                    item: any;
                    index: number;
                }) => any>;
                size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
                split: {
                    type: BooleanConstructor;
                    default: any;
                };
                header: import("vue-types").VueTypeValidableDef<any>;
                footer: import("vue-types").VueTypeValidableDef<any>;
                locale: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
                };
            }>>;
        };
        value: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, unknown, {
        inputValue: string;
        selectedRowKeys: string[];
        selectedRows: any;
    }, {}, {
        RadioWrap({ item }: {
            item: any;
        }): JSX.Element;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        listProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                default: import("ant-design-vue/es/list").ListGridType;
            };
            itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
            loading: {
                type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes)>;
                default: boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
            renderItem: import("vue").PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
            };
        }>>> & {
            default: () => Partial<import("vue").ExtractPropTypes<{
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                extra: import("vue-types").VueTypeValidableDef<any>;
                grid: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                    default: import("ant-design-vue/es/list").ListGridType;
                };
                itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
                loading: {
                    type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes)>;
                    default: boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes);
                };
                loadMore: import("vue-types").VueTypeValidableDef<any>;
                pagination: {
                    type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>>;
                    default: false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>;
                };
                prefixCls: StringConstructor;
                rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
                renderItem: import("vue").PropType<(opt: {
                    item: any;
                    index: number;
                }) => any>;
                size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
                split: {
                    type: BooleanConstructor;
                    default: any;
                };
                header: import("vue-types").VueTypeValidableDef<any>;
                footer: import("vue-types").VueTypeValidableDef<any>;
                locale: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
                };
            }>>;
        };
        value: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {
        dataSource: any[];
        value: string;
        rowKey: string;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        listProps: Partial<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                default: import("ant-design-vue/es/list").ListGridType;
            };
            itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
            loading: {
                type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes)>;
                default: boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
            renderItem: import("vue").PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
            };
        }>>;
        labelKey: string;
    }>;
    ListMulitSelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        listProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                default: import("ant-design-vue/es/list").ListGridType;
            };
            itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
            loading: {
                type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes)>;
                default: boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
            renderItem: import("vue").PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
            };
        }>>> & {
            default: () => Partial<import("vue").ExtractPropTypes<{
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                extra: import("vue-types").VueTypeValidableDef<any>;
                grid: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                    default: import("ant-design-vue/es/list").ListGridType;
                };
                itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
                loading: {
                    type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes)>;
                    default: boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes);
                };
                loadMore: import("vue-types").VueTypeValidableDef<any>;
                pagination: {
                    type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>>;
                    default: false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>;
                };
                prefixCls: StringConstructor;
                rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
                renderItem: import("vue").PropType<(opt: {
                    item: any;
                    index: number;
                }) => any>;
                size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
                split: {
                    type: BooleanConstructor;
                    default: any;
                };
                header: import("vue-types").VueTypeValidableDef<any>;
                footer: import("vue-types").VueTypeValidableDef<any>;
                locale: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
                };
            }>>;
        };
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, unknown, {
        inputValue: string;
        selectedRowKeys: unknown[];
        selectedRows: any[];
    }, {}, {
        CheckWrap({ item }: {
            item: any;
        }): JSX.Element;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        listProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                default: import("ant-design-vue/es/list").ListGridType;
            };
            itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
            loading: {
                type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes)>;
                default: boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
            renderItem: import("vue").PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
            };
        }>>> & {
            default: () => Partial<import("vue").ExtractPropTypes<{
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                    default: () => unknown[];
                };
                extra: import("vue-types").VueTypeValidableDef<any>;
                grid: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                    default: import("ant-design-vue/es/list").ListGridType;
                };
                itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
                loading: {
                    type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes)>;
                    default: boolean | (Partial<import("vue").ExtractPropTypes<{
                        prefixCls: StringConstructor;
                        spinning: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                        wrapperClassName: StringConstructor;
                        tip: import("vue-types").VueTypeValidableDef<any>;
                        delay: NumberConstructor;
                        indicator: import("vue-types").VueTypeValidableDef<any>;
                    }>> & import("vue").HTMLAttributes);
                };
                loadMore: import("vue-types").VueTypeValidableDef<any>;
                pagination: {
                    type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>>;
                    default: false | Partial<import("vue").ExtractPropTypes<{
                        position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                        total: NumberConstructor;
                        defaultCurrent: NumberConstructor;
                        disabled: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        current: NumberConstructor;
                        defaultPageSize: NumberConstructor;
                        pageSize: NumberConstructor;
                        hideOnSinglePage: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        showSizeChanger: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        pageSizeOptions: import("vue").PropType<(string | number)[]>;
                        buildOptionText: import("vue").PropType<(opt: {
                            value: any;
                        }) => any>;
                        showQuickJumper: {
                            type: import("vue").PropType<boolean | {
                                goButton?: any;
                            }>;
                            default: boolean | {
                                goButton?: any;
                            };
                        };
                        showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                        size: import("vue").PropType<"default" | "small">;
                        simple: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        locale: ObjectConstructor;
                        prefixCls: StringConstructor;
                        selectPrefixCls: StringConstructor;
                        totalBoundaryShowSizeChanger: NumberConstructor;
                        selectComponentClass: StringConstructor;
                        itemRender: import("vue").PropType<(opt: {
                            page: number;
                            type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                            originalElement: any;
                        }) => any>;
                        role: StringConstructor;
                        responsive: BooleanConstructor;
                        showLessItems: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                        onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                        'onUpdate:current': import("vue").PropType<(current: number) => void>;
                        'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                    }>>;
                };
                prefixCls: StringConstructor;
                rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
                renderItem: import("vue").PropType<(opt: {
                    item: any;
                    index: number;
                }) => any>;
                size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
                split: {
                    type: BooleanConstructor;
                    default: any;
                };
                header: import("vue-types").VueTypeValidableDef<any>;
                footer: import("vue-types").VueTypeValidableDef<any>;
                locale: {
                    type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
                };
            }>>;
        };
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {
        dataSource: any[];
        value: unknown[];
        rowKey: string;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        listProps: Partial<import("vue").ExtractPropTypes<{
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            dataSource: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            grid: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListGridType>;
                default: import("ant-design-vue/es/list").ListGridType;
            };
            itemLayout: import("vue").PropType<import("ant-design-vue/es/list").ListItemLayout>;
            loading: {
                type: import("vue").PropType<boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes)>;
                default: boolean | (Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>> & import("vue").HTMLAttributes);
            };
            loadMore: import("vue-types").VueTypeValidableDef<any>;
            pagination: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>>;
                default: false | Partial<import("vue").ExtractPropTypes<{
                    position: import("vue").PropType<import("ant-design-vue/es/pagination/Pagination").PaginationPosition>;
                    total: NumberConstructor;
                    defaultCurrent: NumberConstructor;
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    current: NumberConstructor;
                    defaultPageSize: NumberConstructor;
                    pageSize: NumberConstructor;
                    hideOnSinglePage: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showSizeChanger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    pageSizeOptions: import("vue").PropType<(string | number)[]>;
                    buildOptionText: import("vue").PropType<(opt: {
                        value: any;
                    }) => any>;
                    showQuickJumper: {
                        type: import("vue").PropType<boolean | {
                            goButton?: any;
                        }>;
                        default: boolean | {
                            goButton?: any;
                        };
                    };
                    showTotal: import("vue").PropType<(total: number, range: [number, number]) => any>;
                    size: import("vue").PropType<"default" | "small">;
                    simple: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    locale: ObjectConstructor;
                    prefixCls: StringConstructor;
                    selectPrefixCls: StringConstructor;
                    totalBoundaryShowSizeChanger: NumberConstructor;
                    selectComponentClass: StringConstructor;
                    itemRender: import("vue").PropType<(opt: {
                        page: number;
                        type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
                        originalElement: any;
                    }) => any>;
                    role: StringConstructor;
                    responsive: BooleanConstructor;
                    showLessItems: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    onChange: import("vue").PropType<(page: number, pageSize: number) => void>;
                    onShowSizeChange: import("vue").PropType<(current: number, size: number) => void>;
                    'onUpdate:current': import("vue").PropType<(current: number) => void>;
                    'onUpdate:pageSize': import("vue").PropType<(size: number) => void>;
                }>>;
            };
            prefixCls: StringConstructor;
            rowKey: import("vue").PropType<import("ant-design-vue/es/_util/type").Key | ((item: any) => import("ant-design-vue/es/_util/type").Key)>;
            renderItem: import("vue").PropType<(opt: {
                item: any;
                index: number;
            }) => any>;
            size: import("vue").PropType<import("ant-design-vue/es/list").ListSize>;
            split: {
                type: BooleanConstructor;
                default: any;
            };
            header: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/list").ListLocale>;
            };
        }>>;
        labelKey: string;
    }>;
    MulitSelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
    }>;
    RadioSelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
    }, unknown, {
        inputValue: string;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
    }>;
    RadioVerticalFormItem: import("vue").DefineComponent<{
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
    RadioButtonFormItem: import("vue").DefineComponent<{
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
    RadioCustomFormItem: import("vue").DefineComponent<{
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
    RadioHorizontalFormItem: import("vue").DefineComponent<{
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
    SelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeDef<string | number> & {
            default: string | number;
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
    }>;
    TransferSelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
    TreeSelectFormItem: import("vue").DefineComponent<{
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
    }>;
    TreeMulitSelectFormItem: import("vue").DefineComponent<{
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
    TreeSelectLeafFormItem: import("vue").DefineComponent<any, unknown, unknown, {
        targetDataSource(): any;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {} | {
        [x: string]: any;
    }>;
    TreeSelectLeafMulitFormItem: import("vue").DefineComponent<any, unknown, unknown, {
        targetDataSource(): any;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {} | {
        [x: string]: any;
    }>;
    TableFormItem: import("vue").DefineComponent<{
        tableProps: import("vue-types").VueTypeValidableDef<import("ant-design-vue/es/table").TableProps<any>> & {
            default: () => import("ant-design-vue/es/table").TableProps<any>;
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tableProps: import("vue-types").VueTypeValidableDef<import("ant-design-vue/es/table").TableProps<any>> & {
            default: () => import("ant-design-vue/es/table").TableProps<any>;
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {
        rowKey: string;
        tableProps: import("ant-design-vue/es/table").TableProps<any>;
    }>;
    TableSelectFormItem: import("vue").DefineComponent<{
        selectProps: import("vue-types").VueTypeValidableDef<import("ant-design-vue/es/table").TableProps<any>> & {
            default: () => import("ant-design-vue/es/table").TableProps<any>;
        };
        tableProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, unknown, {
        inputValue: string;
        selectedRowKeys: string[];
        selectedRows: any;
    }, {}, {
        $renderDropdownRender(): JSX.Element;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        selectProps: import("vue-types").VueTypeValidableDef<import("ant-design-vue/es/table").TableProps<any>> & {
            default: () => import("ant-design-vue/es/table").TableProps<any>;
        };
        tableProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        value: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {
        dataSource: any[];
        value: string;
        rowKey: string;
        selectProps: import("ant-design-vue/es/table").TableProps<any>;
        labelKey: string;
        tableProps: Partial<import("vue").ExtractPropTypes<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
    }>;
    TableMulitSelectFormItem: import("vue").DefineComponent<{
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        tableProps: import("vue-types").VueTypeValidableDef<import("ant-design-vue/es/table").TableProps<any>> & {
            default: () => import("ant-design-vue/es/table").TableProps<any>;
        };
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }, unknown, {
        inputValue: string;
        selectedRowKeys: unknown[];
        selectedRows: any[];
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
                onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        tableProps: import("vue-types").VueTypeValidableDef<import("ant-design-vue/es/table").TableProps<any>> & {
            default: () => import("ant-design-vue/es/table").TableProps<any>;
        };
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        rowKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        labelKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {
        dataSource: any[];
        value: unknown[];
        rowKey: string;
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
            onSelect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
            onDeselect: import("vue").PropType<import("ant-design-vue/es/vc-select/Select").SelectHandler<(string | number) | import("ant-design-vue/es/select").LabeledValue, import("ant-design-vue/es/select").DefaultOptionType>>;
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
        labelKey: string;
        tableProps: import("ant-design-vue/es/table").TableProps<any>;
    }>;
    TransferFormItem: import("vue").DefineComponent<{
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
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
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
        dataSource: import("vue-types").VueTypeValidableDef<any[]> & {
            default: () => any[];
        };
        value: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
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
    }>;
    CascaderFormItem: import("vue").DefineComponent<{
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
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
            loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
            showSearch: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
                onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
                loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
                showSearch: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                    default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                    selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
            loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
            showSearch: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
                onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
                loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
                showSearch: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                    default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                    selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
            loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
            showSearch: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
    CascaderLeafFormItem: import("vue").DefineComponent<{
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
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
            loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
            showSearch: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
                onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
                loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
                showSearch: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                    default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                    selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
    }, unknown, unknown, {
        targetDataSource(): any;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
            loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
            showSearch: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
                onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
                loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
                showSearch: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                    default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                    selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
            onChange: import("vue").PropType<(value: import("ant-design-vue/es/vc-cascader/Cascader").ValueType, selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | import("ant-design-vue/es/vc-cascader").DefaultOptionType[][]) => void>;
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
            loadData: import("vue").PropType<(selectOptions: import("ant-design-vue/es/vc-cascader").DefaultOptionType[]) => void>;
            showSearch: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>>;
                default: boolean | import("ant-design-vue/es/vc-cascader").ShowSearchType<import("ant-design-vue/es/vc-cascader").DefaultOptionType>;
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
                selectedOptions?: import("ant-design-vue/es/vc-cascader").DefaultOptionType[] | undefined;
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
