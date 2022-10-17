import { CSSProperties, VNode } from 'vue';
export interface IColumnConfig {
    dataIndex: string;
    isFixed: boolean;
    width: string | number;
    className: string;
    style: CSSProperties;
}
export interface ITableConfig {
    columns: IColumnConfig[];
    dataSource: object[];
}
export interface IIndicatorTableConfig {
    columns: IColumnConfig[];
    dataSource: object;
}
export interface IMasterItem extends ITableConfig {
    title: string | VNode;
    className: string;
    style: CSSProperties;
    fixedWrapClassName: string;
    fixedWrapStyle: CSSProperties;
    autoWrapClassName: string;
    autoWrapStyle: CSSProperties;
    autoInnerClassName: string;
    autoInnerStyle: CSSProperties;
}
/**
 * ICascadeComparedProps
 * @interface ICascadeComparedProps
 */
export interface ICascadeComparedProps {
    className?: string;
    indicatorClassName?: string;
    indicatorStyle?: string;
    indicatorFixedWrapClassName?: string;
    indicatorFixedWrapStyle?: string;
    indicatorAutoWrapClassName?: string;
    indicatorAutoWrapStyle?: string;
    masterClassName?: string;
    masterStyle?: string;
    masterInnerClassName?: string;
    masterInnerStyle?: string;
    masterStickFixedClassName?: string;
    masterStickFixedStyle?: string;
    masterStickInnerClassName?: string;
    masterStickInnerStyle?: string;
    indicator: IIndicatorTableConfig;
    master: IMasterItem[];
    defaultCellWidth: number | string;
}
export interface IComponent {
    isUse(): boolean;
    use(Vue: any): void;
}
