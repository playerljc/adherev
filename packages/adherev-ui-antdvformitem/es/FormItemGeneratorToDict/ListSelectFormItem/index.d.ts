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
export default _default;
