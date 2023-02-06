import { Plugin } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            local: string;
            emojiPickerProps: any;
            isMoreProp: string;
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
            commentDataKeys: {
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            };
            commentLimit: number;
            commentKeyProp: string;
            replyDataKeys: {
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            };
            replyLimit: number;
            replyKeyProp: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
            fetchCommentData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
            commentDataKeys: import("vue-types").VueTypeValidableDef<{
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            }> & {
                default: () => {
                    current: string;
                    totalPage: string;
                    list: string;
                    totalCount: string;
                };
            };
            commentLimit: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            commentKeyProp: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            fetchReplyData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
            replyDataKeys: import("vue-types").VueTypeValidableDef<{
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            }> & {
                default: () => {
                    current: string;
                    totalPage: string;
                    list: string;
                    totalCount: string;
                };
            };
            replyLimit: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            replyKeyProp: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            fetchReply: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
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
            isMoreProp: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
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
            local: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            emojiPickerProps: import("vue-types").VueTypeValidableDef<any> & {
                default: any;
            };
            renderReplyLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderCommentLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            showReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            showReplyTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            hideReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            hideReplyTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            loadMoreReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            loadMoreCollapseTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderCommentActions: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderCommentAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderCommentAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderCommentContent: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderCommentDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyActions: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyContent: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "local" | "emojiPickerProps" | "isMoreProp" | "flexLayoutProps" | "listProps" | "commentDataKeys" | "commentLimit" | "commentKeyProp" | "replyDataKeys" | "replyLimit" | "replyKeyProp">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
            fetchCommentData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
            commentDataKeys: import("vue-types").VueTypeValidableDef<{
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            }> & {
                default: () => {
                    current: string;
                    totalPage: string;
                    list: string;
                    totalCount: string;
                };
            };
            commentLimit: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            commentKeyProp: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            fetchReplyData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
            replyDataKeys: import("vue-types").VueTypeValidableDef<{
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            }> & {
                default: () => {
                    current: string;
                    totalPage: string;
                    list: string;
                    totalCount: string;
                };
            };
            replyLimit: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            replyKeyProp: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            fetchReply: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
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
            isMoreProp: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
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
            local: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            emojiPickerProps: import("vue-types").VueTypeValidableDef<any> & {
                default: any;
            };
            renderReplyLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderCommentLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            showReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            showReplyTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            hideReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            hideReplyTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            loadMoreReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            loadMoreCollapseTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>>;
            renderCommentActions: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderCommentAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderCommentAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderCommentContent: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderCommentDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyActions: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyContent: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
            renderReplyDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            local: string;
            emojiPickerProps: any;
            isMoreProp: string;
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
            commentDataKeys: {
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            };
            commentLimit: number;
            commentKeyProp: string;
            replyDataKeys: {
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            };
            replyLimit: number;
            replyKeyProp: string;
        }, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
        fetchCommentData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
        commentDataKeys: import("vue-types").VueTypeValidableDef<{
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        }> & {
            default: () => {
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            };
        };
        commentLimit: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        commentKeyProp: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        fetchReplyData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
        replyDataKeys: import("vue-types").VueTypeValidableDef<{
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        }> & {
            default: () => {
                current: string;
                totalPage: string;
                list: string;
                totalCount: string;
            };
        };
        replyLimit: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        replyKeyProp: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        fetchReply: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
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
        isMoreProp: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
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
        local: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        emojiPickerProps: import("vue-types").VueTypeValidableDef<any> & {
            default: any;
        };
        renderReplyLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        renderCommentLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        showReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        showReplyTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        hideReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        hideReplyTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        loadMoreReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        loadMoreCollapseTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        renderCommentActions: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        renderCommentAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        renderCommentAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        renderCommentContent: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        renderCommentDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        renderReplyActions: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        renderReplyAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        renderReplyAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        renderReplyContent: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        renderReplyDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    getScrollWrapContainer: import("vue-types").VueTypeValidableDef<() => HTMLElement | null>;
    fetchCommentData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    commentDataKeys: import("vue-types").VueTypeValidableDef<{
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    }> & {
        default: () => {
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        };
    };
    commentLimit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    commentKeyProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fetchReplyData: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
    replyDataKeys: import("vue-types").VueTypeValidableDef<{
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    }> & {
        default: () => {
            current: string;
            totalPage: string;
            list: string;
            totalCount: string;
        };
    };
    replyLimit: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    replyKeyProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    fetchReply: import("vue-types").VueTypeValidableDef<(params?: any) => Promise<any>>;
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
    isMoreProp: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
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
    local: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    emojiPickerProps: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    renderReplyLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCommentLoading: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    showReplyTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    hideReplyTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreReplyText: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    loadMoreCollapseTextIcon: import("vue-types").VueTypeValidableDef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    renderCommentActions: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentContent: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderCommentDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyActions: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyAuthor: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyAvatar: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyContent: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    renderReplyDateTime: import("vue-types").VueTypeValidableDef<(params?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    local: string;
    emojiPickerProps: any;
    isMoreProp: string;
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
    commentDataKeys: {
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    };
    commentLimit: number;
    commentKeyProp: string;
    replyDataKeys: {
        current: string;
        totalPage: string;
        list: string;
        totalCount: string;
    };
    replyLimit: number;
    replyKeyProp: string;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
