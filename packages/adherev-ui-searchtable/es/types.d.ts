import type { FormInstance } from 'ant-design-vue/es/form';
import type { Rule } from 'ant-design-vue/lib/form/index';
import { ColumnType, FilterValue, SorterResult, TableCurrentDataSource, TablePaginationConfig, TableRowSelection } from 'ant-design-vue/lib/table/interface';
import type { Column } from 'ant-design-vue/types/table/column';
import { CreateElement, VNode } from 'vue';
/**
 * IOverview
 */
export interface IOverview {
    /**
     * isShowNumber - 表格是否显示序号
     * @return boolean
     */
    isShowNumber: () => boolean;
    /**
     * getTableNumberColumnWidth - 表格序号列的宽度
     * @return number
     */
    getTableNumberColumnWidth: () => number;
    /**
     * getNumberGeneratorRule - 获取符号列的生成规则
     */
    getNumberGeneratorRule: () => string;
    /**
     * getRowKey - 获取表格的主键属性
     * @return string
     */
    getRowKey: () => string;
    /**
     * getData - 获取表格数据
     * @return Array<Object>
     */
    getData: () => object[];
    /**
     * getColumns - 获取表格列的信息
     * @return Array<object>
     */
    getColumns: () => ColumnType<object>[];
    /**
     *
     * getRowSelection - 获取表格行选择对象
     */
    getRowSelection: () => TableRowSelection<object>;
    /**
     * renderSearchForm - 渲染查询的UI
     */
    renderSearchForm: (h: CreateElement) => VNode | null;
    /**
     * getTotal - 获取表格数据的总数
     */
    getTotal: () => number;
    /**
     * getOrderFieldProp - 获取表格的排序字段
     */
    getOrderFieldProp: () => string;
    /**
     * getOrderProp - 获取表格的排序属性
     */
    getOrderProp: () => string;
    /**
     * onSubTableChange - 获取表格change句柄
     * @param pagination
     * @param filters
     * @param sorter
     * @param extra
     */
    onSubTableChange: (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<object> | SorterResult<object>[], extra: TableCurrentDataSource<object>) => void;
    /**
     * clear - 清除操作
     */
    clear: () => Promise<any>;
    /**
     * renderSearchFooterItems - 渲染SearchFooter的按钮组
     */
    renderSearchFooterItems: () => VNode[] | null;
    /**
     * onSearch - 进行查询
     */
    onSearch: () => void;
    /**
     * 获取列的ScopeSlots
     */
    getScopedSlots: () => object;
}
/**
 * IColumnSetting
 */
export interface IColumnSetting extends Column {
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
export type FormItemType = 'input' | 'textArea' | 'inputNumber' | 'inputNumberDecimal1' | 'inputNumberDecimal2' | 'inputNumberInteger' | 'select' | 'multiSelect' | 'checkAllMultiSelect' | 'autoCompleteSelect' | 'autoCompleteSelectMulti' | 'autoCompleteSelectCheckAllMulti' | 'radioHorizontal' | 'radioButton' | 'radioSelect' | 'radioCustom' | 'checkBoxHorizontal' | 'checkBoxCheckAllHorizontal' | 'checkboxSelect' | 'checkBoxCheckAllSelect' | 'checkBoxCustom' | 'checkBoxCheckAllCustom' | 'transferSelect' | 'tableSelect' | 'tableMultiSelect' | 'tablePagingSelect' | 'tablePagingMultiSelect' | 'listSelect' | 'listMultiSelect' | 'listPagingSelect' | 'listPagingMultiSelect' | 'treeSelect' | 'treeMultiSelect' | 'treeSelectLeaf' | 'treeMultiSelectLeaf' | 'cascaderSelect' | 'cascaderMultiSelect' | 'cascaderSelectLeaf' | 'cascaderMultiSelectLeaf' | 'datePicker' | 'timePicker' | 'rangePicker' | 'slider' | 'sliderRange' | 'rate' | 'switch' | 'custom' | string;
/**
 * ColumnSearchConfig
 * @description 列的查询设置
 */
export interface ColumnSearchConfig {
    type: FormItemType;
    visible?: boolean;
    showColumnHeader?: boolean;
    props?: any;
    labelAttrs?: any;
    valueAttrs?: any;
    authority?: string[];
    renderNoAuthority?: (params?: any) => VNode | null | string;
    dataIndex?: string;
    title?: VNode;
    dictName?: string;
    renderChildren?: (params?: any) => VNode | null | string;
    render?: () => VNode | null | string;
    startName?: string;
    endName?: string;
}
export interface AdvancedSearchPanelGroupData {
    className: string;
    style: string;
    name: string;
    width: string | number;
    defaultLabelWidth: number;
    padding: number;
    colgroup: number[];
    columnCount: number;
    data: {
        key: string;
        label: VNode;
        value: VNode;
    }[];
}
export interface AdvancedSearchPanelTableGridLayoutConfig {
    className?: string;
    style?: string;
    innerClassName?: string;
    innerStyle?: string;
    bordered: boolean;
    layout: 'horizontal' | 'vertical';
    density?: string | number;
    parity?: boolean;
}
export interface AdvancedSearchPanelSearchConfig {
    rowCount: string;
    showStrategy: string;
    advancedSearch: {
        className: string;
        style: string;
        width: number | string;
        mask: boolean;
        zIndex: number;
        time: number;
        direction: string;
        collapse: boolean;
        getPopupContainer: Function;
        onBeforeShow: Function;
        onBeforeClose: Function;
        onAfterShow: Function;
        onAfterClose: Function;
    };
    renderTitleLabel?: Function;
    renderCollapse?: Function;
    renderSearchButton?: Function;
    insertSearchButton?: Function;
}
export interface AdvancedSearchPanelProps {
    groupData: AdvancedSearchPanelGroupData[];
    tableGridLayoutConfig: AdvancedSearchPanelTableGridLayoutConfig;
    remainingGroupData: AdvancedSearchPanelGroupData[];
    advancedSearchConfig: AdvancedSearchPanelSearchConfig;
    onSearch: Function;
    onReset: Function;
    onCollapse: Function;
}
export interface ColumnParams {
    value: string;
    record: {
        [prop: string]: any;
    };
    dataIndex?: number;
    rowIndex: number;
}
/**
 * ColumnRowDragSortConfig
 */
export interface ColumnRowDragSortConfig {
}
/**
 * ColumnEditableConfig
 * @description 可编辑的单元格
 */
export interface ColumnEditableConfig {
    editable: boolean;
    defaultStatus?: 'view' | 'edit' | string;
    type?: FormItemType | string;
    render?: (params: {
        form: FormInstance<any> | null;
        dataIndex: string | number | readonly (string | number)[] | undefined;
        record: {
            [prop: string]: any;
        };
        rowIndex: number;
        value: any;
        children?: VNode;
        updateEditorCellData?: () => Promise<void>;
    }) => VNode | string;
    onBeforeToEdit?: (params: ColumnParams) => Promise<void>;
    onSave?: (params: ColumnParams & {
        values: any;
    }) => Promise<void>;
    onBeforeCancel?: (params: ColumnParams) => Promise<void>;
    formItemProps?: any;
    props?: any;
    listeners?: any;
    useTrigger?: boolean;
    renderToEditTrigger?: (params: ColumnParams) => VNode | string;
    renderSaveTrigger?: (params: ColumnParams) => VNode | string;
    renderCancelTrigger?: (params: ColumnParams) => VNode | string;
    rules?: Rule[];
    dataIndex?: number;
    dictName?: string;
    renderChildren?: ((params?: any) => VNode | null) | string;
    useKeepEdit?: boolean;
}
export interface FormItemGeneratorConfig {
    type?: FormItemType | string;
    props?: any;
    listeners?: any;
    dictName?: string;
    renderChildren?: (params?: any) => VNode | null;
    form?: FormInstance<any> | null;
    dataIndex?: number;
    rowIndex?: number;
}
/**
 * ColumnTypeExt
 * @description Column列的扩展设置
 */
export interface ColumnTypeExt extends ColumnType<any> {
    $authorized?: () => boolean;
    $resizable?: boolean;
    $hide?: boolean;
    $search?: ColumnSearchConfig;
    $editable?: ColumnEditableConfig;
    $rowDragSort?: ColumnRowDragSortConfig;
}
/**
 * RowEditableConfig
 */
export interface RowEditableConfig {
    editable: boolean;
}
/**
 * RowDragSortConfig
 */
export interface RowDragSortRowConfig {
    [prop: string]: any;
    canDrag?: (params?: {
        [prop: string]: any;
    }) => boolean;
}
/**
 * RowDragSortBodyConfig
 */
export interface RowDragSortBodyConfig {
    draggableProps?: {
        [prop: string]: any;
    };
    canDrag?: (params?: {
        [prop: string]: any;
    }) => boolean;
}
/**
 * RowConfig
 */
export interface RowConfig {
    $editable?: RowEditableConfig;
    $rowDragSort?: RowDragSortRowConfig;
}
export interface BodyConfig {
    $bodyDragSort?: RowDragSortBodyConfig;
}
export interface BodyConfigReducer {
    (params: {
        rowIndex: number;
        record: {
            [prop: string]: any;
        };
        columns: ColumnTypeExt[];
        bodyConfig: BodyConfig;
    }): RowConfig;
}
export interface RowConfigReducer {
    (params: {
        rowIndex: number;
        record: {
            [prop: string]: any;
        };
        columns: ColumnTypeExt[];
        rowConfig: RowConfig;
    }): RowConfig;
}
export interface CellConfigReducer {
    (params: {
        rowIndex: number;
        column: ColumnTypeExt;
        record: {
            [prop: string]: any;
        };
        columns: ColumnTypeExt[];
    }): ColumnTypeExt;
}
export interface TableBodyComponentProps {
    bodyConfig: BodyConfig;
}
export interface TableRowComponentProps {
    record: {
        [prop: string]: any;
    };
    rowIndex: number;
    columns: any[];
    rowKey: string;
    rowConfig: RowConfig;
    [p: string]: any;
}
export interface TableCellComponentProps {
    record: {
        [prop: string]: any;
    };
    column: ColumnTypeExt;
    rowIndex: number;
    columns: ColumnTypeExt[];
    [p: string]: any;
}
/**
 * TableDensity
 */
export declare enum TableDensity {
    DEFAULT = "default",
    MIDDLE = "middle",
    SMALL = "small"
}
