import { CreateElement } from 'vue';
import { DataItem, RenderDetail, TableGridLayoutProps } from './types';
declare const renderGridSearchFormGroup: (h: CreateElement, context: {
    $slots: any;
}, data?: DataItem[], props?: Omit<TableGridLayoutProps, 'data'>) => JSX.Element;
/**
 * getRenderDetail
 * @description 获取渲染细节
 * @param h
 * @param context
 * @param data - 组数据
 * @param props - 配置
 * @return RenderDetail
 */
declare const getRenderDetail: (h: CreateElement, context: {
    $slots: any;
}, data: DataItem[], props: Omit<TableGridLayoutProps, 'data'>) => RenderDetail;
/**
 * Label
 * @description 左侧Label
 * @param props
 * @constructor
 */
declare const Label: any;
/**
 * Value
 * @description 右侧Value
 * @param props
 * @constructor
 */
declare const Value: any;
declare const TableGridLayout: any;
export { TableGridLayout, renderGridSearchFormGroup, getRenderDetail, Label, Value };
