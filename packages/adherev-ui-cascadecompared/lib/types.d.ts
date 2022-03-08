import { CSSProperties } from 'vue';
export interface IColumnConfig {
    dataIndex: string;
    isFixed: boolean;
    width: string | number;
    render?: (config: IColumnConfig, dataSource: object) => any | Object;
    className: string;
    style: CSSProperties;
}
export interface ITableConfig {
    columns: Array<IColumnConfig>;
    dataSource: Array<object>;
}
export interface IIndicatorTableConfig {
    columns: Array<IColumnConfig>;
    dataSource: object;
}
export interface IMasterItem extends ITableConfig {
    title: Function | Object;
    className: string;
    style: CSSProperties;
    fixedWrapClassName: string;
    fixedWrapStyle: CSSProperties;
    autoWrapClassName: string;
    autoWrapStyle: CSSProperties;
    autoInnerClassName: string;
    autoInnerStyle: CSSProperties;
}
export interface IComponent {
    isUse(): boolean;
    use(Vue: any): void;
}
