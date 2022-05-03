import { VNode } from 'vue';
import { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig, TableRowSelection } from 'ant-design-vue/lib/table/interface';
/**
 * IOverview
 */
export interface IOverview {
    /**
     * isShowNumber - 表格是否显示序号
     * @return boolean
     */
    isShowNumber(): boolean;
    /**
     * getTableNumberColumnWidth - 表格序号列的宽度
     * @return number
     */
    getTableNumberColumnWidth(): number;
    /**
     * getNumberGeneratorRule - 获取符号列的生成规则
     */
    getNumberGeneratorRule(): string;
    /**
     * getRowKey - 获取表格的主键属性
     * @return string
     */
    getRowKey(): string;
    /**
     * getData - 获取表格数据
     * @return Array<Object>
     */
    getData(): Array<object>;
    /**
     * getColumns - 获取表格列的信息
     * @return Array<object>
     */
    getColumns(): Array<ColumnType<object>>;
    /**
     *
     * getRowSelection - 获取表格行选择对象
     */
    getRowSelection(): TableRowSelection<object>;
    /**
     * renderSearchForm - 渲染查询的UI
     */
    renderSearchForm(): VNode | null;
    /**
     * getTotal - 获取表格数据的总数
     */
    getTotal(): number;
    /**
     * getOrderFieldProp - 获取表格的排序字段
     */
    getOrderFieldProp(): string;
    /**
     * getOrderProp - 获取表格的排序属性
     */
    getOrderProp(): string;
    /**
     * onSubTableChange - 获取表格change句柄
     * @param pagination
     * @param filters
     * @param sorter
     * @param extra
     */
    onSubTableChange(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<object> | SorterResult<object>[], extra: TableCurrentDataSource<object>): void;
    /**
     * clear - 清除操作
     */
    clear(): Promise<any>;
    /**
     * renderSearchFooterItems - 渲染SearchFooter的按钮组
     */
    renderSearchFooterItems(): VNode[] | null;
    /**
     * onSearch - 进行查询
     */
    onSearch(): void;
    /**
     * 获取列的ScopeSlots
     */
    getScopedSlots(): VNode | VNode[] | number;
}
export interface ISearchTableProps {
    wrapStyle?: string;
    className?: string;
    tableClassName?: string;
    tableStyle?: string;
    searchClassName?: string;
    searchStyle?: string;
    reset?: boolean;
    antdTableProps?: any;
    isShowExpandSearch?: boolean;
    defaultExpandSearchCollapse?: boolean;
    fitSearch?: boolean;
    fitTable?: boolean;
    autoFixed?: boolean;
    fixedHeaderAutoTable?: boolean;
    fixedTableSpaceBetween?: boolean;
}
export interface ISearchTableData {
    page: number;
    limit: number;
    expand: boolean;
    scrollY: number;
    selectedRowKeys?: any[];
    loading?: any;
    searchParams?: any;
}
export interface ISearchTableMethods extends IOverview {
    onScrollBodyScroll(): void;
    getScrollHeaderEl(): HTMLElement | null;
    getScrollBodyEl(): HTMLElement | null;
    renderTableNumberColumn(number: string, params: {
        record: object;
        index: number;
    }): void;
    renderSearchTableInner(): void;
    renderInner(): void;
    renderSearchTableSearchFooter(): void;
    renderSearchFooter(): void;
    renderSearchTableTable(): void;
    renderTable(): void;
    getSearchTableTableColumns(): Array<any>;
    getTableColumns(): Array<any>;
    onTableChange(pagination: any, filters: any, sorter: any): void;
    onClear(): void;
    sortOrder(columnName: string): string;
    getSearchTablePagination(): void;
    getPagination(): void;
    renderSearchTable(): void;
    fetchData(): void;
    renderSuspense(): void;
    getOrderFieldValue(): void;
    getOrderPropValue(): void;
    getParams(): void;
}
export interface ISearchTableSelf extends ISearchTableProps, ISearchTableData, ISearchTableMethods {
    $refs: any;
    $slots: any;
    $nextTick(handler: () => {}): void;
}
export interface ISearchFormProps {
    className?: string;
}
export interface ISearchFormSelf extends ISearchFormProps {
    $slots: any;
}
/**
 * IColumnSetting
 */
export interface IColumnSetting {
    display: boolean;
    sort: number;
}
/**
 * columnHeaderAlign
 */
export declare enum columnHeaderAlign {
    center = "center",
    left = "left",
    right = "right"
}
/**
 * TableDensity
 */
export declare enum TableDensity {
    DEFAULT = "default",
    MIDDLE = "middle",
    SMALL = "small"
}
