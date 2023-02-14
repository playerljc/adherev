import type { FormInstance, FormListFieldData, FormListOperation } from 'ant-design-vue/es/form';
import type { Rule } from 'ant-design-vue/lib/form/index';
import {
  ColumnType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
  TableRowSelection,
} from 'ant-design-vue/lib/table/interface';
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
  onSubTableChange: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<object> | SorterResult<object>[],
    extra: TableCurrentDataSource<object>,
  ) => void;

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
export enum columnHeaderAlign {
  center = 'center',
  left = 'left',
  right = 'right',
}

export type FormItemType =
  | 'input'
  | 'textArea'
  | 'inputNumber'
  | 'inputNumberDecimal1'
  | 'inputNumberDecimal2'
  | 'inputNumberInteger'
  | 'select'
  | 'multiSelect'
  | 'checkAllMultiSelect'
  | 'autoCompleteSelect'
  | 'autoCompleteSelectMulti'
  | 'autoCompleteSelectCheckAllMulti'
  | 'radioHorizontal'
  | 'radioButton'
  | 'radioSelect'
  | 'radioCustom'
  | 'checkBoxHorizontal'
  | 'checkBoxCheckAllHorizontal'
  | 'checkboxSelect'
  | 'checkBoxCheckAllSelect'
  | 'checkBoxCustom'
  | 'checkBoxCheckAllCustom'
  | 'transferSelect'
  | 'tableSelect'
  | 'tableMultiSelect'
  | 'tablePagingSelect'
  | 'tablePagingMultiSelect'
  | 'listSelect'
  | 'listMultiSelect'
  | 'listPagingSelect'
  | 'listPagingMultiSelect'
  | 'treeSelect'
  | 'treeMultiSelect'
  | 'treeSelectLeaf'
  | 'treeMultiSelectLeaf'
  | 'cascaderSelect'
  | 'cascaderMultiSelect'
  | 'cascaderSelectLeaf'
  | 'cascaderMultiSelectLeaf'
  | 'datePicker'
  | 'timePicker'
  | 'rangePicker'
  | 'slider'
  | 'sliderRange'
  | 'rate'
  | 'switch'
  | 'custom'
  | string;

/**
 * ColumnSearchConfig
 * @description 列的查询设置
 */
export interface ColumnSearchConfig {
  type: FormItemType;
  // 是否显示
  visible?: boolean;
  // 是否显示在列头上
  showColumnHeader?: boolean;
  // 控件的props
  props?: any;
  // TableGridLayout的Label的attrs
  labelAttrs?: any;
  // TableGridLayout的Value的attrs
  valueAttrs?: any;
  // 权限码
  authority?: string[];
  // 渲染无权限的UI
  renderNoAuthority?: (params?: any) => VNode | null | string;
  // 如果有此属性，则不用column的dataIndex
  dataIndex?: string; //column.dataIndex;
  // 如果有此属性则不用column的title
  title?: VNode; //column.title;
  // dist渲染的组件的字典名称(适用于FormItemGeneratorToDict)
  dictName?: string;
  // children自定义的渲染，适用于FormItemGeneratorToDict的自定义children时候使用
  renderChildren?: (params?: any) => VNode | null | string;
  // 自定义组件的渲染
  render?: () => VNode | null | string;
  // 时间区间控件的startName
  startName?: string;
  // 时间区间控件的endName
  endName?: string;
}

export interface AdvancedSearchPanelGroupData {
  className: string;
  style: string;
  // group名称
  name: string;
  // group的宽度，默认是100%
  width: string | number;
  // 缺省的Label宽度
  defaultLabelWidth: number;
  // 缺省的padding
  padding: number;
  // 列设置 auto表示自适应
  colgroup: number[];
  // 列数
  columnCount: number;
  data: {
    key: string;
    // Label组件
    label: VNode;
    // Value组件
    value: VNode;
  }[];
}

export interface AdvancedSearchPanelTableGridLayoutConfig {
  className?: string;
  style?: string;
  innerClassName?: string;
  innerStyle?: string;
  // 是否有边框
  bordered: boolean;
  // 布局
  layout: 'horizontal' | 'vertical';
  // 密度
  density?: string | number;
  // 是否是奇偶数不同色
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
  record: { [prop: string]: any };
  dataIndex?: number;
  rowIndex: number;
}

/**
 * ColumnRowDragSortConfig
 */
export interface ColumnRowDragSortConfig {}

/**
 * ColumnEditableConfig
 * @description 可编辑的单元格
 */
export interface ColumnEditableConfig {
  // 单元格是否是可编辑的单元格
  editable: boolean;
  // 缺省的状态
  defaultStatus?: 'view' | 'edit' | string;
  // 编辑控件的类型
  type?: FormItemType | string;
  // 自定义的渲染(type是custom的时候)
  render?: (params: {
    form: FormInstance<any> | null;
    dataIndex: string | number | readonly (string | number)[] | undefined;
    record: { [prop: string]: any };
    rowIndex: number;
    value: any;
    // 已经生成好的孩子节点
    children?: VNode;
    // 更新单元格数据的方法
    updateEditorCellData?: () => Promise<void>;
  }) => VNode | string;
  // 点击ToEdit句柄之前触发，resolve则将继续，reject则不能切换状态
  onBeforeToEdit?: (params: ColumnParams) => Promise<void>;
  // 点击了save句柄，resolve则切换到view状态
  onSave?: (params: ColumnParams & { values: any }) => Promise<void>;
  // 点击cancel之前，resolve则切换到view状态
  onBeforeCancel?: (params: ColumnParams) => Promise<void>;
  // formItem的Props
  formItemProps?: any;
  // 组件的props定义
  props?: any;
  listeners?: any;
  // 是否使用句柄来切换状态 view的时候有一个句柄点击后变成编辑状态，编辑的时候有2个句柄，save和cancel，如果设置为false，则关于句柄的事件将不会触发
  useTrigger?: boolean;
  // 渲染查看的句柄
  renderToEditTrigger?: (params: ColumnParams) => VNode | string;
  // 渲染保存的句柄
  renderSaveTrigger?: (params: ColumnParams) => VNode | string;
  // 渲染取消的句柄
  renderCancelTrigger?: (params: ColumnParams) => VNode | string;
  // FormItem的rules
  rules?: Rule[];
  // 如果有此属性，则不用column的dataIndex
  dataIndex?: number;
  // dist渲染的组件的字典名称(适用于FormItemGeneratorToDict)
  dictName?: string;
  // children自定义的渲染，适用于FormItemGeneratorToDict的自定义children时候使用
  renderChildren?: ((params?: any) => VNode | null) | string;
  // 是否一直保持编辑状态，也就是说view和edit都显示的是控件，如果设置为true则相当于设置了useTrigger是false，useTrigger的设置将失效
  // 最好不使用这种模式
  useKeepEdit?: boolean;
}

export interface FormItemGeneratorConfig {
  // 编辑控件的类型
  type?: FormItemType | string;
  // 组件的props定义
  props?: any;
  listeners?: any;
  // dist渲染的组件的字典名称(适用于FormItemGeneratorToDict)
  dictName?: string;
  // children自定义的渲染，适用于FormItemGeneratorToDict的自定义children时候使用
  renderChildren?: (params?: any) => VNode | null;
  // 表单的实例
  form?: FormInstance<any> | null;
  // 行的索引值
  dataIndex?: number;
  // 列的索引值
  rowIndex?: number;
}

/**
 * ColumnTypeExt
 * @description Column列的扩展设置
 */
export interface ColumnTypeExt extends ColumnType<any> {
  // 列的权限设置，有权限才显示，没权限不显示
  $authorized?: () => boolean;
  // 列头是否可以拖动
  $resizable?: boolean;
  // 列是否显示
  $hide?: boolean;
  // 列的查询设置
  $search?: ColumnSearchConfig;
  // 可编辑的单元格
  $editable?: ColumnEditableConfig;
  // 行拖动排序
  $rowDragSort?: ColumnRowDragSortConfig;
}

/**
 * RowEditableConfig
 */
export interface RowEditableConfig {
  // 行是否可以编辑
  editable: boolean;
}

/**
 * RowDragSortConfig
 */
export interface RowDragSortRowConfig {
  [prop: string]: any;
  canDrag?: (params?: { [prop: string]: any }) => boolean;
}

/**
 * RowDragSortBodyConfig
 */
export interface RowDragSortBodyConfig {
  draggableProps?: { [prop: string]: any };
  canDrag?: (params?: { [prop: string]: any }) => boolean;
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
    record: { [prop: string]: any };
    columns: ColumnTypeExt[];
    bodyConfig: BodyConfig;
  }): RowConfig;
}

export interface RowConfigReducer {
  (params: {
    rowIndex: number;
    record: { [prop: string]: any };
    columns: ColumnTypeExt[];
    rowConfig: RowConfig;
  }): RowConfig;
}

export interface CellConfigReducer {
  (params: {
    rowIndex: number;
    column: ColumnTypeExt;
    record: { [prop: string]: any };
    columns: ColumnTypeExt[];
  }): ColumnTypeExt;
}

export interface TableBodyComponentProps {
  bodyConfig: BodyConfig;
}

export interface TableRowComponentProps {
  record: { [prop: string]: any };
  rowIndex: number;
  columns: any[];
  rowKey: string;
  rowConfig: RowConfig;
  [p: string]: any;
}

export interface TableCellComponentProps {
  record: { [prop: string]: any };
  column: ColumnTypeExt;
  rowIndex: number;
  columns: ColumnTypeExt[];
  [p: string]: any;
}

/**
 * TableDensity
 */
export enum TableDensity {
  DEFAULT = 'default',
  MIDDLE = 'middle',
  SMALL = 'small',
}
