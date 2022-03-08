import { ISearchTableData } from './types';
export declare const NUMBER_GENERATOR_RULE_ALONE: unique symbol;
export declare const NUMBER_GENERATOR_RULE_CONTINUITY: unique symbol;
declare const _default: import("vue").DefineComponent<{
    wrapStyle: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableClassName: {
        type: StringConstructor;
        default: string;
    };
    tableStyle: {
        type: StringConstructor;
        default: string;
    };
    searchClassName: {
        type: StringConstructor;
        default: string;
    };
    searchStyle: {
        type: StringConstructor;
        default: string;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    antdTableProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    isShowExpandSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultExpandSearchCollapse: {
        type: BooleanConstructor;
        default: boolean;
    };
    fitSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    fitTable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedHeaderAutoTable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedTableSpaceBetween: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, ISearchTableData, {}, {
    onScrollBodyScroll(): void;
    getScrollHeaderEl(): HTMLElement | null;
    getScrollBodyEl(): HTMLElement | null;
    /**
     * renderTableNumberColumn
     * @description - 渲染序号列
     * @param h
     * @param number
     * @param params
     */
    renderTableNumberColumn(number: string | undefined, params: {
        record: object;
        index: number;
    }): JSX.Element;
    renderSearchTableInner(): JSX.Element;
    /**
     * renderInner
     */
    renderInner(): any;
    renderSearchTableSearchFooter(): JSX.Element;
    /**
     * renderSearchFooter
     */
    renderSearchFooter(): any;
    renderSearchTableTable(): JSX.Element;
    /**
     * renderTable
     * @description - 认选表格体
     * @protected
     */
    renderTable(): any;
    getScopedSlotsInner(row: any): any;
    getSearchTableTableColumns(): Array<any>;
    /**
     * onTableChange - 表格change
     */
    getTableColumns(): Array<any>;
    /**
     * onTableChange
     * @param pagination
     * @param filters
     * @param sorter
     */
    onTableChange(pagination: any, filters: any, sorter: {
        field?: any;
        order: any;
    }): void;
    /**
     * onClear - 清除操作
     */
    onClear(): void;
    /**
     * sortOrder
     * @param columnName
     */
    sortOrder(columnName: string): string;
    /**
     * getSearchTablePagination
     */
    getSearchTablePagination(): {
        onChange: (page: number, limit: number) => void;
        onShowSizeChange: (page: number, limit: number) => void;
        showTotal: (total: any) => any;
        total: any;
        current: any;
        pageSize: any;
        showQuickJumper: boolean;
    };
    /**
     * getPagination - 获取分页信息
     */
    getPagination(): any;
    /**
     * renderSearchTable
     * @description - renderSearchTable
     */
    renderSearchTable(): JSX.Element;
}, {
    created(): void;
    updated(): void;
} | import("vue").DefineComponent<{
    reset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}, unknown, {
    isFirst: boolean;
    isFirstLoading: boolean;
}, {}, {
    renderNormalFirstLoading(): JSX.Element;
    renderFirstLoading(): JSX.Element;
    renderNormal(): JSX.Element;
    renderDispatch(): JSX.Element;
    renderSuspense(): JSX.Element;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    reset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
}>>, {
    reset: boolean;
}>, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    wrapStyle: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableClassName: {
        type: StringConstructor;
        default: string;
    };
    tableStyle: {
        type: StringConstructor;
        default: string;
    };
    searchClassName: {
        type: StringConstructor;
        default: string;
    };
    searchStyle: {
        type: StringConstructor;
        default: string;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    antdTableProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    isShowExpandSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultExpandSearchCollapse: {
        type: BooleanConstructor;
        default: boolean;
    };
    fitSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    fitTable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedHeaderAutoTable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedTableSpaceBetween: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    reset: boolean;
    wrapStyle: string;
    className: string;
    tableClassName: string;
    tableStyle: string;
    searchClassName: string;
    searchStyle: string;
    antdTableProps: Record<string, any>;
    isShowExpandSearch: boolean;
    defaultExpandSearchCollapse: boolean;
    fitSearch: boolean;
    fitTable: boolean;
    autoFixed: boolean;
    fixedHeaderAutoTable: boolean;
    fixedTableSpaceBetween: boolean;
}>;
export default _default;
