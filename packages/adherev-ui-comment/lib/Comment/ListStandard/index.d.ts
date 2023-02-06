import { VNode } from 'vue';
declare type dataKey = {
    current: string;
    totalPage: string;
    list: string;
    totalCount: string;
};
export declare const listStandardProps: {
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    flexLayoutProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        direction: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            direction: import("vue-types").VueTypeDef<string> & {
                default: string;
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
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    fetchData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    dataKeys: import("vue-types").VueTypeValidableDef<dataKey> & {
        default: () => dataKey;
    };
    renderEmpty: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderList: import("vue-types").VueTypeValidableDef<(params?: any) => VNode | null>;
};
declare const _default: import("vue").DefineComponent<{
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    flexLayoutProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        direction: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            direction: import("vue-types").VueTypeDef<string> & {
                default: string;
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
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    fetchData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    dataKeys: import("vue-types").VueTypeValidableDef<dataKey> & {
        default: () => dataKey;
    };
    renderEmpty: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderList: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    flexLayoutProps: import("vue-types").VueTypeValidableDef<Partial<import("vue").ExtractPropTypes<{
        direction: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
    }>>> & {
        default: () => Partial<import("vue").ExtractPropTypes<{
            direction: import("vue-types").VueTypeDef<string> & {
                default: string;
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
    limit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    fetchData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    dataKeys: import("vue-types").VueTypeValidableDef<dataKey> & {
        default: () => dataKey;
    };
    renderEmpty: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderFirstLoading: import("vue-types").VueTypeValidableDef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderList: import("vue-types").VueTypeValidableDef<(params?: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
}>>, {
    dataKeys: dataKey;
    limit: number;
    flexLayoutProps: Partial<import("vue").ExtractPropTypes<{
        direction: import("vue-types").VueTypeDef<string> & {
            default: string;
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
}>;
export default _default;
