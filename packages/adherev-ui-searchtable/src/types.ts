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
  renderSearchForm(h: CreateElement): VNode | null;

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
  onSubTableChange(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<object> | SorterResult<object>[],
    extra: TableCurrentDataSource<object>,
  ): void;

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
  getScopedSlots(): Object;
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

/**
 * TableDensity
 */
export enum TableDensity {
  DEFAULT = 'default',
  MIDDLE = 'middle',
  SMALL = 'small',
}
